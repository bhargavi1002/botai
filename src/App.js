
import React, { useState } from "react";
import SidePanel from "./Components/SidePanel/SidePanel";
import {Grid} from "@mui/material"
import {Outlet} from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getThemePallete } from './Components/ThemePallet';

const App = () => {
  const theme = React.useMemo(() => createTheme(getThemePallete()), []);
  const [chat, setChat] =useState([])
  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container sx= {{ background : 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)'}}>
      <Grid item xs={12} md={2.5}
       sx={{backgroundColor:'primary.light', 
        '@media (max-width:800px)':{
        width:'70%', 
        transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 400ms ease',
      },
      }}
      position={{ xs: 'fixed', md: 'relative' }}
        height={'100vh'}
        zIndex={{ xs: 9999, md: 1 }}
        boxshadow={{xs:menuOpen ? 10:0 , md:0}}>
      <SidePanel setChat={setChat} closeMenu= {() => setMenuOpen(false)} />
      </Grid>

      <Grid item xs={12} md={9.5}>
      <Outlet context ={{chat:chat, setChat:setChat, handleMobileMenu : setMenuOpen}}/>
      </Grid>
      </Grid>
      </ThemeProvider>
  );
};

export default App;
