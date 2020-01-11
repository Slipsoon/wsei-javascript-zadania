    // Zadanie 05

const list1 = document.querySelector('#list1');
const list2 = document.querySelector('#list2');
const listBtns = document.querySelectorAll('a');

listBtns.forEach(listBtn => {
    listBtn.addEventListener('click', moveElement);
})

function moveElement() {
    const getElement = this.parentNode;

    if (getElement.parentNode.id == list1.id) 
        list2.appendChild(getElement)
    else 
        list1.appendChild(getElement);

}
