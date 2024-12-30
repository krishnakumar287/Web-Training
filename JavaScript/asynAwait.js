async function fetchData() {
    setTimeout(() => {
        console.log("This message is displayed after a timeout.");
    }, 1000);
    

console.log(await "Hello");
}
fetchData();
