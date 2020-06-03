import express from 'express';

const app = express();

app.use(express.json());

const users = [
  'Rebeca',
  'Valeria'
];

app.get('/users', (request, respose) => {
    //No Insomina utilizar a aba "Query"
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    console.log(filteredUsers);

    respose.json(users)
})

app.get('/users/:id', (request, response) => {

  const id = Number(request.params.id);
  
  const user = users[id];

  return response.json({user});

});

app.post('/users', (request, response) => {
   const data = request.body;

   console.log(data)

   const user = {
     name : data.nome
   }

   return response.json(user);
});


app.listen('3333');