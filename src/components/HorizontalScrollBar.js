import { Box } from "@mui/system";
import React from "react";
import BodyPart from "./BodyPart";

function HorizontalScrollBar({ data, setBodyPart, bodyPart }) {
  return (
    
    <div id="slider" style={{ display: 'flex', flexWrap:'nowrap' ,marginX:'auto',overflowX:'scroll',paddingBottom:'10px',behaviour:'smooth'}}>
      {data.map((item,index) => (
        <Box
          key={index}
          title={item.id || item}
          m="0 20px"
        ><a href="/#exericises" style={{textDecoration:'none'}}>
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /></a>
        </Box>
      ))}
    </div>
  );
}

export default HorizontalScrollBar;
