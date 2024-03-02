import React, { Fragment } from 'react';
import { Box, Button, CardMedia, Container, Divider, Grid, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { newsFeedVideo } from '../../database/db';

function NewsVideoFeed({ title }) {
    const style = {
        p: 0,
        width: '100%',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
    };

    return (
        <>
            <Container maxWidth="xl" sx={{ margin: { xs: '0', md: '50px 0' } }}>
                <Box>
                    <Grid container spacing={2}>
                        <Grid sx={{ justifyContent: 'center' }} spacing={2} xs={12} md={12} lg={12} mt={2} ml={2}>
                            <List sx={style} aria-label="mailbox folders">
                                <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography color='error.main' variant="h6" component="h4" sx={{ ml: '15px', fontWeight: '600' }}>
                                        Legal Updates </Typography>
                                </ListItem>
                                {newsFeedVideo?.map((item, index) => (
                                    <Fragment key={index}>
                                        {newsFeedList(item)}
                                    </Fragment>
                                ))}
                                <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Button size="medium" sx={{ color: '#d32f2f', fontWeight: '700', textTransform: 'lowercase' }}>
                                        See all <EastIcon /></Button>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );

    function newsFeedList(item) {
        return <ListItem sx={{ display: 'flex', alignItems: 'start' }} >
            <CardMedia
                component="img"
                sx={{ width: 90, borderRadius: '10px' }}
                image="https://mui.com/static/images/cards/live-from-space.jpg"
                alt="Live from space album cover"
            />
            <Stack sx={{ display: 'flex', alignItems: 'start', ml: '10px' }}>
                <ListItemText sx={{ ml: '15px' }}>{item?.title}</ListItemText>
                <Button size="medium" sx={{ color: '#d32f2f', fontWeight: '700' }}>Watch Video <EastIcon /></Button>
            </Stack>
            <Divider component="li" />
        </ListItem>;
    }
}

export default NewsVideoFeed