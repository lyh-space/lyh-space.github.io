function ip_widget(bdcolor,bgcolor,fcolor,nogeo,nosys,width)
{
	 var info;
    if (bgcolor.indexOf("#") !== 0) {
        bgcolor = "#" + bgcolor;
    }
    if (fcolor.indexOf("#") !== 0) {
        fcolor = "#" + fcolor;
    }
    if (bdcolor.indexOf("#") !== 0) {
        bdcolor = "#" + bdcolor;
    }

    ip_widget_var['bdcolor'] = bdcolor;
    ip_widget_var['bgcolor'] = bgcolor;
    ip_widget_var['fcolor'] = fcolor;
	ip_widget_var['width'] = width;
	var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = "async";
    ga.src = '//ipaddress.is/ipwidget.php?nogeo='+nogeo+'&nosys='+nosys;
	(document.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0]).appendChild(ga);
   
}
 

function showip(s){

    var i = 0;
    var vlist = eval(s);
    var ctlist = eval('({"ad":0,"ae":-16,"af":-32,"ag":-48,"ai":-64,"al":-80,"am":-96,"an":-112,"ao":-128,"ar":-144,"as":-160,"at":-176,"au":-192,"aw":-208,"ax":-224,"az":-240,"ba":-256,"bb":-272,"bd":-288,"be":-304,"bf":-320,"bg":-336,"bh":-352,"bi":-368,"bj":-384,"bm":-400,"bn":-416,"bo":-432,"br":-448,"bs":-464,"bt":-480,"bv":-496,"bw":-512,"by":-528,"bz":-544,"ca":-560,"cc":-576,"cd":-592,"cf":-608,"cg":-624,"ch":-640,"ci":-656,"ck":-672,"cl":-688,"cm":-704,"cn":-720,"co":-736,"cr":-752,"cs":-768,"cu":-784,"cv":-800,"cx":-816,"cy":-832,"cz":-848,"de":-864,"dj":-880,"dk":-896,"dm":-912,"do":-928,"dz":-944,"ec":-960,"ee":-976,"eg":-992,"eh":-1008,"er":-1024,"es":-1040,"et":-1056,"eu":-1072,"fi":-1088,"fj":-1104,"fk":-1120,"fm":-1136,"fo":-1152,"fr":-1168,"ga":-1184,"gb":-1200,"gd":-1216,"ge":-1232,"gf":-1248,"gh":-1264,"gi":-1280,"gl":-1296,"gm":-1312,"gn":-1328,"gp":-1344,"gq":-1360,"gr":-1376,"gs":-1392,"gt":-1408,"gu":-1424,"gw":-1440,"gy":-1456,"hk":-1472,"hm":-1488,"hn":-1504,"hr":-1520,"ht":-1536,"hu":-1552,"id":-1568,"ie":-1584,"il":-1600,"im":-1616,"in":-1632,"io":-1648,"iq":-1664,"ir":-1680,"is":-1696,"it":-1712,"je":-1728,"jm":-1744,"jo":-1760,"jp":-1776,"ke":-1792,"kg":-1808,"kh":-1824,"ki":-1840,"km":-1856,"kn":-1872,"kp":-1888,"kr":-1904,"kw":-1920,"ky":-1936,"kz":-1952,"la":-1968,"lb":-1984,"lc":-2000,"li":-2016,"lk":-2032,"lr":-2048,"ls":-2064,"lt":-2080,"lu":-2096,"lv":-2112,"ly":-2128,"ma":-2144,"mc":-2160,"md":-2176,"me":-2192,"mg":-2208,"mh":-2224,"mk":-2240,"ml":-2256,"mm":-2272,"mn":-2288,"mo":-2304,"mp":-2320,"mq":-2336,"mr":-2352,"ms":-2368,"mt":-2384,"mu":-2400,"mv":-2416,"mw":-2432,"mx":-2448,"my":-2464,"mz":-2480,"na":-2496,"nc":-2512,"ne":-2528,"nf":-2544,"ng":-2560,"ni":-2576,"nl":-2592,"no":-2608,"np":-2624,"nr":-2640,"nu":-2656,"nz":-2672,"om":-2688,"pa":-2704,"pe":-2720,"pf":-2736,"pg":-2752,"ph":-2768,"pk":-2784,"pl":-2800,"pm":-2816,"pn":-2832,"pr":-2848,"ps":-2864,"pt":-2880,"pw":-2896,"py":-2912,"qa":-2928,"re":-2944,"ro":-2960,"rs":-2976,"ru":-2992,"rw":-3008,"sa":-3024,"sb":-3040,"sc":-3056,"sd":-3072,"se":-3088,"sg":-3104,"sh":-3120,"si":-3136,"sj":-3152,"sk":-3168,"sl":-3184,"sm":-3200,"sn":-3216,"so":-3232,"sr":-3248,"st":-3264,"sv":-3280,"sy":-3296,"sz":-3312,"tc":-3328,"td":-3344,"tf":-3360,"tg":-3376,"th":-3392,"tj":-3408,"tk":-3424,"tl":-3440,"tm":-3456,"tn":-3472,"to":-3488,"tr":-3504,"tt":-3520,"tv":-3536,"tw":-3552,"tz":-3568,"ua":-3584,"ug":-3600,"um":-3616,"us":-3632,"uy":-3648,"uz":-3664,"va":-3680,"vc":-3696,"ve":-3712,"vg":-3728,"vi":-3744,"vn":-3760,"vu":-3776,"wf":-3792,"ws":-3808,"ye":-3824,"yt":-3840,"za":-3856,"zm":-3872,"zw":-3888})');
    var url = "//widget.supercounters.com/images/flagsprites.png";
 
    var c = document.createElement("img");
    c.onload = function() {
        var tb = document.createElement("div");
        tb.id = "ipaddressiswidget";
		tb.name = "ipaddressiswidget";
        tb.style.position = "relative";
        tb.style.display = "inline-block";
        tb.style.width = ip_widget_var['width'];
        tb.style.height = "auto";
        tb.style.overflow = "hidden";
        tb.style.cursor = "pointer";
        tb.style.borderColor = ip_widget_var['bdcolor'];
        tb.style.borderWidth = "1px";
        tb.style.borderStyle = "solid";
        tb.style.backgroundColor = ip_widget_var['bgcolor'];
        tb.style.tableLayout = "fixed";
        tb.style.align = "center";
        tb.title = "IPaddress Widget";
        tb.style.padding = "10px";
	
		var IPDiv = IpdrawDiv(tb);
        IpdrawText(ip_widget_var['fcolor'], "Your IP:"  ,IPDiv, "normal");
        IpdrawText(ip_widget_var['fcolor'], vlist["ip"],IPDiv, "bold");
		
	
		if(typeof(vlist["geo"]) != 'undefined')
		{
			var GeoDiv = IpdrawDiv(tb,"geodiv");
	        IpdrawText(ip_widget_var['fcolor'], "From:" ,GeoDiv, "normal");
			var geoText = IpdrawText(ip_widget_var['fcolor'],  vlist["geo"],GeoDiv, "bold");
			IpdrawFlag(url, ctlist, vlist["ct"], 16, 11, geoText);
		}
	
		if(typeof(vlist["bro"]) != 'undefined')
		{
			var BroDiv = IpdrawDiv(tb,"brodiv");
	        IpdrawText(ip_widget_var['fcolor'], "Browser:" ,BroDiv, "normal");
			IpdrawText(ip_widget_var['fcolor'],  vlist["bro"],BroDiv, "bold");

			var SysDiv = IpdrawDiv(tb,"sysdiv");
		    IpdrawText(ip_widget_var['fcolor'], "System:" ,SysDiv, "normal");
			IpdrawText(ip_widget_var['fcolor'],  vlist["sys"],SysDiv, "bold");
		}

        tb.onclick = function() {
            window.location = "https://ipaddress.is/" + vlist["ip"];
        };
        ct_insert(tb, "ipaddress.is/js/ipwidget.js");
    };
    c.src = url;
}

