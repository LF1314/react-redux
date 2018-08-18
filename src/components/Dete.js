import  React from  'react';

export default class Dete extends React.Component{

    render(){

        return(
            <button onClick={()=>{this.props.decrement()}}>-</button>
        )
    }
}