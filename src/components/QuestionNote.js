import React from 'react'
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import Navigation from './Navigation';

export default function QuestionNote() {
    const { topic, id } = useParams();
    const [note_data, setNote_data] = useState({});
     const [note_updated_status, setNote_updated_status] = useState(false);
    console.log(topic, id,note_data );

    useEffect(() => {
        fetch(`/note_init/${topic}/${id}`)
            .then((data) => data.json())
            .then((actual_data) => setNote_data(actual_data))
            .catch((err) => console.log(err));

    }, []);





    let handleNote=(e)=>{
        setNote_data({...note_data,note:e.target.value});
    }


    let handleSubmit=(e)=>{
        e.preventDefault();
        const requestOptions={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({note:note_data.note})
            
        }

        fetch(`/update_note/${topic}/${id}`,requestOptions)
        .then((data)=>setNote_updated_status(true))
        .catch((err)=>console.log(err));

    }


    return (
        <>
            {/* <div>{topic}</div>
            <div>{id}</div> */}

            <Navigation />
           
          
           <br></br>
          <p>Question :  {note_data.question}</p>


            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <textarea value={note_data.note} onChange={(e)=>handleNote(e)} placeholder="Write ur notes here..." className="form-control" id="note1" rows="3"></textarea>
                {note_updated_status? <p>Note value pushed..</p>:<></>} 
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </>





       
    )
}
