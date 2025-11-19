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
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import { TextField } from '@mui/material';


import Carousel from 'react-material-ui-carousel'

const pages = ['Home', 'About', 'Gallery', 'FAQ', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Item(props) {
    return (
        <Paper>
            <img src={props.item.pic} height="500px" width="100%" alt="" />
        </Paper>
    )
}
var items = [
    {
        pic: "/images/banner1.jpg"
    },
    {
        pic: "/images/banner2.jpg"
    },
    {
        pic: "/images/banner3.jpg"
    },
    {
        pic: "/images/banner4.jpg"
    },
    {
        pic: "/images/banner5.jpg"
    },
    {
        pic: "/images/banner6.jpg"
    },
    {
        pic: "/images/banner7.jpg"
    },
    {
        pic: "/images/banner8.jpg"
    },
    {
        pic: "/images/banner9.jpg"
    },
    {
        pic: "/images/banner10.jpg"
    }
]
function MaterialUIExample() {
    var data = [
        { id: 1, name: "Product1", originalprice: 7890, finalprice: 789, pic: 'p1.jpg' },
        { id: 2, name: "Product2", originalprice: 5000, finalprice: 50, pic: 'p2.jpg' },
        { id: 3, name: "Product3", originalprice: 4500, finalprice: 650, pic: 'p3.jpg' },
        { id: 4, name: "Product4", originalprice: 7840, finalprice: 2480, pic: 'p4.jpg' },
        { id: 5, name: "Product5", originalprice: 7890, finalprice: 789, pic: 'p5.jpg' },
        { id: 6, name: "Product6", originalprice: 7890, finalprice: 789, pic: 'p6.jpg' },
        { id: 7, name: "Product7", originalprice: 7890, finalprice: 789, pic: 'p7.jpg' },
        { id: 8, name: "Product8", originalprice: 7890, finalprice: 789, pic: 'p8.jpg' },
        { id: 9, name: "Product9", originalprice: 7890, finalprice: 789, pic: 'p9.jpg' },
        { id: 10, name: "Product10", originalprice: 7890, finalprice: 789, pic: 'p10.jpg' },
        { id: 11, name: "Product11", originalprice: 7890, finalprice: 789, pic: 'p11.jpg' },
        { id: 12, name: "Product12", originalprice: 7890, finalprice: 789, pic: 'p12.jpg' },
        { id: 13, name: "Product13", originalprice: 7890, finalprice: 789, pic: 'p13.jpg' },
        { id: 14, name: "Product14", originalprice: 7890, finalprice: 789, pic: 'p14.jpg' },
        { id: 15, name: "Product15", originalprice: 7890, finalprice: 789, pic: 'p15.jpg' },
        { id: 16, name: "Product16", originalprice: 7890, finalprice: 789, pic: 'p16.jpg' },
        { id: 17, name: "Product17", originalprice: 7890, finalprice: 789, pic: 'p17.jpg' },
        { id: 18, name: "Product18", originalprice: 7890, finalprice: 789, pic: 'p18.jpg' },
        { id: 19, name: "Product19", originalprice: 7890, finalprice: 789, pic: 'p19.jpg' },
        { id: 20, name: "Product20", originalprice: 7890, finalprice: 789, pic: 'p20.jpg' }
    ]
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

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Ducat
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
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Ducat
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/images/p1.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
            <Typography variant='h5' textAlign="center" color="white" bgcolor="#0d6efd" padding="10px">
                Latest Products
            </Typography>
            <Grid container spacing={2}>
                {
                    data.map((x, index) => {
                        return <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={`/images/${x.pic}`}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {x.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <del className='text-danger'>&#8377;{x.originalprice}</del>&#8377;{x.finalprice}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Add to Cart
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    })
                }
            </Grid>
            <hr />
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <img src="/images/banner5.jpg" height="500px" width="100%" />
                </Grid>
                <Grid item md={6}>
                    <Typography variant='h5' textAlign="center" color="white" bgcolor="#0d6efd" padding="10px">
                        Contact Us
                    </Typography>
                    <form>
                        <div className="my-3">
                            <TextField id="name" name='name' label="Full Name" variant="outlined" className='w-100' />
                        </div>
                        <div className="my-3">
                            <TextField id="email" name='email' label="Email Address" variant="outlined" className='w-100' />
                        </div>
                        <div className="my-3">
                            <TextField id="phone" name='phone' label="Phone Number" variant="outlined" className='w-100' />
                        </div>
                        <div className="my-3">
                            <TextField id="subject" name='subject' label="Subject" variant="outlined" className='w-100' />
                        </div>
                        <div className="my-3">
                            <TextField id="message" multiline name='message' rows={5} label="Message" variant="outlined" className='w-100' />
                        </div>
                        <div className="mb-3">
                            <Button type='submit' variant="contained" className='w-100'>Submit</Button>
                        </div>
                    </form>
                </Grid>
            </Grid>
        </>
    );
}
export default MaterialUIExample;