import React, { useEffect } from 'react'
import { getPost } from '../services/PostService'
import { useParams } from 'react-router-dom';

const PostComponent = () => {


    const {id} = useParams();

    useEffect(() => {
      if(id) {
        getPost(id).then((Response) => {
          setTitle(Response.data.title);
          setContent(Response.data.content);
          setAddedAt(Response.data.addedAt)
          setImage(Response.data.imageFile);
        }).catch(error => {
          console.error(error);
        })
      }
    }, [id])


  return (
    <div className='container'>
      
    </div>
  )
}

export default PostComponent