import React from 'react'
import { Container, Grid, Box, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const img_path = 'https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/graphic-home-decor.jpg'
const property_desc = [
    {
        bhk: 3,
        price: 85,
        sqft: 1200,
        address: 'Mahesh Colony, Jaipur',
        img_address: 'https://housing.com/news/wp-content/uploads/2022/12/3BHK-flat-interior-design-ideas-T-compressed.jpg',
    },
    {
        bhk: 3,
        price: 75,
        sqft: 2100,
        img_address: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/03/11194851/3BHK-Flats-Nikhil-Kumar-2.jpg',
        address: 'Nimal Nagar, Jaipur'
    },
    {
        bhk: 3,
        price: 1.20,
        sqft: 1275,
        img_address: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/03/11194816/3BHK-Flats-Nikhil-Kumar-1.jpg',
        address: 'Krishna Colony, Jaipur'
    },
    {
        bhk: 3,
        price: 56,
        sqft: 1188,
        img_address: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/03/11195028/3BHK-Flats-Neena-1.jpg',
        address: 'Radha Kunj, Jaipur'
    },
    {
        bhk: 3,
        price: 56,
        img_address: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/03/11195348/3BHK-Flats-Jyoti-Mishra-2.jpg',
        sqft: 1188,
        address: 'Radha Kunj, Jaipur'
    },
    {
        bhk: 3,
        price: 85,
        img_address: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/03/11195133/3BHK-Flats-Neena-2.jpg',
        sqft: 1200,
        address: 'Mahesh Colony, Jaipur'
    },
    {
        bhk: 3,
        price: 75,
        img_address: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/03/11195348/3BHK-Flats-Jyoti-Mishra-2.jpg',
        sqft: 2100,
        address: 'Nimal Nagar, Jaipur'
    },
    {
        bhk: 3,
        img_address: 'https://www.squareyards.com/cdn-cgi/image/width=344,height=184,quality=80,fit=crop,gravity=auto,format=webp/https://img.squareyards.com/secondaryPortal/638433780479400421-1202241140474047.jpg',
        price: 1.20,
        sqft: 1275,
        address: 'Krishna Colony, Jaipur'
    },
    {
        bhk: 3,
        img_address: 'https://img.squareyards.com/cdn-cgi/image/width=344,height=184,quality=80,fit=crop,gravity=auto,format=webp/secondaryPortal/638429324754405638-0702240754355435.jpg',
        price: 56,
        sqft: 1188,
        address: 'Radha Kunj, Jaipur'
    },
    {
        bhk: 3,
        price: 56,
        sqft: 1188,
        img_address: 'https://img.squareyards.com/cdn-cgi/image/width=344,height=184,quality=80,fit=crop,gravity=auto,format=webp/secondaryPortal/638437779387793886-1702240245384538.jpg',
        address: 'Radha Kunj, Jaipur'
    },
]
function CardPropertyDetail({ title }) {
    return (
        <>
            <Container maxWidth="xl" sx={{ margin: '50px 0' }}>
                <Box>
                    <Typography variant="h5" component="div" sx={{ margin: '0 0 14px 10px ' }}>
                        {title ? title : 'Exclusive Owner Properties in Jaipu'}
                    </Typography>
                    <Grid container spacing={0} >

                        <Swiper
                            modules={[Scrollbar]}
                            spaceBetween={5}
                            scrollbar={{ draggable: true }}
                            slidesPerView={1}
                            breakpoints={{
                                480: { slidesPerView: 1 },
                                576: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1100: { slidesPerView: 5 },

                            }}
                        >
                            {property_desc?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Grid xs={3} >
                                        <Card sx={{ width: 280, margin: '20px' }}>
                                            <CardMedia
                                                sx={{ height: 140 }}
                                                image={item.img_address ? item?.img_address : img_path}
                                                title={item.address}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" component="div" color="text.secondary">
                                                    {item.bhk} BHK Flat
                                                </Typography>
                                                <Typography variant="h6" color="">
                                                    &#x20B9;{item.price}Lac | {item.sqft}sqft
                                                </Typography>

                                                <Typography variant="h6" color="text.secondary">
                                                    {item.address}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small" variant="contained" color="error">View Details</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </Grid>

                </Box>
            </Container>
        </>
    )
}

export default CardPropertyDetail;