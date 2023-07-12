import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, EscalatorWarningOutlined, FemaleOutlined, LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined } from "@mui/icons-material"
import NextLink from 'next/link';
import React from 'react';

type Props = {
    menu: boolean;
    setMenu: (value: boolean) => void;
};

export const SideMenu: React.FC<Props> = ({ menu, setMenu }) => {
    const handleBackdropClick = () => {
        setMenu(false);
    };


    return (
        <Drawer
            open={menu}
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
            ModalProps={{
                onBackdropClick: handleBackdropClick,
            }}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>

                <List>

                    <NextLink href='/' passHref legacyBehavior onClick={handleBackdropClick}>
                        <ListItem button>
                            <ListItemText primary={'Home'} />
                        </ListItem>
                    </NextLink>

                    <NextLink href='/tour' passHref legacyBehavior onClick={handleBackdropClick}>
                        <ListItem button>
                            <ListItemText primary={'Tours'} />
                        </ListItem>
                    </NextLink>

                    <NextLink href='/circuito' passHref legacyBehavior onClick={handleBackdropClick}>
                        <ListItem button >
                            <ListItemText primary={'Circuitos'} />
                        </ListItem>
                    </NextLink>
                    <NextLink href='/mice' passHref legacyBehavior onClick={handleBackdropClick}>
                        <ListItem button >
                            <ListItemText primary={'Mice'} />
                        </ListItem>
                    </NextLink>

                    <NextLink href='/noticias' passHref legacyBehavior onClick={handleBackdropClick}>
                        <ListItem button >
                            <ListItemText primary={'Noticias'} />
                        </ListItem>
                    </NextLink>

                    <NextLink href='/contactenos' passHref legacyBehavior onClick={handleBackdropClick}>
                        <ListItem button >
                            <ListItemText primary={'Contáctenos'} />
                        </ListItem>
                    </NextLink>
                </List>
            </Box>
        </Drawer>
    )
}