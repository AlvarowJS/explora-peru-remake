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


                    <ListItem button>
                        <ListItemText primary={'Home'} />
                    </ListItem>

                    <NextLink href='/tour' passHref legacyBehavior>
                        <ListItem button>
                            <ListItemText primary={'Tours'} />
                        </ListItem>
                    </NextLink>

                    <NextLink href='/circuitos' passHref legacyBehavior>
                        <ListItem button >
                            <ListItemText primary={'Circuitos'} />
                        </ListItem>
                    </NextLink>

                    <ListItem button >
                        <ListItemText primary={'Mice'} />
                    </ListItem>

                    <ListItem button >
                        <ListItemText primary={'Noticias'} />
                    </ListItem>

                    <ListItem button >
                        <ListItemText primary={'Contáctenos'} />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}