"use client";

import { useState } from "react";


export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* BACKDROP */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 998,
          }}
        />
      )}

      {/* 3D BUTTON REMOVED */}
      
    {/* CHAT PANEL */}

    <div
    onClick={(e) => e.stopPropagation()}
    style={{
        position: "fixed",
        bottom: "20px",
        right: isOpen ? "20px" : "-500px",
        width: "95vw",
        maxWidth: "380px",
        height: "77vh",
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 12px 30px rgba(255,0,0,0.4)",
        transition: "0.3s ease",
        zIndex: 999,
        border: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", 
    }}
    >
  {/* HEADER */}
  <div
    style={{
      padding: "10px 12px",
      background: "linear-gradient(135deg,#111,#222)",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0,
      zIndex: 2,
    }}
  >
    <span style={{ fontWeight: "600", fontSize: "13px" }}>
      MST Buddy
    </span>

    <button
      onClick={() => setIsOpen(false)}
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        background: "linear-gradient(135deg,#ff4d4d,#ff0000)",
        color: "#fff",
        fontSize: "14px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px rgba(255,0,0,0.4)",
      }}
    >
      ✕
    </button>
  </div>

  {/* IFRAME CONTAINER */}
  <div
    style={{
      flex: 1,
      overflow: "hidden", 
      position: "relative",
    }}
  >
    <iframe
  src="https://buddy.mstblockchain.com/chat"
  style={{
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "110%",   
    border: "none",
    display: "block",
  }}
      scrolling="yes" 
    />
  </div>
</div>
    </>
  );
}