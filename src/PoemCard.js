import React from 'react';
import { EditPoemButton } from './EditPoemButton';

export function PoemCard(props){
    // console.log(props)
    return (
        <div className="ui card">
            <div className="content">
            <div className="header">{props.name}</div>
            </div>
            <div className="content">
                {props.content}
            </div>
            <div className="content">
                <button className="ui red button" onClick={() => props.delete(props.poem)}>Delete</button>
                <EditPoemButton poem={ props.poem } edit={props.edit}/>
            </div>
        </div>
    )
}