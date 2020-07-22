import React,{useState, useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';


export const Form = () => {
    const [value,setValue] = useState('');
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)
    const SubmitHandler = event => {
        event.preventDefault();

        if(value.trim()){
            firebase.addNote(value.trim()).then( () => {
                alert.show('Заметка была создана', 'success')
            }).catch(() => {
                alert.show('Что то пошло не так','danger')
            })
            setValue('')
        }else {
            alert.show('Введите название заметки')
        }
    }
    return (
        <form onSubmit={SubmitHandler}>
            <div className="form-group">
                <input 
                type="text" 
                className="form-control"
                placeholder="write note here..."
                value ={value}
                onChange = {e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}