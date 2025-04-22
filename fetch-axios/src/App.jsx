// import { useEffect, useState } from 'react'
// // import './App.css'

// function App() {
//   const[users ,setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);


//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((response) => {
//       setUsers(response);
//       setLoading(false);
//     })
//     .catch((err) => {
//       console.log(err);
//       setLoading(false);
//     })
//   },[])
//   if (loading) return <div>Loading...</div>
//   return (
//     <>
//       <ul>
//         <li style = {{listStyle:"none"}} key = {users.id}>
//           {users.map((user) => {
//             return (
//               <div>User name :- {user.name}, User email :- {user.email}</div>
//             )
//           })}
//         </li>
//       </ul>

//     </>
//   )
// }

// export default App
// import { useEffect, useState } from 'react'
// // import './App.css'
// import useSearch from './useSearch';

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((response) => {
//         setUsers(response);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       })
//     }, [])
//     const cities = [
//       { id: 1, name: "Delhi" },
//       { id: 2, name: "Mumbai" },
//       { id: 3, name: "Chennai" },
//       { id: 4, name: "Kolkata" },
//       { id: 5, name: "Bangalore" },
//     ];
//     const { search, setsearch, filtered } = useSearch(cities,"name");

//   if (loading) return <div>Loading...</div>
//   return (
//     <>
//       {/* <div>all users :- {users.length}</div>
//       <ul>
//         <li style={{ listStyle: "none" }} key={users.id}>
//           {users.map((user) => {
//             return (
//               <div>User name :- {user.name}, User email :- {user.email}</div>
//             )
//           })}
//         </li>
//       </ul> */}
//       <div>all cities :- {cities.length}</div>
//       {
//         cities.map((city) => {
//           return (
//             <div key={city.id}>
//               {city.name} 
//             </div>
//           )
//         })
//       }
//       <div>search city</div>    
//      <input type="text" value={search}style = {{padding : "10px" ,backgroundColor : "lightblue"}} placeholder="search" onChange={(e) => setsearch(e.target.value)} />
//       <div>searched users :- {filtered.length}</div>
//       <ul>
//         {filtered.map((city) => {
//           return (
//             <li key={city.id} style={{ listStyle: "none" }}>
//               {city.name} 
//             </li>
//           )
//         })
//         }
//       </ul>


//     </>
//   )
// }

// export default App

import { useCallback, useState } from 'react';
import axios from 'axios';
import useAPI from './useAPI';

export default function App() {
  const [title, setTitle] = useState("");
  const {data, loading, error, setData, setLoading, setError}= useAPI('https://jsonplaceholder.typicode.com/todos');


  const handleAdd = useCallback(async () => {
    if (!title) return;
    const newTodo = {
      title,
      completed: false,
    }
    try {
      setLoading(true);
      const res = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
      setData((prev) => [...prev, res.data]);
      setTitle("");
      console.log("Data added successfully");
    }
    catch (error) {
      console.error("Error while adding data " + error);
      setError(error);
    }
    finally {
      setLoading(false);
    }
  }, [title, setLoading, setData, setError, setTitle]);

  const handleDelete = useCallback(async (id) => {
    try {
      setLoading(true);
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      setData((prev) => prev.filter((todo) => todo.id !== id));
      console.log("Data deleted successfully");
    }
    catch (error) {
      console.error("Error while deleting data " + error);
      setError(error);
    }
    finally {
      setLoading(false);
    }
  }, [setLoading, setData, setError]);

  const handleToggle = useCallback(async (id) => {
    try {
      setLoading(true);
      const todo = data.find((t) => { return t.id === id });
      axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        completed: !todo?.completed,
      });
      setData((prev) => prev.map((todo) => todo.id === id ? { ...todo, completed: !todo?.completed } : todo))
    }
    catch (error) {
      console.error("Error while toggling data " + error);
      setError(error);
    }
    finally {
      setLoading(false);
    }
  }, [setLoading, setData, setError, data]);

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  return (
    <>
    <div>
      <label>Add todo :-</label>
      <input type="text" value = {title} onChange = {(e) => {setTitle(e.target.value)}}  />
      <button onClick={handleAdd}> "➕ "Add </button>
    </div>
      <ul>
        {/* {data.slice(0, 10).map((todo) => {
          return (
            <li key={todo.id} style={{ listStyle: "none" }}>
              Tode title :-{todo.title}
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
              <button onClick={() => handleToggle(todo.id)}>{todo.completed ? "❌" : "✅"}</button>
            </li>
          )
        })} */}
        {data.map((todo) => {
          return (
            <li key={todo.id} style={{ listStyle: "none" }}>
              Tode title :-{todo.title}
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
              <button onClick={() => handleToggle(todo.id)}>{todo.completed ? "❌" : "✅"}</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}