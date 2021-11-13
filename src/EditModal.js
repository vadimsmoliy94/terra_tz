import './App.css';
import { useEffect, useState } from 'react';

function EditModal({ visible, setVisible, data, updateEdit }) {

    const [erorAddpost, setErorAddPost] = useState(false);

    const [post, setPost] = useState({
        title: '',
        text: '',
        url: '',
        image: '',

    });
    useEffect(() => {
        setPost({
            title: data?.title,
            text: data?.text,
            url: data?.url,
            image: data?.image,

        })
    }, [data]);

    function updatePost() {
        if (post.title && post.text && post.url && post.image) {
            updateEdit({ ...data, ...post, updated_at: Date.now(), });
            setVisible(false);
        } else {
            setErorAddPost(true);
        }
    }

    if (visible === false) {
        return false
    }
    return (
        <div className="App p-3 mb-2 bg-light text-dark modal active " >
            <h2 className="h2">Редагувати пост</h2>
            <form onSubmit={addPost} className='edit_blok'>
                <input className="form-control" type='text' placeholder='url' name="url"
                    value={post.url}
                    onChange={e => setPost({ ...post, url: e.target.value })} />
                <input className="form-control" type='text' placeholder='title' name="title"
                    value={post.title}
                    onChange={e => setPost({ ...post, title: e.target.value })} />
                <input className="form-control" type='text' placeholder='description' name="text"
                    value={post.text}
                    onChange={e => setPost({ ...post, text: e.target.value })} />
                <input className="form-control" type='text' placeholder='image url' name="image"
                    value={post.image}
                    onChange={e => setPost({ ...post, image: e.target.value })} />
                <button className="btn btn-primary" type="submit" onClick={updatePost}>Зберегти</button>
                <button className="btn btn-primary" type="submit" onClick={() => setVisible(true)}>Закрити</button>
            </form>
            {
                erorAddpost
                    ? <div className="p-3 mb-2 bg-warning text-dark  "  >
                        <p className="h2 ">Для створення поста заповніть усі поля</p>
                    </div>
                    : <div></div>
            }
        </div>
    );
}

export default EditModal;