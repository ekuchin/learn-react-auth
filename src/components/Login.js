import "../index.css"
import {useState} from "react"
import axios from "axios"

export default function Login(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        
        if (name==="username"){
            setUsername(value)
        }
        else{
            setPassword(value)
        }
    }
      
    function handleSubmit(event) {
        const url = "http://185.98.86.214:8080/learn/auth"
        const data = {username, password}
        const params={
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": "*"
              }
        }

        console.log(url, data)
        
        
        axios.post(url,data,params)
        //axios.get("http://185.98.86.214:8080/learn/cats")
        .then(response => {
          console.log(response.data.token)
          props.setToken(response.data.token)
        })
        
        .catch(error => console.log(error))
        
        event.preventDefault();
        
      }

    return (
        <form onSubmit={handleSubmit}>
        <h3>Форма</h3>
        <input 
          type="text"
          placeholder="UserName"
          name="username" 
          value={username} 
          onChange={handleChange} />
        <br/>
        <input 
          type="text"
          placeholder="Password"
          name="password" 
          value={password} 
          onChange={handleChange} />
      
        <br/>
        <br/><input type="submit" value="Отправить" className="btn btn-primary"/>

      </form>
    )
  }