import { useEffect, useState } from "react";
import EditModal from "../component/EditModal";
import AddPost from "../component/Addpost";
import PostList from "../component/PostList";


// import '../App.css';



function Edit({ userData, updateEdit, deletePost, addNewPost }) {
    console.log(userData)
    //   const [userData, setUserData] = useState([]);

    const [modal, setModal] = useState(false);

    const [data, setData] = useState(null);


    //   useEffect(() => {
    //     fetch('https://yourtestapi.com/api/posts')
    //       .then((response) => {
    //         return response.json();
    //       })
    //       .then((data) => {
    //         let d = data.reverse();
    //         setUserData(d);
    //       });
    //   }, []);



    //   function deletePost(e) {
    //     setUserData(userData.filter(elem => elem.id !== +e.target.id));
    //   }

    //   function addNewPost(post) {
    //     setUserData([post, ...userData]);

    //   }

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

    // function updateEdit(updateData) {
    //     setUserData((data) => data.map((elem) => {
    //         if (elem.id === updateData.id) {
    //             return updateData;
    //         }
    //         return elem;
    //     }))
    // }

    return (
        <div className=" App p-3 mb-2 bg-light text-dark ">
            <EditModal visible={modal} setVisible={setModal} data={data} updateEdit={updateEdit} />
            <AddPost addNewPost={addNewPost} userData={userData} />
            <PostList userData={userData} deletePost={deletePost} editTargetPost={editTargetPost} />

        </div >
    );
}

export default Edit;
