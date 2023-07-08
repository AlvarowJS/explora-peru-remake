import { ExploraLayout } from '@/components/layouts'
import React from 'react'
import { Box, Button, Card, CardMedia, FormControl, FormGroup, FormHelperText, Grid, Input, InputAdornment, InputLabel, OutlinedInput, TextField, TextareaAutosize, Typography } from '@mui/material'
import Image from 'next/image'
import { Search } from '@mui/icons-material'

const Tours = () => {
  return (
    <ExploraLayout title={"Tours"} pageDescription={"Tours disponibles"}>
      <Box position="relative" width="100%">
        <CardMedia
          component="img"
          height="300"
          image="/portada_home.png"
          alt="portada"

        />
        {/* <Box position="absolute" top="25%" left="40%" textAlign="center" color="white"> */}
        <Box
          position="absolute"
          top="50%" left="50%"
          textAlign="center"
          sx={{
            transform: 'translate(-50%, -50%)',
          }}
          color="white" >

          <Typography variant="h1" sx={{ fontSize: 40 }}>Tours</Typography>
          <Typography variant="h4" sx={{ fontSize: 30, marginTop: 4, marginBottom: 5 }}>
            Escoge tu próximo destino
          </Typography>

        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginX: 10, marginY: 5, gap: 2 }} >
        <div style={{ position: 'relative', width: '200px', height: '200px', borderRadius: '10px', overflow: 'hidden' }}>
          <Image
            src="/portada_home.png"
            alt="logo Peru Exploring"
            layout="fill"
            objectFit="cover"
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <Typography>ICA</Typography>
          </div>
        </div>


        <div style={{ position: 'relative', width: '200px', height: '200px', borderRadius: '10px', overflow: 'hidden' }}>
          <Image
            src="/portada_home.png"
            alt="logo Peru Exploring"
            layout="fill"
            objectFit="cover"
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <Typography>LIMA</Typography>
          </div>
        </div>


        <div style={{ position: 'relative', width: '200px', height: '200px', borderRadius: '10px', overflow: 'hidden' }}>
          <Image
            src="/portada_home.png"
            alt="logo Peru Exploring"
            layout="fill"
            objectFit="cover"
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <Typography>CUZCO</Typography>
          </div>
        </div>

      </Box>

      <TextField
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          )
        }}
      />
    </ExploraLayout>
  )
}

export default Tours