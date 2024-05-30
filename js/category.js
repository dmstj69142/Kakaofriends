
// 판 펼치기 
$('.ham_box').click(function() {
    $('.pan').css('left', 0);
})

$('.pan_close_btn').click(function() {
    $('.pan').css('left', '-100%');
})

// 아이템 불러오기 
const category_item = [
    { id:1, name: '냥냥 필로우_춘식이', price: 20000, review_cnt: 11, img: './img/item/category1.jpg' },
    { id:2, name: '플라워 볼 발그레 키링인형_춘식이', price: 13000, review_cnt: 8, img: './img/item/category2.jpg' },
    { id:3, name: '아기고양이 차량용 방향제_춘식이', price: 17000, review_cnt: 10, img: './img/item/category3.jpg' },
    { id:4, name: '러브 허그 인형_라이언&춘식이', price: 29000, review_cnt: 6, img: './img/item/category4.jpg' },
]
$('#total_cnt').text(category_item.length);
// 1번 방법
for (i=0; i<category_item.length; i++) {
    let cate_item = `<div class="item">
                        <img src="${category_item[i].img}" alt="best_item${i+1}" class="item_img1">
                        <div class="txt_box1">
                            <div class="item_price">${numberWithCommas(category_item[i].price)}원</div>
                            <div class="item_name">${category_item[i].name}</div>
                            <div class="item_review_cnt">리뷰 ${category_item[i].review_cnt}</div>
                        </div>
                        <div class="heart_box">
                            <img src="./img/icon_heart1.png" alt="heart1" class="heart1">
                            <input type="checkbox" name="heart" id="heart${i+1}" class="heart">
                            <label for="heart${i+1}">
                                <img src="./img/icon_heart2.png" alt="heart2" class="heart2">
                            </label>
                        </div>
                    </div>`

                    
    $('.item_box1').append(cate_item);
}
// 2번 방법
for (let i=0; i<category_item.length; i++) {
    let cate_item2 = `<div class="item">
                        <img src="${category_item[i].img}" alt="best_item${i+1}" class="item_img2">
                        <div class="txt_box2">
                            <div class="item_price">${numberWithCommas(category_item[i].price)}원</div>
                            <div class="item_name">${category_item[i].name}</div>
                            <div class="item_review_cnt">리뷰 ${category_item[i].review_cnt}</div>
                        </div>
                        <div class="heart_box heart_box2">
                            <img src="./img/icon_heart1.png" alt="heart1" class="heart1">
                            <input type="checkbox" name="heart" id="heart_2_${i+1}" class="heart">
                            <label for="heart${i+1}">
                                <img src="./img/icon_heart2.png" alt="heart2" class="heart2">
                            </label>
                        </div>
                    </div>`
    $('.item_box2').append(cate_item2);
}


// 1000단위 콤마
function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 카테고리 체크박스 
let all_check = document.getElementById('category_all');
function selectAll() {
    const category = document.getElementsByName('cate_chk');
    category.forEach((checkbox) => {
        checkbox.checked = all_check.checked;
    })
    if ($('#category_all').is(':checked')) {
        $('.category').addClass('category_check');
    }
    else {
        $('.category').removeClass('category_check');
    }
}

$('.cate_chk').change(function() {
    if ($(this).is(':checked')) {
        $(this).next('label').addClass('category_check');
    }
    else {
        $(this).next('label').removeClass('category_check');
    }
})

// 아이콘 체크 (보는 방식 정렬)
$('#icon_chk').click(function() {
    if ($('#icon_chk').is(':checked')) {
        $('.icon_box img:nth-child(1)').css("display", "none");
        $('.icon_box img:nth-child(2)').css("display", "block");
        $('.item_box1').css("display", "none");
        $('.item_box2').css("display", "flex");
    }
    else {
        $('.icon_box img:nth-child(1)').css("display", "block");
        $('.icon_box img:nth-child(2)').css("display", "none");
        $('.item_box1').css("display", "flex");
        $('.item_box2').css("display", "none");
    }
})

// 하트 아이콘 
document.addEventListener("DOMContentLoaded", function() {
    const heartBoxes = document.querySelectorAll('.heart_box');

    heartBoxes.forEach(function(heartBox) {
        const heart1 = heartBox.querySelector('.heart1');
        const heart2 = heartBox.querySelector('.heart2');
        const heart_checked = heartBox.querySelector('.heart');

        heartBox.addEventListener('mouseover', function() {
            heart1.style.display = 'none';
            heart2.style.display = 'block';
        });
        heartBox.addEventListener('mouseout', function() {
            heart1.style.display = 'block';
            heart2.style.display = 'none';
            if (heart_checked.checked) {
                heart1.style.display = 'none';
                heart2.style.display = 'block';
            }
        });
    });
});

