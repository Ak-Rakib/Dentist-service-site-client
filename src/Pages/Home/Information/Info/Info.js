import React from 'react';
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {

    const information = [
        {
            id: 1,
            name: "Opening Hours",
            icon: clock,
            description: "Lorem Ipsum is simply dummy text of the pri" 
        }, 

        {
            id: 2,
            name: "Visit our location",
            icon: marker,
            description: "Brooklyn, NY 10036, United States" 
        },

        {
            id: 3,
            name: "Contact us now",
            icon: phone,
            description: "+000 123 456789" 
        }
    ]

    return (
        <div className='grid gap-8 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                information.map(info => <InfoCard
                    key={info.id}
                    info = {info}
                ></InfoCard>)
            }
        </div>
    );
};

export default Info;