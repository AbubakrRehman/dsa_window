import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import QuestionNote from './QuestionNote.js'

export default function Main(props) {
    const [question_list, setQuestion_list] = useState([]);
    const [question_list_search, setQuestion_list_search] = useState([]);
    const [searchCond, setSearchCond] = useState(false);
    const [arraycount, setArraycount] = useState(0);
    const { topic } = useParams();
    const { url, path } = useRouteMatch();
    const [searchText, setsearchText] = useState("");


    useEffect(() => {


        fetch(`count_initialization/${topic}`)
            .then((data) => {
                return data.json();
            })
            .then((actual_data) => {
                console.log(actual_data[0].value);
                setArraycount(actual_data[0].value);
                return fetch(`/${topic}`)
            })
            .then((data1) => {
                return data1.json();
            })
            .then((actual_data1) => {
                setQuestion_list(actual_data1);
                setQuestion_list_search(actual_data1);
            })
            .catch((err) => console.log(err));

    }, []);




    let handleStatusClick = (e, item) => {
        let temp_question_list = [...question_list];
        if (temp_question_list[item.id - 1].status === 'true') {
            setArraycount((prevCount) => prevCount - 1);
        }
        else if (temp_question_list[item.id - 1].status === 'false') {
            setArraycount((prevCount) => prevCount + 1);
        }



        if (temp_question_list[item.id - 1].status === 'true') {
            temp_question_list[item.id - 1].status = 'false';
        }
        else if (temp_question_list[item.id - 1].status === 'false') {
            temp_question_list[item.id - 1].status = 'true';
        }


        //temp_question_list[item.id - 1].status = !temp_question_list[item.id - 1].status;


        // fetch(`/handleStatusClick_status/${topic}/${item.id}/${temp_question_list[item.id - 1].status}`)
        //     .then((data) => {
        //         return data.json();
        //     })
        //     .then((actual_data) => console.log(actual_data))
        //     .catch((err) => console.log(err));




        // fetch(`/handleStatusClick_count/${topic}/${temp_question_list[item.id - 1].status}`)
        //     .then((data) => {
        //         return data.json();
        //     })
        //     .then((actual_data) => console.log(actual_data))
        //     .catch((err) => console.log(err));

        fetch(`/handleStatusClick_status/${topic}/${item.id}/${temp_question_list[item.id - 1].status}`)
            .then((result) => {
                return fetch(`/handleStatusClick_count/${topic}/${temp_question_list[item.id - 1].status}`)
            })
            .then((result1) => console.log(result1))
            .catch((err) => console.log(err));

        setQuestion_list(temp_question_list);


    }





    let handleBookmarkStatus = (e, item) => {
        let temp_question_list = [...question_list];
        if (item.bookmark_status === 1) {
            temp_question_list[item.id - 1].bookmark_status = 0;

            fetch(`/handleBookmarkStatus2/${topic}/${item.id}/${temp_question_list[item.id - 1].bookmark_status}`)
                .then((result) => {
                    return fetch(`/handleBookmarkStatus3/${topic}/${item.question}`);
                })
                .then((result1) => console.log(result1))
                .catch((err) => console.log(err));


        }

        else {
            temp_question_list[item.id - 1].bookmark_status = 1;
            fetch(`/handleBookmarkStatus2/${topic}/${item.id}/${temp_question_list[item.id - 1].bookmark_status}`)
                .then((result) => {
                    return fetch(`/handleBookmarkStatus1/${topic}/${item.question}`);
                })
                .then((result1) => console.log(result1))
                .catch((err) => console.log(err));

        }




        setQuestion_list(temp_question_list);
    }


    

    let handleNote=(e,item)=>{
      

    }




    let question_list1 = question_list.map((item, index) => {
        return (
            <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.question}</td>
                <td><NavLink to={`/${topic}/${item.id}`}>Make a Note </NavLink></td>
                <td>{item.bookmark_status ? <button onClick={(e) => handleBookmarkStatus(e, item)} type="button" className="btn btn-success">Bookmarked</button> : <button onClick={(e) => handleBookmarkStatus(e, item)} type="button" className="btn btn-secondary">Bookmark it</button>}</td>
                <td>{item.status === 'true' ? <button onClick={(e) => handleStatusClick(e, item)} type="button" className="btn btn-success">Covered</button> : <button onClick={(e) => handleStatusClick(e, item)} type="button" className="btn btn-secondary">Uncovered</button>}</td>
            </tr>
        )
    });










    let handlesearchText = (e) => {

        setsearchText(e.target.value);

        let to_be_searched = e.target.value.toLowerCase();

        let question_list2 = question_list.filter((item) => item.question.toLowerCase().indexOf(to_be_searched) !== -1);
        question_list2 = question_list2.map((item, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{item.id}</th>

                    <td>{item.question}</td>
                    <td><NavLink to={`/${topic}/${item.id}`}>Make a Note </NavLink></td>
                    <td>{item.bookmark_status ? <button onClick={(e) => handleBookmarkStatus(e, item)} type="button" className="btn btn-success">Bookmarked</button> : <button onClick={(e) => handleBookmarkStatus(e, item)} type="button" className="btn btn-secondary">Bookmark it</button>}</td>

                    <td>{item.status === 'true' ? <button onClick={(e) => handleStatusClick(e, item)} type="button" className="btn btn-success">Covered</button> : <button onClick={(e) => handleStatusClick(e, item)} type="button" className="btn btn-secondary">Uncovered</button>}</td>
                </tr>
            )
        });

        setQuestion_list_search(question_list2);

        setSearchCond(true);
    }


    return (
      
            


                <div>
                    <Navigation {...props}/>
                    <h1>{topic} : {arraycount}/{question_list.length}</h1>

                    <form>
                        <div className="mb-3">
                            <input value={searchText} onChange={(e) => handlesearchText(e)} placeholder="Search" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        {/* <button type="submit" class="btn btn-primary">Search</button> */}
                    </form>


                    {/* <h1>{searchText}</h1> */}

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Question</th>
                                <th scope="col">Note</th>
                                <th scope="col">bookmark_status</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!searchCond ? question_list1 : question_list_search}
                        </tbody>
                    </table>
                </div>
               
       
    )
}
