
	function hd() {
		(function($) {
			$('.mui-scroll-wrapper').scroll({
				indicators: true //是否显示滚动条
			});
			var html2 = '<ul class="mui-table-view"><li class="mui-table-view-cell"><span class="mui-icon mui-icon-arrowright"></span>购买价格<input type="text" id="hao-inp" placeholder="购买价格"/></li><li class="mui-table-view-cell"><p style="clear: left;">购买AEQ数量：*<span id="block-range-val">1必填<h5>(最大选择数量为1)</h5></span></p><div class="mui-input-row mui-input-range"><input type="range" id="block-range" value="1" min="0" max="1"></div></li><li class="mui-table-view-cell" id="hao-li2">支付方式<span class="mui-icon mui-icon-arrowright"></span><span>金积分</span></li></ul>';
			var html3 = '<ul class="mui-table-view"><li class="mui-table-view-cell">持有AEQ数量</li><li class="mui-table-view-cell"><span class="mui-icon mui-icon-arrowright"></span>出售价格<input type="text" id="hao-inp" placeholder="出售价格"/></li><li class="mui-table-view-cell"><p style="clear: left;">出售AEQ数量：*<span id="block-range-val">1必填<h5>(最大选择数量为1)</h5></span></p><div class="mui-input-row mui-input-range"><input type="range" id="block-range" value="1" min="0" max="1"></div></li><li class="mui-table-view-cell" id="hao-li3">税费<span>0%</span></li></ul>';
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
	phone.addEventListener("tap",function(){
		phone.href="PrePaid-phone.html"
	})
		 var rangeList = document.querySelectorAll('input[type="range"]');
	    for(var i=0,len=rangeList.length;i<len;i++){
	        rangeList[i].addEventListener('input',function(){
	            if(this.id.indexOf('field')>=0){
	                document.getElementById(this.id+'-input').value = this.value;
	                
	            }else{
	                document.getElementById(this.id+'-val').innerHTML = this.value;
	            }
	            
	
	        });
	    }