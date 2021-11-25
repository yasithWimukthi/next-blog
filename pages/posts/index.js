import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
    {
        slug:'getting-started-with-nextjs',
        title: 'Getting started with NextJS',
        image : 'getting-started-nextjs.png',
        excerpt : 'Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.',
        date: '2021-09-25'
    },
    {
        slug:'getting-started-with-nextjs2',
        title: 'Getting started with NextJS',
        image : 'getting-started-nextjs.png',
        excerpt : 'Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.',
        date: '2021-09-25'
    },
    {
        slug:'getting-started-with-nextjs3',
        title: 'Getting started with NextJS',
        image : 'getting-started-nextjs.png',
        excerpt : 'Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.',
        date: '2021-09-25'
    }
]

function AllPostsPage(){
    return (
        <AllPosts posts={DUMMY_POSTS}/>
    )
}

export default AllPostsPage;