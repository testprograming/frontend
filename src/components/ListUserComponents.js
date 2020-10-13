import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import {fetchGetAllUsers} from '../redux/actions';
import { useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { deleteUser } from '../redux/actions/DeleteUser';


    const ListUserComponent = () => {
        const dispatch = useDispatch();
        const user = useSelector((state) => state.GetAllUsers);
        console.log(user);
        useEffect(() => {
            dispatch(fetchGetAllUsers());
        }, [dispatch]);
  
        return (
            <div>
               <Typography variant="h4" style={style}>Customers</Typography>
                               <Button variant="contained" color="primary" href='/AddUser'>
                    Add User
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Phone Number</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">KTP</TableCell>
                        </TableRow>
                    </TableHead>
                    {user.result !== undefined &&
                user.result.map((item, index) => {
                return(
                    <TableBody>
                            <TableRow key={item._id}>
                                <TableCell component="th" scope="row" >
                                    {index+1}
                                </TableCell>
                        <TableCell>{item.name}</TableCell>
                            <TableCell align="right">{item.phone}</TableCell>
                            <TableCell align="right">{item.address}</TableCell>
                            <TableCell align="right">{item.email}</TableCell>
                            <TableCell align="right">{item.image_url}</TableCell>
                                <TableCell align="right"  ><Link to={`/EditUser/${item._id}`}><CreateIcon /></Link></TableCell>
                                <TableCell align="right" onClick={() => dispatch(deleteUser(item._id))} ><DeleteIcon /></TableCell>
                            </TableRow>
                        {/* ))} */}
                    </TableBody>
                );
                            })}
                    
                </Table>

            </div>
        );
    // }

}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default ListUserComponent;