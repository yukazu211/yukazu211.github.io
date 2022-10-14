var newnum2 = "0001";
var newtit2 = "2022年静ｼｽのNG出場まとめ";
var newtim2 = "2022/08/14";
var newkos2 = "2022/10/14";

var newnum1 = "0004";
var newtit1 = "8000番代の重連が走行する";
var newtim1 = "2022/10/10";
var newkos1 = "none";

var newnum3 = "0003";
var newtit3 = "N700系Sが搬入される";
var newtim3 = "2022/09/03";
var newkos3 = "none";

var newnum4 = "0002";
var newtit4 = "身延線に臨時列車が運転";
var newtim4 = "2022/08/14";
var newkos4 = "none";

if(window.matchMedia('(prefers-color-scheme: dark)').matches == true){//OSの色の取得
	dark();
}else{
  light();
}


function dark() {
  document.getElementById('body').style.backgroundColor="#202020";
  main.style.backgroundColor="#3b3b3b";
  body.style.color="white";
 litwi.innerHTML = '';
  side_t.style.backgroundColor="#3b3b3b";
  // head.style.backgroundColor="#3b3b3b";

       document.getElementById('head').innerHTML = '<div class="side-c-d" id="head"> <a href="../blog" class="he header-c-d"><div class="head-c"><b>最新記事</b></div></a><div id="kiji">'+
'<a href="../blog/'+newnum1+'" class="news-d"><div class="news-d"><img src="../blog/'+newnum1+ '/header.jpeg" class="newsimg"><b class="news-d">'+newtit1+'</b></div></a>'      +
'<a href="../blog/'+newnum2+'" class="news-d"><div class="news-d"><img src="../blog/'+newnum2+ '/header.jpeg" class="newsimg"><b class="news-d">'+newtit2+'</b></div></a>'      +
'<a href="../blog/'+newnum3+'" class="news-d"><div class="news-d"><img src="../blog/'+newnum3+ '/header.jpeg" class="newsimg"><b class="news-d">'+newtit3+'</b></div></a>'      +
'<a href="../blog/'+newnum4+'" class="news-d"><div class="news-d"><img src="../blog/'+newnum4+ '/header.jpeg" class="newsimg"><b class="news-d">'+newtit4+'</b></div></a>'      +
  '</div>';
     

}
function light() {
  document.getElementById('body').style.backgroundColor="#e6e6e6";
  main.style.backgroundColor="#f0f0f0";
  body.style.color="black";
  datwi.innerHTML = "";
  side_t.style.backgroundColor="#f0f0f0";


    document.getElementById('head').innerHTML = '<div class="side-c" id="head"><a href="../blog" class="he header-c"> <div class="head-c"><b>最新記事</b></div></a><div id="kiji">'+
'<a href="../blog/'+newnum1+'" class="news"><div class="news"><img src="../blog/'+newnum1+ '/header.jpeg" class="newsimg"><b class="news">'+newtit1+'</b></div></a>'      +
'<a href="../blog/'+newnum2+'" class="news"><div class="news"><img src="../blog/'+newnum2+ '/header.jpeg" class="newsimg"><b class="news">'+newtit2+'</b></div></a>'      +
'<a href="../blog/'+newnum3+'" class="news"><div class="news"><img src="../blog/'+newnum3+ '/header.jpeg" class="newsimg"><b class="news">'+newtit3+'</b></div></a>'      +
'<a href="../blog/'+newnum4+'" class="news"><div class="news"><img src="../blog/'+newnum4+ '/header.jpeg" class="newsimg"><b class="news">'+newtit4+'</b></div></a>'      +
  '</div>';
}