function ct_insert(c, d) {
    var a = document.getElementsByTagName("script");
    for (var b = 0; b < a.length; b++) {
        if (a[b].src.indexOf(d) > 0) {
            a[b].parentNode.insertBefore(c, a[b].nextSibling);
        }
    }
}

function IpdrawFlag(url, ctlist, ct, w, h, d) {
    var f = document.createElement("span");
    f.style.backgroundImage = "url(" + url + ")";
    f.style.backgroundRepeat = "no-repeat";
    f.style.backgroundPosition = ctlist[ct] + "px 0px";
    f.style.position = "relative";
    f.style.padding = "0px";
    f.style.margin = "0 0 0 3px";
    f.style.width = w + "px";
    f.style.height = h + "px";
    f.style.display = "inline-block";
    f.style.verticalAlign = "middle";
    d.appendChild(f);
}


function IpdrawDiv(d,id) { 
    var cell = document.createElement("div");
    cell.style.display = "inline-block";
    cell.style.fontFamily = "Verdana";    
    cell.style.overflow = "hidden";    
    cell.style.padding = "0px";
    cell.style.margin = "5px 15px 0 0";
    cell.style.lineHeight = "normal";
    cell.style.webkitTextSizeAdjust = "none";
    cell.style.direction = "ltr";
    cell.style.whiteSpace = "normal";
    cell.style.wordWrap = "break-word";
    cell.style.textShadow = "none";
    cell.style.textAlign = "left";
	cell.id = id;
    d.appendChild(cell);
	return cell;

}

function IpdrawText(fcolor, txt, d, bold) { 
    var cell = document.createElement("span");
    cell.style.display = "inline-block";
    cell.style.fontFamily = "Verdana";
    cell.style.color = fcolor;
    cell.style.fontSize = "12px";
    cell.style.position = "relative";
    cell.style.fontWeight = bold;
    cell.style.fontVariant = "normal";
    cell.style.fontStyle = "normal";
    cell.style.overflow = "hidden";
    cell.style.textTransform = "none";
    cell.style.textDecoration = "none";
    cell.style.letterSpacing = "0px";
    cell.style.wordSpacing = "0px";
    cell.style.padding = "0px";
    cell.style.margin = "0";
    cell.style.lineHeight = "normal";
    cell.style.webkitTextSizeAdjust = "none";
    cell.style.direction = "ltr";
    cell.style.whiteSpace = "normal";
    cell.style.wordWrap = "break-word";
    cell.style.textShadow = "none";
    cell.style.textAlign = "left";
 
    cell.innerHTML = cell.innerHTML + txt;
    d.appendChild(cell);

	return cell;

}