import { Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import BodyPartImage from '../assets/body-part.png';
import TargetImage from '../assets/target.png';
import EquipmentImage from '../assets/equipment.png';
const Detail = ({exericiseDetail}) => {
    const extraDetail = [
        {
          icon: BodyPartImage,
          name: exericiseDetail.bodyPart,
        },
        {
          icon: TargetImage,
          name: exericiseDetail.target,
        },
        {
          icon: EquipmentImage,
          name: exericiseDetail.equipment,
        },
      ];
  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
    <img  loading="lazy" className="detail-image"  src={exericiseDetail.gifUrl}/>
    <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {exericiseDetail.name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{exericiseDetail.name}</span> bup is one
          of the best <br /> exercises to target your {exericiseDetail.target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        { extraDetail?.map((item,index) => (
          <Stack key={index} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={exericiseDetail.bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))} 
      </Stack>
    </Stack>
  )
}

export default Detail