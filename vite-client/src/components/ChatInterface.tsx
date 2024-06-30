import React, { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage.tsx";
import { Container, UnstyledButton, Button, Avatar } from "@mantine/core";
import brainIcon from "../assets/brain-icon.png";
import chatSubmitIcon from "../assets/chat-submit.png";
import avatarIcon from "../assets/avatar.png";
import settingsIcon from "../assets/settings-icon.png";
import searchIcon from "../assets/search-icon.png";
// import AIAvatarIcon from "../assets/AI-Avatar.png";

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (!inputText.trim()) return; // Prevent sending empty messages

    // Get a snapshot of the current messages + the user's message
    // to send to the server to get an answer
    const userMessage = { text: inputText, isBot: false };
    const body = {
      chatHistory: [...messages, userMessage],
      question: inputText,
    };

    // Add a new empty bot message to the UI
    const botMessage = { text: "", isBot: true };
    setMessages([...messages, userMessage, botMessage]);
    setInputText("");

    // Send the user's message to the server and wait for a response.
    // This response will be streamed to this component.
    const response = await fetch("http://localhost:5000/question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.body) return;

    // Set up the infrastructure to stream the response data
    let decoder = new TextDecoderStream();
    const reader = response.body.pipeThrough(decoder).getReader();
    let accumulatedAnswer = "";

    while (true) {
      var { value, done } = await reader.read();
      if (done) break;
      accumulatedAnswer += value;
      const botMessage = { text: accumulatedAnswer, isBot: true };
      setMessages([...messages, userMessage, botMessage]);
      return
    }
  };

  return (
    <Container
      display={"flex"}
      style={{
        flexDirection: "row",
        minHeight: "100vh",
        maxWidth: "100%",
        padding: "0",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Container
        display={"flex"}
        style={{
          flexDirection: "column",
          minHeight: "100vh",
          width: "23%",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "2em 0 0 0",
          padding: "0px",
        }}
      >
        <Container
          display={"flex"}
          style={{
            flexDirection: "row",
            alignItems: "center",
            maxWidth: "90%",
            gap: "1em",
          }}
        >
          <Button
            style={{
              borderRadius: "5em",
              height: "3.5em",
              maxWidth: "80%",
              fontSize: "0.9rem",
              color: "#FFFFFF",
              width: "18em",
              backgroundImage: "linear-gradient(to right, #4797FF, #6057FF)",
              outline: "none",
              margin: 0,
              padding: 0,
            }}
          >
            + New Chat
          </Button>
          <UnstyledButton
            display={"flex"}
            style={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              objectFit: "cover",
              backgroundColor: "#9188ff",
              margin: 0,
              padding: 0,
              justifyContent: "center",
              alignItems: "center",
              outline: "none",
            }}
          >
            <img
              src={searchIcon}
            />
          </UnstyledButton>
        </Container>
        Chat History
        <Container
          display={"flex"}
          style={{
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            padding: 0,
            gap: "1em",
            marginBottom: "1em",
          }}
        >
          <UnstyledButton
            display={"flex"}
            style={{
              borderRadius: "5em",
              alignItems: "center",
              height: "4.5em",
              maxWidth: "90%",
              fontSize: "0.9rem",
              width: "18em",
              backgroundColor: "#FFFFFF",
              outline: "none",
              border: "1px solid #EFEFEF",
              paddingLeft: "1em",
            }}
          >
            <img src={settingsIcon} style={{ marginRight: "1em" }} />
            Settings
          </UnstyledButton>
          <UnstyledButton
            display={"flex"}
            style={{
              flexDirection: "row",
              // justifyContent: "center",
              alignItems: "center",
              borderRadius: "5em",
              height: "4.5em",
              maxWidth: "90%",
              fontSize: "0.9rem",
              width: "18em",
              backgroundColor: "#FFFFFF",
              outline: "none",
              border: "1px solid #EFEFEF",
              paddingLeft: "1em",
            }}
          >
            <Avatar
              src={avatarIcon}
              style={{
                marginRight: "1em",
              }}
            ></Avatar>
            John Smith
          </UnstyledButton>
        </Container>
      </Container>
      <Container
        display={"flex"}
        style={{
          flexDirection: "column",
          flexGrow: "1",
          maxWidth: "73%",
          margin: "0",
          padding: "0px",
          minHeight: "100%",
          backgroundColor: "#F1F5F9",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        <div ref={messagesEndRef} style={{ margin: 0, padding: 0 }} />
        <form
          className="chat-input"
          onSubmit={handleSendMessage}
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            padding: "0.90em 0em 0.90em 1.5em",
            borderRadius: "30px",
            boxShadow: "box-shadow: 0px 8px 24px -4px #00000014",
            marginBottom: "1em",
          }}
        >
          <img
            src={brainIcon}
            style={{
              width: "2em",
              height: "2em",
              marginRight: "1em",
            }}
          />
          <input
            type="text"
            placeholder="What's in your mind?... "
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            style={{
              color: "black",
              maxWidth: "95%",
              width: "100%",
              backgroundColor: "#FFFFFF",
              border: "none",
              margin: 0,
              outline: "none",
              marginRight: "1em",
            }}
          />
          <UnstyledButton
            style={{
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              height: "3.5em",
              outline: "none",
              marginRight: "1em",
            }}
          >
            <img
              src={chatSubmitIcon}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </UnstyledButton>
        </form>
      </Container>
    </Container>
  );
}

export default ChatInterface;
