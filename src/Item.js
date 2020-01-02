import React from 'react';
import './App.css';
import Picture from './dogs.png';

class Item extends React.Component {

    render() {

        let classForHidden = this.props.RandomIndex === this.props.dogId ? 'show' : 'photo';
        let onClickHandler = this.props.RandomIndex === this.props.dogId ? this.props.incCount : () => {
        };

        return <div className="item">
            <img src={Picture}
                 alt="#"
                 className={classForHidden}
                 onClick={onClickHandler}/>
        </div>
    }
}

export default Item;

