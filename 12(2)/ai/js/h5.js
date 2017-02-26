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
	var $xuehua=$list.children("li").eq(3).children(".overxue").children(".xuehua");
	$main.css("height",viewHeight);
	var desW = 640;
	var desH = 960;
	function nowWidth(){
		var w = desW/desH * viewHeight;
		return w;
	};
	
	
$xuehua.css('backgroundPosition',( (desW - nowWidth())/2 )+'px 0');

/*loading*/

$("#loading").children("ul").children("li").addClass("loadingactive");
$("#loading").children("ul").children("li").eq(0).css("transition","4.5s");

$("#loading").children("ul").children("li").eq(0).one('transitionEnd webkitTransitionEnd',function(ev){
	$("#loading").children("ul").children("li").removeClass("loadingactive");
	setTimeout(function(){
		$("#loading").children("ul").children("li").addClass("loadingactive");
		},500)
	});


		
		
/*首屏开门*/
    var $men=$(".men");//大门
	var $left=$(".left");//左门
	var $right=$(".right");//右门
	$men.on("touchstart",function(){
		$left.css("transition","1s ease-in-out");
		$right.css("transition","1s ease-in-out");
		$left.css("transform","rotateY(-90deg)");
		$right.css("transform","rotateY(-90deg)")
		});
	$men.on('transitionEnd webkitTransitionEnd',function(ev){
		showMusic()
			$(this).remove();
			cjAnimate[0].inAn();
		
		});
		
/*音乐*/

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
	var arr=["left.png","music.png","right.png","t1.png","t6.png","t7.png","t10.png","t11.png","t12.png","t13.png","t14.png","t15.png","t19.png","t20.png","t21.png","t22.png","t25.png","t26.png","t27.png","t30.png","t31.png","t32.png","t33.png","t34.png","t36.png","t37.png","t39.png","t40.png","t43.png","t44.png","t45.png","t46.png","t47.png","t48.png","t49.png","t50.png","t52.png","t53.png","t54.png","t55.png","t56.png","t57.png","t58.png","t59.png","t60.png","t61.png","t62.jpg","t63.jpg"];
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
					});
				  },100)
				}
			};
			objImg.onerror = function(){
				setTimeout(function(){
				$loading.animate({opacity:0},600,function(){
				$(this).remove();
				});
				},100)
			};	
		}
	};
