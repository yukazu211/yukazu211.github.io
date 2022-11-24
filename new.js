var newnum1 = "0001";
var newtit1 = "2022年静ｼｽのNG出場まとめ";
var engtit1 = "Summary that left the Nagoya Plant in 2022";
var newtim1 = ["2022/08/14", "2022/11/24"];

var newnum2 = "0004";
var newtit2 = "8000番代の重連が走行する";
var engtit2 = "Series 313-8000s coupled with each other run";
var newtim2 = ["2022/10/10", "2022/10/14"];

var newnum3 = "0003";
var newtit3 = "N700S系が搬入される";
var engtit3 = "N700S Series is brought in";
var newtim3 = ["2022/09/03", ""]

var newnum4 = "0002";
var newtit4 = "身延線に臨時列車が運転";
var engtit4 = "Special trains run on the Minobu Line";
var newtim4 = ["2022/08/14", ""];





function chahref(plus){
var href = document.querySelectorAll('a');
for(var i in href){
	if (href.hasOwnProperty(i)) {
    var href1 = href[i];
    var hrefcut = href1.href.substr( 0, 28 );
    if(hrefcut=='https://yukazu211.github.io/'){
  var enhref = href1.href+plus;
     href1.href = enhref;
    }
  } 
}
}



dl();
function dl(){
if(window.matchMedia('(prefers-color-scheme: dark)').matches == true){//OSの色の取得
	dark();
}else{
  light();
}
}


function dark() {
    var width = window.innerWidth;
  if(width<=731){
  document.getElementById('body').style.backgroundColor="#3b3b3b";
  }else{
  document.getElementById('body').style.backgroundColor="#202020";
  }

  main.style.backgroundColor="#3b3b3b";
  body.style.color="white";
 litwi.innerHTML = '';
  side_t.style.backgroundColor="#3b3b3b";
  // head.style.backgroundColor="#3b3b3b";

       document.getElementById('head').innerHTML = '<div class="side-c-d" id="head"> <a href="../blog/" class="he header-c-d"><div class="head-c"><b>最新記事</b></div></a><div id="kiji">'+
'<a href="../blog/'+newnum1+'/" class="news-d"><div class="news-d"><img src="../blog/'+newnum1+ '/header.jpeg" class="newsimg"><b class="news-d">'+newtit1+'</b></div></a>'      +
'<a href="../blog/'+newnum2+'/" class="news-d"><div class="news-d"><img src="../blog/'+newnum2+ '/header.jpeg" class="newsimg"><b class="news-d">'+newtit2+'</b></div></a>'      +
'<a href="../blog/'+newnum3+'/" class="news-d"><div class="news-d"><img src="../blog/'+newnum3+ '/header.jpeg" class="newsimg"><b class="news-d">'+newtit3+'</b></div></a>'      +
'<a href="../blog/'+newnum4+'/" class="news-d"><div class="news-d"><img src="../blog/'+newnum4+ '/header.jpeg" class="newsimg"><b class="news-d">'+newtit4+'</b></div></a>'      +
  '</div>';
     
}
function light() {
  var width = window.innerWidth;
  if(width<=731){
  document.getElementById('body').style.backgroundColor="#f0f0f0";
  }else{
  document.getElementById('body').style.backgroundColor="#e6e6e6";
  }
  main.style.backgroundColor="#f0f0f0";
  body.style.color="black";
  datwi.innerHTML = "";
  side_t.style.backgroundColor="#f0f0f0";


document.getElementById('head').innerHTML = '<div class="side-c" id="head"><a href="../blog/" class="he header-c"> <div class="head-c"><b>最新記事</b></div></a><div id="kiji">'+
'<a href="../blog/'+newnum1+'/" class="news"><div class="news"><img src="../blog/'+newnum1+ '/header.jpeg" class="newsimg"><b class="news">'+newtit1+'</b></div></a>'      +
'<a href="../blog/'+newnum2+'/" class="news"><div class="news"><img src="../blog/'+newnum2+ '/header.jpeg" class="newsimg"><b class="news">'+newtit2+'</b></div></a>'      +
'<a href="../blog/'+newnum3+'/" class="news"><div class="news"><img src="../blog/'+newnum3+ '/header.jpeg" class="newsimg"><b class="news">'+newtit3+'</b></div></a>'      +
'<a href="../blog/'+newnum4+'/" class="news"><div class="news"><img src="../blog/'+newnum4+ '/header.jpeg" class="newsimg"><b class="news">'+newtit4+'</b></div></a>'      +
  '</div>';
}


