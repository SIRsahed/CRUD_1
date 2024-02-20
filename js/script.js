let input = document.querySelector(".input")
let add = document.querySelector(".add")
let hobby = document.querySelector(".hobby")
let data = [];
let id ;

add.addEventListener("click", ()=>{
    if(input.value){
        data.push(input.value)
        abc()
        input.value = ''
    }
})

function abc(){
    hobby.innerHTML = ''
    data.map((item)=>{
        hobby.innerHTML += `<li> ${item} <button class="delete"><i class="fa-solid fa-xmark"></i></button><button class="edit"><i class="fa-solid fa-pencil"></i></button></li>`
    })
    let deletesingle = document.querySelectorAll(".delete")
    let editsingle = document.querySelectorAll(".edit")
    let deleteArr = Array.from(deletesingle)
    let editArr = Array.from(editsingle)
    deleteArr.map((itemd, index)=>{
        itemd.addEventListener("click", ()=>{
            data.splice(index, 1)
            abc()
        })
    })
    editArr.map((iteme, index)=>{
        iteme.addEventListener("click", ()=>{
            input.value = data[index]
            abc()
            id = index
        })
    })
}


let update = document.querySelector(".update")
update.addEventListener("click", ()=>{
    data[id] = input.value
    abc()
    input.value = ''
})