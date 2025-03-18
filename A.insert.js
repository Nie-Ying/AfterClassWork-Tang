window.addEventListener('load', function () {
    document.getElementById('submit',).addEventListener('click', function (event) {
        event.preventDefault();
        let data = {
            index: document.getElementById('index').value,
            semester: document.getElementById('semester').value,
            studentNumber: document.getElementById('number').value,
            name: document.getElementById('name').value,
            class: document.getElementById('class').value,
            tel: document.getElementById('tel').value,
            course: document.getElementById('course').value,
            score: document.getElementById('score').value,
            teacher: document.getElementById('teacher').value
        };
        console.log(data)
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3111/api", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                if (response.message === 'success') {
                    alert('成功');
                } else {
                    alert('失败');
                }
            }
        };
        xhr.send(JSON.stringify({
            target: "insert", data
        }));
    });

})