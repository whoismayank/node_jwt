require('dotenv').config();

const express = require('express');

const app = express();

// const userRouter = require('./api/users/user.router');
 
// app.use(express.json());

// app.use("/api/users", userRouter);

// app.get('/api',(req,res)=>{
//     res.json({
//         success:1,
//         message: 'rest api working'
//     })
// })

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`App is working on port ${PORT}`);
})