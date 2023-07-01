import { Box, Typography } from '@mui/material'
import React from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
    return (
        <Box sx={{backgroundColor: 'black'}}>
            <Box  sx={{color: 'white'}}>
                <Typography >
                    Libro de Reclamaciones
                </Typography>
                <MenuBookIcon sx={{ marginRight: 2, fontSize: 32 }} />
            </Box>
            <Box sx={{color: 'white'}}>
                <InstagramIcon />
                <FacebookIcon />
                <EmailIcon />
                <WhatsAppIcon />
            </Box>
            <Box>
                <Typography sx={{color: 'white'}}>
                    Lima 2023 - Todos los derechos reservados
                </Typography>
            </Box>
        </Box>

    )
}

export default Footer