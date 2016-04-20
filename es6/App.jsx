/**
 * Author: Michal Szczepanski
 * Date: 09/04/16
 * Time: 12:30
 */


import ReactDOM from 'react-dom';
import React from 'react';


class Main extends React.Component {
    render() {
        return (<h1>Hello world !</h1>)
    }
}


ReactDOM.render(<Main />, document.getElementById('main'));