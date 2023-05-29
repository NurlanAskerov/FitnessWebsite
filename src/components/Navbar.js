import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
const Navbar = () => {
  return (
    <div>
      <Stack
        direction="row"
        sx={{
          gap: { sm: "122px", xs: "40px" },
          px: "20px",
          mt: { sm: "32px", xs: "20px" },
          justifyContent: "none",
        }}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "48px",
              height: "48px",
              margin: "0 20px",
              fontSize: "24px",
            }}
          />
        </Link>
        <Stack direction="row" sx={{ gap: "40px", alignItems: "flex-end" }}>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              color: "#3A1212",
              borderBottom: "3px solid #FF2625",
            }}
          >
            Home
          </Link>
          <a
            href="/#exericises"
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            Exericises
          </a>
        </Stack>
      </Stack>
    </div>
  );
};

export default Navbar;
