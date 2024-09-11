let inp = document.querySelector("input")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let pera = document.getElementById("pera")
let select = document.getElementById("select")

let arr = [];
btn1.onclick = () => {

    arr.push(inp.value)
    console.log(arr)
    inp.value = ""
};

btn2.onclick = () => {

    if (select.value == "Ascending") {
        arr.sort((a, b) => (a - b));
        console.log(arr)
        pera.innerHTML = arr;
    }
    else if (select.value == "Descending") {
        arr.sort((a, b) => (b - a));
        pera.innerHTML = arr;
    }
    else {
        alert("WRONG input SELECTED!!!!")
    }

}