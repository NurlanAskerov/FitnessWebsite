import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExericiseVideos from "../components/ExericiseVideos";
import SimilarExericises from "../components/SimilarExericises";

const ExericiseDetail = () => {
  const [exericiseDetail, setExericiseDetail] = useState({});
  const [exericiseVideos, setExericiseVideos] = useState([]);
  const [equipmentExericises, setEquipmentExericises] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState([]);


  const { id } = useParams();
  const ExericiseDbUrl = "https://exercisedb.p.rapidapi.com";
  const YoutubeSearchUrl =
    "https://youtube-search-and-download.p.rapidapi.com";
  useEffect(() => {

    const fetchExericiseData = async () => {
      const exericiseDetailData = await fetchData( `${ExericiseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
      setExericiseDetail(exericiseDetailData);
      const exericiseVideosData=await fetchData(`${YoutubeSearchUrl}/search?query=${exericiseDetailData.name}`,youtubeOptions)
      setExericiseVideos(exericiseVideosData.contents)
      const targetMuscleData=await fetchData(`${ExericiseDbUrl}/exercises/target/${exericiseDetailData.target}`,exerciseOptions)
      setTargetMuscle(targetMuscleData)
      const equipmentExericisesData=await fetchData(`${ExericiseDbUrl}/exercises/equipment/${exericiseDetailData.equipment}`,exerciseOptions)
      setEquipmentExericises(equipmentExericisesData)
    };
    
    fetchExericiseData();
  }, [id]);

  return (
    <Box>
      <Detail exericiseDetail={exericiseDetail} />
      <ExericiseVideos exericiseVideos={exericiseVideos} name={exericiseDetail.name} />
      <SimilarExericises targetMuscle={targetMuscle} equipmentExericises={equipmentExericises} />
    </Box>
  );
};

export default ExericiseDetail;
