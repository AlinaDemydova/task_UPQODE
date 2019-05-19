	$(document).ready(function() {
		(function() { $('option:first').css('display', 'none'); })();

		$('.nav-link').click(function(e) {
			$('.nav-link').removeClass('activeMenu');
			$(this).addClass('activeMenu');
		});

		$('.carousel').carousel({
			interval: 1000
		});

		$('#form').validator();
		$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
			if (!$(this).next().hasClass('show')) {
				$(this).parents('.dropdown-menu').first().find('.show').removeClass(
					"show");
			}
			var $subMenu = $(this).next(".dropdown-menu");
			$subMenu.toggleClass('show');
			$(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown',
				function(e) {
					$('.dropdown-submenu .show').removeClass("show");
				});
			return false;
		});
	});

	function activeProgressbar() {
		for (let i = 0; i < $('.progress-bar').length; i++) {
			let progressWidth = (($('.progressbar').width()) * (parseInt($('h6>span:eq(' +
				i + ')').html()))) / 100;
			$('.progress-bar:eq(' + i + ')').animate({ 
				width: '+=' + progressWidth,
				easing: "linear"
				 }, 1000);
		}
		$('h6>span').delay(1000).animate({ 
			opacity: '+=1',
			easing: "easein" }, 1000);
		$('#progressbarContainer').removeAttr('onmouseover');
	}