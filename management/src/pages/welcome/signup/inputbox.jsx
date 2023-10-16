import React, { useState, useRef } from "react";

const Input = ({ placeholder, State }) => {
  const { User, setUser, isEmpty } = State;
  const [isError, setError] = useState(false);
  const inputRef = useRef(null);

  const setData = (e) => {
    let obj = User;
    obj[placeholder] = e.target.value;
    setUser({ ...obj });
  };

  // class for text
  let styles =
    "w-full h-11 border-[1px] rounded-lg p-2 mb-4 hover:border-black text-lg";
  
  // class for dots (password)
  if (placeholder === 'Password' || placeholder === 'Confirm Password') {
    styles =
      "w-full h-11 border-[1px] rounded-lg p-2 mb-4 hover:border-black placeholder:text-[18px] text-[25px]";
  }
  
  return (
    <div>
      <div>{placeholder}</div>
      <input
        ref={inputRef}
        type={type(placeholder)}
        placeholder={placeholder}
        value={User[placeholder]}
        onChange={setData}
        className={styles}
      />
      {isError && (
        <div className="text-xs text-red-600">{ErrorText(placeholder)}</div>
      )}
      {isEmpty && inputRef.current?.value === "" && (
        <div className="text-xs text-red-600">
          {placeholder} can not be Empty
        </div>
      )}
    </div>
  );



  function type(placeholder) {
    if (placeholder === "E-Mail Address") {
      return "email";
    } else if (
      placeholder === "Password" ||
      placeholder === "Confirm Password"
    ) {
      return "password";
    } else return "text";
  }
};

export default Input;
