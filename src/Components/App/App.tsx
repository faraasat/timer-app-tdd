import "./App.css";
import { Container } from "@material-ui/core";
import { CustomCard, ParticlesBody, Timer } from "../../listing";

function App() {
  return (
    <div>
      <ParticlesBody />
      <Container
        maxWidth="sm"
        className='app-container'
      >
        <CustomCard>
          <Timer />
        </CustomCard>
      </Container>
    </div>
  );
}

export default App;
