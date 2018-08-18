import  React from  'react';

export default class OAdd extends React.Component{

    render(){

        return(
            <button onClick={()=>{this.props.oAdd()}}> oAdd+</button>
        )
    }
}