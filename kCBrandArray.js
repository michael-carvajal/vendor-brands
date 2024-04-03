// const kCArray = [ ['Achilles', 'SHUTTLE'], ['Americus', 'Max Fink'], ['Antares', 'SHUTTLE'], ['Arctic Claw', 'NTW'], ['Arroyo', 'SHUTTLE'], ['Bfgoodrich', 'NTW', 'Tire Rack'], ['Blackhawk', 'SHUTTLE'], ['Blacklion', 'SHUTTLE'], ['Bridgestone', 'TireHub', 'Max Fink', 'Tire Rack'], ['Carlisle', 'ATD', 'NTW', 'Max Fink'], ['Continental', 'NTW', 'ATD', 'US Autoforce', 'Max Fink'], ['Cooper', 'NTW', 'ATD', 'US Autoforce', 'Max Fink'], ['Dunlop', 'TireHub', 'Max Fink', 'Tire Rack'], ['Dynatrac', 'ATD'], ['El dorado', 'NTW'], ['Falken', 'ATD', 'NTW', 'Falken'], ['Firestone', 'TireHub', 'Max Fink', 'Tire Rack'], ['Fuzion', 'TireHub', 'Max Fink', 'Tire Rack'], ['General', 'NTW', 'ATD', 'US Autoforce', 'Max Fink'], ['Goodyear', 'TireHub', 'US Autoforce', 'Max Fink', 'Tire Rack'], ['Gt Radial', 'SHUTTLE', 'ATD', 'Max Fink', 'US Autoforce'], ['Hankook', 'NTW', 'ATD', 'Max Fink', 'Tire Rack'], ['Hercules', 'ATD', 'NTW'], ['Hi Run', 'ATD'], ['Ironman', 'ATD'], ['JKT', 'Max Fink'], ['Kelly', 'TireHub', 'Max Fink', 'Tire Rack'], ['Kumho', 'ATD', 'NTW', 'Max Fink', 'US Autoforce'], ['Laufenn', 'ATD'], ['Mastercraft', 'ATD', 'US Autoforce', 'Max Fink'], ['Michelin', 'NTW', 'Tire Rack'], ['Mickey Thompson', 'ATD', 'NTW', 'Max Fink'], ['Nexen', 'ATD', 'NTW'], ['Nitto', 'ATD', 'NTW'], ['Nokian', 'Nokian'], ['Ohtsu', 'Max Fink', 'US Autoforce'], ['Pirelli', 'NTW', 'ATD', 'Max Fink', 'US Autoforce', 'Tire Rack'], ['Prinx', 'NTW', 'Tirehub'], ['Sailun', 'NTW'], ['Starfire', 'US Autoforce', 'Max Fink'], ['Sumitomo', 'NTW'], ['Toyo', 'TireHub', 'ATD', 'NTW', 'US Autoforce', 'Max Fink', 'Tire Rack'], ['Uniroyal', 'ATD', 'NTW', 'US Autoforce'], ['Vercelli', 'Max Fink'], ['Vogue', 'NTW', 'Vogue'], ['Yokohama', 'NTW', 'ATD', 'Tire Rack']]
// const brandsObject = {};
// kCArray.forEach((brandArr, index) => {
//     const brand = brandArr[0];
//     const vendors = brandArr.slice(1)
//     console.log('brand ====>',  brand)
//     console.log('vendors ====>',  vendors)

//     vendors.forEach(vendor => {
//         if (brandsObject[vendor]) {
//             brandsObject[vendor].push(brand)
//         }else {
//             brandsObject[vendor] = [brand];
//         }
//     })
// })

// console.log(brandsObject);

export const  kCBrandObject = {
    "SHUTTLE": [
        "Achilles",
        "Antares",
        "Arroyo",
        "Blackhawk",
        "Blacklion",
        "Gt Radial",
        "Landsail",
        "Nokian"
    ],
    "Max Fink": [
        "Advanta",
        "Americus",
        "Bridgestone",
        "Carlisle",
        "Continental",
        "Cooper",
        "Dunlop",
        "Firestone",
        "Fuzion",
        "General",
        "Goodyear",
        "Gt Radial",
        "Hankook",
        "JKT",
        "Kelly",
        "Kumho",
        "Mastercraft",
        "Mickey Thompson",
        "Ohtsu",
        "Pirelli",
        "Starfire",
        "Toyo",
        "Vercelli"
    ],
    "NTW": [
        "Arctic Claw",
        "Bfgoodrich",
        "Carlisle",
        "Continental",
        "Cooper",
        "El dorado",
        "Falken",
        "General",
        "Hankook",
        "Hercules",
        "Kumho",
        "Michelin",
        "Mickey Thompson",
        "Nexen",
        "Nitto",
        "Pirelli",
        "Prinx",
        "Sailun",
        "Sumitomo",
        "Toyo",
        "Uniroyal",
        "Vogue",
        "Yokohama"
    ],
    "Tire Rack": [
        "Bfgoodrich",
        "Bridgestone",
        "Dunlop",
        "Firestone",
        "Fuzion",
        "Goodyear",
        "Hankook",
        "Kelly",
        "Michelin",
        "Pirelli",
        "Toyo",
        "Yokohama"
    ],
    "TireHub": [
        "Bridgestone",
        "Dunlop",
        "Firestone",
        "Fuzion",
        "Goodyear",
        "Kelly",
        "Toyo",
        "Prinx"
    ],
    "ATD": [
        "Carlisle",
        "Continental",
        "Cooper",
        "Dynatrac",
        "Falken",
        "General",
        "Gt Radial",
        "Hankook",
        "Hercules",
        "Hi Run",
        "Ironman",
        "Kumho",
        "Laufenn",
        "Mastercraft",
        "Mickey Thompson",
        "Nexen",
        "Nitto",
        "Pirelli",
        "Toyo",
        "Uniroyal",
        "Yokohama"
    ],
    "US Autoforce": [
        "Continental",
        "Cooper",
        "General",
        "Goodyear",
        "Gt Radial",
        "Kumho",
        "Mastercraft",
        "Ohtsu",
        "Pirelli",
        "Starfire",
        "Toyo",
        "Uniroyal"
    ],


}