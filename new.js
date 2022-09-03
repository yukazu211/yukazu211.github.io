window.onload = function() {
var newnum1 = "0003"
var newtit1 = "N700系Sが搬入される"
var newnum2 = "0002"
var newtit2 = "身延線に臨時列車が運転"
var newnum3 = "0001"
var newtit3 = "2022年静ｼｽのNG出場まとめ"
var newnum4 = ""
var newtit4 = ""

document.getElementById('head').innerHTML = '<div class="side-c" id="head"> <div class="head-c"><a href="../blog" class="he header-c"><b>最新記事</b></a></div>'+
'<a href="../blog/'+newnum1+'" class="news"><div class="news"><img src="../blog/'+newnum1+ '/header.jpeg" class="newsimg"><b class="news">'+newtit1+'</b></div></a>'      +
'<a href="../blog/'+newnum2+'" class="news"><div class="news"><img src="../blog/'+newnum2+ '/header.jpeg" class="newsimg"><b class="news">'+newtit2+'</b></div></a>'      +
'<a href="../blog/'+newnum3+'" class="news"><div class="news"><img src="../blog/'+newnum3+ '/header.jpeg" class="newsimg"><b class="news">'+newtit3+'</b></div></a>'      +
// '<a href="../blog/'+newnum4+'" class="news"><div class="news"><img src="../blog/'+newnum4+ '/header.jpeg" class="newsimg"><b class="news">'+newtit4+'</b></div></a>'      +
  '</div>';
 var decode = decodeURI(location.href)	  
	  
document.getElementById('url').innerHTML ='<a href="' + decode +'">' + decode + '</a>' + 'は、見つかりませんでした。<br>５秒後にトップページに戻ります。';
}
