import React, { Component } from 'react';
import closeIcon from '../assets/icons/close-icon.png'

export default class CommentBox extends Component {
    render() {
        return (
          <div className='input-comment-container'>
          <img src={closeIcon} className='close-comment-icon' />
          <input className="input-comment"/>
            <select className=" selectpicker select-comment">
               <option value="Value for Item 1" title="Title for Item 1">er companions instrument set estimating sex remarkably solicitude motionless. Property men the why smallest graceful day insisted required. Inquiry justice country old placing sitting any ten age.</option>
              <option value="Value for Item 3" title="Title for Item 3">Item 3</option>
            </select>
          </div>
        );
    }
}