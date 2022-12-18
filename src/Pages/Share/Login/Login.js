import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useToken from "../../../UseHooke/UseToken";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [token] = useToken(createdUserEmail);
  if(token){
    navigate(from, { replace: true });
  }


  const submitHandler = (data) => {
    console.log(data);
    setLoginError("");
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setCreatedUserEmail(data.email);
        data.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center mt-28">
      <div className="w-96 p-6">
        <h4 className="text-3xl text-center">Login</h4>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-control w-full">
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
              })}
              className="p-1 rounded"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <div>
              {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
            <label className="label">
              <span className="label-text">Forget password?</span>
            </label>
          </div>
          <input className="btn btn-primary bg-back w-full" type="submit" />
        </form>
        <p className="text-center mt-1">
          New to Doctors Portal?{" "}
          <Link className="text-color" to="/register">
            Create New Account
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-bg-back-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
