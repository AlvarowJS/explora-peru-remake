import { NoticiasList } from '@/interfaces'
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
interface Props {
    noticia: NoticiasList
}
export const NoticiaCard: FC<Props> = ({ noticia }) => {
    const router = useRouter();
    const verNoticia = () => {
        router.push(`noticias/${noticia.id}`)
    }
    return (
        // <Grid container key={noticia.id} paddingY={4} spacing={4} >
        <Grid item xs={6} md={4} textAlign='center'>
            <div style={{ position: 'relative', cursor: 'pointer', width: '100%', height: '300px', borderRadius: '10px', overflow: 'hidden' }}>
                <Image
                    // src="/ica_filtro.png"
                    src={`https://backend.peruexploring.pe/public/storage/noticias/${noticia.titulo}/${noticia.img}`}
                    alt="logo Peru Exploring"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <Typography>{noticia.titulo}</Typography>

            <Typography>{noticia.nota}</Typography>

            <Button style={{ color: 'white', backgroundColor: '#E89241' }}
                onClick={verNoticia}
            >
                Mas información
            </Button>
        </Grid>
        // </Grid>
    )
}
