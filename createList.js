export const createList = (brandsArr, vendorName) => {
    const ul = document.createElement('ul')
    const p = document.createElement('p')
    
    p.innerHTML = vendorName
    ul.appendChild(p)
    brandsArr.forEach(brand => {
        let li = document.createElement('li')
        li.innerHTML = brand
        ul.appendChild(li)
    });

    return ul
}