import { ExploraLayout } from '@/components/layouts'
import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardMedia, FormControl, FormGroup, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField, TextareaAutosize, Typography } from '@mui/material'
import Image from 'next/image'
import { Search } from '@mui/icons-material'
import toursBD from '@/api/toursBD'
import { toursList } from '@/interfaces'
import { TourCard } from '@/components/tour/TourCard'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'

interface Props {
  tours: Array<toursList>;
}

const Tours: NextPage<Props> = ({ tours }) => {

  const [filter, setFilter] = useState('');
  const [searchText, setSearchText] = useState('');
  const filteredTours = tours?.filter((e: toursList )=> {
    return (
      e?.titulo?.toLowerCase().indexOf(searchText?.toLowerCase()) !== -1
      ||
      e?.titulo?.toLowerCase().indexOf(filter?.toLowerCase()) !== -1
    )
  });



  return (
    <ExploraLayout title={"Tours"} pageDescription={"Tours disponibles"}>
      <Box position="relative" width="100%">
        <CardMedia
          component="img"
          height="350"
          image="/portada_tour.png"
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

      <Box sx={{ display: 'flex', justifyContent: 'center', marginX: 3, marginY: 5, gap: 4 }} >
        <div style={{ position: 'relative', cursor: 'pointer', width: '300px', height: '300px', borderRadius: '10px', overflow: 'hidden' }}
          onClick={() => setFilter('ica')}
        >
          <Image
            src="/ica_filtro.png"
            alt="logo Peru Exploring"
            layout="fill"
            objectFit="cover"
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <Typography variant="h1">ICA</Typography>
          </div>
        </div>


        <div style={{ position: 'relative', cursor: 'pointer', width: '300px', height: '300px', borderRadius: '10px', overflow: 'hidden' }}
          onClick={() => setFilter('lima')}
        >
          <Image
            src="/lima_filtro.png"
            alt="logo Peru Exploring"
            layout="fill"
            objectFit="cover"
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <Typography variant="h1">LIMA</Typography>
          </div>
        </div>


        <div style={{ position: 'relative', cursor: 'pointer', width: '300px', height: '300px', borderRadius: '10px', overflow: 'hidden' }}
          onClick={() => setFilter('cuzco')}
        >
          <Image
            src="/cuzco_filtro.png"
            alt="logo Peru Exploring"
            layout="fill"
            objectFit="cover"
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <Typography variant="h1">CUZCO</Typography>
          </div>
        </div>

      </Box>

      <Box display="flex" justifyContent="center" >
        <div style={{ backgroundColor: 'gray', borderRadius: 30 }}>
          <input type="text" style={{ border: 'none', paddingLeft: 60, outline: 'none', backgroundColor: 'gray', marginLeft: 10, color: 'white' }}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button style={{ backgroundColor: 'purple', color: 'white', paddingLeft: 30, paddingRight: 20, border: 'none', margin: 0 }}>
            <Search />
          </Button>
        </div>
      </Box>
      <Box
        sx={{ marginX: { xs: 5, sm: 10, md: 5, lg: 30, xl: 60} }}
        // margin={20}
        marginY={4}
      >
        {
          filteredTours?.map((tour: toursList) => (
            <TourCard key={tour.id} tour={tour} />
          ))
        }
      </Box>
    </ExploraLayout>

  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { data } = await toursBD.get<toursList>('');

  const tours = data;
  return {
    props: {
      tours
    }
  }
}



export default Tours