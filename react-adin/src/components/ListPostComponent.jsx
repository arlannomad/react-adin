import React, {useEffect, useState} from 'react'
import { deletePost, listPosts } from '../services/PostService'
import { useNavigate } from 'react-router-dom'

const ListPostComponents = () => {

    const [posts, setPosts] = useState([])

    const navigator = useNavigate();


    useEffect(() => {
        getAllPosts();
    }, [])

    function getAllPosts() {
        listPosts().then((response) => {
            setPosts(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewPost(){
        navigator('/add-post')
    }

    function updatePost(id) {
        navigator(`/update-post/${id}`)
    }

    function removePost(id){
        console.log(id);

        deletePost(id).then((response) =>{
            getAllPosts();
        }).catch(error => {
            console.error(error);
        })
    }

  return (
     <div>

     <h2 className='text-center'>List of Posts</h2>
     <button className='btn btn-primary mb-2' onClick={addNewPost}>Add Post</button>
     <br></br>
     {/* <button className='btn btn-primary mb-2' onClick={addPhotoToThePost}>Add Photo to the Post</button> */}
     <table className='table table-striped table-bordered'>
         <thead>
             <tr>
                 <th>Id</th>
                 <th>Title</th>
                 <th>Content</th>
                 <th>Image</th>
                 <th>Actions</th>
             </tr>
         </thead>
         <tbody>
             {
                //  posts.map(post => 
                    Array.isArray(posts) && posts?.map(post => 
                     <tr key={post.id}>
                         <td>{post.id}</td>
                         <td>{post.title}</td>
                         <td>{post.content}</td>
                         <td>{post.image}</td>
                         {/* <td>{post.imageUrl}</td> */}
                         <td>
                         <button className='btn btn-info' onClick={() => updatePost(post.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removePost(post.id)}
                                    style={{marginLeft: '10px'}}
                                >Delete</button>
                         </td>
                     </tr>)
             }
         </tbody>
     </table>
 </div>
  )
}

export default ListPostComponents








// import React, { useEffect, useState } from 'react';
// import { deletePost, listPosts } from '../services/PostService';
// import { useNavigate } from 'react-router-dom';

// const ListPostComponents = () => {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const navigator = useNavigate();

//     useEffect(() => {
//         getAllPosts();
//     }, []);

//     const getAllPosts = async () => {
//         setLoading(true);
//         setError(null);
//         try {
//             const response = await listPosts();
//             console.log('API response:', response);
//             if (Array.isArray(response.data)) {
//                 setPosts(response.data);
//             } else {
//                 throw new Error('Response is not an array');
//             }
//         } catch (error) {
//             setError('Failed to fetch posts');
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const addNewPost = () => {
//         navigator('/add-post');
//     };

//     const updatePost = (id) => {
//         navigator(`/update-post/${id}`);
//     };

//     const removePost = async (id) => {
//         try {
//             await deletePost(id);
//             getAllPosts();
//         } catch (error) {
//             setError('Failed to delete post');
//             console.error(error);
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     return (
//         <div>
//             <h2 className="text-center">List of Posts</h2>
//             <button className="btn btn-primary mb-2" onClick={addNewPost}>Add Post</button>
//             <br />
//             <table className="table table-striped table-bordered">
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Title</th>
//                         <th>Content</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {posts.length === 0 ? (
//                         <tr>
//                             <td colSpan="4" className="text-center">No posts available</td>
//                         </tr>
//                     ) : (
//                         Array.isArray(posts) && posts?.map(post => 
//                             <tr key={post.id}>
//                                 <td>{post.id}</td>
//                                 <td>{post.title}</td>
//                                 <td>{post.content}</td>
//                                 <td>
//                                     <button className="btn btn-info" onClick={() => updatePost(post.id)}>Update</button>
//                                     <button className="btn btn-danger" onClick={() => removePost(post.id)} style={{ marginLeft: '10px' }}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ListPostComponents;

