const express = require('express');
const cors = require('cors');
const authRouter = require('./routes');
const userRouter = require('./routes/userRouter');
const cvRouter = require('./routes/cvRouter');
const advertRouter = require('./routes/advertRouter');
const app = express();
const PORT=process.env.PORT || 3000;

app.use(cors())
app.use('/auth',authRouter);
app.use('/user',userRouter);
app.use('/advert',cvRouter);
app.use('/cv',advertRouter);

const start = async () => {
  try {
    app.listen(PORT);
    console.log('server listening ',PORT);
  } catch(e) {
    console.log(e);
  }
}

start();
