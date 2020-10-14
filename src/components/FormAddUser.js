import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { uploadUser } from '../redux/actions';
import Swal from 'sweetalert2';


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

export default function FormAddMovie() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [form, setForm] = useState({
      name: '',
      phone: '',
      address: '',
      email: '',
      image_url: '',
  });
  const handleSubmit = async (event) => {
      event.preventDefault();
      if (
          form.name === '' ||
          form.phone === '' ||
          form.address === '' ||
          form.email === '' ||
          form.image_url === '' 
      ) {
          Swal.fire({
              title: 'Please complete the form',
              text: '',
              icon: 'error',
              // confirmButtonText: 'Cool',
          });
      } else {
              await dispatch(uploadUser(form, history));
          }
      }
//   };

console.log(form)
  const handleChange = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
<Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Form Add User
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="name"
            name="name"
            value={form.name}
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
            label="phone number"
            type="text"
            id="phone number"
            value={form.phone}
            onChange={handleChange}
            autoComplete="phone number"
          />
              
               <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="address"
            label="address"
            type="address"
            id="address"
            value={form.address}
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
            value={form.email}
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
            type="text"
            id="ktp"
            value={form.image_url}
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