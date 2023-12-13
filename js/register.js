$("#submit-form").on("click", function(){
    let allUsers = []
    // get the json object from localStorage
    allUsers = JSON.parse(localStorage.getItem("registeredUsers")) 


    // allUsers.push()

    // get the various form fields
    const firstName=$("#exampleFirstName").val()
    const lasttName=$("#exampleLastName").val()
    const emailName=$("#exampleInputEmail").val()
    const password=$("#exampleInputPassword").val()
    const repeatPassword=$("#exampleRepeatPassword").val()

    // creat newUser Object
    const newUser = {
        firstName: firstName,
        lasttName: lasttName,
        emailName: emailName,
        password: password,
        repeatPassword: repeatPassword
    }

    if(allUsers == null || allUsers == undefined)[
        allUsers = []
    ]
    allUsers.push(newUser)
    
    // store the form values in localStorage
    localStorage.setItem("registeredUsers", JSON.stringify(allUsers) )


    
    console.log("submit",newUser)
})