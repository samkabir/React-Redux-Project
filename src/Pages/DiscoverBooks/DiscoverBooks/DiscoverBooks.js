import * as React from 'react';
import PropTypes from 'prop-types';
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
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';

const drawerWidth = 200;

const DiscoverBooks = () => {
      const { window } = props;
      const [mobileOpen, setMobileOpen] = React.useState(false);
      let { path, url } = useRouteMatch();
      const handleDrawerToggle = () => {
            setMobileOpen(!mobileOpen);
      };

      const drawer = (
            <div>
                  <Toolbar />
                  
                  <List>
                        <Link style={{textDecoration:'none', color:'black'}} to="/"><ListItem button>Discover Books</ListItem></Link>
                        <Link style={{textDecoration:'none', color:'black'}} to={`${url}/readingbooks`}><ListItem button>Reading Books</ListItem></Link>
                        <Link style={{textDecoration:'none', color:'black'}} to={`${url}/finishedbooks`}><ListItem button>Finished Books</ListItem></Link>
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
                    DashBoard
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
                <Switch>
                    <Route exact path={path}>
                        <DashBoardHome></DashBoardHome>
                    </Route>
                    <Route path={`${path}/readingbooks`}>
                        <MakeReview></MakeReview>
                    </Route>
                    <Route path={`${path}/finishedbooks`}>
                        <Pay></Pay>
                    </Route>
                </Switch>
            </Box>
        </Box>
        </>
      );
};

DashBoard.propTypes = {
      /**
       * Injected by the documentation to work in an iframe.
       * You won't need it on your project.
       */
      window: PropTypes.func,
    };

export default DiscoverBooks;