

export const validateForm=(email,password)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, one letter and one number
    let errors=[];
    if(!emailRegex.test(email)){
        errors.push("Invalid email format");
    }
    if(!passwordRegex.test(password)){
        errors.push("Password not matching the criteria");
    }


    return errors.length>0?errors:null;
}

