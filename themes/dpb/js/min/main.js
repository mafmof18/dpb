$("#menu-icon").on("click",function(){$("nav").slideToggle(),$(this).toggleClass("active"),$("body").toggleClass("noscroll"),$("nav a").on("click",function(){return $("nav").slideUp("fast"),$("#menu-icon").removeClass("active"),$("body").removeClass("noscroll"),!1})}),$(function(){$('a[href^="#"]').click(function(){var t=$(this).attr("href"),t=$("#"==t||""==t?"html":t).offset().top-60;return $("html, body").animate({scrollTop:t},500,"swing"),!1})}),$(".comic-list li").wookmark({autoResize:!0,container:$("#container"),offset:10,outerOffset:10,itemWidth:210});let $categoryTab=$(".gallery-category"),$comic=$("#comic-area"),$cssLoader=$(".loader"),$body=$("body");function init(){var t=$comic.data("category");let e=$(".gallery-category").find("."+t);0<e.length&&e.addClass("current"),getPost(t,!1);let i=!0;$(window).on("scroll",function(){if("block"===$cssLoader.css("display"))return!1;var t=$(".information-container").height(),e=$(this).scrollTop();e+=1e3,i&&(i=!1,setTimeout(function(){if(t<e){let t="all";0<$categoryTab.find(".current").length&&(t=$categoryTab.find(".current").attr("data-category")),getPost(t,!0)}return i=!0,i},100))})}function getPost(e,i){let t=$("#comic-area");var s=t.data("nonce"),o=t.data("path");let a=t.find("#"+e),n=$("#"+e).attr("data-paged");return"block"!==$cssLoader.css("display")&&((!i||"true"!==a.attr("data-loaded"))&&($categoryTab.find("li").addClass("disable"),$cssLoader.fadeIn(),i||t.find(".comic-list").hide(),0<a.find("article").length&&!i?($cssLoader.fadeOut(function(){$categoryTab.find("li").removeClass("disable"),i||a.fadeIn()}),!1):void $.ajax({url:"/wp-content/themes/dpb/ajax-loading/load.php",type:"GET",dataType:"json",data:{cat:e,paged:n,wp_path:o,check_nonce:s},timeout:5e3}).done(function(t){return null!=t&&""!=t&&""!=t.html&&void $cssLoader.fadeOut(function(){$categoryTab.find("li").removeClass("disable"),t.last_page_num==n?a.attr("data-loaded","true"):(n=1+parseInt(n),$("#"+e).attr("data-paged",n)),a.append(t.html),i||a.fadeIn()})}).fail(function(t,e,i){$cssLoader.fadeOut(function(){$categoryTab.find("li").removeClass("disable")})})))}$body.hasClass("home")&&(init(),$categoryTab.find("li").on("click",function(t){t.preventDefault(),$(".gallery-category").find("li").removeClass("current"),$(this).addClass("current"),getPost($(this).data("category"),!1)}),$(window).on("load",function(){})),$(function(){$("body").prepend('<div class="overlay"></div>'),$(document).on("click",".img_popup",function(){$(window).width(),$(window).scrollLeft(),$(this).attr("width"),$(window).height(),$(window).scrollTop(),$(this).attr("height");$("div.overlay").css("height","96%");var t='<div class="inner">';return t+='<div class="image">',t+='<img src="'+$(this).attr("href")+'" />',t+="</div>",t+='<div class="details">',t+='<p class="title">'+$(this).attr("data-title")+"</p>",t+='<p class="meta">'+$(this).attr("data-meta")+"</p>",t+='<p class="caption">'+$(this).attr("data-caption")+"</p>",t+='<ul class="categories">'+$(this).attr("data-cat")+"</ul>",t+='<p class="close"><span>Close</span></p>',t+="</div>",t+="</div>",$("div.overlay").empty().append(t).css({display:"block"}),!1}),$(".close").click(function(){$("div.overlay").hide()})}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(m){var e,i=function(t,e){return function(){return t.apply(e,arguments)}},s={align:"center",autoResize:!1,comparator:null,container:m("body"),direction:void 0,ignoreInactiveItems:!0,itemWidth:0,fillEmptySpace:!1,flexibleWidth:0,offset:2,outerOffset:0,onLayoutChanged:void 0,possibleFilters:[],resizeDelay:50,verticalOffset:void 0},t=window.requestAnimationFrame||function(t){t()},o=m(window);function p(i){t(function(){for(var t,e=0;e<i.length;e++)(t=i[e]).obj.css(t.css)})}function g(t){return m.trim(t).toLowerCase()}function a(t,e){this.handler=t,this.columns=this.containerWidth=this.resizeTimer=null,this.activeItemCount=0,this.itemHeightsDirty=!0,this.placeholders=[],m.extend(!0,this,s,e),this.verticalOffset=this.verticalOffset||this.offset,this.update=i(this.update,this),this.onResize=i(this.onResize,this),this.onRefresh=i(this.onRefresh,this),this.getItemWidth=i(this.getItemWidth,this),this.layout=i(this.layout,this),this.layoutFull=i(this.layoutFull,this),this.layoutColumns=i(this.layoutColumns,this),this.filter=i(this.filter,this),this.clear=i(this.clear,this),this.getActiveItems=i(this.getActiveItems,this),this.refreshPlaceholders=i(this.refreshPlaceholders,this),this.sortElements=i(this.sortElements,this),this.updateFilterClasses=i(this.updateFilterClasses,this),this.updateFilterClasses(),this.autoResize&&o.bind("resize.wookmark",this.onResize),this.container.bind("refreshWookmark",this.onRefresh)}a.prototype.updateFilterClasses=function(){for(var t,e,i,s,o=0,a=0,n=0,h={},r=this.possibleFilters;o<this.handler.length;o++)if("object"==typeof(t=(e=this.handler.eq(o)).data("filterClass"))&&0<t.length)for(a=0;a<t.length;a++)void 0===h[i=g(t[a])]&&(h[i]=[]),h[i].push(e[0]);for(;n<r.length;n++)(s=g(r[n]))in h||(h[s]=[]);this.filterClasses=h},a.prototype.update=function(t){this.itemHeightsDirty=!0,m.extend(!0,this,t)},a.prototype.onResize=function(){clearTimeout(this.resizeTimer),this.itemHeightsDirty=0!==this.flexibleWidth,this.resizeTimer=setTimeout(this.layout,this.resizeDelay)},a.prototype.onRefresh=function(){this.itemHeightsDirty=!0,this.layout()},a.prototype.filter=function(t,e,i){var s,o,a,n,h=[],r=m();if(e=e||"or",i=i||!1,(t=t||[]).length){for(p=0;p<t.length;p++)(n=g(t[p]))in this.filterClasses&&h.push(this.filterClasses[n]);if(s=h.length,"or"==e||1==s)for(p=0;p<s;p++)r=r.add(h[p]);else if("and"==e){for(var l,c,d,f=h[0],u=!0,p=1;p<s;p++)h[p].length<f.length&&(f=h[p]);for(f=f||[],p=0;p<f.length;p++){for(c=f[p],u=!0,o=0;o<h.length&&u;o++)if(f!=(d=h[o])){for(a=0,l=!1;a<d.length&&!l;a++)l=d[a]==c;u&=l}u&&r.push(f[p])}}i||this.handler.not(r).addClass("inactive")}else r=this.handler;return i||(r.removeClass("inactive"),this.columns=null,this.layout()),r},a.prototype.refreshPlaceholders=function(t,e){for(var i,s,o,a,n=this.placeholders.length,h=this.columns.length,r=this.container.innerHeight();n<h;n++)i=m('<div class="wookmark-placeholder"/>').appendTo(this.container),this.placeholders.push(i);for(a=this.offset+2*parseInt(this.placeholders[0].css("borderLeftWidth"),10),n=0;n<this.placeholders.length;n++)i=this.placeholders[n],o=this.columns[n],h<=n||!o[o.length-1]?i.css("display","none"):(s=o[o.length-1])&&(s=r-(o=s.data("wookmark-top")+s.data("wookmark-height")+this.verticalOffset)-a,i.css({position:"absolute",display:0<s?"block":"none",left:n*t+e,top:o,width:t-a,height:s}))},a.prototype.getActiveItems=function(){return this.ignoreInactiveItems?this.handler.not(".inactive"):this.handler},a.prototype.getItemWidth=function(){var t,e=this.itemWidth,i=this.container.width()-2*this.outerOffset,s=this.handler.eq(0),o=this.flexibleWidth;return void 0===this.itemWidth||0===this.itemWidth&&!this.flexibleWidth?e=s.outerWidth():"string"==typeof this.itemWidth&&0<=this.itemWidth.indexOf("%")&&(e=parseFloat(this.itemWidth)/100*i),o&&("string"==typeof o&&0<=o.indexOf("%")&&(o=parseFloat(o)/100*i),s=~~(.5+(t=i+this.offset)/(o+this.offset)),t=~~(t/(e+this.offset)),t=Math.max(s,t),t=Math.min(o,~~((i-(t-1)*this.offset)/t)),e=Math.max(e,t),this.handler.css("width",e)),e},a.prototype.layout=function(t){if(this.container.is(":visible")){var e,i=this.getItemWidth()+this.offset,s=this.container.width()-2*this.outerOffset,o=~~((s+this.offset)/i),a=0,n=0,h=0,r=this.getActiveItems(),l=r.length;if(this.itemHeightsDirty||!this.container.data("itemHeightsInitialized")){for(;h<l;h++)(e=r.eq(h)).data("wookmark-height",e.outerHeight());this.itemHeightsDirty=!1,this.container.data("itemHeightsInitialized",!0)}o=Math.max(1,Math.min(o,l)),a=this.outerOffset,"center"==this.align&&(a+=~~(s-(o*i-this.offset)+.5>>1)),this.direction=this.direction||("right"==this.align?"right":"left"),n=t||null===this.columns||this.columns.length!=o||this.activeItemCount!=l?this.layoutFull(i,o,a):this.layoutColumns(i,a),this.activeItemCount=l,this.container.css("height",n),this.fillEmptySpace&&this.refreshPlaceholders(i,a),void 0!==this.onLayoutChanged&&"function"==typeof this.onLayoutChanged&&this.onLayoutChanged()}},a.prototype.sortElements=function(t){return"function"==typeof this.comparator?t.sort(this.comparator):t},a.prototype.layoutFull=function(t,e,i){var s,o,a=0,n=0,h=m.makeArray(this.getActiveItems()),r=h.length,l=null,c=null,d=[],f=[],u="left"==this.align;for(this.columns=[],h=this.sortElements(h);d.length<e;)d.push(this.outerOffset),this.columns.push([]);for(;a<r;a++){for(s=m(h[a]),l=d[0],n=c=0;n<e;n++)d[n]<l&&(l=d[n],c=n);s.data("wookmark-top",l),o=i,(0<c||!u)&&(o+=c*t),(f[a]={obj:s,css:{position:"absolute",top:l}}).css[this.direction]=o,d[c]+=s.data("wookmark-height")+this.verticalOffset,this.columns[c].push(s)}return p(f),Math.max.apply(Math,d)},a.prototype.layoutColumns=function(t,e){for(var i,s,o,a,n=[],h=[],r=0,l=0,c=0;r<this.columns.length;r++){for(n.push(this.outerOffset),s=this.columns[r],a=r*t+e,i=n[r],l=0;l<s.length;l++,c++)o=s[l].data("wookmark-top",i),(h[c]={obj:o,css:{top:i}}).css[this.direction]=a,i+=o.data("wookmark-height")+this.verticalOffset;n[r]=i}return p(h),Math.max.apply(Math,n)},a.prototype.clear=function(){clearTimeout(this.resizeTimer),o.unbind("resize.wookmark",this.onResize),this.container.unbind("refreshWookmark",this.onRefresh),this.handler.wookmarkInstance=null},e=a,m.fn.wookmark=function(t){return this.wookmarkInstance?this.wookmarkInstance.update(t||{}):this.wookmarkInstance=new e(this,t||{}),this.wookmarkInstance.layout(!0),this.show()}});