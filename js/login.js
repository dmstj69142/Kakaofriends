function login_check() {
    let login_id = document.getElementById('login_id').value;
    let login_password = document.getElementById('login_password').value;
    let login_warning = document.getElementsByClassName('login_check');

    const input_id = document.getElementById('input_id');
    
    let login_form = document.getElementById('login_form');

    let login_btn = document.getElementById('login');

    if (login_id.length == "") {
        login_warning[0].style.display = "block";
        login_id.focus();
        return false;
    }
    else if (login_id.length < 6) {
        login_warning[0].innerText = "아이디는 6~15자, 영문 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)만 사용할 수 있습니다.";
        login_id.focus();
        return false;
    }

    if (login_password.length == "") {
        login_warning[0].style.display = "none";
        login_warning[1].style.display = "block";
        login_password.focus();
        return false;
    }
    else if (login_password.length < 6) {
        login_warning[1].innerText = "비밀번호 8~32자리 입력해주세요 (영문자/숫자/특수문자)"
        login_password.focus();
        return false;
    }
    else {
        login_form.submit();
    }


}