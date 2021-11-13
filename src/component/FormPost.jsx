
function FormPost({ post, setPost, title }) {

    return (
        <>
            <form className="form-gap">
                <h2 className="h2">{title}</h2>
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
            </form>
        </>
    );
}

export default FormPost;
