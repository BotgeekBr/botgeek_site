import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Instagram } from '@mui/icons-material';
import LogoBootGeek from "../../assets/BOT-0001-23 Brand_VF-06.png"
import { Link } from '@mui/material';

const pages = [

  {
    id: 'inicio',
    name: 'INÍCIO'
  },
  {
    id: 'sobre',
    name: 'Sobre Nós'
  },
  {
    id: 'solucoes',
    name: 'Soluções'
  },
  {
    id: 'clientes',
    name: 'Clientes'
  },
  {
    id: 'contato',
    name: 'Contato'
  },
  
  ];


function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activeSection, setActiveSection] = React.useState('inicio'); // Set the initial active section

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    handleCloseNavMenu();
  };


  return (
    <AppBar position="fixed" sx={{background: "rgba(0,0,0,0.7)",zIndex: 9999,borderBottom: "1px solid #C4F015"}}>
      <Container maxWidth="xl"  sx={{zIndex: 9999}}>
        <Toolbar disableGutters  sx={{zIndex: 9999}}>
         
          
        <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
              
                color="inherit"
         
              >
              <Box
                component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  
                    maxWidth: { xs: 50, md: 50,sm:50 },
                    
                  }}
                alt="The house from the offer."
                src={LogoBootGeek}
              />
              </IconButton>
          
          

          
          
         

          <Box sx={{ flexGrow:1 }}>
           
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page.id}
            onClick={() => handleSectionClick(page.id)}
            sx={{
              my: 2,
              color: 'white',
              display: 'block',
              opacity: activeSection === page.id ? 1 : 0.6,
            }}
          >
            <Link href={`#${page.id}`} style={{ textDecoration: 'none' }}>
              <Typography
                textAlign="center"
                style={{
                  fontFamily: 'Work Sans, sans-serif',
                  fontWeight: 400,
                  color: activeSection === page.id ? '#C4F015' : 'white', // Define a cor aqui
                }}
              >
                {page.name}
              </Typography>
            </Link>
          </Button>
        ))}
      </Box>



          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Link href={`#${page.id}`} sx={{textDecoration:"none"}}><Typography textAlign="center" style={{textDecoration: "none", color: 'black'}}>{page.name}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>


            
          </Box>
         
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
             
              color="inherit"
              sx={{marginLeft: "10%"}}
            >
              <Instagram style={{color: "#C4F015"}} />
            </IconButton>
        </Toolbar>
        
      </Container>
    </AppBar>
  );
}
export default Header;
