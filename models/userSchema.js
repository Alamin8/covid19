const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    NID_NO:{
        type:String,
        required: true
    },
    registration_no:{
        type:String,
        required: true,
        unique: true
    },
    name:{
        type:String,
        required: true,
        trim: true
    },
    father_name:{
        type:String,
        required: true,
        trim: true
    },
    mother_name:{
        type:String,
        required: true,
        trim: true
    },
    mobile:{
        type:Number,
        required: true
    },
    date_of_birth:{
        type:String,
        required: true
    },
    age:{
        type:String,
        required: true
    },
    occupation:{
        type:String,
        required: true
    },
    present_address:{
        type:String,
        required: true,
        trim: true
    },
    permanent_address:{
        type:String,
        required: true,
        trim: true
    },
    nationality:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true,
    },
    Vaccination_center:{
        type:String,
        required: true,
    },
    dose:{
        type:Array,
        default:[]
    },
    Vaccination_by:{
        type:String,
        default: 'Directorate General of Health Services (DGHS)',
    },
    images:{
        type:Object,
        required:true
    }
}, {
    timestamps: true
}
)

module.exports = mongoose.model("Users", userSchema)