import React from 'react'
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import Main from './Main';
import Navigation from './Navigation';

export default function Home(props) {
    

    let question_list = ["array", "bit_manipulation", "Recursion", "Backtracking", "Dynamic_programming", "Searching_and_Sorting", "Linked_List", "Stacks", "Binary_Search", "Tree", "Matrix"];
    let question_list_html = question_list.map((item, index) => {
        return (
            <NavLink to={`/${item}`} key={index}>
                <div className="col" >
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{item}</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </NavLink>
        );
    });


    return (
        <>
            <Navigation {...props} />
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {question_list_html}
            </div>
        </>
    )
}
