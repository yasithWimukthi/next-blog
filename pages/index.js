import {Fragment} from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

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

function HomePage(){
    return (
        <Fragment>
            <Hero/>
            <FeaturedPosts posts={DUMMY_POSTS}/>
        </Fragment>
    );
}

export default HomePage;