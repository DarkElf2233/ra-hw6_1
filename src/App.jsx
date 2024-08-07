import "./App.css";

import { Watches } from "./components/Watches";
import { Form } from "./components/Form";

class App {
  constructor() {
    this.state = {
      data: []
    }
    this.listOfData = []
    this.handleFormData = this.handleFormData.bind(this)
  }

  handleFormData = (data) => {
    
  };

  render() {
    <div className="App">
      <Form onSubmit={this.handleFormData} />
      <Watches />
    </div>;
  }
}

export default App;
