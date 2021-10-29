import React, { useReducer } from 'react';
import './App.css';
import login from './Utilities/Login'
import { loginReducer, initialState } from './Reducer/useReducer'




function App() {
  const [state, dispatch] = useReducer(loginReducer, initialState)

  const { username,
    password,
    isLoading,
    error,
    isLogin } = state

  const onSubmit = async (e: any) => {
    e.preventDefault()
    dispatch({ type: 'LOGIN' })
    try {
      await login({ username, password })
      dispatch({ type: 'SUCCESS' })
    }
    catch (e: any) {
      dispatch({ type: 'ERROR' })
    }
  }

  return (
    <div className="App">
      <div className="login-container">
        {isLogin ?
          <>
            <h1>{`Login Successful ${username}`}</h1>
            <button type="button" onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
          </>
          :
          <form action="" className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p>Please Login</p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => dispatch({ type: 'FIELD', field: 'username', value: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => dispatch({ type: 'FIELD', field: 'password', value: e.target.value })}
            />
            <button className="submit" type="submit" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Login'}
            </button>
          </form>}
      </div>
    </div>
  );
}

export default App;
