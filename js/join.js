
let join_form = document.getElementById('join_form');

// 이용약관 전체 선택 
let all_check = document.getElementById('all_check');
function selectAll() {
    const clause = document.getElementsByName('clause');
    clause.forEach((checkbox) => {
        checkbox.checked = all_check.checked;
    })
}

let phone = document.getElementById('input_phone');
let id = document.getElementById('input_id');
let password = document.getElementById('input_password');
let password2 = document.getElementById('input_password2');
let nickname = document.getElementById('input_nickname');
let require_clause = document.getElementsByClassName('require');
let warning_box = document.getElementsByClassName('warning_box');

function join_check() {
    let require_length = require_clause.length;
    let require_checked = 0;
    for (let i=0; i<require_length; i++) {
        if(require_clause[i].checked) {
            require_checked++;
        }
    }

    if ( require_checked == require_length ) {
        warning_box[0].style.display = "none";
        
        let arr_input = [id, password, password2, phone, nickname];
        let emptyFieldExists = false;

        for (let i=0; i<arr_input.length; i++) {
            if (arr_input[i].value == "") {
                warning_box[i+1].style.display="block";
                arr_input[i].focus();
                emptyFieldExists = true;
                break;
            }
            else {
                // id_check(id.value, password.value, password2.value, phone.value);
                warning_box[i+1].style.display="none";
                emptyFieldExists = false;
                continue;
            }
        }

        if ( !emptyFieldExists ) {

            if (id.value.length < 6) {
                warning_box[1].style.display="block";
                warning_box[1].textContent = "아이디를 6자 이상 입력해주세요.";
                id.focus();
            }
            else if (password.value.length < 6) {
                warning_box[2].style.display="block";
                warning_box[2].textContent = "비밀번호를 6자 이상 입력해주세요.";
                password.focus();
            }
            else if (password.value != password2.value) {
                warning_box[3].style.display="block";
                warning_box[3].textContent = "비밀번호가 일치하지 않습니다.";
                password2.focus();
            }
            else if (phone.value.length != 11 || !phone.value.startsWith("010")) {
                warning_box[4].style.display="block";
                warning_box[4].textContent = "전화번호를 확인해주세요.";
                phone.focus();
            }
            else if (nickname.value.length < 2) {
                warning_box[5].style.display="block";
                warning_box[5].textContent = "닉네임을 2글자 이상 입력해주세요.";
                nickname.focus();
            }
            else {
                alert("회원가입 성공! 로그인 화면으로 이동합니다.");
                join_form.submit();
            }  
        }
        
    }

    else {
        warning_box[0].style.display = "block";
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
    }
    
}

// function id_check(id, password, password2, phone) {
//     var id_chk = /^[a-zA-z0-9]{4,12}$/;
//     if (id_chk.test(id)) {
//         warning_box[1].style.display="block";
//         warning_box[1].innerText = "아이디를 입력해주세요 11111";
//         return false;
//     }

//     if (phone.length != 11) {
//         // phone.focus();
//         warning_box[4].style.display="block";
//         warning_box[4].innerText = "전화번호 11자 입력해주세요('-'제외)";
//         return false;
//     }

//     return true;
// }


// 생일 select 부분 
var today = new Date();
var today_year = today.getFullYear();

// year
for (let i=today_year; i>today_year-100; i--) {
    $('#year').append(`<option value="year">${i}</option>`);
}
// month 
for (let i=1; i<=12; i++) {
    $('#month').append(`<option value="month">${i}</option>`)
}

// date
$("#month").change(function(){
    $("#date *").remove();
    $('#date').append('<option value="date">일</option>');

    var text = $("#month :selected").text();
    if (text==2) {
        for (let i=1; i<=28; i++) {
            $('#date').append(`<option value="date">${i}</option>`)
        }
    }
    else if (text==1 || text==3 || text==5 || text==7 || text==8 || text==10 || text==12) {
        for (let i=1; i<=31; i++) {
            $('#date').append(`<option value="date">${i}</option>`)
        }
    }
    else {
        for (let i=1; i<=30; i++) {
            $('#date').append(`<option value="date">${i}</option>`)
        }
    }
});