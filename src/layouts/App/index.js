import React,{Component} from 'react';

import NavLink from '../NavLink';
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import '../../assets/svg/addition_fill.svg';

import './index.css';
export default class App extends Component{
    render(){
        return(
            <div className="App-main">
                <div className='App-header'>
                    <Header></Header>
                </div>
                <div className="App-content">
                    {this.props.children}
                    <div className='App-add'>
                        <svg width='1.5rem' height='1.5rem' fill='#4285f4'><use xlinkHref='#addition_fill'/></svg>
                    </div>
                </div>
                <div className="App-nav">
                    <NavLink></NavLink>
                </div>
                <InputText></InputText>
            </div>
        )
    }
}