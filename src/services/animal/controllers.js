import Animal from './model';

// create table even though it already exists
export const createTable = (req, res) => Animal.sync({ force: true })
    .then(() => res.send("Animals table is already created!") );

