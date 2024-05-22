import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
const GridItem = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      spacing={{ xs: 3, md: 6 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {data.map((item) => (
        <Grid item xs={2} sm={4} md={4} key={item.id}>
          <Card sx={{ maxWidth: 345, height: 350 }} className="relative">
            <CardMedia
              sx={{ height: 140 }}
              image={item.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.des}
              </Typography>
            </CardContent>
            <CardActions className="absolute bottom-0">
              <Button size="small" onClick={() => navigate(`${item.path}`)}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridItem;
