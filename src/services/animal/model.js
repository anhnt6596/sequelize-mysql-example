import Sequelize from 'sequelize';
import exampledb from '../../config/connectDB';

const Animal = exampledb.define('Animal', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            len: {
                arg: [3, 20],
                msg: 'Name invalid',
            }
        }
    },
    legs: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

export default Animal;

