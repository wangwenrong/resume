import React,{Component} from 'react';
import {Link} from 'react-router';

import '../../assets/svg/user.svg';
import '../../assets/svg/task.svg';
import '../../assets/svg/time.svg';
import './index.css';
export default class NavLink extends Component{
    constructor(){
        super()
        this.state={
            
        }
    }
    render(){
        let data=[
            {img:'task',name:'任务'},
            {img:'time',name:'时间'},
            {img:'user',name:'我的'}
        ]
        return(
            <div className="NavLink-main">
                <ul className="NavLink-main-list">
                    {data.map((item,index)=>(                    
                        <li key={index}>
                            <Link to={item.img=='task'?'/':`/${item.img}`}>
                            <div className='NavLink-main-list-icon'><svg fill='gray' height='.5rem' width='.5rem'><use xlinkHref={`#${item.img}`} /></svg></div>
                            <p>{item.name}</p>
                            </Link>
                        </li>                    
                    ))}
                    
                </ul>
            </div>
        )
    }
}