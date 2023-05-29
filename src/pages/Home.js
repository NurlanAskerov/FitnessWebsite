import React, { useState } from "react";
import Exericises from "../components/Exericises";
import HeroBanner from "../components/HeroBanner";
import SearchExericises from "../components/SearchExericises";

const Home = () => {
  const [exericises, setExericises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <div>
      <HeroBanner />
      <SearchExericises
        setExericises={setExericises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
      <Exericises
        setExericises={setExericises}
        exericises={exericises}
        bodyPart={bodyPart}
      />
    </div>
  );
};

export default Home;
