/*global $*/
function regex_exp($input, $regex){
	var reg = new RegExp($regex);
	if(reg.test($input)){
		return $input;
	}else{
		return $input = '';
	}
}
$(document).ready(function(){
	/*	toggle menu for mobile	*/
	$('.main-nav').click(function(event){
		if($(event.target).is('.main-nav')) 
		$(this).children('ul').toggleClass('is-visible');
	});
	
	
	/*	# navigation handler  */
	$(function(){
	    var newHash     	= "",
	    	baseHeight  	= 0,
	    	re = new RegExp(/(error){1}\d{0,3}/),
	    	$mainContent	= $(".main-content"),
	    	$currentContent = $(""),
	    	$newContent 	= $(""),
	    	$pageWrap		= $("#page-wrap");
	     	
	        
	    $pageWrap.height($pageWrap.height());
	    baseHeight = $pageWrap.height() - $mainContent.height();
	    
	    $("nav").delegate("a", "click", function() {
	        window.location.hash = $(this).attr("href");
	        return false;
	    });
	    
	    $(window).bind('hashchange', function(){
	        newHash = window.location.hash.substring(1);
	        var errorHash = regex_exp(newHash,re);
	        $newContent = $("."+ newHash);
	        $currentContent = $('.content.is-visible');
	       
	        switch (newHash) {
	        	case '':
	        		window.location.hash = 'presentation' ;
	        		break;
	        	case errorHash:
	        		var errornumber = errorHash.slice(5,errorHash.length);
	        		alert('Une erreur du type'+errornumber+'est apparue lors de la navigation' );
	        		break;
	        	default:
	        		$currentContent.fadeOut(200,function(){
	            		$currentContent.toggleClass("is-visible").toggleClass("is-hidden");
	            	});	
	            	$newContent.toggleClass("is-hidden").toggleClass("is-visible").fadeIn(200, function() {
                    	$pageWrap.animate({
                        	height: baseHeight + $mainContent.height() + "px"
                    	});
                	});
					break;
	        }
	        
	    });
	    
	    $(window).trigger('hashchange');
		
	});
	
	var $formula = $("#formula");
	var $matter = $("#matter");
	var $div = $("#formula-img");
	var $form = $("#formulaform");
	$formula.keyup(function(){$form.submit()});
	$matter.change(function(){$form.submit()});
	$form.on("submit", function loadContent() {
		var $selected_matter = $("#matter :selected");
	    var matter = 'Any matters';
	    var formula = 'Any \ formula';
	    if($formula.val() !== ''){
	    	formula = $formula.val();
	    }
	    if($selected_matter.text() !== 'Matter'){
	    	matter = $selected_matter.prevAll('optgroup').attr('label') + ' - ' + $selected_matter.text();
	    }

		$div.find('b').html('Results for <img src=\"https://latex.codecogs.com/gif.latex?'+ formula+'\"/> in ' + matter);
		event.preventDefault();
	});
});