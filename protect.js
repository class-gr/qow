// 给 document 对象添加一个事件监听器，监听 "keydown" 事件
// 检do查按下的键是否是 Ctrl + Shift + I
  if (event.ctrlKey && event.shiftKey && event.key === "I") {
    // 阻止默认行为
    event.preventDefault();
    // 打开控制台
    console.log("Console is blocked");
  }cument.addEventListener("keydown", function(event) {
  // 检查按下的键是否是 F12
  if (event.key === "F12" || event.keyCode == 123) {
    // 重定向到 neverf12.html
    window.location.href = "neverf12.html";
  }
});

// 给 document 对象添加一个事件监听器，监听 "mousedown" 事件
document.addEventListener("mousedown", function(event) {
  // 检查事件的目标是否是图片或文本
  if (event.target.tagName === "IMG" || event.target.tagName === "P") {
    // 在选择图片或文本时添加你想要的功能
  }
});

// 防止拖动图片到桌面
document.addEventListener('dragstart', function(event) {
  event.preventDefault();
});

// 禁止所有浏览器插件
window.addEventListener('load', function() {
  if (typeof chrome !== 'undefined') {
    chrome.webstore.install();
  }
  if (typeof InstallTrigger !== 'undefined') {
    InstallTrigger.install();
  }
  if (typeof safari !== 'undefined') {
    safari.extension.install();
  }
  if (typeof opera !== 'undefined') {
    opera.addons.installExtension();
  }
  if (typeof navigator !== 'undefined' && typeof navigator.msSaveOrOpenBlob !== 'undefined') {
    navigator.msSaveOrOpenBlob();
  }
});

// 禁用右键菜单
document.addEventListener("contextmenu", function(event) {
  event.preventDefault();
});

// 禁用文本和图片选择
document.addEventListener("selectstart", function(event) {
  event.preventDefault();
});

		document.addEventListener("contextmenu", function(e) {
		    e.preventDefault();
		});
		
		// 找到所有视频元素
		var videoElements = document.querySelectorAll('video');
		
		// 遍历视频元素并隐藏下载按钮
		videoElements.forEach(function(video) {
		  video.controls = false;
		})