"use strict";function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(i,e,n){return e&&t(i.prototype,e),n&&t(i,n),i}}(),Vector2=function(){function t(i,e){return _classCallCheck(this,t),this.x="number"==typeof i?i:0,this.y="number"==typeof e?e:0,this}return _createClass(t,[{key:"zero",value:function(){return this.x=0,this.y=0,this}},{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"add",value:function(t){return this.x+=t.x||0,this.y+=t.y||0,this}},{key:"addX",value:function(t){return this.x+=t.x||0,this}},{key:"addY",value:function(t){return this.y+=t.y||0,this}},{key:"addScalar",value:function(t){return this.x+=t||0,this.y+=t||0,this}},{key:"addScalarX",value:function(t){return this.x+=t||0,this}},{key:"addScalarY",value:function(t){return this.y+=t||0,this}},{key:"sub",value:function(t){return this.x-=t.x||0,this.y-=t.y||0,this}},{key:"subX",value:function(t){return this.x-=t.x||0,this}},{key:"subY",value:function(t){return this.y-=t.y||0,this}},{key:"subScalar",value:function(t){return this.x-=t||0,this.y-=t||0,this}},{key:"subX",value:function(t){return this.x-=t||0,this}},{key:"subY",value:function(t){return this.y-=t||0,this}},{key:"multiply",value:function(t){return this.x*=t.x||1,this.y*=t.y||1,this}},{key:"multiplyX",value:function(t){return this.x*=t.x||1,this}},{key:"multiplyY",value:function(t){return this.y*=t.y||1,this}},{key:"multiplyScalar",value:function(t){return this.x*=t||1,this.y*=t||1,this}},{key:"multiplyScalarX",value:function(t){return this.x*=t||1,this}},{key:"multiplyScalarY",value:function(t){return this.y*=t||1,this}},{key:"divide",value:function(t){return 0===t.x||0===t.y?void console.log("! Cannot divide by zero !"):(this.x/=t.x||1,this.y/=t.y||1,this)}},{key:"divideX",value:function(t){return 0===t.x?void console.log("! Cannot divide by zero !"):(this.x/=t.x||1,this)}},{key:"divideY",value:function(t){return 0===t.y?void console.log("! Cannot divide by zero !"):(this.y/=t.y||1,this)}},{key:"divideScalar",value:function(t){return 0===t?void console.log("! Cannot divide by zero !"):(this.x/=t||1,this.y/=t||1,this)}},{key:"divideScalarX",value:function(t){return 0===t?void console.log("! Cannot divide by zero !"):(this.x/=t||1,this)}},{key:"divideScalarY",value:function(t){return 0===t?void console.log("! Cannot divide by zero !"):(this.Y/=t||1,this)}},{key:"getMagnitude",value:function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))}},{key:"normalize",value:function(){this.divideScalar(this.getMagnitude())}},{key:"randomize",value:function(i){return i=i||new t(1,1),this.x=Math.random()*i.x,this.y=Math.random()*i.y,this}},{key:"addRandom",value:function(t){t=t||0,this.x+=t-Math.random()*(2*t),this.y+=t-Math.random()*(2*t)}},{key:"addRandomX",value:function(t){t=t||0,this.x+=t-Math.random()*(2*t)}},{key:"addRandomY",value:function(t){t=t||0,this.y+=t-Math.random()*(2*t)}},{key:"lerp",value:function(t,i){return t=t||this,i=i||.05,this.x=(1-i)*this.x+i*t.x,this.y=(1-i)*this.y+i*t.y,this}},{key:"midpoint",value:function(i){var e=new t(this.x+i.x,this.y+i.y);return e.divideScalar(2),e}},{key:"slope",value:function(t){return(t.y-this.y)/(t.x-this.x)*-1}},{key:"intercept",value:function(t){return console.log(-t*this.x+this.y),-t*this.x+this.y}},{key:"distanceTo",value:function(t){return t=t||this,Math.sqrt(Math.pow(t.x-this.x,2)+Math.pow(t.y-this.y,2))}},{key:"angleTo",value:function(t,i){return t=t||this,"rad"===(i=i||"rad")?Math.atan2(t.y-this.y,t.x-this.x):"deg"===i?180*Math.atan2(t.y-this.y,t.x-this.x)/Math.PI:void 0}}]),t}();

