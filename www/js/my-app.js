// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: false
});

//SPLASH
myApp.onPageInit('splash',function(page){
  setTimeout(function(){
    mainView.router.loadPage('index.html');
  },3000);
});

//LOGIN
myApp.onPageInit('login',function (page){
  $$('.button-fb').on('click',function(){
    myApp.alert('Invalid email address or password. Please try again','');
  });
});

myApp.onPageInit("new-promo",function(page){

  myApp.alert('Waktu Promo tidak boleh lebih dari 12 jam','');

  var pickerHotel = myApp.picker({
    input: '#hotel-picker',
    cols: [
        {
            textAlign: 'center',
            values: ['Hotel Santika','JW Marriot','Hotel Hyatt','CityHub Hotel','Hotel Ibis']
        }
    ]
  });

  var time = [
      {
          textAlign: 'center',
          values: ['01.00','02.00','03.00','04.00','05.00','06.00','07.00','08.00','09.00','10.00','11.00','12.00']
      }
  ];

  var ampm = [
    {
      textAlign:'center',
      values : ['AM','PM']
    }
  ];

  var pickerStart= myApp.picker({
    input:'#start-picker',
    rotateEffect: true,
    cols:time
  });

  var pickerStartAm = myApp.picker({
    input:'#start-am',
    rotateEffect:true,
    cols:ampm
  });

  var pickerEnd = myApp.picker({
    input:'#end-picker',
    rotateEffect: true,
    cols:time
  });

  var pickerEndAm = myApp.picker({
    input:'#end-am',
    rotateEffect:true,
    cols:ampm
  });
});

//CHECKIN
myApp.onPageInit('checkin',function(page){
  $$('#btnCheckIn').on('click',function(){
    mainView.router.loadPage('index.html');
  });
});
