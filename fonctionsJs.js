function clickService(e){
		$(".info").addClass("hidden");
		if (e.id == "image_interprete") {
			$(".info_interprete").removeClass("hidden");
		} else if (e.id == "image_livre") {
			$(".info_livre").removeClass("hidden");
		} else if (e.id == "image_cuisine") {
			$(".info_cuisine").removeClass("hidden");
		} else if (e.id == "image_cours") {
			$(".info_cours").removeClass("hidden");
		}	
	}

	$(document).ready(function(){
  		$('.bxslider').bxSlider({
			  slideWidth: 2500,
			  adaptiveHeight: true,
			  // AUTO
			  controls: false,
			  responsive: true,
		      auto: true,
			  pause: 2000,
			  autoStart: true,
			  autoDirection: 'next',
			  autoHover: false,
			  autoDelay: 0,
			  slideMargin: 0
		});
		$('.bxfonction').bxSlider({
			  mode: 'vertical',
			  slideWidth: 200,
			  adaptiveHeight: true,
			  // AUTO
			  controls: false,
			  responsive: true,
		      auto: true,
		      pause: 2000,
		      autoStart: true,
		      autoHover: false,
		      autoDelay: 0,
		      pager: false,
			  slideMargin: 0
		});
	});

	function initMap() {
        var uluru = {lat: 48.82696927684297, lng: 2.366030216217041};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }