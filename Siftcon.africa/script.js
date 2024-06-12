(function(html){html.className = html.className.replace(/\bno-js\b/,'js')})(document.documentElement);


var pagelayer_ajaxurl = "https://techoma.tech/site-admin/admin-ajax.php?";
var pagelayer_global_nonce = "e9cea6ea87";
var pagelayer_server_time = 1716449962;
var pagelayer_is_live = "";
var pagelayer_facebook_id = "";
var pagelayer_settings = {"post_types":["post","page"],"enable_giver":false,"max_width":1170,"tablet_breakpoint":780,"mobile_breakpoint":360,"sidebar":false,"body_font":false,"color":false};
var pagelayer_recaptch_lang = "";

type="text/javascript" src="https://techoma.tech/site-inc/js/jquery/jquery.js?ver=1.12.4";
type="text/javascript" src="https://techoma.tech/site-inc/js/jquery/jquery-migrate.min.js?ver=1.4.1";
type="text/javascript" src="https://techoma.tech/site-data/plugins/pagelayer-pro/js/combined.premium.js?ver=1.8.5";

!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d)if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);