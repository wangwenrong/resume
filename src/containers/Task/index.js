import React,{Component} from 'react';

import '../index.css';
import '../../assets/svg/choose.svg';
import '../../assets/svg/unchoose.svg';

export default class Task extends Component{
    constructor(){
        super()
        this.state={
            xlinkHref:'#unchoose'
        }
    }
    render(){
        return(
            <div className="task-main">
                <ul className='task-main-list'>
                    <li>
                        <i><svg width='.3rem' height='.3rem' ><use onClick={this.state.xlinkHref='#choose'} xlinkHref='#unchoose'/></svg></i>
                        <div className='task-main-list-item'>
                            <p className='task-main-list-item-text'>任务1111任务1111任务1111任务1111任务1111任务1111任务1111</p>
                            <span className='task-main-list-item-date'>时间</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}