foo();
function foo(){
var now = new Date();var year = now.getFullYear();if(year=='2022'){document.querySelector('footer').textContent = '© Copyright 2022 ゆうかず All rights reserved.';}else{document.querySelector('footer').textContent = '© Copyright 2022-'+year+' ゆうかず All rights reserved.';}
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
 
setTimeout('document.getElementById(\'husen\').style.display ="none";',13000);
document.getElementById('husen').innerHTML = '<div class="husen"><img src="./husen/'+husen1+'.png" class="husenimg husenimg1" id="1"><img src="./husen/'+husen2+'.png" class="husenimg husenimg2" id="2"><img src="./husen/'+husen3+'.png" class="husenimg husenimg3" id="3"><img src="./husen/'+husen4+'.png" class="husenimg husenimg4" id="4"><img src="./husen/'+husen5+'.png" class="husenimg husenimg5" id="5"><img src="./husen/'+husen6+'.png" class="husenimg husenimg6" id="6"><img src="./husen/'+husen7+'.png" class="husenimg husenimg7" id="7"><img src="./husen/'+husen8+'.png" class="husenimg husenimg8" id="8"></div><div class="husen"><img src="./husen/'+husen9+'.png" class="husenimg husenimg9" id="9"><img src="./husen/'+husen10+'.png" class="husenimg husenimg10" id="10"><img src="./husen/'+husen11+'.png" class="husenimg husenimg11" id="11"><img src="./husen/'+husen12+'.png" class="husenimg husenimg12" id="12"><img src="./husen/'+husen13+'.png" class="husenimg husenimg13" id="13"><img src="./husen/'+husen14+'.png" class="husenimg husenimg14" id="14"><img src="./husen/'+husen15+'.png" class="husenimg husenimg15" id="15"><img src="./husen/'+husen16+'.png" class="husenimg husenimg16" id="16"></div><div class="husen"><img src="./husen/'+husen17+'.png" class="husenimg husenimg17" id="17"><img src="./husen/'+husen18+'.png" class="husenimg husenimg18" id="18"><img src="./husen/'+husen19+'.png" class="husenimg husenimg19" id="19"><img src="./husen/'+husen20+'.png" class="husenimg husenimg20" id="20"><img src="./husen/'+husen21+'.png" class="husenimg husenimg21" id="21"><img src="./husen/'+husen22+'.png" class="husenimg husenimg22" id="22"><img src="./husen/'+husen23+'.png" class="husenimg husenimg23" id="23"><img src="./husen/'+husen24+'.png" class="husenimg husenimg24" id="24"></div>'

} else {
console.log(today);
}


} else {

     console.log('ない')
}
}


 
    




  
var newskiji = document.getElementById('newskiji');

//日本語
if (newskiji){
  window.setTimeout(write, 3000);
}

  function write(){
 
{  
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
}//ajax本文
{

$(document).ajaxStop(function() {//ajax終わったらすぐに入れる
document.getElementById('lo').remove();
var b = ["https://yukazu211.github.io/blog/", "/"];
for( var i = 1;  i < 5;  i++ ){
document.getElementById('time'+i).textContent = window['newtim'+i][0] +'　'+ window['newtim'+i][1];
document.getElementById('a'+i).href = b[0] + window['newnum'+i] +b[1];
document.getElementById('ti'+i).textContent = window['newtit'+i];
}
});
  
}//日付やタイトルをいれる
    
    
    
    
    
    
    
    
    
    
  }


