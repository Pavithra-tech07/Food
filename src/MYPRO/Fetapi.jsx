// import React, { useEffect, useState } from 'react'
// import Post from './Post'

// export default function Fetapi() {
//     const [post, setPost] = useState(null)
//     const [error, setError] = useState('')

//     useEffect(() => {
//         const fetchposts = async () => {
//             try {
//                 const response = await fetch('https://fakestoreapi.com/products/1')
//                 const jsonResponse = await response.json()

//                 if (response.ok) {
//                     setPost(jsonResponse)
//                     console.log(jsonResponse)
//                 } else {
//                     setError('Failed to fetch data. Please try again later.')
//                     console.log('Error:', jsonResponse.error)
//                 }
//             } catch (err) {
//                 console.error('Error fetching data:', err)
//                 setError('Error fetching data. Please try again later.')
//             }
//         }
//         fetchposts()
//     }, [])

//     return (
//         <div className='container'>
//             {post && <Post item={post} />}
//             {error && <p>{error}</p>}
//         </div>
//     )
// }


import React, { useEffect, useState } from 'react'

export default function FetchData() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error))
    }, [])  // Empty array means this runs only once when the component mounts

    return (
        <div>
            {data ? (
                <div>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}


