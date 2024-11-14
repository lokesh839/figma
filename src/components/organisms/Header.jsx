import React, { useState } from 'react';
import LinkButton from '../atoms/LinkButton';
import Dropdown from '../molecules/Dropdown';
import Button from '../atoms/Button';


const Header = () => {

    const [openDropdown, setOpenDropdown] = useState(null);


    const productsOptions = [
        { label: 'Option 1', link: '#' },
        { label: 'Option 2', link: '#' },
        { label: 'Option 3', link: '#' },
    ];

    const solutionsOptions = [
        { label: 'Option A', link: '#' },
        { label: 'Option B', link: '#' },
        { label: 'Option C', link: '#' },
    ];

    const resourcesOptions = [
        { label: 'Option X', link: '#' },
        { label: 'Option Y', link: '#' },
        { label: 'Option Z', link: '#' },
    ];

    const pricingOptions = [
        { label: 'Option Alpha', link: '#' },
        { label: 'Option Beta', link: '#' },
        { label: 'Option Gamma', link: '#' },
    ];


    const toggleDropdown = (dropdownIndex) => {
        setOpenDropdown(openDropdown === dropdownIndex ? null : dropdownIndex);
    };

    return (
        <header className="w-full bg-sky-500 md:bg-blue-900  text-white p-4   py-3 ">

            <div className="  max-w-7xl mx-auto flex justify-between items-center" >
                <div className='  flex items-center '>
                    <img src="../images/Logo2.png" alt="" />
                    <span class="text-white text-2xl font-bold md:ml-2">whitespace</span>

                </div>
                <nav className="flex space-x-9 md:ml-60 ">
                    <Dropdown
                        label="Products &#8964;"
                        options={productsOptions}
                        isOpen={openDropdown === 1}
                        onToggle={() => toggleDropdown(1)}
                    />
                    <Dropdown
                        label="Solutions &#8964;"
                        options={solutionsOptions}
                        isOpen={openDropdown === 2}
                        onToggle={() => toggleDropdown(2)}
                    />
                    <Dropdown
                        label="Resources &#8964;"
                        options={resourcesOptions}
                        isOpen={openDropdown === 3}
                        onToggle={() => toggleDropdown(3)}
                    />
                    <Dropdown
                        label="Pricing &#8964;"
                        options={pricingOptions}
                        isOpen={openDropdown === 4}
                        onToggle={() => toggleDropdown(4)}
                    />
                </nav>
                <div className="flex items-center space-x-5">
                    <LinkButton to="/login">Login</LinkButton>
                    <Button className=" bg-blue-400 hover:bg-blue-400 text-white py-2 px-4 rounded" >Try Whitespace Free &rarr;</Button>
                </div>
            </div>

        </header>



    );
 };
 export default Header;