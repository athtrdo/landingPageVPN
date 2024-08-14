import React from 'react';
import star from "../assets/Vector.png";

export default function CardTestimonial({name,address, comment}) {
  return (
    <div className={`border justify-center 
    rounded-lg p-5 max-w-xl h-52 container max-w-6xl mx-auto`}
    >
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row space-x-5">
                <img
                src="https://images.pexels.com/photos/4620806/pexels-photo-4620806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="w-10 h-10 rounded-full"
                alt="testi_1"
                />
                <div>
                    <div>{name}</div>
                    <div>{address}</div>
                </div>
            </div>
            </div>
            <div className="flex flex-row justify-end space-x-2">
                <div>4,5</div>
                <img src={star} alt={name} className="w-3 h-3"/>
            </div>
        <div className="py-5">{comment}</div>
    </div>

  )
}
