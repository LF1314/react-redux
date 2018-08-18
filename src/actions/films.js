


export function setfilms(films) {


    return {
        type:"SETFILMS",
        films
    }

}

//设置缓冲api的时间顺序

export function getfilms() {

    return function (dispatch) {
        var url = "https://m.maizuo.com/v4/api/film/now-playing?__t=1534482662238&page=1&count=5"
        dispatch(loading(true))
         fetch(url).then(res=>res.json()).then(json=>{

             dispatch(setfilms(json.data.films))
             dispatch(loading(false))
         }).catch(err=>{dispatch(loading(false))})

    }

}

export function loading(flag) {

    return{
        type:"LOADING",
        flag
    }

}





