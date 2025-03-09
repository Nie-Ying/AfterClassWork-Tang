const developer = [
    {"saying": "嵩高维岳，峻极于天。——《诗经·大雅·嵩高》"},        //蹑景
    {"saying": "珠露春华返，璇霜秋照晚。——王融《青青河畔草》"},     //白何乐
    {"saying": "浩浩洪流，带我邦畿。——嵇康《赠秀才入军》"},        //寰辰
    {"saying": "风驰电逝，蹑景追飞。——嵇康《赠秀才入军》"},        //蹑景
    {"saying": "八戒夜持香火印，三光朝念蕊珠篇。——白居易《白发》"},  //LaoIn
    {"saying": "金阙明光后圣君，流津焕彩结丹云。——宋佶《太清乐》"},  //desc
    {"saying": "涛声夜入伍员庙，柳色春藏苏小家。——白居易《杭州春望》"}//'None'
]


function showSaying() {
    const randomIndex = Math.floor(Math.random() * developer.length);
    const selectedQuote = developer[randomIndex];
    document.getElementById('saying').innerText = selectedQuote.saying;
}

window.onload = function () {
    getIPv4();
    showSaying();
    document.getElementById('submit').addEventListener('click', function () {
        let account = document.getElementById("loginAccount").value;
        let password = document.getElementById('loginPassword').value;

        let data = {account: account, password: password};

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3111/api", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                if (response.message === 'exist') {
                    window.location = ("TextPage.html");
                } else {
                    alert('登录失败，可能是账号不存在或账号/密码错误');
                }
            }
        };
        // post body
        xhr.send(JSON.stringify({
            target: "check", data
        }));
    })

    document.getElementById("registerRequire").addEventListener('click', function () {
        window.location = 'RegisterPage.html';
    })
}