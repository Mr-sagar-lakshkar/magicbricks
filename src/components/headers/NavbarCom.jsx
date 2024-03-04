import React from 'react';
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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Chip,Divider  } from '@mui/material';
const pages = ['MB Prime', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function NavbarCom() {
  const logo = "MagicBricks";

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar disableGutters position="static">
        <Container maxWidth="xl" sx={{background:'#d8232a'}}>
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {logo}
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
              {/* MB Prime */}
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color='inherit'
              >
                MB Prime<ArrowDropDownIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>

              {/* Login */}
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color='inherit'
              >
                Login<ArrowDropDownIcon />
              </Button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Requested Properties</MenuItem>
                <MenuItem onClick={handleClose}>Contacted Properties</MenuItem>
                <MenuItem onClick={handleClose}>Viewed Properties</MenuItem>
                <MenuItem onClick={handleClose}>Shortlisted Properties</MenuItem>
                <MenuItem onClick={handleClose}>Searches</MenuItem>
                <Divider/>
                <MenuItem onClick={handleClose}>Recommendations</MenuItem>
                <MenuItem onClick={handleClose}>My Profiles</MenuItem>
              </Menu>
              <Chip label="Post Property" variant="outlined" color='default' sx={{ background: '#fff' }} />

            </Box>
          </Toolbar>
        </Container>

        <Container maxWidth="xl" sx={{background:'#fff'}}>
              {/* MB Prime */}
              <Button color='error' sx={{ textTransform: 'capitalize' }}>
                Buy<ArrowDropDownIcon />
              </Button>

              <Button color='error' sx={{ textTransform: 'capitalize' }}>
                Rent<ArrowDropDownIcon />
              </Button>

              <Button color='error' sx={{ textTransform: 'capitalize' }}>
                Sell<ArrowDropDownIcon />
              </Button>

              <Button color='error' sx={{ textTransform: 'capitalize' }}>
                Homeloans<ArrowDropDownIcon />
              </Button>

              <Button color='error' sx={{ textTransform: 'capitalize' }}>
                Property Services <ArrowDropDownIcon />
              </Button>

              <Button color='error' sx={{ textTransform: 'capitalize' }}>
                MB Advice <ArrowDropDownIcon />
              </Button>

              <Button color='error' sx={{ textTransform: 'capitalize' }}>
                Help <ArrowDropDownIcon />
              </Button>
        </Container>
      </AppBar>
    </>
  );
}

export default NavbarCom;