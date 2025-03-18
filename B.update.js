window.addEventListener('load', function () {
    document.getElementById('submit').addEventListener("click", function () {
        let index = document.getElementById("index").value;
        let condition = document.getElementById('condition');

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3111/api", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                if (response.message === 'exist') {
                    condition.innerText = "exist"+JSON.stringify(response.data);
                } else {
                    condition.innerText = "not exist";
                }
            }
        };
        xhr.send(JSON.stringify({
            target: "findIndex", index
        }));
    });

})