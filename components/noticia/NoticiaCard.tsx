import { NoticiasList } from '@/interfaces'
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'
interface Props {
    noticia: NoticiasList
}
export const NoticiaCard: FC<Props> = ({ noticia }) => {
    return (
        <Grid container key={noticia.id} paddingY={4} spacing={4} >
            <Grid item xs={12} md={4} textAlign='center'>
                <div style={{ position: 'relative', cursor: 'pointer', width: '100%', height: '300px', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image
                        src="/ica_filtro.png"
                        alt="logo Peru Exploring"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <Typography>{noticia.titulo}</Typography>

                <Typography>{noticia.nota}</Typography>

                <Button style={{ color: 'white', backgroundColor: '#E89241' }}>
                    Mas información
                </Button>
            </Grid>
        </Grid>
    )
}
