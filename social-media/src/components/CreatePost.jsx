import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";

const CreatePost = () => {
  const {addPost} = useContext(PostList)


  const userIdElement = useRef()
  const postTitleElement = useRef()
  const postBodyElement = useRef()
  const reactionsElement = useRef()
  const tagsElement = useRef()

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags)

  }

  return (
<form className="create-post" onSubmit={handleSubmit}>

<div className="mb-3">
    <label htmlFor="userId" className="htmlForm-label">Enter Your User Id </label> <br/>
    <input type="text"
    ref={userIdElement}
    className="htmlForm-control" id="userId"
    placeholder="Your User Id"/>
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="htmlForm-label">Post Title</label><br/>
    <input type="text"
    ref={postTitleElement} className="htmlForm-control" id="title"
    placeholder="How are you feeling today.."/>
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="htmlForm-label">Post Content</label><br/>
    <textarea type="text" ref={postBodyElement} rows="4" className="htmlForm-control" id="title"
    placeholder="Tell us more about it"/>
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="htmlForm-label">Number of Reactions </label><br/>
    <input type="text"
    ref={reactionsElement} className="htmlForm-control" id="reactions"
    placeholder="How many people reacted to this post"/>
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="htmlForm-label">Enter your Hashtags</label><br/>
    <input type="text"
    ref={tagsElement} className="htmlForm-control" id="tags"
    placeholder="Please Enter Tags Using Space"/>
  </div>

  <button type="submit" className="btn btn-primary">Post</button>
</form>
  )
}

export default CreatePost;