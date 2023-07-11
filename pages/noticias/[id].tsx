import React from 'react'
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { getTourInfo } from '@/utils/getTourInfo';
import { NoticiasList } from '@/interfaces';
import { ExploraLayout } from '@/components/layouts'
import { Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { getCircuitoInfo } from '@/utils/getCircuitoInfo';
import { getNoticiaInfo } from '@/utils/getNoticiaInfo';

interface Props {
    noticia: NoticiasList;
}
const NoticiaPage: NextPage<Props> = ({ noticia }) => {
    return (
        <ExploraLayout title={"Circuito"} pageDescription={"Circuito disponibles"}>
            <Grid container spacing={4} marginY={10}>
                <Grid item md={6}>
                    <div style={{ position: 'relative', cursor: 'pointer', width: '100%', height: '600px', borderRadius: '10px', overflow: 'hidden' }}>
                        <Image
                            // src="/ica_filtro.png"
                            src={`https://backend.peruexploring.pe/public/storage/noticias/${noticia.titulo}/${noticia.img}`}
                            alt="logo Peru Exploring"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </Grid>
                <Grid item md={6}>

                    <Typography variant="h1" sx={{ fontSize: 40, color: 'darkorange' }}>
                        {noticia.titulo}
                    </Typography>
                    <Typography style={{ whiteSpace: 'pre-line' }}>
                        {noticia.nota}
                    </Typography>

                </Grid>
            </Grid>
        </ExploraLayout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const noticiaL = [...Array(10)].map((value, index) => `${index + 1}`);

    return {
        paths: noticiaL.map(id => ({
            params: { id }
        })),
        // fallback: false
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };

    const noticia = await getNoticiaInfo(id);

    if (!noticia) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }


    return {
        props: {
            noticia
        },
        revalidate: 86400, // 60 * 60 * 24,
    }
}

export default NoticiaPage