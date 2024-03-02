import { Box, Card, CardContent, CardMedia, Container, Divider, Grid, ImageList, ImageListItem, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
function ProperDahboard({ title }) {
    return (
        <Container sx={{ margin: '50px 0' }}>
            <Box border={1} borderRadius={3} sx={{ borderColor: '#606060', padding: '24px 32px 32px' }}>
                <Grid xs={12}>
                    <Typography sx={{ fontSize: 22, my: '20px' }} component="div">
                        {title ? title : 'Exclusive Owner Properties in Jaipur'}
                    </Typography>
                </Grid>

                <Grid container sx={{ border: '3px solid black', maxHeight: 296, overflow: 'auto' }} spacing={2}>
                    <Grid item lg={5} sx={{ padding: '1rem' }}>
                        <Card sx={{ maxWidth: 340, maxHeight: 296 }} elevation={0} >
                            <CardMedia component="img" height="184" image='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e' sx={{ maxHeight: 184 }} />
                            <CardContent sx={{ display: 'flex', padding: '4px 0 0 0 !important', justifyContent: 'center', alignItems: 'flex-start', width: '100%' }} >
                                <CardMedia component="img" image='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62'
                                    sx={{ width: '33.33333%', height: '82px', margiRight: '4px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }} />
                                <CardMedia component="img" image='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'
                                    sx={{ width: '33.33333%', height: '82px', margiRight: '4px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }} />
                                <CardMedia component="img" image='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'
                                    sx={{ width: '33.33333%', height: '82px', margiRight: '4px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }} />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item lg={7} sx={{ padding: '1rem', border: '3px solid black', maxHeight: 296 }}>
                        <Grid xs={12} sx={{ maxHeight: '296px'}} >
                            <Box sx={{ height: '64px', backgroundColor: '#e8e8e8', alignItems: 'center', display: 'flex',justifyContent:'flex-start', borderRadius: '10px' }}>
                                <Typography
                                    sx={{ color: '#303030', fontSize: 14, fontWeight: '400', padding: '0 10px 0 24px', display: 'flex', alignItems: 'center',lineHeight:'20px' }}>
                                    <BedOutlinedIcon /> 3Beds
                                </Typography>
                                <Divider orientation="vertical" variant="middle" flexItem />

                                <Typography
                                    sx={{ color: '#303030', fontSize: 14, fontWeight: '400', padding: '0 10px 0 24px', display: 'flex', alignItems: 'center' }}>
                                    <BedOutlinedIcon /> 3Baths
                                </Typography>
                                <Divider orientation="vertical" variant="middle" flexItem />

                                <Typography
                                    sx={{ color: '#303030', fontSize: 14, fontWeight: '400', padding: '0 10px 0 24px', display: 'flex', alignItems: 'center' }}>
                                    <BedOutlinedIcon /> 2Balconies
                                </Typography>
                                <Divider orientation="vertical" variant="middle" flexItem />

                                <Typography
                                    sx={{ color: '#303030', fontSize: 14, fontWeight: '400', padding: '0 10px 0 24px', display: 'flex', alignItems: 'center' }}>
                                    <BedOutlinedIcon /> Semi-Furnished
                                </Typography>

                            </Box>
                        </Grid>

                        {/* show property detail in card  */}
                        <Grid container sx={12} spacing={1}>
                            <Grid sm={4} md={4} lg={4}>
                                <Grid sx={3} >
                                    <Card sx={{ width: '100%', height: 'auto' }} elevation={0} >
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Carpet Area
                                            </Typography>
                                            <Typography sx={{ fontSize: 14 }} component="div">
                                                1100 sqft
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                4,637/sqft
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid sx={3} >
                                    <Card sx={{ width: '100%', height: 'auto' }} elevation={0} >
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Floore
                                            </Typography>
                                            <Typography sx={{ fontSize: 14 }} component="div">
                                                4 (Out of 9 Floors)
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid sx={3}>
                                    <Card sx={{ width: '100%', height: 'auto' }} elevation={0} >
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Facing
                                            </Typography>
                                            <Typography sx={{ fontSize: 14 }} component="div">
                                                North
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>

                            <Grid sm={4} md={4} lg={4}>
                                <Grid sx={3}>
                                    <Card sx={{ width: '100%', height: 'auto' }} elevation={0} >
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Developer
                                            </Typography>
                                            <Typography sx={{ fontSize: 14 }} component="div">
                                                Guman Group
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid sx={3}>
                                    <Card sx={{ width: '100%', height: 'auto' }} elevation={0} >
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Transaction type
                                            </Typography>
                                            <Typography sx={{ fontSize: 14 }} component="div">
                                                Resale
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid sx={3}>
                                    <Card sx={{ width: '100%', height: 'auto' }} elevation={0} >
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Furnished Status
                                            </Typography>
                                            <Typography sx={{ fontSize: 14 }} component="div">
                                                Semi-Furnished
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>

                            <Grid sm={4} md={4} lg={4}>
                                <Grid sx={3} elevation={0} >
                                    <Card sx={{ width: '100%', height: 'auto' }} elevation={0} >
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Project
                                            </Typography>
                                            <Typography sx={{ fontSize: 14 }} component="div">
                                                Guman Heights
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid sx={3} elevation={0} >
                                    <Card sx={{ width: '100%', height: 'auto' }} elevation={0} >
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Status
                                            </Typography>
                                            <Typography sx={{ fontSize: 14 }} component="div">
                                                Ready to Move
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid sx={3} elevation={0} >
                                    <Card sx={{ width: '100%', height: 'auto' }} elevation={0} >
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Type of Ownership
                                            </Typography>
                                            <Typography sx={{ fontSize: 14 }} component="div">
                                                Freehold
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid >
                </Grid >
            </Box >
        </Container >
    )
}

export default ProperDahboard