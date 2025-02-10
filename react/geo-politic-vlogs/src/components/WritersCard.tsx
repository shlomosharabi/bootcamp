import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../hooks/PostsContext";

const WritersCard = () => {
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/AuthorBlog/${id}`);
  };

  const { author, Theme, filterAuthorsName ,isEditor} = useContext(PostContext)!;

  console.log(filterAuthorsName);

  const filteredAuthorList = author.filter((a) =>
    filterAuthorsName.includes(a.name)
  );

  function display(array) {
    return (
      <>
        {array.map((a) => (
          <div
            key={a.id}
            className="writterCard"
            onClick={() => handleNavigate(a.name)}
          >
            <img src={a.image} alt="" />
            <h2>{a.name}</h2>
            <button>Read</button>
          </div>
        ))}
        {
          isEditor? <div className="writterCard">
            <button>Add blog</button>
            <img src="src/images/add-blog-icon.png" alt="" />
          </div>:""
        }
      </>
    );
  }

  return (
    <div className="posts-container">
      {Theme === "All" ? display(author) : display(filteredAuthorList)}
    </div>
  );
};

export default WritersCard;
