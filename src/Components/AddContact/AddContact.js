import React, { Fragment } from "react"
import { v4 as uuidv4 } from "uuid";
import { Redirect} from "react-router-dom"

class AddContact extends React.Component {
    state = {
        Avatar: "",
        Gender: "",
        Name: "",
        Phone: "",
        Email: "",
        Status: "",
        "isRedirect": false
    }
    getName = (e) => {
        const Name = e.target.value;
        console.log(Name)
        this.setState({
            Name: Name
        })
    }
    getEmail = (e) => {
        const Email = e.target.value;
        console.log(Email)
        this.setState({
            Email: Email
        })
    }
    getPhone = (e) => {
        const Phone = e.target.value;
        console.log(Phone)
        this.setState({
            Phone: Phone
        })
    }
    getAvatar = (e) => {
        const Avatar = e.target.value;
        console.log(Avatar)
        this.setState({
            Avatar: Avatar
        })
    }
    getGender = (e) => {
        const Gender = e.target.value;
        console.log(Gender)
        this.setState({
            Gender: Gender
        })
    }
    getStatus = (e) => {
        const Status = e.target.value;
        console.log(Status)
        this.setState({
            Status: Status
        })
    }
    sendForm = (e) => {
        e.preventDefault()
        const { Avatar, Gender, Name, Phone, Email, Status } = this.state
        const {onAddContact} = this.props
        const newContact = {
            Id: uuidv4(),
            Avatar: parseInt(Avatar),
            Gender: Gender,
            Name: Name,
            Phone: Phone,
            Email: Email,
            Status: Status,
            
        }
        this.setState({
            isRedirect: true
        })
        onAddContact(newContact)
    }
    render() {
        const { Avatar, Gender, Name, Phone, Email, Status, isRedirect} = this.state
        if(isRedirect){
            return <Redirect to="/"/>
        }
        return (
            <Fragment>
                <div className="container">
                    <h2>Add new</h2>
                    <form onSubmit={this.sendForm}>
                        <div className="form-group">
                            <fieldset disabled="">
                                <label className="form-label">Name</label>
                                <input className="form-control" type="text" placeholder={Name} onChange={this.getName} />
                            </fieldset>
                        </div>

                        <div className="form-group">
                            <fieldset>
                                <label className="form-label mt-4" >Email</label>
                                <input className="form-control" type="email" placeholder={Email} onChange={this.getEmail} />
                            </fieldset>
                        </div>

                        <div className="form-group has-success">
                            <label className="form-label mt-4">Phone</label>
                            <input type="text" placeholder={Phone} className="form-control is-valid" onChange={this.getPhone} />
                        </div>

                        <div className="form-group has-danger">
                            <label className="form-label mt-4" >Status</label>
                            <input type="text" placeholder={Status} className="form-control is-invalid" onChange={this.getStatus} />
                        </div>

                        <div className="form-group">
                            <label className="col-form-label col-form-label-lg mt-4" >Gender</label>
                            <input className="form-control form-control-lg" type="text" placeholder={Gender} onChange={this.getGender} />
                        </div>

                        <div className="form-group">
                            <label className="col-form-label mt-4">Avatar</label>
                            <input type="number" min="1" max="99" className="form-control" placeholder={Avatar} onChange={this.getAvatar} />
                        </div>
                        <button type="submit" className="btn btn-success">Save</button>
                    </form>


                </div>
            </Fragment>
        )
    }
}
export default AddContact