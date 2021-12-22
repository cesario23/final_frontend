import React, {useReducer} from 'react'
import Layout from '../components/Layout'

function signupReducer(state, action){
    switch(action.type){
        case "field" : {
            return{
                ...state,
                [action.field]: action.value
            }
        }
        case "signup" : {
            return {
                ...state,
                error: "",
                isLading: true,
            }
        }
    }
    return state
}

const initialState={
    firstName: "",
    lastName: "",
    email:"",
    username:"",
    password:"",
    confirmPassword:"",
    isLoading: "",
}

const SignUp = () => {
    const [state, dispatch] = useReducer(signupReducer, initialState)
    const {firstName, lastName, email, username, password, confirmPassword, isLoading} = state;

    const onSubmit = async e =>{
        e.preventDefault();
        dispatch({type:"signup"})
    }
    return (
        <Layout>
            <div className= "App" style={{marginTop:"0"}}>
            <div className= "singUp-container">
               
               <form className="form" onSubmit={onSubmit} display="flex">
               <>    
               <h1>
                   Please sign up!!
               </h1>
               </>
               <input 
               type="text"
               placeholder="firstName"
               value={firstName}
               onChange={e => 
                dispatch({
                    type:"field",
                    field: "firstName",
                    value: e.currentTarget.value,
                })
               }
               />
               <br/>
               <input 
               type="text"
               placeholder="lastName"
               value={lastName}
               onChange={e =>
                dispatch({
                    type:'field',
                    field: 'lastName',
                    value: e.currentTarget.value
                })
               }
               />
               <br/>
               <input 
               type= "text"
               placeholder="email"
               value={email}
               onChange={e =>
                dispatch({
                    type:'field',
                    field:"email",
                    value: e.currentTarget.value
                })
            }
            />
            <br/>
            <input 
            type="text"
            placeholder="username"
            value={username}
            onChange={ e => 
                dispatch({
                    type:"field",
                    field:"username",
                    value: e.currentTarget.value,
                })
            }
            />
            <br/>
            <input 
            type="text"
            placeholder="password"
            value={password}
            onChange={ e => 
                dispatch({
                    type:"field",
                    field:"password",
                    value: e.currentTarget.value,
                })
            }
            />
            <br/>
            <input
            type="text"
            placeholder="confirmPassword"
            value={confirmPassword}
            onChange={ e =>
                dispatch({
                    type:"field",
                    field:"confirmPassword",
                    value: e.currentTarget.value,
                })
            }
            />
            <br/>
            <button className="submit" type="submit" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Sing Up"}
            </button>
            </form>
            </div>
            </div>
        </Layout>
    )
}

export default SignUp;

