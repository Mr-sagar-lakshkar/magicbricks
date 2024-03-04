import React from 'react'
import PropTypes from 'prop-types';
import { Container, Grid, Box, Typography, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';


function CardPropertyServices({ title, data }) {
    return (
        <>
            <Container maxWidth="xl" sx={{ margin: '50px 0' }}>
                <Box>
                    <Typography variant="h5" component="div" sx={{ margin: '0 0 14px 10px ' }}>
                        {title ? title : 'Exclusive Owner Properties in Jaipur'}
                    </Typography>
                    <Grid container spacing={{sm:1, md:2 , lg: 2, xl: 2 }}>
                        {data?.map((item, index) => (
                            <Grid key={index} xs={6} sm={4} md={4} lg={4} xl={3} sx={{ m: { xs: '0 0px 15px 0px' } }} >
                                <Card item sx={{ width: { }, height: '100%' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={item.img_address}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
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
CardPropertyServices.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
}



export default CardPropertyServices