import { useState } from "react";

function Burger({ toggle }) {
  const styles = {
    button: {
      // position: "absolute",
      // top: "5%",
      // left: "2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      width: "1rem",
      height: "1.2rem",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: "0",
      zIndex: "10",
    },
    // span: {
    //   width: "1.75rem",
    //   height: "0.15rem",
    //   background: "#1B1B1B",
    //   bordeRadius: "10px",
    //   transition: "all 0.3s linear",
    //   position: "relative",
    //   transformOrigin: "1px",
    // },

    firstChild: {
      transform: toggle ? "rotate(45deg)" : "rotate(0)",
    },
    secondChild: {
      transform: toggle ? "translateX(20px)" : "translateX(0)",
      opacity: toggle ? "0" : "1",
    },
    thirdChild: {
      transform: toggle ? "rotate(-45deg)" : "rotate(0)",
    },
  };

  return (
    <button style={styles.button}>
      <span style={styles.firstChild}></span>
      <span style={styles.secondChild}></span>
      <span style={styles.thirdChild}></span>
    </button>
  );
}

export default Burger;
