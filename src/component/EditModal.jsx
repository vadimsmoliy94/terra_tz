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
            <FormPost post={post} setPost={setPost} title='Edit post' />
            <div className="edit-btn">
                <button className="btn btn-primary " type="submit" onClick={updatePost}>Save</button>
                <button className="btn btn-primary" type="submit" onClick={() => setVisible(false)}>Close</button>
            </div>
            {
                erorAddpost
                    ? <div className="p-3 mb-2 bg-warning text-dark  "  >
                        <p className="h2 ">Fill in all the fields to create a post</p>
                    </div>
                    : <div></div>
            }
        </div>
    );
}

export default EditModal;