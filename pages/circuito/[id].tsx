import React from 'react'
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { getTourInfo } from '@/utils/getTourInfo';
import { circuitoList } from '@/interfaces';
import { ExploraLayout } from '@/components/layouts'
import { Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { getCircuitoInfo } from '@/utils/getCircuitoInfo';

interface Props {
    circuito: circuitoList;
}
const CircuitoPage: NextPage<Props> = ({ circuito }) => {
    return (
        <ExploraLayout title={"Circuito"} pageDescription={"Circuito disponibles"}>
            <Grid container spacing={4} marginY={10}>
                <Grid item md={6}>
                    <div style={{ position: 'relative', cursor: 'pointer', width: '100%', height: '600px', borderRadius: '10px', overflow: 'hidden' }}>
                        <Image
                            src={`https://backend.peruexploring.pe/public/storage/circuitos/${circuito.titulo}/${circuito.img}`}
                            alt="circuito Peru Exploring"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </Grid>
                <Grid item md={6}>

                    <Typography variant="h1" sx={{ fontSize: 40, color: 'darkorange' }}>
                        {circuito.titulo}
                    </Typography>

                    <Typography variant="h1" sx={{ fontSize: 20, color: 'darkorange' }}>
                        Incluye
                    </Typography>

                    <Typography style={{ whiteSpace: 'pre-line' }}>
                        {circuito.incluye_spanish}
                    </Typography>

                    <Typography variant="h1" sx={{ fontSize: 20, color: 'darkorange' }}>
                        No incluye
                    </Typography>

                    <Typography style={{ whiteSpace: 'pre-line' }}>
                        {circuito.no_incluye_spanish}
                    </Typography>

                    <Typography variant="h1" sx={{ fontSize: 20, color: 'darkorange' }}>
                        Duración
                    </Typography>

                    <Typography style={{ whiteSpace: 'pre-line' }}>
                        {circuito.dias}
                    </Typography>
                    {/* <Grid container>
                        <Grid>
                            <Button sx={{
                                backgroundColor: '#E89241',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'darkorange',
                                },
                            }}>Descargar Itinerario en Español</Button>
                        </Grid>
                        <Grid>
                            <Button sx={{
                                backgroundColor: '#E89241',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'darkorange',
                                },
                            }}>Download Itinerary in English</Button>
                        </Grid>
                    </Grid> */}
                </Grid>
            </Grid>
        </ExploraLayout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const circuitoL = [...Array(10)].map((value, index) => `${index + 1}`);

    return {
        paths: circuitoL.map(id => ({
            params: { id }
        })),
        // fallback: false
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };

    const circuito = await getCircuitoInfo(id);

    if (!circuito) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }


    return {
        props: {
            circuito
        },
        revalidate: 86400, // 60 * 60 * 24,
    }
}

export default CircuitoPage