$(function(){
	$('.mosaico .container .mosaico-wraper').slick({
		centerMode: false,
		slidesToShow:4,
		infinite:false,
		arrow:false,
		responsive:[

			{
				breakpoint:800,
				settings:{
					arrows:false,
					infinite:false,
					centerMode:false,
					slidesToShow:3
				}
			},
			{
				breakpoint:600,
				settings:{
					arrows:false,
					infinite:false,
					centerMode:true,
					slidesToShow:2
				}
			},
			{
				breakpoint:450,
				settings:{
					arrows:false,
					infinite:false,
					centerMode:false,
					slidesToShow:1
				}
			}

		]
	});

	$('.servicos .container .servicosBox').slick({
		centerMode:false,
		slidesToShow:3,
		arrows:false,
		infinite:false,
		responsive:[

			{
				breakpoint: 768,
				settings:{
					arrows:false,
					dots:true,
					infinite:false,
					centerMode:false,
					slidesToShow:2
				}
			},
			{
				breakpoint: 480,
				settings:{
					arrows:false,
					dots:true,
					infinite:false,
					centerMode:false,
					slidesToShow:1
				}
			}
		]
	});

	/* $('.depoimentos .container').slick({
		centerMode:false,
		slidesToShow:1,
		dots:true,
		arrows:false,
		infinite:false,
	}); */
})