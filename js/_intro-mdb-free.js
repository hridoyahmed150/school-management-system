(function(){
	$('.container-fluid>.row>.panel').on('click',function(){
		var $this=$(this);
		$this.toggleClass('open').delay(400).toggleClass("open-active").siblings().removeClass('open open-active');
	});
	
})();