import * as React from 'react';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import { Button, Card, CardGroup, Row, Col } from "react-bootstrap";


export default function MultilineTextFields() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container>
        <CardGroup>
        <Card>
          <Card.Img variant="top" src="../../../../Assets/images/home_s2.jpg" />
          <Card.Body>
            <Card.Title>PARTICIPA EN NUESTROS EVENTOS</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Última actualización hace 3 mins
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="../img/front-1.jpg" />
          <Card.Body>
            <Card.Title>ACUMULA PUNTOS</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Última actualización hace 2 días
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="../img/front-3.jpg" />
          <Card.Body>
            <Card.Title>RECLAMA MUCHOS PREMIOS</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Última actualización hace 35 mins
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <CardGroup style={{ marginTop: 80 }}>
        <Grid item md={12}>
          <h2>BUSCA POR TEMAS NUESTROS PRÓXIMOS EVENTOS</h2>
        </Grid>
        <Card>
          <Card.Img variant="top" src="../img/front-1-1.jpg" />
          <Card.Body>
            <Card.Title>Seguridad & Salud en el Trabajo</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="../img/front-2-1.jpg" />
          <Card.Body>
            <Card.Title>Psicosocial</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="../img/front-3-1.jpg" />
          <Card.Body>
            <Card.Title>Biomecánico - Actividad Física</Card.Title>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src="../img/front-4-1.jpg" />
          <Card.Body>
            <Card.Title>Bienestar para Tí</Card.Title>
          </Card.Body>
        </Card>        
      </CardGroup>
      <CardGroup style={{ marginTop: 20, marginBottom: 80 }}>
        <Card>
          <Card.Img variant="top" src="../img/front-5-1.jpg" />
          <Card.Body>
            <Card.Title>Nuestros niños</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="../img/front-6-1.jpg" />
          <Card.Body>
            <Card.Title>Fin de Semana en Familia</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="../img/front-7-1.jpg" />
          <Card.Body>
            <Card.Title>Mascotas</Card.Title>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src="../img/front-8-1.jpg" />
          <Card.Body>
            <Card.Title>Música & Teatro</Card.Title>
          </Card.Body>
        </Card>        
      </CardGroup>
    </Container>
  );
}