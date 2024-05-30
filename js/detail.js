// 판 펼치기 
$('.ham_box').click(function() {
    $('.pan').css('left', 0);
})

$('.pan_close_btn').click(function() {
    $('.pan').css('left', '-100%');
})

// 1000단위 콤마
function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 수량 선택
let num = document.getElementById('cnt').value;
const o_price = document.getElementById('price').innerText;
$('#price').text(numberWithCommas(o_price));
let price = o_price;

function minus() {
    if (num <= 1) {
        alert('수량은 1개 이상이어야 합니다.');
    }
    else {
        num--;
        $('#cnt').val(num);
        price = o_price * num;
        $('#final_cnt').text(num);
        $('#price').text(numberWithCommas(price));
    }
}
function plus() {
    num++;
    $('#cnt').val(num);
    price = o_price * num;
    $('#final_cnt').text(num);
    $('#price').text(numberWithCommas(price));
}

// 좋아요 버튼 
let jjim_cnt = document.querySelector('.jjim_cnt').innerText;
function like_check() {
    const checkbox = document.getElementById('heart');
    if (checkbox.checked) {
        jjim_cnt++;
    }
    else {
        jjim_cnt--;
    }
    $('.jjim_cnt').text(jjim_cnt);
}
// 장바구니 버튼 
// let cart_link = 'index.html'; 
$('.cart_box').click(function() {
    let cart_move = confirm('장바구니에 담겼습니다. 이동하시겠습니까?');
    if (cart_move == true) {
        location.href = "cart.html";
    }
})

// 상세정보 자세히보기
let fold = document.querySelector('.fold');
var window_scrollTop = $(window).scrollTop();
$('.fold').click(function() {
    if($('input:checkbox[id="fold"]').is(":checked")) {
        $('.detail_box').css("height", "2000px");
        fold.textContent = "상세정보 펼치기"
        $('html, body').scrollTop(window_scrollTop); // 스크롤 적용
    } else {
        $('.detail_box').css("height", "auto");
        fold.textContent = "상세정보 접기"
        $('html, body').scrollTop(window_scrollTop); // 스크롤 적용
    }
})

// 리뷰 작성

$('.review_write_btn').click(function() {
    const review_txt = document.getElementById('review_txt').value;
    const radio_btn = $('input[name=star_rd]').is(":checked");

    console.log(radio_btn)
    if ( radio_btn == false) {
        alert("별점을 체크해주세요")
    }
    else if (review_txt == "") {
        alert("리뷰내용을 입력해주세요")
    }
    else {
        alert("리뷰등록")
    }
})

// 리뷰 좋아요 부분 
// 모든 checkbox 요소 선택
const checkboxes = document.querySelectorAll('.like');

// 각 checkbox에 대해 이벤트 리스너 추가
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        // 해당 checkbox의 label 요소 가져오기
        const label = this.parentElement;
        // label 안의 div 요소 가져오기
        const like_img = label.querySelector('.like_box_img');
        let like_cnt = label.querySelector('.like_cnt');
        
        if (this.checked) {
            like_img.classList.add('like_checked');
            let count = parseInt(like_cnt.textContent);
            count++;
            like_cnt.textContent = count;
        } else {
            like_img.classList.remove('like_checked');
            let count = parseInt(like_cnt.textContent);
            count--;
            like_cnt.textContent = count;
        }
    });
});

// 리뷰 페이징
$('.page_num_chk').change(function() {
    $('.page_num').removeClass('page_on'); // 모든 라벨에서 page_on 클래스 제거
    if ($(this).is(':checked')) {
        $(this).next('label').addClass('page_on'); // 선택된 라디오 버튼 다음의 라벨에 page_on 클래스 추가
    }
});

// https://dev-jwblog.tistory.com/56 참고
// 공유하기
function clipboardShare() {
    // 1. 새로운 element 생성
    var tmpTextarea = document.createElement('textarea');
    
    // 2. 해당 element에 복사하고자 하는 value 저장
    tmpTextarea.value = "file:///G:/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4/4.%20%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88/detail.html";
    
    // 3. 해당 element를 화면에 안보이는 곳에 위치
    tmpTextarea.setAttribute('readonly', '');
    tmpTextarea.style.position = 'absolute';
    tmpTextarea.style.left = '-9999px';
    document.body.appendChild(tmpTextarea);
    
    // 4. 해당 element의 value를 시스템 함수를 호출하여 복사
    tmpTextarea.select();
    tmpTextarea.setSelectionRange(0, 9999);  // 셀렉트 범위 설정
    var successChk = document.execCommand('copy');
    
    // 5. 해당 element 삭제
    document.body.removeChild(tmpTextarea);
    
    // 클립보드 성공여부 확인
    if(!successChk){
        alert("클립보드 복사에 실패하였습니다.");
    } else {
        alert("클립보드에 복사가 완료되었습니다.");
    }
}