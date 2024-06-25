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
        <br></br>
        <br></br>
         <div className="row">
         <div className="col-md-5">
         <div className="form-group">
                  <form className="form-inline" th:action="@{search}">
                      <div className="input-group">
                             <label>
                                 <input type="text" class="form-control" name="query" />
                             </label>
                           <span className="input-group-btn">
                               <button className="btn btn-primary" type="submit"> Search</button>
                           </span>
                     </div>
                 </form>
              </div>
         </div>
         </div>
     <h2 className='text-center'>Posts</h2>
     
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
                         <td>
                         <img th:src="@{'/images/' + ${post.getImageFile}}" alt="Post Image" width="100"/>
                         </td>
                         <td>{post.addedAt}</td>
                         {/* <td>{post.content}</td> */}
                         <button className='btn btn-info' onClick={() => view(post.id)}>View</button>
                     </tr>)
             }
         </tbody>
     </table>
 </div>
  )
}

export default ListPostComponents