$(document).ready(function() {
	$('.form-input').on('keyup', '#num-input', function() {
			var grids_num = +$(this).val();
			$('#grids-msg').text(grids_num);
	});	
	$(this).on('click', 'button', function() {
		var grid = +$('.form-input').find('input').val();
		$('.form-input').empty();
		$('#options').show();
		var container$ = $('#container');
		var divsToInsert = [];
		var size = Math.floor( 960 / grid);
		var grids = grid*grid;
		for(var i=0; i<grids; i++) {
			container$.append("<div class='box' style='width:" + size + "px; height:" + size+"px;'></div>");
		};
		boxes$ = $('.box');
		$('#options').on('click', 'input', function() {
			var version = parseInt(selectVersion());
			reset();
			boxes$.unbind('mouseover').mouseover(function() {
				if(version == 1) {
					$(this).addClass('highlight');
				}
				else {
					$(this).toggleClass('highlight');
				}
			})	
		});
		function selectVersion() {
			var radioValue = $("#options input[type='radio']:checked");
			return radioValue.val();
		};
	})
	$(this).on('click', '#reset', reset);
	function reset() {
		if(boxes$.hasClass('highlight') == true) {
			$('.box').removeClass('highlight');
		}
	}
});