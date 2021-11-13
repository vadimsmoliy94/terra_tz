import "../App.css";
import { useState } from 'react';
import FormPost from "./FormPost";

function AddPost({ addNewPost, userData }) {

    const [erorAddpost, setErorAddPost] = useState(false);
    const [post, setPost] = useState({
        title: "",
        text: "",
        url: "",
        image: "",
    });

    function addPost(e) {
        e.preventDefault();

        const newPost = {
            ...post,
            id: (userData[0].id || 0) + 1,
            created_at: Date.now(),
            updated_at: Date.now(),
            active: 1,
            sort_order: 1,
            deleted_at: null,
        }

        setErorAddPost(false);

        if (post.title && post.text && post.url && post.image) {
            addNewPost(newPost);
            setPost({
                title: "",
                text: "",
                url: "",
                image: "",
            })
        } else {
            setErorAddPost(true);
        }
    }

    return (
        <div className="list">
            <FormPost post={post} setPost={setPost} title='Створити пост' />
            <button className="btn btn-primary btn-end" type="submit" onClick={addPost}>Add Post</button>
            {
                erorAddpost
                    ? <div className="p-3 mb-2 bg-warning text-dark  "  >
                        <p className="h2 ">Для створення поста заповніть усі поля</p>
                    </div>
                    : <div></div>
            }
        </div >
    );
}

export default AddPost;
