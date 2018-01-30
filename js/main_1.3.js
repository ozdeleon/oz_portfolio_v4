$(function(){

});

$(function() {
    resizeDiv();

    d = new Date();
    $($('img[src$=".jpg"]')).attr("src", ".jpg?"+d.getTime());


    window.onresize = function(event) {
        resizeDiv();
    }

    function resizeDiv() {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height();

        //Project Slide Animation
        var $galleryContainer = $('.gallery-container'),
            $navBtn = $('.nav-btn-container'),
            $closeBtn = $('.info-items04'),
            tlSlide = new TimelineMax({
                paused: true
            }),
            tlSlideMid = new TimelineMax({
                paused: true
            }),
            tlSlideMobile = new TimelineMax({
                paused: true
            });

        tlSlide
            .to($galleryContainer, 1, {
                xPercent: 15,
                scale: 0.8,
                ease: Power3.easeInOut
            })

        .reversed(true);

        tlSlideMid
            .to($galleryContainer, 1, {
                xPercent: 20,
                scale: 0.7,
                ease: Power3.easeInOut
            }).reversed(true);

        tlSlideMobile
            .to($galleryContainer, 1, {
                xPercent: 40,
                scale: 0.7,
                ease: Power3.easeInOut
            }).reversed(true);


        var windowWidth = $(window).width(),
            windowHeight = $(window).height();

        $(window).resize(function() {
            if (windowWidth != $(window).width() || windowHeight != $(window).height()) {
                tlSlide.reverse();
                tlSlideMid.reverse();
                tlSlideMobile.reverse();
                return;
            }
        });

        $('.project-container').css({
            'height': windowHeight + 'px'
        });
        var $cloGsel = $('.gselItem'),
            $closeDiv = $('.closeDiv');



        if (windowHeight >= 675) {
            $('.inPages-container').css('height', '100%', 'transition', 'all 1s');
            $('.gallery-container').css('height', '100%', 'transition', 'all 1s');
            $('.project-container').css({
                'height': windowHeight + 'px'
            });
        } else {
            $('.gallery-container', '.project-container', '.inPages-container').css('height', '675', 'transition', 'all 1s');
            $('.inPages-container').css('height', '100%', 'transition', 'all 1s');
        };


        //click function

        if (windowWidth <= 768) {

            $('.gallery-container').css('height', '100%', 'transition', 'all 1s');
            $('.gboxes03').addClass('hidden');
            $('.gallery-mobile').addClass('hidden');

            $($navBtn, this).on('click tap', function() {
                tlSlideMobile.reversed() ? tlSlideMobile.play() : tlSlideMobile.reverse();
            });

            $($closeBtn, this).on('click tap', function() {
                tlSlideMobile.reversed() ? tlSlideMobile.play() : tlSlideMobile.reverse();
               
            });
        } else if (windowWidth <= 1140) {

            $('.gboxes03').removeClass('hidden');
            $('.gallery-mobile').addClass('hidden');


            $($navBtn, this).on('click tap', function() {
                tlSlideMid.reversed() ? tlSlideMid.play() : tlSlideMid.reverse();


            });

            $($closeBtn, this).on('click tap', function() {
                tlSlideMid.reversed() ? tlSlideMid.play() : tlSlideMid.reverse();



            });
        } else {

            $('.gboxes03').removeClass('hidden');
            $('.gallery-mobile').addClass('hidden');

            $($navBtn, this).on('click tap', function() {
                tlSlide.reversed() ? tlSlide.play() : tlSlide.reverse();

                $('.gtitle-box').toggleClass('gtitle-box-delete');
            });

            $($closeBtn, this).on('click tap', function() {
                tlSlide.reversed() ? tlSlide.play() : tlSlide.reverse();

            });
        }


        // Loop through gallery
        var $gBoxImg = $('.gboxImg'),
            $gtitleBox = $('.gtitle-box');

        $($gBoxImg).each(createEffect);

        function createEffect(i, element) {


            var tlGoop = new TimelineMax({
                    paused: true
                }),
                gBoxImgTag = $(this).find('.gboxImg'),
                gtitleBoxTag = $(this).find('.gtitle-box'),
                hOnetag = $(this).find("h1"),
                hTwotag = $(this).find("h2");

            tlGoop
                .set(gtitleBoxTag, {
                    autoAlpha: 1,
                    scaleY: 0.01
                })
                .from(gtitleBoxTag, 0.5, {
                    scaleX: 0,
                    force3D: true,
                    ease: Power2.easeInOut
                }, 'imgTxt')
                .to(gtitleBoxTag, 0.5, {
                    scaleY: 1,
                    force3D: true,
                    ease: Power2.easeInOut
                }, 'imgTxt+=0.5')
                .fromTo(hOnetag, 0.8, {
                    yPercent: -200,
                    ease: Power3.easeInOut,
                    autoAlpha: 0,
                    force3D: true
                }, {
                    yPercent: '',
                    ease: Power3.easeInOut,
                    autoAlpha: 1
                }, 'imgTxt+=0.55')
                .fromTo(hTwotag, 0.8, {
                    yPercent: 200,
                    ease: Power3.easeInOut,
                    autoAlpha: 0,
                    force3D: true
                }, {
                    yPercent: '',
                    ease: Power3.easeInOut,
                    autoAlpha: 1
                }, 'imgTxt+=0.55');

            $(element).hover(over, out);

            function over() {
                tlGoop.play();
            }

            function out() {
                tlGoop.reverse();
            }

        };

        // Loop Through mobile gallary

        var $mgBoxImg = $('.mgboxImg');

        $($mgBoxImg).each(mobileEffect);

        function mobileEffect(i, element) {

            var tlmGoop = new TimelineMax({
                    paused: true
                }),
                mgBoxImgTag = $(this).find('.mgboxImg'),
                mgtitleBoxTag = $(this).find('.mgtitle-box'),
                mhOnetag = $(this).find("h1"),
                mhTwotag = $(this).find("h2");

            tlmGoop
                .set(mgtitleBoxTag, {
                    autoAlpha: 1,
                    scaleY: 0.01
                })
                .from(mgtitleBoxTag, 0.5, {
                    scaleX: 0,
                    force3D: true,
                    ease: Power2.easeInOut
                }, 'imgTxt')
                .to(mgtitleBoxTag, 0.5, {
                    scaleY: 1,
                    force3D: true,
                    ease: Power2.easeInOut
                }, 'imgTxt+=0.5')
                .fromTo(mhOnetag, 0.8, {
                    yPercent: -200,
                    ease: Power3.easeInOut,
                    autoAlpha: 0,
                    force3D: true
                }, {
                    yPercent: '',
                    ease: Power3.easeInOut,
                    autoAlpha: 1
                }, 'imgTxt+=0.55')
                .fromTo(mhTwotag, 0.8, {
                    yPercent: 200,
                    ease: Power3.easeInOut,
                    autoAlpha: 0,
                    force3D: true
                }, {
                    yPercent: '',
                    ease: Power3.easeInOut,
                    autoAlpha: 1
                }, 'imgTxt+=0.55');


            $(element).hover(over, out);

            function over() {
                tlmGoop.play();
            }

            function out() {
                tlmGoop.reverse();
            }
        };

        //mobile gallery more and back buttons

        var gBackBtn = $('.mgboxImg07'),
            gMoreBtn = $('.gtitle-box-mobile'),
            $galleryDesk = $('.gallery-container'),
            $galleryMobile = $('.gallery-mobile'),
            $sideC = $('.side-container'),
            opacityOne = "opacity:1",
            $closeDiv = $('.closeDiv'),
            tlBackBtn = new TimelineMax({
                paused: true
            });

        tlBackBtn
            .set($galleryMobile, {autoAlpha:1})
            .to($galleryDesk, 1, {
                scale: 0.9,
                ease: Power3.easeInOut
            }, 'backMbtn')
            .fromTo($galleryMobile, 1, {
                xPercent: 150,
                ease: Power3.easeInOut
            },{
                xPercent: '',
                ease: Power3.easeInOut
            }, 'backMbtn+=0.2');

        $(gMoreBtn).on('click tap', function() {
            tlBackBtn.play();
            $('.side-container').animate({
                opacity: 0
            });
            $($galleryMobile).removeClass('hidden');
        });

        $(gBackBtn).on('click tap', function() {
            tlBackBtn.reverse();
            $('.side-container').delay(1000).animate({
                opacity: 1
            });
        });

        //Gallery Buttons

        var $gText = $('.gText'),
            $mgtext = $('.mgtext'),
            $inPagesC = $('.inPages-container'),
            $inPageInnerC = $('.inPage-innerContainer'),

            $galleryContainer = $('.gallery-container'),
            $sideContainer = $('.side-container');


        var tlGbutton = new TimelineMax({
                paused: true
            }),
            tlGbuttonOne = new TimelineMax({
                paused: true
            }),
            tlGbuttonTwo = new TimelineMax({
                paused: true
            }),
            tlGbuttonThree = new TimelineMax({
                paused: true
            }),
            tlGbuttonFour = new TimelineMax({
                paused: true
            }),
            tlGbuttonFive = new TimelineMax({
                paused: true
            }),
            tlGbuttonSix = new TimelineMax({
                paused: true
            }),
            tlGbuttonSeven = new TimelineMax({
                paused: true
            }),
            tlGbuttonEight = new TimelineMax({
                paused: true
            }),
            tlGbuttonNine = new TimelineMax({
                paused: true
            }),
            tlGbuttonTen = new TimelineMax({
                paused: true
            }),
            tlGbuttonEleven = new TimelineMax({
                paused: true
            }),
            tlGbuttonTwelve = new TimelineMax({
                paused: true
            });

        tlGbutton
        // .to($sideContainer, 0.1, {autoAlpha:0}, 'pageG')
            .to($galleryContainer, 1, {
                scale: 0.7,
                ease: Power3.easeInOut
            }, 'pageG+=0.1')
            .from($inPagesC["0"], 0.01, {
                scale: 0
            }, 'pageG+=1')
            .to($inPagesC["0"], 0.8, {
                autoAlpha: 1
            }, 'pageG+=1')
            .from($inPageInnerC["0"], 1, {
                xPercent: 500,
                ease: Power3.easeInOut,
                force3D: true
            }, 'pageG+=0.9');

        tlGbuttonOne
        // .to($sideContainer, 0.1, {autoAlpha:0}, 'pageG')
            .to($galleryContainer, 1, {
                scale: 0.7,
                ease: Power3.easeInOut
            }, 'pageG+=0.1')
            .from($inPagesC[1], 0.01, {
                scale: 0
            }, 'pageG+=1')
            .to($inPagesC[1], 0.8, {
                autoAlpha: 1
            }, 'pageG+=1')
            .from($inPageInnerC[1], 1, {
                xPercent: 500,
                ease: Power3.easeInOut,
                force3D: true
            }, 'pageG+=0.9');

        tlGbuttonTwo
        // .to($sideContainer, 0.1, {autoAlpha:0}, 'pageG')
            .to($galleryContainer, 1, {
                scale: 0.7,
                ease: Power3.easeInOut
            }, 'pageG+=0.1')
            .from($inPagesC[2], 0.01, {
                scale: 0
            }, 'pageG+=1')
            .to($inPagesC[2], 0.8, {
                autoAlpha: 1
            }, 'pageG+=1')
            .from($inPageInnerC[2], 1, {
                xPercent: 500,
                ease: Power3.easeInOut,
                force3D: true
            }, 'pageG+=0.9');

        tlGbuttonThree
        // .to($sideContainer, 0.1, {autoAlpha:0}, 'pageG')
            .to($galleryContainer, 1, {
                scale: 0.7,
                ease: Power3.easeInOut
            }, 'pageG+=0.1')
            .from($inPagesC[3], 0.01, {
                scale: 0
            }, 'pageG+=1')
            .to($inPagesC[3], 0.8, {
                autoAlpha: 1
            }, 'pageG+=1')
            .from($inPageInnerC[3], 1, {
                xPercent: 500,
                ease: Power3.easeInOut,
                force3D: true
            }, 'pageG+=0.9');

        tlGbuttonFour
        // .to($sideContainer, 0.1, {autoAlpha:0}, 'pageG')
            .to($galleryContainer, 1, {
                scale: 0.7,
                ease: Power3.easeInOut
            }, 'pageG+=0.1')
            .from($inPagesC[4], 0.01, {
                scale: 0
            }, 'pageG+=1')
            .to($inPagesC[4], 0.8, {
                autoAlpha: 1
            }, 'pageG+=1')
            .from($inPageInnerC[4], 1, {
                xPercent: 500,
                ease: Power3.easeInOut,
                force3D: true
            }, 'pageG+=0.9');

        tlGbuttonFive
        // .to($sideContainer, 0.1, {autoAlpha:0}, 'pageG')
            .to([$galleryContainer, $galleryMobile], 1, {
                scale: 0.7,
                ease: Power3.easeInOut
            }, 'pageG+=0.1')
            .from($inPagesC[5], 0.01, {
                scale: 0
            }, 'pageG+=1')
            .to($inPagesC[5], 0.8, {
                autoAlpha: 1
            }, 'pageG+=1')
            .from($inPageInnerC[5], 1, {
                xPercent: 500,
                ease: Power3.easeInOut,
                force3D: true
            }, 'pageG+=0.9');

        tlGbuttonSix
        // .to($sideContainer, 0.1, {autoAlpha:0}, 'pageG')
            .to([$galleryContainer, $galleryMobile], 1, {
                scale: 0.7,
                ease: Power3.easeInOut
            }, 'pageG+=0.1')
            .from($inPagesC[6], 0.01, {
                scale: 0
            }, 'pageG+=1')
            .to($inPagesC[6], 0.8, {
                autoAlpha: 1
            }, 'pageG+=1')
            .from($inPageInnerC[6], 1, {
                xPercent: 500,
                ease: Power3.easeInOut,
                force3D: true
            }, 'pageG+=0.9');

        tlGbuttonSeven
        // .to($sideContainer, 0.1, {autoAlpha:0}, 'pageG')
            .to([$galleryContainer, $galleryMobile], 1, {
                scale: 0.7,
                ease: Power3.easeInOut
            }, 'pageG+=0.1')
            .from($inPagesC[7], 0.01, {
                scale: 0
            }, 'pageG+=1')
            .to($inPagesC[7], 0.8, {
                autoAlpha: 1
            }, 'pageG+=1')
            .from($inPageInnerC[7], 1, {
                xPercent: 500,
                ease: Power3.easeInOut,
                force3D: true
            }, 'pageG+=0.9');

        tlGbuttonEight
        // .to($sideContainer, 0.1, {autoAlpha:0}, 'pageG')
            .to([$galleryContainer, $galleryMobile], 1, {
                scale: 0.7,
                ease: Power3.easeInOut
            }, 'pageG+=0.1')
            .from($inPagesC[8], 0.01, {
                scale: 0
            }, 'pageG+=1')
            .to($inPagesC[8], 0.8, {
                autoAlpha: 1
            }, 'pageG+=1')
            .from($inPageInnerC[8], 1, {
                xPercent: 500,
                ease: Power3.easeInOut,
                force3D: true
            }, 'pageG+=0.9');

        tlGbuttonNine
        // .to($sideContainer, 0.1, {autoAlpha:0}, 'pageG')
            .to([$galleryContainer, $galleryMobile], 1, {
                scale: 0.7,
                ease: Power3.easeInOut
            }, 'pageG+=0.1')
            .from($inPagesC[9], 0.01, {
                scale: 0
            }, 'pageG+=1')
            .to($inPagesC[9], 0.8, {
                autoAlpha: 1
            }, 'pageG+=1')
            .from($inPageInnerC[9], 1, {
                xPercent: 500,
                ease: Power3.easeInOut,
                force3D: true
            }, 'pageG+=0.9');

        tlGbuttonTen
        // .to($sideContainer, 0.1, {autoAlpha:0}, 'pageG')
            .to([$galleryContainer, $galleryMobile], 1, {
                scale: 0.7,
                ease: Power3.easeInOut
            }, 'pageG+=0.1')
            .from($inPagesC[10], 0.01, {
                scale: 0
            }, 'pageG+=1')
            .to($inPagesC[10], 0.8, {
                autoAlpha: 1
            }, 'pageG+=1')
            .from($inPageInnerC[10], 1, {
                xPercent: 500,
                ease: Power3.easeInOut,
                force3D: true
            }, 'pageG+=0.9');

        tlGbuttonEleven
        // .to($sideContainer, 0.1, {autoAlpha:0}, 'pageG')
            .to([$galleryContainer, $galleryMobile], 1, {
                scale: 0.7,
                ease: Power3.easeInOut
            }, 'pageG+=0.1')
            .from($inPagesC[11], 0.01, {
                scale: 0
            }, 'pageG+=1')
            .to($inPagesC[11], 0.8, {
                autoAlpha: 1
            }, 'pageG+=1')
            .from($inPageInnerC[11], 1, {
                xPercent: 500,
                ease: Power3.easeInOut,
                force3D: true
            }, 'pageG+=0.9');

        tlGbuttonTwelve
        // .to($sideContainer, 0.1, {autoAlpha:0}, 'pageG')
            .to([$galleryContainer, $galleryMobile], 1, {
                scale: 0.7,
                ease: Power3.easeInOut
            }, 'pageG+=0.1')
            .from($inPagesC[12], 0.01, {
                scale: 0
            }, 'pageG+=1')
            .to($inPagesC[12], 0.8, {
                autoAlpha: 1
            }, 'pageG+=1')
            .from($inPageInnerC[12], 1, {
                xPercent: 500,
                ease: Power3.easeInOut,
                force3D: true
            }, 'pageG+=0.9');

        galBtn();
        galBtnOne();
        galBtnTwo();
        galBtnThree();
        galBtnFour();
        galBtnFive();
        galBtnSix();
        galBtnSeven();
        galBtnEight();
        galBtnNine();
        galBtnTen();
        galBtnEleven();
        galBtnTwelve();

        function galBtn() {
            $($gText["0"]).on('click tap', function() {

                tlGbutton.play();
                $($sideContainer).animate({
                    opacity: '0'
                });

            })
            $($closeDiv).on('click tap', function() {

                tlGbutton.reverse();
                $($sideContainer).delay(1500).animate({
                    opacity: '1'
                });
            })
        };


        function galBtnOne() {
            $($gText[1]).on('click tap', function() {

                tlGbuttonOne.play();
                $($sideContainer).animate({
                    opacity: '0'
                });
            })
            $($closeDiv).on('click tap', function() {

                tlGbuttonOne.reverse();
            })
        };

        function galBtnTwo() {
            $($gText[2]).on('click tap', function() {

                tlGbuttonTwo.play();
                $($sideContainer).animate({
                    opacity: '0'
                });
            })
            $($closeDiv).on('click tap', function() {

                tlGbuttonTwo.reverse();
            })
        };

        function galBtnThree() {
            $($gText[3]).on('click tap', function() {

                tlGbuttonThree.play();
                $($sideContainer).animate({
                    opacity: '0'
                });
            })
            $($closeDiv).on('click tap', function() {

                tlGbuttonThree.reverse();
            })
        };

        function galBtnFour() {
            $($gText[4]).on('click tap', function() {

                tlGbuttonFour.play();
                $($sideContainer).animate({
                    opacity: '0'
                });
            })
            $($closeDiv).on('click tap', function() {

                tlGbuttonFour.reverse();
            })
        };

        function galBtnFive() {
            $([$gText[5], $mgtext["0"]]).on('click tap', function() {

                tlGbuttonFive.play();
                $($sideContainer).animate({
                    opacity: '0'
                });
            })
            $($closeDiv).on('click tap', function() {

                tlGbuttonFive.reverse();
            })
        };

        function galBtnSix() {
            $([$gText[6], $mgtext[1]]).on('click tap', function() {

                tlGbuttonSix.play();
                $($sideContainer).animate({
                    opacity: '0'
                });
            })
            $($closeDiv).on('click tap', function() {

                tlGbuttonSix.reverse();
            })
        };

        function galBtnSeven() {
            $([$gText[7], $mgtext[2]]).on('click tap', function() {

                tlGbuttonSeven.play();
                $($sideContainer).animate({
                    opacity: '0'
                });
            })
            $($closeDiv).on('click tap', function() {

                tlGbuttonSeven.reverse();
            })
        };

        function galBtnEight() {
            $([$gText[8], $mgtext[3]]).on('click tap', function() {

                tlGbuttonEight.play();
                $($sideContainer).animate({
                    opacity: '0'
                });
            })
            $($closeDiv).on('click tap', function() {

                tlGbuttonEight.reverse();
            })
        };

        function galBtnNine() {
            $([$gText[9], $mgtext[4]]).on('click tap', function() {

                tlGbuttonNine.play();
                $($sideContainer).animate({
                    opacity: '0'
                });
            })
            $($closeDiv).on('click tap', function() {

                tlGbuttonNine.reverse();
            })
        };

        function galBtnTen() {
            $($gText[10]).on('click tap', function() {

                tlGbuttonTen.play();
                $($sideContainer).animate({
                    opacity: '0'
                });
            })
            $($closeDiv).on('click tap', function() {

                tlGbuttonTen.reverse();
            })
        };

        function galBtnEleven() {
            $([$gText[11], $mgtext[5]]).on('click tap', function() {

                tlGbuttonEleven.play();
                $($sideContainer).animate({
                    opacity: '0'
                });
            })
            $($closeDiv).on('click tap', function() {

                tlGbuttonEleven.reverse();
            })
        };

        function galBtnTwelve() {
            $([$gText[12], $mgtext[6]]).on('click tap', function() {

                tlGbuttonTwelve.play();
                $($sideContainer).animate({
                    opacity: '0'
                });
            })
            $($closeDiv).on('click tap', function() {

                tlGbuttonTwelve.reverse();
            })
        };




        // Individual Page navigation

        var $gSel = $('.gSel'),
            $inPagetext = $('.inPage-text'),

            $gselOne = $gSel["0"].children[1],
            $gselTwo = $gSel[1].children["0"],
            $gselThree = $gSel[1].children[1],

            $gselTwoOne = $gSel[2].children[1],
            $gselTwoTwo = $gSel[3].children["0"],
            $gselTwoThree = $gSel[3].children[1],

            $gselThreeOne = $gSel[4].children[1],
            $gselThreeTwo = $gSel[5].children["0"],
            $gselThreeThree = $gSel[5].children[1],

            $gselFourOne = $gSel[6].children[1],
            $gselFourTwo = $gSel[7].children["0"],
            $gselFourThree = $gSel[7].children[1],

            $gselFiveOne = $gSel[8].children[1],
            $gselFiveTwo = $gSel[9].children["0"],
            $gselFiveThree = $gSel[9].children[1],

            $gselSixOne = $gSel[10].children[1],
            $gselSixTwo = $gSel[11].children["0"],
            $gselSixThree = $gSel[11].children[1],

            $gselSevenOne = $gSel[12].children[1],
            $gselSevenTwo = $gSel[13].children["0"],
            $gselSevenThree = $gSel[13].children[1],

            $gselEightOne = $gSel[14].children[1],
            $gselEightTwo = $gSel[15].children["0"],
            $gselEightThree = $gSel[15].children[1],

            $gselNineOne = $gSel[16].children[1],
            $gselNineTwo = $gSel[17].children["0"],
            $gselNineThree = $gSel[17].children[1],

            $gselTenOne = $gSel[18].children[1],
            $gselTenTwo = $gSel[19].children["0"],
            $gselTenThree = $gSel[19].children[1],

            $gselElevenOne = $gSel[20].children[1],
            $gselElevenTwo = $gSel[21].children["0"],
            $gselElevenThree = $gSel[21].children[1],

            $gseltwelveOne = $gSel[22].children[1],
            $gseltwelveTwo = $gSel[23].children["0"],
            $gseltwelveThree = $gSel[23].children[1],

            $gselThirteenOne = $gSel[24].children[1],
            $gselThirteenTwo = $gSel[25].children["0"],
            $gselThirteenThree = $gSel[25].children[1],



            $heroOne = $('.herobg01'),
            $heroTwo = $('.herobg02'),
            $heroThree = $('.herobg03'),
            $heroFour = $('.herobg04'),
            $heroFive = $('.herobg05'),
            $heroSix = $('.herobg06'),
            $heroSeven = $('.herobg07'),
            $heroEight = $('.herobg08'),
            $heroNine = $('.herobg09'),
            $heroTen = $('.herobg10'),
            $heroEleven = $('.herobg11'),
            $heroTwelve = $('.herobg12'),
            $heroThirteen = $('.herobg13');


        $('.gselOver').each(gSelEffect);

        function gSelEffect(i, element) {
            $(element).hover(over, out)

            function over() {
                $(this).css("opacity", "1");
            }

            function out() {
                $(this).css("opacity", "0");
            }
        };

        //Hero Villan buttons

        $($gselOne).on('click tap', function() {
            setTimeout(function() {
                $($heroOne).addClass('herobgTwo', 500);
                $($heroOne).removeClass('herobgThree', 500);
                $($heroOne).removeClass('herobgfour', 500);
            });

        });

        $($gselTwo).on('click tap', function() {


            setTimeout(function() {
                $($heroOne).addClass('herobgThree');
                $($heroOne).removeClass('herobgTwo');
                $($heroOne).removeClass('herobgfour');
            });


        });

        $($gselThree).on('click tap', function() {



            setTimeout(function() {
                $($heroOne).removeClass('herobgThree');
                $($heroOne).removeClass('herobgTwo');
                $($heroOne).addClass('herobgfour');
            });

        });

        //Milkstache buttons

        $($gselTwoOne).on('click tap', function() {
            setTimeout(function() {
                $($heroTwo).addClass('hero5');
                $($heroTwo).removeClass('hero6');
                $($heroTwo).removeClass('hero7');
            });

        });

        $($gselTwoTwo).on('click tap', function() {


            setTimeout(function() {
                $($heroTwo).removeClass('hero5');
                $($heroTwo).addClass('hero6');
                $($heroTwo).removeClass('hero7');
            });


        });

        $($gselTwoThree).on('click tap', function() {



            setTimeout(function() {
                $($heroTwo).removeClass('hero5');
                $($heroTwo).removeClass('hero6');
                $($heroTwo).addClass('hero7');
            });

        });

        //seamus buttons

        $($gselThreeOne).on('click tap', function() {
            setTimeout(function() {
                $($heroThree).addClass('hero8');
                $($heroThree).removeClass('hero9');
                $($heroThree).removeClass('hero10');
            });

        });

        $($gselThreeTwo).on('click tap', function() {


            setTimeout(function() {
                $($heroThree).removeClass('hero8');
                $($heroThree).addClass('hero9');
                $($heroThree).removeClass('hero10');
            });


        });

        $($gselThreeThree).on('click tap', function() {



            setTimeout(function() {
                $($heroThree).removeClass('hero8');
                $($heroThree).removeClass('hero9');
                $($heroThree).addClass('hero10');
            });

        });

        //calvet buttons

        $($gselFourOne).on('click tap', function() {
            setTimeout(function() {
                $($heroFour).addClass('hero11');
                $($heroFour).removeClass('hero12');
                $($heroFour).removeClass('hero13');
            });

        });

        $($gselFourTwo).on('click tap', function() {


            setTimeout(function() {
                $($heroFour).removeClass('hero11');
                $($heroFour).addClass('hero12');
                $($heroFour).removeClass('hero13');
            });


        });

        $($gselFourThree).on('click tap', function() {



            setTimeout(function() {
                $($heroFour).removeClass('hero11');
                $($heroFour).removeClass('hero12');
                $($heroFour).addClass('hero13');
            });

        });

        //Sosa buttons

        $($gselFiveOne).on('click tap', function() {
            setTimeout(function() {
                $($heroFive).addClass('hero14');
                $($heroFive).removeClass('hero15');
                $($heroFive).removeClass('hero16');
            });

        });

        $($gselFiveTwo).on('click tap', function() {

            setTimeout(function() {
                $($heroFive).removeClass('hero14');
                $($heroFive).addClass('hero15');
                $($heroFive).removeClass('hero16');
            });


        });

        $($gselFiveThree).on('click tap', function() {



            setTimeout(function() {
                $($heroFive).removeClass('hero14');
                $($heroFive).removeClass('hero15');
                $($heroFive).addClass('hero16');
            });

        });

        //Logo Design buttons

        $($gselSixOne).on('click tap', function() {
            setTimeout(function() {
                $($heroSix).addClass('hero17');
                $($heroSix).removeClass('hero18');
                $($heroSix).removeClass('hero19');
            });

        });

        $($gselSixTwo).on('click tap', function() {


            setTimeout(function() {
                $($heroSix).removeClass('hero17');
                $($heroSix).addClass('hero18');
                $($heroSix).removeClass('hero19');
            });


        });

        $($gselSixThree).on('click tap', function() {


            setTimeout(function() {
                $($heroSix).removeClass('hero17');
                $($heroSix).removeClass('hero18');
                $($heroSix).addClass('hero19');
            });

        });

        //The Pork and Beans buttons

        $($gselSevenOne).on('click tap', function() {
            setTimeout(function() {
                $($heroSeven).addClass('hero20');
                $($heroSeven).removeClass('hero21');
                $($heroSeven).removeClass('hero22');
            });

        });

        $($gselSevenTwo).on('click tap', function() {


            setTimeout(function() {
                $($heroSeven).removeClass('hero20');
                $($heroSeven).addClass('hero21');
                $($heroSeven).removeClass('hero22');
            });


        });

        $($gselSevenThree).on('click tap', function() {



            setTimeout(function() {
                $($heroSeven).removeClass('hero20');
                $($heroSeven).removeClass('hero21');
                $($heroSeven).addClass('hero22');
            });

        });

        //The html 5 buttons

        $($gselEightOne).on('click tap', function() {
            setTimeout(function() {
                $($heroEight).addClass('hero23');
                $($heroEight).removeClass('hero24');
                $($heroEight).removeClass('hero25');
            });

        });

        $($gselEightTwo).on('click tap', function() {


            setTimeout(function() {
                $($heroEight).removeClass('hero23');
                $($heroEight).addClass('hero24');
                $($heroEight).removeClass('hero25');
            });


        });

        $($gselEightThree).on('click tap', function() {



            setTimeout(function() {
                $($heroEight).removeClass('hero23');
                $($heroEight).removeClass('hero24');
                $($heroEight).addClass('hero25');
            });

        });

        //Cinta buttons

        $($gselNineOne).on('click tap', function() {
            setTimeout(function() {
                $($heroNine).addClass('hero26');
                $($heroNine).removeClass('hero27');
                $($heroNine).removeClass('hero28');
            });

        });

        $($gselNineTwo).on('click tap', function() {


            setTimeout(function() {
                $($heroNine).removeClass('hero26');
                $($heroNine).addClass('hero27');
                $($heroNine).removeClass('hero28');
            });


        });

        $($gselNineThree).on('click tap', function() {



            setTimeout(function() {
                $($heroNine).removeClass('hero26');
                $($heroNine).removeClass('hero27');
                $($heroNine).addClass('hero28');
            });

        });

        //Motion Graphics buttons

        $($gselTenOne).on('click tap', function() {
            setTimeout(function() {

                $($heroTen).addClass('hero29');
                $($heroTen).removeClass('hero30');
                $($heroTen).removeClass('hero31');

            });

        });

        $($gselTenTwo).on('click tap', function() {


            setTimeout(function() {
                $($heroTen).removeClass('hero29');
                $($heroTen).addClass('hero30');
                $($heroTen).removeClass('hero31');

            });


        });

        $($gselTenThree).on('click tap', function() {



            setTimeout(function() {
                $($heroTen).removeClass('hero29');
                $($heroTen).removeClass('hero30');
                $($heroTen).addClass('hero31');

            });

        });

        //Print buttons

        $($gselElevenOne).on('click tap', function() {
            setTimeout(function() {
                $($heroEleven).addClass('hero32');
                $($heroEleven).removeClass('hero33');
                $($heroEleven).removeClass('hero34');
            });

        });

        $($gselElevenTwo).on('click tap', function() {

            setTimeout(function() {
                $($heroEleven).removeClass('hero32');
                $($heroEleven).addClass('hero33');
                $($heroEleven).removeClass('hero34');
            });


        });

        $($gselElevenThree).on('click tap', function() {



            setTimeout(function() {
                $($heroEleven).removeClass('hero32');
                $($heroEleven).removeClass('hero33');
                $($heroEleven).addClass('hero34');
            });

        });


        //Friend buttons

        $($gseltwelveOne).on('click tap', function() {
            setTimeout(function() {
                $($heroTwelve).addClass('hero35');
                $($heroTwelve).removeClass('hero36');
                $($heroTwelve).removeClass('hero37');
            });

        });

        $($gseltwelveTwo).on('click tap', function() {

            setTimeout(function() {
                $($heroTwelve).removeClass('hero35');
                $($heroTwelve).addClass('hero36');
                $($heroTwelve).removeClass('hero37');
            });


        });

        $($gseltwelveThree).on('click tap', function() {



            setTimeout(function() {
                $($heroTwelve).removeClass('hero35');
                $($heroTwelve).removeClass('hero36');
                $($heroTwelve).addClass('hero37');
            });

        });

        //Outatime buttons

        $($gselThirteenOne).on('click tap', function() {
            setTimeout(function() {
                $($heroThirteen).addClass('hero38');
                $($heroThirteen).removeClass('hero39');
                $($heroThirteen).removeClass('hero40');
            });

        });

        $($gselThirteenTwo).on('click tap', function() {

            setTimeout(function() {
                $($heroThirteen).removeClass('hero38');
                $($heroThirteen).addClass('hero39');
                $($heroThirteen).removeClass('hero40');

            });


        });

        $($gselThirteenThree).on('click tap', function() {

            setTimeout(function() {
                $($heroThirteen).removeClass('hero38');
                $($heroThirteen).removeClass('hero39');
                $($heroThirteen).addClass('hero40');

            });

        });


        //resize ends       
    };


});