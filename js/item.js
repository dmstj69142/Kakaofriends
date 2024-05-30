// 1000단위 콤마
function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const new_item = [
    { id:1, name: '무선 무드등_라이언&춘식이', price: 79000, review_cnt: 3, img: './img/new_item/newitem1.jpeg' },
    { id:2, name: '오늘부터갓생 미니피규어 사랑_춘식이', price: 13000, review_cnt: 24, img: './img/new_item/newitem2.jpeg' },
    { id:3, name: '오늘부터갓생 미니피규어 여행_춘식이', price: 13000, review_cnt: 15, img: './img/new_item/newitem3.jpeg' },
    { id:4, name: '오늘부터갓생 미니피규어 오운완_춘식이', price: 13000, review_cnt: 12, img: './img/new_item/newitem4.jpeg' },
    { id:5, name: '오늘부터갓생 미니피규어 부자_라이언', price: 13000, review_cnt: 22, img: './img/new_item/newitem5.jpeg' },
    { id:6, name: '오늘부터갓생 미니피규어 예쁜말_어피치', price: 13000, review_cnt: 6, img: './img/new_item/newitem6.jpeg' },
    { id:7, name: '오늘부터갓생 미니피규어 열공_무지', price: 13000, review_cnt: 6, img: './img/new_item/newitem7.jpeg' },
    { id:8, name: '오늘부터갓생 미니피규어 환경_튜브', price: 13000, review_cnt: 1, img: './img/new_item/newitem8.jpeg' },
    { id:9, name: '오늘부터갓생 키링인형_춘식이', price: 11000, review_cnt: 15, img: './img/new_item/newitem9.jpeg' },
    { id:10, name: '오늘부터갓생 키링인형_라이언', price: 11000, review_cnt: 10, img: './img/new_item/newitem10.jpeg' },
    { id:11, name: '오늘부터갓생 미러폰그립_춘식이', price: 12000, review_cnt: 13, img: './img/new_item/newitem11.jpeg' },
    { id:12, name: '오늘부터갓생 포토키링 아자아자_춘식이', price: 9000, review_cnt: 12, img: './img/new_item/newitem12.jpeg' },
    { id:13, name: '오늘부터갓생 포토키링 유캔두잇_춘식이', price: 9000, review_cnt: 16, img: './img/new_item/newitem13.jpeg' },
    { id:14, name: '오늘부터갓생 포토키링 아자아자_춘식이', price: 9000, review_cnt: 13, img: './img/new_item/newitem14.jpeg' },
    { id:15, name: '오늘부터갓생 플래닝 노트&스티커세트_춘식이', price: 6500, review_cnt: 3, img: './img/new_item/newitem15.jpeg' },
]

const best_item = [
    { id: 1, name: '명작동화 브릭피규어_춘식이', price: 49000, img:'./img/best_item/best_item1.jpg'},
    { id: 2, name: '에어쿨러 선풍기_춘식이', price: 29000, img:'./img/best_item/best_item2.jpg'},
    { id: 3, name: '회전 탁상용 선풍기_춘식이', price: 45000, img:'./img/best_item/best_item3.jpg'},
    { id: 4, name: '에어쿨러 선풍기_리틀라이언', price: 29000, img:'./img/best_item/best_item4.jpg'},
    { id: 5, name: '위글위글X카카오프렌즈 폴딩카트_춘식이', price: 49000, img:'./img/best_item/best_item5.jpg'},
    { id: 6, name: '위글위글X카카오프렌즈 16인치 캐리어_춘식이', price: 120000, img:'./img/best_item/best_item6.jpg'},
    { id: 7, name: '훌라 쿨링 메모리폼 사각방석_춘식이', price: 17000, img:'./img/best_item/best_item7.jpg'},
    { id: 8, name: '아프리콧스튜디오X카카오프렌즈 키즈백팩_춘식이', price: 39000, img:'./img/best_item/best_item8.jpg'},
    { id: 9, name: '아프리콧스튜디오X카카오프렌즈 캐스터네츠백', price: 83000, img:'./img/best_item/best_item9.jpg'},
    { id: 10, name: '냥냥 필로우_춘식이', price: 20000, img:'./img/best_item/best_item10.jpg'}
]

