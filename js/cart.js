// 판 펼치기 
$('.ham_box').click(function() {
    $('.pan').css('left', 0);
})

$('.pan_close_btn').click(function() {
    $('.pan').css('left', '-100%');
})

// 전체 선택 
let all_check = document.getElementById('all_check');
function selectAll() {
    const cart_chk = document.getElementsByName('cart_chk');
    cart_chk.forEach((checkbox) => {
        checkbox.checked = all_check.checked;
    })
}
// 1000단위 콤마
function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let items = [
    {
        id: 1,
        name: "인형 스마트키 케이스_춘식이",
        price: 21000,
        img: './img/best_item/best_item1.jpeg'
    },
    {
        id: 2,
        name: "편안한 차량용 목쿠션_춘식이",
        price: 15000,
        img: './img/new_item/newitem1.jpeg'
    }
]

let item_cnt = 1;
let currentItem;

function input_cnt() {
    item_cnt = $(this).val();
    num_change(currentItem, item_cnt);
    if (item_cnt.length < 1) {
        item_cnt = 1;
        num_change(currentItem, item_cnt);
    }
}

function item_load(item) {
    let cart_item = `<div class="cart_item">
                        <input type="checkbox" name="cart_chk" class="cart_chk">
                        <div class="item_check">
                            <img src="${item.img}" alt="장바구니이미지${item.id}">
                            <div class="item_checked_txt">${item.name}</div>
                            <div class="cnt_box">
                                <input type="button" class="minus" value="-" onclick="minus(this);">
                                <input type="number" value="1" class="cnt">
                                <input type="button" class="plus" value="+" onclick="plus(this);">
                            </div>
                            <div class="price_box">
                                <div class="each_cnt">1개</div>
                                <div class="each_price" data-price="${item.price}">${numberWithCommas(item.price)}원</div>
                            </div>
                            <div class="delete_btn">삭제</div>
                        </div>
                    </div>`;

    $(".item_check_box").append(cart_item);
}
item_load(items[0])
item_load(items[1])

function minus(button) {
    let $parent = $(button).closest('.item_check');
    let $cnt = $parent.find('.cnt');
    let count = parseInt($cnt.val());
    if (count > 1) {
        $cnt.val(count - 1);
        num_change($parent);
    }
    else {
        alert ("최소 주문 수량은 1개 이상입니다.")
    }
}

function plus(button) {
    let $parent = $(button).closest('.item_check');
    let $cnt = $parent.find('.cnt');
    let count = parseInt($cnt.val());
    $cnt.val(count + 1);
    num_change($parent);
}

function num_change($parent) {
    let $eachCnt = $parent.find('.each_cnt');
    let $eachPrice = $parent.find('.each_price');
    let count = parseInt($parent.find('.cnt').val());
    let price = parseInt($eachPrice.attr('data-price')); // 기본 가격을 가져옴
    let totalPrice = numberWithCommas(count * price);
    console.log(totalPrice)
    $eachCnt.text(count + "개");
    $eachPrice.text(totalPrice + "원");
    final_order();
}

$('.cnt').on('input', input_cnt);

// 각각 아이템 삭제 기능
$('.delete_btn').click(function() {
    let delete_btn = confirm("삭제하시겠습니까?");
    if (delete_btn == true) {
        alert('삭제');
        console.log($(this))
        $(this).closest('.cart_item').remove();
    }
    let price = document.querySelectorAll('.each_cnt').length;
    $('#order_cnt').text(price)
    final_order();
});

// 선택 삭제 기능 
$('.ch_delete_btn').click(function() {
    let delete_btn = confirm("삭제하시겠습니까?");
    if (delete_btn == true) {
        alert('삭제');
        var checkboxes = document.querySelectorAll('.cart_chk');
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                checkbox.closest('.cart_item').remove();
            }
        })
    }
    final_order();
});


function final_order() {
    // 총 개수 
    let price = document.querySelectorAll('.each_cnt').length;
    $('#order_cnt').text(price)

    // 총 주문금액 계산 
    var prices = document.querySelectorAll('.each_price');
    var totalPrice = 0;

    prices.forEach(function(priceElement) {
        var price = parseInt((priceElement.textContent).replace(/,/g, '')); // 1000단위 콤마 제거 
        if(!isNaN(price)) {
            totalPrice += price;
        }
    });
    $('#final_price').text(numberWithCommas(totalPrice))
}
final_order();