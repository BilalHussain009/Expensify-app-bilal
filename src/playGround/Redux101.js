import {createStore} from 'redux';
//Action Generators -functions that returns actions objects
const incrementCount=({incrementBy=1}={})=>({
    type:'INCREMENT',
    incrementBy:incrementBy
});
const decrementCount=({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy:decrementBy
});
const resetCount=()=>(
    {
        type:'RESET'
    }
)
const setCount=({count=0}={})=>({
    type:'SET',
    count:count
});
//reducers
//1.Reducers are pure functions :output depends totally on input
//2.Never chenge state or Action
const countReducer=(state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            
            return{
                count:state.count+action.incrementBy
            };
        case "DECREMENT":
            const decrementBy=typeof action.decrementBy==='number'? action.decrementBy:-1
            return{
                count:state.count-action.decrementBy
            };
        case "RESET":
            return{
                count:0
            };
        case "SET":
            return{
                count:action.count
            };
        default:
            return state;
    }
   
}
const store=createStore(countReducer);
const unsubscribe=store.subscribe(()=>{ //this fucntion watches store for changes 
    console.log(store.getState());
})

 //Actions used to chanhe the values in the redux store
 //Action is and object that get sent to the store
 //increment the count

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:10}))
store.dispatch(resetCount());
store.dispatch(setCount({count:101}))
 