((main) => {
	this.requestAnimationFrame = (() => {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				window.setTimeout(callback, 1000 / 60);
			};
	})();
	main(this, document, Vector2);

})((window, document, v2, undefined) => {

	'use strict';

	const PI = Math.PI,
		TAU = PI * 2;

	const APP_DEFAULTS = {
		particleCount: 600,
		particleColor: 'rgba(191, 226, 255,0.5)'
	};

	class Particle {
		constructor(size, speed, context, bounds, z) {
			this.size = size;
			this.ctx = context;
			this.bounds = bounds;
			this.z = z;
			this.position = new v2();
			this.position.randomize(bounds);
			this.velocity = new v2(0, speed);
			this.velocity.y -= Math.random();
		}

		reset() {
			this.position.y = this.bounds.y + this.size;
			this.position.x = Math.random() * this.bounds.x;
		}

		update() {
			this.position.add(this.velocity);
			if (this.position.y < -this.size || this.position.x < -this.size || this.position.x > this.bounds.x + this.size) {
				this.reset();
			}
		}
	}

	class App {
		constructor() {
			this.setup();
			this.getCanvas();
			this.resize();
			this.populate();
			this.loop();
		}

		setup() {
			let self = this;
			self.props = Object.assign({}, APP_DEFAULTS);
			self.dimensions = new v2();
			self.center = new v2();
			self.mouse = new v2();
			self.mouseOver = false;
			window.onresize = () => {
				self.resize();
			};
			window.onmousemove = (e) => {
				self.mouseHandler(e);
			};
			window.onmouseout = (e) => {
				self.mouseHandler(e);
			};
		}

		mouseHandler(e) {
			this.mouse.x = e.clientX;
			this.mouse.y = e.clientY;
			if (e.type === 'mousemove') {
				this.mouseOver = true;
			}
			if (e.type === 'mouseout') {
				this.mouseOver = false;
			}
		}

		getCanvas() {
			this.canvas = {
				back: document.querySelector('.back'),
				mid: document.querySelector('.mid'),
				front: document.querySelector('.front')
			};

			this.ctx = {
				back: this.canvas.back.getContext('2d'),
				mid: this.canvas.mid.getContext('2d'),
				front: this.canvas.front.getContext('2d')
			};
		}

		resize() {
			for (var c in this.canvas) {
			//	this.canvas[c].width = this.dimensions.x = window.innerWidth;
			//	this.canvas[c].height = this.dimensions.y = window.innerHeight;
				this.canvas[c].width = this.dimensions.x = document.getElementById('particle-canvas').offsetWidth;
				this.canvas[c].height = this.dimensions.y = document.getElementById('particle-canvas').offsetHeight;			
			}
			this.center.x = this.dimensions.x * 0.5;
			this.center.y = this.dimensions.y * 0.5;
		}

		populate() {
			this.particles = [];
			for (let i = 0; i < this.props.particleCount; i++) {
				let pCtx = i < 300 ? this.ctx.back : i < 500 ? this.ctx.mid : this.ctx.front,
					size = i < 300 ? 5 : i < 500 ? 8 : 12,
					speed = i < 300 ? -0.5 : i < 500 ? -1 : -2,
					z = i < 300 ? 1 : i < 500 ? 2 : 3,
					particle = new Particle(size, speed, pCtx, this.dimensions, z);
				this.particles.push(particle);
			}
		}

		loop() {
			let self = this;
			self.render();
			window.requestAnimationFrame(self.loop.bind(self));
		}

		render() {
			let mouseDist, vel;
			if (this.mouseOver) {
				mouseDist = (this.mouse.x - this.center.x)/this.center.x;
			}
			for (var c in this.ctx) {
				this.ctx[c].clearRect(0, 0, this.dimensions.x, this.dimensions.y);
			}
			for (let i = 0, len = this.particles.length; i < len; i++) {
				let p = this.particles[i];
				p.update();
				p.ctx.beginPath();
				p.ctx.fillStyle = this.props.particleColor;
				p.ctx.arc(p.position.x, p.position.y, p.size, 0, TAU);
				p.ctx.fill();
				p.ctx.closePath();
				if (this.mouseOver) {
					vel = new v2(mouseDist * p.z, p.velocity.y);
				} else {
					vel = new v2(0, p.velocity.y);
				}
				p.velocity.lerp(vel);
			}
		}
	}

	window.onload = () => {
		let app = new App();
	};

});