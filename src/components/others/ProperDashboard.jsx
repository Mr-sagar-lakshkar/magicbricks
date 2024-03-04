import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonIcon from "@mui/icons-material/Person";
function ProperDashboard({ title }) {
  return (
    <Container disableGutters sx={{ margin: "50px 0"}}>
      <Card sx={{ padding: {xs:"0",md:"24px 32px 32px"} }} variant="outlined">
        <CardContent>
          <Grid xs={12} mb={1}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{ fontSize: 22, color: "#303030" }}
                  component="div"
                >
                  51.0 Lac{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#303030",
                    ml: "10px",
                    textDecoration: "underline",
                    mr: "10px",
                  }}
                  component="div"
                >
                  EMI - $23k{" "}
                </Typography>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#303030",
                    ml: "10px",
                    textDecoration: "underline",
                  }}
                  component="div"
                >
                  Get Loan offers from 34+ banks
                </Typography>
              </Box>
              <Box sx={{}}>
                <Typography
                  sx={{ fontSize: 16, textAlign: "right" }}
                  component="div"
                >
                  <MoreVertIcon />
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", pb: "4px" }}>
              <Typography
                sx={{ fontSize: 14, color: "#606060" }}
                component="div"
              >
                3 BHK Flat For Sale in Guman Heights,
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "#606060",
                  ml: "10px",
                  textDecoration: "underline",
                  mr: "10px",
                  fontWeight: "bold",
                }}
                component="div"
              >
                Mansarovar, Jaipur{" "}
              </Typography>
            </Box>
          </Grid>

          <Grid container sx={{ maxHeight: {xs:'100%',md:296} }} spacing={2}>
            <Grid item lg={5} sx={{
                padding: "1rem",
                display: "grid",
                justifyContent: "flex-start",
              }}>
              <Card sx={{ maxWidth: 340, maxHeight: 296 }} elevation={0}>
                <CardMedia
                  component="img"
                  height="184"
                  image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                  sx={{ maxHeight: 184 }}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    padding: "4px 0 0 0 !important",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    width: "100%",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"
                    sx={{
                      width: "33.33333%",
                      height: "82px",
                      marginRight: "4px",
                      overflow: "hidden",
                      position: "relative",
                      cursor: "pointer",
                    }}
                  />
                  <CardMedia
                    component="img"
                    image="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"
                    sx={{
                      width: "33.33333%",
                      height: "82px",
                      marginRight: "4px",
                      overflow: "hidden",
                      position: "relative",
                      cursor: "pointer",
                    }}
                  />
                  <CardMedia
                    component="img"
                    image="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"
                    sx={{
                      width: "33.33333%",
                      height: "82px",
                      marginRight: "4px",
                      overflow: "hidden",
                      position: "relative",
                      cursor: "pointer",
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid container py={0} item lg={7} sx={{ padding: "0 1rem", maxHeight: 296 }}>
              <Grid xs={12} sx={{ maxHeight: "296px" }}>
                <Box
                  sx={{
                    height: "64px",
                    backgroundColor: "#e8e8e8",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#303030",
                      fontSize: {xs:'10px',md:14},
                      fontWeight: "400",
                      padding: {xs:'auto',md:"0 10px 0 24px"},
                      display: "flex",
                      alignItems: "center",
                      lineHeight: "20px",
                    }}
                  >
                    <BedOutlinedIcon /> 3Beds
                  </Typography>
                  <Divider orientation="vertical" variant="middle" flexItem />

                  <Typography
                    sx={{
                      color: "#303030",
                      fontSize: {xs:'10px',md:14},
                      fontWeight: "400",
                      padding: {xs:'auto',md:"0 10px 0 24px"},
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <BedOutlinedIcon /> 3Baths
                  </Typography>
                  <Divider orientation="vertical" variant="middle" flexItem />

                  <Typography
                    sx={{
                      color: "#303030",
                      fontSize: {xs:'10px',md:14},
                      fontWeight: "400",
                      padding: {xs:'auto',md:"0 10px 0 24px"},
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <BedOutlinedIcon /> 2Balconies
                  </Typography>
                  <Divider orientation="vertical" variant="middle" flexItem />

                  <Typography
                    sx={{
                      color: "#303030",
                      fontSize: {xs:'10px',md:14},
                      fontWeight: "400",
                      padding: {xs:'auto',md:"0 10px 0 24px"},
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <BedOutlinedIcon /> Semi-Furnished
                  </Typography>
                </Box>
              </Grid>

              <Grid item container sx={12} py={0}>
                <List sx={{ width: "100%" }}>
                  <ListItem sx={{display:'flex',justifyContent:'space-between'}}>
                    <ListItemText>
                      <Typography fontSize={14}>Carpet Area</Typography>
                      <Typography fontSize={14} fontWeight={600}>
                        1100 sqft
                      </Typography>
                      <Typography fontSize={14} fontWeight={300}>
                        ₹4,636/sqft
                      </Typography>
                    </ListItemText>

                    <ListItemText>
                      <Typography fontSize={14}>Developer</Typography>
                      <Typography fontSize={14} fontWeight={600}>
                        Guman Group
                      </Typography>
                    </ListItemText>

                    <ListItemText>
                      <Typography fontSize={14}>Project</Typography>
                      <Typography fontSize={14} fontWeight={600}>
                        Guman Heights
                      </Typography>
                    </ListItemText>
                  </ListItem>

                  <ListItem >
                    <ListItemText>
                      <Typography fontSize={14}>Floore</Typography>
                      <Typography fontSize={14} fontWeight={600}>
                        4(Out of 9 Floors)
                      </Typography>
                    </ListItemText>

                    <ListItemText>
                      <Typography fontSize={14}>Transaction Type</Typography>
                      <Typography fontSize={14} fontWeight={600}>
                        Resale
                      </Typography>
                    </ListItemText>

                    <ListItemText>
                      <Typography fontSize={14}>Status</Typography>
                      <Typography fontSize={14} fontWeight={600}>
                        Ready to move
                      </Typography>
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      <Typography fontSize={14}>Facing</Typography>
                      <Typography fontSize={14} fontWeight={600}>
                        North
                      </Typography>
                    </ListItemText>

                    <ListItemText>
                      <Typography fontSize={14}>Furnished Status</Typography>
                      <Typography fontSize={14} fontWeight={600}>
                        Semi-Furnished
                      </Typography>
                    </ListItemText>

                    <ListItemText>
                      <Typography fontSize={14}>Type of Ownership</Typography>
                      <Typography fontSize={14} fontWeight={600}>
                        Freehold
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>

          <Divider orientation="horizontal" sx={{ mt: 3 }} />
        </CardContent>
        <CardActions>
          <Grid container xs={12} >
            <Grid item xs={8}>
              <Box
                sx={{
                  display: "flex",
                  sx:{flexDirection:'column'}
                }}
              >
                <Button
                  size="medium"
                  variant="contained"
                  color="error"
                  sx={{
                    py: "10px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    minWidth: "22%",
                    margin: "0 20px",
                    backgroundColor: "#d8232a",
                  }}
                >
                  Contact Owner
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  sx={{
                    py: "10px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    minWidth: "22%",
                    margin: "0 20px",
                    color: "#d8232a",
                    border: "1px solid #d8232a ",
                  }}
                >
                  Get Phone No.
                </Button>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <PersonIcon color='error'/>
                <Typography
                  sx={{
                    fontSize: 13,
                    color: "#606060",
                    ml: "10px",
                    textDecoration: "underline",
                    mr: "10px",
                    fontWeight: "bold",
                    alignContent: "end",
                    justifyContent: "right",
                  }}
                  component="div"
                >
                  Last contact made 1 day ago
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Container>
  );
}

export default ProperDashboard;
