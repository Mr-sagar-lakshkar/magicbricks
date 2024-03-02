import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Container, Grid } from '@mui/material';

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

function CardCategory() {
  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: '50px ' }}>
        <Box >
          <Typography variant="h5" component="div" sx={{ margin: '0 0 14px 10px ' }}>
            We've got properties for everyone
          </Typography>
          <Grid container spacing={{xs:1, md:1 ,lg:2} }>
            {
              catalog_property?.map((item, index) => (
                cardCategoryDetails(index, item)
              ))
            }
          </Grid>
        </Box>
      </Container>
    </>
  )

  function cardCategoryDetails(index, item) {
    return <Grid item key={index}
      xs={6}
      sm={3}
      md={3}
      lg={2}
      xl={2}
      sx={{ m: { md: 0 } }}
    >
      <Card sx={{ bgcolor: '#d8232a', height: '100%', width: '100%' }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ color: 'white' }}>
            {item.total}
          </Typography>
          <Typography variant="h6" component="div" sx={{ color: 'white' }}>
            {item.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ color: 'white', textAlign: 'end' }}>Explore</Button><ArrowRightAltIcon sx={{ color: 'white' }} />
        </CardActions>
      </Card>
    </Grid>;
  }
}

export default CardCategory