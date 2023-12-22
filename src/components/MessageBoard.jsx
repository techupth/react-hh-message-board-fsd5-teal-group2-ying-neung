import { useState } from "react";

function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter message here");

  const handleInputFocus = () => {
    setPlaceholder(""); // เมื่อโฟกัสไปยัง input จะเปลี่ยน placeholder เป็นค่าว่าง
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const addMessage = () => {
    const newMessage = [...messages, input];
    setMessages(newMessage);
    setInput(""); // ล้าง input หลังจากกด submit
    setPlaceholder("Enter message here"); // เปลี่ยนค่า placeholder กลับเป็นข้อความเริ่มต้นหลังจากกด submit
  };

  const deleteMessage = (messageIndex) => {
    const newMessage = [...messages];
    newMessage.splice(messageIndex, 1);
    setMessages(newMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder={placeholder}
            value={input}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div className="board">
        <ul className="message-list">
          {messages.map((message, index) => (
            <li key={index} className="message">
              <h1>{message}</h1>

              <button
                className="delete-button"
                onClick={() => deleteMessage(index)}>
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MessageBoard;
