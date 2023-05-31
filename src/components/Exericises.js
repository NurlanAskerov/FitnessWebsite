import { Box, Pagination, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExericiseCard from "./ExericiseCard";

const Exericises = ({ bodyPart, setExericises, exericises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exericisesPerPage = 9;
  const indexOfLastExericise=currentPage*exericisesPerPage;
  const indexOfFirstExericise=indexOfLastExericise-exericisesPerPage;
  const currentExericises=exericises.slice(indexOfFirstExericise,indexOfLastExericise)
  const handleChange=(e,value)=>{
        setCurrentPage(value);
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      if (bodyPart === "all") {
        const data = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
        setExericises(data);
      } else {
        const data = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
        setExericises(data);
      }
    };
    fetchExercisesData();
  }, [bodyPart]);

    
  return (
    <Box id="exericises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing results
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap="10px" justifyContent="center">
        {currentExericises.map((exericise,index) => (
          <ExericiseCard key={index} exericise={exericise} />
        ))}
      </Stack>
      <Stack alignItems="center" mt='60px'>
        {exericises.length > 9 && (
          <a href="/#exericises" style={{textDecoration:'none'}}>
          <Pagination
            siblingCount={0}
            defaultPage={1}
            count={Math.ceil(exericises.length / exericisesPerPage)}
            onChange={handleChange}
            
          /></a>
        )}
      </Stack>
    </Box>
  );
};

export default Exericises;
