import React from "react";
import ReactMarkdown from "react-markdown";

function ChatMessage({ message }) {
  // Only parse markdown for bot messages
  const content = message.isBot ? (
    <ReactMarkdown children={message.text} />
  ) : (
    message.text
  );

  return (
    <div
      className={`chat-message ${
        message.isBot ? "bot-message" : "user-message"
      }`}
      style={{
        display: "flex",
        backgroundColor: message.isBot ? "#00000014" : "#FFFFFF",
        color: message.isBot ? "black" : "#000000",
        borderRadius: "30px",
        padding: "1em",
        marginBottom: "1em",
        width: "min-content",
        overflow: "hidden",
      }}
    >
      {content}
    </div>
  );
}

export default ChatMessage;
