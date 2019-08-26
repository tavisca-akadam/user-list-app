import React from "react";
import ReactDOM from "react-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            arr : ["Anil Kadam", "Yatarth Sant", "Govind Sanap"],
            selected :0
        }
    }

    updateArrayValue(changedValue){
        console.log("updateArray")
        let updated = this.state.arr;
        updated[this.state.selected] = changedValue;
        this.setState({
            arr: updated
        })
    }
    updateSelected(index){
        this.setState({
            selected:index
        })
    }
    
    render() {
        const {user} = this.state;
        return (
            <div> 
                <h1>Hello User!!! Welcome To React's World!!!</h1>
                <UserList users={this.state.arr} funcupdateSelected={this.updateSelected.bind(this)}/>
                <UserDetails users={this.state.arr[this.state.selected]} funcUpdatArray={this.updateArrayValue.bind(this)}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));