import React, { useState } from "react";
const Lock = ({ onflipLockScreen }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    const code = input1 + input2 + input3 + input4;
    console.log(code);

    if(code==="1111"){
      onflipLockScreen();
    }
  };
  const numOfFields = 4;
  const handleChange = e => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    // Check if they hit the max character length
    if (value.length >= maxLength) {
        // Check if it's not the last input field
        if (parseInt(fieldIndex, 10) < numOfFields) {
            // Get the next input field
            const nextSibling = document.querySelector(
                `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
            );

            // If found, focus the next field
            if (nextSibling !== null) {
                nextSibling.focus();
            }
        }
    }
}

  return (
    <div>
      <div>
        <div className="">
          <div className="w-full overflow-hidden h-full fixed block top-0 left-0  backdrop-filter backdrop-blur-sm z-50">
            <div className=" pt-40">
              <div className="container mx-auto w-96 bg-dark-2 border-2 border-dark-3 border-solid  rounded-el">
                <p className="text-white pt-6 text-center text-2xl">Enter pin to unlock mystery!</p>
                <div className="flex flex-row items-center justify-center mx-auto p-4">
                  <div className="pt-4 pl-4 ">
                    <input
                      value={input1}
                      onChange={(e) => {setInput1(e.target.value);handleChange(e)}}
                      name="ssn-1"
                      maxLength="1"
                      autoFocus
                      className="w-12 px-4 py-2 bg-dark-2 text-dark-3 tex focus:outline-none border-2 border-dark-1 outline-dark-2 border-solid rounded active:outline-none"
                    ></input>
                  </div>
                  <div className="pt-4 pl-4 ">
                    <input
                      value={input2}
                      onChange={(e) => {setInput2(e.target.value);handleChange(e)}}
                      name="ssn-2"
                      maxLength="1"
                      className="w-12 px-4 py-2 bg-dark-2 focus:outline-none text-dark-3 tex  border-2 border-dark-1 outline-dark-2 border-solid rounded active:outline-none"
                    ></input>
                  </div>
                  <div className="pt-4 pl-4 ">
                    <input
                      value={input3}
                      onChange={(e) => {setInput3(e.target.value);handleChange(e)}}
                      name="ssn-3"
                      maxLength="1"
                      className="w-12 px-4 py-2 bg-dark-2 text-dark-3 tex focus:outline-none border-2 border-dark-1 outline-dark-2 border-solid rounded active:outline-none"
                    ></input>
                  </div>
                  <div className="pt-4 pl-4 ">
                    <input
                      value={input4}
                      onChange={(e) => {setInput4(e.target.value)}}
                      name="ssn-4"
                      maxLength="1"
                      className="w-12 px-4 py-2 bg-dark-2 text-dark-3 tex focus:outline-none border-2 border-dark-1 outline-dark-2 border-solid rounded active:outline-none"
                    ></input>
                  </div>
                </div>
                <div className="flex items-center justify-center pb-8 pt-8">
                  <button
                    onClick={submithandler}
                    className="inline-flex items-center w-6/12  justify-center h-12 px-12 py-0 text-base text-center text-white  border-2 border-dark-1 border-solid rounded-full cursor-pointer font-medium hover:bg-white hover:text-dark-1 transform duration-300 "
                  >
                    Unlock
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lock;
