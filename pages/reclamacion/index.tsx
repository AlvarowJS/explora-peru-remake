import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ExploraLayout } from '@/components/layouts'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Button, Input, InputLabel, MenuItem, Select, TextField, FormControl, Typography, Box, Grid } from '@mui/material'
const MySwal = withReactContent(Swal)
interface FormData {
  accion: string;
  descripcion: string;
  detalle: string;
  dni: string;
  domicilio: string;
  email: string;
  moneda_tipo: string,
  monto_reclamado: string,
  nombre_completo: string,
  padre: string,
  pais: string,
  pedido: string,
  relacion: string,
  telefono: string
}
const URL = 'https://backend.peruexploring.pe/public/api/v1/libros'
const Reclamaciones = () => {
  let fechaActual = new Date();
  let dia = fechaActual.getDate();
  let mes = fechaActual.getMonth() + 1; //Recuerda que los meses empiezan en 0
  let anio = fechaActual.getFullYear();
  let today = dia + '/ ' + mes + '/ ' + anio
  const defaulForm = {
    accion: '',
    descripcion: '',
    detalle: '',
    dni: '',
    domicilio: '',
    email: '',
    moneda_tipo: '',
    monto_reclamado: '',
    nombre_completo: '',
    padre: '',
    pais: '',
    pedido: '',
    relacion: '',
    telefono: ''
  }
  const { handleSubmit, register, reset, watch } = useForm()
  const onSubmit = (data: FormData) => {

    return MySwal.fire({
      title: '¿Estás seguro de enviar el reclamo?',
      text: "¡No podrás editar esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ms-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        MySwal.fire({
          icon: 'success',
          title: 'Reclamo Enviado!',
          text: 'Atenderemos sus sugerencias :)',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
        axios.post(URL, data)
          .then(res => {
            reset(defaulForm)
          })
          .catch(err => console.log(err))
      }
    })

    // //////

  }
  return (
    <ExploraLayout title={'Perú Exploring - Home'} pageDescription={'Unete a nosotros y accede a las mejores ofertas de viaje!'}>
      <Box sx={{marginX: { xs: 5, sm: 20, md: 30}}}>

        <Typography variant="h1" sx={{ fontSize: 40 }}>Libro de Reclamaciones</Typography>
        <br />
        <Typography>PERU EXPLORING OPERADORES TURISTICOS E.I.R.L - RUC: 20608098977</Typography>
        <Typography>DIRECCIÓN: Calle San Manuel 174, Urb. Santa Luisa - Los Olivos
          Lima, Perú</Typography>
        <Typography>Fecha: {today}</Typography>

        <form onSubmit={handleSubmit(onSubmit)} className='reclamacion'>
          <Typography variant="h4" sx={{ fontSize: 30, marginTop: 4, marginBottom: 5 }}>1. INFORMACIÓN DEL CONSUMIDOR RECLAMANTE</Typography>
          <Grid marginY={4} container spacing={4}>
            <Grid item md={4}>
              <InputLabel htmlFor="nombre_completo">NOMBRE COMPLETO (*):</InputLabel>
              <Input type="text" fullWidth
                {...register('nombre_completo')} required
              />
            </Grid>
            <Grid item md={4}>
              <InputLabel htmlFor="dni">DNI / CE (*):</InputLabel>
              <Input type="text" id='dni' fullWidth
                {...register('dni')} required />
            </Grid>
            <Grid item md={4}>
              <InputLabel htmlFor="telefono">TELEFÓNO:</InputLabel>
              <Input type="text" id='telefono' fullWidth
                {...register('telefono')} />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item md={8}>
              <InputLabel htmlFor="email">EMAIL (*):</InputLabel>
              <Input type="email" id='email'
                {...register('email')} fullWidth required />
            </Grid>
            <Grid item md={4}>
              <InputLabel htmlFor="padre">PADRE O MADRE : (MENORES DE EDAD):</InputLabel>
              <Input type="text" fullWidth
                {...register('padre')} />
            </Grid>

          </Grid>
          <Grid container spacing={4}>
            <Grid item md={8}>
              <InputLabel htmlFor="domicilio">DOMICILIO (*):</InputLabel>
              <Input type="text" id='domicilio' fullWidth
                {...register('domicilio')} required />
            </Grid>
            <Grid item md={4}>
              <InputLabel htmlFor="pais">PAÍS:</InputLabel>
              <Input type="text" id='pais' fullWidth
                {...register('pais')} />
            </Grid>

          </Grid>
          <Typography variant="h4" sx={{ fontSize: 30, marginTop: 4, marginBottom: 5 }}>2. IDENTIFICACIÓN DEL BIEN CONTRATADO</Typography>
          <Grid container spacing={4}>
            <Grid item md={8}>
              <InputLabel id="relacion">BIEN / SERVICIO:</InputLabel>
              <Select id="relacion" type="text"
                value="Producto"
                label="Producto"
                fullWidth
                {...register('relacion')}
              >
                <MenuItem value='producto'>Producto</MenuItem>
                <MenuItem value='servicio'>Servicio</MenuItem>
              </Select>
            </Grid>
            <Grid item md={2}>
              <InputLabel htmlFor="monto_reclamado">MONTO RECLAMADO:</InputLabel>
              <Input type="text"
                {...register('monto_reclamado')} />
            </Grid>
            <Grid item md={2}>
              <InputLabel id="moneda_tipo">MONEDA:</InputLabel>
              <Select id="moneda_tipo" type="text"
                value="soles"
                fullWidth
                {...register('moneda_tipo')}
              >
                <MenuItem value='producto'>S/.</MenuItem>
                <MenuItem value='servicio'>US $</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={12}>
              <InputLabel htmlFor="descripcion">DESCRIPCIÓN(*)</InputLabel>
              {/* <Input type="text" 
                  {...register('descripcion')} required /> */}
              <FormControl fullWidth>
                <TextField
                  multiline
                  rows={6}
                  variant="outlined"
                  
                  {...register('descripcion')}
                  
                />
              </FormControl>
            </Grid>
          </Grid>
          <Typography variant="h4" sx={{ fontSize: 30, marginTop: 4, marginBottom: 5 }}>3. DETALLE DE LA RECLAMACIÓN Y PEDIDO DEL CONSUMIDOR</Typography>
          <Grid container>
            <InputLabel id="accion">ELIJA LA ACCIÓN QUE DESEA REALIZAR (*):</InputLabel>
            <Select fullWidth id="accion" value="Reclamo" {...register('accion')}>
              <MenuItem value='reclamo'>Reclamo</MenuItem>
              <MenuItem value='queja'>Queja</MenuItem>
            </Select>
          </Grid>
          <Grid container>
            <InputLabel htmlFor="detalle">DETALLE (*):</InputLabel>
            <FormControl fullWidth>
              <TextField
                multiline
                
                rows={6}
                variant="outlined"
                {...register('detalle')}

              />
            </FormControl>

            <Typography>   Solo se permite de 10 a 1000 caracteres, incluido los saltos de línea | 998</Typography>

          </Grid>
          <Grid container>
            <InputLabel htmlFor="pedido">PEDIDO (*):</InputLabel>
            <FormControl fullWidth>              
              <TextField
                multiline
                rows={6}
                variant="outlined"
                {...register('pedido')}

              />
            </FormControl>

            <Typography> Solo se permite de 10 a 1000 caracteres, incluido los saltos de línea | 998</Typography>

          </Grid>

          <Button sx={{
            backgroundColor: '#E89241',
            color: 'white',
            '&:hover': {
              backgroundColor: 'darkorange',
            },
          }}>Enviar</Button>
          {/* <button className='btn btn-secondary'>Cancelar</button> */}
        </form>
      </Box>
    </ExploraLayout>
  )
}

export default Reclamaciones