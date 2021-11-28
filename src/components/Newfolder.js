import React from "react";
import folderImage from "./../Asset/folder-closed.png";

const Newfolder = ({ onOpenNewFolder, folder, setFolder, folderItems }) => {
    const [foldername, setFolderName] = React.useState("");
    const submithandler = () => {
        setFolder([...folderItems, { id: folderItems.length + 1, name: foldername }]);
        onOpenNewFolder();
    };
    return (
        <div>
            <div className="">
                <div className="w-full overflow-hidden h-full fixed block top-0 left-0  backdrop-filter backdrop-blur-sm z-50">
                    <div className=" pt-40">
                        <div className="container mx-auto w-96 bg-dark-2 border-2 border-dark-3 border-solid  rounded-el">
                            <div className="flex flex-row mx-auto p-4 pt-20">
                                <div>
                                    <img src={folderImage} className="h-16 pt-4 " alt="" />
                                </div>
                                <div className="pt-4 pl-8 ">
                                    <input
                                        value={foldername}
                                        onChange={(e) => setFolderName(e.target.value)}
                                        className="w-60 px-4 py-2 bg-dark-2 text-dark-3 border-2 border-dark-1 outline-dark-2 border-solid rounded active:outline-none"
                                        placeholder="Enter folder Name..."
                                    ></input>
                                </div>
                            </div>
                            <div className="flex items-center justify-center pb-8 pt-8">
                                <button
                                    onClick={submithandler}
                                    className="inline-flex items-center w-8/12  justify-center h-12 px-12 py-0 text-base font-normal text-center text-white  border-2 border-dark-1 border-solid rounded-full cursor-pointer "
                                >
                                    Create Folder
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newfolder;
