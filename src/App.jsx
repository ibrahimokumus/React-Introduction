import MainHeader from "./components/MainHeader";
import Post from "./components/Post";
import PostsList from "./components/PostsList";
import { useState } from "react";
function App(){
  const [modelIsVisible,setModelIsVisible ] = useState(true);

  function showModalHandler()
  {
    setModelIsVisible(true)
  }
  function hideModalHandler(){
    setModelIsVisible(false)
  }
  return(
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
      <PostsList
        isPosting={modelIsVisible}
        onStopPosting = {hideModalHandler}
      />
      </main> 
    </>

    
    );
}
export default App
