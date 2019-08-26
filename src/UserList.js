import React from "react";
import "./style.css";

class UserList extends React.Component {
    
    render() {
        const userList = this.props.users;
        
        return (
            <div className="container">
                <div className="left-container">
                   {userList.map((data,index) => (
                       <div className="list-content" id={`${index}`} onClick={()=>this.props.funcupdateSelected(index)} >
                            <h3>{data}</h3>
                        </div> 
                   ))}
                </div>
            </div>
                
        );
    }
}

export default UserList;