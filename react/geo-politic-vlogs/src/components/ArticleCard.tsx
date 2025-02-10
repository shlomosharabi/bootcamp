import React, { useContext } from 'react'
import {  useParams} from 'react-router-dom'
import Header from '../components/Header';
import { PostContext } from '../hooks/PostsContext';



const ArticleCard = () => {


const {id} = useParams()
console.log(id);


const { articles } = useContext(PostContext)!   
const filteredArticle = articles.filter((a)=> a.id === id);
const articleObject = filteredArticle.length > 0 ? filteredArticle[0] : null;
console.log(articleObject);

     
  return (
    <>
    <div className='article-container'>
      <h2>{articleObject?.title}</h2>
      <img src={`../${articleObject?.subjactImage}`} alt="" />
      <p>{articleObject?.content}</p>
    </div>
    </>
    
  )
}

export default ArticleCard
