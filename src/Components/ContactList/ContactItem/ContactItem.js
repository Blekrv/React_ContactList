import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const ContactItem = (props) => {
  const { Avatar, Gender, Name, Phone, Email, Status, onDelete, changeStatus} = props;
  const image = `https://randomuser.me/portraits/${Gender}/${Avatar}.jpg`

  return (
    <div className="unit">
      <div className="field name">
        <div className="check">
          <input id="cb2" name="cb1" type="checkbox" />
          <label htmlFor="cb2"></label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>

        </div>
        <div>
          <img src={image} alt="image" className="avatar" /> {Name}
        </div>
        <div className="lab lab-warning" onClick ={changeStatus}>{Status}</div>
      </div>
      <div className="field phone">
        {Phone}
      </div>
      <div className="field email">
        {Email}
        <FontAwesomeIcon icon={faEdit} size="lg" />
        <FontAwesomeIcon onClick={onDelete} icon={faTrash} size="lg" />
      </div>
    </div>
  )
}
export default ContactItem;