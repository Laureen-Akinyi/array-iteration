// console.log("before")
// setTimeout(() => console.log('during'), 60000)
// console.log('after')
console.log('before fetch')
function getAllArticles(){
fetch(' http://localhost:3000/articles')
.then(res =>res.json)
console.log('b4 fetch returns')
}
