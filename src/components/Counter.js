import { useSelector, useDispatch, connect } from 'react-redux';

import { counterActions } from '../store/index.js';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementHandler5 = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementtHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {show &&<div className={classes.value}>{counter}</div>}
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={incrementHandler5}>Increment5</button>
          <button onClick={decrementtHandler}>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
}

export default Counter;

// class Counter extends Component {
//   incrementHandler() {this.props.increment()}
//   decrementtHandler() {this.props.decrement()}
//   toggleCounterHandler() {this.props.toggleCounterHandler()}

//   render() {
//     return (
//         <main className={classes.counter}>
//           <h1>Redux Counter</h1>
//           <div className={classes.value}>{this.props.counter}</div>
//           <div>
//             <button onClick={this.incrementHandler.bind(this)}> Increment</button>
//             <button onClick={this.decrementtHandler.bind(this)}>Decrement</button>
//           </div>
//           <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//         </main>
//       );
//     };
//   }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispactchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'}),
//   }
// }

// export default connect(mapStateToProps, mapDispactchToProps)(Counter);
