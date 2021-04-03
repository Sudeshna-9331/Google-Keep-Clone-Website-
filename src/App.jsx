import React, { useState } from 'react';
import logo from "./images/logo.jpeg";


const App = () => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [addItem, setAddItem] = useState([]);

    const inputEvent = (e) => {
        e.preventDefault();

        let value = e.target.value;
        const name = e.target.name;



        setNote((oldData) => {
            return {
                ...oldData,
                [name]: value,
            };
        });
    };

    const addNote = (e) => {

        e.preventDefault();
        console.log(note.title);
        console.log(note.content);
        if(note.title == "" || note.content == "" ){
            alert("You may have missed any position...Please add it.")
        }
        else{

        setAddItem((prevData) => {
            return [...prevData, note];


        })

        }


        setNote({
            title: "",
            content: ""
        });
    }

    const deleteNode = (e) => {
        console.log("delete");

        let id = e.target.id;
        let key = e.target.key;

        console.log(e.target.id);

        setAddItem((oldItem) => {
            return oldItem.filter((item, index) => {

                if (index != id) {
                    return item;
                }
            });

        }
            
        )};


    return <>
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
                <h1>Google Keep</h1>
            </div>
            <div className="info">
                <ol>
                    <li>Create Account</li>
                    <li>Sign In</li>
                </ol>
            </div>
        </div>

        <div className="main_note">
            <form>
                <div className="input">
                    <input type="text" name="title" value={note.title} onChange={inputEvent} placeholder="Title" />
                    <textarea name="content" value={note.content}
                        onChange={inputEvent} rows="" cols="" placeholder="Write a note..." />
                </div>
                <button onClick={addNote}>+</button>
            </form>
        </div>

        <div className="notes">
            {addItem.map((val, index) => {
                return <>

                    <div className="notes_list">
                        <div className="card">
                            <h1>{val.title}</h1>

                            <div>{val.content}</div>
                        </div>
                        <button key={index} id={index} onClick={deleteNode}>X</button>
                    </div>



                </>
            })}
        </div>

    </>

}
export default App;