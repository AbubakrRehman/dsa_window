import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Navigation from './Navigation';




export default function Bookmark() {

    const [bookmark_list, setBookmark_list] = useState([]);

    useEffect(() => {
        fetch(`/bookmark`)
            .then((data) => {
                return data.json();
            })
            .then((actualdata) => {
                setBookmark_list(actualdata);
            })
            .catch((err)=>console.log(err));
    }, []);



    
    let bookmark_list1 = bookmark_list.map((item, index) => {
        return (
            <tr key={index}>
                {/* <th scope="row">{item.id}</th> */}
                <td>{item.topic}</td>
                <td>{item.question}</td>
                {/* <td>{item.bookmark_status  ? <button onClick={(e) => handleBookmarkStatus(e, item)} type="button" className="btn btn-success">Bookmarked</button> : <button onClick={(e) => handleBookmarkStatus(e, item)} type="button" className="btn btn-secondary">Bookmark it</button>}</td> */}

                {/* <td>{item.status === 'true' ? <button onClick={(e) => handleStatusClick(e, item)} type="button" className="btn btn-success">Covered</button> : <button onClick={(e) => handleStatusClick(e, item)} type="button" className="btn btn-secondary">Uncovered</button>}</td> */}
            </tr>
        )
    });




    return (
        <div>

            <Navigation/>
            <table className="table">
                <thead>
                    <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Topic</th>
                        <th scope="col">Question</th>
                        {/* <th scope="col">bookmark_status</th> */}
                      
                    </tr>
                </thead>
                <tbody>
                    {bookmark_list1}
                </tbody>
            </table>

        </div>
    )
}
