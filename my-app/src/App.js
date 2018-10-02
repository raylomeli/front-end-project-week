import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Form from "./components/Form/form";
import { Route, Switch, withRouter } from "react-router-dom";
import Sidebar from "./components/SideBar";
import styled from "styled-components";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      note: {}
    };
  }

  //with new input state of title and textbody are changed.
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    // fetch data from the api
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        console.log(response);
        // set our state with the new data
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err));
  }

  //   axios.post(`https://killer-notes.herokuapp.com/note/create`, { note })
  //   .then(res => {
  //     console.log(res);
  //     console.log(res.data);
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Form />
        <div>
          {this.state.notes.map(note => (
            // <img src={note} key={note} />
            <li>{note.tags}</li>
          ))}{" "}
        </div>
      </div>
    );
  }
}

export default App;
