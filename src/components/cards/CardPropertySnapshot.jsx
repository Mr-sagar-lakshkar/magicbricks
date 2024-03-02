import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React, { Fragment } from 'react';

function CardPropertySnapshot({ title, data, snapShotData }) {
    return (
        <>
            <Container maxWidth="xl">
                {newsFeedHeading(title)}
                <Box border={1} borderRadius={3} p={4} sx={{ borderColor: 'grey.500' }}>
                    <Typography variant='body1' component='div' sx={{ color: '#606060', fonSize: '14px', fontWeight: '400', lineHeight: '24px' }}>
                        {data?.[0]?.description ? data[0].description : 'No description available'}
                    </Typography>

                    <Grid container spacing={2}>
                        {snapShotData?.map ? snapShotData.map((item, index) => (
                            <Fragment key={index}>
                                {cardSapshot(item)}
                            </Fragment>
                        )) : null}
                    </Grid>
                </Box>
            </Container >
        </>
    )

    function cardSapshot(item) {
        return <Grid item xs={3} lg={2}>
            <Box>
                <Card variant="outlined" sx={{ border: 'none' }}>
                    <CardContent sx={{ display: 'grid' }}>
                        <Typography sx={{ fontSize: 18, color: '#000', fontWeight: 600 }} gutterBottom>
                            {item?.no}+
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{ color: '#606060', fontSize: '14px', fontWeight: 300 }}>
                            {item?.description}
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{ color: '#606060', fontSize: '14px', fontWeight: 300 }}>
                            in {item?.city}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Grid>
    }

    function newsFeedHeading() {
        return <Typography variant="h5" component="div" sx={{ margin: '0 0 14px 10px ' }}>
            {title ? title : 'Your Real Estate Guide'}
        </Typography>;
    }
}

export default CardPropertySnapshot