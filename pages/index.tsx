import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { ExploraLayout } from '@/components/layouts'
import { Box, Button, Card, CardMedia, FormControl, FormGroup, FormHelperText, Grid, Input, InputLabel, OutlinedInput, TextField, TextareaAutosize, Typography } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Label } from '@mui/icons-material'
const inter = Inter({ subsets: ['latin'] })
import { useForm } from 'react-hook-form';
import axios from 'axios'
const URL = 'http://127.0.0.1:8000/api/v1/contactenos';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useEffect, useState } from 'react'
const MySwal = withReactContent(Swal)

interface FormData {
  nombre: string;
  email: string;
  celular: string;
  mensaje: string;
}

export default function Home() {  

  const handleDescargarProtegeme = () => {
    window.open('./Responsable/afiche_esnna.pdf', '_blank');
  };
  const handleDescargarMincetur = () => {
    window.open('./Responsable/CONSTANCIA MINCETUR PEX.pdf', '_blank');
  };

  const intranet = () => {
    window.location.href = "https://agentes.peruexploring.pe/"
  }

  const { handleSubmit, register, reset } = useForm<FormData>();

  const defaultForm = {
    nombre: '',
    email: '',
    celular: '',
    mensaje: '',
  }

  const onSubmit = (data: FormData) => {
    axios.post(URL, data)
      .then(res => {
        reset(defaultForm)
        MySwal.fire({
          icon: 'success',
          title: 'Mensaje Enviado!',
          text: 'Nos comunicaremos contigo enseguida :)',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      })
      .catch(err => console.log(err))

  }

  return (
    <ExploraLayout title={'Perú Exploring - Home'} pageDescription={'Unete a nosotros y accede a las mejores ofertas de viaje!'}>
      <Box position="relative" width="100%">
        <CardMedia
          component="img"
          height="600"
          image="/portada_home.png"
          alt="portada"
          sx={{ filter: 'brightness(60%)' }}
        />
        <Box position="absolute" top="20%" left="10%" textAlign="left" color="white">
          <Typography variant="h1" sx={{ fontSize: 40 }}>Únete a nosotros y accede a las mejores
            ofertas de viaje!</Typography>
          <Typography variant="h4" sx={{ fontSize: 30, marginTop: 4, marginBottom: 5 }}>
            Estamos disponibles a nuevas agencias asociadas</Typography>
          <Button sx={{
            backgroundColor: 'white',
            color: 'black',
            '&:hover': {
              backgroundColor: 'darkorange',
            },
          }}
            onClick={intranet}

          >Ingresa aquí</Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', marginTop: 8, gap: 3 }}>
        <Box sx={{ width: 120, height: 40, backgroundColor: '#E89241	' }}>

        </Box>
        <Typography variant='h1' component='h1' sx={{ color: '#E89241	' }}>Sobre nosotros</Typography>
      </Box>
      <Box sx={{ marginTop: 5, marginLeft: 10 }}>
        <Typography variant='h4' component='h4' sx={{ color: '#E89241', fontSize: 20 }}>Perú exploring es un operador turístico del Perú.</Typography>
        <Typography>•Actualmente contamos con 10 años de experiencia y contamos con experiencia en lo que hacemos.</Typography>
        <Typography>•Tenemos servicios únicos que nos diferencian de los otros operadores, asi como también servicios compartidos
          en un solo idioma.</Typography>
        <Typography>•Trabajamos con agencias de viajes mayoristas, buscando ser su aliado y fomentar nuestra cultura peruana
          orientándonos a la calidad de nuestros servicios, lo que nos ayuda a crecer como operadores.</Typography>
        <Typography>•Además trabajamos con agencias de distintos paises, recibiendo los pasajeros FIT o grupos, representándolos
          con bastante esfuerzo y compromiso.</Typography>
      </Box>

      <Box sx={{ margin: '60px 100px 20px 100px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              height="140"
              width="140"
              image="/portada_home.png"
              alt="portada"
              sx={{ borderRadius: 5 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              height="140"
              width="140"
              image="/portada_home.png"
              alt="portada"
              sx={{ borderRadius: 5 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              height="140"
              width="140"
              image="/portada_home.png"
              alt="portada"
              sx={{ borderRadius: 5 }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box textAlign='center' sx={{ color: '#2C2A64' }}>
        <Typography>Acumula momentos increibles junto a nosotros</Typography>
      </Box>

      <Box position="relative" width="100%">
        <CardMedia
          component="img"
          // height="440"          
          image="/portada_home.png"
          alt="portada"
          sx={{

            width: '100%',
            height: '440px',
            '@media (max-width: 600px)': {
              height: '800px',
            },
          }}
        />
        <Box position="absolute" top="10%" left="10%" textAlign="center" color="white">
          <Typography variant="h1" sx={{ fontSize: 40, marginBottom: 6 }}>Turismo Responsable</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>

              <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                  <Image
                    width={150}
                    height={150}
                    src='/protegeme.png'
                    alt=''

                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>En nuestra agencia NO PROMOVEMOS NI PERMITIMOS la
                    explotación sexual de niños,
                    niñas y adolescentes.</Typography>
                  <Button sx={{
                    backgroundColor: '#E89241',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'darkorange',
                    },
                  }}
                    onClick={handleDescargarProtegeme}

                  >Ver mas</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>

                <Grid item xs={12} md={6}>
                  <Image
                    width={150}
                    height={150}
                    src='/mincetur.png'
                    alt=''
                  />
                </Grid>

                <Grid item xs={12} md={6}>

                  <Typography>
                    Estamos inscritos en el Directorio Nacional de Prestadores de Servicios Turísticos
                    Calificados.
                  </Typography>
                  <Button sx={{
                    backgroundColor: '#E89241',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'darkorange',
                    },
                  }}
                    onClick={handleDescargarMincetur}

                  >Ver mas</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Box>
      </Box>

      <Box sx={{ marginTop: 10, padding: 4 }}>
        <Grid container spacing={2}>
          <Grid item sx={{ paddingRight: 15, }} xs={12} md={6} >
            <Typography variant='h1' fontSize={50}>Contáctanos</Typography>
            <Typography >¿Estás interesado en nuestros servicios?
              Escríbenos</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ paddingTop: 4, display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '1rem', alignItems: 'center', gap: 2 }}>
                <InputLabel htmlFor="nombre">Nombre:</InputLabel>
                <FormControl>
                  <OutlinedInput id="nombre" type="text" sx={{ borderRadius: '29px', height: '35px', }} {...register('nombre')} />
                </FormControl>

                <InputLabel htmlFor="nombre">E-mail:</InputLabel>
                <FormControl>
                  <OutlinedInput id="nombre" type="text" sx={{ borderRadius: '29px', height: '35px' }} {...register('email')} />
                </FormControl>

                <InputLabel htmlFor="nombre">Celular:</InputLabel>
                <FormControl>
                  <OutlinedInput id="nombre" type="text" sx={{ borderRadius: '29px', height: '35px' }} {...register('celular')} />
                </FormControl>

                <InputLabel htmlFor="nombre">Mensaje:</InputLabel>
                <FormControl>
                  {/* <TextareaAutosize id="nombre" minRows={3} style={{ borderRadius: '29px', padding: '20px' }} {...register('mensaje')} /> */}
                  {/* <OutlinedInput id="nombre" type="text" sx={{ borderRadius: '29px',height: '85px' }} {...register('mensaje')} /> */}
                  <TextField
                    multiline
                    rows={3}
                    variant="outlined"
                    {...register('mensaje')}

                  />
                </FormControl>

              </Box>
              <Button type="submit" style={{ color: 'white', backgroundColor: '#E89241', width: '100%' }}>
                Enviar
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: '#2C2A64', borderRadius: 10, padding: 10, color: 'white' }}>

              <Box sx={{ marginBottom: 3, display: 'flex' }}>
                <AccessTimeIcon sx={{ marginRight: 2, fontSize: 32 }} />
                <Box>
                  <Typography>Lunes a Viernes: 8:00 a.m - 6:00 p.m</Typography>
                  <Typography>Sábado: 8:00 a.m - 1:00 p.m</Typography>
                </Box>
              </Box>
              <Box sx={{ marginBottom: 3, display: 'flex' }}>
                <MailOutlineIcon sx={{ marginRight: 2, fontSize: 32 }} />
                <Box>
                  <Typography>reservas1@peruexploring.pe</Typography>
                  <Typography>reservas2@peruexploring.pe</Typography>
                </Box>
              </Box>
              <Box sx={{ marginBottom: 3, display: 'flex' }}>
                <CallIcon sx={{ marginRight: 2, fontSize: 32 }} />
                <Box>
                  <Typography>Reservas 1: +51 932 513 171 </Typography>
                  <Typography>Reservas 2: +51 974 581 054</Typography>
                  <Typography>Atención 24Hrs: +51 922 060 213</Typography>
                </Box>
              </Box>
              <Box sx={{ marginBottom: 3, display: 'flex' }}>
                <LocationOnIcon sx={{ marginRight: 2, fontSize: 32 }} />
                <Box>
                  <Typography>Calle San Manuel 174, Urb. Santa </Typography>
                  <Typography>Luisa - Los Olivos (Lima, Perú)</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ExploraLayout >
  )
}
