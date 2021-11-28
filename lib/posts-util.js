import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(),'posts')

function getPostData(filename){
    const filePath = path.join(postsDirectory,filename)
    const fileContent = fs.readFileSync(filePath,'utf-8')
    const {data,content} = matter(fileContent)

    const postSlug = filename.replace(/\.md$/,'')

    return  {
        slug: postSlug,
        ...data,
        content
    }
}

export function getAllPosts() {
    const postsFiles =  fs.readdirSync(postsDirectory)
    const allPosts = postsFiles.map(postsFile => getPostData(postsFile))

    const sortedPosts = allPosts.sort((postA,postB) => postA.date>postB.date ? -1:1)
    return sortedPosts
}

export function getFeaturedPosts(){
    const allPosts = getAllPosts()

    return allPosts.filter(post => post.isFeatured)
}