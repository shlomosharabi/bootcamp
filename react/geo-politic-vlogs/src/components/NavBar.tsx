import React, { SelectHTMLAttributes, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { PostContext } from '../hooks/PostsContext'
import { useNavigate } from "react-router-dom";



const NavBar: React.FC = () => {
  const{  setTheme ,editorKey ,isEditor ,setIsEditor} = useContext(PostContext)! 
  
  const navigate = useNavigate();

const handleThemeChange=(event:React.ChangeEvent <HTMLSelectElement>)=>{
  setTheme(event.target.value)

}
const handleEdit=()=>{
  const userKey = prompt('Enret Editor Key')
  {userKey === editorKey? setIsEditor(true): alert("wrong key try agein")}

}

  return (
    <nav className="navbar">
      <div className='logo'>
        <img src='../../src/images/middle-east.jpg' alt="" />
        <h1>MiddleEastern</h1>
        

      </div>
      {isEditor?<h2>Welcome Editor</h2>:""}
      <div className='nav-links'>
        <select name="" id="" onChange={handleThemeChange}>
          <option key={"All"} value="All">All</option>
          <option key={"Gaza"} value="Gaza">Gaza</option>
          <option key={"Lebanon"} value="Lebanon">Lebanon</option>
        </select>

        {!isEditor?<button onClick={handleEdit}>Edit</button>:""}
        {isEditor?<button onClick={()=> setIsEditor(false)}>Sign Out</button>:""}
        <Link to={'/About'}><a href="">About</a></Link>  
        <a href="">Contact</a>

      </div>
    </nav>
  );
};

export default NavBar;
