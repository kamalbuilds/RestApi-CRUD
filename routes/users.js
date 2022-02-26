import express from 'express';
import { uuid } from 'uuidv4';//unique no
import { v4 as uuidv4 } from 'uuid';
const router =express.Router();
const o='List of users ';
let users=[];

router.get('/',(req,res)=>{
    res.send(users);
    console.log(users);

});
router.post('/',(req,res)=>{
    console.log('POST ROUTE REACHED');
    const user=req.body;
    // const userwithid= {...users}
    users.push({...user, id: uuidv4()});
    res.send(`User with name ${user.firstName} added to the db`);
});

router.get('/:id',(req,res)=>{
    const {id} =req.params;
    const foundUser =users.find((user)=> user.id=== id);
    res.send(foundUser);
})

router.delete('/:id',(req,res)=>{
    // const {id} =req.params;
    const {id} =req.params;
    const user=req.body;
    users= users.filter((user)=> user.id !== id);
    res.send(`User with id ${user.LastName} deleted`);
})


router.patch('/:id',(req,res)=>{
    const {id} =req.params;
    const {firstName, LastName, age} =req.body;

    const user=users.find((user)=> user.id===id);
    if(firstName) user.firstName= firstName;
    if(LastName) user.LastName= LastName;
    if(age) user.age= age;

    res.send(`User with id ${id} updated`);
})

router.delete('/:id',(req,res)=>{
    // const {id} =req.params;
    const {LastName} =req.params;
    const user=req.body;
    users= users.filter((user)=> user.LastName === LastName);
    res.send(`User with id ${user.LastName} deleted`);
})

export default router;