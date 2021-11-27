import classes from './post-content.module.css';
import PostHeader from "./post-header";

const DUMMY_POSTS =
    {
        slug:'getting-started-with-nextjs',
        title: 'Getting started with NextJS',
        image : 'getting-started-nextjs.png',
        date: '2021-09-25',
        content : '# This is the first post'
    }


function PostContent (){

    const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`

    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POSTS.title} image={imagePath}/>
            {DUMMY_POSTS.content}
        </article>
    )
}

export default PostContent;