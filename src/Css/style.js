//color
let back_color = "#A0A0A0";
let color = "white";

const banner_style = {
  banner: {
    width: "100%",
    padding: "20px 60px",
    display: "flex",
    position: "fix",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  logo_container: {
    width: "90px",
  },
};

const app_style = {
  main: {
    backgroundColor: back_color,
    height: "100vh",
    color: color,
  },
};

const link_style = {
  textDecoration: "none",
  color: color,
  padding: "0.4vw",
  fontSize: "15px",
};

const menu_btn_style = {
  backgroundColor: "rgba(0, 0, 0, 0)",
  color: "#fff",
  border: "none",
  ":hover": {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  ":active": {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
};

export { banner_style, app_style, link_style, menu_btn_style };
