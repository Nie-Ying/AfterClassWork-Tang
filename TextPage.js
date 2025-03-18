window.addEventListener('load', function () {
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
                window.location = ("B.update.html")
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
})