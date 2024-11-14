import Button from "../atoms/Button";
import Heding from "../atoms/Heding";
import Paragraph from "../atoms/Paragraph";

const Textmain = () => {
    return (
        <div className=" w-1/2 md:w-1/2 mt-5 md:mr-8 text-left">
            <Heding >Get More Done with <br />whitespace</Heding>          
            <Paragraph> Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</Paragraph>
            <Button className=" bg-blue-400 hover:bg-blue-400 text-white py-2 px-4 rounded mt-4" >Try Whitespace Free &rarr;</Button>

        </div>
    );
};

export default Textmain;
