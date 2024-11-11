import React from 'react';
import Footercolum from '../molecules/Footercolum';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';


const Footer = () => {
    const productLinks = [
        { href: "#", text: "Overview" },
        { href: "#", text: "Pricing" },
        { href: "#", text: "Customer stories" },
    ];

    const resourceLinks = [
        { href: "#", text: "Blog" },
        { href: "#", text: "Guides & Tutorials" },
        { href: "#", text: "Help Center" },
    ];

    const companyLinks = [
        { href: "#", text: "About Us" },
        { href: "#", text: "Careers" },
        { href: "#", text: "Media Kit" },
    ];


    return (
        <footer className="bg-blue-900 w-full text-gray-200 px-56 space-x-7">
            <div className=" max-w-7xl mx-auto px-50 grid grid-cols-2 md:grid-cols-5 gap-8 text-left ">
                <div className="md:col-span-1 flex items-center mb-4">

                    <Paragraph>
                        <div className=' mb-2 flex items-center '>
                            <img src="../images/Logo2.png" alt="" />
                            <span class="text-white text-xl font-bold">whitespace</span>

                        </div>
                        Whitespace was crafted for the new ways we live and work. We make a better workspace around the world.
                    </Paragraph>
                </div>
                <Footercolum title="Product" links={productLinks} />
                <Footercolum title="Resources" links={resourceLinks} />
                <Footercolum title="Company" links={companyLinks} />
                <div className=' sm:w-2/2 text-left' >
                    <h1 class=" font-bold mb-2">Try It Today</h1>
                    <ul>
                        <li><p>Get started for free.
                            Add your whole team as your needs grow.</p></li>
                        <li><Button className=" bg-blue-400 text-white py-4 px-4 rounded text-sm mt-4" >Start today &rarr;</Button></li>
                    </ul>
                </div>
            </div>


            <div className='w-full'>
                <div class="max-w-7xl flex items-center space-x-20 md:grid-cols-4 ">

                    <div className='w-1/4 flex justify-start pl-6'>
                        <div>
                            <img src="../images/Group.png" alt="group" />

                        </div>
                        <select class=" bg-transparent  border-gray-500  text-white rounded-md  ">
                            <option >English</option>
                            <option>Spanish</option>
                            <option>French</option>
                        </select>
                    </div>
                    <div className=' w-1/2 flex space-x-6 mt-6 '>
                        <a href="#" class="hover:underline">Terms & privacy</a>
                        <a href="#" class="hover:underline">Security</a>
                        <a href="#" class="hover:underline">Status</a><br /><br />


                    </div>
                    <div className=' w-1/4 '>
                        <p>©2021 Whitepace LLC.</p>
                    </div>


                    <div className='w-1/4 flex justify-end'>
                        <img src="./images/inicon.png" alt="incon" />

                    </div>



                </div>
            </div>



        </footer >
    );
};

export default Footer;
