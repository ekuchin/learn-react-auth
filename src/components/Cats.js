import {useState, useEffect} from "react"
import axios from "axios"

export default function Cats(props) {
    
    const url = "http://185.98.86.214:8080/learn/cats"
    const [cats, setCats] = useState([])

     useEffect(() => {        
        axios.get(url,{
            headers: {
                "authorization":"Bearer "+props.token
              }
        })
        .then(response=> {
            setCats(response.data)
        })   
        .catch(error =>
          console.log(error))     
    },[props.token])
    
    return (
        <>
            <h2>Это список котов</h2>
            {cats.map(cat=>{return <p key={cat.name}>{cat.name}, {cat.breed}</p>})}
        </>
        
    )
  }

