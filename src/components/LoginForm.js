import React, {useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from "react-router-dom";

const Login=()=>{

    const paperStyle={padding :20,height:'45vh',width:400, margin:"70px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'50px 0'}
    const textinput ={marginBottom: '10px'}

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const onSubmit = () => {

        if (email !== '' && password !== '') {
            if(email === process.env.REACT_APP_EMAIL && password === process.env.REACT_APP_PASSWORD) {
                history.push({
                    pathname: '/dashboard',
                    state: { email }
                })           
            }
            else alert('Please enter valid credentials')
        }

        else alert('Please Enter all fields')

    }

    const getEmailId = e => {
        e.target.value === '' ? setEmail('') : setEmail(e.target.value)
    }

    const getPassword = e => {
        e.target.value === '' ? setPassword('') : setPassword(e.target.value)
    }

    return(
        <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <h2>Sign In</h2>
                </Grid>

                <TextField 
                    style={textinput}
                    name = 'email' 
                    label='Email' 
                    placeholder='Enter Email Id' 
                    fullWidth 
                    required
                    onChange = {getEmailId}
                />

                <TextField 
                    style={textinput}
                    name= 'password' 
                    label='Password' 
                    placeholder='Enter Password' 
                    type='password' 
                    fullWidth 
                    required
                    onChange = {getPassword}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={btnstyle}
                    onClick = {onSubmit}
                >
                    Sign In
                </Button>
            </Paper>
        </Grid>
    )
}

export default Login