import React from 'react'
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';

function PropertyDetail() {
  return (
    <React.Fragment>
      <Card >
        <CardContent>
          <Grid Container>
            <Grid item xs={12}>
                <Typography >
                  More Details
                </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default PropertyDetail