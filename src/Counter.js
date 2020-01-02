import React from 'react';
import './App.css';

class Counter extends React.Component {
    render() {
        return <div className="counter">
            <div className='display'>{this.props.count}</div>
        </div>
    }
}

export default Counter;

