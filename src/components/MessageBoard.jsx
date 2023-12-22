import { useState } from "react";

function MessageBoard() {
  const [inputMsg, setInputMsg] = useState("");
  const [displayArr, setDisplayArr] = useState([]);

  const handleDisplayArr = () => {
    const newDisplayArr = [...displayArr]; // clone = newจะเท่ากับ arr ที่มี value เหมือนอันที่โคลนเป๊ะ
    newDisplayArr.push(inputMsg);
    setDisplayArr(newDisplayArr);
  };

  const handleRemoveMsg = (indexMsg) => {
    const newDisplayArr = [...displayArr];
    newDisplayArr.splice(indexMsg, 1);
    setDisplayArr(newDisplayArr);
  };
  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(e) => {
              setInputMsg(e.target.value);
            }}
            value={inputMsg}
          />
        </label>
        <button className="submit-message-button" onClick={handleDisplayArr}>
          Submit
        </button>
      </div>
      <div class="board">
        {displayArr.map((msg, index) => {
          return (
            <div key={index} className={msg}>
              <div className="message">
                <h1>{msg}</h1>
                <button
                  className="delete-button"
                  onClick={() => {
                    handleRemoveMsg(index);
                  }}
                >
                  x
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
