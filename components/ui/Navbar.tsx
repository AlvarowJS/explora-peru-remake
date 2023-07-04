import NextLink from 'next/link';
import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material'
import Image from 'next/image';


export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <NextLink href='/' passHref>
                    <Image
                        src="/logo.png"
                        alt="logo Peru Exploring"
                        width={90}
                        height={60}
                    />
                    {/* <Typography variant='h6'>Perú Exploring</Typography> */}
                </NextLink>
                <Box flex={1} />
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                    <NextLink href='/' passHref legacyBehavior>
                        <Link>
                            <Button>Sobre nosotros</Button>
                        </Link>
                    </NextLink>

                    <NextLink href='/tour' passHref legacyBehavior>
                        <Link>
                            <Button>Tours</Button>
                        </Link>
                    </NextLink>

                    <NextLink href='/circuito' passHref legacyBehavior>
                        <Link>
                            <Button>Circuitos</Button>
                        </Link>
                    </NextLink>

                    <NextLink href='/mice' passHref legacyBehavior>
                        <Link>
                            <Button>MICE</Button>
                        </Link>
                    </NextLink>

                    <NextLink href='/noticias' passHref legacyBehavior>
                        <Link>
                            <Button>Noticias</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/contactenos' passHref legacyBehavior>
                        <Link>
                            <Button>Contáctenos</Button>
                        </Link>
                    </NextLink>
                </Box>
                <Box flex={1} />
            </Toolbar>
        </AppBar>
    )
}
