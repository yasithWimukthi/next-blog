import classes from './posts-grid.module.css'
import PostItem from "./post-item";

function PostGrid ({posts}){
   return (
       <ul className={classes.grid}>
           {
               posts.map( post => {
                  return <PostItem key={post.slug} post={post}/>
               })
           }
       </ul>
   )
}

export default PostGrid;