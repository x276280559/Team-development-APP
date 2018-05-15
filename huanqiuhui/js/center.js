
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
	if(window.plus) {
		plusReady();
	} else {
		document.addEventListener("plusready", plusReady, false);
	}

	function plusReady() {}
	//点击事件，列表的显示隐藏
	var A = document.getElementsByClassName('list-details')
	var C = document.getElementById("one")
	var D = document.getElementById("two")
	var E = document.getElementById("three")
	var F = document.getElementById("four")

	//
	var G = document.getElementById("five")
	var H = document.getElementById("six")
	var I = document.getElementById("seven")
	var J = document.getElementById("eight")
	var K = document.getElementById("nine")
	var L = document.getElementById("ten")
	var M = document.getElementById("eleven")
	var N = document.getElementById("twelve")

	var O = document.getElementById("thirteen")
	var P = document.getElementById("fourteen")

	var Q = document.getElementById("fiveteen")
	var R = document.getElementById("sixteen")
	var S = document.getElementById("eighteen")

	var T = document.getElementById("nineteen")
	var U = document.getElementById("twenty")

	for(var i = 0; i < A.length; i++) {
		var B = A[i]
		B.index = i;
		B.addEventListener('tap', function() {
			//			alert(this.index)	
			if(this.index == 2) {
				C.style.display = "block"
				D.style.display = "block"
				E.style.display = "block"
				F.style.display = "block"
				var div = document.getElementById('b');
				div.className = 'shichang-height';

			} else if(this.index == 4) {
				G.style.display = "block"
				H.style.display = "block"
				I.style.display = "block"
				J.style.display = "block"
				K.style.display = "block"
				L.style.display = "block"
				M.style.display = "block"
				N.style.display = "block"
				var div = document.getElementById('c');
				div.className = 'money-height ';

			} else if(this.index == 5) {
				O.style.display = "block"
				P.style.display = "block"
				var div = document.getElementById('d');
				div.className = 'order-height ';
			} else if(this.index == 6) {
				Q.style.display = "block"
				R.style.display = "block"
				S.style.display = "block"

				var div = document.getElementById('e');
				div.className = 'info-height ';

			} else if(this.index == 7) {
				T.style.display = "block"
				U.style.display = "block"
				var div = document.getElementById('f');
				div.className = 'address-height';

			}

		})
	}