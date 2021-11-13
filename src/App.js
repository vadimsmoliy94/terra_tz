import { useEffect, useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Edit from "./page/Edit";
import './App.css';
import Home from "./page/Home";

function App() {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('https://yourtestapi.com/api/posts')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let d = data.reverse();
        setUserData(d);
      });
  }, []);

  function deletePost(e) {
    setUserData(userData.filter(elem => elem.id !== +e.target.id));
  }

  function addNewPost(post) {
    setUserData([post, ...userData]);

  }

  function updateEdit(updateData) {
    setUserData((data) => data.map((elem) => {
      if (elem.id === updateData.id) {
        return updateData;
      }
      return elem;
    }))
  }

  return (
    <div className=" App p-3 mb-2 bg-light text-dark ">
      <BrowserRouter>
        <div className="navbar">
          <Link to='/' className='nav-link' >Home</Link>
          <Link to='/Edit' className='nav-link'>Add/Delete post</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home userData={userData} />} />
          <Route path='/Edit' element={<Edit userData={userData} updateEdit={updateEdit} deletePost={deletePost} addNewPost={addNewPost} />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
