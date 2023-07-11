import { toursList } from '@/interfaces'
import { circuitoList } from '@/interfaces/circuitoList'
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
interface Props {
    circuito: circuitoList
}
export const CircuitoCard: FC<Props> = ({ circuito }) => {
    const router = useRouter();
    const verCircuito = () => {
        router.push(`circuito/${circuito.id}`)
    }
    return (
        <Grid container key={circuito.id} paddingY={4}>
            <Grid item container xs={12} sm={6} md={3} >
                {/* <div style={{ borderRadius: '20px', overflow: 'hidden' }}> */}
                <Image
                    src={`https://backend.peruexploring.pe/public/storage/circuitos/${circuito.titulo}/${circuito.img}`}
                    width={200}
                    height={150}
                    alt={circuito.titulo == undefined ? "imagen" : circuito.titulo}
                    style={{ borderRadius: '20px' }}
                />
                {/* </div> */}
            </Grid>
            <Grid item xs={12} sm={6} md={6} >
                <Typography variant='h4' component='h4' sx={{ color: '#E89241', fontSize: 20 }}>{circuito.titulo}</Typography>
                <div
                    style={{
                        maxHeight: '120px',
                        overflowY: 'auto',
                    }}
                >
                    <Typography>{circuito.duracion}</Typography>
                </div>
            </Grid>
            <Grid item container xs={12} sm={6} md={3} alignItems="center">
                <Button style={{ color: 'white', backgroundColor: '#E89241' }}
                    onClick={verCircuito}
                >
                    Mas información
                </Button>
            </Grid>
        </Grid>
    )
}