/*场景动画*/
var cjAnimate=[
/*动画一*/
	{
	  inAn:function(){
		  var $love = $li.eq(0).children(".li1Child").children('li').eq(5);
		  var $hehu = $li.eq(0).children(".li1Child").children('li').eq(0);
		  var $jiaren = $li.eq(0).children(".li1Child").children('li').eq(1);
		  var $shu = $li.eq(0).children(".li1Child").children('li').eq(2);
		  var $daxin = $li.eq(0).children(".li1Child").children('li').eq(3);
		  var $xiaoxin = $li.eq(0).children(".li1Child").children('li').eq(4);
		  var $bipaofu1 = $li.eq(0).children(".li1Child").children('li').eq(6);
		  var $tinglong1 = $li.eq(0).children(".li1Child").children('li').eq(7);
		  $bipaofu1.css('opacity',1);
		  $bipaofu1.css("transition","1.5s");
		  $bipaofu1.css('transform','translate(0,0)');
		  
		  $tinglong1.css('opacity',1);
		  $tinglong1.css("transition","1.5s");
		  $tinglong1.css('transform','translate(0,0)');
		  $tinglong1.on('transitionEnd webkitTransitionEnd',function(){
			  $love.css('opacity',1);
			  $love.css("transition","1s");
			  $love.css('transform','translate(0,0)');
			  $jiaren.css('opacity',1);
			$jiaren.css("transition","0.8s");
			$jiaren.css('transform','translate(0,0)');
			  });
		
		  $jiaren.on('transitionEnd webkitTransitionEnd',function(){
			  $daxin.css('opacity',1);
			  $xiaoxin.css('opacity',1);
			  $daxin.css("transition","1s");
			  $daxin.attr("class","daxin1");
			  $xiaoxin.css("transition","1s");
			  $xiaoxin.attr("class","xiaoxin1");
			  });
		  $xiaoxin.on('transitionEnd webkitTransitionEnd',function(){
			   $daxin.addClass("daxinmove1");
			   $xiaoxin.addClass("xiaoxinmove1");
			   
			   $hehu.css('opacity',1);
			   $hehu.css("transition","0.5s");
			   $hehu.attr("class","hehu1");
			  });
		  $hehu.on('transitionEnd webkitTransitionEnd',function(){
			   $shu.css('opacity',1);
			   $shu.css("transition","1s");
			   $shu.attr("class","shu1");  
			  });
		  $shu.on('transitionEnd webkitTransitionEnd',function(){
			   $shu.addClass("shuscale1");
			  });
	     },
	  outAn:function(){
		  var $love = $li.eq(0).children(".li1Child").children('li').eq(5);
		  var $hehu = $li.eq(0).children(".li1Child").children('li').eq(0);
		  var $jiaren = $li.eq(0).children(".li1Child").children('li').eq(1);
		  var $shu = $li.eq(0).children(".li1Child").children('li').eq(2);
		  var $daxin = $li.eq(0).children(".li1Child").children('li').eq(3);
		  var $xiaoxin = $li.eq(0).children(".li1Child").children('li').eq(4);
		  var $bipaofu1 = $li.eq(0).children(".li1Child").children('li').eq(6);
		  var $tinglong1 = $li.eq(0).children(".li1Child").children('li').eq(7);
		  $li.eq(0).children(".li1Child").children('li').css('opacity',0);
		  $bipaofu1.css("transition","");
		  $bipaofu1.css('transform','translate(-100px,0)');
		  $tinglong1.css("transition","");
		  $tinglong1.css('transform','translate(100px,0)');
		  
		  
		  $love.css("transition","");
		  $love.css('transform','translate(0,-200px)');
          $jiaren.css("transition","");
		  $jiaren.css('transform','translate(0,100px)');
		  $daxin.css("transition","");
		  $daxin.attr("class","");
		  $xiaoxin.css("transition","");
		  $xiaoxin.attr("class","");
		  $hehu.css("transition","");
		  $hehu.attr("class","");
		  $shu.css("transition","");
		  $shu.attr("class","");
		  }
	},
	
				

	/*动画二*/
	 {
		  inAn:function(){
		   var $leftyun = $li.eq(1).children(".li2Child").children('li').eq(0);
		   var $rightyun = $li.eq(1).children(".li2Child").children('li').eq(1);
		   var $qizi = $li.eq(1).children(".li2Child").children('li').eq(2);
		   var $jinxiwz = $li.eq(1).children(".li2Child").children('li').eq(3);
		   var $qingyun = $li.eq(1).children(".li2Child").children('li').eq(4);
		   var $shu2 = $li.eq(1).children(".li2Child").children('li').eq(5);
		   var $daxin2 = $li.eq(1).children(".li2Child").children('li').eq(6);
		   var $xiaoxin2 = $li.eq(1).children(".li2Child").children('li').eq(7);
		   $leftyun.css('opacity',1);
		   $leftyun.css("transition","2s");
		   $leftyun.css('transform','translate(0,0)');
		   $rightyun.css('opacity',1);
		   $rightyun.css("transition","2s");
		   $rightyun.css('transform','translate(0,0)');
		   $rightyun.on('transitionEnd webkitTransitionEnd',function(){
			   $leftyun.attr("class","leftyun2");
			   $rightyun.attr("class","rightyun2");
			   $qizi.css('opacity',1);
			   $qizi.css("transition","1.5s");
		       $qizi.css('transform','translate(0,0)');
			   $qingyun.css('opacity',1);
			   $qingyun.css("transition","1s");
		       $qingyun.css('transform','translate(0,0)');
			   });
		   $qingyun.on('transitionEnd webkitTransitionEnd',function(){
			    $daxin2.css('opacity',1);
			    $daxin2.attr("class","daxin22");
			    $daxin2.css("transition","1s");
			    $xiaoxin2.css('opacity',1);
			    $xiaoxin2.css("transition","1s");
			    $xiaoxin2.attr("class","xiaoxin22");
			   });
		   $xiaoxin2.on('transitionEnd webkitTransitionEnd',function(){
			 $daxin2.addClass("daxin22move2");
			 $xiaoxin2.addClass("xiaoxin22move2");
			 $jinxiwz.css("transition","0.5s");
			 $jinxiwz.css('opacity',1);
			 $jinxiwz.attr("class","jinxiwz2"); 
			});
			
		   $jinxiwz.on('transitionEnd webkitTransitionEnd',function(){
			    $shu2.css('opacity',1);
		        $shu2.css("transition","1s");
			    $shu2.attr("class","shu22");
				 });
			 $shu2.on('transitionEnd webkitTransitionEnd',function(){
				 $shu2.addClass("shu22move2");
				 });
			},
		  outAn:function(){
		   var $leftyun = $li.eq(1).children(".li2Child").children('li').eq(0);
		   var $rightyun = $li.eq(1).children(".li2Child").children('li').eq(1);
		   var $qizi = $li.eq(1).children(".li2Child").children('li').eq(2);
		   var $jinxiwz = $li.eq(1).children(".li2Child").children('li').eq(3);
		   var $qingyun = $li.eq(1).children(".li2Child").children('li').eq(4);
		   var $shu2 = $li.eq(1).children(".li2Child").children('li').eq(5);
		   var $daxin2 = $li.eq(1).children(".li2Child").children('li').eq(6);
		   var $xiaoxin2 = $li.eq(1).children(".li2Child").children('li').eq(7);
		   $li.eq(1).children(".li2Child").children('li').css('opacity',0);
		   $leftyun.css("transition","");
		   $leftyun.css('transform','translate(-200px,0)');
		   $rightyun.css("transition","");
		   $rightyun.css('transform','translate(200px,0)');
		   $qizi.css("transition","");
		   $qizi.css('transform','translate(0,-100px)');
		   $qingyun.css("transition","");
		   $qingyun.css('transform','translate(0,200px)');
		   $jinxiwz.css("transition","");
		   $jinxiwz.attr("class","");
		   $daxin2.css("transition","");
		   $daxin2.attr("class","");
		   $xiaoxin2.css("transition","");
		   $xiaoxin2.attr("class","");
		   $shu2.css("transition","");
		   $shu2.attr("class","");
			 }
		},
		{
		  inAn:function(){
		  var $jhb7=$li.eq(2).children(".li7Child").children('li').eq(0);
		  var $leftyun7=$li.eq(2).children(".li7Child").children('li').eq(1);
		  var $rightyun7=$li.eq(2).children(".li7Child").children('li').eq(2);
		  var $jhren7=$li.eq(2).children(".li7Child").children('li').eq(3);
		  var $daxin7=$li.eq(2).children(".li7Child").children('li').eq(4);
		  var $xiaoxin7=$li.eq(2).children(".li7Child").children('li').eq(5);
		  var $wenzi7=$li.eq(2).children(".li7Child").children('li').eq(6);
		  var $shu7=$li.eq(2).children(".li7Child").children('li').eq(7);
		  $leftyun7.css("transition","1s");
		  $leftyun7.css('opacity',1);
		  $leftyun7.css('transform','translate(0,0)');
		  $rightyun7.css("transition","2s");
		  $rightyun7.css('opacity',1);
		  $rightyun7.css('transform','translate(0,0)');
		  $jhb7.css("transition","2.5s");
		  $jhb7.css('opacity',1);
		  $jhb7.css('transform','translate(0,0)');
		  $jhren7.css("transition","2.5s");
		  $jhren7.css('opacity',1);
		  $jhren7.css('transform','translate(0,0)');
		  $jhren7.on('transitionEnd webkitTransitionEnd',function(){
		  $leftyun7.addClass("leftyun7move7");
		  $rightyun7.addClass("rightyun7move7");
		  $daxin7.css('opacity',1);
		  $daxin7.attr("class","daxin77");
		  $daxin7.css("transition","1s");
		  $xiaoxin7.css('opacity',1);
		  $xiaoxin7.css("transition","1s");
		  $xiaoxin7.attr("class","xiaoxin77");
			})	
		  $xiaoxin7.on('transitionEnd webkitTransitionEnd',function(){
		 $daxin7.addClass("daxin7move7");
		 $xiaoxin7.addClass("xiaoxin7move7");
		 $xiaoxin7.css("transition","1s");
			  });
		  $xiaoxin7.on('transitionEnd webkitTransitionEnd',function(){
              $wenzi7.css('opacity',1);
			  $wenzi7.css("transition","0.5s");
			  $wenzi7.attr("class","wenzi7wz7");
			 });
		 $wenzi7.on('transitionEnd webkitTransitionEnd',function(){
				$shu7.css('opacity',1);
		        $shu7.css("transition","1s");
			    $shu7.attr("class","shu77yid");
			});
		 $shu7.on('transitionEnd webkitTransitionEnd',function(){
			 $shu7.addClass("shu7move77")
			 });
				
		
			  },
		  outAn:function(){
		  var $jhb7=$li.eq(2).children(".li7Child").children('li').eq(0);
		  var $leftyun7=$li.eq(2).children(".li7Child").children('li').eq(1);
		  var $rightyun7=$li.eq(2).children(".li7Child").children('li').eq(2);
		  var $jhren7=$li.eq(2).children(".li7Child").children('li').eq(3);
		  var $daxin7=$li.eq(2).children(".li7Child").children('li').eq(4);
		  var $xiaoxin7=$li.eq(2).children(".li7Child").children('li').eq(5);
		  var $wenzi7=$li.eq(2).children(".li7Child").children('li').eq(6);
		  var $shu7=$li.eq(2).children(".li7Child").children('li').eq(7);
		  $li.eq(2).children(".li7Child").children('li').css('opacity',0);
		  $leftyun7.css("transition","");
		  $leftyun7.css('transform','translate(-100px,0)');
		  $rightyun7.css("transition","");
		  $rightyun7.css('transform','translate(200px,0)');
		  $jhb7.css("transition","");
		  $jhb7.css('transform','translate(0,-150px)');
          $jhren7.css("transition","");
		  $jhren7.css('transform','translate(0,200px)');
		  $daxin7.css("transition","");
		  $daxin7.attr("class","");
		  $xiaoxin7.css("transition","");
		  $xiaoxin7.attr("class","");
		  $wenzi7.css("transition","");
		  $wenzi7.attr("class","");
		  $shu7.css("transition","");
		  $shu7.attr("class","");
			  }
		},
        {
		 inAn:function(){
			var $gechangzai5 = $li.eq(3).children(".li5Child").children('li').eq(0);
			var $bigai5 = $li.eq(3).children(".li5Child").children('li').eq(1);
			var $dadi5 = $li.eq(3).children(".li5Child").children('li').eq(2); 
			var $jiehun5 = $li.eq(3).children(".li5Child").children('li').eq(3);
			var $daxin5 = $li.eq(3).children(".li5Child").children('li').eq(4);
			var $xiaoxin5 = $li.eq(3).children(".li5Child").children('li').eq(5);
			var $shu5 = $li.eq(3).children(".li5Child").children('li').eq(6);
			$gechangzai5.css('opacity',1);
			$gechangzai5.css("transition","1.5s");
			$gechangzai5.css('transform','translate(0,0)');
			$dadi5.css('opacity',1);
			$dadi5.css("transition","1.5s");
			$dadi5.css('transform','translate(0,0)');
			    $jiehun5.css('opacity',1);
				$jiehun5.css("transition","1.5s");
			    $jiehun5.attr("class","jiehun5");
		     $jiehun5.on('transitionEnd webkitTransitionEnd',function(){
				 $daxin5.css('opacity',1);
			    $daxin5.attr("class","daxin55");
			    $daxin5.css("transition","1s");
			    $xiaoxin5.css('opacity',1);
			    $xiaoxin5.css("transition","1s");
			    $xiaoxin5.attr("class","xiaoxin55");
				 });
			$xiaoxin5.on('transitionEnd webkitTransitionEnd',function(){
				 $daxin5.addClass("daxin5move5");
				 $xiaoxin5.addClass("xiaoxin5move5");
				 $xiaoxin5.css("transition","1s");
				});
			$xiaoxin5.on('transitionEnd webkitTransitionEnd',function(){
				$bigai5.css('opacity',1);
				$bigai5.css("transition","0.5s");
				$bigai5.attr("class","bigai5wz5");
				});
			$bigai5.on('transitionEnd webkitTransitionEnd',function(){
				$shu5.css('opacity',1);
		        $shu5.css("transition","1s");
			    $shu5.attr("class","shu55yid");
				});
			$shu5.on('transitionEnd webkitTransitionEnd',function(){
				$shu5.addClass("shu5move55")
				});
			
			 },
		 outAn:function(){
			var $gechangzai5 = $li.eq(3).children(".li5Child").children('li').eq(0);
			var $bigai5 = $li.eq(3).children(".li5Child").children('li').eq(1);
			var $dadi5 = $li.eq(3).children(".li5Child").children('li').eq(2); 
			var $jiehun5 = $li.eq(3).children(".li5Child").children('li').eq(3);
			var $daxin5 = $li.eq(3).children(".li5Child").children('li').eq(4);
			var $xiaoxin5 = $li.eq(3).children(".li5Child").children('li').eq(5);
			var $shu5 = $li.eq(3).children(".li5Child").children('li').eq(6); 
			$li.eq(3).children(".li5Child").children('li').css('opacity',0);
			$gechangzai5.css("transition","");
			$gechangzai5.css('transform','translate(0,-100px)');
			$dadi5.css("transition","");
			$dadi5.css('transform','translate(-400px,0)');
			$jiehun5.css("transition","");
			$jiehun5.attr("class","");
			$daxin5.css("transition","");
			$daxin5.attr("class","");
			$xiaoxin5.css("transition","");
			$xiaoxin5.attr("class","");
			$bigai5.css("transition","");
			$bigai5.attr("class","");
			$shu5.css("transition","");
			$shu5.attr("class","");
			 }
		},

		{
		  inAn:function(){
			 var $zuoyun3 = $li.eq(4).children(".li3Child").children('li').eq(0);	
			 var $centeryun3 = $li.eq(4).children(".li3Child").children('li').eq(1);
			 var $youyun3 = $li.eq(4).children(".li3Child").children('li').eq(2);	
			 var $ganenxin3 = $li.eq(4).children(".li3Child").children('li').eq(3);	
			 
			 var $laoren3 = $li.eq(4).children(".li3Child").children('li').eq(4);
			 var $daxue3 = $li.eq(4).children(".li3Child").children('li').eq(5);
			 var $xiaoxue3 = $li.eq(4).children(".li3Child").children('li').eq(6);	
			 var $xiaoxuetwo3 = $li.eq(4).children(".li3Child").children('li').eq(7);
			 var $shu3 = $li.eq(4).children(".li3Child").children('li').eq(8);	
			 var $daxin3 = $li.eq(4).children(".li3Child").children('li').eq(9);
			 var $xiaoxin3 = $li.eq(4).children(".li3Child").children('li').eq(10);	
			 var $hengfu3 = $li.eq(4).children(".li3Child").children('li').eq(11);	
			 $zuoyun3.css('opacity',1);
		     $zuoyun3.css("transition","1.5s");
		     $zuoyun3.css('transform','translate(0,0)');
			 $centeryun3.css('opacity',1);
		     $centeryun3.css("transition","3s");
		     $centeryun3.css('transform','translate(0,0)');
			 $youyun3.css('opacity',1);
		     $youyun3.css("transition","4s");
		     $youyun3.css('transform','translate(0,0)');
			 $youyun3.on('transitionEnd webkitTransitionEnd',function(){
				$zuoyun3.addClass("zuoyun3move3"); 
				$centeryun3.addClass("centeryun3move3");
				$youyun3.addClass("youyun3move3");
				 });
			  $zuoyun3.on('transitionEnd webkitTransitionEnd',function(){
				  $laoren3.css('opacity',1);
				  $laoren3.css("transition","1.5s");
			      $laoren3.css('transform','translate(0,0)');
				  $hengfu3.css('opacity',1);
				  $hengfu3.css("transition","1s");
			      $hengfu3.css('transform','translate(0,0)');
				  });
			$laoren3.on('transitionEnd webkitTransitionEnd',function(){
				 $daxue3.css('opacity',1);
			     $daxue3.css("transition","1.5s");
				 $daxue3.css('transform','translate(0,0)');
				 
				 $xiaoxue3.css('opacity',1);
				 $xiaoxue3.css("transition","1.2s");
				 $xiaoxue3.css('transform','translate(0,0)');
				 
				 $xiaoxuetwo3.css('opacity',1);
				 $xiaoxuetwo3.css("transition","2s");
				 $xiaoxuetwo3.css('transform','translate(0,0)');
				 
				
				});
			$xiaoxuetwo3.on('transitionEnd webkitTransitionEnd',function(){
				$daxue3.addClass("daxue3rote3");
				$xiaoxue3.addClass("xiaoxue3rote3");
				$xiaoxuetwo3.addClass("xiaoxuetwo3rote3");
				
				$daxin3.css('opacity',1);
			    $daxin3.attr("class","daxin33");
			    $daxin3.css("transition","1s");
			    $xiaoxin3.css('opacity',1);
			    $xiaoxin3.css("transition","1s");
			    $xiaoxin3.attr("class","xiaoxin33");
				
				});
			 $xiaoxin3.on('transitionEnd webkitTransitionEnd',function(){
				 $daxin3.addClass("daxin3move3");
				 $xiaoxin3.addClass("xiaoxin3move3");
				 $xiaoxin3.css("transition","1s");
				
				
				 });
			  $xiaoxin3.on('transitionEnd webkitTransitionEnd',function(){
				   $ganenxin3.css('opacity',1);
				   $ganenxin3.css("transition","0.5s");
				   $ganenxin3.attr("class","ganenxin3wz3");
				  });
	
			  $ganenxin3.on('transitionEnd webkitTransitionEnd',function(){
				   $shu3.css('opacity',1);
		           $shu3.css("transition","1s");
			       $shu3.attr("class","shu33yid");
				  });
			   $shu3.on('transitionEnd webkitTransitionEnd',function(){
				   $shu3.addClass("shu3move33")
				   });
			  },
		  outAn:function(){
			 var $zuoyun3 = $li.eq(4).children(".li3Child").children('li').eq(0);	
			 var $centeryun3 = $li.eq(4).children(".li3Child").children('li').eq(1);
			 var $youyun3 = $li.eq(4).children(".li3Child").children('li').eq(2);	
			 var $ganenxin3 = $li.eq(4).children(".li3Child").children('li').eq(3);	
			 
			 var $laoren3 = $li.eq(4).children(".li3Child").children('li').eq(4);
			 var $daxue3 = $li.eq(4).children(".li3Child").children('li').eq(5);
			 var $xiaoxue3 = $li.eq(4).children(".li3Child").children('li').eq(6);	
			 var $xiaoxuetwo3 = $li.eq(4).children(".li3Child").children('li').eq(7);
			 var $shu3 = $li.eq(4).children(".li3Child").children('li').eq(8);	
			 var $daxin3 = $li.eq(4).children(".li3Child").children('li').eq(9);
			 var $xiaoxin3 = $li.eq(4).children(".li3Child").children('li').eq(10);
			 var $hengfu3 = $li.eq(4).children(".li3Child").children('li').eq(11);	
			 $li.eq(4).children(".li3Child").children('li').css('opacity',0);
			 $zuoyun3.css("transition","");
		     $zuoyun3.css('transform','translate(-200px,0)');
			 $centeryun3.css("transition","");
		     $centeryun3.css('transform','translate(-100px,0)');
			 $youyun3.css("transition","");
		     $youyun3.css('transform','translate(200px,0)');
			 $laoren3.css("transition","");
			 $laoren3.css('transform','translate(0,100px)');
			 $daxue3.css("transition","");
			 $daxue3.css('transform','translate(60px,-350px)');
			 
			 $xiaoxue3.css("transition","");
			 $xiaoxue3.css('transform','translate(100px,-200px)');
			 
			 $xiaoxuetwo3.css("transition","");
			 $xiaoxuetwo3.css('transform','translate(120px,-300px)');
			 
			 $daxin3.css("transition","");
			 $daxin3.attr("class","");
			 $xiaoxin3.css("transition","");
			 $xiaoxin3.attr("class","");
			 $ganenxin3.css("transition","");
			 $ganenxin3.attr("class","");
			 $hengfu3.css("transition","");
			 $hengfu3.css('transform','translate(0,-100px)');
			 $shu3.css("transition","");
			 $shu3.attr("class","");
			
			  }
		},
		{
		 inAn:function(){
			 var $topaixin6 = $li.eq(5).children(".li6Child").children('li').eq(0); 
			 var $leftyun6 = $li.eq(5).children(".li6Child").children('li').eq(1); 
			 var $rightyun6 = $li.eq(5).children(".li6Child").children('li').eq(2);
			 var $denglong6 = $li.eq(5).children(".li6Child").children('li').eq(3); 
			 var $dadan6 = $li.eq(5).children(".li6Child").children('li').eq(4); 
			 var $jiansu6 = $li.eq(5).children(".li6Child").children('li').eq(5);
			 var $juban6 = $li.eq(5).children(".li6Child").children('li').eq(6);
			 var $huodong6 = $li.eq(5).children(".li6Child").children('li').eq(7); 
			 var $mianfei6 = $li.eq(5).children(".li6Child").children('li').eq(8);
			 var $leftzp6 = $li.eq(5).children(".li6Child").children('li').eq(9);
			 var $centerzp6 = $li.eq(5).children(".li6Child").children('li').eq(10);
			 var $righttup6 = $li.eq(5).children(".li6Child").children('li').eq(11);
			 $topaixin6.css("transition","1.5s");
			 $topaixin6.css('opacity',1);
			 $leftyun6.css("transition","1.6s");
			 $leftyun6.css('opacity',1);
			 $leftyun6.css('transform','translate(0,0)');
			 $rightyun6.css("transition","2s");
			 $rightyun6.css('opacity',1);
			 $rightyun6.css('transform','translate(0,0)');
			 $rightyun6.on('transitionEnd webkitTransitionEnd',function(){
				 $leftyun6.addClass("leftyun6move");
				 $rightyun6.addClass("rightyun6move");
				 $rightyun6.css("transition","2s");
				 $denglong6.css('opacity',1);
				 $denglong6.css("transition","1.5s");
			     $denglong6.css('transform','translate(0,0)');
				 });
			 $rightyun6.on('transitionEnd webkitTransitionEnd',function(){
				 $dadan6.css('opacity',1);
				 $dadan6.css("transition","0.6s");
			     $dadan6.css('transform','translate(0,0)');
				 });
			 $dadan6.on('transitionEnd webkitTransitionEnd',function(){
				 $jiansu6.css('opacity',1);
				 $jiansu6.css("transition","0.6s");
			     $jiansu6.css('transform','translate(0,0)');
				 });
			 $jiansu6.on('transitionEnd webkitTransitionEnd',function(){
				 $juban6.css('opacity',1);
				 $juban6.css("transition","0.6s");
			     $juban6.css('transform','translate(0,0)');
				 });
			 $juban6.on('transitionEnd webkitTransitionEnd',function(){
				 $huodong6.css('opacity',1);
				 $huodong6.css("transition","0.6s");
			     $huodong6.css('transform','translate(0,0)');
				 });
			 $huodong6.on('transitionEnd webkitTransitionEnd',function(){
				 $mianfei6.css('opacity',1);
				 $mianfei6.css("transition","0.6s");
			     $mianfei6.css('transform','translate(0,0)');
				 });
			 $mianfei6.on('transitionEnd webkitTransitionEnd',function(){
				 $centerzp6.css('opacity',1);
				 $centerzp6.css("transition","0.6s");
			     $centerzp6.css('transform','translate(0,0)');
				 $leftzp6.css('opacity',1);
				  $leftzp6.css("transition","0.6s");
			     $leftzp6.css('transform','translate(0,0)');
				 $righttup6.css('opacity',1);
				  $righttup6.css("transition","0.6s");
			     $righttup6.css('transform','translate(0,0)');
				 });
			 
			
			 },
		 outAn:function(){
			 var $topaixin6 = $li.eq(5).children(".li6Child").children('li').eq(0); 
			 var $leftyun6 = $li.eq(5).children(".li6Child").children('li').eq(1); 
			 var $rightyun6 = $li.eq(5).children(".li6Child").children('li').eq(2);
			 var $denglong6 = $li.eq(5).children(".li6Child").children('li').eq(3); 
			 var $dadan6 = $li.eq(5).children(".li6Child").children('li').eq(4); 
			 var $jiansu6 = $li.eq(5).children(".li6Child").children('li').eq(5);
			 var $juban6 = $li.eq(5).children(".li6Child").children('li').eq(6);
			 var $huodong6 = $li.eq(5).children(".li6Child").children('li').eq(7); 
			 var $mianfei6 = $li.eq(5).children(".li6Child").children('li').eq(8);
			 var $leftzp6 = $li.eq(5).children(".li6Child").children('li').eq(9);
			 var $centerzp6 = $li.eq(5).children(".li6Child").children('li').eq(10);
			 var $righttup6 = $li.eq(5).children(".li6Child").children('li').eq(11);
			 $li.eq(5).children(".li6Child").children('li').css('opacity',0);
			 $topaixin6.css("transition","");
			 $leftyun6.css("transition","");
			 $leftyun6.css('transform','translate(-200px,0)');
			 $rightyun6.css("transition","");
			 $rightyun6.css('transform','translate(100px,0)');
			 $denglong6.css("transition","");
			 $denglong6.css('transform','translate(-100px,0)');
			 $dadan6.css("transition","");
			 $dadan6.css('transform','translate(0,40px)');
			 $jiansu6.css("transition","");
			 $jiansu6.css('transform','translate(0,40px)');
			 $juban6.css("transition","");
			 $juban6.css('transform','translate(0,40px)');
			 $huodong6.css("transition","");
			 $huodong6.css('transform','translate(0,40px)');
			 $mianfei6.css("transition","");
			 $mianfei6.css('transform','translate(0,40px)');
			 $centerzp6.css("transition","");
			 $centerzp6.css('transform','translate(0,100px)');
			 $leftzp6.css("transition","");
			 $leftzp6.css('transform','translate(-100px,0)');
			 $righttup6.css("transition","");
			 $righttup6.css('transform','translate(100px,0)');
			 }	
		}
];


$.each(cjAnimate,function(i,obj){
	obj.outAn();
	})
})
