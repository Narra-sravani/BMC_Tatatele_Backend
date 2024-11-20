const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    uuid: {
        type: String,
        default: null,
       
    },
    call_to_number: {
        type: String,
        default: null
    },
    caller_id_number: {
        type: String,
        default: null
    },
    start_stamp: {
        type: String,
        default: null
    },
    ivr_id: {
        type: Number,
        default: null
    },
    ivr_name: {
        type: String,
        default: null
    },
    call_id: {
        type: String, 
        default: null
    },
    billing_circle: {
        operator: {
            type: String,
            default: null
        },
        circle: {
            type: String,
            default: null
        }
    },
    customer_no_with_prefix: {
        type: String,
        default: null
    }
});

// Create the model
const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
