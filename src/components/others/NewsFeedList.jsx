import React, { Fragment } from 'react'
import { Box, Button, Divider, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { newFeed } from '../../database/db';
import EastIcon from '@mui/icons-material/East';

function NewsFeedList({ title }) {

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
            <Box>
                {newsFeedHeading(title)}
                <Grid container>
                    <Grid item sx={{ justifyContent: 'center' }} spacing={2} xs={12} md={12} lg={12} mt={2} ml={2}>
                        <List sx={style} aria-label="mailbox folders">
                            <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography color='error.main' variant="h6" component="h4" sx={{ ml: '15px', fontWeight: '600' }}>Industry Insights</Typography>
                            </ListItem>
                            {newFeed?.map((item, index) => (    
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
        </>
    );

    function newsFeedHeading(title) {
        return <Typography variant="h5" component="div" sx={{ margin: '0 0 14px 10px ' }}>
            {title ? title : 'Your Real Estate Guide'}
        </Typography>;
    }

    function newsFeedList(item) {
        return <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
            <ArticleIcon />
            <ListItemText sx={{ ml: '15px' }}>{item?.title}</ListItemText>
            <Divider component="li" />
        </ListItem>;
    }
}

export default NewsFeedList