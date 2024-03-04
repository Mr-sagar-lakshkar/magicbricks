import React from 'react'
import { Container, Grid,Typography, Card, CardMedia, CardContent, CardActions, Button} from '@mui/material';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const img_path = 'https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/graphic-home-decor.jpg';

function CardPropertyDetail({ title, data }) {
    return (
        <React.Fragment>
            <Container maxWidth="xl" sx={{ margin: '50px 0' }}>
                <Typography variant="h5" component="div" sx={{ margin: '0 0 14px 10px ',fontWeight:'700' }}>
                        {title ? title : 'Exclusive Owner Properties in Jaipur'}
                    </Typography>
                    <Grid container spacing={0} >
                        <Swiper modules={[Scrollbar]}
                            spaceBetween={5}
                            scrollbar={{ draggable: true }}
                            slidesPerView={1}
                            breakpoints={{
                                480: { slidesPerView: 1 },
                                500: { slidesPerView: 2 },
                                667: { slidesPerView: 3 },
                                960: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 },
                                1920: { slidesPerView: 7 },

                            }}
                        >
                            {data?.map ? data?.map((item, index) => (
                                cardPropertyDetails(index, item)
                            )) : null}

                        </Swiper>
                    </Grid>
            </Container>
        </React.Fragment>
    )

    function cardPropertyDetails(index, item) {
        return <SwiperSlide key={index}>
            <Grid
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                sx={{ m: { md: 0 } }}
            >
                <Card sx={{ width: '100%', height: '100%', margin: '20px' }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={item.img_address ? item?.img_address : img_path}
                        title={item.address} />
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
        </SwiperSlide>;
    }
}

export default CardPropertyDetail;