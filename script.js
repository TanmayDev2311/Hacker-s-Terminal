console.log('Initalizing Script');

//Object containing all the messages
let commands = {
    1: "Initializing Hecking",
    2: "Reading all your files",
    3: "Password files detected",
    4: "Sending all passwords and personal files to the server",
    5: "Cleaning up",
    6: "System successfully hecked"
}

//patterns in array form for the loader
// const patterns = ["", ".", "..", "..."]

//creating the loader element
// let dots = document.createElement("span")

//index to iterate over the patterns array in continuous cycle
// let index = 0

//function to update/animate the loader
// async function loader() {
//     return new Promise((resolve, reject) => {

//         dots.textContent = patterns[index];
//         index = (index + 1) % patterns.length;
//         resolve()
//     })
// }

let a = setInterval(() => {
    let last = document.querySelector(".window").lastElementChild;
    if(last.innerHTML.endsWith("...")){
        last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3)
    }
    else{

        last.innerHTML = last.innerHTML + "."
    }
}, 500);



//Function to insert message as string in terminal after random delays
async function printer(message) {
    return new Promise((resolve, reject) => {

        //creating the element to insert as message
        let temp = document.createElement("h1")
        temp.className = "message";
        temp.innerHTML = message;

        let rand = (Math.floor(1 + Math.random() * 7)) * 1000
        console.log(`Delay for "${message}": ${rand}ms`);

        //append the message+loader after random delay
        setTimeout(() => {
            document.querySelector(".window").append(temp)
            // temp.append(dots)
            // setInterval(loader, 800);
            resolve();
        }, rand);

    })
}

//main function to traverse over the messages object
async function main() {
    for (let i = 1; i <= Object.keys(commands).length; i++) {
        const element = commands[i];
        await printer(element)
    }
    clearInterval(a)
}
main()