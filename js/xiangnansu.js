['投注明細', '歷史統計', '會員資料', '網站連結', '規則', '留言', '賽事直播'].forEach(function (element, index, array) {
	let self = document.getElementById(element);
	self.addEventListener('click', function () {
		array.forEach(function (element) {
			document.getElementById(element).classList.remove('active');
		});
		self.classList.add('active');
	});
});

['WM CASION', '體育博彩'].forEach(function (element, index, array) {
	document.getElementById(element).addEventListener('click', function () {
		document.getElementById('dropdown-button').textContent = element;
	});
});

$(document).ready(function()
{
	$('#collapse-1').on('show.bs.collapse',function()
	{
		$('#collapse-1').css('background-color','#e8f1f5');
	});
	$('#collapse-1').on('hide.bs.collapse',function()
	{
		$('#collapse-1').css('background-color','#e8f1f5');
	});
});

(function()
{
	let outer=document.createElement('div');
	outer.style.visibility='hidden';
	outer.style.width='100px';
	outer.style.msOverflowStyle='scrollbar';
	document.body.appendChild(outer);
	let widthNoScroll=outer.offsetWidth;
	outer.style.overflow='scroll';
	let inner=document.createElement('div');
	inner.style.width='100%';
	outer.appendChild(inner);
	let widthWithScroll=inner.offsetWidth;
	outer.parentNode.removeChild(outer);
	var scrollbarWidth=widthNoScroll-widthWithScroll;
	var element=document.getElementById('grid-item-6');
	var style=window.getComputedStyle(element);
	var elementWidth=parseInt(style.width);
	element.style.width=`${elementWidth-scrollbarWidth}px`;

})();

function createCollapse(args1,args2)
{
	$("#grid-item-7").html('');

	args1.forEach(function(arg1,index)
	{
		$("#grid-item-7").append(`
			<button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${index}" style="display:flex;align-items:center;">
				<span style="display:flex"><img src="./img/08.png" style="height:2.5vh;width:auto;padding-right:0.25vw;"></span>${arg1}
			</button>
		`);
		args2[index].forEach(function(arg2)
		{
			$("#grid-item-7").append(`
			<div class="collapse" id="collapse-${index}">
				<div class="collapse-grid-container">
					<div class="collapse-column-wrapper" style="border-left:none;">
						<div class="collapse-column collapse-column-1">
							<div class="collapse-item collapse-item-1-1">${arg2['比賽日期']}</div>
							<div class="collapse-item collapse-item-1-2">${arg2['比賽時間']}</div>
							<div class="collapse-item collapse-item-1-3">&nbsp;&nbsp;</div>
							<div class="collapse-item collapse-item-1-4"><span style="background-color: #e87479; padding-left: 0.5vw; padding-right: 0.5vw;color:white;">${arg2['走地']}</span></div>
						</div>
					</div>
					<div class="collapse-column-wrapper">
						<div class="collapse-column collapse-column-2">
							<div class="collapse-item collapse-item-2-1">${arg2['客隊名稱']}</div>
							<div class="collapse-item collapse-item-2-2">${arg2['主隊名稱']}&nbsp;<span style="color:red;">(主)</span></div>
							<div class="collapse-item collapse-item-2-3">&nbsp;&nbsp;</div>
							<div class="collapse-item collapse-item-2-4"><img src="./img/09.png" style="height:2.5vh;width:auto;"></div>
						</div>
					</div>
					<div class="collapse-column-wrapper">
						<div class="collapse-column collapse-column-3">
							<div class="collapse-item collapse-item-3-1">2輸</div>
							<div class="collapse-item collapse-item-3-2">&nbsp;</div>
							<div class="collapse-item collapse-item-3-3">${arg2['客隊讓分']}</div>
							<div class="collapse-item collapse-item-3-4">${arg2['主隊讓分']}</div>
						</div>
					</div>
					<div class="collapse-column-wrapper">
						<div class="collapse-column collapse-column-4">
							<div class="collapse-item collapse-item-4-1">214平</div>
							<div class="collapse-item collapse-item-4-2">&nbsp;</div>
							<div class="collapse-item collapse-item-4-3">大</div>
							<div class="collapse-item collapse-item-4-4">&nbsp;</div>
							<div class="collapse-item collapse-item-4-5">${arg2['大']}</div>
							<div class="collapse-item collapse-item-4-6">小</div>
							<div class="collapse-item collapse-item-4-7">&nbsp;</div>
							<div class="collapse-item collapse-item-4-8">${arg2['小']}</div>
						</div>
					</div>
					<div class="collapse-column-wrapper">
						<div class="collapse-column collapse-column-5">
							<div class="collapse-item collapse-item-5-1">${arg2['客隊獨贏']}</div>
							<div class="collapse-item collapse-item-5-2">${arg2['主隊獨贏']}</div>
						</div>
					</div>
					<div class="collapse-column-wrapper">
						<div class="collapse-column collapse-column-6">
							<div class="collapse-item collapse-item-6-1">單</div>
							<div class="collapse-item collapse-item-6-2">&nbsp;</div>
							<div class="collapse-item collapse-item-6-3">${arg2['單']}</div>
							<div class="collapse-item collapse-item-6-4">雙</div>
							<div class="collapse-item collapse-item-6-5">&nbsp;</div>
							<div class="collapse-item collapse-item-6-6">${arg2['雙']}</div>
						</div>
					</div>
					<div class="collapse-column-wrapper"><div class="collapse-column collapse-column-7"></div></div>
				</div>
			</div>
		`);
		});
	});
}