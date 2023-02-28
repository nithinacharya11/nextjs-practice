import Link from "next/link"

const Posts = ({posts}) => {
  return (
    <div className='w-fit mx-auto text-lg mt-2'>
      <h1>List of Posts</h1>
      <ul>
        {posts.map(post => {
            return (
                <>
                  <Link href={`posts/${post.id}`}>
                    <li key={post.id}>
                        {post.id} {post.title}
                    </li>
                  </Link>
                  <hr />
                </>
            )
        })}
      </ul>
    </div>
  )
}

export default Posts

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return {
        props: {
            posts: data.slice(0,3)
        }
    }
}