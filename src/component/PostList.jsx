import "../App.css";

function PostList({ userData, deletePost, editTargetPost }) {

    return (
        <div className="list">
            {
                userData.map((elem) => {
                    if (elem.id < 45) return false
                    return < div key={elem.id + elem.title} className="border border-success blok">
                        <img className="img-thumbnail" src={elem.image || "/image/nofoto.png"} alt={elem.title} />
                        <h2 className="h2">{elem.title + elem.id}</h2>
                        <p className="h2">{elem.text}</p>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
                            <a href={elem.url}> <button className="btn btn-primary me-md-2" type="button" >Sourse</button></a>
                            <button className="btn btn-primary" type="button" onClick={() => editTargetPost(elem.id)} >Edit</button>
                            <button className="btn btn-primary" type="button" id={elem.id} onClick={deletePost}>Delete</button>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default PostList;
