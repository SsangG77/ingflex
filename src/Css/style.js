//color
let back_color = "#A0A0A0";
let color = "white";

//스타일 객체
const app_style = {
  main: {
    backgroundColor: back_color,
    height: "100vh",
    color: color,
    position: "relative",
  },
};

const banner_style = {
  banner: {
    width: "100%",
    padding: "20px 60px",
    display: "flex",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 2,
    background: "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)",
  },
  logo_container: {
    width: "90px",
  },
  link_style: {
    textDecoration: "none",
    color: color,
    padding: "0.4vw",
    fontSize: "0.9vw",
  },
  menu_btn_style: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: "#fff",
    border: "none",
    ":hover": {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    ":active": {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  },
};

const main_style = {
  main: {},
  player: {
    width: "100%",
  },
};

export { banner_style, app_style, main_style };
