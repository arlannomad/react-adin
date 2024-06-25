// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react'
import {listPosts } from '../services/PostService'

const ListPostComponents = () => {

    const [posts, setPosts] = useState([])


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

  return (
     <div>

     <h2 className='text-center'>List of Posts</h2>
     <br></br>
     <table className='table table-striped table-bordered'>
         <thead>
             <tr>
                 {/* <th>Id</th> */}
                 <th>Title</th>
                 <th>Image</th>
                 <th>Added At</th>
                 {/* <th>Content</th> */}
                 <th>Actions</th>
             </tr>
         </thead>
         <tbody>
             {
                    Array.isArray(posts) && posts?.map(post => 
                     <tr key={post.id}>
                         {/* <td>{post.id}</td> */}
                         <td>{post.title}</td>
                         <td>{post.imageFile}</td>
                         <td>{post.addedAt}</td>
                         {/* <td>{post.content}</td> */}
                     </tr>)
             }
         </tbody>
     </table>
 </div>
  )
}

export default ListPostComponents