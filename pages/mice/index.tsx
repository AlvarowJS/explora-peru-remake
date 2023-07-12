import React from 'react'
import { ExploraLayout } from '@/components/layouts'
import { Box, Button, Card, CardMedia, FormControl, FormGroup, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField, TextareaAutosize, Typography } from '@mui/material'
import Image from 'next/image'
const Mice = () => {
  return (
    <ExploraLayout title={"Circuitos"} pageDescription={"Circuitos disponibles"}>

      
      <Box position="relative" width="100%">
        <CardMedia
          component="img"
          height="350"
          image="/foto_mice.png"
          alt="portada mice"

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

          <Typography variant="h1" sx={{ fontSize: 40 }}>Acumula experiencias inolvidables junto a nosotros</Typography>
          <Typography variant="h4" sx={{ fontSize: 30, marginTop: 4, marginBottom: 5 }}>
            Mira todo lo que ofrecemos para ti
          </Typography>

        </Box>
      </Box>
      <Box sx={{ display: 'flex', marginTop: 8, gap: 3 }}>
        <Box sx={{ width: 120, height: 40, backgroundColor: '#E89241	' }}>

        </Box>
        <Typography variant='h1' component='h1' sx={{ color: '#E89241' }}>MICE</Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={6}>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <Image
              src='/sinimagen.png'
              alt='mice imagen'
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <Image
              src='/sinimagen.png'
              alt='mice imagen'
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6} >
          <Typography variant="h1" sx={{ fontSize: 20, color: '#E89241' }}>
            Diseña tu propia experiencia junto a nosotros!
            Eventos especiales, viajes a medida, grupos de incentivos y reuniones.
          </Typography>
          <Typography variant="h4" sx={{ fontSize: 20 }}>
            •Nuestra división MICE siempre está creando experiencias
            únicas y satisfaciendo las necesidades de nuestros clientes. <br /><br />
            • Nuestro Equipo trabajará en cada proyecto ofreciendo información
            personalizada y detallada para maximizar su experiencia.<br /><br />
            • Cuando se trata de crear una experiencia única en Perú, la
            variedad y la innovación son la clave de todo.<br /><br />
            • Perú, tierra de tesoros escondidos con gran variedad 
            geográfica, cultural, histórica y gastronómica.<br /><br />
            • Un viaje de incentivo no solo será un viaje a un nuevo destino como Perú, sino que terminará siendo una experiencia única en la vida.
          </Typography>
        </Grid>
      </Grid>


      <Box sx={{ display: 'flex', marginTop: 8, gap: 3 }}>
        <Box sx={{ width: 120, height: 40, backgroundColor: '#E89241	' }}>

        </Box>
        <Typography variant='h1' component='h1' sx={{ color: '#E89241	' }}>GRUPO DE INCENTIVO</Typography>

      </Box>
      <Grid container>
        <Grid item md={1}></Grid>
        <Grid item md={10}>
          <Typography variant="h4" sx={{ fontSize: 20 }}>
            Los viajes de Incentivos son una buena manera de fidelizar clientes y/o motivar a equipos de ventas.
            Desde muchos años esto se lleva a cabo, cada vez se busca un atractivo especial, algo diferente y único.
            Así mismo nosotros nos especializamos en creatividad, exclusividad y dinamismo, aventura, actividades al aire libre,
            temas culturales, gastronomía y lujo. El resultado final es el éxito de los objetivos que nos trazamos.
          </Typography>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
      <Grid container>
        <Grid item md={3}></Grid>
        <Grid item md={6}>
          <div style={{ position: 'relative', marginTop: '10px',  marginBottom: 30, width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden' }}>
            <Image
              src='/sinimagen.png'
              alt='mice imagen'
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>

      <Box sx={{ display: 'flex', marginTop: 8, gap: 3 }}>
        <Box sx={{ width: 120, height: 40, backgroundColor: '#E89241	' }}>

        </Box>
        <Typography variant='h1' component='h1' sx={{ color: '#E89241	' }}>EXPERIENCIAS ÚNICAS</Typography>
      </Box>
      <Grid container>
        <Grid item md={1}></Grid>
        <Grid item md={10}>
          <Typography marginY={3} variant="h4" sx={{ fontSize: 20 }}>
            Cada uno de nuestros viajes son experiencias únicas y deslumbrantes. Combina regiones como la costa, la sierra y la selva, regiones maravillosas y llenas de historia, cultura con servicios personalizados de gran calidad con la mejor selección de hoteles de la región, los mejores restaurantes donde la fusión gastronómica, la presentación culinaria los hacen únicos e irresistibles.
          </Typography>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item md={2}></Grid>
        <Grid item xs={12} md={4}>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <Image
              src='/sinimagen.png'
              alt='mice imagen'
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <Image
              src='/sinimagen.png'
              alt='mice imagen'
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>

      <Box sx={{ display: 'flex', marginTop: 8, gap: 3 }}>
        <Box sx={{ width: 120, height: 40, backgroundColor: '#E89241	' }}>

        </Box>
        <Typography variant='h1' component='h1' sx={{ color: '#E89241	' }}>EQUIPO DE ESPECIALISTAS</Typography>
      </Box>

      <Grid container>
        <Grid item md={1}></Grid>
        <Grid item md={10}>
          <Typography marginY={3} variant="h4" sx={{ fontSize: 20 }}>
            Somos los especialistas en la coordinación y ejecución siempre buscando el mejor lugar acorde para poder acoger a los participantes, complementándolo con todos los servicios de audiovisual, alimentación, alojamientos, transporte, cocteles, cenas de apertura en lugares históricos o museos. Nos encargamos de todos los detalles.
          </Typography>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <Image
              src='/sinimagen.png'
              alt='mice imagen'
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <Image
              src='/sinimagen.png'
              alt='mice imagen'
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <Image
              src='/sinimagen.png'
              alt='mice imagen'
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Grid>
      </Grid>

      <Box marginY={5} sx={{ display: 'flex', marginTop: 8, gap: 3 }}>
        <Box sx={{ width: 120, height: 40, backgroundColor: '#E89241	' }}>

        </Box>
        <Typography variant='h1' component='h1' sx={{ color: '#E89241	' }}>UNIENDO SENTIMIENTOS</Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <Image
              src='/sinimagen.png'
              alt='mice imagen'
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography marginY={3} variant="h4" sx={{ fontSize: 20 }}>
            Viajes basados en algún interés especial, inspirado en un tema, experiencias únicas. 100% Tailored made, propuestas que cumplan con los deseos de los clientes. Estos pueden ser educativos, ecológicos, gastronómicos, aventura, deportivos (Futbol, Maratones, Yoga), vivenciales.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <Image
              src='/sinimagen.png'
              alt='mice imagen'
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Grid>
      </Grid>

    </ExploraLayout>)
}

export default Mice