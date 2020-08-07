import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';
import { post } from 'jquery';

const Home = () => {

    const [posts,setPosts] = useState(null);
    const [title, setTitle] = useState('ABC');

    const fetchPosts = () => {
        api.getAllPosts().then(res => {
            const result = res.data;
            setPosts(result.data)
        });
    }
    
    useEffect(()  => {
        fetchPosts();
    }, []);

    const renderPosts = () => {
        if(!posts) {
            return (
                <tr>
                    <td colSpan="4">
                        Loading posts...
                    </td>
                </tr>
            );
        }
        if(posts.length === 0){
            return (
                <tr>
                    <td colSpan="4">
                        There is no post yet. Add one.
                    </td>
                </tr>
            );
        }

        return posts.map((post) => (
            <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>
                    <Link 
                    className="btn btn-warning btn-sm mr-1" 
                    to={`/edit/${post.id}`}
                    >
                    EDIT
                    </Link>
                    <button type="button" 
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                        api.deletePost(post.id)
                        .then(fetchPosts)
                        .catch(err => {
                            alert('Failed to delete post with id : ' + post.id);
                        });                    
                    }}
                    >
                    DELETE
                    </button>
                </td>
            </tr>
            ))
    }
    return (
       <AppContainer title={ title }>
           <button className="btn btn-primary" style={{ marginRight:5 }}
           
           onClick = { ()=>{
           setTitle (" DEF ");
           }
        }
        > Edit Title </button>
           <Link to="/add" className="btn btn-primary">Add Post</Link>
                    <div className="table-resposive">
                        <table className="table table-striped mt-1">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderPosts()}
                            </tbody>
                        </table>
                    </div>
       </AppContainer>
    );
}

export default Home;
