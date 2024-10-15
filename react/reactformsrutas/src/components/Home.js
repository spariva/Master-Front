import { Component } from 'react';
import FormSimple from './FormSimple';

export default class Home extends Component {
    render(){
        return (
            <div>
                <h2>Home prueba</h2>
                <img src="https://makspariva.wordpress.com/wp-content/uploads/2018/10/mg_5439.jpg" alt="foto home"/> 
                <FormSimple />
            </div>
        )
    }
}