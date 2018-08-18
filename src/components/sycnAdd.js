import  React from  'react';

export default class SycnAdd extends React.Component{

    render(){

        return(
            <button onClick={()=>{this.props.sycnAdd()}}> sycn+</button>
        )
    }
}