const {Schema, model} = require('mongoose');

const addressSchema = new Schema(
{
    _user:{
        type: Schema.Types.ObjectId,
        ref:"user",
        required: [true, "La tienda debe tener un dueño"],
    },
    address:[{
        street: {
            type: String,
            required:[true, "Debes de incluir la dirección de la ubicación donde se recolectarán los productos"]
        },
        ext_number: {
            type: String,
            default: null,
        },
        int_number: {
            type: String,
            default: null,
        },
        neighborhood: {
            type: String,
            required: [true, "Debes de incluir la colonia o asentamiento"]
        },
        municipality: {
            type: String,
            required:[true, "Tu dirección debe de incluir ciudad o municipio"]
        },
        state: {
            type: String,
            required:[true, "Debes de incluir el estado en tu dirección"],
        },
        country: {
            type: String,
            required: [true, "Debes incluir el país"],
            default: "Mexico"
        },
        }],
},
{timestamps:true}

    );
    module.exports = model("Store",storeSchema)