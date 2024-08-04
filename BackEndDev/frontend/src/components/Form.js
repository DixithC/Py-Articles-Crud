import React, { useState , useEffect} from 'react'
import APIService from './APIService'

function Form(props) {
    const[title,setTitle]=useState('')
    const[body,setBody]=useState('')

    useEffect(()=>{
      setTitle(props.ArticleParm.title)
      setBody(props.ArticleParm.body)
    },[props.ArticleParm])

    const updateArticle =() =>{
      APIService.UpdateArticle(props.ArticleParm.id,{title,body})
      .then(resp => props.updatedData(resp))
      .catch(error => console.log(error))
    }

    const insertArticle = () =>{
      APIService.InsertArticle({title,body})
      .then(resp=>props.insertedArticle(resp))
      .catch(error=>console.log(error))
    }

  return (
    <div>
        {props.ArticleParm ? (
            <div className='mb-3'>
                <label htmlFor = 'title' className='form-label'>Title</label>
                <input type='text' 
                className='form-control'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder='Please Enter  Title'/>

                <label htmlFor = 'body' className='form-label'>Description</label>
                <textarea rows ='5' 
                className='form-control' 
                value={body}
                onChange={(e)=>setBody(e.target.value)} 
                placeholder='Please Enter Description'/>

                {
                  props.ArticleParm.id ? <button
                  onClick={updateArticle}
                  className='btn btn-success mt-3'
                  >Update</button>
                  :
                  <button
                onClick={insertArticle}
                className='btn btn-success mt-3'
                >Insert</button>
                }

            </div>

        ):null}
    </div>
  )
}

export default Form