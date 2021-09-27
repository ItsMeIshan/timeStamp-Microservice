const {StatusCodes} = require('http-status-codes');
const getUnixTimestamp = async (req, res) => {
    let date = new Date(req.params.date);
    let check = date.toString();
    if(!req.params){
        return res.send("no parameters passed")
    }
    if(!req.params.date){
        return res.send("please pass date in request parameters");
    }
    if(req.params.date === ""){
        const curDate = new Date();
        return res.status(StatusCodes.OK).json({ 
            unix: curDate.getTime(), 
            utc: `${curDate.toLocaleTimeString("en-in", {timeStyle: "medium", timeZone: "IST"})}` 
        });
    }
    if(check === 'Invalid Date'){
        date = new Date(Number(req.params.date)).toUTCString();
        check = date;
        if(check === 'Invalid Date'){
            return res.status(StatusCodes.NOT_ACCEPTABLE).json({error: "Invalid Date"});
        }
        else{
            return res.status(StatusCodes.OK).json({ unix: Number(req.params.date), utc: `${date}` });
        }
    }
    const result = date.getTime();
    res.status(StatusCodes.OK).json({ unix: result, utc: `${date.toUTCString()}` });
}
module.exports = {getUnixTimestamp};