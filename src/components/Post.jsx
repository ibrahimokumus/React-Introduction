const names = ['ali','veli'];
function Post(){
    const cabbar = Math.random() > 0.5 ? names[0]:names[1];
    return(
        <div>
            <p>{cabbar}</p>
            <p>cabbar</p>
        </div>
        
    );
}
export default Post;