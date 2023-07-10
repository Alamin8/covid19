const Users = require("../models/userSchema");
const userCtrl ={
    register: async (req, res)=>{
        try{
            const {NID_NO, images, name, father_name, mother_name, mobile, date_of_birth, age, occupation, present_address, permanent_address, nationality, gender, Vaccination_center} = req.body;

            if(!images) return res.status(400).json({msg: "No image upload"})

            const user = await Users.findOne({NID_NO})
            if(user){
                return res.status(400).json({ msg: "This NID already used." });
            }
            if(age<18){
                return res.status(400).json({ msg: "Under 18 years, vaccination not allow" });
            }
            let randomDisit= Math.round(Math.random()*10000)
            if(randomDisit.toString().length<4){
                randomDisit= Math.round(Math.random()*10000)
            }
            const regi_no=('BD' + NID_NO + randomDisit)

            const newUser = new Users({
                NID_NO,
                registration_no:regi_no,
                name, 
                father_name, 
                mother_name,
                mobile,
                date_of_birth,
                age,
                occupation,
                present_address,
                permanent_address,
                nationality,
                gender,
                Vaccination_center,
                images
            })
            await newUser.save()
            res.json({ msg: "Registration Success!"
        });

        }catch(err){
            return res.status(500).json({ msg: err.message });
        }
    },
    getAllUser: async (req, res)=>{
        try{
            const user = await Users.find()
            res.send(user)
        }catch(err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getUser: async (req, res)=>{
        try{
            const {NID_NO, date_of_birth}=req.body;
            if(NID_NO===''){
                return res.status(400).json({ msg: "Fill your NID number" });
            }
            if(date_of_birth===''){
                return res.status(400).json({ msg: "Select your Date of Birth" });
            }
            const user = await Users.findOne({NID_NO:NID_NO, date_of_birth:date_of_birth})
            if(!user){
                return res.status(400).json({ msg: "NID not match of any User" });
            }
            res.send(user)
        }catch(err) {
            return res.status(500).json({ msg: err.message });
        }
    }
}
module.exports= userCtrl