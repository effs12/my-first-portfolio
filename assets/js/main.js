/*!
 * jQuery Scrollspy Plugin
 * Author: @sxalexander
 * Licensed under the MIT license
 */
(function(c,b,a,d){
	c.fn.extend({scrollspy:function(e){
		var f={ min:0,
				max:0,
				mode:"vertical",
				buffer:0,
				container:b,
				onEnter:e.onEnter?e.onEnter:[],
				onLeave:e.onLeave?e.onLeave:[],
				onTick:e.onTick?e.onTick:[]
		};

		var e=c.extend({},f,e);
		return this.each(function(k){

			var j=this;
			var p=e;
			var n=c(p.container);
			var m=p.mode;
			var h=p.buffer;
			var l=leaves=0;
			var g=false;
				n.bind("scroll",function(s){

				var o={
						top:c(this).scrollTop(),
						left:c(this).scrollLeft()
					};

				var r=(m=="vertical")?o.top+h:o.left+h;
				var i=p.max;
				var q=p.min;

				if(c.isFunction(p.max)){
					i=p.max()
				}

				if(c.isFunction(p.min)){
					q=p.min()
				}

				if(i==0){
					i=(m=="vertical")?n.height():n.outerWidth()+c(j).outerWidth()
				}

				if(r>=p.min&&r<=i){

					if(!g){
						g=true;
						l++;

						c(j).trigger("scrollEnter",{position:o});

							if(c.isFunction(p.onEnter)){
								p.onEnter(j,o)
							}
					}

					c(j).trigger("scrollTick",{position:o,inside:g,enters:l,leaves:leaves});

						if(c.isFunction(p.onTick)){

							p.onTick(j,o,g,l,leaves)
						}
				}else{
						if(g){
							g=false;
							leaves++;
							c(j).trigger("scrollLeave",{position:o,leaves:leaves});

							if(c.isFunction(p.onLeave)){
									p.onLeave(j,o)
							}
						}
					}
				}
			)}
		)}
	})
})(jQuery,window);

/*! Smooth Scroll - v1.4.6 - 2012-08-23
* Copyright (c) 2012 Karl Swedberg; Licensed MIT, GPL */

(function(h){
	function i(b){
		return b.replace(/(:|\.)/g,"\\$1")
	}

	var g="1.4.6",l={
			exclude:[],
			excludeWithin:[],
			offset:0,direction:"top",
			scrollElement:null,
			scrollTarget:null,
			beforeScroll:function(){},
			afterScroll:function(){},
			easing:"swing",speed:400,autoCoefficent:2
	},

	k=function(a){
		var n=[],m=!1,f=a.dir&&a.dir=="left"?"scrollLeft":"scrollTop";

		return this.each(function(){
				if(this==document||this==window){
					return
				}

				var c=h(this);
				c[f]()>0?n.push(this):(c[f](1),m=c[f]()>0,m&&n.push(this),c[f](0))

		}),

		n.length||this.each(function(b){
			this.nodeName==="BODY"&&(n=[this])
		}),

		a.el==="first"&&n.length>1&&(n=[n[0]]),n
	},

	j="ontouchend" in document;
	h.fn.extend({scrollable:function(d){
		var c=k.call(this,{dir:d});
		return this.pushStack(c)
	},
	firstScrollable:function(d){
		var c=k.call(this,{el:"first",dir:d});
		return this.pushStack(c)

	},
	smoothScroll:function(a){
		a=a||{};

		var f=h.extend({},h.fn.smoothScroll.defaults,a),
		e=h.smoothScroll.filterPath(location.pathname);
		return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(z){

			var y=this,
			x=h(this),
			w=f.exclude,
			v=f.excludeWithin,
			u=0,
			t=0,
			s=!0,
			r={},
			q=location.hostname===y.hostname||!y.hostname,d=f.scrollTarget||(h.smoothScroll.filterPath(y.pathname)||e)===e,c=i(y.hash);

			if(!f.scrollTarget&&(!q||!d||!c)){
				s=!1
			}else{
				while(s&&u<w.length){

					x.is(i(w[u++]))&&(s=!1)
				}

				while(s&&t<v.length){
					x.closest(v[t++]).length&&(s=!1)
				}
			}

			s&&(z.preventDefault(),
			h.extend(r,f,{scrollTarget:f.scrollTarget||c,link:y}),
			h.smoothScroll(r)
		)}
	),this}}),


	h.smoothScroll=function(x,w){
		var v,u,t,s,r=0,q="offset",
			p="scrollTop",
			o={},n={},a=[];

		typeof x=="number"?
			(v=h.fn.smoothScroll.defaults,t=x):(v=h.extend({},
					h.fn.smoothScroll.defaults,x||{}),
						v.scrollElement&&(q="position",v.scrollElement.css("position")=="static"&&v.scrollElement.css("position","relative")),
						t=w||h(v.scrollTarget)[q]()&&h(v.scrollTarget)[q]()[v.direction]||0),v=h.extend({link:null},v),

						p=v.direction=="left"?"scrollLeft":p,v.scrollElement?(
							u=v.scrollElement,
							r=u[p]()
						):u=h("html, body").firstScrollable(),


						o[p]=t+r+v.offset,
						v.beforeScroll.call(u,v),
						s=v.speed,
						s==="auto"&&(s=o[p]||u.scrollTop(),
						s=s/v.autoCoefficent),

						n = {
								duration:s,
								easing:v.easing,
								complete:
									function(){
										v.afterScroll.call(v.link,v)
									}
							},
							v.step&&(n.step=v.step),u.length?u.stop().animate(o,n):v.afterScroll.call(v.link,v)
	},
	h.smoothScroll.version=g,
	h.smoothScroll.filterPath=function(b){
		return b.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")
	},h.fn.smoothScroll.defaults=l

})(jQuery);


$(document).ready(function(){
	var b="gmail.com";

	$("header").scrollspy({
		min:$("body").offset().top+643,
		max:$("body").offset().top+10000,

		onEnter:function(d,c){
			$("header").addClass("fixed")

		},
		onLeave:function(d,c){
			$("header").removeClass("fixed")
		}
	});


	$("header a").click(function(d){
		d.preventDefault();
		var c=this;

		$.smoothScroll({
			scrollTarget:c.hash,offset:a()
		});

		$("header .nav a").each(function(){
				$(this).removeClass("active")
		});
		$(c).addClass("active")
	});
	
	function a(){
		var c=$(window).width();
		var d=-105;

			if(c<=1000){
				d=25
			}

			if(c>=794&&c<1000){
				d=-60
			}
		return d
	}

	$(".email-contact").each(function(){
		var c=$(this).attr("data-name")+"@"+b;
		var d='<a href="mailto:'+c+'">'+c+"</a>";
		$(this).html(d)
	})
});