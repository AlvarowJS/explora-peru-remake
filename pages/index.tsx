import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { ExploraLayout } from '@/components/layouts'
import { Typography } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ExploraLayout title={'Perú Exploring - Home'} pageDescription={'Unete a nosotros y accede a las mejores ofertas de viaje!'}>
      <Typography variant='h1' component='h1'>Peru Exploring</Typography>
    </ExploraLayout>
  )
}
