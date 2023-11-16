document.addEventListener('DOMContentLoaded', function(){
document.getElementById('form').addEventListener('submit', function(event){
    
    const email=document.getElementById('email')
    const emailError=document.getElementById('emailError')
    const password=document.getElementById('password')
    const passwordError=document.getElementById('passwordError')
    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/
    if(!email.value){
        emailError.textContent='Email Address required' 
        event.preventDefault()
    }
    else if(!emailRegex.test(email.value)){
        console.log(' email error')
        emailError.textContent='Invalid Email Address'
        event.preventDefault()
    }
    if(!password.value){
        passwordError.textContent='Password required' 
        event.preventDefault()
    }
    
   
    
   
     else if(!passwordRegex.test(password.value)){
        console.log('password error')
        passwordError.textContent='Invalid Password'
        event.preventDefault()
    }
    
        
    
   

})
})