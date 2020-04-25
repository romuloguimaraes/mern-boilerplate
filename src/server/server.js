import express from 'express';
import path from 'path';
import template from '../../template';
import { MongoClient } from 'mongodb';

// Development mode
import devBundle from './devBundle';

const app = express();
const CURRENT_WORKING_DIR = process.cwd();
let port = process.env.PORT || 3000;
// const url =
//   process.env.MONGODB_URI ||
//   'mongodb+srv://fantomaz:Physics3141592*@pp13-phqfg.mongodb.net/test?retryWrites=true&w=majority';

// MongoClient.connect(url, (err, db) => {
//   console.log('Connected successfully to mongodb server');
//   db.close();
// });

// Development mode
devBundle.compile(app);

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

app.get('/', (req, res) => {
  res.status(200).send(template());
});

app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('Server started on port %s.', port);
});
