import { toursList } from '@/interfaces'
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'
interface Props {
    tour: toursList
}
export const TourCard: FC<Props> = ({ tour }) => {
    return (
        <Grid container key={tour.id} paddingY={4}>
            <Grid item container xs={12} sm={6} md={3} >
                {/* <div style={{ borderRadius: '20px', overflow: 'hidden' }}> */}
                <Image
                    src={`https://backend.peruexploring.pe/public/storage/tours/${tour.titulo}/${tour.img}`}
                    width={200}
                    height={150}
                    alt={tour.titulo == undefined ? "imagen" : tour.titulo}
                    style={{ borderRadius: '20px' }}
                />
                {/* </div> */}
            </Grid>
            <Grid item xs={12} sm={6} md={6} >
                <Typography variant='h4' component='h4' sx={{ color: '#E89241', fontSize: 20 }}>{tour.titulo}</Typography>
                <div
                    style={{
                        maxHeight: '120px', 
                        overflowY: 'auto', 
                    }}
                >
                    <Typography>{tour.descripcion_spanish}</Typography>
                </div>
            </Grid>
            <Grid item container xs={12} sm={6} md={3} alignItems="center">
                <Button style={{ color: 'white', backgroundColor: '#E89241' }}>
                    Mas información
                </Button>
            </Grid>
        </Grid>
    )
}
