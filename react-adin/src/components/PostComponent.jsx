import React, { useState, useEffect } from 'react'
import { addPosts, getPost, updatePost } from '../services/PostService'
import { useNavigate, useParams } from 'react-router-dom';

const PostComponent = () => {


    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')

    const {id} = useParams();
    
    const [errors, setErrors] = useState({
      title: '',
      content: '',
      image: ''
    })

    const navigator = useNavigate();

    useEffect(() => {
      if(id) {
        getPost(id).then((Response) => {
          setTitle(Response.data.title);
          setContent(Response.data.content);
          setImage(Response.data.image);
        }).catch(error => {
          console.error(error);
        })
      }
    }, [id])

    function saveOrUpdatePost(e){
      e.preventDefault();

      if(validateForm()){

          const post = {title, content, image}
          console.log(post)

          if(id){
              updatePost(id, post).then((response) => {
                  console.log(response.data);
                  navigator('/posts');
              }).catch(error => {
                  console.error(error);
              })
          } else {
              addPosts(post).then((response) => {
                  console.log(response.data);
                  navigator('/posts')
              }).catch(error => {
                  console.error(error);
              })
          }
      }
  }

    function validateForm() {
      let valid = true;

      const errorsCopy = {... errors}

      if(title.trim()) {
        errorsCopy.title = '';
      } else {
        errorsCopy.title = 'Title is required';
        valid = false;
      }

      if(content.trim()) {
        errorsCopy.title = '';
      } else {
        errorsCopy.content = 'Content is required';
        valid = false;
      }


      if (!image) {
        errorsCopy.image = 'Image is required';
        valid = false;
    } else {
        errorsCopy.image = '';
    }

      setErrors(errorsCopy);
      return valid;
    }

    function pageTitle(){
      if(id){
          return <h2 className='text-center'>Update Post</h2>
      }else{
          return <h2 className='text-center'>Add Post</h2>
      }
  }


  return (
    <div className='container'>
      <br /> <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {
          pageTitle()
          }
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
              <label className='form-label'>Title:</label>
              <input
                                type='text'
                                placeholder='Enter Post Title'
                                name='title'
                                value={title}
                                className={`form-control ${ errors.title ? 'is-invalid': '' }`}
                                onChange={(e) => setTitle(e.target.value)}
                            >
                            </input>
                            { errors.title && <div className='invalid-feedback'> { errors.title}    </div> }
              </div>

              <div className='form-group mb-2'>
              <label className='form-label'>Content:</label>
              <input
                                type='text'
                                placeholder='Enter Post Content'
                                name='content'
                                value={content}
                                className={`form-control ${ errors.content ? 'is-invalid': '' }`}
                                onChange={(e) => setContent(e.target.value)}
                            >
                            </input>
                            { errors.content && <div className='invalid-feedback'> { errors.content}    </div> }
              </div>

              <div className='form-group mb-2'>
                                <label className='form-label'>Image:</label>
                                <input
                                    type='file'
                                    name='image'
                                    className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                                    onChange={(e) => setImage(e.target.files[0])}
                                >
                                </input>
                                {errors.image && <div className='invalid-feedback'>{errors.image}</div>}
                            </div>

              <button className='btn btn-success' onClick={saveOrUpdatePost} >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostComponent