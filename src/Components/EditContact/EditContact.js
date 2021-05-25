import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import { Redirect, withRouter} from "react-router-dom";

class EditContact extends React.Component {
  state = {
    Id : 0,
    Avatar: "",
    Gender: "",
    Name: "",
    Phone: "",
    Email: "",
    Status: "",
    Avatar1: "",
    isRedirect: false,
    
  };
  getName = (e) => {
    const Name = e.target.value;
    console.log(Name);
    this.setState({
      Name: Name,
    });
  };
  getEmail = (e) => {
    const Email = e.target.value;
    console.log(Email);
    this.setState({
      Email: Email,
    });
  };
  getPhone = (e) => {
    const Phone = e.target.value;
    console.log(Phone);
    this.setState({
      Phone: Phone,
    });
  };
  getAvatar = (e) => {
    const Avatar = e.target.value;
    console.log(Avatar);
    this.setState({
      Avatar: Avatar,
    });
  };
  getGender = (e) => {
    const Gender = e.target.value;
    console.log(Gender);
    this.setState({
      Gender: Gender,
    });
  };
  getStatus = (e) => {
    const Status = e.target.value;
    console.log(Status);
    this.setState({
      Status: Status,
    });
  };
  sendForm = (e) => {
    e.preventDefault();
    const { Id, Avatar, Gender, Name, Phone, Email, Status } = this.state;
    const { addEditContact } = this.props;
    const newContact = {
      Id: Id,
      Avatar: Avatar,
      Gender: Gender,
      Name: Name,
      Phone: Phone,
      Email: Email,
      Status: Status,
    };
 
    addEditContact(newContact);
    this.setState({
      isRedirect: true,
    });
  };
  avatarchange = (e) => {
    const Gender = this.state.Gender;
    const Avatar1 = e.target.value;
    this.setState({
      Avatar1: `https://randomuser.me/portraits/${Gender}/${Avatar1}.jpg`,
      Avatar: Avatar1,
    });
  };
  render() {
    let { isRedirect } = this.state;
    const { Avatar, Gender, Name, Phone, Email, Status } = this.props.Contact;
    console.log("privet", isRedirect);
    console.log(this.props.Contact)
    if(this.props.Contact === ""){
      return <Redirect to="/" />;
    }
    if (isRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <Fragment>
        <div className="container">
          <h2>Edit</h2>
          <form onSubmit={this.sendForm} className="row">
            <div className="row col-6 flex-column ">
              <div className="form-group">
                <fieldset disabled="">
                  <label className="form-label">Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder={Name}
                    onChange={this.getName}
                    required
                  />
                </fieldset>
              </div>

              <div className="form-group">
                <fieldset>
                  <label className="form-label mt-4">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder={Email}
                    onChange={this.getEmail}
                    required
                  />
                </fieldset>
              </div>

              <div className="form-group">
                <label className="form-label mt-4">Phone</label>
                <input
                  type="number"
                  placeholder={Phone}
                  className="form-control"
                  onChange={this.getPhone}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label mt-4">Status</label>
                <input
                  type="text"
                  placeholder={Status}
                  className="form-control"
                  onChange={this.getStatus}
                  required
                />
              </div>
            </div>
            <div
              className="row col-3 avatar_img ml-5 mt-5"
              style={{ backgroundImage: `url('${this.state.Avatar1}')` }}
            ></div>
            <div className="row col-12 flex-column">
              <div className="form-group">
                <label className="form-label mt-4">Gender</label>
                <select
                  className="form-control"
                  type="text"
                  onClick={this.getGender}
                  required
                >
                  <option selected disabled></option>
                  <option value="men">Male</option>
                  <option value="women">Female</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label mt-4">Avatar</label>
                <input
                  type="number"
                  min="0"
                  max="99"
                  className="form-control"
                  onChange={(this.getAvatar, this.avatarchange)}
                  required
                  placeholder={Avatar}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(EditContact) ;
