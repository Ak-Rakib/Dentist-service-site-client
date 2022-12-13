import React from 'react';
import './Service.css';
import image1 from '../../../assets/images/fluoride.png'
import image2 from '../../../assets/images/cavity.png'
import image3 from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Service = () => {

    const services = [
        {
            id: 1,
            name: "Fluoride Treatment",
            image: image1,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },


        {
            id: 2,
            name: "Cavity Filling",
            image: image2,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },


        {
            id: 3,
            name: "Teeth Whitening",
            image: image3,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]

    return (
        <div className='text-center mt-36'>
            <h1 className='text-color 3xl-text font-bold'>OUR SERVICES</h1>
            <h1 className='text-2xl'>Services We Provide</h1>
            <div className='grid gap-8 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service.id}
                        service = {service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;