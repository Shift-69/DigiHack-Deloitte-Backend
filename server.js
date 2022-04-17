const express = require('express');
const cors = require('cors');


const postsRouter = require('./routes/posts');
const  connectDB  = require('./config');


connectDB()

const app = express();
const port = process.env.PORT || 9001;

app.use(cors());
app.use(express.json());


app.use('/api/posts', postsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});