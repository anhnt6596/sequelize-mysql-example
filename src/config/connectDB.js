import Sequelize from 'sequelize';
import env from 'dotenv';

env.config();

const exampledb = new Sequelize(process.env.DB_HOST);

// var exampledb = new Sequelize('exampledb', 'root', '123ABCxyz', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

export default exampledb;
