const btnsAddNote = document.querySelectorAll(".add-note")
const sectionPopUp = document.querySelector(".popup")
const header = document.querySelector("header")
const main = document.querySelector("main")
const btnCancel = document.querySelector(".btn-cancel")
const btnApply = document.querySelector(".btn-apply")
const newNote = document.querySelector(".new-note")
const listNotes = document.querySelector(".list__notes")
const searchNote = document.querySelector(".search-note")
btnsAddNote.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.disabled = true
        sectionPopUp.classList.toggle("active")
        main.classList.toggle("filter-blur")
        header.classList.toggle("filter-blur")
    })
})

btnCancel.addEventListener("click", () => {
    btnsAddNote[0].disabled = false
    btnsAddNote[1].disabled = false
    sectionPopUp.classList.toggle("active")
    main.classList.toggle("filter-blur")
    header.classList.toggle("filter-blur")
})
btnApply.addEventListener("click", () => {
    let text = newNote.value
    const listItem = document.createElement("li")
    listItem.classList.add("list__item")
    const span = document.createElement("span")
    span.classList.add("checkbox")
    const btnDelete = document.createElement("button")
    btnDelete.classList.add("btn-delete")
    const icon = document.createElement("icon")
    const p = document.createElement("p")
    p.classList.add("list-text")
    p.textContent = text
    icon.classList.add("fa-solid", "fa-trash")
    btnDelete.appendChild(icon)
    listItem.appendChild(span)
    listItem.appendChild(p)
    listItem.appendChild(btnDelete)
    listNotes.appendChild(listItem)
    newNote.value = ""
    btnDelete.addEventListener("click", () => {
        listItem.remove()
    })
})

searchNote.addEventListener("input", () => {
    let textSearch = searchNote.value
    const listItems = document.querySelectorAll(".list__item")
    listItems.forEach(li => {
        let text = li.querySelector(".list-text").textContent
        if (text.startsWith(textSearch)) {
            li.style.display = "flex"
        } else {
            li.style.display = "none"
        }
    })
})