import React from 'react'
import { Container, Grid, Box, Typography, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';

const cardServices = [
    {
        title: 'Packers & Movers',
        img_address: 'https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/graphic-packers-movers.jpg',
        description: 'Home Shifting and Vehicle shifting at Gurantedd lowest prices'
    },
    {
        title: 'Best Home Loan Deals',
        img_address: 'https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/webp/graphic-home-loans.webp',
        description: 'Compare & choose from 34+ banks to get the best home loan deal'
    },
    {
        title: 'Home Interiors',
        img_address: 'https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/graphic-home-decor.jpg',
        description: 'Transform  your space with our trusted Decor partners'
    },
]
function CardPropertyServices() {
    return (
        <>
            <Container maxWidth="xl" sx={{ margin: '50px 0' }}>
                <Box>
                    <Typography variant="h5" component="div" sx={{ margin: '0 0 14px 10px ' }}>
                    Property Services
                    </Typography>
                    <Grid container spacing={0} sx={{}}>
                        {cardServices?.map((item, index) => (
                            <Grid key={index} xs={12} sm={6} md={4} lg={3} sx={{ m: { xs: 1, md: 0, lg: 2 }, padding:'0 2px' }} >
                                <Card sx={{ width: '100%' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={item.img_address}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default CardPropertyServices