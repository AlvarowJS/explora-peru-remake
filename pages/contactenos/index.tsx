import React from 'react'
import { ExploraLayout } from '@/components/layouts'
import { FieldValues, useForm } from 'react-hook-form'
import { Button, Grid, Typography, Box, InputLabel, FormControl, OutlinedInput, TextField } from '@mui/material'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'
import Image from 'next/image'
const MySwal = withReactContent(Swal)
const URL = 'https://backend.peruexploring.pe/public/api/v1/noticias';
interface FormData {
    nombre: string;
    email: string;
    celular: string;
    mensaje: string;
}

const Contactenos = () => {
    const defaultForm = {
        nombre: '',
        email: '',
        celular: '',
        mensaje: '',
    }
    const { handleSubmit, register, reset } = useForm<FormData>();

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
        <ExploraLayout title={"Circuitos"} pageDescription={"Circuitos disponibles"}>

            <Grid container spacing={4} padding={10}>
                <Grid item xs={12} md={6}>
                    <div style={{ position: 'relative', cursor: 'pointer', width: '100%', height: '500px' }} >
                        <Image
                            src="/contacto.png"
                            alt="foto contacto"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
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

            </Grid>
        </ExploraLayout >
    )
}

export default Contactenos