import { Stack } from "@mui/system";
import React from "react";
import gymImg from "../assets/gym.png";
const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      justifyContent="center"
      alignItems="center"
      className="bodyPart-card"
      sx={{
        borderBottom: bodyPart === item ? "4px solid #ff2625" : "",
        cursor: "pointer",
        width: "220px",
        height: "200px",
        gap: "47px",
        padding:'10px'
      }}
      onClick={()=>setBodyPart(item)}
    >
      <img src={gymImg} style={{ width: "40px", height: "40px" }} />
      {item}
    </Stack>
  );
};

export default BodyPart;
