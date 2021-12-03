
import PrivateRoute from './PrivateRoute'

import React, { useState } from 'react'
import {Col, Row } from 'react-bootstrap'

import { useHistory } from "react-router-dom";


import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { ListItemButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


import "./DashboardRoute.scss"


const listItemsMenu = [
    {
        text: "Usuarios",
        path: "/admin/funcionarios",
        icon: <PeopleIcon color="light" />
    },
    {
        text: "Eventos",
        path: "/admin/eventos",
        icon: <EventIcon />
    },
    {
        text: "Premios",
        path: "/admin/premios",
        icon: <EmojiEventsIcon />
    }
]

export default function DashboardRoute(props) {
    let history = useHistory();
    const [openDrawer, setOpenDrawer] = useState(true)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer)
    }
    const handleListItemClick = (event, index, path) => {
        setSelectedIndex(index);
        history.push(path)
    }
    return (
        <PrivateRoute path={props.path}>
            <div>
                <Row className="d-flex w-100">
                    <Col
                        sx={2}
                        md={openDrawer ? 2 : 1}
                        className="Admin__nav_dashboard"
                    >

                        <Toolbar
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: `${openDrawer ? 'flex-end' : 'center'}`
                                // justifyContent: 'flex-end',
                                // px: [1],
                            }}
                            className="Nav_icon-main"
                        >
                            <IconButton onClick={toggleDrawer}>
                                {openDrawer === false ? <MenuIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </Toolbar>
                        <Divider />
                        <List>
                            <ListItemButton className="Nav_linkItem"
                                selected={selectedIndex === 0}
                                onClick={(event) => handleListItemClick(event, 0, "/admin/main")}
                            >
                                <ListItemIcon className="Nav_linkItem_icon">
                                    <HomeIcon/>
                                </ListItemIcon>
                                {openDrawer === true ? <ListItemText primary={"Main"} /> : <></>}

                            </ListItemButton>
                        </List>
                        <Divider />
                        <List>
                            {listItemsMenu.map((item, index) => (
                                <ListItemButton key={index} className="Nav_linkItem"
                                    selected={selectedIndex === (index + 1)}
                                    onClick={(event) => handleListItemClick(event, index + 1, item.path)}
                                >
                                    <ListItemIcon className="Nav_linkItem_icon">
                                        {item.icon}
                                    </ListItemIcon>
                                    {openDrawer === true ? <ListItemText primary={item.text} /> : <></>}

                                </ListItemButton>
                            ))}
                        </List>


                    </Col>
                    <Col sx={8} md={openDrawer ? 10 : 11} className="Admin__content_dashboard">
                        {props.children}
                    </Col>
                </Row>
            </div>
        </PrivateRoute>
    )
}
