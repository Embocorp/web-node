function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Fviews\u002Ftemplates\u002Fpost.pug":".post-main.panel.panel-default.post-animatediv(id=\"post\" + pid,value=pid)\r\n    .panel-body\r\n    li.dropdown.pull-right(role=\"presentation\", style=\"list-style-type:none\")\r\n        a.dropdown-toggle(data-toggle=\"dropdown\",href=\"#\",role=\"button\",aria-haspopup=\"true\",aria-expanded=\"false\")\r\n            span.caret\r\n        ul.dropdown-menu\r\n            li\r\n                a(href=\"#\") Flag Post\r\n            li\r\n                a(href=\"#\") Report User\r\n            li\r\n                a(href=\"#\") Comment\r\n    a(href=\"\u002Fprofile\u002F\" + username)\r\n        img.img-square.pull-left(src=\"\u002Fimg\u002Fprofile\u002F\" + uid + \".png\",width=40,height=40,data-uid=uid)\r\n    a(href=\"\u002Fprofile\u002F\" + username)\r\n        b= username\r\n    .font-light= post_time + \", \" + city + \", \" + \"country\" \r\n        span.glyphicon.glyphicon-globe(style=\"color:#9197A0\", data-toggle=\"tooltip\", title=post_time)\r\n    .clearfix\r\n    .post-div\r\n    hr \r\n    p= content\r\n    hr\r\n    .font-light\n        a#comment-modal(value=\"pid\", name=\"post\", href=\"#commentModal\", data-toggle=\"modal\") Comment\r\n        span#uptrend.glyphicon.custom-trend(style=\"color:#399FFF\")\r\n        span.vote= vote\r\n"};
;var locals_for_with = (locals || {});(function (city, content, pid, post_time, uid, username, vote) {;pug_debug_line = 1;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"post-main panel panel-default post-animatediv\""+pug_attr("id", "post" + pid, true, false)+pug_attr("value", pid, true, false)) + "\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Cdiv class=\"panel-body\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Cli class=\"dropdown pull-right\" role=\"presentation\" style=\"list-style-type:none;\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Cspan class=\"caret\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Cul class=\"dropdown-menu\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "Flag Post\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "Report User\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "Comment\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", "/profile/" + username, true, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"img-square pull-left\""+pug_attr("src", "/img/profile/" + uid + ".png", true, false)+" width=\"40\" height=\"40\""+pug_attr("data-uid", uid, true, false)) + "\u002F\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", "/profile/" + username, true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = username) ? "" : pug_interp)) + "\u003C\u002Fb\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Cdiv class=\"font-light\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = post_time + ", " + city + ", " + "country") ? "" : pug_interp));
;pug_debug_line = 18;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"glyphicon glyphicon-globe\""+" style=\"color:#9197A0;\" data-toggle=\"tooltip\""+pug_attr("title", post_time, true, false)) + "\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Cdiv class=\"clearfix\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Cdiv class=\"post-div\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Chr\u002F\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Chr\u002F\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Cdiv class=\"font-light\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Ca id=\"comment-modal\" value=\"pid\" name=\"post\" href=\"#commentModal\" data-toggle=\"modal\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "Comment\u003C\u002Fa\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Cspan class=\"glyphicon custom-trend\" id=\"uptrend\" style=\"color:#399FFF;\"\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + "\u003Cspan class=\"vote\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fviews\u002Ftemplates\u002Fpost.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = vote) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"city" in locals_for_with?locals_for_with.city:typeof city!=="undefined"?city:undefined,"content" in locals_for_with?locals_for_with.content:typeof content!=="undefined"?content:undefined,"pid" in locals_for_with?locals_for_with.pid:typeof pid!=="undefined"?pid:undefined,"post_time" in locals_for_with?locals_for_with.post_time:typeof post_time!=="undefined"?post_time:undefined,"uid" in locals_for_with?locals_for_with.uid:typeof uid!=="undefined"?uid:undefined,"username" in locals_for_with?locals_for_with.username:typeof username!=="undefined"?username:undefined,"vote" in locals_for_with?locals_for_with.vote:typeof vote!=="undefined"?vote:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}