import React from 'react';
import PricingCard from '../organisms/PricingCard';
import Heding from '../atoms/Heding';

const PricingPage = () => {
    const plans = [
        {
            plan: 'Free',
            price: '$0',
            description: 'Capture ideas and find them quickly',
            features: [
                'Capture ideas and find them quickly',
                'Sync unlimited devices',
                '10 GB monthly uploads',
                '200 MB max note size',
                'Customize Home dashboard and access extra widgets',
                'Connect primary Google Calendar account',
                'Add due dates, reminders, and notifications to your tasks'
            ],
            isHighlighted: false
        },
        {
            plan: 'Personal',
            price: '$11.99',
            description: 'Keep home and family on track',
            features: [
                'Keep home and family on track',
                'Sync unlimited devices',
                '10 GB monthly uploads',
                '200 MB max note size',
                'Customize Home dashboard and access extra widgets',
                'Connect primary Google Calendar account',
                'Add due dates, reminders, and notifications to your tasks'
            ],
            isHighlighted: true
        },
        {
            plan: 'Organization',
            price: '$49.99',
            description: 'Capture ideas and find them quickly',
            features: [
                'Capture ideas and find them quickly',
                'Sync unlimited devices',
                '10 GB monthly uploads',
                '200 MB max note size',
                'Customize Home dashboard and access extra widgets',
                'Connect primary Google Calendar account',
                'Add due dates, reminders, and notifications to your tasks'
            ],
            isHighlighted: false
        }
    ];

    return (
        <div className="w-full bg-white py-10 ">
            <div className=' max-w-7xl mx-auto p-5 text-center py-16  px-10 space-x-10 '>

                <Heding>
                    Choose Your <span className=' underline decoration-4 decoration-yellow-300'>Plan</span>
                    <div></div>
                </Heding>
                <p className="text-center text-gray-600 mb-12">
                    Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the <br /> right plan for you.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    {plans.map((planData, index) => (
                        <PricingCard
                            key={index}
                            plan={planData.plan}
                            price={planData.price}
                            description={planData.description}
                            features={planData.features}
                            isHighlighted={planData.isHighlighted}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
