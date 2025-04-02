import React, { useState } from "react";
import "./MainPage.css";
import MessageList from "./MessageListe";
import MessageForm from "./MessageForm";

const MainPage = () => {
  const [messages, setMessages] = useState([]);

  const handleAddMessage = (content) => {
    const newMessage = {
      uid: Date.now(), // Identifiant unique
      content,
      author: "Utilisateur", // !!!!!!!!!!! à remplacez par un identifiant utilisateur réel
      date: new Date().toLocaleString(),
    };
    setMessages([newMessage, ...messages]); // pour ajouter le new message en haut de la liste
  };

  return (
    <main className="main">
      <section className="message-form-section">
        <h2>Publier un message</h2>
        <MessageForm onAddMessage={handleAddMessage} />
      </section>
      <section id="user_messages">
        <h2>Vos derniers messages</h2>
        <MessageList messages={messages} />
      </section>
    </main>
  );
};

export default MainPage;
