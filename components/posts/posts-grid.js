import classes from './post-grid.module.css'
import PostItem from "./post-item";

function PostGrid ({posts}){
   return (
       <ul className={classes.grid}>
           {
               posts.map( post => {
                  return <PostItem/>
               })
           }
       </ul>
   )
}

export default PostGrid;