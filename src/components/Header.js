import React, { Component } from 'react';

import './index.css';
import '../assets/svg/arrow-left.svg';

export default class Header extends Component {
    constructor(){
        super();
        this.state={
            
        }
    }
    render() {
        let data=['任务','时间','我的']; 
       
        return (
            <div className="Header">
                <div className="topInfo"><p>{data.map((item,index)=>(item))}</p></div>
                <div className="in">
                    <div className="back">
                        <svg fill='#fff' width='.5rem' height='.5rem'><use xlinkHref='#arrow-left'/></svg>
                    </div>
                    <div className="enrich"></div>
                    <div className="right"></div>
                </div>
            </div>
        )
    }
}

