import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { signUp, googleSignUp, profileUpdate } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUpHandler = (data) => {
    setRegisterError("");

    signUp(data.email, data.password, data.name)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Your register successfully");
        const userInfo = {
          displayName: data.name,
        };
        console.log(userInfo);

        profileUpdate(userInfo)
          .then(() => {
            userSaveToDatabase(data.name, data.email);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(error.message);
      });
  };


  const googleHandler = () => {
    googleSignUp(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  const userSaveToDatabase = (name, email) => {
    const user = {
      name,
      email,
    };
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        getUserToken(email);
      });
  };

  const getUserToken = email => {
      fetch(`http://localhost:5000/jwt?email=${email}`)
      .then(res => res.json())
      .then(data => {
        if(data.AccessToken){
          localStorage.setItem('accessToken', data.AccessToken)
          navigate("/");
        }
      })
  }


  return (
    <div className="flex justify-center items-center mt-28">
      <div className="w-96 p-6">
        <h4 className="text-3xl text-center">Sign Up</h4>
        <form onSubmit={handleSubmit(signUpHandler)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", {
                required: "Name address is required",
              })}
              className="p-1 rounded"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email address is required" })}
              className="p-1 rounded"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                minLength: {
                  value: 6,
                  message: "At least 6 character or more",
                },
                pattern: {
                  value: /(?=.*[0-9])(?=.*[!@#$%^&*])/,
                  message: "password must be strong",
                },
              })}
              className="p-1 rounded"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <div>
            {registerError && <p className="text-red-600">{registerError}</p>}
          </div>
          <input
            className="btn btn-primary bg-back w-full mt-3"
            type="submit"
          />
        </form>
        <p className="text-center mt-1">
          Already have an account?{" "}
          <Link className="text-color" to="/login">
            Please Login
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button
          onClick={googleHandler}
          className="btn btn-bg-back-outline w-full"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Register;
