let $categoryTab=$(".gallery-category"),$comic=$("#comic-area"),$cssLoader=$(".loader"),$body=$("body");function init(){var t=$comic.data("category");let a=$(".gallery-category").find("."+t);0<a.length&&a.addClass("current"),getPost(t,!1);let o=!0;$(window).on("scroll",function(){if("block"===$cssLoader.css("display"))return!1;var t=$(".information-container").height(),a=$(this).scrollTop();a+=1e3,o&&(o=!1,setTimeout(function(){if(t<a){let t="all";0<$categoryTab.find(".current").length&&(t=$categoryTab.find(".current").attr("data-category")),getPost(t,!0)}return o=!0,o},100))})}function getPost(a,o){let t=$("#comic-area");var e=t.data("nonce"),s=t.data("path");let i=t.find("#"+a),l=$("#"+a).attr("data-paged");return"block"!==$cssLoader.css("display")&&((!o||"true"!==i.attr("data-loaded"))&&($categoryTab.find("li").addClass("disable"),$cssLoader.fadeIn(),o||t.find(".comic-list").hide(),0<i.find("article").length&&!o?($cssLoader.fadeOut(function(){$categoryTab.find("li").removeClass("disable"),o||i.fadeIn()}),!1):void $.ajax({url:"/wp-content/themes/dpb/ajax-loading/load.php",type:"GET",dataType:"json",data:{cat:a,paged:l,wp_path:s,check_nonce:e},timeout:5e3}).done(function(t){return null!=t&&""!=t&&""!=t.html&&void $cssLoader.fadeOut(function(){$categoryTab.find("li").removeClass("disable"),t.last_page_num==l?i.attr("data-loaded","true"):(l=1+parseInt(l),$("#"+a).attr("data-paged",l)),i.append(t.html),o||i.fadeIn(),$(".comic-list li").wookmark({autoResize:!0,container:$("#container"),offset:20,outerOffset:10})})}).fail(function(t,a,o){$cssLoader.fadeOut(function(){$categoryTab.find("li").removeClass("disable")})})))}$body.hasClass("home")&&(init(),$categoryTab.find("li").on("click",function(t){t.preventDefault(),$(".gallery-category").find("li").removeClass("current"),$(this).addClass("current"),getPost($(this).data("category"),!1)}),$(window).on("load",function(){}));var scrollpos,state=!1;$("#menu-icon").on("click",function(){$("nav").slideToggle(),state=0==state?(scrollpos=$(window).scrollTop(),$("body").addClass("fixed").css({top:-scrollpos}),!0):($("body").removeClass("fixed").css({top:0}),$(window).scrollTop(scrollpos),!1)}),$(function(){$("body").prepend('<div class="overlay"></div>'),$(document).on("click",".img_popup",function(){$(window).width(),$(window).scrollLeft(),$(this).attr("width"),$(window).height(),$(window).scrollTop(),$(this).attr("height");scrollPosition=$(window).scrollTop(),$("body").addClass("fixed").css({top:-scrollPosition}),$("div.overlay").css("height","90%");var t='<div class="inner">';return t+='<div class="image">',t+='<img src="'+$(this).attr("href")+'" />',t+="</div>",t+='<div class="details">',t+='<p class="title">'+$(this).attr("data-title")+"</p>",t+='<p class="meta">'+$(this).attr("data-meta")+"</p>",t+='<div class="caption">'+$(this).attr("data-caption")+"</div>",t+='<ul class="categories">'+$(this).attr("data-cat")+"</ul>",t+='<p class="close"><span></span></p>',t+="</div>",t+="</div>",$("div.overlay").empty().append(t).css({display:"block"}),!1}),$(document).on("click",".close",function(){$("div.overlay").hide(),$("body").removeClass("fixed").css({top:0}),window.scrollTo(0,scrollPosition)})});