import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import AppContainer from './AppContainer';
import api from '../api';

const axios = window.axios;
const BASE_API_URL = '/api'

const Add = () => {

    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const onAddSubmit = async() => {
        setLoading(true);
        try{
            // await api.addPost({
            //     title, description,
            // })
            // history.push('/');

            let params = {
                title: title,
                description: description, 
            }

            axios.post(`${BASE_API_URL}/posts`,
             params).then((data)=>{
                console.log('hi',data.data);
                history.push('/');

            }).catch(e => {
                alert('Failed to add post!');
            });

        } catch{
            alert('Failed to add post!');
        } finally{
            setLoading(false);
        }
    };

    return (
        <AppContainer title="ADD POST">
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                    className="form-control"
                    type="text" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea 
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    >
                    </textarea>
                </div>

                <div className="form-group">
                    <button 
                    type="button" 
                    className="btn btn-success"
                    onClick={onAddSubmit}
                    disabled={loading}
                    >
                        {loading ? 'LOADING...': 'ADD'}
                    </button>
                </div>
            </form>
        </AppContainer>
    );
}

export default Add;
