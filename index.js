import { atd, usAutoforce, mfiConsumer, tireRack, tirehub, ntw } from "./brandArray.js";
import { createList } from "./createList.js";

window.onload = function main(){
    const input = document.querySelector('.search input');
    const section = document.querySelector('section');
    
    // Define a function to filter arrays based on the input string
    function filterArrays(inputString) {
        return {
            "Max Finkelstein": mfiConsumer.filter(item => item.toLowerCase().includes(inputString.toLowerCase())),
            "American Tire Distributor": atd.filter(item => item.toLowerCase().includes(inputString.toLowerCase())),
            "Tire Rack": tireRack.filter(item => item.toLowerCase().includes(inputString.toLowerCase())),
            "Tirehub": tirehub.filter(item => item.toLowerCase().includes(inputString.toLowerCase())),
            "National Tire Wholesale": ntw.filter(item => item.toLowerCase().includes(inputString.toLowerCase())),
            "USAutoforce": usAutoforce.filter(item => item.toLowerCase().includes(inputString.toLowerCase()))
        };
    }

    // Render initial lists
    const mfiList = createList(mfiConsumer, "Max Finkelstein");
    const atdList = createList(atd, "American Tire Distributor");
    const tireRackList = createList(tireRack, "Tire Rack");
    const tirehubList = createList(tirehub, "Tirehub");
    const ntwList = createList(ntw, "National Tire Wholesale");
    const usAutoforceList = createList(usAutoforce, "USAutoforce");
    section.append(mfiList, atdList, tireRackList, tirehubList, ntwList, usAutoforceList);
    
    // Event listener for input changes
    input.addEventListener('input', e => {
        const inputString = e.target.value.trim();
        const filteredArrays = filterArrays(inputString);

        // Clear section before rendering updated lists
        section.innerHTML = '';

        // Render filtered lists
        Object.keys(filteredArrays).forEach(key => {
            const filteredList = createList(filteredArrays[key], key);
            section.appendChild(filteredList);
        });
    });
};
