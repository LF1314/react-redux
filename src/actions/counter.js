export  function increment() {

    return {
        type:"INCREMENT"
    }

}
export function decrement(){

    return {
        type:"DECREMENT"
    }
}

export function changetodos(todo) {

    return {
        type:"CHANGETODO"
        ,
        todo
    }

}

//实现在异步的情况下去执行加一操作
export function SycnAdd () {

   return function (dispath,getState) {

       setTimeout(function () {
           console.log(dispath(getState))
           dispath(increment())

       },1000)

   }

}
//实现是偶数的情况下在执行加一 操作

export function OAdd() {

    return function (dipatch,getState) {
          const {counter} =dipatch(getState);
          if(counter%2==0){
              dipatch(increment())
          }
    }
    
}