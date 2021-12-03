import React, { useState } from 'react'
import { Nav, Navbar, Col, Row } from 'react-bootstrap'
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import PrivateRoute from "../../Router/PrivateRoute";


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ListItemButton } from '@mui/material';

import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import "./Admin.scss"

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';



const drawerWidth = 240;

const listItemsMenu = [
    {
        text: "Usuarios",
        path: "/admin/usuarios",
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


function Admin(props) {
    let history = useHistory();
    const [openDrawer, setOpenDrawer] = useState(true)
    const [selectedIndex, setSelectedIndex] = useState(1)
    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer)
    }
    const handleListItemClick = (event, index)=>{
        setSelectedIndex(index);
    }
    return (
        <BrowserRouter>
            <div>
                <Row >
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
                        <List
                        >
                            {listItemsMenu.map((item, index) => (
                                <ListItemButton key={index} className="Nav_linkItem"
                                    selected = {selectedIndex === (index+1)}
                                    onClick = {(event) => handleListItemClick(event, index+1)}
                                >
                                    <Link to={item.path} >
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                        {openDrawer === true ? <ListItemText primary={item.text} /> : <></>}
                                    </Link>
                                </ListItemButton>

                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    {openDrawer === true ? <ListItemText primary={text} /> : <></>}
                                </ListItem>
                            ))}
                        </List>
                    </Col>
                    <Col sx={8} md={openDrawer ? 10 : 11}>
                        <Switch>
                            {props.children}
                        </Switch>
                    </Col>
                </Row>
            </div>
        </BrowserRouter>
    )
}

export default Admin
