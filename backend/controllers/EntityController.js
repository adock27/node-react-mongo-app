const Entity = require("../models/EntityModel");


exports.createEntity = async (req, res) => {

    try {
        let entity;

        // Creamos nuestro entity
        entity = new Entity(req.body);

        await entity.save();
        res.send(entity);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.getEntity = async (req, res) => {

    try {
        let entity = await Entity.findById(req.params.id);

        if(!entity) {
            res.status(404).json({ msg: 'No existe la entidad' })
        }
       
        res.json(entity);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.getAllEntities = async (req, res) => {

    try {

        const entity = await Entity.find();
        res.json(entity)
        
    } catch (error) {
        res.status(500).send('Hubo un error');
    }

}

exports.updateEntity = async (req, res) => {

    try {
        const { name, description } = req.body;
        let entity = await Entity.findById(req.params.id);

        if(!entity) {
            res.status(404).json({ msg: 'No existe el entity' })
        }

        entity.name = name;
        entity.description = description;

        entity = await Entity.findOneAndUpdate({ _id: req.params.id },entity, { new: true} )
        res.json(entity);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.deleteEntity = async (req, res) => {

    try {
        let entity = await Entity.findById(req.params.id);

        if(!entity) {
            res.status(404).json({ msg: 'No existe el entity' })
        }
       
        await Entity.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Entidad eliminada con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}