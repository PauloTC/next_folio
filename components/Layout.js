import React from 'react'
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import styles from '../styles/Layout.module.scss'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ProjectsCards from '../components/ProjectsCards'

const drawerWidth = 240;

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
     
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} flexDirection='column' >
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
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
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
        display='flex'
        component="main"
        flexDirection='column'
        padding={0}
        sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        marginLeft='auto'>
        <Box 
          display='flex'
          textAlign='center'
          flexDirection='column'
          position='relative'
          className={styles.container}>
          <Toolbar />
          <Box 
            component='div'
            height='100%'
            flexDirection='column'
            justifyContent='center'
            color='#ddd'
            display='flex'
            position='relative' >
            <Typography fontWeight={300} gutterBottom variant='h3'> Hola, Me llamo <Box component='span' fontWeight={400} color='#fff' >Paulo !</Box> </Typography>
            <Typography fontWeight={300} gutterBottom variant='h4'> Frontend Developer <br /> Freelancer </Typography>
            <br />
            <Typography fontWeight={300} gutterBottom variant='h5'> He realizado muchos proyectos, descúbrelos. </Typography>
            <Stack direction="row" spacing={2} display='flex' justifyContent='center' marginY={4} >
              <Button variant="contained" size="large">VER MAS</Button>
              <Button variant="outlined" size="large">DESCARGAR CV</Button>
            </Stack>
          </Box>
        </Box>
        <ProjectsCards />
      </Box>
    </Box>
  );
}

// Layout.propTypes = {

//   window: PropTypes.func,
// };

export default Layout;