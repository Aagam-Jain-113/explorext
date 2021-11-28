import React from "react";
import docimage from "./../Asset/document.png";
const Newfile = ({ togglefileScreen }) => {
  
  const [text,setText] = React.useState("");

  return (
    <div>
      <div className="">
        <div class="w-full overflow-hidden h-full fixed block top-0 left-0 backdrop-filter backdrop-blur-sm z-50">
          <div className="pt-10">
            <div className="container mx-auto w-6/12 bg-dark-2 border-2 border-dark-3 border-solid  rounded-el">
              <div className="flex items-center mx-auto p-4 pt-8">
                <div>
                  <img src={docimage} className="h-16 pt-4 " alt="" />
                </div>
                <div className="pt-4 pl-8 ">
                  <p className="font-normal pt-1 text-dark-3 text-2xl">
                    Test File
                  </p>
                </div>
                <p className="block ml-auto text-xl text-white cursor-pointer" onClick={togglefileScreen}>&#x2716;</p>
              </div>
              <div className="flex item-center justify-center">
                <textarea
                  className="w-9/12 px-4 py-2 h-80 bg-dark-2 text-dark-3 tex  border-2 border-dark-1 outline-dark-2 border-solid rounded active:outline-none"
                  placeholder="This is test file..."
                  onChange={e=>{setText(e.target.value)}}
                  value={text}
                ></textarea>
              </div>

              <div className="flex items-center justify-center pb-8 pt-8">
                <button
                  onClick={togglefileScreen}
                  className="inline-flex items-center w-3/12  justify-center h-12 px-12 py-0 text-base font-normal text-center text-white  border-2 border-dark-1 border-solid rounded-full cursor-pointer "
                >
                  Save file
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newfile;
