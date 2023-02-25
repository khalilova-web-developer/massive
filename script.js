let arr = ['refat', 'amal', 'jamshed']
let name = prompt('Which name should be deleted?').trim().toLowerCase()

if(arr.includes(name)){
    arr.splice(arr.indexOf(name), 1)
   console.log(arr)
   
}
else{
    console.log('This name is not included in the list!')
}