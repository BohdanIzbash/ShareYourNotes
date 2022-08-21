import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json'

function Note() {
    const[noteText, setNoteText] = useState('');
    const[lineClass, setLineClass] = useState('hide');
    const[formClass, setFormClass] = useState('hide');
    const[errorClass, setErrorClass] = useState('hide');
    
    let {noteURL} = useParams();

    useEffect(()=>{
        if (noteURL !== undefined) {
            setFormClass('hide');
        fetch (env.urlBackend,
            {method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: JSON.stringify({"url": noteURL})
        })
        .then( response => response.json())
        .then( response => {
            if (response.result) {
                setNoteText(response.note);
                setLineClass('');
                setFormClass('hide');
                setErrorClass('hide');
            }
            else if (!response.result){
                setLineClass('hide');
                setFormClass('hide');
                setErrorClass('');
            }
        });
        }
        else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
    }, []);

    function getNote(event){
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === ''){
            alert('Заповніть поля');
            return false;
        }
        noteURL = url;
        window.location.href = env.url+'/'+url;
    }

    function searchNote(){
        window.location.href=env.url;
    }

    return (
    <div>
        <div className={lineClass}>
            <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Замітка: {noteURL}</h4>
                <div>{noteText}</div>
                <hr />
                <p className="mb-0">Увага! Скопіюйте замітку. Після показу замітка буде видалена!</p>
            </div>
                <h3>Замітки:</h3>
                <div>{noteText}</div>
                <div className="text-right">
                    <button onClick={searchNote} className="btn btn-primary">Дивитись ще одину замітку</button>
                </div>
                </div>
                <div className={errorClass}>
                    <div className="alert alert-danger" role="alert">
                        <p className="text">Виникла помилка. Такий hash не знайдено.</p>
                    </div>
                    <div className="text-right"><button onClick={searchNote} className="btn btn-primary">Шукати іншу замітку</button></div>
                </div>
            <div className="row">
                <div className="col-12">
                    <div className="text">
                        <div className={formClass}>
                            <form action="" onSubmit={getNote}>
                                <div className="form-group">
                                    <label htmlFor="url">введіть hash замітки</label>
                                    <input type="text" name="url" id="url" className="form-control" />
                                    <div className="form-group text-right">
                                        <button type="submit" className="btn btn-primary">Шукати замітку</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
            
            
            
            
            </div>

            
    );
}

export default Note;