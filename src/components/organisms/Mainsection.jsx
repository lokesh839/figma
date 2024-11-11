import Textmain from '../molecules/Textmain'

const MainSection = () => (


    <div className=' w-full mx-auto flex items-center bg-blue-900 text-white py-16 px-56'>
        <div className="max-w-7xl mx-auto flex  justify-between items-center">
            <Textmain/>
             
            <div className="md:w-1/2 ">
                <img  src="./images/container.png" alt="Project Management"   />
            </div>
        </div>
    </div>


);

export default MainSection;
