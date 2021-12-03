import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { Table, Figure, Row, Col, Card } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
import Button from "@restart/ui/esm/Button";

export default class EventosInscripcion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row>
          <Col item xs={4} style={{ marginTop: 120 }}>
            <Grid>
              <Card>
                <Card.Img variant="top" src="/img/evento-1.jpg" />
                <Card.Body>
                  <Card.Title>
                    <h3>CONCIERTO DE MÚSICA AMADEUS MOZART</h3>
                  </Card.Title>
                  <CardHeader
                    avatar={
                      <Avatar
                        aria-label="recipe"
                        variant="square"
                        style={{ width: 80, height: 80 }}
                      >
                        <h2>100</h2>
                      </Avatar>
                    }
                    action={
                      <Typography
                        variant="h3"
                        color="textSecondary"
                      ></Typography>
                    }
                    title="Lugar: Auditorio Skandia | Bogotá"
                    subheader="Diciembre 14, 2021 | 2:00 - 4:00 p.m"
                  />
                  <CardMedia image="/img/even_0003.jpg" title="vacunacion" />
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    <h4>QUEDAN: 100 CUPOS</h4>
                  </small>
                </Card.Footer>
              </Card>
            </Grid>
          </Col>
          <Col>
            <Container className="main-footer" style={{ marginTop: 120 }}>
              <Grid container item spacing={3}>
                <Grid item xs={12}>
                  <h2>FORMULARIO INSCRIPCIÓN A EVENTO</h2>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="fullWidth"
                    id="fullWidth"
                    helperText="Digita el número de documento de identidad"
                    id="demo-helper-text-aligned"
                    label="Número documento de identidad"
                  />
                </Grid>
                <Grid item md={8}>
                  <TextField
                    fullWidth
                    label="fullWidth"
                    id="fullWidth"
                    helperText="Ingresa tu[s] nombre[s]"
                    id="demo-helper-text-aligned"
                    label="Nombres"
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="fullWidth"
                    id="fullWidth"
                    helperText="Ingresa tu primer apellido"
                    id="demo-helper-text-aligned"
                    label="Primer apellido"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth
                    label="fullWidth"
                    id="fullWidth"
                    helperText="Ingresa tu segundo apellido"
                    id="demo-helper-text-aligned-no-helper"
                    label="Segundo apellido"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth
                    label="fullWidth"
                    id="fullWidth"
                    helperText="Ingresa correo electrónico institucional "
                    id="demo-helper-text-aligned-no-helper"
                    label="Correo electrónico"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth
                    label="fullWidth"
                    id="fullWidth"
                    helperText="Ingresa número de celular"
                    id="demo-helper-text-aligned-no-helper"
                    label="Número de celular"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    id="select"
                    label="Ciudad de nacimiento"
                    helperText="Ingresa ciudad de nacimiento"
                    id="demo-helper-text-aligned-no-helper"
                    value=""
                    select
                    fullWidth
                  >
                    <MenuItem value="10">Bogotá</MenuItem>
                    <MenuItem value="20">Cali</MenuItem>
                    <MenuItem value="10">María José</MenuItem>
                    <MenuItem value="20">Cali</MenuItem>
                    <MenuItem value="10">Bogotá</MenuItem>
                    <MenuItem value="20">Cali</MenuItem>
                    <MenuItem value="10">Bogotá</MenuItem>
                    <MenuItem value="20">Cali</MenuItem>
                    <MenuItem value="10">Bogotá</MenuItem>
                    <MenuItem value="20">Cali</MenuItem>
                    <MenuItem value="10">Bogotá</MenuItem>
                    <MenuItem value="20">Cali</MenuItem>
                  </TextField>
                </Grid>

                <Grid item md={6}>
                  <TextField
                    id="select"
                    label="Sucursal en la que labora"
                    helperText="Ingresa sucursal en la que labora"
                    id="demo-helper-text-aligned-no-helper"
                    value=""
                    select
                    fullWidth
                  >
                    <MenuItem value="10">Bogotá</MenuItem>
                    <MenuItem value="20">Cali</MenuItem>
                    <MenuItem value="10">María José</MenuItem>
                    <MenuItem value="20">Cali</MenuItem>
                    <MenuItem value="10">Bogotá</MenuItem>
                    <MenuItem value="20">Cali</MenuItem>
                    <MenuItem value="10">Bogotá</MenuItem>
                    <MenuItem value="20">Cali</MenuItem>
                    <MenuItem value="10">Bogotá</MenuItem>
                    <MenuItem value="20">Cali</MenuItem>
                    <MenuItem value="10">Bogotá</MenuItem>
                    <MenuItem value="20">Cali</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
              <>
                <Button
                  variant="danger"
                  style={{ marginBottom: 140, marginTop: 40 }}
                  type="submit"
                >
                  INSCRIBIRSE AL AVENTO{" "}
                </Button>
              </>
            </Container>
          </Col>
        </Row>
        <div>
          <Grid item xs={12} style={{ marginTop: 20, marginBottom: 20 }}>
            <h5>Últimos eventos en los que has participado</h5>
            <hr />
          </Grid>
          <Table responsive="sm" style={{ marginTop: 20, marginBottom: 80 }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Fecha evento</th>
                <th>Hora evento</th>
                <th>Nombre del evento</th>
                <th>Tipo evento</th>
                <th>Ciudad evento</th>
                <th>puntos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>23/05/2021</td>
                <td>2:00 p.m.</td>
                <td>Fotografía de alimentos</td>
                <td>Capacitación</td>
                <td>Bogotá, D.C</td>
                <td>70</td>
              </tr>
              <tr>
                <td>2</td>
                <td>23/08/2021</td>
                <td>4:00 p.m.</td>
                <td>Vacunación COVID-D1</td>
                <td>Salud</td>
                <td>Bogotá, D.C</td>
                <td>150</td>
              </tr>
              <tr>
                <td>3</td>
                <td>12/10/2021</td>
                <td>1:00 p.m.</td>
                <td>Charla Salud Mental</td>
                <td>Psicosocial</td>
                <td>Bogotá, D.C</td>
                <td>50</td>
              </tr>
            </tbody>
          </Table>
          <Table responsive="md"></Table>
        </div>
      </Container>
    );
  }
}
