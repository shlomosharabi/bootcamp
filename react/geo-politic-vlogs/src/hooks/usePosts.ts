import React, { Dispatch,SetStateAction, useState } from 'react'

export interface Article{
    authorName: string,
    id: string,
    theme: string,
    title: string,
    promo: string,
    subjactImage: string,
    content: string
    
}
export interface Author{
    id: number,
    name: string,
    image: string

}
export interface Theme{
    Theme: string
}
export interface setTheme{
    setTheme: (theme:string)=> void
}
export interface FilterAuthorsName{
    filterAuthorsName:string
}
export interface editorKey{
    editorKey:string
}
export interface isEditor{
    isEditor: boolean
}
export interface setIsEditor{
    setIsEditor: Dispatch<SetStateAction<boolean>>;
}
const usePosts = () => {

    const [author,setAuthor] = useState<Author[]>(
        [
            {
                id:1,
                name:"צבי יחזקאלי",
                image:'src/images/Tzvi-yechezkely.jpg'
            },
            {
                id:2,
                name: "ברנרד לואיס",
                image:'src/images/bernard-luis.jpg'
            },
            {
                id:3,
                name: "יוסי יהושוע",
                image:'src/images/יוסי יהושוע.jpg'
            },
            
        ]
    )

    const [articles,setArticles] = useState<Article[]>(
        [
            {
                authorName:"יוסי יהושוע",
                id: "yossi-Lebanon-1",
                theme: "Lebanon",
                title: "  חיזבאללה ממשיך לבחון את קווי ההגנה של צהל",
                promo: "רואים משחקי כוחות בין איראן, סעודיה, ישראל ושאר המדינות. מי שמבין את המזרח התיכון יודע שהכול קשור להכול",
                subjactImage: "../../src/images/tzhal-lebanon.jpg",
                content: "השבועות האחרונים הוכיחו שוב עד כמה הזירה הביטחונית נפיצה. בצפון, חיזבאללה ממשיך לבחון את קווי ההגנה של צה\"ל עם ניסיונות חדירה ושיגורים לעבר יישובי הגבול..."
            },
            {
                authorName: "צבי יחזקאלי",
                id: "tzvi-Gaza-1",
                theme: "Gaza",
                title: "חמאס מנהל קרב התשה - ישראל צריכה לשנות גישה",
                promo: "המזרח התיכון פועל לפי כללים אחרים – ישראל לא יכולה להמשיך להגיב בלבד. עזה היא רק חלק מהתוכנית הגדולה של איראן",
                subjactImage: "../../src/images/tzahal-gaza.webp",
                content: "ההתפתחויות האחרונות בעזה לא צריכות להפתיע אף אחד. חמאס פועל כחלק מאסטרטגיה רחבה הרבה יותר, שמוכתבת ישירות מטהרן. אנחנו רואים שימוש שיטתי בשיגור רקטות, מנהרות תקיפה, והפעלת לחץ מתמיד על ישראל באמצעות הסלמות מבוקרות.\n\nמי שמכיר את האזור יודע שחמאס לא פועל לבד. הקשרים שלו עם איראן הדוקים, והוא פועל יחד עם הג'יהאד האסלאמי במטרה אחת ברורה – לשחוק את ישראל ולהכתיב את כללי המשחק. בכל עימות מחדש, ישראל מוצאת את עצמה במגננה, בזמן שחמאס וציר הטרור לומדים, מתחזקים, ומכינים את השלב הבא.\n\nהבעיה היא לא רק בעזה, אלא בתפיסה הכוללת של ישראל. המזרח התיכון לא עובד לפי אותם חוקים כמו במערב – כאן מי שלא תוקף, נחשב לחלש. ישראל חייבת להבין שהתגובה הצבאית לבדה אינה מספיקה, ושחמאס אינו ארגון טרור מבודד, אלא חלק מהמאבק הכולל של איראן נגד ישראל.\n\nלכן, אם ישראל רוצה לשנות את המציאות בדרום, היא חייבת לשנות את הכללים: לשבור את שיטת ההסלמה המבוקרת, להרתיע באופן אמיתי, ולהבהיר שחמאס לא יוכל להמשיך לנהל את העימותים לפי הקצב שנוח לו. אחרת, נמצא את עצמנו שוב ושוב באותו מעגל של ירי, תגובה, והמתנה לסבב הבא."
            }
            
            
        ]
    )
    const [Theme, setTheme] = useState<string>('All');

    const filterArticlesByTheme: Article[] = articles.filter((a)=> a.theme === Theme);
    
    const filterAuthorsName: string[] = filterArticlesByTheme.map((a)=>a.authorName);

   const editorKey:string = "1234"

   const [isEditor,setIsEditor] = useState<boolean>(false);
   
  return { author , articles , Theme  ,setTheme ,filterAuthorsName, editorKey ,isEditor ,setIsEditor}
}

export default usePosts
