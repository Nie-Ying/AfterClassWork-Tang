window.onload = function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/getUsername', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 解析返回的 JSON 数据
            const response = JSON.parse(xhr.responseText);
            document.getElementById('welcome').innerText = `欢迎你，${response.username}`;
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            document.getElementById('username').innerText = '获取用户名失败';
        }
    };
    xhr.send();

    const link = document.querySelectorAll('.navbar a');
    link.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const target = event.target.getAttribute('href').substring(1);
            displayContent(target);
        });
    });

    function displayContent(target) {
        const content = document.getElementById('content');
        content.innerHTML = '';
        switch (target) {
            case 'insert':
                window.location = ("A.insert.html")
                break;
            case 'update':
                content.innerHTML = '<h2>修改记录</h2>';
                break;
            case 'delete':
                content.innerHTML = '<h2>删除记录</h2>';
                break;
            case 'view':
                content.innerHTML = '<h2>浏览所有信息</h2>';
                break;
            case 'search':
                content.innerHTML = '<h2>查找不及格记录</h2>';
                break;
            default:
                content.innerHTML = '<p>无效的操作</p>';
        }
    }

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


}