var enkiji = document.getElementById('enkiji');

//英語


if (enkiji){
  window.setTimeout(ewrite, 3000);
}



    
  function ewrite(){
 
{  
    $.ajax({
      url: "https://yukazu211.github.io/blog/"+newnum1+'/en.html',
      cache: false,
      datatype: "html",
      success: function (html) {
        var html = $(html).find("#content"); 
        $("#n1").append(html); 
      },
    });

    $.ajax({
      url: "https://yukazu211.github.io/blog/"+newnum2+'/en.html',
      cache: false,
      datatype: "html",
      success: function (html) {
        var html = $(html).find("#content"); 
        $("#n2").append(html); 
      },
    });
  
    $.ajax({
      url: "https://yukazu211.github.io/blog/"+newnum3+'/en.html', 
      cache: false,
      datatype: "html",
      success: function (html) {
        var html = $(html).find("#content"); 
        $("#n3").append(html); 
      },
      
    });
      $.ajax({
      url: "https://yukazu211.github.io/blog/"+newnum4+'/en.html', 
      cache: false,
      datatype: "html",
      success: function (html) {
        var html = $(html).find("#content"); 
        $("#n4").append(html); 
      },
    });
}//ajax本文
{

$(document).ajaxStop(function() {//ajax終わったらすぐに入れる
document.getElementById('lo').remove();
var b = ["https://yukazu211.github.io/blog/", "/en.html"];
for( var i = 1;  i < 5;  i++ ){
document.getElementById('time'+i).textContent = window['newtim'+i][0] +'　'+ window['newtim'+i][1];
document.getElementById('a'+i).href = b[0] + window['newnum'+i] +b[1];
document.getElementById('ti'+i).textContent = window['engtit'+i];
}
});
  
}//日付やタイトルをいれる
  }


if(location.href.substr( -7 )=='en.html'){en();} 

function en(){

  
  if(window.matchMedia('(prefers-color-scheme: dark)').matches == true){//OSの色の取得
       document.getElementById('head').innerHTML = '<div class="side-c-d" id="head"> <a href="../blog/" class="he header-c-d"><div class="head-c"><b>NEW ARTICLE</b></div></a><div id="kiji">'+
'<a href="../blog/'+newnum1+'/" class="news-d"><div class="news-d"><img src="../blog/'+newnum1+ '/header.jpeg" class="newsimg"><b class="news-d">'+engtit1+'</b></div></a>'      +
'<a href="../blog/'+newnum2+'/" class="news-d"><div class="news-d"><img src="../blog/'+newnum2+ '/header.jpeg" class="newsimg"><b class="news-d">'+engtit2+'</b></div></a>'      +
'<a href="../blog/'+newnum3+'/" class="news-d"><div class="news-d"><img src="../blog/'+newnum3+ '/header.jpeg" class="newsimg"><b class="news-d">'+engtit3+'</b></div></a>'      +
'<a href="../blog/'+newnum4+'/" class="news-d"><div class="news-d"><img src="../blog/'+newnum4+ '/header.jpeg" class="newsimg"><b class="news-d">'+engtit4+'</b></div></a>'      +
  '</div>';
}else{
  document.getElementById('head').innerHTML = '<div class="side-c" id="head"><a href="../blog/" class="he header-c"> <div class="head-c"><b>NEW ARTICLE</b></div></a><div id="kiji">'+
'<a href="../blog/'+newnum1+'/" class="news"><div class="news"><img src="../blog/'+newnum1+ '/header.jpeg" class="newsimg"><b class="news">'+engtit1+'</b></div></a>'      +
'<a href="../blog/'+newnum2+'/" class="news"><div class="news"><img src="../blog/'+newnum2+ '/header.jpeg" class="newsimg"><b class="news">'+engtit2+'</b></div></a>'      +
'<a href="../blog/'+newnum3+'/" class="news"><div class="news"><img src="../blog/'+newnum3+ '/header.jpeg" class="newsimg"><b class="news">'+engtit3+'</b></div></a>'      +
'<a href="../blog/'+newnum4+'/" class="news"><div class="news"><img src="../blog/'+newnum4+ '/header.jpeg" class="newsimg"><b class="news">'+engtit4+'</b></div></a>'      +
  '</div>';
}
  
  chahref('en.html');
  
  var now = new Date();var year = now.getFullYear();if(year=='2022'){document.querySelector('footer').textContent = '© Copyright 2022 Yukazu All rights reserved.';}else{document.querySelector('footer').textContent = '© Copyright 2022-'+year+' Yukazu All rights reserved.';}
}


