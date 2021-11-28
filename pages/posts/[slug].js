import PostContent from "../../components/posts/post-detail/post-content";
import {getPostData} from "../../lib/posts-util";

function PostDetailPage(){
    return (
        <PostContent/>
    )
}

export function getStaticProps(context){
    const {params} = context
    const {slug} = params

    const postData = getPostData(slug)

    return {
        props : {
            posts : postData
        },
        revalidate : 600
    }
}

export function getStaticPaths() {
    return {
        paths : [],
        fallback : true
    }
}

export default PostDetailPage;