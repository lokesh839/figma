
import React from 'react';
import { useForm } from 'react-hook-form';

function Onlinebooking() {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="bg-gray-100 bg-[url('https://media.istockphoto.com/id/1182393436/vector/fast-food-seamless-pattern-with-vector-line-icons-of-hamburger-pizza-hot-dog-beverage.jpg?s=612x612&w=0&k=20&c=jlj-n_CNsrd13tkHwC7MVo0cGUyyc8YP6wJQdCvMUGw=')] bg-cover bg-center">
            <div className="container mx-auto p-6">
                <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Book Your Meal</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 font-medium">Full Name</label>
                            <input
                                type="text"
                                {...register('name', { required: 'Full name is required' })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-red-400"
                                placeholder="Enter your full name"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Phone Number</label>
                            <input
                                type="tel"
                                {...register('phone', { required: 'Phone number is required' })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-red-400"
                                placeholder="Enter your phone number"
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Select Food Items</label>
                            <select
                                {...register('foodItems', { required: 'Please select a food item' })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-red-400"
                            >
                                <option value="" disabled>Select your meal</option>
                                <option value="pizza">Pizza</option>
                                <option value="burger">Burger</option>
                                <option value="sushi">Sushi</option>
                                <option value="pasta">Pasta</option>
                                <option value="salad">Salad</option>
                            </select>
                            {errors.foodItems && <p className="text-red-500 text-sm">{errors.foodItems.message}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Quantity</label>
                            <input
                                type="number"
                                {...register('quantity', { required: 'Quantity is required' })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-red-400"
                            />
                            {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Select Date</label>
                            <input
                                type="date"
                                {...register('date', { required: 'Date is required' })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-red-400"
                            />
                            {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Select Time</label>
                            <input
                                type="time"
                                {...register('time', { required: 'Time is required' })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-red-400"
                            />
                            {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Additional Instructions (Optional)</label>
                            <textarea
                                {...register('instructions')}
                                rows="3"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-red-400"
                                placeholder="Any special requests?"
                            />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="px-6 py-2 bg-red-500 text-white rounded-md transition-colors">
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Onlinebooking;
