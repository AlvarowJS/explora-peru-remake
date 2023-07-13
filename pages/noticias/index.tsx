import React from 'react'
import { ExploraLayout } from '@/components/layouts'
import { Box, Button, Card, CardMedia, FormControl, FormGroup, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField, TextareaAutosize, Typography } from '@mui/material'
import { NoticiaCard } from '@/components/noticia/NoticiaCard'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import noticiasBD from '@/api/noticiasBD'
import { NoticiasList } from '@/interfaces'

interface Props {
    noticias: Array<NoticiasList>;
}
const Noticias: NextPage<Props> = ({ noticias }) => {
    return (
        <ExploraLayout title={'Perú Exploring - Noticias'} pageDescription={'Noticias de explora'}>
            <Box position="relative" width="100%">
                <CardMedia
                    component="img"
                    height="350"
                    image="/noto_noticias.png"
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

                    <Typography variant="h1" sx={{ fontSize: 40 }}>Noticias</Typography>
                    <Typography variant="h4" sx={{ fontSize: 30, marginTop: 4, marginBottom: 5 }}>
                        No te pierdas las últimas noticias sobre nosotros y el turismo en el Perú
                    </Typography>

                </Box>
            </Box>

            <Grid container spacing={4} marginY={5}>
                {
                    noticias?.map((noticia: NoticiasList) => (
                        <NoticiaCard key={noticia.id} noticia={noticia} />
                    ))
                }
            
            </Grid>
        </ExploraLayout>
    )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { data } = await noticiasBD.get<NoticiasList>('');

    const noticias = data;
    return {
        props: {
            noticias
        }
    }
}


export default Noticias