function csv() {
    let rows = document.body.getElementsByTagName("tr")
    for (row of rows) {
        if (row.classList != undefined) {
            if (row.classList[0] == 'odd' || row.classList[0] == 'even') {
                elements = row.getElementsByTagName('td')
                let arr = [];
                for (ele of elements) {
                    arr.push(ele.innerText)
                }
                csvArray.push(arr)
            }
        }
    }
}

var csvArray = [
    ["College", "Building", "Floor", 'Room', 'Sqft', 'Number of People', 'Sub-Free', 'Features']
];
// 
let next = document.getElementById('table_next')
csv()
while (next.classList.length <= 2) {
    next.click()
    next = document.getElementById("table_next")
    csv()
}

let csvContent = "data:text/csv;charset=utf-8," +
    csvArray.map(e => e.join(",")).join("\n");

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "rooms.csv");
document.body.appendChild(link); // Required for FF
link.click();