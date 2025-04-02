import React from "react";
import "./MessageListe.css";

const MessageItem = ({ message }) => (
  <li className="message-item">
    <p className="message-content">{message.content}</p>
    <div className="message-meta">
      <strong>{message.author}</strong>
      <em>{message.date}</em>
    </div>
  </li>
);

const MessageList = ({ messages }) => (
  <ul className="message-list">
    {messages.length > 0 ? (
      messages.map((msg) => <MessageItem key={msg.uid} message={msg} />)
    ) : (
      <p>Aucun message pour le moment.</p>
    )}
  </ul>
);

export default MessageList;
