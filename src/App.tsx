import { Container, Typography, Button, Box } from '@mui/material';
import './App.css'

function App() {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={8}>
        <Typography variant="h3" gutterBottom>
          Jean Dupont
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          IA & Full-Stack Engineering for Enterprises
        </Typography>
        <Typography paragraph>
          Solutions IA innovantes, apps web scalables, et consulting technique de haut niveau.
        </Typography>
        <Button variant="contained" color="primary" href="#projets">
          Voir mes projets
        </Button>
      </Box>
    </Container>
  );
}

export default App
