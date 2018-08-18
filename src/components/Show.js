import  React from  'react';

export default class Show extends React.Component{

    render(){

        return(
           <p>{this.props.count}</p>
        )
    }
}