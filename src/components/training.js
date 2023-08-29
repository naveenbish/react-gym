import React from "react";
import './training.css';
import Exercise from '../data/records.json'

export default function Training() {
    return(
        <>
            {<div className="grid-one">
                    {
                        Exercise.map( exercise => {
                            return(
                                <div key={ exercise.id } className="grid-box">
                                    <div className="training-head">{ exercise.Title }</div>
                                    <div>{ exercise.exercise1 }</div>
                                    <div>{ exercise.exercise2 }</div>
                                    <div>{ exercise.exercise3 }</div>
                                    <div>{ exercise.exercise4 }</div>
                                    <div>{ exercise.exercise5 }</div>
                                    <div>{ exercise.exercise6 }</div>
                                    <div>{ exercise.exercise7 }</div>
                                </div>
                            )
                        } )
                    }
            </div>}
        </>
    )
}