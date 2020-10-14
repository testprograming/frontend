import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {updateUser, findUser} from '../redux/actions';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function FormEditUser() {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [form, setForm] = useState({
      name: '',
      phone: '',
      address: '',
      email: '',
      image_url: '',
  });

  useEffect(() => {
    dispatch(findUser(id));

    // eslint-disable-next-line
}, []);
console.log(useEffect);

  const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(updateUser(form, history, id));   
      };
     

console.log(form)
  const handleChange = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
  };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Form Edit User
        </Typography>
        
        <form onSubmit={handleSubmit}  className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="name"
            name="name"
            defaultValue={form.name}
            onChange={handleChange}
            autoComplete="name"
            autoFocus
          />
         
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone Number"
            type="text"
            id="Phone Number"
            defaultValue={form.phone}
            onChange={handleChange}
            autoComplete="Phone Number"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="address"
            label="address"
            type="text"
            id="address"
            defaultValue={form.address}
            onChange={handleChange}
            autoComplete="address"
          />
               <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="email"
            type="email"
            id="email"
            defaultValue={form.email}
            onChange={handleChange}
            autoComplete="email"
          />
               <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="image_url"
            label="ktp"
            type="file"
            id="ktp"
            defaultValue={form.image_url}
            onChange={handleChange}
            autoComplete="ktp"
          />
               
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          
        </form>
      </div>

    </Container>
  );
}