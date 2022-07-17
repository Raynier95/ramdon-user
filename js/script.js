const url = 'https://randomuser.me/api/'
const button = document.getElementById('button')
const paragraph = document.getElementById('paragraph')
const user = document.getElementById('user')
button.addEventListener('click',()=>{
    paragraph.textContent = ''
    fetch(url)
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(data=>{
        // getting the data
        user.textContent = `Hola mi nombre es ${data.results['0'].name.first}`
        // console.log(data)
    })
})