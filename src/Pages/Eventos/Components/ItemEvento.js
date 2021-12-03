import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { Button } from "react-bootstrap";
import Container from "@material-ui/core/Container";
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
import Image from "react-bootstrap/Image";

import "./ItemEvento.scss";
import config from "../../../config";
import { Link } from "react-router-dom";

class ItemEvento extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      loadingImage: true,
      imageData: null,
    };
  }

  getFecha() {
    let infoFecha = this.props.dataEvento.fecha_inicio.split("T");
    let fecha = infoFecha[0];
    var meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    return (
      meses[parseInt(fecha.split("-")[1])] +
      " " +
      fecha.split("-")[2] +
      "," +
      fecha.split("-")[0]
    );
  }

  getHora() {
    let infoFecha = this.props.dataEvento.fecha_inicio.split("T");
    let hora = infoFecha[1];
    let hours = hora.split(":")[0];
    let minutes = hora.split(":")[1];
    let suffix = hours >= 12 ? "pm" : "am";
    //only -12 from hours if it is greater than 12 (if not back at mid night)
    hours = hours > 12 ? hours - 12 : hours;
    //if 00 then it is 12 am
    hours = hours == "00" ? 12 : hours;
    return hours + ":" + minutes + " " + suffix;
  }

  componentDidMount() {
    console.log(
      config.HOST_API + "/images/eventos/" + this.props.dataEvento.path_foto
    );
    fetch(this.props.dataEvento.path_foto)
      .then((response) => response.blob())
      .then((image) => {
        // Create a local URL of that image
        const localUrl = URL.createObjectURL(image);
        console.log(localUrl);
        this.setState({
          imageData: localUrl,
        });
      });
  }

  //expandir componente
  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  render() {
    return (
      <Card className="item-evento__card">
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              variant="square"
              className="item-evento__card-avatar"
              style={{ width: 56, height: 56 }}
            >
              {this.props.dataEvento.valor_puntos}
            </Avatar>
          }
          action={
            <Typography
              classname={"action"}
              variant="h5"
              color="textSecondary"
            ></Typography>
          }
          title={this.props.dataEvento.titulo}
          subheader={this.getFecha() + " " + this.getHora()}
        />
        <CardMedia
          className="media"
          src={
            config.HOST_API +
            "/images/eventos/" +
            this.props.dataEvento.path_foto
          }
          title={this.props.dataEvento.categoria}
        />
        <Image
          src={
            config.HOST_API +
            "/images/eventos/" +
            this.props.dataEvento.path_foto
          }
          fluid
        />
        <CardContent>
          <Button
            variant="danger"
            style={{ marginBottom: 2, marginTop: 8 }}
            type="submit"
          >
            <Link to={"/eventos/inscripcion/" + this.props.dataEvento._id}>
              INSCRIBIRSE AL AVENTO{" "}
            </Link>
          </Button>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={this.state.expanded ? "expandOpen" : "expand"}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {this.props.dataEvento.descripcion}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default ItemEvento;
