import React from "react";

class Search extends React.Component {

    render(){
        console.log(this.props);
        const { searchName } = this.props;
        console.log("joeka rak")
        return(
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" onChange={searchName} type="text" placeholder="Search" />
            <select className="form-control">
                <option>Status</option>
                <option>Gender</option>
            </select>
        </form>
        )
    }
  
}
export default Search;