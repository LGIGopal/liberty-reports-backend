const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportsSchema = new Schema({
    location:{
        type:String,
    },
    reportedClaims:{
        type:Number,
        required:true,
        default:0
    },
    settledClaims:{
        type:Number,
        required:true,
        default:0
    },
    outStanding:{
        type:Number,
        required:true,
        default:0
    },
    dr:{
        type:Number,
        required:true,
        default:0
    },
    aboveThirtyDays:{
        type:Number,
        required:true,
        default:0
    },
    pending:{
        type:Number,
        required:true,
        default:0
    },
    lksPending:{
        type:Number,
        required:true,
        default:0
    },
    nosPending:{
        type:Number,
        required:true,
        default:0
    },
    rlmPending:{
        type:Number,
        required:true,
        default:0
    },
},{timestamps:true});

module.exports = mongoose.model("Reports",ReportsSchema);
