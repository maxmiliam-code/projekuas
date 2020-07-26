import React, { useReducer, createContext } from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import LoginComp from './Component/LoginComp';
import HomeComp from './Component/HomeComp';
import RegisterComp from './Component/RegisterComp';
import MenuCompo from './Component/MenuCompo';
import PelangganComp from './Component/PelangganComp';
import TambahPelComp from './Component/TambahPelComp';
import NavbarComp from './Component/NavbarComp';
import EditPelComp from './Component/EditPelComp';
import TransaksiComp from './Component/TransaksiComp';
import TambahTranComp from './Component/TambahTranComp';
import EditTranComp from './Component/EditTranComp';
//Context
export const AuthContext = createContext()

//Inisiasi State
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      }

    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }

    default:
      return state
  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <BrowserRouter>
      <Switch>
        <AuthContext.Provider value={{
          state,
          dispatch
        }}>
          <MenuCompo />
          {!state.isAuthenticated ?
            <Redirect
              to={{
                pathname: "/"
              }}
            /> :
            <Redirect
              to={{
                pathname: "/homepage"
              }}
            />
          }
          <NavbarComp />
          <Route exact path="/" component={LoginComp} />
          <Route exact path="/homepage" component={HomeComp} />
          <Route exact path="/register" component={RegisterComp} />
          <Route exact path="/pelanggan" component={PelangganComp} />
          <Route exact path="/pelanggan/tambah" component={TambahPelComp} />
          <Route exact path="/pelanggan/edit" component={EditPelComp} />
          <Route exact path="/transaksi" component={TransaksiComp} />
          <Route exact path="/transaksi/tambah" component={TambahTranComp} />
          <Route exact path="/transaksi/edit" component={EditTranComp} />
        </AuthContext.Provider>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
