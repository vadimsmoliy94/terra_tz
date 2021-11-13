import { useEffect, useState } from "react";
import EditModal from "../component/EditModal";
import AddPost from "../component/Addpost";
import PostList from "../component/PostList";

function Edit({ userData, updateEdit, deletePost, addNewPost }) {

    const [modal, setModal] = useState(false);
    const [data, setData] = useState(null);

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

    return (
        <div className=" App p-3 mb-2 bg-light text-dark ">
            <EditModal visible={modal} setVisible={setModal} data={data} updateEdit={updateEdit} />
            <AddPost addNewPost={addNewPost} userData={userData} />
            <PostList userData={userData} deletePost={deletePost} editTargetPost={editTargetPost} />

        </div >
    );
}

export default Edit;
