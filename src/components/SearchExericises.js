import { Button, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExericises = ({ setExericises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      console.log(bodyPartsData);
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exericiseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      console.log(exericiseData);
      const searchedExericises = exericiseData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search)
      );
      console.log(searchedExericises);
      setExericises(searchedExericises);
    }
  };

  return (
    <div>
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          mb="49px"
          textAlign="center"
        >
          Awesome Exercises You <br /> Should Know
        </Typography>
        <Box position="relative">
          <TextField
            height="76px"
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "1170px", xs: "350px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
          />
          <Button
            className="search-btn"
            sx={{
              bgcolor: "#FF2625",
              color: "#fff",
              textTransform: "none",
              width: { lg: "173px", xs: "80px" },
              height: "56px",
              position: "absolute",
              right: "0px",
              fontSize: { lg: "20px", xs: "14px" },
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
        <Box sx={{ padding: "20px", width: "100%", position: "relative" }}>
          <HorizontalScrollBar
            data={bodyParts}
            setBodyPart={setBodyPart}
            bodyPart={bodyPart}
          />
        </Box>
      </Stack>
    </div>
  );
};

export default SearchExericises;
