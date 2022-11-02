function roclick(){
  
  document.getElementById('ro').innerHTML ='<div class="robot"> <div id="kurukuru"><div class="loader"></div></div> <div class="rohon">私はロボットではありません</div> <div> <img src="https://emoji-img.s3.ap-northeast-1.amazonaws.com/svg/1f375.svg" class="rocha"> </div> </div>';
window.setTimeout(gr, 3900);


}
function gr(){
   document.getElementById('nosub').textContent = ""
document.getElementById('ro').innerHTML ='<div class="robot"><img src="https://yukazu211.github.io/svg/check.svg" class="rosvg"> <div class="rohon">私はロボットではありません</div> <div> <img src="https://emoji-img.s3.ap-northeast-1.amazonaws.com/svg/1f375.svg" class="rocha"> </div> </div>';
  document.getElementById('oksub').innerHTML='<input type="text" name="honeypot" style="display:none"> <input type="hidden" name="accessKey" value="67f746a4-7354-4f3c-b430-3cee5fd14b88"> <input type="hidden" name="subject" value="Contact us from - example.com"> <input type="hidden" name="redirectTo" value="https://yukazu211.github.io/sent"><br> <input type="submit" value="送信" class="submit">';
}

function nosub(){
  document.getElementById('nosub').textContent = "チェックをしてください";
}
