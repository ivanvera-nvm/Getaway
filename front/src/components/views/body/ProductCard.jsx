import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  header: {
    height: "80px",
    paddingTop: 16,
    paddingLeft: 20,
  },
  title: {
    width: "70%",
    fontSize: 16,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    "&:hover": {
      border: "2px solid #cccccc",
    },
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  fullHeightCard: {
    height: "100%",
  },
  cardHeaderHeight: {
    height: "120px",
  },
  description: {
    height: "80px",
  },
  interact: {
    display: "flex",
    justifyContent: "space-around",
  },
  rating: {
    alignItems: "center",
  },
  fav: {},
  price: {
    fontSize: 20,
    color: "#357a38",
    fontWeight: 150,
  },
  purchaseBtn: {
    width: "120px",
    fontSize: "12px",
    color: "white",
    backgroundColor: "#dd2c00",
  },
  action: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default function ProductCard({ product }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} className={classes.fullHeightCard}>
      <Box display="flex" className={classes.header}>
        <Box className={classes.title}>{product.name}</Box>
        <Box>
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton> */}
        </Box>
      </Box>

      <CardMedia
        className={classes.media}
        image={product.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography
          className={classes.description}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {product.description}
        </Typography>

        <Box className={classes.interact}>
          <Rating
            name="read-only"
            value="3"
            readOnly
            className={classes.rating}
          />
          <IconButton className={classes.fav} aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardContent>

      <CardActions className={classes.action}>
        <Box className={classes.price}>${product.price},00</Box>
        <Button variant="contained" className={classes.purchaseBtn}>
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}
