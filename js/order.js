// 판 펼치기 
$('.ham_box').click(function() {
    $('.pan').css('left', 0);
})

$('.pan_close_btn').click(function() {
    $('.pan').css('left', '-100%');
})  

const order_item = [
    { id:1, name: '아기고양이 안심 주차번호판_춘식이', price: 22000, review_cnt: 11, img: './img/item/order1.jpg' },
    { id:2, name: '차량용 오토무선충전거치대_춘식이', price: 49000, review_cnt: 10, img: './img/item/order2.jpg' }
]

let order_sum = 0;
for (let i=0; i<order_item.length; i++) {
    let order = `<div class="order_item">
                    <img src="${order_item[i].img}" alt="best_item${i+1}">
                    <div class="item_txt_box">
                        <div class="item_name">${order_item[i].name}</div>
                        <div class="order_price"><span id="order_item_price">${numberWithCommas(order_item[i].price)}</span>원</div>
                        <div class="order_amount">수량 <span id="order_item_cnt">1</span>개</div>
                    </div>
                </div>`
    $('.order_item_box').append(order);
    order_sum = order_sum+order_item[i].price;
}

// 총 합계 계산
$('#order_final_price').text(numberWithCommas(order_sum))

// 1000단위 콤마
function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 날짜 구하기 
var date = new Date();
var today_year = date.getFullYear();
var today_month = date.getMonth() + 1;
$('#from_year').append(`<option value="year">${today_year}년</option>`)
$('#to_year').append(`<option value="year">${today_year}년</option>`)
$('#from_year').append(`<option value="year">${today_year-1}년</option>`)
$('#to_year').append(`<option value="year">${today_year-1}년</option>`)

// month 
for (let i=1; i<=12; i++) {
    $('#to_month, #from_month').append(`<option value="month">${i}월</option>`)
}

// date
for (let i=1; i<=31; i++) {
    $('#from_date, #to_date').append(`<option value="date">${i}일</option>`)
}

function search() {

}