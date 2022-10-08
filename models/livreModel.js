const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var livreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    auteur: {
        type: String,
        required: true,
        unique: true,
    },
    user: {
        type: String,
        required: true,
    },
    resume: {
        type: String,
        required: true,
        unique: true,
    },
    nombredPage: {
        type: Number,
        required: true,
    },
    pubicationDate: {
        typre: Date,
        require: true,
    },
    otherInfo: [
        {
            like: { type: Number },
            telechargement: { type: Number },
            partage: { type: Number },
            commentaireNumber: { type: Number },
        }

    ],
    commentaire:[
        {
            utilisateur: {type: String},
            message: {type: String},
            datePublication: {type: Date}
        }
    ]

},{ timestamps: true });

//Export the model
module.exports.Livre = mongoose.model('Livre', livreSchema);