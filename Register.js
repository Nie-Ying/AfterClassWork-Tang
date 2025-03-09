const nameRule = /^[a-zA-Z0-9_]{3,16}$/;
const passwordRule = /^[a-zA-Z0-9_]{3,16}$/;

document.getElementById("register").addEventListener('click', function () {
    let account = document.getElementById("registerAccount").value;
    let password = document.getElementById('registerPassword').value;
    if (!nameRule.test(account) || !passwordRule.test(password)) {
        document.getElementById('show2').innerText = "账号和密码需在3-16位之间，且仅包含数字、字母或下划线。";
        document.getElementById("registerAccount").value = '';
        document.getElementById('registerPassword').value = '';
    } else {
        let data = {
            account: account,
            password: password
        };

        let xhr = new XMLHttpRequest();
        xhr.open("POST", `http://${IPv4}:3111/api`, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                const response = JSON.parse(xhr.responseText);
                if (response.message === 'exist') {
                    alert('该账号已注册');
                } else {
                    alert('注册成功，即将跳转到登录页');
                    window.location=("LoginPage.html");
                }
            } else {
                alert('Error:' + xhr.statusText);
            }
        }
        // post body
        xhr.send(JSON.stringify({
            target: 'writejson',
            data
        }));
    }

})