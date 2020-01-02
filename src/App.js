import React from 'react';
import './App.css';
import Item from "./Item";
import Counter from "./Counter";
import Audio from './dogs.mp3';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.audioRef = React.createRef()
    }

    state = {
        dogId: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        count: 0,
        RandomIndex: 0
    };

    incCount = () => {
        this.audioRef.current.currentTime = 0;
        this.audioRef.current.play();
        this.setState({
            count: this.state.count + 1
        })
    };

    componentDidMount() {
        this.setTime()
    };

    getRandomIndex = () => {
        this.setState({
                RandomIndex: Math.floor(Math.random() * 9)
            }, () => this.setTime()
        )
    };

    setTime = () => {
        setTimeout(this.getRandomIndex, 1000)
    };

    render() {

        let dogs = this.state.dogId.map((el, i) => <Item dogId={el}
                                                    count={this.state.count}
                                                    RandomIndex={this.state.RandomIndex}
                                                    incCount={this.incCount}/>);

        return <div className="wrapper">
            <audio src={Audio} ref={this.audioRef}/>
            {dogs}
            <Counter count={this.state.count}/>
        </div>;
    }
}

export default App;

