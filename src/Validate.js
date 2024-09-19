
function Validate(values) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,12}$/;
    let errors = {};
    if(values.name == ''){
      errors.name = 'Name is Required';
    }else if(values.name.length < 8){
      errors.name = 'Required is at least 8 character'
    }
    if(values.email == ''){
      errors.email = 'Email is Required';
    }else if(!emailRegex.test(values.email)){
      errors.email = "Email didn't Match";
    }
    if(values.password == ''){
      errors.password = 'Password is Required';
    }else if(!passwordRegex.test(values.password)){
      errors.password = "Add at least one character,number and special character";
    }
    return errors;
}

export default Validate