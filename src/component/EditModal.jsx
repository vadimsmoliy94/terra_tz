import '../App.css';
import { useEffect, useState } from 'react';
import FormPost from './FormPost';

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
            title: data?.title || '',
            text: data?.text || '',
            url: data?.url || '',
            image: data?.image || '',

        })
    }, [data]);

    function updatePost() {
        if (post.title && post.text && post.url && post.image) {
            updateEdit({ ...data, ...post, updated_at: new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('.')[0].replace('T', ' '), });
            setVisible(false);
        } else {
            setErorAddPost(true);
        }
    }

    if (visible === false) {
        return false
    }
    return (
        <div className=" modal active " >
            <FormPost post={post} setPost={setPost} title='Редагувати пост' />
            <div className="edit-btn">
                <button className="btn btn-primary " type="submit" onClick={updatePost}>Зберегти</button>
                <button className="btn btn-primary" type="submit" onClick={() => setVisible(false)}>Закрити</button>
            </div>
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