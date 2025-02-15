const {checkMissingKeys} = require('../utils/checkMissingKeys.utils')
const {User} = require('../models/user.models');

exports.createUser = async (req, res) =>{
    try{
        const {username = '', password = '', DOB = '', email = ''} = req.body;

        const missingKeys = checkMissingKeys(['username', 'password', 'DOB', 'email'], req.body);

        if(missingKeys.length > 0){
            return res.status(404).json({
                success : false,
                status : 404,    
                message : `${missingKeys.join(', ')} is required`
            });
        }

        const user = new User({
            username,
            password,
            DOB,
            email
        })
        const result = await user.save()

        if(!result){
            return res.status(400).json({
                success : true,
                status : 500,
                message : "User created successfully",
                _id : result?._id,
                ...req.body    
            })
        }

        return res.status(200).json({
            success : true,
            status : 500,
            message : "User created successfully",
            _id : result?._id,
            ...req.body
        })
    }catch(error){
        console.log('signup user error :', error);
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message,
            code : error.code
        })
    }
}

exports.fetchUser = async (req, res) => {
    try{
        const result = await User.find()
        return res.status(200).json({
            data : result,
            TotalLength : result?.length
        })
    }catch(error){
        console.log('list user error :', error);
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.updateUser = async (req, res)=>{
    try{
        const {username = '', password = '', DOB = '', _id = ''} = req.body;

        const missingKeys = checkMissingKeys(['username', 'password', 'DOB', '_id'], req.body);

        if(missingKeys.length > 0){
            return res.status(404).json({
                success : false,
                status : 404,    
                message : `${missingKeys.join(', ')} is required`
            })
        }

        const result = await User.updateOne({ _id }, { $set: { username, password, DOB } });
        if(missingKeys.length > 0){
            return res.status(404).json({
                success : false,
                status : 404,    
                message : `${missingKeys.join(', ')} is required`
            });
        }
        
        if(!result){
            return res.status(400).json({
                success : true,
                status : 500,
                message : "User updated successfully",
                _id : result?._id,
                ...req.body    
            })
        }

        return res.status(200).json({
            success : true,
            status : 500,
            message : "User created successfully",
            _id : result?._id,
            ...req.body
        })

    }catch(error){
        console.log('list user error :', error);
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.userLogin = async (req, res)=>{
    try{
        const {password, email} = req.body;

        const missingKeys = checkMissingKeys([ 'password', 'email'], req.body);

        if(missingKeys.length > 0){
            return res.status(404).json({
                success : false,
                status : 404,    
                message : `${missingKeys.join(', ')} is required`
            })
        }

        const result = await User.find({email});

        console.log('login result' ,result);

        return res.status(200).json({
            success : true,
            status : 500,
            message : "given user credentials are correct.",
        })
    }catch(error){
        console.log('signup API error :', error);
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}