import React from "react";

class Search extends React.Component {

    render(){
        const { searchName, searchCategory } = this.props;
        return(
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" onChange={searchName} type="text" placeholder="Search" />
            <select className="form-control" onChange={searchCategory}>
                <option value="Name" selected >Name</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="Status">Status</option>
            </select>
        </form>
        )
    }
  
}
export default Search;