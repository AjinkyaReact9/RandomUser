fetch(`https://randomuser.me/api`).then((response)=>{
    let data = response.json();
    return data;
    }).then((data)=>{
        console.log(data);
    let dataDiv = document.querySelector('.newFullName');
    let dataDiv1= document.querySelector('.newFullName1');
    let images = document.querySelector('#img');
    images.setAttribute(`src`, data.results[0].picture.large);
    let name = data.results[0].name.first + " " + data.results[0].name.last;
    dataDiv1.innerHTML = "My name is"
    dataDiv.innerHTML = name;
    
    document.querySelector('#profile').addEventListener('mouseover', ()=>{
        let name = data.results[0].name.first + " " + data.results[0].name.last;
        dataDiv1.innerHTML = "My name is"
        dataDiv.innerHTML = name;
        console.log(name);
    })

    document.querySelector('#emailNew').addEventListener('mouseover', ()=>{
        let newEmail = data.results[0].email;
        dataDiv1.innerHTML = "My email is"
        dataDiv.innerHTML = newEmail;
    })

    document.querySelector('#dobNew').addEventListener('mouseover', ()=>{
    let newDob = data.results[0].dob.date;
    let dob = newDob.slice(0,10);
    dataDiv1.innerHTML = "My Date of Birth is"
        dataDiv.innerHTML = dob;
    })

    document.querySelector('#mapNew').addEventListener('mouseover', ()=>{
    let newLocation = data.results[0].location.city;
    dataDiv1.innerHTML = "My Address is"
        dataDiv.innerHTML = newLocation;
    })

    document.querySelector('#callNew').addEventListener('mouseover', ()=>{
        let newPhone = data.results[0].phone;
        dataDiv1.innerHTML = "My Phone Number is"
        dataDiv.innerHTML = newPhone;
    })

    document.querySelector('#passNew').addEventListener('mouseover', ()=>{
        let newPassword = data.results[0].login.password;
        dataDiv1.innerHTML = "My Password is"
        dataDiv.innerHTML = newPassword;
    })
})


