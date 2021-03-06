$(document).on('touchmove',function(ev){
		ev.preventDefault();
	}); 
$(function(){
/*基本参数*/
   var timer=null;
	var $main=$("#main");
	var viewHeight=$(window).height();
	var $list=$("#list");
	var $li=$list.find(">li");
	$main.css("height",viewHeight);
	var desW = 640;
	var desH = 960;
	function nowWidth(){
		var w = desW/desH * viewHeight;
		return w;
	};
/*音乐*/
showMusic()
function showMusic(){
		var $music = $('#music');
		var $audio1 = $('#audio1');
		var onoff = true;
		$music.on('touchstart',function(){
			if(onoff){
				$(this).attr('class','active');
				$audio1.get(0).play();
			}
			else{
				$(this).attr('class','');
				$audio1.get(0).pause();
			}
			onoff = !onoff;
		});
		$music.trigger('touchstart');
	};
	
	/*划屏效果*/
	slidelist();
	function slidelist(){
		var downY = 0;
		var nowIndex = 0;
		var nextorprevIndex = 0;
		var bBtn = true;
		var status=true;
		$li.css('backgroundPosition',( (desW - nowWidth())/2 )+'px 0');
        $li.on("touchstart",function(ev){
			if(!bBtn){return;}
	
			bBtn = false;
			var touch = ev.originalEvent.changedTouches[0];
			downY = touch.pageY;
			nowIndex = $(this).index();
			})
			
		$li.on("touchmove",function(ev){
			var touch = ev.originalEvent.changedTouches[0];
			if(touch.pageY<downY){
				nextorprevIndex=nowIndex==$li.length-1? 0 : nowIndex + 1;
			$li.eq(nextorprevIndex).css("transform","translate(0px,"+(touch.pageY-downY+viewHeight)+"px)");
		
				}
			else if(touch.pageY>downY){
				nextorprevIndex=nowIndex==0? $li.length-1 : nowIndex - 1;
			$li.eq(nextorprevIndex).css("transform","translate(0px,"+(touch.pageY-downY-viewHeight)+"px)");
		
				}else{
					bBtn = true;
					}
			$li.eq(nextorprevIndex).show().addClass("active");
			
			})
			
		$li.on("touchend",function(){
			$li.eq(nextorprevIndex).css("transition",".4s");
			$li.eq(nextorprevIndex).css("transform","translate(0px,0px)");
			})
		$li.on('transitionEnd webkitTransitionEnd',function(ev){
			if( $li.is(ev.target) ){
				resetbtn();
				
				if(cjAnimate[nowIndex]){
				cjAnimate[nowIndex].outAn();
				};
				if(cjAnimate[nextorprevIndex]){
				cjAnimate[nextorprevIndex].inAn();
				}
				
				}
			});
		function resetbtn(){
			$li.eq(nextorprevIndex).css("transition","");
			$li.eq(nextorprevIndex).show()
			$li.eq(nextorprevIndex).removeClass("active");
			$li.eq(nextorprevIndex).siblings("li").hide();
			bBtn = true;
		    };
		 };
/*预加载*/
loadimg()
function loadimg(){
	var arr=["music.png","t33.png","t39.png","t1.png","t2.png","t3.png","t4.png","t5.png","t6.png","t7.png","t8.png","t9.png","t10.png","t11.png","t12.png","t13.png","t14.png","t15.png","t16.png","t17.png","t18.png","t19.png","t20.png","t21.png"];
	var iNow=0;
	var $loadingimg=$("#loading");
	for(var i=0;i<arr.length;i++){
		var objImg = new Image();
		objImg.src = 'img/'+arr[i];
		objImg.onload = function(){
			iNow++;
			if(iNow == arr.length){
				setTimeout(function(){
					$loadingimg.animate({opacity:0},600,function(){
						$(this).remove();
						cjAnimate[0].inAn();
					});
				  },100)
				}
			};
			objImg.onerror = function(){
				setTimeout(function(){
				$loading.animate({opacity:0},600,function(){
				$(this).remove();
				cjAnimate[0].inAn();
				
				});
				},100)
			};	
		}
	};
	
/*场景动画*/
var cjAnimate=[
  {
	 inAn:function(){
	  var $topbj1 = $li.eq(0).children(".li1Child").children('li').eq(0); 
	  var $wenzi1 = $li.eq(0).children(".li1Child").children('li').eq(1); 
	  var $daxin1 = $li.eq(0).children(".li1Child").children('li').eq(2); 
	  var $xiaoxin1 = $li.eq(0).children(".li1Child").children('li').eq(3); 
	  var $botbj1 = $li.eq(0).children(".li1Child").children('li').eq(4); 
	  var $ren1 = $li.eq(0).children(".li1Child").children('li').eq(5); 
	  $topbj1.css("transition","1s");
	  $topbj1.css('opacity',1);
	  $topbj1.css('transform','translate(0,0)');
	  $botbj1.css("transition","1s");
	  $botbj1.css('opacity',1);
	  $botbj1.css('transform','translate(0,0)');
	  
	  $botbj1.on('transitionEnd webkitTransitionEnd',function(){
	  $ren1.css('opacity',1);
	  $ren1.css("transition","1.2s");
	  $ren1.css('transform','translate(0,0)');
		  });
	  $ren1.on('transitionEnd webkitTransitionEnd',function(){
		  $daxin1.css('opacity',1);
		  $daxin1.css("transition","1s");
	      $daxin1.attr("class","daxin11");
		  
		  $xiaoxin1.css('opacity',1);
		  $xiaoxin1.css("transition","1s");
	      $xiaoxin1.attr("class","xiaoxin11");
		  });
	 $xiaoxin1.on('transitionEnd webkitTransitionEnd',function(){
		  $daxin1.addClass("daxin11move1");
		  $xiaoxin1.addClass("xiaoxin11move1");
		  $wenzi1.css('opacity',1);
		  $wenzi1.css("transition","0.5s");
	      $wenzi1.attr("class","wenzi1move1");
	  
	  
		 });
		  
		 },
	 outAn:function(){
	  var $topbj1 = $li.eq(0).children(".li1Child").children('li').eq(0); 
	  var $wenzi1 = $li.eq(0).children(".li1Child").children('li').eq(1); 
	  var $daxin1 = $li.eq(0).children(".li1Child").children('li').eq(2); 
	  var $xiaoxin1 = $li.eq(0).children(".li1Child").children('li').eq(3); 
	  var $botbj1 = $li.eq(0).children(".li1Child").children('li').eq(4); 
	  var $ren1 = $li.eq(0).children(".li1Child").children('li').eq(5); 
	  $li.eq(0).children(".li1Child").children('li').css('opacity',0);
	  $topbj1.css("transition","");
	  $topbj1.css('transform','translate(0,-100px)');
	  $botbj1.css("transition","");
	  $botbj1.css('transform','translate(0,100px)');
	  $ren1.css("transition","");
	  $ren1.css('transform','translate(0,150px)');
	  $daxin1.css("transition","");
	  $daxin1.attr("class","");
	  $xiaoxin1.css("transition","");
	  $xiaoxin1.attr("class","");
	  $wenzi1.css("transition","");
	  $wenzi1.attr("class","");
		 }  
  },
  {
  inAn:function(){
	  var $topbj2 = $li.eq(1).children(".li2Child").children('li').eq(0); 
	  var $wenzi2 = $li.eq(1).children(".li2Child").children('li').eq(1); 
	  var $daxin2 = $li.eq(1).children(".li2Child").children('li').eq(2); 
	  var $xiaoxin2 = $li.eq(1).children(".li2Child").children('li').eq(3); 
	  var $jiaren2 = $li.eq(1).children(".li2Child").children('li').eq(4);
	  $topbj2.css('opacity',1);
	  $topbj2.css("transition","1s");
	  $topbj2.css('transform','translate(0,0)');
	  $topbj2.on('transitionEnd webkitTransitionEnd',function(){
		  $jiaren2.css('opacity',1);
		  $jiaren2.css("transition","1s");
	      $jiaren2.css('transform','translate(0,0)');
		  });
	  $jiaren2.on('transitionEnd webkitTransitionEnd',function(){
		  $daxin2.css('opacity',1);
		  $daxin2.css("transition","1s");
	      $daxin2.attr("class","daxin22");
		  
		  $xiaoxin2.css('opacity',1);
		  $xiaoxin2.css("transition","1s");
	      $xiaoxin2.attr("class","xiaoxin22");
		  });
	  $xiaoxin2.on('transitionEnd webkitTransitionEnd',function(){
		  $daxin2.addClass("daxin22move2");
		  $xiaoxin2.addClass("xiaoxin22move2");
		  $wenzi2.css('opacity',1);
		  $wenzi2.css("transition","0.5s");
	      $wenzi2.attr('class','wenzi2move2');
		  });
	  },
  outAn:function(){
	  var $topbj2 = $li.eq(1).children(".li2Child").children('li').eq(0); 
	  var $wenzi2 = $li.eq(1).children(".li2Child").children('li').eq(1); 
	  var $daxin2 = $li.eq(1).children(".li2Child").children('li').eq(2); 
	  var $xiaoxin2 = $li.eq(1).children(".li2Child").children('li').eq(3); 
	  var $jiaren2 = $li.eq(1).children(".li2Child").children('li').eq(4);
	  $li.eq(1).children(".li2Child").children('li').css('opacity',0);
	  $topbj2.css("transition","");
	  $topbj2.css('transform','translate(0,-100px)');
	  $jiaren2.css("transition","");
	  $jiaren2.css('transform','translate(0,100px)');
	  $daxin2.css("transition","");
	  $daxin2.css('class','');
	  $xiaoxin2.css("transition","");
	  $xiaoxin2.css('class','');
	  $wenzi2.css("transition","");
	  $wenzi2.attr('class','');
	  }
  },
  {
	inAn:function(){
	  var $topbj3 = $li.eq(2).children(".li3Child").children('li').eq(0); 
	  var $wenzi3 = $li.eq(2).children(".li3Child").children('li').eq(1); 
	  var $qinglv3 = $li.eq(2).children(".li3Child").children('li').eq(2);
	  var $daxin3 = $li.eq(2).children(".li3Child").children('li').eq(3); 
	  var $xiaoxin3 = $li.eq(2).children(".li3Child").children('li').eq(4); 
	  $topbj3.css('opacity',1);
	  $topbj3.css("transition","1s");
	  $topbj3.css('transform','translate(0,0)');
	  $topbj3.on('transitionEnd webkitTransitionEnd',function(){
		  $qinglv3.css('opacity',1);
		  $qinglv3.css("transition","1s");
	     $qinglv3.css('transform','translate(0,0)');
		  });
	  $qinglv3.on('transitionEnd webkitTransitionEnd',function(){
		  $daxin3.css('opacity',1);
		  $daxin3.css("transition","1s");
	      $daxin3.attr("class","daxin33");
		  $xiaoxin3.css('opacity',1);
		  $xiaoxin3.css("transition","1s");
	      $xiaoxin3.attr("class","xiaoxin33");
		  });
	  $xiaoxin3.on('transitionEnd webkitTransitionEnd',function(){
		  $xiaoxin3.addClass("xiaoxin33move33");
		  $daxin3.addClass("daxin33move33");
		  $wenzi3.css('opacity',1);
		  $wenzi3.css("transition","0.5s");
	      $wenzi3.attr("class","wenzi3move3");
		  });
		},
	outAn:function(){
	  var $topbj3 = $li.eq(2).children(".li3Child").children('li').eq(0); 
	  var $wenzi3 = $li.eq(2).children(".li3Child").children('li').eq(1); 
	  var $qinglv3 = $li.eq(2).children(".li3Child").children('li').eq(2);
	  var $daxin3 = $li.eq(2).children(".li3Child").children('li').eq(3); 
	  var $xiaoxin3 = $li.eq(2).children(".li3Child").children('li').eq(4); 
	  $li.eq(2).children(".li3Child").children('li').css('opacity',0);
	  $topbj3.css("transition","");
	  $topbj3.css('transform','translate(0,-100px)');
	  $qinglv3.css("transition","");
	  $qinglv3.css('transform','translate(0,100px)');
	  $daxin3.css("transition","");
	  $daxin3.attr("class","");
	  $xiaoxin3.css("transition","");
	  $xiaoxin3.attr("class","");
	  $wenzi3.css("transition","");
	  $wenzi3.attr("class","");
		}
  },
  {
   inAn:function(){
	  var $topbj4 = $li.eq(3).children(".li4Child").children('li').eq(0); 
	  var $wenzi4 = $li.eq(3).children(".li4Child").children('li').eq(1);
	  var $jiehunren4 = $li.eq(3).children(".li4Child").children('li').eq(2); 
	  var $daxin4 = $li.eq(3).children(".li4Child").children('li').eq(3); 
	  var $xiaoxin4 = $li.eq(3).children(".li4Child").children('li').eq(4); 
	  $topbj4.css("transition","1s");
	  $topbj4.css('opacity',1);
	  $topbj4.css('transform','translate(0,0)');
	  $topbj4.on('transitionEnd webkitTransitionEnd',function(){
		  $jiehunren4.css("transition","1s");
		  $jiehunren4.css('opacity',1);
	      $jiehunren4.css('transform','translate(0,0)');
		  });
	  $jiehunren4.on('transitionEnd webkitTransitionEnd',function(){
		  $daxin4.css("transition","1s");
		  $daxin4.css('opacity',1);
		  $xiaoxin4.css('opacity',1);
		  $daxin4.attr("class","daxin44");
		  $xiaoxin4.css("transition","1s");
		  $xiaoxin4.attr("class","xiaoxin44");
		  });
	  $xiaoxin4.on('transitionEnd webkitTransitionEnd',function(){
		  $daxin4.addClass("daxin44move44");
		  $xiaoxin4.addClass("xiaoxin44move44");
		  $wenzi4.css('opacity',1);
		  $wenzi4.css("transition","0.5s");
	      $wenzi4.attr("class","wenzi4move4");
		  });
	   },
   outAn:function(){
	  var $topbj4 = $li.eq(3).children(".li4Child").children('li').eq(0); 
	  var $wenzi4 = $li.eq(3).children(".li4Child").children('li').eq(1);
	  var $jiehunren4 = $li.eq(3).children(".li4Child").children('li').eq(2); 
	  var $daxin4 = $li.eq(3).children(".li4Child").children('li').eq(3); 
	  var $xiaoxin4 = $li.eq(3).children(".li4Child").children('li').eq(4);
	  $li.eq(3).children(".li4Child").children('li').css('opacity',0);
	  $topbj4.css("transition","");
	  $topbj4.css('transform','translate(0,-100px)');
	  $jiehunren4.css("transition","");
	  $jiehunren4.css('transform','translate(0,100px)');
	  $daxin4.css("transition","");
	  $daxin4.attr("class","");
	  $xiaoxin4.css("transition","");
	  $xiaoxin4.attr("class","");
	  $wenzi4.css("transition","");
	  $wenzi4.attr("class","");
	   }
  },
  {
    inAn:function(){
	  var $topbj5 = $li.eq(4).children(".li5Child").children('li').eq(0);
	  var $wenzi5 = $li.eq(4).children(".li5Child").children('li').eq(1);
	  var $ren5 = $li.eq(4).children(".li5Child").children('li').eq(2);
	  var $daxin5 = $li.eq(4).children(".li5Child").children('li').eq(3); 
	  var $xiaoxin5 = $li.eq(4).children(".li5Child").children('li').eq(4); 
	  $topbj5.css("transition","1s");
	  $topbj5.css('opacity',1);
	  $topbj5.css('transform','translate(0,0)'); 
	  $topbj5.on('transitionEnd webkitTransitionEnd',function(){
		  $ren5.css("transition","1s");
		  $ren5.css('opacity',1);
	      $ren5.css('transform','translate(0,0)');
		  });	
	  $ren5.on('transitionEnd webkitTransitionEnd',function(){
		  $daxin5.css("transition","1s");
		  $daxin5.css('opacity',1);
	      $daxin5.attr("class","daxin55");
		  
		  $xiaoxin5.css("transition","1s");
		  $xiaoxin5.css('opacity',1);
	      $xiaoxin5.attr("class","xiaoxin55");
		  
		  });
	  $xiaoxin5.on('transitionEnd webkitTransitionEnd',function(){
		  $daxin5.addClass("daxin55move55");
		  $xiaoxin5.addClass("xiaoxin55move55");
		  $wenzi5.css("transition","0.5s");
		  $wenzi5.css('opacity',1);
	      $wenzi5.attr("class","wenzi55move5");
		  });
		},
	outAn:function(){
	  var $topbj5 = $li.eq(4).children(".li5Child").children('li').eq(0);
	  var $wenzi5 = $li.eq(4).children(".li5Child").children('li').eq(1);
	  var $ren5 = $li.eq(4).children(".li5Child").children('li').eq(2);
	  var $daxin5 = $li.eq(4).children(".li5Child").children('li').eq(3); 
	  var $xiaoxin5 = $li.eq(4).children(".li5Child").children('li').eq(4); 
	  $li.eq(4).children(".li5Child").children('li').css('opacity',0);
	  $topbj5.css("transition","");
	  $topbj5.css('transform','translate(0,-100px)');
	  $ren5.css("transition","");
	  $ren5.css('transform','translate(0,100px)');
	  $daxin5.css("transition","");
	  $daxin5.attr("class","");
	  $xiaoxin5.css("transition","");
	  $xiaoxin5.attr("class","");
	  $wenzi5.css("transition","");
	  $wenzi5.attr("class","");
		}
  },
  {
  inAn:function(){
	  var $topbj6 = $li.eq(5).children(".li6Child").children('li').eq(0); 
	  var $wenzione6 = $li.eq(5).children(".li6Child").children('li').eq(1); 
	  var $wenzitwo6 = $li.eq(5).children(".li6Child").children('li').eq(2);
	  var $shu6 = $li.eq(5).children(".li6Child").children('li').eq(3); 
	  var $daxin6 = $li.eq(5).children(".li6Child").children('li').eq(4);
	  var $xiaoxin6 = $li.eq(5).children(".li6Child").children('li').eq(5);
	  $topbj6.css("transition","1s");
	  $topbj6.css('opacity',1);
	  $topbj6.css('transform','translate(0,0)');
	  $topbj6.on('transitionEnd webkitTransitionEnd',function(){
		  $shu6.css("transition","1s");
		  $shu6.css('opacity',1);
	      $shu6.css('transform','translate(0,0)');
		  });
	  $shu6.on('transitionEnd webkitTransitionEnd',function(){
		   $daxin6.css('opacity',1);
		   $daxin6.css("transition","1s");
	       $daxin6.attr("class","daxin66");
		   
		   $xiaoxin6.css('opacity',1);
		   $xiaoxin6.css("transition","1s");
	       $xiaoxin6.attr("class","xiaoxin66");
		   });
	  $xiaoxin6.on('transitionEnd webkitTransitionEnd',function(){
		   $daxin6.addClass("daxin66move66");
		   $xiaoxin6.addClass("xiaoxin66move66");
		   $wenzione6.css("transition","0.5s");
		   $wenzione6.css('opacity',1);
	       $wenzione6.attr("class","wenzione6move6");
		  });
	  $wenzione6.on('transitionEnd webkitTransitionEnd',function(){
		   $wenzitwo6.css("transition","0.5s");
		   $wenzitwo6.css('opacity',1);
	       $wenzitwo6.attr("class","wenzitwo6move6");
		  });
	  },
  outAn:function(){
	  var $topbj6 = $li.eq(5).children(".li6Child").children('li').eq(0); 
	  var $wenzione6 = $li.eq(5).children(".li6Child").children('li').eq(1); 
	  var $wenzitwo6 = $li.eq(5).children(".li6Child").children('li').eq(2);
	  var $shu6 = $li.eq(5).children(".li6Child").children('li').eq(3); 
	  var $daxin6 = $li.eq(5).children(".li6Child").children('li').eq(4);
	  var $xiaoxin6 = $li.eq(5).children(".li6Child").children('li').eq(5);
	  $li.eq(5).children(".li6Child").children('li').css('opacity',0);
	  $topbj6.css("transition","");
	  $topbj6.css('transform','translate(0,-100px)');
	  $shu6.css("transition","");
	  $shu6.css('transform','translate(0,100px)');
	  $daxin6.css("transition","");
	  $daxin6.attr("class","");
	  $xiaoxin6.css("transition","");
	  $xiaoxin6.attr("class","");
	  $wenzione6.css("transition","");
	  $wenzione6.attr("class","");
	  $wenzitwo6.css("transition","");
	  $wenzitwo6.attr("class","");
	  
	  }
  },
  {
	inAn:function(){
     var $topbj7 = $li.eq(6).children(".li7Child").children('li').eq(0);
	 var $wenzi7 = $li.eq(6).children(".li7Child").children('li').eq(1); 
	 var $lefttu7 = $li.eq(6).children(".li7Child").children('li').eq(2); 
	 var $centertu7 = $li.eq(6).children(".li7Child").children('li').eq(3); 
	 var $righttu7 = $li.eq(6).children(".li7Child").children('li').eq(4); 
	 $topbj7.css('opacity',1);
	 $topbj7.css("transition","1s");
	 $topbj7.css('transform','translate(0,0)');
	 $topbj7.on('transitionEnd webkitTransitionEnd',function(){
		 $wenzi7.css('opacity',1);
		 $wenzi7.css("transition","1s");
	     $wenzi7.css('transform','translate(0,0)');
		 });
     $wenzi7.on('transitionEnd webkitTransitionEnd',function(){
		 $righttu7.css('opacity',1);
		
		 
		 $righttu7.css("transition","1s");
		 $righttu7.css('transform','translate(0,0)');
		 
		 
		 });
	  $righttu7.on('transitionEnd webkitTransitionEnd',function(){
		   $centertu7.css('opacity',1);
		   $centertu7.css("transition","1s");
		 $centertu7.css('transform','translate(0,0)');
		  });
	 $centertu7.on('transitionEnd webkitTransitionEnd',function(){
		 $lefttu7.css('opacity',1);
		 $lefttu7.css("transition","1s");
		 $lefttu7.css('transform','translate(0,0)'); 
		 });
		},
	outAn:function(){
     var $topbj7 = $li.eq(6).children(".li7Child").children('li').eq(0);
	 var $wenzi7 = $li.eq(6).children(".li7Child").children('li').eq(1); 
	 var $lefttu7 = $li.eq(6).children(".li7Child").children('li').eq(2); 
	 var $centertu7 = $li.eq(6).children(".li7Child").children('li').eq(3); 
	 var $righttu7 = $li.eq(6).children(".li7Child").children('li').eq(4); 
	 $li.eq(6).children(".li7Child").children('li').css('opacity',0);
	 $topbj7.css("transition","");
	 $topbj7.css('transform','translate(0,-100px)');
	 $wenzi7.css("transition","");
	 $wenzi7.css('transform','translate(0,100px)');
	 $righttu7.css("transition","");
	 $righttu7.css('transform','translate(-100px,0)');
	 $centertu7.css("transition","");
	 $centertu7.css('transform','translate(-100px,0)');
	 $lefttu7.css("transition","");
	 $lefttu7.css('transform','translate(-100px,0)');
		}
  }
]
			 

	
	$.each(cjAnimate,function(i,obj){
	obj.outAn();
	});
	 
})