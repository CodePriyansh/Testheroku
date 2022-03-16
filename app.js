const express = require('express');
const app = express();
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/ApiTest')
mongoose.connect("mongodb+srv://CodePriyanshu786:pathak123@mucluster.utw9l.mongodb.net/myDatabase?retryWrites=true&w=majority")
const path = require('path');
const body = require('body-parser');
const userRouter = require('./router/user.route')
const adminRouter = require('./router/admin.route')
const categoryRouter = require('./router/category.route')
const productRouter = require('./router/product.route')

app.use(express.static(path.join(__dirname, 'public')))
app.use(body.urlencoded({ extended: false }));
app.use(body.json());
app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);
app.use('/api/category', categoryRouter);
app.use('/api/product', productRouter);

app.listen(3000, () => {
    console.log('server start');
})