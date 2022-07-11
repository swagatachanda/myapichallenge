const userModel = require('../models/userModel')

const postUserDetails = async (req, res) => {
    var userDet = {}
    const newsUser = new userModel({
        data: req.body.data
    })


    try {
        const userSubmit = await newsUser.save();
        console.log(userSubmit.data.length)
        var num_details = []
        var alpha_details = []
        var total_string = []
        userSubmit.data.map((item)=>{
            if(/^[a-zA-Z]+$/.test(item)){
                alpha_details.push(item)
                total_string.push(item)
            }
            else if(!isNaN(item)){
                num_details.push(item)
                total_string.push(item)
            }
        })
        console.log(alpha_details)
        return res.status(200).json({
            is_success: true,
            user_id: "swagata_chanda_14122000",
            count: total_string.length,
            email: "1928066@kiit.ac.in",
            roll: "1928066",
            numbers: num_details,
            alphabets: alpha_details,
        })
    } catch (err) {
        res.status(500).json({
            error: 'database',
            errorOccured: 'database unresponsive',
            errorMessage: err,
        })
    }
}

module.exports = { postUserDetails }