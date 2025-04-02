import React, { useState } from "react";
import "./MessageForm.css";

const MessageForm = ({ onAddMessage }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onAddMessage(content); // Appel de la fonction parent pour ajouter un message
      setContent(""); // Réinitialisation du champ de texte
    }
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Écrivez votre message..."
        aria-label="Zone de saisie de message"
      />
      <button type="submit" className="submit-button">
        Publier
      </button>
    </form>
  );
};

export default MessageForm;
