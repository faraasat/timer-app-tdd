import "./App.css";
import { Container } from "@material-ui/core";
import { CustomCard } from "../../listing";

function App() {
  return (
    <div>
      <Container
        maxWidth="sm"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomCard>Hello World</CustomCard>
      </Container>
    </div>
  );
}

export default App;
