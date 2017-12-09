import md5 from 'md5';

import Fruit from './model';

export const createTable = (req, res) => Fruit.sync()
    .then(() => res.send("Fruits table is already created!") );

export const getAll = (req, res) => {
    Fruit.findAll({}).then((data, err) => {
        if (err) res.send({ err });
        res.send(data);
    });
}

export const getById = (req, res) => {
    Fruit.find({
        attributes: [ 'id', 'name' ],
        where: { id: req.params.id }
    }).then((data, err) => {
        if (err) res.send({ err });
        res.send(data);
    });
}

export const add = (req, res) => {
    if (!req.body.name) return res.send('"name" is required!');
    Fruit.create({
        ...req.body
    }).then((data, err) => {
        if (err) res.send({ err });
        res.send(data);
    });
}

export const editById = (req, res) => {
    if (!req.body.id) return res.send('"id" is required!');
    Fruit.update(
        { ...req.body },
        { where: { id: Number(req.body.id) } }
    ).spread(affectedCount => {
        return Fruit.findAll();
    }).then((data, err) => {
        if (err) res.send({ err });
        res.send(data);
    });
}

export const deleteById = (req, res) => {
    if (!req.body.id) return res.send('"id" is required!');
    Fruit.destroy({
        where: { id: Number(req.body.id) },
    }).then(affectedRows => {
        return Fruit.findAll();
    }).then((data, err) => {
        if (err) res.send({ err });
        res.send(data);
    });
}