import React from "react";
import Sidebar from "./../components/Sidebar";
import docImage from "./../Asset/document.png";
import File from "./../components/File.js";
import folderImage from "./../Asset/folder-closed.png";

const Index = () => {
  const [openFile, setOpenFile] = React.useState(false);
  const togglefileScreen = () => {
    setOpenFile(!openFile);
  };
  const folderItems = [];
  const fileItems = [
    {
      id: 1,
      name: "White",
    },
    {
      id: 2,
      name: "Black",
    },
    {
      id: 3,
      name: "Wooden",
    },
  ]

  const [file, setFile] = React.useState(fileItems);
  const [folder, setFolder] = React.useState(folderItems);

  return (
    <div>
      {/* <Newfile /> */}
      {openFile ? <File togglefileScreen={togglefileScreen} /> : null}
      <Sidebar file={file} setFile={setFile} fileItems={fileItems} folder={folder} setFolder={setFolder} folderItems={folderItems}>
        <div className="pt-4 bg-dark-1">
          <div className=" mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10  pt-6 gap-8 pl-8">
            {file && file.map((item) => {
              return (
                <div key={item.id} onClick={togglefileScreen} className="cursor-pointer">
                  <img src={docImage} alt="document" />
                  <p className="text-white pt-2 text-center text-sm">
                    {item.name}
                  </p>
                </div>
              );
            })}
            {folder && folder.map((item)=>{
              return(
                <div key={item.id} className="cursor-pointer">
                  <img src={folderImage} alt="document" />
                  <p className="text-white pt-2 text-center text-sm">
                    {item.name}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default Index;
