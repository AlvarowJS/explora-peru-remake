import React, { FC, ReactNode, useState } from 'react'
import Head from 'next/head'
import { Navbar, SideMenu } from '../ui';
import Footer from '../footer/Footer';
import { Button } from '@mui/material';

interface Props {
    children?: ReactNode;
    title: string;
    pageDescription: string;
    // el signo de interrogacion quiere decir que es opcional
    imageFullUrl?: string;
}
export const ExploraLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {

    const [menu, setMenu] = useState(false)
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={pageDescription} />

                <meta name='og:title' content={title} />
                <meta name='og:description' content={pageDescription} />
                {
                    imageFullUrl && (
                        <meta name='og:image' content={imageFullUrl} />
                    )
                }
            </Head>

            <nav>
                <Navbar />

            </nav>
            <SideMenu menu={menu} />
            <Button>
                Menu
            </Button>
            <main style={{
                margin: '80px auto',
                // maxWidth: ' 1440px',
                // padding: '0px 30px'
            }}>
                {children}
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}