function jatoen(){
  document.querySelector('main').innerHTML ="<div class='load'></div><div style='text-z8align:center;''>時間が経っても表示されない場合は、リロードしてください。</div>"
  history.pushState('', 'Yukazu Blog', location+'en.html');
	  var loca = location.href;	
	$.ajax({
    type: 'GET',
    url: loca,
    success: function(data) {
       var t = data.match(/<title>(.*)<\/title>/);
      $("title").html(t[1]); 
    }
});
  
document.querySelector('header').innerHTML = '<h1 class="he"> <a href="./"class="he">Yukazu Blog</a> </h1> <!--   パソコンメニュー --> <nav class="pc-nav"> <ul class="he"> <li><a href="./blog/"class="he">Blog</a></li> <li><a href="https://twitter.com/yukazu211"class="he">Twitter</a></li> <li><a href="https://www.instagram.com/yukazu211/"class="he">Instagram</a></li> <li><a href="https://www.youtube.com/channel/UCSGkQYTVv2UgqtSsq4-o-sg"class="he">YouTube</a></li> </ul> </nav> <!--   スマホ版メニュー --> <div id="sp-icon" class="sp-close"><span class="sanbon"></span></div> <ul id="menu"> <li><a href="./blog/"class="he">Blog</a></li> <li><a href="https://twitter.com/yukazu211"class="he">Twitter</a></li> <li><a href="https://www.instagram.com/yukazu211/"class="he">Instagram</a></li> <li><a href="https://www.youtube.com/channel/UCSGkQYTVv2UgqtSsq4-o-sg"class="he">YouTube</a></li> </ul>'

	

    $.ajax({
      url: loca, 
      cache: false,
      datatype: "html",
      success: function (html) {
        var html = $(html).find("main"); 
        $("main").html(html); 
      },
    });
	
	$( document ).ajaxError(function() {
    window.location.reload();
});
	
  $(document).ajaxStop(function() {
en();
    if(location.href=="https://yukazu211.github.io/blog/en.html"){
         window.location.reload();

    }
});

}

