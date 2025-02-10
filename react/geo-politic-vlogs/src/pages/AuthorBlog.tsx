import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostContext } from "../hooks/PostsContext";

const AuthorBlog = () => {
  const { articles, Theme } = useContext(PostContext)!;
  const navigate = useNavigate();
  console.log(articles[0].subjactImage);
  

  const { id } = useParams();
  const ID = parseInt(id ? id : "");

  const handleNavigate=(id: string)=>{
    navigate(`/article/${id}`)
  }
  const validArticles = articles.filter((a)=>(Theme === 'All'||a.theme === Theme) && a.authorName === id )
  console.log(validArticles);
  

  return (
    <>
      {validArticles.length>0? (validArticles.map((a) => {
         
          return (
            <div key={a.id} className="Blog-card-container" onClick={()=>handleNavigate(a.id)}>
              <div  className="blog-card" >
                <h2>{a.title}</h2>
                <img src={a.subjactImage} alt="" />
                <p>{a.promo}</p>
              </div>
            </div>
          )
        })):(
           <h2 className="text-red-500">{`No Article about ${Theme}`}</h2>
        )
        
        
      }
    </>
  );
};

export default AuthorBlog;
