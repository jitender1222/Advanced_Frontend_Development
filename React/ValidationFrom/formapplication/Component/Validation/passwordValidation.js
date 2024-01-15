const regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

const passwordValidation=(string)=>{

    if(!regex.test(string)){
        return false;
    }
    return true;

}

export default passwordValidation;