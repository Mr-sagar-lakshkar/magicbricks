import React from 'react'
import { Container, Grid, Box, Typography, Card, CardMedia, CardContent, CardActionArea, CardActions, Button, Stack, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function CardExplore() {
    const porpularProperty = [
        {
            title: 'Gandhi Path',
            price: 3152,
            sqft: 7848,
            rating: 4.1,
            review: 33,
            saleProperty: 2736
        },
        {
            title: 'Vaishali Nagar',
            price: 8950,
            sqft: 3156,
            rating: 4.9,
            review: 383,
            saleProperty: 2736
        },
        {
            title: 'Gandhi Path',
            price: 3152,
            sqft: 7848,
            rating: 4.1,
            review: 33,
            saleProperty: 2736,
        },
        {
            title: 'Royal Residency',
            price: 4200,
            sqft: 6500,
            rating: 4.5,
            review: 45,
            saleProperty: 3200,
        },
        {
            title: 'Sunset View Apartments',
            price: 5000,
            sqft: 8500,
            rating: 4.8,
            review: 60,
            saleProperty: 4000,
        },
        {
            title: 'Majestic Towers',
            price: 3800,
            sqft: 7000,
            rating: 4.3,
            review: 40,
            saleProperty: 3000,
        },
        {
            title: 'Oceanfront Oasis',
            price: 6000,
            sqft: 10000,
            rating: 4.9,
            review: 75,
            saleProperty: 4500,
        },
        {
            title: 'Cityscape Heights',
            price: 4500,
            sqft: 7800,
            rating: 4.2,
            review: 38,
            saleProperty: 3500,
        },
        {
            title: 'Tranquil Gardens',
            price: 3200,
            sqft: 6000,
            rating: 4.0,
            review: 30,
            saleProperty: 2500,
        },
        {
            title: 'Skyline Residences',
            price: 4800,
            sqft: 8200,
            rating: 4.7,
            review: 55,
            saleProperty: 3800,
        },
        {
            title: 'Mountain View Villas',
            price: 5500,
            sqft: 9000,
            rating: 4.6,
            review: 50,
            saleProperty: 4200,
        },
        {
            title: 'Central Park Apartments',
            price: 4000,
            sqft: 7200,
            rating: 4.4,
            review: 42,
            saleProperty: 3200,
        },
        {
            title: 'Riverfront Retreat',
            price: 5100,
            sqft: 8800,
            rating: 4.5,
            review: 48,
            saleProperty: 3900,
        },
        {
            title: 'Urban Oasis Residency',
            price: 3600,
            sqft: 6800,
            rating: 4.1,
            review: 35,
            saleProperty: 2700,
        },
        {
            title: 'Eco-friendly Haven',
            price: 4300,
            sqft: 7500,
            rating: 4.3,
            review: 40,
            saleProperty: 3100,
        },
        {
            title: 'Harborview Heights',
            price: 4900,
            sqft: 8200,
            rating: 4.6,
            review: 53,
            saleProperty: 3700,
        },
        {
            title: 'Downtown Delight',
            price: 3800,
            sqft: 6900,
            rating: 4.2,
            review: 37,
            saleProperty: 2800,
        },
        {
            title: 'Lakeside Living',
            price: 5600,
            sqft: 9200,
            rating: 4.8,
            review: 65,
            saleProperty: 4300,
        },
        {
            title: 'Highland Hideaway',
            price: 4200,
            sqft: 7700,
            rating: 4.4,
            review: 44,
            saleProperty: 3300,
        },
        {
            title: 'Parkside Paradise',
            price: 4700,
            sqft: 8000,
            rating: 4.5,
            review: 50,
            saleProperty: 3600,
        },
        {
            title: 'Serenity Springs',
            price: 3400,
            sqft: 6400,
            rating: 4.0,
            review: 32,
            saleProperty: 2600,
        },
        {
            title: 'Meadowview Meadows',
            price: 5300,
            sqft: 8900,
            rating: 4.7,
            review: 58,
            saleProperty: 4100,
        }
    ]


    return (
        <>
            <Container maxWidth="xl" sx={{ margin: '50px 0' }}>
                <Box>
                    <Grid container sx={{ height: '246px', justifyContent: 'space-between' }}>
                        <Grid
                            xs={12}
                            sm={6}
                            md={4}
                            lg={2}
                            sx={{

                                bgcolor: "#dff6f9",
                                // height: "246px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "start",
                                flexDirection: 'column',
                                p: '20px',
                                borderRadius: 2
                            }}
                        >
                            <Typography variant="h5" component="span" sx={{ color: "#000", fontFamily: 'cursive', mb: 1 }}>
                                Explore
                            </Typography>
                            <Typography variant="h5" component="div" sx={{ fontFamily: 'sans-serif', }}>
                                Popular Property in Jaipur
                            </Typography>
                        </Grid>
                        <Grid container spacing={0} xs={12} sm={6} md={8} lg={10}>
                            <Swiper
                                modules={[Scrollbar]} scrollbar={{ draggable: true }} slidesPerView={1}
                                breakpoints={{
                                    480: { slidesPerView: 1 },
                                    576: { slidesPerView: 2 },
                                    768: { slidesPerView: 2 },
                                    1100: { slidesPerView: 4 },

                                }} >
                                {porpularProperty?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Grid xs={6} lg={6} >
                                            <Box sx={{ minWidth: 280, }} key={index}>
                                                <Card variant="outlined" sx={{ minHeight: '246px' }}>
                                                    <CardContent>
                                                        <Typography sx={{ fontSize: 18, display: 'flex', alignItems: 'center', color: '#000' }} color="" gutterBottom >
                                                            {item.title} <OpenInNewIcon fontSize="small" sx={{ marginLeft: 1 }} />
                                                        </Typography>
                                                        <Typography variant="subtitle1" component="div" mb={2}>
                                                            &#x20B9; {new Intl.NumberFormat('en-IN').format(item.price)} - &#x20B9; {new Intl.NumberFormat('en-IN').format(item.sqft)} per sqft
                                                        </Typography>
                                                        <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '75%' }} >
                                                            <Typography sx={{ display: 'flex', alignItems: 'center', color: '#000' }}>
                                                                {item.rating}<StarIcon sx={{ color: 'error.dark' }} />
                                                            </Typography>
                                                            <Typography variant="body1">
                                                                {item.review} Reviews
                                                            </Typography>
                                                        </Grid>
                                                    </CardContent>
                                                    <CardActions >

                                                        <Grid height={55} bgcolor='#dff6f9' width='100%'
                                                            sx={{ borderRadius: '10px', }}
                                                            container
                                                            direction="row"
                                                            justifyContent="center"
                                                            alignItems="center">
                                                            <Button size="small" sx={{ color: '#d8232a', textTransform: 'capitalize', fontWeight: '700' }}>
                                                                {item.saleProperty} properties for sale <ArrowForwardIcon />
                                                            </Button>
                                                        </Grid>
                                                    </CardActions>
                                                </Card>
                                            </Box>
                                        </Grid>
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default CardExplore