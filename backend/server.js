import express from "express";
//js has two ways of importing files one is common js and other is module js
//the above syntax is module js .it works asynchronously
//so add type=module in package.json

const app=express()
// app.get('/',(req,res)=>{
//     res.send('server is ready');
// });
//get a list of 5 jokes

app.use(express.static('dist'));
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A joke',
            content:'this is a joke'
        },
        {
            id:2,
            title:'another joke',
            content:'this is another joke'
        },
        {
            id:3,
            title:'third joke',
            content:'this is third joke'
        },
        {
            id:4,
            title:'fourth joke',
            content:'this is fourth joke'
        },
    ];
    res.send(jokes);
})


const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
});
