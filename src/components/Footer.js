import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {

  // get the navigate function
  const navigate = useNavigate();

  const goBack = () => {
    // imperatively redirect back
    
  }

  const goForward = () => {
    // imperatively redirect forward
    
  }

  return (
    <footer>

      <button onClick={() => navigate(-1)}>Back</button>
      
      <button onClick={() => navigate(1)}>Forward</button>
      
    </footer>
  );
}
