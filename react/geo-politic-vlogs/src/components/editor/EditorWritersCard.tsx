import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../../hooks/PostsContext";

const EditorWritersCard = () => {
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/AuthorBlog/${id}`);
  };

  const { author, Theme, filterAuthorsName } = useContext(PostContext)!;

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
        <div className="writterCard">
          <button>Add blog</button>
        </div>
      </>
    );
  }

  return (
    <div className="posts-container">
      {Theme === "All" ? display(author) : display(filteredAuthorList)}
    </div>
  );
};

export default EditorWritersCard;
