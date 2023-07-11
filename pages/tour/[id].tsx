import React from 'react'
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { getTourInfo } from '@/utils/getTourInfo';
import { toursList } from '@/interfaces';
import { ExploraLayout } from '@/components/layouts'
import { Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';

interface Props {
    tour: toursList;
}
const TourPage: NextPage<Props> = ({ tour }) => {
    return (
        <ExploraLayout title={"Tours"} pageDescription={"Tours disponibles"}>
            <Grid container spacing={4} marginY={10}>
                <Grid item md={6}>
                    <div style={{ position: 'relative', cursor: 'pointer', width: '100%', height: '600px', borderRadius: '10px', overflow: 'hidden' }}>
                        <Image
                            src={`https://backend.peruexploring.pe/public/storage/tours/${tour.titulo}/${tour.img}`}
                            alt="logo Peru Exploring"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </Grid>
                <Grid item md={6}>

                    <Typography variant="h1" sx={{ fontSize: 40, color: 'darkorange' }}>
                        {tour.titulo}
                    </Typography>
                    <Typography>
                        {tour.descripcion_spanish}
                    </Typography>

                    <Typography variant="h1" sx={{ fontSize: 20, color: 'darkorange' }}>
                        Incluye
                    </Typography>
                    <Typography style={{ whiteSpace: 'pre-line' }}>
                        {tour.incluye_spanish}
                    </Typography>

                    <Typography variant="h1" sx={{ fontSize: 20, color: 'darkorange' }}>
                        Duración
                    </Typography>
                    <Typography>
                        {tour.duracion}
                    </Typography>
                </Grid>
            </Grid>
        </ExploraLayout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const toursL = [...Array(10)].map((value, index) => `${index + 1}`);

    return {
        paths: toursL.map(id => ({
            params: { id }
        })),
        // fallback: false
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };

    const tour = await getTourInfo(id);

    if (!tour) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }


    return {
        props: {
            tour
        },
        revalidate: 86400, // 60 * 60 * 24,
    }
}

export default TourPage