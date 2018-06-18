// // 文法
// // 制御構文
//
// // 変数（文字列、数字、配列、オブジェクト、真偽値=boolean、null）
// var name = '本間';
//
// // alert(name);
// // 配列
// var sui = [
//   'homma',
//   'kobayashi',
//   'nishimura',
//   'noguchi',
// ];
//
// // alert(sui[1]);
//
// // 連想配列（オブジェクト）
// var sabae_leader = {
//   sui: 'homma',
//   fam: 'yamagishi',
// };
//
// // alert(sabae_leader['sui']);
//
// // 多重配列
// var sabae_office = {
//   sui: [
//     'homma',
//     'kobayashi',
//     'nishimura',
//     'noguchi',
//   ],
//   fam: [
//     'yamagishi',
//     'maekawa',
//   ],
// };
//
// // alert(sabae_office['sui'][3])
//
// // var test_1 = 5;
// // var test_2 = '5';
// //
// // alert(test_1+test_2);
//
// var number = 4;
// if(number === 5) {
//   // alert('success');
// } else if(number === 4) {
//   // alert('this is 4')
// } else {
//   // alert('fail')
// }
//
// // loop
// for(var i = 0; i < 3; i++) {
//   alert(i);
// }

// y = x + 1;

// // 関数
// function getName() {
//   // alert('kobayashi is god.')
// }
//
// getName();
//
// $(function() {
//   $('.with').css('opacity', 0)
//
//   setTimeout(function() {
//     $('.with').animate({
//       marginLeft: 400,
//       opacity: 1,
//     }, {
//       duration: 2000,
//       easing: 'easeInExpo',
//       complete: function() {
//         $(this).animate({
//           marginTop: 400,
//         }, {
//           duration: 400,
//           complete: function() {
//           }
//         })
//       }
//     })
//
//   }, 1000)
// })


  $('.main1').animate({
    opacity:1,
    left:'34px'
  })

  $('.with') .delay(1000).animate({
    opacity:1,
    top:'20px'
  });

  $('.with2').delay(1000).animate({
    opacity:1,
    top:'20px'
  });

  $('.with7').delay(1500).animate({
    opacity:1,
    left:'1150px'
  });
