import Images from'./Images'

const ClientInfo = ({ imgSrc, name, position }) => {
    return (
        <div className="flex items-center text-left ml-7">
            <div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-300 ">{position}</p>
            </div>
        </div>
    );
};

export default ClientInfo;
