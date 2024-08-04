import './App.css';
import {useState,useEffect} from 'react';
import ArticleList from './components/ArticleList';
import Form from './components/Form'

function App() {
  const [Articles,setArticles] = useState([])
  const [editedArticle,setEditedArticle] = useState(null)

  useEffect(()=>{
    fetch('http://localhost:5000/get',{
      'method':'GET',
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(resp=>resp.json())
    .then(resp => setArticles(resp))
    .catch(error=>console.log(error))
  },[])


  const editArticle = (Articles) =>{
    //console.log("Hello World")
    setEditedArticle(Articles)
  }

  const updatedData = (article) => {
    const new_article = Articles.map(my_article =>{
      if(my_article.id === article.id){
        return article
      } else{
        return my_article
      }
    })
    setArticles(new_article)
  }

  const openForm = () => {
    setEditedArticle({title:'',body:''})
  }

  const insertedArticle = (article) => {
    const new_articles = [...Articles,article]
    setArticles(new_articles)
  }

  const deleteArticle =(article) => {
    const new_articles = Articles.filter(myarticle => {
      if(myarticle.id===article.id){
        return false
      }
      return true
    }) 

    setArticles(new_articles)
  }

  return (
    <div className="App">
      <div className='row'>
        <div className='col'>
        <h1>Flask and react JS course</h1>
        </div>
        <div className='col'>
        <button
        className='btn btn-success'
        onClick={openForm}
        >InsertArticle</button>
        </div>
      </div>
      
      <br/>
      <br/>

      <ArticleList ArticlesParam={Articles} editArticle={editArticle} deleteArticle={deleteArticle}/>
      {editedArticle ? <Form ArticleParm={editedArticle} updatedData={updatedData} insertedArticle={insertedArticle}/>:null}
      
    </div>
  );
}

export default App;
