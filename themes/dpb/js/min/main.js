$("#menu-icon").on("click",function(){$("#header nav").slideToggle(),$(this).toggleClass("active"),$("body").toggleClass("noscroll"),$("#header nav a").on("click",function(){return $("#header nav").slideUp("fast"),$("#menu-icon").removeClass("active"),$("body").removeClass("noscroll"),!1})}),$(function(){$('a[href^="#"]').click(function(){var a=$(this).attr("href"),a=$("#"==a||""==a?"html":a).offset().top-60;return $("html, body").animate({scrollTop:a},500,"swing"),!1})});let $categoryTab=$(".gallery-category"),$comic=$("#comic-area"),$cssLoader=$(".loader");function init(){var a=$comic.data("category");let t=$(".gallery-category").find("."+a);0<t.length&&t.addClass("current"),getPost(a,!1);let e=!0;$(window).on("scroll",function(){if("block"===$cssLoader.css("display"))return!1;var a=$(".information-container").height(),t=$(this).scrollTop();t+=1e3,e&&(e=!1,setTimeout(function(){if(a<t){let a="all";0<$categoryTab.find(".current").length&&(a=$categoryTab.find(".current").attr("data-category")),getPost(a,!0)}return e=!0,e},100))})}function getPost(t,e){let a=$("#comic-area");var o=a.data("nonce"),n=a.data("path");let c=a.find("#"+t),i=$("#"+t).attr("data-paged");return"block"!==$cssLoader.css("display")&&((!e||"true"!==c.attr("data-loaded"))&&($categoryTab.find("li").addClass("disable"),$cssLoader.fadeIn(),e||a.find(".comic-list").hide(),0<c.find("article").length&&!e?($cssLoader.fadeOut(function(){$categoryTab.find("li").removeClass("disable"),e||c.fadeIn()}),!1):(console.log("kitayo"),void $.ajax({url:"/wp-content/themes/dpb/ajax-loading/load.php",type:"GET",dataType:"json",data:{cat:t,paged:i,wp_path:n,check_nonce:o},timeout:5e3}).done(function(a){return null!=a&&""!=a&&""!=a.html&&void $cssLoader.fadeOut(function(){$categoryTab.find("li").removeClass("disable"),a.last_page_num==i?c.attr("data-loaded","true"):(i=1+parseInt(i),$("#"+t).attr("data-paged",i)),c.append(a.html),e||c.fadeIn(),$(".the-comic").fancybox()})}).fail(function(a,t,e){$cssLoader.fadeOut(function(){$categoryTab.find("li").removeClass("disable")})}))))}init(),$categoryTab.find("li").on("click",function(a){a.preventDefault(),$(".gallery-category").find("li").removeClass("current"),$(this).addClass("current"),getPost($(this).data("category"),!1)}),$(window).on("load",function(){$(".the-comic").fancybox()});