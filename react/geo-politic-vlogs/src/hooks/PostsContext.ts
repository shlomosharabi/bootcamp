import React, { createContext ,Dispatch ,SetStateAction} from 'react'
import { Author ,Article ,Theme ,setTheme ,FilterAuthorsName ,editorKey ,isEditor ,setIsEditor} from '../hooks/usePosts'


interface PostsContextInterface{
    author: Author[],
    articles: Article[],
    Theme: string,
    setTheme: (theme:string)=> void,
    filterAuthorsName:string[],
    editorKey:string,
    isEditor: boolean,
    setIsEditor: Dispatch<SetStateAction<boolean>>
}

export const PostContext = createContext<PostsContextInterface | undefined>(undefined) 