window.onload = function() {



var husen = document.getElementById('husen');
if (husen){
  
var hiduke=new Date(); 
var month = hiduke.getMonth()+1;
var day = hiduke.getDate();
var today = month+"/"+day;
if (today=="11/15"){
var husen1 = getRandom( 1, 8 );
var husen2 = getRandom( 1, 8 );
var husen3 = getRandom( 1, 8 );
var husen4 = getRandom( 1, 8 );
var husen5 = getRandom( 1, 8 );
var husen6 = getRandom( 1, 8 );
var husen7 = getRandom( 1, 8 );
var husen8 = getRandom( 1, 8 );
var husen9 = getRandom( 1, 8 );
var husen10 = getRandom( 1, 8 );
var husen11 = getRandom( 1, 8 );
var husen12 = getRandom( 1, 8 );
var husen13 = getRandom( 1, 8 );
var husen14 = getRandom( 1, 8 );
var husen15 = getRandom( 1, 8 );
var husen16 = getRandom( 1, 8 );
var husen17 = getRandom( 1, 8 );
var husen18 = getRandom( 1, 8 );
var husen19 = getRandom( 1, 8 );
var husen20 = getRandom( 1, 8 );
var husen21 = getRandom( 1, 8 );
var husen22 = getRandom( 1, 8 );
var husen23 = getRandom( 1, 8 );
var husen24 = getRandom( 1, 8 );
function getRandom( min, max ) {
    var random = Math.floor( Math.random() * (max + 1 - min) ) + min;
  
    return random;
}
 
setTimeout('document.getElementById(\'husen\').style.display ="none";',15000);
document.getElementById('husen').innerHTML = '<div class="husen"><img src="./husen/'+husen1+'.png" class="husenimg husenimg1" id="1"><img src="./husen/'+husen2+'.png" class="husenimg husenimg2" id="2"><img src="./husen/'+husen3+'.png" class="husenimg husenimg3" id="3"><img src="./husen/'+husen4+'.png" class="husenimg husenimg4" id="4"><img src="./husen/'+husen5+'.png" class="husenimg husenimg5" id="5"><img src="./husen/'+husen6+'.png" class="husenimg husenimg6" id="6"><img src="./husen/'+husen7+'.png" class="husenimg husenimg7" id="7"><img src="./husen/'+husen8+'.png" class="husenimg husenimg8" id="8"></div><div class="husen"><img src="./husen/'+husen9+'.png" class="husenimg husenimg9" id="9"><img src="./husen/'+husen10+'.png" class="husenimg husenimg10" id="10"><img src="./husen/'+husen11+'.png" class="husenimg husenimg11" id="11"><img src="./husen/'+husen12+'.png" class="husenimg husenimg12" id="12"><img src="./husen/'+husen13+'.png" class="husenimg husenimg13" id="13"><img src="./husen/'+husen14+'.png" class="husenimg husenimg14" id="14"><img src="./husen/'+husen15+'.png" class="husenimg husenimg15" id="15"><img src="./husen/'+husen16+'.png" class="husenimg husenimg16" id="16"></div><div class="husen"><img src="./husen/'+husen17+'.png" class="husenimg husenimg17" id="17"><img src="./husen/'+husen18+'.png" class="husenimg husenimg18" id="18"><img src="./husen/'+husen19+'.png" class="husenimg husenimg19" id="19"><img src="./husen/'+husen20+'.png" class="husenimg husenimg20" id="20"><img src="./husen/'+husen21+'.png" class="husenimg husenimg21" id="21"><img src="./husen/'+husen22+'.png" class="husenimg husenimg22" id="22"><img src="./husen/'+husen23+'.png" class="husenimg husenimg23" id="23"><img src="./husen/'+husen24+'.png" class="husenimg husenimg24" id="24"></div>'

} else {
console.log(today);
}


} else {

     console.log('ない')
}


var url = document.getElementById('url');

if (url){ //404page用
     var decode = decodeURI(location.href);
  
url.innerHTML ='<a href="' + decode +'">' + decode + '</a>' + 'は、見つかりませんでした。<br>５秒後にトップページに戻ります。';
} else {

      console.log('ない');
}
  
if (newkos1=="none"){
  var newcha1 = '';
} else {
 var newcha1 = '　<span id="change1"></span> '+ newkos1;
}
if (newkos2=="none"){
  var newcha2 = '';
} else {
 var newcha2 = '　<span id="change2"></span> '+ newkos2;
}
if (newkos3=="none"){
  var newcha3 = '';
} else {
 var newcha3 = '　<span id="change3"></span> '+ newkos3;
}
if (newkos4=="none"){
  var newcha4 = '';
} else {
 var newcha4 = '　<span id="change4"></span> '+ newkos4;
}

  
var newskiji = document.getElementById('newskiji');



    
var time = document.getElementById('time');

if (time){
time.innerHTML = '<img src="https://www.svgrepo.com/show/13698/time.svg" class="times"> '
} else {

      console.log('ない');
}
      
var time = document.getElementById('time1');

if (time){
time.innerHTML = '<img src="https://www.svgrepo.com/show/13698/time.svg" class="times"> '
} else {

      console.log('ない');
}

      
var time = document.getElementById('time2');

if (time){
time.innerHTML = '<img src="https://www.svgrepo.com/show/13698/time.svg" class="times"> '
} else {

      console.log('ない');
}
      
var time = document.getElementById('time3');

if (time){
time.innerHTML = '<img src="https://www.svgrepo.com/show/13698/time.svg" class="times"> '
} else {

      console.log('ない');
}
    
var time = document.getElementById('time4');

if (time){
time.innerHTML = '<img src="https://www.svgrepo.com/show/13698/time.svg" class="times"> '
} else {

      console.log('ない');
}
  
  
  
var change = document.getElementById('change');

if (change){
change.innerHTML = '<img src="https://www.svgrepo.com/show/381214/refresh-reload-update-repeat-rotate.svg" class="times"> '
} else {

      console.log('ない');
}  
    
var change = document.getElementById('change1');

if (change){
change.innerHTML = '<img src="https://www.svgrepo.com/show/381214/refresh-reload-update-repeat-rotate.svg" class="times"> '
} else {

      console.log('ない');
}  
    
var change = document.getElementById('change2');

if (change){
change.innerHTML = '<img src="https://www.svgrepo.com/show/381214/refresh-reload-update-repeat-rotate.svg" class="times"> '
} else {

      console.log('ない');
}  
    
var change = document.getElementById('change3');

if (change){
change.innerHTML = '<img src="https://www.svgrepo.com/show/381214/refresh-reload-update-repeat-rotate.svg" class="times"> '
} else {

      console.log('ない');
}  
    
var change = document.getElementById('change4');

if (change){
change.innerHTML = '<img src="https://www.svgrepo.com/show/381214/refresh-reload-update-repeat-rotate.svg" class="times"> '
} else {

      console.log('ない');
}  
    

if(window.matchMedia('(prefers-color-scheme: dark)').matches == true){//OSの色の取得

}else{

}



  





if (newskiji){
  window.setTimeout(write, 3000);



    
  function write(){
 newskiji.innerHTML = '<p><span id="time1"></span>'+newtim1+newcha1+'<a href="./blog/'+newnum1+'"><br><b class="newstitle">'+newtit1+'</b></a></p><div id="n1"></div><hr>'+
'<p><span id="time2"></span>'+newtim2+newcha2+'<a href="./blog/'+newnum2+'"><br><b class="newstitle">'+newtit2+'</b></a></p><div id="n2"></div><hr>'+
'<p><span id="time3"></span>'+newtim3+newcha3+'<a href="./blog/'+newnum3+'"><br><b class="newstitle">'+newtit3+'</b></a></p><div id="n3"></div><hr>'
+ '<p><span id="time4"></span>'+newtim4+newcha4+'<a href="./blog/'+newnum4+'"><br><b class="newstitle">'+newtit4+'</b></a></p><div id="n4"></div>';


    $.ajax({
      url: "https://yukazu211.github.io/blog/"+newnum1,
      cache: false,
      datatype: "html",
      success: function (html) {
        var html = $(html).find("#content"); 
        $("#n1").append(html); 
      },
    });

    $.ajax({
      url: "https://yukazu211.github.io/blog/"+newnum2,
      cache: false,
      datatype: "html",
      success: function (html) {
        var html = $(html).find("#content"); 
        $("#n2").append(html); 
      },
    });
  
    $.ajax({
      url: "https://yukazu211.github.io/blog/"+newnum3, 
      cache: false,
      datatype: "html",
      success: function (html) {
        var html = $(html).find("#content"); 
        $("#n3").append(html); 
      },
      
    });
      $.ajax({
      url: "https://yukazu211.github.io/blog/"+newnum4, 
      cache: false,
      datatype: "html",
      success: function (html) {
        var html = $(html).find("#content"); 
        $("#n4").append(html); 
      },
    });


  }


} else {

      console.log('ない');
}
  


}

