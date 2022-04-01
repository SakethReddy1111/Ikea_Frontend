import "./App.css";
import * as React from "react";
import { Container, Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Container
        maxWidth="sl"
        sx={{
          border: "1px solid blue",
          ml: "5%",
          width: "95%",
          height: "auto",
        }}
      >
        <Container
          maxWidth="sl"
          sx={{
            height: "230px",
            border: "1px solid transparant",
          }}
        >
          <p>Offer</p>
          <br></br>
          <br></br>
          <h1>All offers</h1>
          <br></br>
          <hr></hr>
        </Container>
        <br></br>
        <Container
          maxWidth="sl"
          sx={{
            p: "15px",
            width: "97%",
            height: "230px",
            bgcolor: "#f5f5f5",
            border: "1px solid transparant",
          }}
        >
          <h2>Exciting offers</h2>
          <p> 
            Get 20% off on Delivery charges. Offer ends on 3rd April.{" "}
            <a href="#">T&C Apply</a>
          </p>
          <p>
            Get 10% cashback on transactions of Rs.10,000 or more on Citi credit
            & debit cards. <a href="#">T&C apply*</a>
          </p>
          <p>
            Avail free Click & Collect on all orders. Valid for Mumbai orders
            only.
          </p>
        </Container>
        <br></br>
        <br />
        <Container
          maxWidth="sl"
          sx={{
            height: "700px",
            border: "1px solid red",
          }}
        >
          <Container
            maxWidth="sl"
            sx={{
              height: "100px",
              border: "1px solid red",
              margin: "flex",
              display: "inline-flex",
              justifyContent: "space-between",
            }}
          >
            <h2>Festive offers</h2>
            <button variant="outlined" sx={{ pt: "1px", borderRadius: "20%" }}>
              See all
            </button>
          </Container>

          <Container
            maxWidth="sl"
            sx={{
              height: "600px",
              border: "1px solid red",
            }}
          ></Container>
        </Container>
        <br />
        <Container
          maxWidth="sl"
          sx={{
            height: "700px",
            border: "1px solid red",
          }}
        >
          <Container
            maxWidth="sl"
            sx={{
              height: "100px",
              border: "1px solid red",
            }}
          ></Container>
          <Container
            maxWidth="sl"
            sx={{
              height: "600px",
              border: "1px solid red",
            }}
          ></Container>
        </Container>
      </Container>
    </div>
  );
}

export default App;
