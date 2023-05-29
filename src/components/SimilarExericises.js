import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ExericiseCard from './ExericiseCard'
import Loader from './Loader'

const SimilarExericises = ({targetMuscle,equipmentExericises}) => {
  return (
    <Stack padding='5px'>
      {targetMuscle.length ?
      <>
        <Typography m='5'sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    
        <Stack m='5' direction="row" flexWrap="wrap" gap="10px" justifyContent="center">
         {targetMuscle?.slice(0,6)?.map((exericise) => (
          <ExericiseCard key={exericise.id} exericise={exericise} /> ))}
      </Stack>
      <Typography m='5' sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>   

      <Stack m='5' direction="row" flexWrap="wrap" gap="10px" justifyContent="center">
        {equipmentExericises?.slice(0,6)?.map((exericise) => (
          <ExericiseCard key={exericise.id} exericise={exericise} />

  ))}
      </Stack></>:<Loader/>}
    </Stack>
  )
}

export default SimilarExericises