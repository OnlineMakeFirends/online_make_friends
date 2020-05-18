/*
Copyright (c) 2018 
------------------------------------------------------------------
[Master Javascript]

Project:	Lamour  - Responsive HTML Template

-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var lamour = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            };
            /*-------------- Lamour Functions Calling -------------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.RTL();
            this.nav();
            this.custom_select();
            this.slider();
            this.testimonial();
            this.online_member();
            this.blog_slider();
            this.success_stories_slider();
            this.filter1();
            this.filter2();
            this.counter();
            this.rang_slider();
            this.rang_slider2();
            this.rang_slider3();
            this.img_pop();
            this.vid_pop();
            this.chart();
            this.map3();
            this.chat_popup();
            
        },
        /*-------------- Lamour Functions definition -------------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        RTL: function() {
            var rtl_attr = $("html").attr('dir');
            if (rtl_attr) {
                $('html').find('body').addClass("rtl");
            }
        },
		 // Fixed Menu
        nav: function() {
            var windowSize = $(window).width();
            
            if ($(".nav-opener").length) {
            	$(".nav-opener").on("click", function(e) {
            		$(this).toggleClass('active').find('i').toggleClass('fa-bars fa-times');
					$('.main-nav').toggleClass('nav-active');
					$("nav").find(".drop-down").hide();
					e.preventDefault();
				});
            };

             if ($(".online-side-nav").length) {
            	var online_s_n = $('.online-side-nav')
				$(".online-side-nav .nav-btn").on("click", function(e) {
					online_s_n.toggleClass('hide-user');
					e.preventDefault();
				});
					
				if (windowSize < 1200) {
				 	online_s_n.addClass('hide-user');
				}

            };

            if(windowSize < 992 ) {
                $("nav").find(".drop-down").hide();
                $("nav").on("click", ".drop", function() {
                    $(this).children(".drop-down").slideToggle();
                });
            };

        },



		// select
        custom_select: function() {
        	if ($('select').length) {
			   $('select').niceSelect();
			}
        },

		//Banner Slider
        slider: function() {
        	if ($("#slider").length) {
        		var slider = $('#slider');
        		$('#slider').owlCarousel({
					margin:0,
					loop:true,
					nav:true,
					center: true,
					dots: false,
					autoplayTimeout: 8000,
        			autoplaySpeed: 1000,
					autoplay:true,
					autoplayHoverPause:false,
					navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>' ],
					items:1
				});

			  // add animate.css class(es) to the elements to be animated
              function setAnimation ( _elem, _InOut ) {
                // Store all animationend event name in a string.
                // cf animate.css documentation
                var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

                _elem.each ( function () {
                  var $elem = $(this);
                  var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

                  $elem.addClass($animationType).one(animationEndEvent, function () {
                    $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
                  });
                });
              }

            // Fired before current slide change
              slider.on('change.owl.carousel', function(event) {
                  var $currentItem = $('.owl-item', slider).eq(event.item.index);
                  var $elemsToanim = $currentItem.find("[data-animation-out]");
                  setAnimation ($elemsToanim, 'out');
              });

            // Fired after current slide has been changed
              var round = 0;
              slider.on('changed.owl.carousel', function(event) {

                  var $currentItem = $('.owl-item', slider).eq(event.item.index);
                  var $elemsToanim = $currentItem.find("[data-animation-in]");
                
                  setAnimation ($elemsToanim, 'in');
              })
              
              slider.on('translated.owl.carousel', function(event) {
                // console.log (event.item.index, event.page.count);
                
                  if (event.item.index == (event.page.count - 1))  {
                    if (round < 1) {
                      round++
                      // console.log (round);
                    } else {
                      slider.trigger('stop.owl.autoplay');
                      var owlData = slider.data('owl.carousel');
                      owlData.settings.autoplay = false; //don't know if both are necessary
                      owlData.options.autoplay = false;
                      slider.trigger('refresh.owl.carousel');
                    }
                  }
              });

        	}
        },
		
        // testimonial
        testimonial: function() {
        	if ($(".testimonial").length) {
        		$('.testimonial').owlCarousel({
					margin:30,
					loop:true,
					nav:false,
					dots: false,
					autoplay:true,
					navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>' ],
					responsive:{
				    	0:{
				    	    items:1
				    	},
				        400:{
				            items:1
				        },
				        600:{
				            items:2
				        },
				        1000:{
				            items:3
				        }
				    }
				});
        	};


        },
        // testimonial
        online_member: function() {
        	if ($(".online-members-slider").length) {
        		$('.online-members-slider').owlCarousel({
					loop: true,
					nav:false,
					dots: false,
			        margin: 30,
			        autoplay: true,
			        slideTransition: 'linear',
			        autoplayTimeout: 3000,
			        autoplaySpeed: 3000,
			        autoplayHoverPause: false,
			        responsive:{
					    	0:{
					    	    items:2
					    	},
					        480:{
					            items:3
					        },
					        640:{
					            items:4
					        },
					        992:{
					            items:3
					        },
					        1000:{
					            items:3
					        },
					        1200:{
					            items:4
					        }
					    }
				});
        	}


        },
        // Blog_slider
        blog_slider: function() {
        	if ($(".blog_slider").length) {
        		$('.blog_slider').owlCarousel({
					margin:30,
					loop:true,
					nav:false,
					dots: false,
					autoplay:true,
					responsive:{
				    	0:{
				    	    items:1
				    	},
				        400:{
				            items:1
				        },
				        600:{
				            items:2
				        }
				    }
				});
        	}


        },
        // success-stories-slider
        success_stories_slider: function() {
        	if ($(".success-stories-slider").length) {
        		$('.success-stories-slider').owlCarousel({
					margin:0,
					loop:true,
					item:6,
					nav:false,
					dots: false,
					autoplayTimeout: 5000,
			        autoplaySpeed: 2000,
					autoplay:true,
					responsive:{
				    	0:{
				    	    items:1
				    	},
				        400:{
				            items:2
				        },
				        768:{
				            items:3
				        },
				        1000:{
				            items:4
				        },
				        1200:{
				            items:5
				        },
				        1600:{
				            items:6
				        }
				    }
				});

        	}


        },
		// MixItUp1
        filter1: function() {
        	if ($(".online-member").length) {
        		 $('#MixItUp1').mixItUp({
				    selectors: {
				      filter: '.filter-1',
				      sort: '.sort-1'
				    }
				  });
        	}


        },
		// list-grid
        filter2: function() {
        	if ($(".list-grid").length) {

        		var  v1 = $('.list-btn');
        		var  v2 = $('.custom-contaier');
        		var  v3 = $('.grid-btn');
        		
        		 $('#MixItUp2').mixItUp({
				    selectors: {
				      filter: '.filter-2',
				      target: '.mix',
				    }
				  });

        		 v1.on("click", function(e) {
					$(v2).removeClass('l-view');
					$(v3).removeClass('active');
					$(this).addClass('active');
					e.preventDefault();
					
				});

        		 v3.on("click", function(e) {
					$(v2).addClass('l-view');
					$(v1).removeClass('active');
					$(this).addClass('active');
					e.preventDefault();
					
				});

        	}


        },
		// counter
        counter: function() {
        	if ($(".counter").length) {
				$('.counter').each(function (index) {
		     var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
		    $(this).prop('Counter', 0).animate({
		      Counter: $(this).text()
		    }, {
		      duration: 5000,
		      step: function (now) {
		         $(this).text(parseFloat(now).toFixed(size));
		      }
		    });
		 });
			}


			var animateButton = function(e) {

			  e.preventDefault;
			  //reset animation
			  e.target.classList.remove('animate');
			  
			  e.target.classList.add('animate');
			  setTimeout(function(){
			    e.target.classList.remove('animate');
			  },700);
			};

			var bubblyButtons = document.getElementsByClassName("bubbly-button");

			for (var i = 0; i < bubblyButtons.length; i++) {
			  bubblyButtons[i].addEventListener('mouseover', animateButton, false);
			}
        },
		
		// range_1
        rang_slider: function() {
        	if ($('#range_1').length) {
	            var $range = $("#range_1"),
	                $result = $("#result_1");

	            var track = function () {
	                var $this = $(this),
	                    from = $this.data("from"),
	                    to = $this.data("to");

	                $result.html(from + " - " + to);
	            };

	            $range.ionRangeSlider({
	                type: "double",
	                min: 16,
	                max: 35,
	                from: 18,
	                to: 25
	            });

	            $range.on("change", track);
            	
        	}
        },
        // range_2
        rang_slider2: function() {
        	if ($('#range_2').length) {
	            var $range = $("#range_2"),
	                $result = $("#result_2");

	            var track = function () {
	                var $this = $(this),
	                    from = $this.data("from"),
	                    to = $this.data("to");

	                $result.html(from + " - " + to);
	            };

	            $range.ionRangeSlider({
	                type: "double",
	                min: 16,
	                max: 35,
	                from: 18,
	                to: 25
	            });

	            $range.on("change", track);
            	
        	}
        },
        // range_3
        rang_slider3: function() {
        	if ($('#range_3').length) {
	            var $range = $("#range_3"),
	                $result = $("#result_3");

	            var track = function () {
	                var $this = $(this),
	                    from = $this.data("from"),
	                    to = $this.data("to");

	                $result.html(from + " - " + to);
	            };

	            $range.ionRangeSlider({
	                type: "double",
	                min: 30,
	                max: 120,
	                from: 40,
	                to: 80
	            });

	            $range.on("change", track);
            	
        	}
        },
        // img_pop
        img_pop: function() {
        	if ($('.img-pop').length) {
	             $('.img-pop').magnificPopup({
		  			type:'image',
		  			mainClass: 'mfp-with-zoom',
                	gallery: {
                    enabled: true,
                },
                zoom: {
                    enabled: true,
                    duration: 400,
                    easing: 'ease-in-out',
                    opener: function(openerElement) {
                        return openerElement.is('a') ? openerElement : openerElement.find('img');
                    }
                },
            });

				
            	
        	}
        },
        // vid_pop
        vid_pop: function() {
        	if ($('.video').length) {
             $('.video').magnificPopup({
				  disableOn: 700,
				  type: 'iframe',
				  mainClass: 'mfp-with-zoom',
				  removalDelay: 300,
				  preloader: false,
				  fixedContentPos: false,
				  zoom: {
							enabled: true,
							duration: 400,
							easing: 'ease-in-out',
							opener: function(openerElement) {
								return openerElement.is('a') ? openerElement : openerElement.find('img');
							}
						}
				});
         	}
        },
        
        // img_scroll
        chart: function() {
	        if ($('#chart').length) {
	        	var data = {
				  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
				  datasets: [{
				    label: "Our History",
				    backgroundColor: "rgba(253,184,19,1)",
				    borderColor: "rgba(253,184,19,1)",
				    borderWidth: 2,
				    data: [65, 59, 20, 81, 56, 55, 40],
				    hoverBackgroundColor: "rgba(240,81,81,1)",
				    hoverBorderColor: "rgba(240,81,81,1)",
				  }]
				};

				var options = {
				  maintainAspectRatio: false,
				  scales: {
				    yAxes: [{
				      stacked: true,
				      gridLines: {
				        display: true,
				        color: "rgba(255,99,132,0)"
				      }
				    }],
				    xAxes: [{
				      gridLines: {
				        display: false
				      }
				    }]
				  }
				};

				
				 $("#chart").appear(function() {
					setTimeout(function(){
						Chart.Bar('chart', {
						  options: options,
						  data: data
						});
					}, 500);
				});
	        }

        },// img_scroll
        
        map3: function() {
        	if ($('#map3').length) {

        		var styledMapType = new google.maps.StyledMapType(
		            [
					    {
					        "featureType": "all",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "color": "#f5f5f5"
					            }
					        ]
					    },
					    {
					        "featureType": "all",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "color": "#616161"
					            }
					        ]
					    },
					    {
					        "featureType": "all",
					        "elementType": "labels.text.stroke",
					        "stylers": [
					            {
					                "color": "#f5f5f5"
					            }
					        ]
					    },
					    {
					        "featureType": "all",
					        "elementType": "labels.icon",
					        "stylers": [
					            {
					                "visibility": "off"
					            }
					        ]
					    },
					    {
					        "featureType": "administrative.neighborhood",
					        "elementType": "geometry.fill",
					        "stylers": [
					            {
					                "visibility": "off"
					            },
					            {
					                "color": "#b0b0b0"
					            }
					        ]
					    },
					    {
					        "featureType": "administrative.neighborhood",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "color": "#b9b9b9"
					            },
					            {
					                "saturation": "0"
					            }
					        ]
					    },
					    {
					        "featureType": "administrative.land_parcel",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "color": "#848484"
					            }
					        ]
					    },
					    {
					        "featureType": "poi",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "color": "#eeeeee"
					            }
					        ]
					    },
					    {
					        "featureType": "poi",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "hue": "#0075ff"
					            }
					        ]
					    },
					    {
					        "featureType": "poi",
					        "elementType": "labels.icon",
					        "stylers": [
					            {
					                "visibility": "on"
					            },
					            {
					                "hue": "#0075ff"
					            },
					            {
					                "saturation": "-27"
					            },
					            {
					                "lightness": "16"
					            }
					        ]
					    },
					    {
					        "featureType": "poi.business",
					        "elementType": "geometry.fill",
					        "stylers": [
					            {
					                "visibility": "on"
					            }
					        ]
					    },
					    {
					        "featureType": "poi.business",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "visibility": "on"
					            },
					            {
					                "color": "#001d5e"
					            }
					        ]
					    },
					    {
					        "featureType": "poi.business",
					        "elementType": "labels.icon",
					        "stylers": [
					            {
					                "visibility": "on"
					            },
					            {
					                "hue": "#0075ff"
					            }
					        ]
					    },
					    {
					        "featureType": "poi.park",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "color": "#e5e5e5"
					            }
					        ]
					    },
					    {
					        "featureType": "poi.park",
					        "elementType": "geometry.fill",
					        "stylers": [
					            {
					                "color": "#99d8a6"
					            }
					        ]
					    },
					    {
					        "featureType": "poi.park",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "color": "#9e9e9e"
					            }
					        ]
					    },
					    {
					        "featureType": "road",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "color": "#ffffff"
					            }
					        ]
					    },
					    {
					        "featureType": "road",
					        "elementType": "geometry.fill",
					        "stylers": [
					            {
					                "visibility": "on"
					            }
					        ]
					    },
					    {
					        "featureType": "road",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "visibility": "on"
					            },
					            {
					                "color": "#9b9b9b"
					            }
					        ]
					    },
					    {
					        "featureType": "road.highway",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "color": "#dadada"
					            }
					        ]
					    },
					    {
					        "featureType": "road.highway",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "color": "#616161"
					            }
					        ]
					    },
					    {
					        "featureType": "road.arterial",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "color": "#757575"
					            }
					        ]
					    },
					    {
					        "featureType": "road.local",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "color": "#9e9e9e"
					            }
					        ]
					    },
					    {
					        "featureType": "transit.line",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "color": "#e5e5e5"
					            }
					        ]
					    },
					    {
					        "featureType": "transit.station",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "color": "#eeeeee"
					            }
					        ]
					    },
					    {
					        "featureType": "water",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "color": "#c9c9c9"
					            }
					        ]
					    },
					    {
					        "featureType": "water",
					        "elementType": "geometry.fill",
					        "stylers": [
					            {
					                "color": "#91abd0"
					            },
					            {
					                "saturation": "-21"
					            },
					            {
					                "lightness": "16"
					            }
					        ]
					    },
					    {
					        "featureType": "water",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "color": "#9e9e9e"
					            }
					        ]
					    }
					],
		            {name: 'Styled Map'});
		            
		        var mapCenter =  {lat: 40.066074, lng: -74.179152};
		        var myLatLng1 =  {lat: 40.066074, lng: -74.179152};


		        var map = new google.maps.Map(document.getElementById('map3'), {
		          zoom: 10,
		          center: mapCenter,
		          mapTypeControlOptions: {
		            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
		                         'styled_map']
		          }
		        });
		        
		        
		        //Associate the styled map with the MapTypeId and set it to display.
		        map.mapTypes.set('styled_map', styledMapType);
		        map.setMapTypeId('terrain');
				
			   var for_boy = '<div class="m-content">'+
	            '<div class="m-img">'+
	            '<img src="images/bboy.jpg" class="img-responsive">'+
	            '</div>'+
	            '<div class="bodyContent">'+
	            '<h1 class="firstHeading">John Deo</h1>'+
	            '<h3 class="secondHeading">M / 22 / Philippines</h3>'+
	            '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
	            '</p>'+
	            '<a href="#" class="c-btn btn5">'+
	            'Contact</a> '+
	            '</div>'+
	            '</div>';




		        var infowindow = new google.maps.InfoWindow({
		          content: for_boy,
		          maxWidth: 500
		        });

		        
		        // marker style for girl
				var marker1 = new google.maps.Marker({
				          position: myLatLng1,
				          map: map,
				          title: 'Tenma Shyna',
				          icon: 'images/mrk.png'
				        });
		        

				marker1.addListener('click', function() {
		          infowindow.open(map, marker1);
		        });

		        

        	} //  #map3
        },

        chat_popup: function () {
        	  var arr = []; // List of users 
 
				$(document).on('click', '.msg_head .u_name', function() { 
					  var chatbox = $(this).parents().parents().attr("rel") ;
					  $('[rel="'+chatbox+'"] .msg_wrap').slideToggle('slow');
					  return false;
				});
				 
				 
				$(document).on('click', '.close', function() { 
					  var chatbox = $(this).parents().parents().attr("rel") ;
					  $('[rel="'+chatbox+'"]').hide();
					  arr.splice($.inArray(chatbox, arr), 1);
					  displayChatBox();
					  return false;
				});
				 
				$(document).on('click', '.sidebar-user-box', function() {
					var userImg = $(this).find('img').attr("src");
					var userID = $(this).attr("id");
					var username = $(this).children().text() ;


					if ($.inArray(userID, arr) != -1) {
						arr.splice($.inArray(userID, arr), 1);
					};

					arr.unshift(userID);
					var chatPopup =  '<div class="msg_box" style="right:270px" rel="'+ userID+'">'+
					'<div class="msg_head"><a href="#"><img src="'+ userImg+'" class="img-circle img-responsive"></a><span class="u_name"> '+username +
					'</span><div class="close">x</div> </div>'+
					'<div class="msg_wrap"> <div class="msg_body"> <div class="msg_push"></div> </div>'+
					'<div class="msg_footer text-block"><input type="text" placeholder="Type and hit enter" class="msg_input form-control"><span class="send-msg-btn"><i class="fa fa-paper-plane-o"></i></span></div></div></div>';     

					$("body").append(chatPopup);
					displayChatBox();
				});
				 
				 
				 $(document).on('keypress', 'input.msg_input' , function(e) {
					    if (e.keyCode == 13 ) {   
					       var msg = $(this).val();  
						   $(this).val('');
						   if(msg.trim().length != 0){    
							   var chatbox = $(this).parents().parents().parents().attr("rel") ;
							   $('<div class="msg-right">'+msg+'</div>').insertBefore('[rel="'+chatbox+'"] .msg_push');
							   $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
						   }
					   }
				 });


				 $(document).on('click', '.send-msg-btn' , function(e) {
					   var msg = $(this).parent().find('.msg_input').val();
					   $(this).parent().find('.msg_input').val('');
					   if(msg.trim().length != 0){    
						   var chatbox = $(this).parents().parents().parents().attr("rel") ;
						   $('<div class="msg-right">'+msg+'</div>').insertBefore('[rel="'+chatbox+'"] .msg_push');
						   $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
					   }
					   
				 });
				 
				  
				    
				 function displayChatBox(){ 
					  var i = 270, // start position
					  	  j = 260;  //next position
					  var window_w = $(window).width();
					  $.each( arr, function( index, value ) {
					    if (window_w < 768) {
					     if(index < 1){
					          $('[rel="'+value+'"]').css("left",i-250);
					          $('[rel="'+value+'"]').show();
					          i = i+j; 
					         }
					     else{
					          $('[rel="'+value+'"]').hide();
					     }
					  }else if(window_w < 1300){
					    if(index < 2){
					          $('[rel="'+value+'"]').css("right",i);
					          $('[rel="'+value+'"]').show();
					          
					          i = i+j; 
					          
					      }
					      else{
					          $('[rel="'+value+'"]').hide();
					     }
					    } else{
					      if(index < 4){
					          $('[rel="'+value+'"]').css("right",i);
					          $('[rel="'+value+'"]').show();
					          i = i+j; 
					            
					      }
					       else{
					          $('[rel="'+value+'"]').hide();
					      }
					    }
					  });  
				 };
        }
        	 
    };
    $(document).ready(function() {
        lamour.init();
    });



    // Map
    function initMap() {


     	var styledMapType = new google.maps.StyledMapType(
		            [
					    {
					        "featureType": "all",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "color": "#f5f5f5"
					            },
					            
					        ]
					    },
					    {
					        "featureType": "all",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "color": "#616161"
					            }
					        ]
					    },
					    {
					        "featureType": "all",
					        "elementType": "labels.text.stroke",
					        "stylers": [
					            {
					                "color": "#f5f5f5"
					            }
					        ]
					    },
					    {
					        "featureType": "all",
					        "elementType": "labels.icon",
					        "stylers": [
					            {
					                "visibility": "off"
					            }
					        ]
					    },
					    {
					        "featureType": "administrative.neighborhood",
					        "elementType": "geometry.fill",
					        "stylers": [
					            {
					                "visibility": "off"
					            },
					            {
					                "color": "#b0b0b0"
					            }
					        ]
					    },
					    {
					        "featureType": "administrative.neighborhood",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "color": "#b9b9b9"
					            },
					            {
					                "saturation": "0"
					            }
					        ]
					    },
					    {
					        "featureType": "administrative.land_parcel",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "color": "#848484"
					            }
					        ]
					    },
					    {
					        "featureType": "poi",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "color": "#eeeeee"
					            }
					        ]
					    },
					    {
					        "featureType": "poi",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "hue": "#0075ff"
					            }
					        ]
					    },
					    {
					        "featureType": "poi",
					        "elementType": "labels.icon",
					        "stylers": [
					            {
					                "visibility": "on"
					            },
					            {
					                "hue": "#0075ff"
					            },
					            {
					                "saturation": "-27"
					            },
					            {
					                "lightness": "16"
					            }
					        ]
					    },
					    {
					        "featureType": "poi.business",
					        "elementType": "geometry.fill",
					        "stylers": [
					            {
					                "visibility": "on"
					            }
					        ]
					    },
					    {
					        "featureType": "poi.business",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "visibility": "on"
					            },
					            {
					                "color": "#001d5e"
					            }
					        ]
					    },
					    {
					        "featureType": "poi.business",
					        "elementType": "labels.icon",
					        "stylers": [
					            {
					                "visibility": "on"
					            },
					            {
					                "hue": "#0075ff"
					            }
					        ]
					    },
					    {
					        "featureType": "poi.park",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "color": "#e5e5e5"
					            }
					        ]
					    },
					    {
					        "featureType": "poi.park",
					        "elementType": "geometry.fill",
					        "stylers": [
					            {
					                "color": "#99d8a6"
					            }
					        ]
					    },
					    {
					        "featureType": "poi.park",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "color": "#9e9e9e"
					            }
					        ]
					    },
					    {
					        "featureType": "road",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "color": "#ffffff"
					            }
					        ]
					    },
					    {
					        "featureType": "road",
					        "elementType": "geometry.fill",
					        "stylers": [
					            {
					                "visibility": "on"
					            }
					        ]
					    },
					    {
					        "featureType": "road",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "visibility": "on"
					            },
					            {
					                "color": "#9b9b9b"
					            }
					        ]
					    },
					    {
					        "featureType": "road.highway",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "color": "#dadada"
					            }
					        ]
					    },
					    {
					        "featureType": "road.highway",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "color": "#616161"
					            }
					        ]
					    },
					    {
					        "featureType": "road.arterial",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "color": "#757575"
					            }
					        ]
					    },
					    {
					        "featureType": "road.local",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "color": "#9e9e9e"
					            }
					        ]
					    },
					    {
					        "featureType": "transit.line",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "color": "#e5e5e5"
					            }
					        ]
					    },
					    {
					        "featureType": "transit.station",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "color": "#eeeeee"
					            }
					        ]
					    },
					    {
					        "featureType": "water",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "color": "#c9c9c9"
					            }
					        ]
					    },
					    {
					        "featureType": "water",
					        "elementType": "geometry.fill",
					        "stylers": [
					            {
					                "color": "#91abd0"
					            },
					            {
					                "saturation": "-21"
					            },
					            {
					                "lightness": "16"
					            }
					        ]
					    },
					    {
					        "featureType": "water",
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "color": "#9e9e9e"
					            }
					        ]
					    }
					],
		            {name: 'Styled Map'});
		var styledMapType2 = new google.maps.StyledMapType(
		            [
					    {
					        "stylers": [
					            {
					                "visibility": "simplified"
					            }
					        ]
					    },
					    {
					        "stylers": [
					            {
					                "color": "#131314"
					            }
					        ]
					    },
					    {
					        "featureType": "water",
					        "stylers": [
					            {
					                "color": "#131313"
					            },
					            {
					                "lightness": 7
					            }
					        ]
					    },
					    {
					        "elementType": "labels.text.fill",
					        "stylers": [
					            {
					                "visibility": "on"
					            },
					            {
					                "lightness": 25
					            }
					        ]
					    }
					],
		            {name: 'Styled Map2'});
		var map;
	    var bounds = new google.maps.LatLngBounds();
	    var mapOptions = {
	        zoom: 13,
	        center: mapCenter,
	        mapTypeControlOptions: {
	            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
	                         'styled_map']
	        }
		};
	    var mapOptions2 = {
        	zoom: 14,
	        center: mapCenter,
	        mapTypeControlOptions: {
	        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
	                         'styled_map']
	        }
	    };

		var mapCenter =  {lat: 41.434068, lng: -73.967587};
	                    
	    // Display a map on the web page
	    if ($("#map2").length) {
	    	map = new google.maps.Map(document.getElementById("map2"), mapOptions);
			//Associate the styled map with the MapTypeId and set it to display.
	        map.mapTypes.set('styled_map', styledMapType);
	        map.setMapTypeId('styled_map');
	    };
	    if ($("#map1").length) {
	    	map = new google.maps.Map(document.getElementById("map1"), mapOptions2);
	    	//Associate the styled map with the MapTypeId and set it to display.
	        map.mapTypes.set('styled_map', styledMapType);
	        map.setMapTypeId('styled_map');
	    };
	    if ($("#map4").length) {
	    	map = new google.maps.Map(document.getElementById("map4"), mapOptions2);
	    	//Associate the styled map with the MapTypeId and set it to display.
	        map.mapTypes.set('styled_map', styledMapType2);
	        map.setMapTypeId('styled_map');
	    };
	    
		        
		// Multiple markers location, latitude, and longitude
	    var markers = [
	        ['John Deo', 41.434068, -73.967587, 'images/boy.png'],
			['John Deo', 41.427698, -73.991361, 'images/boy.png'],
			['John Deo', 41.416178, -73.990246, 'images/boy.png'],
			['John Deo', 41.413281, -73.978573, 'images/boy.png'],
			['John Deo', 41.426540, -73.960548, 'images/boy.png'],
			['John Deo', 41.420426, -73.961407, 'images/boy.png'],
			['John Deo', 41.442390, -73.929134, 'images/boy.png'],
			['John Deo', 41.440192, -74.020587, 'images/boy.png'],
			['John Deo', 41.446003, -73.944712, 'images/boy.png'],
			['John Deo', 41.425303, -73.920680, 'images/boy.png'],
			['John Deo', 41.414361, -74.040843, 'images/boy.png'],
			['John Deo', 41.452327, -73.886176, 'images/boy.png'],
			['John Deo', 41.415282, -73.954154, 'images/boy.png'],
			['John Deo', 41.455049, -73.988658, 'images/boy.png'],  // 14 girls
			['Tenma Shyna', 41.417729, -73.974364, 'images/grl.png'],
			['Tenma Shyna', 41.425263, -73.991361, 'images/grl.png'],
			['Tenma Shyna', 41.416638, -73.983980, 'images/grl.png'],
			['Tenma Shyna', 41.411296, -73.970505, 'images/grl.png'],
			['Tenma Shyna', 41.420629, -73.951021, 'images/grl.png'],
			['Tenma Shyna', 41.428223, -73.946300, 'images/grl.png'],
			['Tenma Shyna', 41.429381, -73.917375, 'images/grl.png'],
			['Tenma Shyna', 41.438776, -73.919092, 'images/grl.png'],
			['Tenma Shyna', 41.452496, -74.024535, 'images/grl.png'],
			['Tenma Shyna', 41.445548, -73.937846, 'images/grl.png'],
			['Tenma Shyna', 41.450824, -73.974410, 'images/grl.png'],
			['Tenma Shyna', 41.442331, -73.899909, 'images/grl.png'],
			['Tenma Shyna', 41.427789, -73.922568, 'images/grl.png'],
			['Tenma Shyna', 41.428107, -73.958833, 'images/grl.png'],
			['Tenma Shyna', 41.409719, -74.008958, 'images/grl.png']
	    ];


	    // Info window content
	    var infoWindowContent = [
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bboy.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">John Deo</h1>'+
				    '<h3 class="secondHeading">M / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bboy.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">John Deo</h1>'+
				    '<h3 class="secondHeading">M / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bboy.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">John Deo</h1>'+
				    '<h3 class="secondHeading">M / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bboy.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">John Deo</h1>'+
				    '<h3 class="secondHeading">M / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bboy.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">John Deo</h1>'+
				    '<h3 class="secondHeading">M / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bboy.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">John Deo</h1>'+
				    '<h3 class="secondHeading">M / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bboy.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">John Deo</h1>'+
				    '<h3 class="secondHeading">M / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bboy.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">John Deo</h1>'+
				    '<h3 class="secondHeading">M / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bboy.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">John Deo</h1>'+
				    '<h3 class="secondHeading">M / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bboy.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">John Deo</h1>'+
				    '<h3 class="secondHeading">M / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bboy.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">John Deo</h1>'+
				    '<h3 class="secondHeading">M / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bboy.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">John Deo</h1>'+
				    '<h3 class="secondHeading">M / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bboy.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">John Deo</h1>'+
				    '<h3 class="secondHeading">M / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bboy.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">John Deo</h1>'+
				    '<h3 class="secondHeading">M / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],


				// End boy infoWindowContent
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bgrl1.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">Tenma Shyna</h1>'+
				    '<h3 class="secondHeading">F / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bgrl1.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">Tenma Shyna</h1>'+
				    '<h3 class="secondHeading">F / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bgrl1.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">Tenma Shyna</h1>'+
				    '<h3 class="secondHeading">F / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bgrl1.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">Tenma Shyna</h1>'+
				    '<h3 class="secondHeading">F / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bgrl1.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">Tenma Shyna</h1>'+
				    '<h3 class="secondHeading">F / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bgrl1.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">Tenma Shyna</h1>'+
				    '<h3 class="secondHeading">F / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bgrl1.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">Tenma Shyna</h1>'+
				    '<h3 class="secondHeading">F / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bgrl1.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">Tenma Shyna</h1>'+
				    '<h3 class="secondHeading">F / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bgrl1.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">Tenma Shyna</h1>'+
				    '<h3 class="secondHeading">F / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bgrl1.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">Tenma Shyna</h1>'+
				    '<h3 class="secondHeading">F / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bgrl1.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">Tenma Shyna</h1>'+
				    '<h3 class="secondHeading">F / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bgrl1.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">Tenma Shyna</h1>'+
				    '<h3 class="secondHeading">F / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bgrl1.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">Tenma Shyna</h1>'+
				    '<h3 class="secondHeading">F / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bgrl1.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">Tenma Shyna</h1>'+
				    '<h3 class="secondHeading">F / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				],
				[	'<div class="m-content">'+
				    '<div class="m-img">'+
				    '<img src="images/bgrl1.jpg" class="img-responsive">'+
				    '</div>'+
				    '<div class="bodyContent">'+
				    '<h1 class="firstHeading">Tenma Shyna</h1>'+
				    '<h3 class="secondHeading">F / 22 / Philippines</h3>'+
				    '<p class="m-txt">There&apos;s tons of singles. We&apos;re one ofthe biggest dating sites on earth, andit&apos;s all totally.'+
				    '</p>'+
				    '<a href="#" class="c-btn btn5">'+
				    'Contact</a> '+
				    '</div>'+
				    '</div>'
				]

	    	];
	        
	    // Add multiple markers to map
		var window_width = $(window).width();
		
		if (window_width < 1200) {
			var infoWindow = new google.maps.InfoWindow({maxWidth: 210}), marker, i;
		} else {
			var infoWindow = new google.maps.InfoWindow({maxWidth: 500}), marker, i;
		}


	    // Place each marker on the map  
	    for( i = 0; i < markers.length; i++ ) {
	        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
	        bounds.extend(position);
	        marker = new google.maps.Marker({
	            position: position,
	            map: map,
	            icon: markers[i][3],
	            title: markers[i][0]
	        });
	        
	        // Add info window to marker    
	        google.maps.event.addListener(marker, 'click', (function(marker, i) {
	            return function() {
	                infoWindow.setContent(infoWindowContent[i][0]);
	                infoWindow.open(map, marker);
	            }
	        })(marker, i));

	        // Center the map to fit all markers on the screen
	        map.fitBounds(bounds);
	    }

	    // custom css marker
        function HTMLMarker(lat,lng){
	        this.lat = lat;
	        this.lng = lng;
	        this.pos = new google.maps.LatLng(lat,lng);
	    }

        HTMLMarker.prototype = new google.maps.OverlayView();
		HTMLMarker.prototype.onRemove= function(){}

        //init your html element here
	    HTMLMarker.prototype.onAdd= function(){
	        var newDiv = document.createElement("div");
	        newDiv.className = "arrow_box";
	      	newDiv.innerHTML = "<div class='pulse'><div class='pulse1'><div class='pulse2'><img src='images/grl.png'></div></div></div>";
	        var panes = this.getPanes();
	        panes.overlayImage.appendChild(newDiv);
	    }
	    
	    HTMLMarker.prototype.draw = function(){
	        var overlayProjection = this.getProjection();
	        var position = overlayProjection.fromLatLngToDivPixel(this.pos);
	        var panes = this.getPanes();
	        panes.overlayImage.style.left = position.x + 'px';
	        panes.overlayImage.style.top = position.y - 30 + 'px';
	    }

        //to use it
	    var htmlMarker = new HTMLMarker(41.417729, -73.974364);
	    htmlMarker.setMap(map);
	    // End custom css marker

	    // Set zoom level
	    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
	        this.setZoom(14);
	        google.maps.event.removeListener(boundsListener);
	    });
	    
	};


    //On load
    $(window).on('load', function() {

        $('body').addClass('load');

		var width_1 = $(window).width();
        var width_2 = $(window).height();

        if (width_1 > width_2) {
        	$('.loader_wrapper').css({
			   'width' : width_1,
			   'height': width_1
			});
        } else {
        	$('.loader_wrapper').css({
			   'width' : width_2,
			   'height': width_2
			});
        };
        $('.loader_wrapper').addClass('slide_top');

		// map int
	    if ($('.map-section').length) {
	    	initMap();
	    };


	    // Snooz
	    if ($('#sky').length) {
		    //get the cancvas and context and store in vars
			  var canvas = document.getElementById("sky");
			  var ctx = canvas.getContext("2d");

			  //set canvas dims to window height and width
			  var W = window.innerWidth;
			  var H = window.innerHeight;
			  canvas.width = W;
			  canvas.height = H;

			  //generate the snowflakes and apply attributes
			  var mf = 100; //max flakes
			  var flakes = [];

			  //loop throught the empty flakes and apply attributes
			  for(var i = 0; i < mf; i++)
			  {
			    flakes.push({
			      x: Math.random()*W,
			      y: Math.random()*H,
			      r: Math.random()*5+2, //min of 2px and max of 7px
			      d: Math.random() + 1 //density of the flake

			    })
			  }

			  //draw flakes onto canvas
			  function drawFlakes()
			  {
			    ctx.clearRect(0, 0, W, H);
			    ctx.fillStyle = "white";
			    ctx.beginPath();
			    for(var i = 0; i < mf; i++){
			      var f = flakes[i];
			      ctx.moveTo(f.x, f.y);
			      ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
			    }
			    ctx.fill();
			    moveFlakes();
			  }

			  //animate the flakes
			  var angle = 0;
			  function moveFlakes(){
			    angle += 0.01;
			    for(var i = 0; i < mf; i++)
			    {
			      //store current flake
			      var f = flakes[i];

			      //update X and Y coordinates of each snowflakes
			      f.y += Math.pow(f.d, 2) + 1;
			      f.x += Math.sin(angle) * 2;

			      //if the snowflake reaches the bottom, send a new one to the top
			      if(f.y > H){
			        flakes[i] = {x: Math.random()*W, y: 0, r: f.r, d: f.d};
			      }
			    }
			  }

			  setInterval(drawFlakes, 25);
		}
    });
      


	if ($(".main-nav").length) {
    	 var nav_hight = $(".header").height();
    	 var mainnav_hight = $(".main-nav").height();
    	 var top_nav_hight = $(".topnav").height();
		 var header = $(".main-nav");
		 var o_member = $(".online-side-nav .nav-btn");
		 var w_Size = $(window).width();
		 var new_height = mainnav_hight + top_nav_hight

		 // $(".header").css( "min-height", new_height );
		 $("#chat-sidebar").css( "padding-top", new_height );
        	
    	if (w_Size <= 1400) {
		 	$("#chat-sidebar").css( "padding-top", new_height + 60 );
		 }
	};

  	// Window Scroll
	$(window).on('scroll', function() {
    	//Go to top
        if ($(this).scrollTop() > 100) {
            $('#go_to_top').addClass('goto');
        } else {
            $('#go_to_top').removeClass('goto');
        }

        if ($(".main-nav").length) {
	        // menu and online user sidebar
	        if ($(this).scrollTop() > 200) {
	        	// #chat-sidebar change top padding on scroll
	        	var main_n_hight = $(".main-nav.fixed-nav").height();
	        	$("#chat-sidebar").css( "padding-top", main_n_hight );

	        	// header fixed on scroll
	            header.addClass("fixed-nav");
	            o_member.addClass("r-design");
	        } else {
	        	// #chat-sidebar top padding reset
	        	$("#chat-sidebar").css( "padding-top", nav_hight );

	        	if (w_Size <= 1400) {
				 	$("#chat-sidebar").css( "padding-top", nav_hight + 60 );
				 }
	            // reset header fixed
	            header.removeClass("fixed-nav");
	            o_member.removeClass("r-design");
	        }
	    };

    });

     $("#go_to_top").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false
    });



})(jQuery);