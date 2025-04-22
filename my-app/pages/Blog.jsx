import React from 'react'
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
const Blog = () => {
    const posts = [
        { id: 1, title: 'React Post', },
        { id: 2, title: 'Express.js Post' },
        { id: 3, title: 'Next.jsPost' }
    ];
    return (
        <div>
            <ul>
                {
                    posts.map((post) => {
                        return (
                            <li key={post.id}>
                                <Link to={`/blogdetails/${post.id}`} >{post.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Blog