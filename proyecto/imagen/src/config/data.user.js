import fs from "fs";

const getdata = async () =>{
    let data = JSON.parse(fs.readFileSync('users.json'));
    console.log(data);
    return data
}

const setdata = async (user) => {
    let data = JSON.parse(fs.readFileSync('users.json'));
    user.id = data.length;
    data.push(user);
    fs.writeFile('users.json',JSON.stringify(data), function(err, result) {
        if(err) console.log('error',err);
    })
    return data
}

const deldata = async (user) => {
    let data = JSON.parse(fs.readFileSync('users.json'));
    let newData = data.filter(function(element){
        return element.id !== user.id
    })
    fs.writeFile('users.json',JSON.stringify(newData), function(err, result) {
        if(err) console.log('error',err);
    })
    return data
}

export {getdata,setdata,deldata};