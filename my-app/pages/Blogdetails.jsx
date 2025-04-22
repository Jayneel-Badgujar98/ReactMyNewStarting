import React from 'react'
import { useParams } from 'react-router-dom'
const Blogdetails = () => {
    const posts = [
        { id: 1, title: 'React Post', content: "React is a JavaScript library for building user interfaces" },
        { id: 2, title: 'Express.js Post', content: "Express.js is a web application framework for Node.js" },
        { id: 3, title: 'Next.jsPost', content: "Next.js is a React framework that enables server-side rendering and static site generation" }
    ]
    const { id } = useParams()
    const post = posts.find((post) => post.id === parseInt(id))
    if (!post) {
        return <div>Post not found</div>
    }
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )

}

export default Blogdetails