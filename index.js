import { atd, usAutoforce, mfiConsumer, tireRack, tirehub, ntw } from "./brandArray.js";
import { kCBrandObject } from "./kCBrandArray.js";
import { createList } from "./createList.js";
import { kCCreateList } from "./kCCreateList.js";

window.onload = function main(){
    const input = document.querySelector('.search input');
    const section = document.querySelector('section');
    const clearButton = document.querySelector('button');
    const toggleButton = document.querySelector('#toggleButton');
    let isInitialList = true;
    
    clearButton.addEventListener('click', e =>{
        input.value = "";
        input.focus();
        const filteredArrays = filterArrays(input.value);
        renderFilteredLists(filteredArrays);
    });

    toggleButton.addEventListener('click', e => {
        isInitialList = !isInitialList;
        toggleButton.textContent = isInitialList ? 'Show kCList' : 'Show Initial Lists';
        renderLists();
    });

    // Render initial lists
    function renderInitialLists() {
        const initialLists = [
            { data: mfiConsumer, label: "Max Finkelstein" },
            { data: atd, label: "American Tire Distributor" },
            { data: tireRack, label: "Tire Rack" },
            { data: tirehub, label: "Tirehub" },
            { data: ntw, label: "National Tire Wholesale" },
            { data: usAutoforce, label: "USAutoforce" }
        ];

        initialLists.forEach(list => {
            const newList = createList(list.data, list.label);
            section.appendChild(newList);
        });
    }
    
    function renderKCList() {
        Object.keys(kCBrandObject).forEach(key => {
            const vendor = key;
            const brands = kCBrandObject[key];
            const newList = kCCreateList(brands, vendor)
            section.appendChild(newList)

            console.log('vendor =====>', vendor);
            console.log('brands =====>', brands);
        });
    }
    
    function renderLists() {
        section.innerHTML = ''; // Clear section before rendering

        if (isInitialList) {
            renderInitialLists();
        } else {
            renderKCList();
        }
    }

    renderLists();

    // Define a function to filter arrays based on the input string
    function filterArrays(inputString) {
        if (isInitialList) {
            return {
                "Max Finkelstein": mfiConsumer.filter(item => item.toLowerCase().includes(inputString.toLowerCase())),
                "American Tire Distributor": atd.filter(item => item.toLowerCase().includes(inputString.toLowerCase())),
                "Tire Rack": tireRack.filter(item => item.toLowerCase().includes(inputString.toLowerCase())),
                "Tirehub": tirehub.filter(item => item.toLowerCase().includes(inputString.toLowerCase())),
                "National Tire Wholesale": ntw.filter(item => item.toLowerCase().includes(inputString.toLowerCase())),
                "USAutoforce": usAutoforce.filter(item => item.toLowerCase().includes(inputString.toLowerCase()))
            };
        } else {
            const kCfilterd = {};
            Object.keys(kCBrandObject).forEach(key => {
                const currArr = kCBrandObject[key];
                console.log('currArrr ===========>',currArr);
                
                kCfilterd[key] = currArr.filter(item => item.toLowerCase().includes(inputString.toLowerCase()) );
            })
            return kCfilterd
        }
    }

    // Render filtered lists
    function renderFilteredLists(filteredArrays, inputString) {
        section.innerHTML = ''; // Clear section before rendering
        console.log(filteredArrays);
        Object.keys(filteredArrays).forEach(key => {
            const filteredList = createList(filteredArrays[key], key, inputString);
            section.appendChild(filteredList);
        });
    }

    // Event listener for input changes
    input.addEventListener('input', e => {
        const inputString = e.target.value.trim();
        const filteredArrays = filterArrays(inputString);
        renderFilteredLists(filteredArrays, inputString);
    });
};
