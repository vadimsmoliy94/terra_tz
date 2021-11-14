
function FormPost({ post, setPost, title }) {

    return (
        <>
            <form className="form-gap">
                <h2 className="h2">{title}</h2>
                <label className="form-label label" htmlFor={post.url}>url</label>
                <input className="form-control" type='text' placeholder='url' name="url" id={post.url}
                    value={post.url}
                    onChange={e => setPost({ ...post, url: e.target.value })} />
                <label className="form-label label" htmlFor={post.title}>Title</label>
                <input className="form-control label" type='text' placeholder='title' name="title" id={post.title}
                    value={post.title}
                    onChange={e => setPost({ ...post, title: e.target.value })} />
                <label className="form-label label" htmlFor={post.text}>Description</label>
                <input className="form-control" type='text' placeholder='description' name="text" id={post.text}
                    value={post.text}
                    onChange={e => setPost({ ...post, text: e.target.value })} />
                <label className="form-label label" htmlFor={post.image}>image-url</label>
                <input className="form-control" type='text' placeholder='image url' name="image" id={post.image}
                    value={post.image}
                    onChange={e => setPost({ ...post, image: e.target.value })} />
            </form>
        </>
    );
}

export default FormPost;
