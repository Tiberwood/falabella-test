require('dotenv').config();
const app = require('./app');

const start = async () => {
  try {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`listen on port: ${process.env.PORT || 4000}`);
    });
  } catch (error) {
    console.error(error);
    return process.exit(1);
  }
};

start();
