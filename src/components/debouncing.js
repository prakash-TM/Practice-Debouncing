const data = { name: "Prakash", native: "TamilNadu", age: "21" };

const funData = () => {
    setTimeout(() => {
        document.getElementById("data").innerHTML = data.name;

    }, 3000);
}