import React from "react";
import ReactDOM from "react-dom";
import { Container } from "shards-react";
import Chat from 'chat/Chat'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./index.css";

const App = () => (
  <Container>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      deserunt optio, aliquam ad cupiditate quidem, explicabo facilis adipisci
      earum labore animi dolorum itaque ea dignissimos excepturi ratione
      pariatur rem suscipit.
    </p>
    <h1>Chat</h1>
    <Chat />
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque odio
      praesentium reprehenderit labore deserunt ratione asperiores ipsum rerum
      laudantium. Repudiandae, et numquam perferendis accusantium nulla tempore
      commodi facilis eius debitis.
    </p>
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
