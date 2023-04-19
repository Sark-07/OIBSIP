const items = require('../database/DBschema');


// retrieve data from mongo db
const getDATA = async (req, res) => {
    try {
        const Items = await items.find({});
        res.status(201).json({ Items });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

// set data
const setDATA = async (req, res) => {
    try {
        const Items = await items.create(req.body);
        res.status(200).json({ Items });

    } catch (error) {

        res.status(500).json({ error: error });
    }
}

// update data list
const updateDATA = async (req, res) => {
    try {

        const Item = await items.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        if (!Item) {
            return res.status(404).json({ succes: false, messege: `no item with id ${req.params.id} found` })
        }

        res.status(200).json({ succes: true, messege: "Item updated", updatedItem: Item })

    } catch (error) {
        res.status(500).json({ error: error })
    }
}

// delete data from list
const deleteDATA = async (req, res) => {
    try {
        const Item = await items.findByIdAndDelete({ _id: req.params.id });
        if (!Item) {
            return res.status(404).json({ succes: false, messege: `no item with id ${req.params.id} found` })
        }
        res.status(201).json({ succes: true, messege: "Item deleted", deletedItem: Item });
    } catch (error) {

        res.status(501).json({ error: error });
    }
}




module.exports = { getDATA, setDATA, updateDATA, deleteDATA }