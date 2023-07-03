import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>

            <Grid container spacing={3}>
                <Grid item sm={3}>
                    <Box sx={{ color: 'white' }}>

                        <Typography>
                            Libro de Reclamaciones
                        </Typography>
                        <MenuBookIcon sx={{ fontSize: 62, }} />
                    </Box>

                </Grid>
            </Grid>

            <Box sx={{ color: 'white', display: 'flex', justifyContent: 'center' }}>
                <InstagramIcon sx={{ fontSize: 40 }} />
                <FacebookIcon sx={{ fontSize: 40 }} />
                <EmailIcon sx={{ fontSize: 40 }} />
                <WhatsAppIcon sx={{ fontSize: 40 }} />
            </Box>
            <Box>
                <Typography sx={{ color: 'white', paddingY: 2 }}>
                    Lima 2023 - Todos los derechos reservados
                </Typography>
            </Box>

        </Box>
    )
}

export default Footer