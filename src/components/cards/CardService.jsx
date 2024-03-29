import React from 'react'
import { Container, Grid, Box, Typography, Card, CardMedia, CardContent, CardActions, Button, Stack, Chip } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { serviceData } from '../../database/db';

function CardService({ title }) {
    return (
        <>
            <Container maxWidth="xl" sx={{ margin: '50px 0' }}>
                <Box>
                    <Typography variant="h5" component="div" sx={{ margin: '0 0 14px 10px ' }}>
                        {title ? title : 'Advice & Tools'}
                    </Typography>

                    <Grid container sx={{ minHeight: { xs: '100%', md: '246px' }, spacing: { xs: 1, sm: 2, lg: 0 }}}>
                        {serviceData?.map((item, index) => (
                            <Grid key={index} xs={12} sm={2} md={4} lg={2} sx={{
                                margin: { xs: '0 5px', sm: '0 20px', md: '0 20px', lg: '0 20px', xl: '0 20px' },
                            }}>
                                <Card sx={{ minWidth: { xs: '100%', sm: '220px', md: '240px', lg: '260px', xl: '260px', } }} >
                                    <CardContent>
                                        <Stack direction="row" spacing={2} justifyContent='space-between'>
                                            <CardMedia
                                                component="img"
                                                sx={{ width: 80 }}
                                                image={item.iconPath}
                                                alt="Live from space album cover"
                                            />
                                            {item.certificate ? <Chip label="Certified" color="error" /> : null}
                                        </Stack>
                                        <Typography sx={{ fontSize: 18 }} mt={2} mb={1} color="">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color='text.secondary.dark' >
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="medium" sx={{ color: '#d32f2f' }}>Read More <EastIcon /></Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    );
}
export default CardService