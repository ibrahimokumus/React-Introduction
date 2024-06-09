import classes from './Post.module.css'
//const names = ['ali','veli'];

function Post(props){
    //const cabbar = Math.random() > 0.5 ? names[0]:names[1];
    return(
        <li className={classes.post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </li>
        
    );
}
export default Post;