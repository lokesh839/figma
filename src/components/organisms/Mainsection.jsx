import Textmain from '../molecules/Textmain'

const MainSection = () => (


    <div className="w-full mx-auto flex items-center bg-sky-500 md:bg-blue-900 text-white py-16 px-56 bg-[url('./images/line3.png')] bg-no-repeat  bg-[length:1720px_500px] bg-left-bottom">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Textmain />
        <div className=" w-1/2 md:w-1/2">
            <img src="./images/container.png" alt="Project Management" />
        </div>
    </div>
</div>



);

export default MainSection;
