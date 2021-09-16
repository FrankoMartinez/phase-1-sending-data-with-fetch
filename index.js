// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(resp => resp.json())
    .then(obj => {
        let text = document.createElement('p')
        console.log(text)
        text.innerHTML = obj.id
        console.log(obj)
        document.querySelector('body').appendChild(text)
    })
    .catch(error => {
        let p = document.createElement('p')
        p.innerHTML = error.message
        document.querySelector('body').appendChild(p)
    })
}
submitData("name", "email")