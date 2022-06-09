import React from "react";

export const Div = ({ text }: { text: string }) => {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        background: "red",
        color: "white",
      }}
    >
      {text}
    </div>
  );
};
