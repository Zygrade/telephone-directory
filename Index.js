const mongoose = require('mongoose');
const Information = require('./models/info.js');

mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost:27017/telephonedir',{
    useMongoClient : true
});

// Add Information
const addInformation = (information) => {

    Information.create(information)
               .then(information => {
                 console.info('Information Added');
                 db.close();
               });
}

// Find Information
const findInformation = (name) => {

  // making case insensitive
  const search = new RegExp(name,'i');

  Information.find({$or : [{firstName:search},{lastName:search},{phone:search}]})
             .then(information => {
               console.info(information);
               console.info(`${information.length} matches`);
               db.close();
             });
}

// List Information
const listInformation = () => {
    Information.find()
               .then(information => {
                 console.info(`${information}`);
                 console.info(`There are total ${information.length} entries in the current database`);
                 db.close();
               });
}

// Update Information
const updateInformation = (_id,information) => {
    Information.update({_id},information)
               .then(information => {
                 console.info('Information Updated');
                 db.close();
               });
}

// Remove Information
const removeInformation = (_id) => {
    Information.remove({_id})
               .then(information => {
                 console.log('Information Removed');
                 db.close();
               });
}

module.exports = {
    addInformation,
    listInformation,
    updateInformation,
    removeInformation,
    findInformation
};
