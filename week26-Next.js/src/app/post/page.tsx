"use client"; // 클라이언트 컴포넌트로 설정

import { useState } from "react";
import "../globals.css";

async function postNote(title: string, content: string) {
  const response = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    }
  );
  return response.json();
}

export default function Note() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newNote = await postNote(title, content);
    alert("POST 성공!");
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>POST 기능</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">POST!</button>
    </form>
  );
}
