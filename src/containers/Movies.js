import React from 'react'
import  {connect}  from 'react-redux'

import  {bindActionCreators} from 'redux'

import * as actions from '../actions/films'
import Loading from "../components/loading";

 class Movies extends React.Component{

    componentWillMount(){
        this.props.getfilms();
    }

    render(){
        return(
            <div>
                <h6>{this.props.flag ? "加载中》》》》》》》》" : null}</h6>
                <ul>
                    {
                        this.props.films.map((film,index)=>
                        {
                            return <li key={index} >

                                <p>{film.name}</p>
                                <p>{film.intro}</p>
                                <p>评分：{film.grade}</p>
                                <img style={{width:300}} src={film.cover.origin} alt=""/>

                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
function mapDipatchToProps(dispatch) {

    return bindActionCreators(actions,dispatch)

}
function mapStateToProps(state) {
    return {
        counter:state.counter,
        todos:state.todos,
        films:state.films,
        flag:state.flag
    }

}
export default connect(mapStateToProps,mapDipatchToProps)(Movies);


