
	function hd() {
		(function($) {
			$('.mui-scroll-wrapper').scroll({
				indicators: true //是否显示滚动条
			});
			var html2 = '<ul class="mui-table-view"><li class="mui-table-view-cell"><span class="mui-icon mui-icon-arrowright"></span>购买价格</li><li class="mui-table-view-cell">购买AEQ数量:*<span>必填</span></li><li class="mui-table-view-cell" id="hao-li2">支付方式<span class="mui-icon mui-icon-arrowright"></span><span>金积分</span></li></ul>';
			var html3 = '<ul class="mui-table-view"><li class="mui-table-view-cell">持有AEQ数量</li><li class="mui-table-view-cell"><span class="mui-icon mui-icon-arrowright"></span>出售价格</li><li class="mui-table-view-cell">出售AEQ数量:*<span>必填</span></li><li class="mui-table-view-cell" id="hao-li3">税费<span>0%</span></li></ul>';
			var item2 = document.getElementById('item2mobile');
			var item3 = document.getElementById('item3mobile');
			document.getElementById('slider').addEventListener('slide', function(e) {
				if(e.detail.slideNumber === 1) {
					if(item2.querySelector('.mui-loading')) {
						setTimeout(function() {
							item2.querySelector('.mui-scroll').innerHTML = html2;
						}, 500);
					}
				} else if(e.detail.slideNumber === 2) {
					if(item3.querySelector('.mui-loading')) {
						setTimeout(function() {
							item3.querySelector('.mui-scroll').innerHTML = html3;
						}, 500);
					}
				}
			});
			var sliderSegmentedControl = document.getElementById('sliderSegmentedControl');
			$('.mui-input-group').on('change', 'input', function() {
				if(this.checked) {
					sliderSegmentedControl.className = 'mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-segmented-control-' + this.value;
					//force repaint
					sliderProgressBar.setAttribute('style', sliderProgressBar.getAttribute('style'));
				}
			});
		})(mui);
	}
	
	
	var phone = document.getElementById("Recharging")
	var mycode = document.getElementById("mycode")
	var zhucehuiyuan = document.getElementById("zhucehuiyuan")
	var zaixianshengji = document.getElementById("zaixianshengji")
	var zaixianfutou = document.getElementById("zaixianfutou")
	var goumaijihuoma = document.getElementById("goumaijihuoma")
	var shiwudingdan = document.getElementById("shiwudingdan")
	var xunidingdan = document.getElementById("xunidingdan")
	var xitonggonggao = document.getElementById("xitonggonggao")
	var liuyantijiao = document.getElementById("liuyantijiao")
	var wode1liuyan = document.getElementById("wode1liuyan")
	var wode1dizhi = document.getElementById("wode1dizhi")
	var tianjiadizhi = document.getElementById("tianjiadizhi")
	phone.addEventListener("tap",function(){
		phone.href="page/PrePaid-phone.html"
	})
	mycode.addEventListener("tap",function(){
		mycode.href="page/code.html"
	})
	zhucehuiyuan.addEventListener("tap",function(){
		zhucehuiyuan.href="page/registered.html"
	})
	zaixianshengji.addEventListener("tap",function(){
		zaixianshengji.href="page/Online-upgrade.html"
	})
	zaixianfutou.addEventListener("tap",function(){
		zaixianfutou.href="page/Online-after-shots.html"
	})
	goumaijihuoma.addEventListener("tap",function(){
		goumaijihuoma.href="page/Activation-code.html"
	})
	shiwudingdan.addEventListener('tap',function(){
		shiwudingdan.href ="page/OrderList.html"
	})
	xunidingdan.addEventListener('tap',function(){
		xunidingdan.href="tradingPlatform.html"
	})
	xitonggonggao.addEventListener('tap',function(){
		xitonggonggao.href="page/SystemAnnouncement.html"
	})
	liuyantijiao.addEventListener('tap',function(){
		liuyantijiao.href="page/MessageSubmit.html"
	})
	wode1liuyan.addEventListener('tap',function(){
		wode1liuyan.href="page/MyMessage.html"
	})
	wode1dizhi.addEventListener('tap',function(){
		wode1dizhi.href="page/ShippingAddress.html"
	})
	tianjiadizhi.addEventListener('tap',function(){
		tianjiadizhi.href="page/AddTheAddress.html"
	})