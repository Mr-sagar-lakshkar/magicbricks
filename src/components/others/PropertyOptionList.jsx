import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Container, Grid, List, ListItem, Tab, Typography } from '@mui/material';
import React, { Fragment } from 'react'
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { nanoid } from 'nanoid';

const cities_names = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Jaipur',
    'Pune',
    'Ahmedabad',
    'Lucknow',
    'Kanpur',
    'Nagpur',
    'Surat',
    'Indore',
    'Thane',
    'Bhopal',
    'Visakhapatnam',
    'Agra',
    'Patna',
    'Vadodara',
];
const sale_data = [
    {
        flats: [
            'Flats in Whitefield', 'Flats in Sarjapur Road', 'Flats in Electronic City', 'Flats in Koramangala', 'Flats in HSR Layout', 'Flats in Marathahalli', 'Flats in Hebbal', 'Flats in Kanakapura Road', 'Flats in Bellandur', 'Flats in Varthur'
        ],
        houses: [
            'House for Sale in Whitefield', 'House for Sale in HSR Layout', 'House for Sale in JP Nagar', 'House for Sale in Koramangala', 'House for Sale in Sarjapur Road', 'House for Sale in Hebbal', 'House for Sale in Yelahanka', 'House for Sale in Electronic City', 'House for Sale in Marathahalli', 'House for Sale in Bellandur'
        ],
        properties: [
            'Property in Whitefield',
            'Property in Sarjapur Road',
            'Property in Electronic City',
            'Property in Yelahanka',
            'Property in HSR Layout',
            'Property in Koramangala',
            'Property in Marathahalli',
            'Property in Hebbal',
            'Property in JP Nagar',
            'Property in Bellandur',
        ],
        ploats: [
            'Plots in Whitefield',
            'Plots in Sarjapur Road',
            'Plots in Yelahanka',
            'Plots in Electronic City',
            'Plots in HSR Layout',
            'Plots in Kanakapura Road',
            'Plots in Marathahalli',
            'Plots in JP Nagar',
            'Plots in Sarjapur',
            'Plots in Bellandur',
        ],
        villas: [
            'Property for Sale in Whitefield',
            'Property for Sale in Sarjapur Road',
            'Property for Sale in Electronic City',
            'Property for Sale in Yelahanka',
            'Property for Sale in HSR Layout',
            'Property for Sale in Koramangala',
            'Property for Sale in Marathahalli',
            'Property for Sale in Hebbal',
            'Property for Sale in JP Nagar',
            'Property for Sale in Bellandur',
        ]
    }
]

function PropertyOptionList({ title }) {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="xl" sx={{ my: '50px' }}>
            <Typography variant="h5" component="div" sx={{ margin: '0 0 14px 10px ' }}>
                {title ? title : 'Property Options in Top Cities for Buy'}
            </Typography>
            <Grid container spacing={0} >
                <TabContext value={value} >
                    <Box sx={{ width: '100%', typography: 'body1', height: 'auto', border: '1px solid #606060', borderRadius: '10px' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
                                {cities_names.map((item, index) => (<Tab key={nanoid()} label={item} value={`${index + 1}`} />))}
                            </TabList>
                        </Box>

                        <Box>
                            <Swiper
                                modules={[Scrollbar]}
                                spaceBetween={1}
                                scrollbar={{ draggable: true }}
                                slidesPerView={5}
                                breakpoints={{
                                    480: { slidesPerView: 1 },
                                    500: { slidesPerView: 2 },
                                    667: { slidesPerView: 2 },
                                    867: { slidesPerView: 3 },
                                    1100: { slidesPerView: 4 },
                                    1280: { slidesPerView: 4 },
                                    1920: { slidesPerView: 5 },
                                }}
                            >
                                {sale_data.map((item, index) => (
                                    <Fragment key={index}>
                                        <TabPanel value={`${index + 1}`} index={index}>
                                            {tabPanelData(item?.flats, item?.houses, item?.properties, item?.ploats, item?.villas, index)}
                                        </TabPanel>
                                    </Fragment>
                                ))}
                            </Swiper>
                        </Box>
                    </Box>
                </TabContext>
            </Grid>
        </Container>
    );

    function tabPanelData(flats, houses, properties, ploats, villas) {
        return (
            <Grid container spacing={1} >
                <SwiperSlide>
                    <Grid item xs={12} sx={{ display: 'grid', justifyContent: 'center' }}>
                        {tabPropertyList(flats)}
                    </Grid>
                </SwiperSlide>

                <SwiperSlide>
                    <Grid item xs={12} sx={{ display: 'grid', justifyContent: 'center' }}>
                        {tabPropertyList(houses)}
                    </Grid>
                </SwiperSlide>

                <SwiperSlide>
                    <Grid item xs={12} sx={{ display: 'grid', justifyContent: 'center' }}>
                        {tabPropertyList(properties)}
                    </Grid>
                </SwiperSlide>

                <SwiperSlide>
                    <Grid item xs={12} sx={{ display: 'grid', justifyContent: 'center' }}>
                        {tabPropertyList(ploats)}
                    </Grid>
                </SwiperSlide>

                <SwiperSlide>
                    <Grid item xs={12} sx={{ display: 'grid', justifyContent: 'center' }}>
                        {tabPropertyList(villas)}
                    </Grid>
                </SwiperSlide>
            </Grid >
        );

        function tabPropertyList(array) {
            return (
                <List key={nanoid()}
                    sx={{ width: '100%', bgcolor: 'background.paper', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    {array?.map ? array.map((value) => (
                        <ListItem key={nanoid()} disableGutters>
                            <Typography variant="body1" component="p" sx={{ fontSize: '14px', color: '#606060' }}>
                                {value}
                            </Typography>
                        </ListItem>
                    )) : null}
                </List>);
        }
    }
}

export default PropertyOptionList