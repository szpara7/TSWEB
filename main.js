import React from 'react';
import ReactDOM from 'react-dom';
import Com from './Com.js'

class App extends React.Component {
    render(){
        return(
            <div>
            <h1>HellpWord</h1>
            <Com/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// let test = () => console.log(123);

// test();