
import Button from '../atoms/Button';
import Heding from '../atoms/Heding';
import Paragraph from '../atoms/Paragraph';

const Textpro = () => {
    return (
        <div className=" w-3/5 md:w-2/5 mt-16 mr-9 text-left">
            {/* <Heding title="Project" highlight="Management" />         */}        
         

            <Heding class="relative inline-block">Project <br /><span className="underline decoration-4 decoration-yellow-300 z-10">Management</span></Heding>
            <Paragraph >
                Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
            </Paragraph>
            <Button className=" bg-blue-400 hover:bg-blue-400 text-white py-2 px-4 rounded mt-4" >Try Whitespace Free &rarr;</Button>

        </div>
    );
};

export default Textpro;
