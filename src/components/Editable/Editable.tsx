import { useState } from "react";
import useToggle from "../../hooks/useToggle";

export default function Editable() {
  const [inputValue, setInputValue] = useState("Title");
  const { status, toggleStatus } = useToggle();

  function handleInputChange(e: any) {
    setInputValue(e.target.value);
  }

  return (
    <>
      {status ? (
        <label htmlFor="title">
          Title:{" "}
          <input
            type="text"
            id="title"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
      ) : (
        <>Title: {inputValue}</>
      )}
      <button onClick={toggleStatus}>{status ? "Ok" : "Edit"}</button>
    </>
  );
}
