import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Link,
    Outlet
} from "react-router-dom";
import { useSelector } from 'react-redux';

const drawerWidth = 200;

const DiscoverBooks = (props) => {
    const { readingList } = useSelector((state) => state.books);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

      const drawer = (
            <div>
                  <Toolbar />
                  
                  <List>
                        <Link style={{textDecoration:'none', color:'black'}} to={`/discoverbooks/`}><ListItem button>Discover Books</ListItem></Link>
                        <Link style={{textDecoration:'none', color:'black'}} to={`/discoverbooks/readingbooks`} ><ListItem button>Reading Books <Counter>{readingList.length}</Counter> </ListItem></Link>
                        <Link style={{textDecoration:'none', color:'black'}} to={`/discoverbooks/finishedbooks`}><ListItem button>Finished Books <Counter>0</Counter> </ListItem></Link>
                  </List>

            </div>
      );

      const container = window !== undefined ? () => window().document.body : undefined;
      return (
        <>
            <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ backgroundColor:'black' }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Discover Books !!!
                </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                {drawer}
                </Drawer>
                <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
                >
                {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet />
            </Box>
            </Box>
        </>
      );
};
DiscoverBooks.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const Counter = styled.div`
    background-color:black;
    color:white;
    padding:2px 8px;
    margin-left:10px;
    border-radius:10px;
`;


export default DiscoverBooks;