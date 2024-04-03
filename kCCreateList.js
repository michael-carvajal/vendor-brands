export const kCCreateList = (brandsArr, vendorName, inputString) => {
    const ul = document.createElement('ul');
    const p = document.createElement('p');
    
    p.innerHTML = vendorName;
    ul.appendChild(p);

    // Convert inputString to lower case if it's not undefined
    const inputLowerCase = inputString ? inputString.toLowerCase() : '';

    brandsArr.forEach(brand => {
        let li = document.createElement('li');
        let brandHTML = '';

        // Convert brand name to lower case
        const brandLowerCase = brand.toLowerCase();

        // Check each character of the brand name against the lower case input string
        for (let i = 0; i < brand.length; i++) {
            if (inputLowerCase && inputLowerCase.includes(brandLowerCase[i])) {
                // If the character is in the input string, make it green and bold
                brandHTML += `<span style="color: green; font-weight: bold;">${brand[i]}</span>`;
            } else {
                // Otherwise, keep the character as is
                brandHTML += brand[i];
            }
        }

        li.innerHTML = brandHTML;
        ul.appendChild(li);
    });

    return ul;
};
