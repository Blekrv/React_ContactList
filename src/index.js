import React, { Fragment, Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ReactDOM from "react-dom";
import "./index.css";
// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ContactList from "./Components/ContactList/ContactList";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import AddContact from "./Components/AddContact/AddContact"
class App extends Component {
  state = {
    List: [
      {
        Id: uuidv4(),
        Avatar: 67,
        Gender: "men",
        Name: "Alexander Verdnam",
        Phone: "+1-800-600-9898",
        Email: "example@gmail.com",
        Status: "Friends",
      },
      {
        Id: uuidv4(),
        Avatar: 5,
        Gender: "men",
        Name: "Jack Jackson",
        Phone: "+1-800-700-1234",
        Email: "jack@gmail.com",
        Status: "Friends",
      },
      {
        Id: uuidv4(),
        Avatar: 77,
        Gender: "women",
        Name: "Camilla Terry",
        Phone: "+1-800-745-1854",
        Email: "camt@gmail.com",
        Status: "Friends",
      },
    ],
  };

  onDelete = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const tmpList = [...partOne, ...partTwo];
    this.setState({
      List: tmpList,
    });
  };
  changeStatus = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    if (this.state.List[index].Status === "Family") {
      this.state.List[index].Status = "Work";
      this.setState({
        List: this.state.List,
      });
    } else if (this.state.List[index].Status === "Work") {
      this.state.List[index].Status = "Friends";

      this.setState({
        List: this.state.List,
      });
    } else if (this.state.List[index].Status === "Friends") {
      this.state.List[index].Status = "Family";

      this.setState({
        List: this.state.List,
      });
    }
  };

  onAddContact = (newContact) =>{
    let tmpList = this.state.List.slice()
    tmpList.unshift(newContact)
    this.setState({
      List:tmpList
    })
  }
  render() {
    const { List } = this.state;

    return (
      <Fragment>
      
      <Router>
      <Header />
        <Switch>
          
          <Route path="/" exact render={()=> <ContactList ContactList={List} onDelete={this.onDelete} changeStatus={this.changeStatus} />}
          

          />
          <Route path="/contact" exact component ={Contact}/>
          <Route path="/about" exact component ={About}/>
          <Route path="/add-contact" exact render={()=> <AddContact  onAddContact={this.onAddContact}/>}/>
          <Route component ={NotFound}/>
        </Switch>

      </Router>
      <Footer />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
 {/* onDelete={this.onDelete}
            ContactList={List}
            changeStatus={this.changeStatus} */}