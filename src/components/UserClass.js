import React from 'react';

class UserClass extends React.Component {

    constructor(props){
        super(props);

        console.log(props)

        this.state = {
            count:0,
            count1:1
        }
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <div className="user_card">
                <h1>Count = {this.state.count}</h1>
                <button onClick={
                    ()=>{
                        this.setState({
                            count:this.state.count+1,
                        })
                    }
                }>Count Increase</button>
                {/* <h1>Count = {this.state.count1}</h1> */}
                <h1>Name: {this.props.name}</h1>
                <h1>Location: Vizag</h1>
                <h1>Contact :Pra@gmail</h1>
            </div>
        );
    }
}

export default UserClass;