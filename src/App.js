import { useEffect, useState } from "react";
import EditModal from "./EditModal";

import './App.css';

function App() {

  const [userData, setUserData] = useState([]);
  const [post, setPost] = useState({
    title: "",
    text: "",
    url: "",
    image: "",
  });
  const [modal, setModal] = useState(false);
  const [erorAddpost, setErorAddPost] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://yourtestapi.com/api/posts')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let d = data;
        setUserData(d);
      });
  }, []);

  function deletePost(e) {
    setUserData(userData.filter(elem => elem.id !== +e.target.id));
  }

  function addPost(e) {
    e.preventDefault();

    const newPost = {
      ...post,
      id: userData[userData.length - 1]['id'] + 1,
      created_at: Date.now(),
      updated_at: Date.now(),
      active: 1,
      sort_order: 1,
      deleted_at: null,
    }

    setErorAddPost(false);

    if (post.title && post.text && post.url && post.image) {
      setUserData([...userData, newPost]);
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

  function editTargetPost(id) {
    let ind = userData.find((elem) => {
      return elem.id === id;
    })
    setData(ind);
  }

  useEffect(() => {
    if (data) {
      setModal(true);
    }
  }, [data]);

  function updateEdit(updateData) {
    setUserData((data) => data.map((elem) => {
      if (elem.id === updateData.id) {
        return updateData;
      }
      return elem;
    }))
  }

  return (
    <div className="App p-3 mb-2 bg-light text-dark">
      <EditModal visible={modal} setVisible={setModal} data={data} updateEdit={updateEdit} />
      <h2 className="h2">Створити пост</h2>
      <form onSubmit={addPost}>
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
        <button className="btn btn-primary" type="submit">Add</button>
      </form>
      {
        erorAddpost
          ? <div className="p-3 mb-2 bg-warning text-dark  "  >
            <p className="h2 ">Для створення поста заповніть усі поля</p>
          </div>
          : <div></div>
      }

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
    </div >
  );
}

export default App;
