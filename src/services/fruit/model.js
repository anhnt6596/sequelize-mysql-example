import Sequelize from 'sequelize';
import exampledb from '../../config/connectDB';

const Fruit = exampledb.define('Fruit', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    }
});

export default Fruit;

