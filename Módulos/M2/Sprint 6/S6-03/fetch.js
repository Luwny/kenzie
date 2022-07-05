const body = document.querySelector('body')
fetch("https://jsonplaceholder.typicode.com/users/1/")
  .then(res => res.json())
  .then(data => {
    const h1 = document.createElement('h1')
    h1.innerText = data.name
    body.appendChild(h1)
    console.log(data)
  })

  