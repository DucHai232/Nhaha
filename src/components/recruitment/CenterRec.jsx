import { Container, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const listCard = [
  {
    id: 1,
    image:
      "https://www.gstatic.com/careerthumbnails/SOFTWARE_ENGINEERING/208_003.jpg",
    title: "Google Clound Roles",
    des: "Help millions build what’s next for their business — explore engineering jobs with Google Cloud.",
  },
  {
    id: 2,
    image: "https://www.gstatic.com/hiring/CportalUi/ai_spotlight_tile.jpg",
    title: "Google Clound Roles",
    des: "Help millions build what’s next for their business — explore engineering jobs with Google Cloud.",
  },
  {
    id: 3,
    image:
      "https://www.gstatic.com/careerthumbnails/SOFTWARE_ENGINEERING/208_001.jpg",
    title: "Google Clound Roles",
    des: "Help millions build what’s next for their business — explore engineering jobs with Google Cloud.",
  },
  {
    id: 4,
    image:
      "https://www.gstatic.com/careerthumbnails/TECHNICAL_WRITING/208_002.jpg",
    title: "Google Clound Roles",
    des: "Help millions build what’s next for their business — explore engineering jobs with Google Cloud.",
  },
];
const CenterRec = () => {
  return (
    <div className="mt-[400px] relative">
      <div className="w-[100%] h-[200px] bg-[#ccc]"></div>
      <Container className="absolute top-[-250px] left-[18%]">
        <p className="font-medium mb-2">SPOTLIGHT</p>

        <Grid container spacing={2} columns={16}>
          {listCard.map((card) => (
            <Grid item xs={4} key={card.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={card.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.des}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CenterRec;
