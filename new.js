var newnum1 = "0001";
var newtit1 = "2022年静ｼｽのNG出場まとめ";
var engtit1 = "Summary that left the Nagoya Plant in 2022";
var newtim1 = ["2022/08/14", "2022/01/22"];

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






foo();
function foo(){
var now = new Date();var year = now.getFullYear();document.querySelector('footer').textContent = '© Copyright 2022-'+year+' ゆうかず All rights reserved.';
}










 
    

document.getElementById('head').innerHTML = '<div class="side-c" id="head"><a href="../blog/" class="he header-c"> <div class="head-c"><b>最新記事</b></div></a><div id="kiji">'+
'<a href="../blog/'+newnum1+'/" class="news"><div class="news"><img src="../blog/'+newnum1+ '/header.jpeg" class="newsimg"><b class="news">'+newtit1+'</b></div></a>'      +
'<a href="../blog/'+newnum2+'/" class="news"><div class="news"><img src="../blog/'+newnum2+ '/header.jpeg" class="newsimg"><b class="news">'+newtit2+'</b></div></a>'      +
'<a href="../blog/'+newnum3+'/" class="news"><div class="news"><img src="../blog/'+newnum3+ '/header.jpeg" class="newsimg"><b class="news">'+newtit3+'</b></div></a>'      +
'<a href="../blog/'+newnum4+'/" class="news"><div class="news"><img src="../blog/'+newnum4+ '/header.jpeg" class="newsimg"><b class="news">'+newtit4+'</b></div></a>'      +
  '</div>';
  








if(location.href.substr( -7 )=='en.html'){en();} 

function en(){

  
  
       document.getElementById('head').innerHTML = '<div class="side-c" id="head"> <a href="../blog/" class="he header-c"><div class="head-c"><b>NEW ARTICLE</b></div></a><div id="kiji">'+
'<a href="../blog/'+newnum1+'/" class="news"><div class="news"><img src="../blog/'+newnum1+ '/header.jpeg" class="newsimg"><b class="news">'+engtit1+'</b></div></a>'      +
'<a href="../blog/'+newnum2+'/" class="news"><div class="news"><img src="../blog/'+newnum2+ '/header.jpeg" class="newsimg"><b class="news">'+engtit2+'</b></div></a>'      +
'<a href="../blog/'+newnum3+'/" class="news"><div class="news"><img src="../blog/'+newnum3+ '/header.jpeg" class="newsimg"><b class="news">'+engtit3+'</b></div></a>'      +
'<a href="../blog/'+newnum4+'/" class="news"><div class="news"><img src="../blog/'+newnum4+ '/header.jpeg" class="newsimg"><b class="news">'+engtit4+'</b></div></a>'      +
  '</div>';
  
  chahref('en.html');
  
  var now = new Date();var year = now.getFullYear();if(year=='2022'){document.querySelector('footer').textContent = '© Copyright 2022 Yukazu All rights reserved.';}else{document.querySelector('footer').textContent = '© Copyright 2022-'+year+' Yukazu All rights reserved.';}
}


function jatoen(){
  document.querySelector('main').innerHTML ="<div class='load'></div><div style='text-z8align:center;''>時間が経っても表示されない場合は、リロードしてください。</div>"
  history.replaceState('', 'Yukazu Blog', location+'en.html');
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
	history.replaceState('', 'ゆうかずのブログ', a1);
	   if(location.href=="https://yukazu211.github.io/blog/"){
       window.location.reload();

    }
  document.querySelector('main').innerHTML ="<div class='load'></div><div style='text-z8align:center;''>時間が経っても表示されない場合は、リロードしてください。</div>"
  
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
'<a href="../blog/'+newnum1+'/" class="news"><div class="news"><img src="../blog/'+newnum1+ '/header.jpeg" class="newsimg"><b class="news">'+newtit1+'</b></div></a>'      +
'<a href="../blog/'+newnum2+'/" class="news"><div class="news"><img src="../blog/'+newnum2+ '/header.jpeg" class="newsimg"><b class="news">'+newtit2+'</b></div></a>'      +
'<a href="../blog/'+newnum3+'/" class="news"><div class="news"><img src="../blog/'+newnum3+ '/header.jpeg" class="newsimg"><b class="news">'+newtit3+'</b></div></a>'      +
'<a href="../blog/'+newnum4+'/" class="news"><div class="news"><img src="../blog/'+newnum4+ '/header.jpeg" class="newsimg"><b class="news">'+newtit4+'</b></div></a>'      +
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
          // tran();
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
