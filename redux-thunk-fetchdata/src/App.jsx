import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from './redux/userSlice'

function App() {
  const dispatch = useDispatch()
  const { users, loading } = useSelector(state => state.userInfo)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      {
        users.map((user) => {
          return (
            <div key={user.id}>
              <ul>{user.name}</ul>
            </div>
          )
        })
      }
    </>
  )
}

export default App
