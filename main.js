let IPv4 = "localhost";

function getIPv4() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3111/api", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            IPv4 = xhr.responseText;
            document.getElementById("IPv4Address").innerText=IPv4;
            console.log(IPv4);
        }
    };

    // post body
    xhr.send(JSON.stringify({
        target: "getIPv4"
    }));
}

getIPv4();


// document.getElementById("awa").addEventListener("click", rand.awa);
//
// document.getElementById("rand").addEventListener("click", () => {
//         let xhr = new XMLHttpRequest();
//         xhr.open("POST", `http://${IPv4}:3111/api`, true);
//         xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//                 console.log(xhr.responseText);
//                 const numList = JSON.parse(xhr.responseText);
//                 const showEle = document.getElementById("show");
//                 showEle.innerHTML = "";
//                 for (let i = 0; i < numList.length; i++) {
//                     const num = numList[i];
//                     const div = document.createElement("div");
//                     div.innerText = num;
//                     showEle.append(div);
//                 }
//             }
//         };
//         // post body
//         xhr.send(JSON.stringify({
//             target: "getNum"
//         }));
//     }
// )