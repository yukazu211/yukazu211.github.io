

(function( $ ) {
	
	// function sp_open_close
	function sp_open_close() {
		
		if ( $( this ).hasClass( 'sp-close' ) ) {
			
			$( this )
				.removeClass( 'sp-close' )
				.addClass( 'sp-open' );
			
			$( '#menu' ).slideDown( 'fast' );
			
		} else {
			
			$( this )
				.removeClass( 'sp-open' )
				.addClass( 'sp-close' );
			
			$( '#menu' ).slideUp( 'fast' );
			
		}
		
	}
	
	
	
	
	$( '#sp-icon' ).on( 'click', sp_open_close );
	
})( jQuery );
var hiduke=new Date(); 
var month = hiduke.getMonth()+1;
var day = hiduke.getDate();
var today = month+"/"+day;
if (today=="9/4"){
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

