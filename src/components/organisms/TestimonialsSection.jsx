import React from 'react';
import Testimonial from '../molecules/Testimonial';

const TestimonialSection = () => {
    const testimonials = [
        {
            src:'./images/Group1.png',
            quote: 'Whitespace is designed as a collaboration tool for businesses that is a full project management solution.',
            photo: ' ./images/Avater1.png', 
            name: 'Oberon Shaw, MCH',
            position: 'Head of Talent Acquisition, North America',
            isHighlighted: true
        },
        {
            src:'./images/Group2.png',
            quote: 'Whitespace is designed as a collaboration tool for businesses that is a full project management solution.',
            photo: '/images/Avater.png',
            name: 'Oberon Shaw, MCH',
            position: 'Head of Talent Acquisition, North America',
            isHighlighted: false
        },
        {
            src:'./images/Group2.png',

            quote: 'Whitespace is designed as a collaboration tool for businesses that is a full project management solution.',
            photo: '/images/Avater2.png',
            name: 'Oberon Shaw, MCH',
            position: 'Head of Talent Acquisition, North America',
            isHighlighted: false
        }
    ];

    return (
        <div className="w-full bg-white  py-20">
            <div className=" max-w-7xl mx-auto p-5 text-center py-16  px-10 space-x-10  " > 
                <h2 className="text-4xl font-bold text-center mb-6">
                What Our Clients <span className="font-semibold underline decoration-4 decoration-yellow-400">Says</span>
            </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    {testimonials.map((testimonial, index) => (
                        <Testimonial
                            key={index}
                            src={testimonial.src}                           
                            quote={testimonial.quote}   
                            photo={testimonial.photo}
                            name={testimonial.name}
                            position={testimonial.position}
                            isHighlighted={testimonial.isHighlighted}
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mx-1"></span>
                    <span className="inline-block w-2 h-2 bg-black rounded-full mx-1"></span>
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mx-1"></span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
