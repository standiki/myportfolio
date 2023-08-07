import { useState } from "react";

function Burger() {
  const [open, setOpen] = useState(false);

  const styles = {
    button: {
      position: "absolute",
      top: "5%",
      left: "2rem",
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

    FirstChild: {
      transform: open ? "rotate(45deg)" : "rotate(0)",
    },
    SecondChild: {
      transform: open ? "translateX(20px)" : "translateX(0)",
      opacity: open ? "0" : "1",
    },
    ThirdChild: {
      transform: open ? "rotate(-45deg)" : "rotate(0)",
    },
  };

  return (
    <button style={styles.button} onClick={() => setOpen(!open)}>
      <span style={styles.FirstChild}></span>
      <span style={styles.SecondChild}></span>
      <span style={styles.ThirdChild}></span>
    </button>
  );
}

export default Burger;
