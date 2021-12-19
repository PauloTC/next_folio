import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from '../styles/Layout.module.scss'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Welcome() {
  return (
    <Box
      display='flex'
      flexDirection='column'
      position='relative'

      className={styles.container}
      textAlign='center'
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
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
  )
}