function entoja(){
  var a=location.href;
  var a1=a.replace( 'en.html', '' );
	
	   if(location.href=="https://yukazu211.github.io/blog/"){
       window.location.reload();

    }
  document.querySelector('main').innerHTML ="<div class='load'></div><div style='text-z8align:center;''>時間が経っても表示されない場合は、リロードしてください。</div>"
  history.pushState('', 'ゆうかずのブログ', a1);
	  var loca = location.href;	
	$.ajax({
    type: 'GET',
    url: loca,
    success: function(data) {
       var t = data.match(/<title>(.*)<\/title>/);
      $("title").html(t[1]); 
    }
});
  

document.querySelector('header').innerHTML = '<h1 class="he"> <a href="./"class="he">ゆうかずブログ</a> </h1> <!--   パソコンメニュー --> <nav class="pc-nav"> <ul class="he"> <li><a href="./blog/"class="he">ブログ</a></li> <li><a href="https://twitter.com/yukazu211"class="he">Twitter</a></li> <li><a href="https://www.instagram.com/yukazu211/"class="he">Instagram</a></li> <li><a href="https://www.youtube.com/channel/UCSGkQYTVv2UgqtSsq4-o-sg"class="he">YouTube</a></li> </ul> </nav> <!--   スマホ版メニュー --> <div id="sp-icon" class="sp-close"><span class="sanbon"></span></div> <ul id="menu"> <li><a href="./blog/"class="he">ブログ</a></li> <li><a href="https://twitter.com/yukazu211"class="he">Twitter</a></li> <li><a href="https://www.instagram.com/yukazu211/"class="he">Instagram</a></li> <li><a href="https://www.youtube.com/channel/UCSGkQYTVv2UgqtSsq4-o-sg"class="he">YouTube</a></li> </ul>'

	

    $.ajax({
      url: loca, 
      cache: false,
      datatype: "html",
      success: function (html) {
        var html = $(html).find("main"); 
        $("main").html(html); 
      },
    });
	
	$( document ).ajaxError(function() {
    window.location.reload();
});
	
  $(document).ajaxStop(function() {

    foo();
	  
	if(window.matchMedia('(prefers-color-scheme: dark)').matches == true){//OSの色の取得
	       document.getElementById('head').innerHTML = '<div class="side-c-d" id="head"> <a href="../blog/" class="he header-c-d"><div class="head-c"><b>最新記事</b></div></a><div id="kiji">'+
'<a href="../blog/'+newnum1+'/" class="news-d"><div class="news-d"><img src="../blog/'+newnum1+ '/header.jpeg" class="newsimg"><b class="news-d">'+newtit1+'</b></div></a>'      +
'<a href="../blog/'+newnum2+'/" class="news-d"><div class="news-d"><img src="../blog/'+newnum2+ '/header.jpeg" class="newsimg"><b class="news-d">'+newtit2+'</b></div></a>'      +
'<a href="../blog/'+newnum3+'/" class="news-d"><div class="news-d"><img src="../blog/'+newnum3+ '/header.jpeg" class="newsimg"><b class="news-d">'+newtit3+'</b></div></a>'      +
'<a href="../blog/'+newnum4+'/" class="news-d"><div class="news-d"><img src="../blog/'+newnum4+ '/header.jpeg" class="newsimg"><b class="news-d">'+newtit4+'</b></div></a>'      +
  '</div>';
}else{
document.getElementById('head').innerHTML = '<div class="side-c" id="head"><a href="../blog/" class="he header-c"> <div class="head-c"><b>最新記事</b></div></a><div id="kiji">'+
'<a href="../blog/'+newnum1+'/" class="news"><div class="news"><img src="../blog/'+newnum1+ '/header.jpeg" class="newsimg"><b class="news">'+newtit1+'</b></div></a>'      +
'<a href="../blog/'+newnum2+'/" class="news"><div class="news"><img src="../blog/'+newnum2+ '/header.jpeg" class="newsimg"><b class="news">'+newtit2+'</b></div></a>'      +
'<a href="../blog/'+newnum3+'/" class="news"><div class="news"><img src="../blog/'+newnum3+ '/header.jpeg" class="newsimg"><b class="news">'+newtit3+'</b></div></a>'      +
'<a href="../blog/'+newnum4+'/" class="news"><div class="news"><img src="../blog/'+newnum4+ '/header.jpeg" class="newsimg"><b class="news">'+newtit4+'</b></div></a>'      +
  '</div>';
}  
	  
	    noenhref();
    
 
});


}
function noenhref(){
  var href = document.querySelectorAll('a');
for(var i in href){
	if (href.hasOwnProperty(i)) {
    var href1 = href[i];
    var hrefcut = href1.href.substr( 0, 28 );
    if(hrefcut=='https://yukazu211.github.io/'){
  var a = href1.href.replace( 'en.html', '' );
     
  href1.href = a;
    }
  } 
}
}















document.addEventListener('keyup', keyup_ivent);
	
			function keyup_ivent(e) {
      
      

  
        if(e.target.nodeName=="INPUT"){     
        }else if(e.target.nodeName=="TEXTAREA"){  
        }else if(e.key=="t" || e.key=='1'){
          tran();
        }
        
  }
function tran(){
  var l = location.href;
  if(l.includes('en.html')){
 entoja();
}else{
 jatoen();
}
}
