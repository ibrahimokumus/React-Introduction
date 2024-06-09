import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import { useState } from 'react';

function PostsList(){
    const [enteredBody,setEnteredBody] =useState('');
    const [enteredAuthor,setEnteredAuthor] =useState('');
    
    function changeBodyHandler(event){
        setEnteredBody(event.target.value);
    }
    function changeAuthorHandler(event){
        setEnteredAuthor(event.target.value);
    }
    return(
        <>
            <NewPost onChangeBody={changeBodyHandler} onChangeAuthor={changeAuthorHandler}/>
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody}/>
                <Post author = "Menual" body="Hello World!"/>  
            </ul>
       </>
    );
}
export default PostsList;