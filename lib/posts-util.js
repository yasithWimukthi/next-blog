import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(),'posts')

export function getPostData(filename){
    const postSlug = filename.replace(/\.md$/,'')
    const filePath = path.join(postsDirectory, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath,'utf-8')
    const {data,content} = matter(fileContent)

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