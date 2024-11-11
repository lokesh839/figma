import React from "react";
    
function Home() {
    const getonlinebooking=() => {
        return window.location.href='./onlinebooking'
    }
    return (
        <div class="bg-gray-100">

            <nav class="bg-white p-4 shadow-md">
                <div class="container mx-auto flex justify-between items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZ-SBVjAeVC0bB-K7IZiNdtc5aHTNq0CabA&s" alt="star" />
                    <div class="text-5xl  text-green-600 font-bold">StarHotel</div>
                    <ul class="flex space-x-4">
                        <li><a href="#" class="text-gray-600 hover:text-green-600" >Home</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-green-600"onClick={getonlinebooking}>Online booking</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-green-600">Contact</a></li>
                    </ul>
                </div>
            </nav>


            <section class="bg-green-500 text-white py-16">
                <div class="container mx-auto text-center">
                    <h1 class="text-4xl font-bold">Discover Delicious Recipes</h1>
                    <p class="mt-4">Browse through thousands of mouth-watering recipes and find your next meal idea!</p>
                    <button class="mt-6 bg-white text-green-600 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200">Get Started</button>
                </div>
            </section>

            <section class="container mx-auto py-12">
                <h2 class="text-3xl font-semibold text-gray-800 text-center mb-8">Popular Recipes</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBX1quGCHB2xMy5JWt69st_ubskW5xGL7Ww&s" alt="Recipe Image" class="w-full h-48 object-cover" />
                        <div class="p-4">
                            <h3 class="font-bold text-xl text-gray-800">Spaghetti Bolognese</h3>
                            <p class="text-gray-600 mt-2">A classic Italian pasta dish with a rich, flavorful sauce.</p>
                            <button class="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">View Recipe</button>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFSPY-LdSu7X1K4Y1qsORJ8HoUvOES1kXJw&s" alt="Recipe Image" class="w-full h-48 object-cover" />
                        <div class="p-4">
                            <h3 class="font-bold text-xl text-gray-800">Chicken Curry</h3>
                            <p class="text-gray-600 mt-2">A savory and spicy curry dish with tender chicken pieces.</p>
                            <button class="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">View Recipe</button>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDpY48dD1VZrvvQkmFxxm8t5mkyQyGM00tg&s" alt="Recipe Image" class="w-full h-48 object-cover" />
                        <div class="p-4">
                            <h3 class="font-bold text-xl text-gray-800">Vegetable Stir Fry</h3>
                            <p class="text-gray-600 mt-2">A healthy and colorful stir fry with fresh vegetables.</p>
                            <button class="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">View Recipe</button>
                        </div>
                    </div>
                </div>
            </section>


            <footer class="bg-gray-800 text-white py-8">
                <div class="container mx-auto text-center">
                    <p>&copy; 2024 Foodie. All Rights Reserved.</p>
                </div>
            </footer>
        </div>

    )

}
export default Home;