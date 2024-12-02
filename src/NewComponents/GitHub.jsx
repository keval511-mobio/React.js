import React, { useEffect, useState } from 'react'
 

function Github() {
    
    const [data, setData] = useState([])
    useEffect(() => {
     fetch(' https://jsonplaceholder.typicode.com/todos/1')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Name: {data. title}
   <center>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVoVPDy3AASBX9wHrV3nz2VUqq1YBHwhRijA&s' alt="Git picture" width={300} />

   </center>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return response.json()
}