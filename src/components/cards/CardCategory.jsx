import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Container, Grid } from '@mui/material';

// import Grid from '@mui/material/Unstable_Grid2';
// import  from '@mui/material/Grid'; // Grid version 1
const line = (<Box component="span" sx={{ display: 'block', mx: '2px', transform: 'scale(0.8)' }} > __________ </Box>);

const catalog_property = [
  {
    title: 'Owner Properties',
    total: 5213
  },
  {
    title: 'Projects',
    total: 331
  },
  {
    title: 'Ready to move-in',
    total: 7865
  },
  {
    title: 'Budget Homes',
    total: 2507
  }
]
const img = ''
function CardCategory() {
  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: '50px ' }}>
        <Box >
          <Typography variant="h5" component="div" sx={{ margin: '0 0 14px 10px ' }}>
            We've got properties for everyone
          </Typography>
          <Grid container spacing={0} >
            {
              catalog_property?.map((item, index) => (
                <Grid key={index}
                  xs={12}
                  sm={6}
                  md={3}
                  lg={3}
                  sx={{ m: { xs: 1, md: 0, lg: 0 }}}>
                  <Card sx={{ bgcolor: '#d8232a', width: { sm: '100%', md: '95%', lg: '80%' } }} >
                    <CardContent>
                      <Typography variant="h5" component="div" sx={{ color: 'white' }}>
                        {item.total}
                      </Typography>
                      <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                        {item.title}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" sx={{ color: 'white' }}>Explore</Button><ArrowRightAltIcon sx={{ color: 'white' }} />
                    </CardActions>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default CardCategory