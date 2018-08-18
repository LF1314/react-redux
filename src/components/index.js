import  React from  'react';
import Dete from './Dete'
import Show from './Show'
import Add from './Add'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from  '../actions/counter'
import SycnAdd from "./sycnAdd";
import OAdd from './Oadd'
class Counter extends React.Component{



    render(){
        console.log(this.props)
        return(
           <p>
               <Show count = {this.props.counter}/>

               <Dete decrement = {this.props.decrement}/>

               <Add  increment = {this.props.increment}/>
               {/*<SycnAdd sycnAdd = {this.props.SycnAdd}/>*/}
               {/*<OAdd oAdd ={this.props.OAdd}/>*/}
               {/*<p>{this.props.todos}</p>*/}
               {/*<button onClick={()=>{this.props.changetodos(666666666666)}}>changgetodo</button>*/}

           </p>
        )
    }


}

function mapDipatchToProps(dispatch) {

    return bindActionCreators(actions,dispatch)

}
function mapStateToProps(state) {
    return {
        counter:state.counter,
        todos:state.todos
    }

}
export default connect(mapStateToProps,mapDipatchToProps)(Counter);

