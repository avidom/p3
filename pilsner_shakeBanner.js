(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 480,
	height: 854,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/bokal.png", id:"bokal"},
		{src:"images/bottleBig.png", id:"bottleBig"},
		{src:"images/bottleBlurred.png", id:"bottleBlurred"},
		{src:"images/bottleForShadow.png", id:"bottleForShadow"},
		{src:"images/bottleReg.png", id:"bottleReg"},
		{src:"images/bottleShadow.png", id:"bottleShadow"},
		{src:"images/chem.png", id:"chem"},
		{src:"images/cover1.png", id:"cover1"},
		{src:"images/cover2.png", id:"cover2"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bokal = function() {
	this.initialize(img.bokal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,572);


(lib.bottleBig = function() {
	this.initialize(img.bottleBig);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,644);


(lib.bottleBlurred = function() {
	this.initialize(img.bottleBlurred);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,654);


(lib.bottleForShadow = function() {
	this.initialize(img.bottleForShadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,105);


(lib.bottleReg = function() {
	this.initialize(img.bottleReg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,645);


(lib.bottleShadow = function() {
	this.initialize(img.bottleShadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,121);


(lib.chem = function() {
	this.initialize(img.chem);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,252);


(lib.cover1 = function() {
	this.initialize(img.cover1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,10);


(lib.cover2 = function() {
	this.initialize(img.cover2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,41);


(lib.warn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHFYQgLABAAgsIAAkgIgcAAIAAFLIgOAAIAAqwIAOAAIAAFRIAcAAIAAknQAAgqARAAIAOAAQATAAAAAqIAAJbQAAAsgNgBgAAHkuIAAJPQAAAgAJABIAIAAQAJgBAAggIAApPQAAgSgGgBIgOAAQgGABAAASg");
	this.shape.setTransform(225.7,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXF+IAAgXIAHAAQAIAAAAgUIgfqFIAOAAIAZIqIAYoqIAPAAIgjKJQgCAngJAAgAgUlZQgIgPAAgVIAOAAQABAKAEAIQAEAHAFAAQAFAAAFgHQAEgIAAgKIAPAAQAAAVgIAPQgJAPgMAAQgKAAgKgPg");
	this.shape_1.setTransform(213.5,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLFYQgOABAAgsIAApbQAAgqAUAAIAMAAQATAAAAAqIAAJbQAAAsgNgBgAgLkuIAAJPQAAAgAJABIAGAAQAIgBABggIAApPQgBgSgFgBIgMAAQgHABABASg");
	this.shape_2.setTransform(203.3,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaFYIAAqwIArAAQAKABAAAUIAAEmQAAAagHAIQgHAJgIgBIgRAAIAAFLgAgMgHIARAAQAIgBAAgYIAAkYQAAgJgDAAIgWAAg");
	this.shape_3.setTransform(194.4,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaFYIgKjlIgcAAIgLDlIgPAAIAlqwIAIAAIAhKwgAgKBcIAZAAIgNkug");
	this.shape_4.setTransform(184.2,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYF4IAAhAIgvAAIAABAIgOAAIAAhWIAHAAQAKgBAAggIAAp5IAzAAIAAKaIAHAAIAABWgAgHENQAAAMgCAJIAbAAIAAqDIgZAAg");
	this.shape_5.setTransform(172.8,5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMFYQgOABAAgsIAAi0IAOAAIAACoQAAAgAJABIAHAAQAJgBAAggIAAkAQAAgTgIgBIgXAAIAAgUIAXAAQAIgBAAgYIAAkOQAAgSgGgBIgNAAQgGABAAASIAAC1IgOAAIAAi1QAAgqAUAAIANAAQAUAAAAAqIAAERQAAAagJADIAEADQAFADAAAWIAAERQAAAsgOgBg");
	this.shape_6.setTransform(162.7,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXFYIAAgWIAGAAQAJgBAAgUIgfqFIAOAAIAZIqIAYoqIAQAAIgkKJQgCAngKAAg");
	this.shape_7.setTransform(146.2,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaFYIAAl3IgTF3IgNAAIgTl3IAAF3IgNAAIAAqwIANAAIAZIvIAaovIANAAIAAKwg");
	this.shape_8.setTransform(134.7,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAaFYIgKjlIgcAAIgLDlIgQAAIAmqwIAIAAIAhKwgAgLBcIAaAAIgMkug");
	this.shape_9.setTransform(123.3,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguFYIAAqwIANAAIAAKaIAcAAIAAqaIAMAAIAAKaIAbAAIAAqaIANAAIAAKwg");
	this.shape_10.setTransform(111,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAaFYIgJjlIgdAAIgLDlIgQAAIAmqwIAIAAIAgKwgAgLBcIAaAAIgNkug");
	this.shape_11.setTransform(98.7,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaFYIAAqwIArAAQAKABAAAUIAAEmQAAAagJADIAEADQAFADAAAWIAAEnQAAAWgHgBgAgMFCIAVAAQAEAAAAgQIAAkRQAAgTgIgBIgRAAgAgMgHIARAAQAIgBAAgYIAAkYQAAgJgDAAIgWAAg");
	this.shape_12.setTransform(88.5,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaFYIAAqwIAOAAIAAFRIARAAQAIgBAHAIQAHAIAAAbIAAEhQAAAVgKgBgAgMFCIAWAAQADAAAAgKIAAkTQAAgYgIAAIgRAAg");
	this.shape_13.setTransform(73.2,2.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAUF4IAAhAIg1AAIAAqwIAOAAIAAKaIAZAAIAAqaIAOAAIAAKaIANAAIAABWg");
	this.shape_14.setTransform(63.7,5.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFFYIAAqwIALAAIAAKwg");
	this.shape_15.setTransform(56,2.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMFYQgOABAAgsIAAi0IAOAAIAACoQAAAgAJABIAHAAQAJgBAAggIAAkAQAAgTgIgBIgXAAIAAgUIAXAAQAIgBAAgYIAAkOQAAgSgGgBIgNAAQgGABAAASIAAC1IgOAAIAAi1QAAgqAUAAIANAAQAUAAAAAqIAAERQAAAagJADIAEADQAFADAAAWIAAERQAAAsgOgBg");
	this.shape_16.setTransform(49.1,2.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAYF4IAAhAIgvAAIAABAIgOAAIAAhWIAHAAQAKgBAAggIAAp5IA0AAIAAKaIAGAAIAABWgAgHENQAAAMgCAJIAbAAIAAqDIgZAAg");
	this.shape_17.setTransform(39,5.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLFYQgOABAAgsIAApbQAAgqAUAAIAMAAQATAAAAAqIAAJbQAAAsgOgBgAgMkuIAAJPQAAAgAKABIAFAAQAKgBgBggIAApPQAAgSgFgBIgMAAQgHABAAASg");
	this.shape_18.setTransform(29,2.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AANFYIgZlLIAAFLIgOAAIAAqwIAOAAIAAFRIAZlRIAOAAIgbFWIAbFag");
	this.shape_19.setTransform(20.1,2.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AguFYIAAqwIAOAAIAAKaIAbAAIAAqaIALAAIAAKaIAbAAIAAqaIAOAAIAAKwg");
	this.shape_20.setTransform(9.1,2.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAaFYIgKjlIgcAAIgLDlIgQAAIAmqwIAIAAIAgKwgAgLBcIAaAAIgMkug");
	this.shape_21.setTransform(-9.4,2.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaFYIAAqwIArAAQAKABAAAUIAAEmQAAAagJADIAEADQAFADAAAWIAAEnQAAAWgHgBgAgMFCIAVAAQAEAAAAgQIAAkRQAAgTgIgBIgRAAgAgMgHIARAAQAIgBAAgYIAAkYQAAgJgDAAIgWAAg");
	this.shape_22.setTransform(-19.7,2.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgFFYIAAqwIALAAIAAKwg");
	this.shape_23.setTransform(-26.6,2.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AANFYIAAqZIgZAAIAAKZIgOAAIAAqwIA1AAIAAKwg");
	this.shape_24.setTransform(-33.5,2.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVFYIAAqwIAsAAIAAAXIgfAAIAAE6IAfAAIAAAUIgfAAIAAE1IAfAAIAAAWg");
	this.shape_25.setTransform(-48.3,2.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AANFYIAAlLIgZAAIAAFLIgOAAIAAqwIAOAAIAAFRIAZAAIAAlRIAOAAIAAKwg");
	this.shape_26.setTransform(-56.8,2.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AANFYIAAlLIgZAAIAAFLIgOAAIAAqwIAOAAIAAFRIAZAAIAAlRIAOAAIAAKwg");
	this.shape_27.setTransform(-65.8,2.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAaFYIgJjlIgdAAIgLDlIgPAAIAlqwIAIAAIAgKwgAgKBcIAZAAIgNkug");
	this.shape_28.setTransform(-76,2.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgaFYIAAqwIArAAQAKABAAAUIAAEmQAAAagJADIAEADQAFADAAAWIAAEnQAAAWgHgBgAgMFCIAVAAQAEAAAAgQIAAkRQAAgTgIgBIgRAAgAgMgHIARAAQAIgBAAgYIAAkYQAAgJgDAAIgWAAg");
	this.shape_29.setTransform(-86.3,2.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAiFYIAAqwIANAAIAAKwgAguFYIAAqwIANAAIAAFRIATAAQAJgBAFAIQAGAIABAbIAAEhQgBAVgHgBgAghFCIAZAAQADAAAAgKIAAkTQAAgYgJAAIgTAAg");
	this.shape_30.setTransform(-97.3,2.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAhFYIgblLIAAFLIgLAAIAAlLIgbFLIgOAAIAdlaIgdlWIAOAAIAbFRIAAlRIALAAIAAFRIAblRIAOAAIgdFWIAdFag");
	this.shape_31.setTransform(-110.3,2.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgXF+IAAgXIAGAAQAJAAAAgUIgeqFIANAAIAZIqIAYoqIAQAAIgkKJQgCAngKAAgAgUlZQgIgPAAgVIAPAAQgBAKAFAIQAEAHAFAAQAFAAAEgHQAFgIAAgKIAPAAQAAAVgIAPQgJAPgMAAQgLAAgJgPg");
	this.shape_32.setTransform(-122.5,-1.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgWFYIAAqwIAtAAIAAAXIgfAAIAAE6IAfAAIAAAUIgfAAIAAE1IAfAAIAAAWg");
	this.shape_33.setTransform(-138.6,2.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAaFYIgKjlIgcAAIgLDlIgPAAIAlqwIAIAAIAhKwgAgKBcIAZAAIgNkug");
	this.shape_34.setTransform(-148.4,2.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AANFYIAAlLIgZAAIAAFLIgOAAIAAqwIAOAAIAAFRIAZAAIAAlRIAOAAIAAKwg");
	this.shape_35.setTransform(-158.6,2.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgaFYIAAqwIArAAQAKABAAAUIAAEmQAAAagHAIQgHAJgIgBIgRAAIAAFLgAgMgHIARAAQAIgBAAgYIAAkYQAAgJgDAAIgWAAg");
	this.shape_36.setTransform(-167.6,2.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgWFYIAAqwIAsAAIAAAXIgeAAIAAE6IAeAAIAAAUIgeAAIAAE1IAeAAIAAAWg");
	this.shape_37.setTransform(-176.1,2.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAaFYIAAl3IgTF3IgNAAIgTl3IAAF3IgNAAIAAqwIANAAIAZIvIAaovIANAAIAAKwg");
	this.shape_38.setTransform(-185.9,2.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgMFYQgOABAAgsIAAi0IAOAAIAACoQAAAgAJABIAHAAQAJgBAAggIAAkAQAAgTgIgBIgXAAIAAgUIAXAAQAIgBAAgYIAAkOQAAgSgGgBIgNAAQgGABAAASIAAC1IgOAAIAAi1QAAgqAUAAIANAAQAUAAAAAqIAAERQAAAagJADIAEADQAFADAAAWIAAERQAAAsgOgBg");
	this.shape_39.setTransform(-196.1,2.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAaFYIgKjlIgcAAIgLDlIgPAAIAlqwIAIAAIAhKwgAgKBcIAZAAIgMkug");
	this.shape_40.setTransform(-206.3,2.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgaFYIAAqwIArAAQAKABAAAUIAAEmQAAAagHAIQgHAJgIgBIgRAAIAAFLgAgMgHIARAAQAIgBAAgYIAAkYQAAgJgDAAIgWAAg");
	this.shape_41.setTransform(-216.6,2.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AANFYIAAqZIgZAAIAAKZIgOAAIAAqwIA1AAIAAKwg");
	this.shape_42.setTransform(-225.6,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233.2,-49.7,466.5,110.5);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABsFPIgaiHIioAAIgbCHIhFAAICBqeIBrAAICAKegAhNCIICVAAIhLmCg");
	this.shape.setTransform(54.2,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkFPIAApZIh8AAIAAhFIFBAAIAABFIh8AAIAAJZg");
	this.shape_1.setTransform(15.1,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhwEoQglguAAhNIAAhJIBGAAIAABNQAAAuATAaQATAZAoAAQAnAAATgZQAUgaAAguIAAicIh0AAIAAhAIB0AAIAAiFQAAgugUgaQgTgagnAAQgoAAgTAaQgTAaAAAuIAAA2IhFAAIAAgyQAAgnAJgfQAJggASgVQATgXAcgLQAcgMAlAAQAmAAAcAMQAdALASAXQATAVAJAgQAJAfAAAnIAAFZQABBNgmAuQglAuhMAAQhMAAgkgug");
	this.shape_2.setTransform(-22.2,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiEFPIAAqeIEJAAIAABFIi/AAIAAJZg");
	this.shape_3.setTransform(-58.1,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1 copy
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4092B8").s().p("ABsFPIgbiHIinAAIgbCHIhEAAICAqdIBrAAICAKdgAhNCIICVAAIhLmCg");
	this.shape_4.setTransform(56.2,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4092B8").s().p("AgkFPIAApZIh8AAIAAhEIFBAAIAABEIh8AAIAAJZg");
	this.shape_5.setTransform(17.1,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4092B8").s().p("AhwEoQgmguABhNIAAhJIBGAAIAABNQAAAuATAaQAUAZAnAAQAnAAATgZQAUgagBguIAAicIhzAAIAAhAIBzAAIAAiFQABgugUgaQgTgagnAAQgnAAgUAaQgTAaAAAuIAAA1IhFAAIAAgxQAAgmAJggQAJgfASgWQATgWAcgMQAcgMAlAAQAmAAAcAMQAdAMASAWQATAWAJAfQAJAgAAAmIAAFZQAABNglAuQglAuhMAAQhLAAglgug");
	this.shape_6.setTransform(-20.2,3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4092B8").s().p("AiEFPIAAqdIEJAAIAABEIi/AAIAAJZg");
	this.shape_7.setTransform(-56.1,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-51.6,157.1,105.4);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AieGCQgcAAgTgTQgTgUAAgbIAAp/QAAgcATgTQATgTAcAAIE9AAQAcAAATATQATATAAAcIAAJ/QAAAbgTAUQgUATgbAAgAixlSQgIAIAAALIAAJ/QAAALAIAIQAIAHALAAIE9AAQALAAAIgHQAIgIAAgLIAAp/QAAgLgIgIQgIgIgLAAIk9AAQgLAAgIAIgAgVE9QgJgJAAgOQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANQAAAOgJAJQgJAJgNAAQgMAAgJgJgAgNEYQgFAGAAAIQAAAJAFAFQAGAGAHAAQAIAAAGgGQAFgFAAgJQAAgIgFgGQgGgFgIAAQgHAAgGAFgAibDyIAAnsIE3AAIAAHsgAgokbQgEAAgDgDQgCgDAAgDQAAgEACgDQADgDAEAAIBRAAQAEAAADADQACADAAAEQAAADgCADQgDADgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-38.7,45.2,77.4);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottleForShadow();
	this.instance.setTransform(-36,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-52,73,105);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.chem();
	this.instance.setTransform(-165,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165,-126,330,252);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bokal();
	this.instance.setTransform(-157,-286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157,-286,314,572);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cover2();
	this.instance.setTransform(-21,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-20,42,41);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cover1();
	this.instance.setTransform(-17,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-5,34,10);


(lib.Symbol16copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// нарэшце
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABKDmIgShdIhzAAIgSBdIgvAAIBYnMIBJAAIBYHMgAg0BdIBlAAIgykJg");
	this.shape.setTransform(83.9,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhlDmIAAnMIBlAAQA1AAAYAeQAZAfAAA1IAAA3QAAA3gaAaQgaAcg2AAIgtAAIAAC2gAgxACIAtAAQAbAAAOgMQAOgPAAghIAAg+QAAgfgMgQQgNgQgaAAIgxAAg");
	this.shape_1.setTransform(55.4,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhPDLQgagfAAg1IAAjtQAAg1AaggQAbgfA0AAQA1AAAaAfQAbAggBA1IAADtQABA1gbAfQgaAgg1AAQg0AAgbgggAgoipQgOARAAAfIAADyQAAAgAOASQANASAbAAQAcAAANgSQANgSgBggIAAjyQABgfgNgRQgNgTgcABQgbgBgNATg");
	this.shape_2.setTransform(26.8,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABhDmIAAlxIhJFxIgvAAIhNluIAAFuIgtAAIAAnMIBIAAIBKFvIBJlvIBIAAIAAHMg");
	this.shape_3.setTransform(-6.4,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABKDmIgShdIhzAAIgSBdIgvAAIBYnMIBJAAIBYHMgAg0BdIBlAAIgykJg");
	this.shape_4.setTransform(-53.8,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABdEGIAAg/Ii6AAIAAA/IgxAAIAAhtIAdAAQAMgNAEgQQADgRABgVIASlbIC4AAIAAGeIAjAAIAABtgAgrBVQgBAZgEAQQgEAQgLALIB3AAIAAlvIhTAAg");
	this.shape_5.setTransform(-86.9,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// нарэшце
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4092B8").s().p("ABKDnIgSheIhzAAIgSBeIgvAAIBYnNIBJAAIBYHNgAg0BdIBlAAIgykIg");
	this.shape_6.setTransform(85.9,3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4092B8").s().p("AhlDnIAAnNIBlAAQA1AAAYAfQAZAeAAA1IAAA3QAAA4gaAZQgaAcg2AAIgtAAIAAC3gAgxACIAtAAQAbAAAOgMQAOgPAAghIAAg+QAAgfgMgQQgNgPgagBIgxAAg");
	this.shape_7.setTransform(57.4,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4092B8").s().p("AhODMQgaggAAg1IAAjtQAAg2AagfQAZgfA1AAQA1AAAaAfQAbAfgBA2IAADtQABA1gbAgQgaAfg1AAQg1AAgZgfgAgoipQgOAQAAAgIAADyQAAAgAOASQANASAbAAQAbAAANgSQANgSAAggIAAjyQAAgggNgQQgNgSgbAAQgbAAgNASg");
	this.shape_8.setTransform(28.8,3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4092B8").s().p("ABhDnIAAlyIhJFxIgvAAIhNluIAAFvIgtAAIAAnNIBIAAIBKFvIBJlvIBIAAIAAHNg");
	this.shape_9.setTransform(-4.4,3.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4092B8").s().p("ABKDnIgSheIhzAAIgSBeIgvAAIBYnNIBJAAIBYHNgAg0BdIBlAAIgykIg");
	this.shape_10.setTransform(-51.8,3.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4092B8").s().p("ABeEGIAAg/Ii7AAIAAA/IgyAAIAAhtIAeAAQAMgNADgQQAEgRACgVIASlbIC3AAIAAGeIAiAAIAABtgAgrBVQgBAZgEAQQgEAQgLALIB3AAIAAlvIhTAAg");
	this.shape_11.setTransform(-84.9,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-36.1,210,74.4);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// нарэшце
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA3DLIhVixIgYApIAACIIguAAIAAmUIAuAAIAADEIBqjEIAtAAIhkC4IBoDcg");
	this.shape.setTransform(52.9,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVDLIAAmUIArAAIAAGUg");
	this.shape_1.setTransform(34.9,-2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAxDLIAAi3IhhAAIAAC3IguAAIAAmUIAuAAIAAC2IBhAAIAAi2IAuAAIAAGUg");
	this.shape_2.setTransform(17.5,-2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhPDLIAAmUICfAAIAAAoIhzAAIAAFsg");
	this.shape_3.setTransform(-5.5,-2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxDLIAAiuIgfAAQgcAAgOANQgQANAAAiIAABAQAAAUgBALQgDAKgEAJIguAAQAGgLACgNQABgMAAgNIAAhAQAAggALgXQAMgVAbgIQgygPAAhCIAAgiQABgtAUgYQAWgYAuABIBaAAIAAGUgAgdiSQgLAOAAAbIAAAoQAAAgAPAMQAPALAYAAIAjAAIAAiXIgsAAQgYAAgKAPg");
	this.shape_4.setTransform(-28.7,-2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABCDmIAAg3IivAAIAAmUIAtAAIAAFrIBhAAIAAlrIAuAAIAAFsIAfAAIAABfg");
	this.shape_5.setTransform(-53.4,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// нарэшце
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4092B8").s().p("AA3DKIhViwIgYAoIAACIIguAAIAAmUIAuAAIAADFIBqjFIAtAAIhkC6IBoDag");
	this.shape_6.setTransform(54.9,-0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4092B8").s().p("AgVDKIAAmUIArAAIAAGUg");
	this.shape_7.setTransform(36.9,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4092B8").s().p("AAxDKIAAi2IhhAAIAAC2IguAAIAAmUIAuAAIAAC3IBhAAIAAi3IAuAAIAAGUg");
	this.shape_8.setTransform(19.5,-0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4092B8").s().p("AhPDKIAAmUICfAAIAAAqIhzAAIAAFqg");
	this.shape_9.setTransform(-3.5,-0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4092B8").s().p("AAxDKIAAitIgfAAQgbAAgPANQgQANAAAjIAAA/QAAAVgCAJQgBAKgFAJIguAAQAGgKABgMQACgNAAgNIAAg/QAAgiALgVQAMgWAbgIQgxgOgBhEIAAghQAAgtAWgYQAVgYAuAAIBaAAIAAGUgAgdiTQgLAOAAAcIAAAnQAAAhAPALQAPAMAYAAIAjAAIAAiWIgsAAQgXAAgLANg");
	this.shape_10.setTransform(-26.7,-0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4092B8").s().p("ABCDmIAAg3IivAAIAAmUIAtAAIAAFrIBhAAIAAlrIAuAAIAAFsIAfAAIAABfg");
	this.shape_11.setTransform(-51.4,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.3,-35.7,138.6,66);


(lib.Symbol7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.157)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,13.9).s().p("AhrBmQgngrAAg/QAAg7AngrQAsgpA7AAQA/AAArApQAuArgBA7QABA/guArQgrAug/gBQg7ABgsgug");
	this.shape.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,5.8).s().p("AgrAqQgRgSAAgYQAAgZARgSQASgRAZAAQAYAAASARQATASAAAZQAAAYgTASQgSASgYABQgZgBgSgSg");
	this.shape_1.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-14.9,29.6,29.6);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlMC2IAAgfIgBgfIi9AAIgLA+IgdAAIgCgwIgCgwIAhAAQAJgJAIgPQAIgQAEgSQAFgQADgTIAFglIACghIABgYIAAgYIAAgPIgCgPIgCgWICuAAIgCBRIgBBLIAAA1IAEA2IAmAAIgIAeIgSBCgAnGhwIgBApQgBAbgDAaQgFAZgGAdQgHAdgLAVIBsAAIAAjlIhKAAgAjKB3QgagMgPgWQgQgVgIgdQgGgdgBgeQABgiAIgdQAJgdARgVQATgUAagNQAcgLAkAAIAcABQAMABAJADQAKADAJADIAWAJIgZAoQgMgLgPgIQgQgHgWAAQgXAAgPAMQgOALgIATQgIATgEAVQgCAXAAASQAAAXACAUQAEAXAIARQAIARAQALQAQALAaAAQAXgBAUgKQAUgLAOgPIATAgQgOALgLAFQgMAIgNAFQgNAFgPACQgPADgTAAQgkAAgagNgAvYBVIALABQAPAAAKgLQALgLAGgQQAIgSAEgUQADgSACgVIADgpIABggIAAgXIgBgPIgEglIC0AAIgCBRIgBBJIABBDQABAkAHAoIhFAAIAAkHIhOAAIgBAzIgBAvQAAAWgDAWQgDAVgFARIgJAcQgHAQgJAMQgJANgOAKQgOAJgTAAIgKAAIgEAAgAOSB4IgRg8QgHgYgHgQIhkAAIgiBkIgsAAQAGgIAJgVQAJgUAKgdIAXg8IAWg/IAhhgIBAAAIALAkIARA2IATA+IAWA8IAUA0QAIAXAHAKgAMagMIBPAAIAAABIAAAAIgQgyIgVhEIgCAAgAIvB4IAAizIgCg4QgCgdgGghIDHAAIgHAUIgHAWIgqgHQgTgCgRAAIgjABIgCBGQgBAiABAsIABAcQAAAiAFA1gAG8B4IgQg8IgOgoIhkAAIgiBkIhfAAQgMgLgKgOIgVgfIgUgfIgWgeIgSgRIgTgRIAAgBQARgJAQgRQASgSANgVQAPgVALgWQAKgVADgQIA0AAQgIARgKASQgKATgMASQgNATgNAPQgOAPgOAMIAAAAIAAAAQAQAMASAVQASAUASAZIAjAwIAQAWIAGgNIATgxIAXg8IAWg/IAhhgIBAAAIAKAkIASA2IATA+IAVA8QALAgAJAUQAJAXAHAKgAFFgMIBPAAIAAABIAAAAIgQgyIgWhEIgBAAgAAAB4IAAizQAAgdgBgeQgDgfgFgcIBHAAIgCBOIgBBMIABBHQABAkAGAkgAqSB4IAAizQAAgbgCgdQgCgdgGghIBJAAIgDBYIgBBRIABA8QACAfAGAlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-18.2,197.1,36.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4092B8").s().p("AlMC2IAAgfIgBgfIi9AAIgLA+IgdAAIgCgwIgCgwIAhAAQAJgJAIgPQAIgQAEgSQAFgQADgTIAFglIACghIABgYIAAgYIAAgPIgCgPIgCgWICuAAIgCBRIgBBLIAAA1IAEA2IAmAAIgIAeIgSBCgAnGhwIgBApQgBAbgDAaQgFAZgGAdQgHAdgLAVIBsAAIAAjlIhKAAgAjKB3QgagMgPgWQgQgVgIgdQgGgdgBgeQABgiAIgdQAJgdARgVQATgUAagNQAcgLAkAAIAcABQAMABAJADQAKADAJADIAWAJIgZAoQgMgLgPgIQgQgHgWAAQgXAAgPAMQgOALgIATQgIATgEAVQgCAXAAASQAAAXACAUQAEAXAIARQAIARAQALQAQALAaAAQAXgBAUgKQAUgLAOgPIATAgQgOALgLAFQgMAIgNAFQgNAFgPACQgPADgTAAQgkAAgagNgAvYBVIALABQAPAAAKgLQALgLAGgQQAIgSAEgUQADgSACgVIADgpIABggIAAgXIgBgPIgEglIC0AAIgCBRIgBBJIABBDQABAkAHAoIhFAAIAAkHIhOAAIgBAzIgBAvQAAAWgDAWQgDAVgFARIgJAcQgHAQgJAMQgJANgOAKQgOAJgTAAIgKAAIgEAAgAOSB4IgRg8QgHgYgHgQIhkAAIgiBkIgsAAQAGgIAJgVQAJgUAKgdIAXg8IAWg/IAhhgIBAAAIALAkIARA2IATA+IAWA8IAUA0QAIAXAHAKgAMagMIBPAAIAAABIAAAAIgQgyIgVhEIgCAAgAIvB4IAAizIgCg4QgCgdgGghIDHAAIgHAUIgHAWIgqgHQgTgCgRAAIgjABIgCBGQgBAiABAsIABAcQAAAiAFA1gAG8B4IgQg8IgOgoIhkAAIgiBkIhfAAQgMgLgKgOIgVgfIgUgfIgWgeIgSgRIgTgRIAAgBQARgJAQgRQASgSANgVQAPgVALgWQAKgVADgQIA0AAQgIARgKASQgKATgMASQgNATgNAPQgOAPgOAMIAAAAIAAAAQAQAMASAVQASAUASAZIAjAwIAQAWIAGgNIATgxIAXg8IAWg/IAhhgIBAAAIAKAkIASA2IATA+IAVA8QALAgAJAUQAJAXAHAKgAFFgMIBPAAIAAABIAAAAIgQgyIgWhEIgBAAgAAAB4IAAizQAAgdgBgeQgDgfgFgcIBHAAIgCBOIgBBMIABBHQABAkAGAkgAqSB4IAAizQAAgbgCgdQgCgdgGghIBJAAIgDBYIgBBRIABA8QACAfAGAlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-18.2,197.1,36.5);


(lib.shad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottleShadow();
	this.instance.setTransform(-45,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-60,90,121);


(lib.bot3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.bottleReg();
	this.instance.setTransform(-91,-322.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-322.5,182,645);


(lib.bot2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottleBig();
	this.instance.setTransform(-91,-322);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-322,182,644);


(lib.bot1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottleBlurred();
	this.instance.setTransform(-72.8,-261.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.8,-261.6,145.6,523.2);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.Symbol16copy();
	this.t2.setTransform(0,6);

	this.t1 = new lib.Symbol16();
	this.t1.setTransform(0,-47.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-83.2,210,127.4);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.setTransform(-0.2,0.4,1,1,-146.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-28.7,57.7,57.4);


(lib.Symbol17 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mc1
	this.mc1 = new lib.Symbol19();
	this.mc1.setTransform(19.1,0);

	this.timeline.addTween(cjs.Tween.get(this.mc1).wait(1));

	// mc2
	this.mc2 = new lib.Symbol21();
	this.mc2.setTransform(19.3,-0.4,1,0.188);

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-5.8,57.7,10.9);


(lib.Symbol6copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol7();
	this.instance.setTransform(29,8.5);

	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(22.4,8.5);

	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(26.5,14.9);

	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(19.1,14.6);

	this.instance_4 = new lib.Symbol7();
	this.instance_4.setTransform(22.6,20.5);

	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(14.4,19.5);

	this.instance_6 = new lib.Symbol7();
	this.instance_6.setTransform(17.6,25.2);

	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(11.7,28.6);

	this.instance_8 = new lib.Symbol7();
	this.instance_8.setTransform(8.4,22.9);

	this.instance_9 = new lib.Symbol7();
	this.instance_9.setTransform(5.1,30.5);

	this.instance_10 = new lib.Symbol7();
	this.instance_10.setTransform(1.6,24.3);

	this.instance_11 = new lib.Symbol7();
	this.instance_11.setTransform(-1.7,30.7);

	this.instance_12 = new lib.Symbol7();
	this.instance_12.setTransform(-5.2,23.6);

	this.instance_13 = new lib.Symbol7();
	this.instance_13.setTransform(-8.4,29.4);

	this.instance_14 = new lib.Symbol7();
	this.instance_14.setTransform(-14.6,26.5);

	this.instance_15 = new lib.Symbol7();
	this.instance_15.setTransform(-11.5,20.9);

	this.instance_16 = new lib.Symbol7();
	this.instance_16.setTransform(-20,22.2);

	this.instance_17 = new lib.Symbol7();
	this.instance_17.setTransform(-16.8,16.4);

	this.instance_18 = new lib.Symbol7();
	this.instance_18.setTransform(-24.3,16.8);

	this.instance_19 = new lib.Symbol7();
	this.instance_19.setTransform(-20.6,10.7);

	this.instance_20 = new lib.Symbol7();
	this.instance_20.setTransform(-27.3,10.7);

	this.instance_21 = new lib.Symbol7();
	this.instance_21.setTransform(-22.6,4.1);

	this.instance_22 = new lib.Symbol7();
	this.instance_22.setTransform(-28.8,4);

	this.instance_23 = new lib.Symbol7();
	this.instance_23.setTransform(-22.8,-2.8);

	this.instance_24 = new lib.Symbol7();
	this.instance_24.setTransform(-29,-2.8);

	this.instance_25 = new lib.Symbol7();
	this.instance_25.setTransform(-27.6,-9.6);

	this.instance_26 = new lib.Symbol7();
	this.instance_26.setTransform(-24.9,-15.8);

	this.instance_27 = new lib.Symbol7();
	this.instance_27.setTransform(-21.1,-9.5);

	this.instance_28 = new lib.Symbol7();
	this.instance_28.setTransform(-6.5,-23.3);

	this.instance_29 = new lib.Symbol7();
	this.instance_29.setTransform(-12.7,-20.2);

	this.instance_30 = new lib.Symbol7();
	this.instance_30.setTransform(-17.7,-15.4);

	this.instance_31 = new lib.Symbol7();
	this.instance_31.setTransform(-20.8,-21.4);

	this.instance_32 = new lib.Symbol7();
	this.instance_32.setTransform(-15.7,-25.8);

	this.instance_33 = new lib.Symbol7();
	this.instance_33.setTransform(-9.6,-29);

	this.instance_34 = new lib.Symbol7();
	this.instance_34.setTransform(-2.9,-30.7);

	this.instance_35 = new lib.Symbol7();
	this.instance_35.setTransform(0.3,-24.4);

	this.instance_36 = new lib.Symbol7();
	this.instance_36.setTransform(7.1,-23.4);

	this.instance_37 = new lib.Symbol7();
	this.instance_37.setTransform(3.9,-30.7);

	this.instance_38 = new lib.Symbol7();
	this.instance_38.setTransform(10.5,-29.1);

	this.instance_39 = new lib.Symbol7();
	this.instance_39.setTransform(21.9,-9.8);

	this.instance_40 = new lib.Symbol7();
	this.instance_40.setTransform(13.3,-20.4);

	this.instance_41 = new lib.Symbol7();
	this.instance_41.setTransform(28.7,-9.7);

	this.instance_42 = new lib.Symbol7();
	this.instance_42.setTransform(25.9,-16);

	this.instance_43 = new lib.Symbol7();
	this.instance_43.setTransform(18.3,-15.7);

	this.instance_44 = new lib.Symbol7();
	this.instance_44.setTransform(21.8,-21.5);

	this.instance_45 = new lib.Symbol7();
	this.instance_45.setTransform(16.6,-25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.8,-45.6,87.6,91);


(lib.Symbol6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol7();
	this.instance.setTransform(9,18.3);

	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(3.3,18.3);

	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(6.3,12.2);

	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(0,12.2);

	this.instance_4 = new lib.Symbol7();
	this.instance_4.setTransform(-2.8,18.3);

	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(-8.9,18.4);

	this.instance_6 = new lib.Symbol7();
	this.instance_6.setTransform(-6.3,12.2);

	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(-27,30.5);

	this.instance_8 = new lib.Symbol7();
	this.instance_8.setTransform(-19.6,30.5);

	this.instance_9 = new lib.Symbol7();
	this.instance_9.setTransform(-24.6,24.4);

	this.instance_10 = new lib.Symbol7();
	this.instance_10.setTransform(-17.3,24.4);

	this.instance_11 = new lib.Symbol7();
	this.instance_11.setTransform(-22.3,18.3);

	this.instance_12 = new lib.Symbol7();
	this.instance_12.setTransform(-14.9,18.3);

	this.instance_13 = new lib.Symbol7();
	this.instance_13.setTransform(-20,12.2);

	this.instance_14 = new lib.Symbol7();
	this.instance_14.setTransform(-12.6,12.2);

	this.instance_15 = new lib.Symbol7();
	this.instance_15.setTransform(-17.6,6.1);

	this.instance_16 = new lib.Symbol7();
	this.instance_16.setTransform(-10.3,6.1);

	this.instance_17 = new lib.Symbol7();
	this.instance_17.setTransform(19.6,30.5);

	this.instance_18 = new lib.Symbol7();
	this.instance_18.setTransform(27,30.5);

	this.instance_19 = new lib.Symbol7();
	this.instance_19.setTransform(17.3,24.4);

	this.instance_20 = new lib.Symbol7();
	this.instance_20.setTransform(24.6,24.4);

	this.instance_21 = new lib.Symbol7();
	this.instance_21.setTransform(14.9,18.3);

	this.instance_22 = new lib.Symbol7();
	this.instance_22.setTransform(22.3,18.4);

	this.instance_23 = new lib.Symbol7();
	this.instance_23.setTransform(12.6,12.2);

	this.instance_24 = new lib.Symbol7();
	this.instance_24.setTransform(20,12.2);

	this.instance_25 = new lib.Symbol7();
	this.instance_25.setTransform(10.3,6.1);

	this.instance_26 = new lib.Symbol7();
	this.instance_26.setTransform(17.6,6.1);

	this.instance_27 = new lib.Symbol7();
	this.instance_27.setTransform(-15.3,0);

	this.instance_28 = new lib.Symbol7();
	this.instance_28.setTransform(-7.9,0);

	this.instance_29 = new lib.Symbol7();
	this.instance_29.setTransform(8,0);

	this.instance_30 = new lib.Symbol7();
	this.instance_30.setTransform(15.3,0);

	this.instance_31 = new lib.Symbol7();
	this.instance_31.setTransform(-13,-6.1);

	this.instance_32 = new lib.Symbol7();
	this.instance_32.setTransform(-5.6,-6.1);

	this.instance_33 = new lib.Symbol7();
	this.instance_33.setTransform(5.6,-6.1);

	this.instance_34 = new lib.Symbol7();
	this.instance_34.setTransform(13,-6.1);

	this.instance_35 = new lib.Symbol7();
	this.instance_35.setTransform(-10.6,-12.2);

	this.instance_36 = new lib.Symbol7();
	this.instance_36.setTransform(-3.3,-12.2);

	this.instance_37 = new lib.Symbol7();
	this.instance_37.setTransform(3.3,-12.2);

	this.instance_38 = new lib.Symbol7();
	this.instance_38.setTransform(10.7,-12.2);

	this.instance_39 = new lib.Symbol7();
	this.instance_39.setTransform(-8.3,-18.3);

	this.instance_40 = new lib.Symbol7();
	this.instance_40.setTransform(-0.1,-18.3);

	this.instance_41 = new lib.Symbol7();
	this.instance_41.setTransform(-6,-24.4);

	this.instance_42 = new lib.Symbol7();
	this.instance_42.setTransform(8.3,-18.3);

	this.instance_43 = new lib.Symbol7();
	this.instance_43.setTransform(6,-24.4);

	this.instance_44 = new lib.Symbol7();
	this.instance_44.setTransform(0,-24.4);

	this.instance_45 = new lib.Symbol7();
	this.instance_45.setTransform(3.7,-30.5);

	this.instance_46 = new lib.Symbol7();
	this.instance_46.setTransform(-3.7,-30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.8,-45.4,83.6,90.6);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol7();
	this.instance.setTransform(19.2,30.5);

	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(11.8,30.5);

	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(19.2,23.8);

	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(11.8,23.8);

	this.instance_4 = new lib.Symbol7();
	this.instance_4.setTransform(19.2,17);

	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(11.8,17);

	this.instance_6 = new lib.Symbol7();
	this.instance_6.setTransform(19.2,10.2);

	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(11.8,10.2);

	this.instance_8 = new lib.Symbol7();
	this.instance_8.setTransform(19.2,3.4);

	this.instance_9 = new lib.Symbol7();
	this.instance_9.setTransform(11.8,3.4);

	this.instance_10 = new lib.Symbol7();
	this.instance_10.setTransform(19.2,-3.3);

	this.instance_11 = new lib.Symbol7();
	this.instance_11.setTransform(11.8,-3.3);

	this.instance_12 = new lib.Symbol7();
	this.instance_12.setTransform(19.2,-10.1);

	this.instance_13 = new lib.Symbol7();
	this.instance_13.setTransform(11.8,-10.1);

	this.instance_14 = new lib.Symbol7();
	this.instance_14.setTransform(19.2,-16.9);

	this.instance_15 = new lib.Symbol7();
	this.instance_15.setTransform(11.8,-16.9);

	this.instance_16 = new lib.Symbol7();
	this.instance_16.setTransform(19.2,-23.7);

	this.instance_17 = new lib.Symbol7();
	this.instance_17.setTransform(11.8,-23.7);

	this.instance_18 = new lib.Symbol7();
	this.instance_18.setTransform(19.2,-30.4);

	this.instance_19 = new lib.Symbol7();
	this.instance_19.setTransform(11.8,-30.4);

	this.instance_20 = new lib.Symbol7();
	this.instance_20.setTransform(5.4,10.7);

	this.instance_21 = new lib.Symbol7();
	this.instance_21.setTransform(5.3,3.8);

	this.instance_22 = new lib.Symbol7();
	this.instance_22.setTransform(-7.2,9.1);

	this.instance_23 = new lib.Symbol7();
	this.instance_23.setTransform(-0.9,10.5);

	this.instance_24 = new lib.Symbol7();
	this.instance_24.setTransform(-1.2,3.2);

	this.instance_25 = new lib.Symbol7();
	this.instance_25.setTransform(-7.2,0.8);

	this.instance_26 = new lib.Symbol7();
	this.instance_26.setTransform(-12.8,6.1);

	this.instance_27 = new lib.Symbol7();
	this.instance_27.setTransform(-16.8,1.2);

	this.instance_28 = new lib.Symbol7();
	this.instance_28.setTransform(-11.1,-4.3);

	this.instance_29 = new lib.Symbol7();
	this.instance_29.setTransform(-18.7,-4.9);

	this.instance_30 = new lib.Symbol7();
	this.instance_30.setTransform(-11.7,-10.8);

	this.instance_31 = new lib.Symbol7();
	this.instance_31.setTransform(-19.1,-11.3);

	this.instance_32 = new lib.Symbol7();
	this.instance_32.setTransform(-11.8,-17.4);

	this.instance_33 = new lib.Symbol7();
	this.instance_33.setTransform(-19.1,-17.6);

	this.instance_34 = new lib.Symbol7();
	this.instance_34.setTransform(-11.8,-23.9);

	this.instance_35 = new lib.Symbol7();
	this.instance_35.setTransform(-19.1,-24);

	this.instance_36 = new lib.Symbol7();
	this.instance_36.setTransform(-11.9,-30.4);

	this.instance_37 = new lib.Symbol7();
	this.instance_37.setTransform(-19.1,-30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.9,-45.3,67.9,90.6);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.glow = new lib.Symbol6copy2();
	this.glow.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.glow).wait(1));

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglFHQgJgIAAgMQAAgMAJgJQAIgJAMAAQANAAAGAJQAJAJAAAMQAAAMgJAIQgGAJgNAAQgMAAgIgJgAAdFFQgJgJAAgMQAAgMAJgJQAJgJAMABQANgBAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgAhpE6QgIgIAAgNQAAgMAIgJQAKgJAMAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgKgJgABfEyQgJgJABgLQgBgNAJgJQAJgIAMgBQAMABAJAIQAIAJAAANQAAALgIAJQgJAJgMAAQgMAAgJgJgAinEdQgIgIAAgNQAAgMAIgJQAKgJAMAAQAMAAAIAJQAKAJgBAMQABANgKAIQgIAJgMAAQgMAAgKgJgACaEQQgIgIAAgNQAAgMAIgIQAJgJANAAQAMAAAJAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgNAAgJgJgAgEEHQgIgIAAgNQAAgMAIgIQAHgJANAAQALAAAJAJQAJAIAAAMQAAANgJAIQgJAJgLAAQgNAAgHgJgAhIEBQgIgJAAgNQAAgMAIgIQAJgJAMAAQAMAAAJAJQAJAIgBAMQABANgJAJQgJAIgMAAQgMAAgJgIgAA+D6QgIgKAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAKQgJAIgMAAQgMAAgJgIgAjcDyQgJgIAAgMQAAgNAJgJQAJgIAMgBQAMABAJAIQAIAJAAANQAAAMgIAIQgJAJgMAAQgMAAgJgJgAiHDlQgJgJAAgMQAAgMAJgIQAIgKAMABQANgBAIAKQAJAIAAAMQAAAMgJAJQgIAJgNAAQgMAAgIgJgADNDhQgJgIAAgMQAAgMAJgKQAIgIAMAAQANAAAIAIQAJAKAAAMQAAAMgJAIQgIAKgNgBQgMABgIgKgAB6DYQgJgJABgMQgBgMAJgJQAJgJAMAAQAMAAAJAJQAIAJAAAMQAAAMgIAJQgJAIgMABQgMgBgJgIgAkGC8QgJgIAAgMQAAgMAJgJQAIgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAIQgIAKgNgBQgMABgIgKgAi8C5QgIgJgBgNQABgMAIgIQAJgJAMAAQAMAAAJAJQAJAIAAAMQAAANgJAJQgJAIgMABQgMgBgJgIgADzCpQgJgIAAgNQAAgMAJgJQAJgJAMAAQAMAAAKAJQAIAJAAAMQAAANgIAIQgKAJgMAAQgMAAgJgJgACqCmQgJgJAAgMQAAgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgAjhB/QgJgJAAgMQAAgMAJgJQAIgJAMABQANgBAIAJQAJAJAAAMQAAAMgJAJQgIAIgNAAQgMAAgIgIgAklB/QgIgJAAgMQAAgMAIgJQAKgJAMABQAMgBAIAJQAJAJAAAMQAAAMgJAJQgIAIgMAAQgMAAgKgIgAENBqQgJgKAAgMQAAgMAJgJQAJgJALAAQANAAAJAJQAIAJAAAMQAAAMgIAKQgJAIgNAAQgLAAgJgIgADKBpQgJgIABgNQgBgMAJgJQAJgJAMAAQAMAAAJAJQAIAJAAAMQAAANgIAIQgJAJgMAAQgMAAgJgJgAj2A+QgJgKABgMQgBgMAJgJQAJgJAMAAQAMAAAJAJQAIAJAAAMQAAAMgIAKQgJAIgMAAQgMAAgJgIgAk0A9QgJgKAAgMQAAgMAJgJQAJgJAMAAQAMAAAJAJQAIAJAAAMQAAAMgIAKQgJAIgMAAQgMAAgJgIgAj4gGQgIgIgBgMQABgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAIQgJAHgMAAQgMAAgJgHgAk2gHQgIgIAAgMQAAgMAIgJQAJgJANAAQAMAAAIAJQAJAJAAAMQAAAMgJAIQgIAIgMgBQgNABgJgIgAjnhIQgJgJAAgNQAAgMAJgJQAIgIANAAQANAAAIAIQAJAJAAAMQAAANgJAJQgIAIgNAAQgNAAgIgIgAkohJQgJgJAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAIAJABAMQgBANgIAJQgJAIgMAAQgMAAgJgIgAEJhLQgJgJABgMQgBgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgADFhMQgIgJgBgMQABgMAIgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgAjFiEQgIgJAAgMQAAgMAIgJQAJgJAMAAQANAAAJAJQAIAJAAAMQAAAMgIAJQgJAIgNAAQgMAAgJgIgAChiHQgIgIAAgNQAAgMAIgJQAJgJAMAAQANAAAJAJQAIAJABAMQgBANgIAIQgJAJgNAAQgMAAgJgJgAkNiIQgIgJgBgNQABgMAIgIQAJgJAMAAQAMAAAJAJQAJAIAAAMQAAANgJAJQgJAJgMAAQgMAAgJgJgADtiJQgIgKAAgMQAAgMAIgIQAJgJANAAQALAAAJAJQAJAIAAAMQAAAMgJAKQgJAIgLAAQgNAAgJgIgAiSizQgJgKAAgLQAAgNAJgJQAIgIANgBQAMABAIAIQAJAJAAANQAAALgJAKQgIAIgMAAQgNAAgIgIgABvi1QgJgKAAgMQAAgMAJgJQAJgJAMAAQAMAAAJAJQAIAJAAAMQAAAMgIAKQgJAIgMAAQgMAAgJgIgAjki/QgJgJAAgNQAAgLAJgJQAJgJAMAAQAMAAAIAJQAKAJgBALQABANgKAJQgIAIgMAAQgMAAgJgIgADFjBQgJgIAAgNQAAgMAJgIQAJgKALABQANgBAJAKQAIAIABAMQgBANgIAIQgJAJgNAAQgLAAgJgJgAhVjTQgJgIAAgNQAAgMAJgIQAJgJAMAAQAMAAAJAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgMAAgJgJgAAxjUQgJgIABgNQgBgMAJgIQAJgJAMAAQAMAAAJAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgMAAgJgJgAgRjeQgIgIgBgMQABgNAIgIQAJgJAKAAQAMAAAJAJQAJAIAAANQAAAMgJAIQgJAJgMAAQgKAAgJgJgAixjsQgIgJAAgNQAAgLAIgJQAJgJANAAQAMAAAJAJQAIAJAAALQAAANgIAJQgJAIgMABQgNgBgJgIgACQjtQgIgJAAgMQAAgMAIgJQAKgJALAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNgBQgLABgKgJgAh0kMQgIgJgBgMQABgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAIgMAAQgMAAgJgIgABUkNQgJgJAAgLQAAgNAJgJQAJgIAMAAQAMAAAIAIQAKAJAAANQAAALgKAJQgIAJgMAAQgMAAgJgJgAARkdQgIgIgBgMQABgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAIQgJAJgMAAQgMAAgJgJgAgxkdQgJgIAAgMQAAgNAJgIQAJgJAMAAQAMAAAIAJQAIAIAAANQAAAMgIAIQgIAJgMAAQgMAAgJgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4092B8").s().p("AglFIQgJgJAAgMQAAgNAJgIQAJgJALAAQANAAAHAJQAIAIABANQgBAMgIAJQgHAIgNABQgLgBgJgIgAAdFFQgJgJABgMQgBgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgAhpE6QgIgJAAgMQAAgMAIgJQAKgJAMABQAMgBAIAJQAKAJgBAMQABAMgKAJQgIAJgMAAQgMAAgKgJgABfEyQgIgIAAgMQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIgBANQABAMgJAIQgJAJgMAAQgMAAgJgJgAimEdQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAIAJQAKAJgBAMQABANgKAIQgIAJgMAAQgNAAgIgJgACaERQgIgKAAgMQAAgMAIgIQAJgKANABQAMgBAIAKQAJAIAAAMQAAAMgJAKQgIAIgMAAQgNAAgJgIgAgDEIQgJgKAAgMQAAgMAJgIQAGgJAMAAQANAAAIAJQAJAIAAAMQAAAMgJAKQgIAIgNAAQgMAAgGgIgAhIEBQgJgJAAgNQAAgMAJgJQAIgIANAAQANAAAIAIQAJAJAAAMQAAANgJAJQgIAIgNAAQgNAAgIgIgAA+D6QgJgKAAgLQAAgNAJgJQAIgIANgBQAMABAJAIQAJAJAAANQAAALgJAKQgJAIgMAAQgNAAgIgIgAjcDyQgJgIABgMQgBgNAJgIQAJgJAMAAQAMAAAJAJQAIAIAAANQAAAMgIAIQgJAJgMAAQgMAAgJgJgAiHDlQgJgIAAgNQAAgMAJgJQAIgJAMAAQANAAAJAJQAIAJABAMQgBANgIAIQgJAJgNAAQgMAAgIgJgADNDhQgJgIAAgMQAAgNAJgIQAIgJAMAAQANAAAJAJQAIAIABANQgBAMgIAIQgJAJgNAAQgMAAgIgJgAB6DYQgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJgBAMQABAMgJAJQgJAIgMAAQgMAAgJgIgAkGC8QgJgIAAgMQAAgMAJgJQAIgJAMAAQAMAAAKAJQAIAJAAAMQAAAMgIAIQgKAKgMgBQgMABgIgKgAi8C5QgJgJAAgNQAAgLAJgJQAJgJAMAAQANAAAIAJQAJAJAAALQAAANgJAJQgIAIgNABQgMgBgJgIgADzCpQgIgJgBgMQABgMAIgJQAJgJANAAQAMAAAJAJQAIAJAAAMQAAAMgIAJQgJAJgMAAQgNAAgJgJgACqCmQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgAjiB/QgIgJAAgMQAAgMAIgJQAJgIAMAAQAMAAAKAIQAIAJAAAMQAAAMgIAJQgKAJgMgBQgMABgJgJgAkkB/QgJgJAAgMQAAgMAJgJQAIgIANAAQAMAAAIAIQAJAJAAAMQAAAMgJAJQgIAJgMgBQgNABgIgJgAEMBpQgIgJAAgLQAAgNAIgJQAKgIALgBQANABAJAIQAIAJAAANQAAALgIAJQgJAJgNAAQgLAAgKgJgADKBpQgIgIAAgMQAAgNAIgJQAJgIAMgBQAMABAJAIQAJAJgBANQABAMgJAIQgJAJgMAAQgMAAgJgJgAj2A9QgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJgBAMQABAMgJAJQgJAJgMAAQgMAAgJgJgAk0A8QgJgIAAgMQAAgNAJgJQAJgIAMgBQAMABAJAIQAJAJgBANQABAMgJAIQgJAJgMAAQgMAAgJgJgAj3gGQgJgIAAgNQAAgMAJgIQAIgKAMABQANgBAIAKQAJAIAAAMQAAANgJAIQgIAHgNAAQgMAAgIgHgAk1gHQgJgIAAgMQAAgMAJgJQAIgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAIQgIAHgNAAQgMAAgIgHgAjnhJQgJgIAAgMQAAgNAJgJQAJgIAMAAQAMAAAJAIQAIAJAAANQAAAMgIAIQgJAJgMAAQgMAAgJgJgAkohJQgJgJAAgMQAAgMAJgKQAIgIANAAQAMAAAJAIQAIAKABAMQgBAMgIAJQgJAIgMAAQgNAAgIgIgAEJhLQgIgIAAgNQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgADFhMQgJgJAAgMQAAgMAJgJQAJgIAMgBQANABAIAIQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgAjFiEQgIgJAAgMQAAgMAIgJQAJgJANAAQAMAAAJAJQAIAJAAAMQAAAMgIAJQgJAJgMgBQgNABgJgJgAChiHQgIgJAAgMQAAgMAIgJQAKgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAIgMAAQgMAAgKgIgAkNiIQgJgJAAgMQAAgNAJgIQAJgJAMAAQANAAAIAJQAJAIAAANQAAAMgJAJQgIAJgNAAQgMAAgJgJgADuiJQgJgKAAgMQAAgMAJgJQAIgIAMAAQANAAAIAIQAJAJAAAMQAAAMgJAKQgIAIgNAAQgMAAgIgIgAiSi0QgKgJABgLQgBgNAKgJQAIgIAMgBQANABAIAIQAJAJAAANQAAALgJAJQgIAJgNAAQgMAAgIgJgABvi1QgJgKABgLQgBgNAJgJQAJgIAMgBQAMABAJAIQAIAJAAANQAAALgIAKQgJAIgMAAQgMAAgJgIgAjki/QgJgJAAgNQAAgLAJgKQAJgIALAAQANAAAIAIQAJAKAAALQAAANgJAJQgIAIgNAAQgLAAgJgIgADEjAQgIgKAAgMQAAgMAIgJQAKgJALAAQANAAAJAJQAIAJABAMQgBAMgIAKQgJAIgNAAQgLAAgKgIgAhVjSQgJgKAAgMQAAgMAJgJQAJgIAMAAQAMAAAJAIQAIAJAAAMQAAAMgIAKQgJAIgMAAQgMAAgJgIgAAxjTQgIgKAAgMQAAgMAIgIQAJgKAMABQAMgBAJAKQAJAIgBAMQABAMgJAKQgJAIgMAAQgMAAgJgIgAgRjeQgJgIAAgNQAAgMAJgIQAIgJALAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgLAAgIgJgAixjsQgIgJAAgNQAAgLAIgKQAJgIANAAQAMAAAIAIQAJAKAAALQAAANgJAJQgIAIgMABQgNgBgJgIgACQjtQgIgJAAgMQAAgNAIgIQAKgJAMAAQAMAAAIAJQAKAIAAANQAAAMgKAJQgIAJgMAAQgMAAgKgJgAh0kMQgJgJAAgMQAAgMAJgJQAJgJAMABQANgBAIAJQAJAJAAAMQAAAMgJAJQgIAIgNAAQgMAAgJgIgABUkNQgJgIAAgMQAAgNAJgIQAJgJAMAAQAMAAAIAJQAKAIgBANQABAMgKAIQgIAJgMAAQgMAAgJgJgAARkdQgJgIAAgNQAAgMAJgIQAJgKAMABQANgBAIAKQAJAIAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAgxkdQgJgIAAgNQAAgMAJgIQAJgJAMAAQAMAAAIAJQAIAIAAAMQAAANgIAIQgIAJgMAAQgMAAgJgJg");
	this.shape_1.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.8,-45.6,87.6,91);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.glow = new lib.Symbol6copy();
	this.glow.setTransform(0,0.1);
	this.glow.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.glow).wait(1));

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD4FFQgJgIABgMQgBgNAJgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAIQgJAKgMgBQgMABgJgKgACuFFQgIgIAAgMQAAgNAIgIQAKgJAMAAQAMAAAIAJQAJAIAAANQAAAMgJAIQgIAKgMgBQgMABgKgKgAjYFFQgIgIAAgMQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAIQgJAKgMgBQgMABgJgKgAkhFFQgJgIAAgMQAAgNAJgIQAIgJAMAAQANAAAIAJQAJAIAAANQAAAMgJAIQgIAKgNgBQgMABgIgKgADhEIQgJgIAAgNQAAgMAJgIQAIgJANAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgACXEIQgIgIAAgNQAAgMAIgIQAJgJAMAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgAjBEIQgIgIgBgNQABgMAIgIQAJgJANAAQALAAAJAJQAJAIAAAMQAAANgJAIQgJAJgLAAQgNAAgJgJgAkKEIQgJgIAAgNQAAgMAJgIQAIgJANAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgNAAgIgJgADJDMQgIgJAAgNQAAgMAIgJQAJgIANAAQAMAAAIAIQAJAJAAAMQAAANgJAJQgIAIgMAAQgNAAgJgIgACADMQgJgJAAgNQAAgMAJgJQAIgIANAAQAMAAAJAIQAJAJAAAMQAAANgJAJQgJAIgMAAQgNAAgIgIgABEDMQgGgHgCgHQgCAHgGAHQgIAIgNAAQgNAAgIgIQgJgJAAgNQAAgMAJgJQAIgIANAAQANAAAIAIQAGAGACAJQACgJAGgGQAJgIAMAAQAMAAAIAIQAKAJgBAMQABANgKAJQgIAIgMAAQgMAAgJgIgAgvDMQgJgJAAgNQAAgMAJgJQAIgIANAAQAMAAAIAIQAHAJAAAMQAAANgHAJQgIAIgMAAQgNAAgIgIgAhsDMQgKgJABgNQgBgMAKgJQAIgIAMAAQANAAAIAIQAJAJAAAMQAAANgJAJQgIAIgNAAQgMAAgIgIgAiqDMQgIgJAAgNQAAgMAIgJQAJgIAMAAQANAAAJAIQAIAJABAMQgBANgIAJQgJAIgNAAQgMAAgJgIgAjzDMQgIgJAAgNQAAgMAIgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAJQgJAIgMAAQgMAAgJgIgACyCPQgIgKAAgLQAAgNAIgJQAJgIAMAAQAMAAAJAIQAJAJAAANQAAALgJAKQgJAIgMAAQgMAAgJgIgABpCPQgJgKAAgLQAAgNAJgJQAIgIAMAAQANAAAIAIQAJAJAAANQAAALgJAKQgIAIgNAAQgMAAgIgIgAAqCPQgJgKAAgLQAAgNAJgJQAJgIAMAAQAMAAAJAIQAJAJgBANQABALgJAKQgJAIgMAAQgMAAgJgIgAgTCPQgJgKAAgLQAAgNAJgJQAIgIALAAQAMAAAIAIQAJAJAAANQAAALgJAKQgIAIgMAAQgLAAgIgIgAhTCPQgJgKAAgLQAAgNAJgJQAJgIAMAAQAMAAAIAIQAKAJgBANQABALgKAKQgIAIgMAAQgMAAgJgIgAiSCPQgJgKABgLQgBgNAJgJQAJgIAMAAQAMAAAJAIQAIAJAAANQAAALgIAKQgJAIgMAAQgMAAgJgIgAjcCPQgIgKgBgLQABgNAIgJQAJgIANAAQALAAAJAIQAJAJAAANQAAALgJAKQgJAIgLAAQgNAAgJgIgACbBRQgJgJAAgLQAAgNAJgJQAIgIANAAQAMAAAJAIQAJAJAAANQAAALgJAJQgJAJgMAAQgNAAgIgJgABRBRQgJgJAAgLQAAgNAJgJQAJgIAMAAQAMAAAKAIQAIAJAAANQAAALgIAJQgKAJgMAAQgMAAgJgJgAh7BRQgIgJgBgLQABgNAIgJQAJgIANAAQALAAAKAIQAIAJAAANQAAALgIAJQgKAJgLAAQgNAAgJgJgAjFBRQgIgJAAgLQAAgNAIgJQAJgIAMAAQANAAAJAIQAIAJABANQgBALgIAJQgJAJgNAAQgMAAgJgJgACEAUQgJgIAAgMQAAgLAJgIQAIgJANAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgNAAgIgJgAA6AUQgJgIABgMQgBgLAJgIQAJgJAMAAQAMAAAJAJQAIAIAAALQAAAMgIAIQgJAJgMAAQgMAAgJgJgAhjAUQgJgIAAgMQAAgLAJgIQAIgJAMAAQANAAAIAJQAJAIAAALQAAAMgJAIQgIAJgNAAQgMAAgIgJgAitAUQgJgIABgMQgBgLAJgIQAJgJAMAAQAMAAAJAJQAIAIAAALQAAAMgIAIQgJAJgMAAQgMAAgJgJgABsgmQgJgKAAgMQAAgMAJgIQAJgKAMABQAMgBAKAKQAIAIAAAMQAAAMgIAKQgKAIgMAAQgMAAgJgIgAAjgmQgJgKAAgMQAAgMAJgIQAJgKALABQANgBAJAKQAIAIABAMQgBAMgIAKQgJAIgNAAQgLAAgJgIgAhMgmQgJgKAAgMQAAgMAJgIQAJgKAMABQAMgBAJAKQAIAIAAAMQAAAMgIAKQgJAIgMAAQgMAAgJgIgAiWgmQgIgKgBgMQABgMAIgIQAJgKANABQALgBAKAKQAIAIAAAMQAAAMgIAKQgKAIgLAAQgNAAgJgIgABVhjQgJgKABgMQgBgMAJgJQAJgJAMAAQAMAAAJAJQAIAJAAAMQAAAMgIAKQgJAIgMAAQgMAAgJgIgAALhjQgIgKgBgMQABgMAIgJQAJgJANAAQALAAAKAJQAIAJAAAMQAAAMgIAKQgKAIgLAAQgNAAgJgIgAg1hjQgIgKgBgMQABgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAKQgJAIgMAAQgMAAgJgIgAh+hjQgJgKAAgMQAAgMAJgJQAIgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAKQgIAIgNAAQgMAAgIgIgAA+ihQgJgJAAgMQAAgMAJgJQAJgJALAAQANAAAJAJQAIAJABAMQgBAMgIAJQgJAJgNAAQgLAAgJgJgAgUihQgJgJAAgMQAAgMAJgJQAIgJAMAAQALAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgLAAQgMAAgIgJgAhnihQgJgJAAgMQAAgMAJgJQAJgJAMAAQAMAAAJAJQAIAJAAAMQAAAMgIAJQgJAJgMAAQgMAAgJgJgAAmjeQgIgJgBgMQABgMAIgJQAJgJANABQAMgBAIAJQAJAJAAAMQAAAMgJAJQgIAJgMAAQgNAAgJgJgAhQjeQgIgJgBgMQABgMAIgJQAJgJAMABQAMgBAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgAgSjfQgJgIAAgMQAAgMAJgHQAIgJAKABQALgBAHAJQAJAHAAAMQAAAMgJAIQgHAIgLAAQgKAAgIgIgAAPkbQgIgJAAgMQAAgMAIgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgAg4kbQgJgJAAgMQAAgMAJgJQAIgIANAAQAMAAAIAIQAJAJAAAMQAAAMgJAJQgIAJgMAAQgNAAgIgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4092B8").s().p("AD4FFQgIgIAAgNQAAgMAIgIQAJgJAMAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgACvFFQgJgIAAgNQAAgMAJgIQAIgJANAAQAMAAAIAJQAJAIAAAMQAAANgJAIQgIAJgMAAQgNAAgIgJgAjYFFQgJgIAAgNQAAgMAJgIQAJgJAMAAQANAAAIAJQAJAIAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAkhFFQgJgIAAgNQAAgMAJgIQAJgJALAAQAMAAAKAJQAIAIAAAMQAAANgIAIQgKAJgMAAQgLAAgJgJgADhEJQgJgJAAgNQAAgMAJgJQAIgIANAAQAMAAAJAIQAJAJAAAMQAAANgJAJQgJAIgMABQgNgBgIgIgACXEJQgJgJAAgNQAAgMAJgJQAJgIAMAAQANAAAIAIQAJAJAAAMQAAANgJAJQgIAIgNABQgMgBgJgIgAjAEJQgJgJAAgNQAAgMAJgJQAIgIAMAAQANAAAIAIQAJAJAAAMQAAANgJAJQgIAIgNABQgMgBgIgIgAkKEJQgJgJAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAIAJAAAMQAAANgIAJQgJAIgMABQgMgBgJgIgADKDMQgJgJAAgMQAAgMAJgKQAIgIAMAAQANAAAIAIQAJAKAAAMQAAAMgJAJQgIAIgNAAQgMAAgIgIgACADMQgJgJAAgMQAAgMAJgKQAJgIAMAAQAMAAAJAIQAIAKAAAMQAAAMgIAJQgJAIgMAAQgMAAgJgIgABEDMQgGgHgCgHQgCAHgGAHQgJAIgMAAQgMAAgJgIQgJgJAAgMQAAgMAJgKQAJgIAMAAQAMAAAJAIQAGAHACAIQACgIAGgHQAIgIAMAAQANAAAIAIQAJAKAAAMQAAAMgJAJQgIAIgNAAQgMAAgIgIgAgvDMQgKgJABgMQgBgMAKgKQAIgIAMAAQANAAAIAIQAHAKAAAMQAAAMgHAJQgIAIgNAAQgMAAgIgIgAhtDMQgJgJAAgMQAAgMAJgKQAJgIAMAAQAMAAAKAIQAIAKAAAMQAAAMgIAJQgKAIgMAAQgMAAgJgIgAiqDMQgIgJAAgMQAAgMAIgKQAKgIAMAAQAMAAAJAIQAJAKAAAMQAAAMgJAJQgJAIgMAAQgMAAgKgIgAjzDMQgJgJAAgMQAAgMAJgKQAJgIAMAAQANAAAIAIQAJAKAAAMQAAAMgJAJQgIAIgNAAQgMAAgJgIgACyCOQgJgJAAgLQAAgNAJgJQAJgIAMAAQANAAAIAIQAJAJAAANQAAALgJAJQgIAJgNAAQgMAAgJgJgABpCOQgJgJAAgLQAAgNAJgJQAJgIALAAQANAAAJAIQAIAJABANQgBALgIAJQgJAJgNAAQgLAAgJgJgAAqCOQgJgJAAgLQAAgNAJgJQAJgIAMAAQAMAAAJAIQAJAJAAANQAAALgJAJQgJAJgMAAQgMAAgJgJgAgTCOQgJgJAAgLQAAgNAJgJQAIgIALAAQAMAAAJAIQAIAJABANQgBALgIAJQgJAJgMAAQgLAAgIgJgAhTCOQgJgJAAgLQAAgNAJgJQAJgIAMAAQAMAAAIAIQAJAJAAANQAAALgJAJQgIAJgMAAQgMAAgJgJgAiSCOQgIgJAAgLQAAgNAIgJQAJgIAMAAQAMAAAJAIQAJAJgBANQABALgJAJQgJAJgMAAQgMAAgJgJgAjbCOQgJgJAAgLQAAgNAJgJQAIgIAMAAQANAAAIAIQAJAJAAANQAAALgJAJQgIAJgNAAQgMAAgIgJgACbBRQgJgIAAgNQAAgMAJgIQAJgJAMAAQAMAAAJAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgMAAgJgJgABRBRQgIgIgBgNQABgMAIgIQAJgJANAAQAMAAAIAJQAJAIAAAMQAAANgJAIQgIAJgMAAQgNAAgJgJgAh7BRQgIgIgBgNQABgMAIgIQAJgJANAAQALAAAJAJQAJAIAAAMQAAANgJAIQgJAJgLAAQgNAAgJgJgAjFBRQgIgIAAgNQAAgMAIgIQAKgJAMAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgMAAgKgJgACEAVQgJgKAAgLQAAgLAJgIQAJgJALAAQANAAAJAJQAIAIABALQgBALgIAKQgJAIgNAAQgLAAgJgIgAA6AVQgIgKAAgLQAAgLAIgIQAJgJAMAAQAMAAAJAJQAJAIgBALQABALgJAKQgJAIgMAAQgMAAgJgIgAhkAVQgIgKAAgLQAAgLAIgIQAJgJAMAAQANAAAJAJQAIAIABALQgBALgIAKQgJAIgNAAQgMAAgJgIgAitAVQgIgKAAgLQAAgLAIgIQAJgJAMAAQAMAAAJAJQAJAIgBALQABALgJAKQgJAIgMAAQgMAAgJgIgABsgmQgIgKgBgMQABgMAIgJQAJgJANAAQALAAAKAJQAIAJAAAMQAAAMgIAKQgKAIgLAAQgNAAgJgIgAAigmQgIgKAAgMQAAgMAIgJQAKgJALAAQANAAAJAJQAIAJABAMQgBAMgIAKQgJAIgNAAQgLAAgKgIgAhMgmQgJgKAAgMQAAgMAJgJQAJgJAMAAQAMAAAJAJQAIAJAAAMQAAAMgIAKQgJAIgMAAQgMAAgJgIgAiWgmQgIgKgBgMQABgMAIgJQAJgJANAAQALAAAJAJQAJAJAAAMQAAAMgJAKQgJAIgLAAQgNAAgJgIgABVhkQgIgJAAgLQAAgNAIgJQAJgIAMgBQAMABAJAIQAJAJgBANQABALgJAJQgJAJgMAAQgMAAgJgJgAAMhkQgJgJAAgLQAAgNAJgJQAIgIANgBQAMABAIAIQAJAJAAANQAAALgJAJQgIAJgMAAQgNAAgIgJgAg1hkQgJgJAAgLQAAgNAJgJQAJgIAMgBQANABAIAIQAJAJAAANQAAALgJAJQgIAJgNAAQgMAAgJgJgAh/hkQgIgJAAgLQAAgNAIgJQAJgIAMgBQANABAJAIQAIAJABANQgBALgIAJQgJAJgNAAQgMAAgJgJgAA9ihQgIgIAAgNQAAgMAIgJQAKgJALABQANgBAJAJQAIAJABAMQgBANgIAIQgJAJgNAAQgLAAgKgJgAgUihQgKgIABgNQgBgMAKgJQAIgJAMABQALgBAIAJQAJAJAAAMQAAANgJAIQgIAJgLAAQgMAAgIgJgAhnihQgJgIAAgNQAAgMAJgJQAJgJAMABQAMgBAJAJQAIAJAAAMQAAANgIAIQgJAJgMAAQgMAAgJgJgAAnjeQgJgJAAgMQAAgMAJgJQAIgIANAAQAMAAAIAIQAJAJAAAMQAAAMgJAJQgIAJgMAAQgNAAgIgJgAhQjeQgJgJAAgMQAAgMAJgJQAJgIAMAAQANAAAIAIQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgAgTjfQgIgIAAgMQAAgMAIgHQAJgJAKAAQALAAAHAJQAJAHAAAMQAAAMgJAIQgHAIgLAAQgKAAgJgIgAAPkbQgIgJAAgMQAAgMAIgJQAJgIAMgBQAMABAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgAg4kbQgJgJAAgMQAAgMAJgJQAIgIAMgBQANABAIAIQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgIgJg");
	this.shape_1.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.8,-45.3,83.6,90.6);


(lib.Symbol3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 2
	this.glow = new lib.Symbol6();
	this.glow.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.glow).wait(1));

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACqFFQgIgIAAgNQAAgMAIgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgABhFFQgJgIAAgNQAAgMAJgJQAIgIANAAQAMAAAIAIQAJAJAAAMQAAANgJAIQgIAJgMAAQgNAAgIgJgACqECQgIgJAAgMQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAJQgJAIgMAAQgMAAgJgIgABhECQgJgJAAgMQAAgNAJgIQAIgJANAAQAMAAAIAJQAJAIAAANQAAAMgJAJQgIAIgMAAQgNAAgIgIgACqC+QgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgABhC+QgJgJAAgMQAAgMAJgJQAIgJANAAQAMAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgMAAQgNAAgIgJgAAhB/QgJgJAAgMQAAgMAJgJQAIgIANAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgNAAgIgJgAgdB9QgJgJAAgMQAAgMAJgJQAJgJAMAAQAKAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgKAAQgMAAgJgJgACqB6QgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgABhB6QgJgJAAgMQAAgMAJgJQAIgJANAAQAMAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgMAAQgNAAgIgJgAhbBvQgJgIAAgNQAAgMAJgJQAIgIANAAQAMAAAJAIQAIAJAAAMQAAANgIAIQgJAJgMAAQgNAAgIgJgAiTBRQgJgJAAgMQAAgMAJgJQAIgJANAAQAMAAAJAJQAIAJAAAMQAAAMgIAJQgJAJgMAAQgNAAgIgJgAAfA6QgIgJAAgMQAAgMAIgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgACqA2QgIgIAAgNQAAgMAIgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgABhA2QgJgIAAgNQAAgMAJgJQAIgIANAAQAMAAAIAIQAJAJAAAMQAAANgJAIQgIAJgMAAQgNAAgIgJgAggA0QgIgJAAgMQAAgMAIgJQAJgJAMAAQALAAAIAJQAJAJAAAMQAAAMgJAJQgIAIgLAAQgMAAgJgIgAi7AgQgJgJAAgMQAAgLAJgIQAIgJANAAQAMAAAJAJQAIAIAAALQAAAMgIAJQgJAIgMAAQgNAAgIgIgAhcAcQgJgJAAgMQAAgLAJgIQAJgJAMAAQAMAAAJAJQAJAIAAALQAAAMgJAJQgJAIgMAAQgMAAgJgIgACqgMQgIgIAAgMQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAIQgJAJgMAAQgMAAgJgJgABhgMQgJgIAAgMQAAgNAJgIQAIgJANAAQAMAAAIAJQAJAIAAANQAAAMgJAIQgIAJgMAAQgNAAgIgJgAiDgWQgIgIAAgNQAAgMAIgJQAJgIAMAAQANAAAIAIQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAjPgbQgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgACqhPQgIgJAAgMQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAJQgJAIgMAAQgMAAgJgIgABhhPQgJgJAAgMQAAgNAJgIQAIgJANAAQAMAAAIAJQAJAIAAANQAAAMgJAJQgIAIgMAAQgNAAgIgIgAiJhWQgJgJAAgMQAAgNAJgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAJQgJAIgMAAQgMAAgJgIgAjThbQgJgIAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgACqiTQgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgABhiTQgJgJAAgMQAAgMAJgJQAIgJANAAQAMAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgMAAQgNAAgIgJgAiJiYQgJgIAAgNQAAgMAJgJQAIgIAMAAQANAAAIAIQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgIgJgAjTibQgJgIAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgACqjXQgIgIAAgNQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgABhjXQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAIAJQAJAJAAAMQAAANgJAIQgIAJgMAAQgNAAgIgJgAiKjZQgJgJAAgMQAAgMAJgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgAjTjbQgJgIAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgACqkbQgIgIAAgNQAAgMAIgIQAJgJAMAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgABhkbQgJgIAAgNQAAgMAJgIQAIgJANAAQAMAAAIAJQAJAIAAAMQAAANgJAIQgIAJgMAAQgNAAgIgJgAiKkbQgJgIAAgNQAAgMAJgIQAIgJANAAQAMAAAJAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgNAAgIgJgAjTkbQgJgIAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4092B8").s().p("ACqFFQgIgIAAgNQAAgMAIgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgABhFFQgJgIAAgNQAAgMAJgJQAIgIANAAQAMAAAIAIQAJAJAAAMQAAANgJAIQgIAJgMAAQgNAAgIgJgACqECQgIgJAAgMQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAJQgJAIgMAAQgMAAgJgIgABhECQgJgJAAgMQAAgNAJgIQAIgJANAAQAMAAAIAJQAJAIAAANQAAAMgJAJQgIAIgMAAQgNAAgIgIgACqC+QgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgABhC+QgJgJAAgMQAAgMAJgJQAIgJANAAQAMAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgMAAQgNAAgIgJgAAhB/QgJgJAAgMQAAgMAJgJQAIgIANAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgNAAgIgJgAgdB9QgJgJAAgMQAAgMAJgJQAJgJAMAAQAKAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgKAAQgMAAgJgJgACqB6QgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgABhB6QgJgJAAgMQAAgMAJgJQAIgJANAAQAMAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgMAAQgNAAgIgJgAhbBvQgJgIAAgNQAAgMAJgJQAIgIANAAQAMAAAJAIQAIAJAAAMQAAANgIAIQgJAJgMAAQgNAAgIgJgAiTBRQgJgJAAgMQAAgMAJgJQAIgJANAAQAMAAAJAJQAIAJAAAMQAAAMgIAJQgJAJgMAAQgNAAgIgJgAAfA6QgIgJAAgMQAAgMAIgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgACqA2QgIgIAAgNQAAgMAIgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgABhA2QgJgIAAgNQAAgMAJgJQAIgIANAAQAMAAAIAIQAJAJAAAMQAAANgJAIQgIAJgMAAQgNAAgIgJgAggA0QgIgJAAgMQAAgMAIgJQAJgJAMAAQALAAAIAJQAJAJAAAMQAAAMgJAJQgIAIgLAAQgMAAgJgIgAi7AgQgJgJAAgMQAAgLAJgIQAIgJANAAQAMAAAJAJQAIAIAAALQAAAMgIAJQgJAIgMAAQgNAAgIgIgAhcAcQgJgJAAgMQAAgLAJgIQAJgJAMAAQAMAAAJAJQAJAIAAALQAAAMgJAJQgJAIgMAAQgMAAgJgIgACqgMQgIgIAAgMQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAIQgJAJgMAAQgMAAgJgJgABhgMQgJgIAAgMQAAgNAJgIQAIgJANAAQAMAAAIAJQAJAIAAANQAAAMgJAIQgIAJgMAAQgNAAgIgJgAiDgWQgIgIAAgNQAAgMAIgJQAJgIAMAAQANAAAIAIQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAjPgbQgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgACqhPQgIgJAAgMQAAgNAIgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAJQgJAIgMAAQgMAAgJgIgABhhPQgJgJAAgMQAAgNAJgIQAIgJANAAQAMAAAIAJQAJAIAAANQAAAMgJAJQgIAIgMAAQgNAAgIgIgAiJhWQgJgJAAgMQAAgNAJgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAAMgJAJQgJAIgMAAQgMAAgJgIgAjThbQgJgIAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgACqiTQgIgJAAgMQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgABhiTQgJgJAAgMQAAgMAJgJQAIgJANAAQAMAAAIAJQAJAJAAAMQAAAMgJAJQgIAJgMAAQgNAAgIgJgAiJiYQgJgIAAgNQAAgMAJgJQAIgIAMAAQANAAAIAIQAJAJAAAMQAAANgJAIQgIAJgNAAQgMAAgIgJgAjTibQgJgIAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgACqjXQgIgIAAgNQAAgMAIgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgABhjXQgJgIAAgNQAAgMAJgJQAIgJANAAQAMAAAIAJQAJAJAAAMQAAANgJAIQgIAJgMAAQgNAAgIgJgAiKjZQgJgJAAgMQAAgMAJgJQAJgJAMAAQAMAAAJAJQAJAJAAAMQAAAMgJAJQgJAJgMAAQgMAAgJgJgAjTjbQgJgIAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgACqkbQgIgIAAgNQAAgMAIgIQAJgJAMAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJgABhkbQgJgIAAgNQAAgMAJgIQAIgJANAAQAMAAAIAJQAJAIAAAMQAAANgJAIQgIAJgMAAQgNAAgIgJgAiKkbQgJgIAAgNQAAgMAJgIQAIgJANAAQAMAAAJAJQAIAIAAAMQAAANgIAIQgJAJgMAAQgNAAgIgJgAjTkbQgJgIAAgNQAAgMAJgJQAJgIAMAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgMAAgJgJg");
	this.shape_1.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.9,-45.3,67.9,90.6);


(lib.lid1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Symbol2();
	this.instance.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(2,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-11.2,199.1,38.5);


(lib.Symbol16_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.mc = new lib.Symbol37();
	this.mc.setTransform(0.3,97.3,1,1,0,0,0,0,98.3);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-39.7,45.2,77.4);


(lib.cheaps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// b2
	this.b2 = new lib.Symbol28();
	this.b2.setTransform(-8.2,16.2,0.949,0.949,-14.8);

	this.timeline.addTween(cjs.Tween.get(this.b2).wait(1));

	// b1
	this.b1 = new lib.Symbol28();
	this.b1.setTransform(38,2,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.b1).wait(1));

	// sh2
	this.sh2 = new lib.shad();
	this.sh2.setTransform(-11.1,17,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.sh2).wait(1));

	// sh1
	this.sh1 = new lib.shad();
	this.sh1.setTransform(35,2);

	this.timeline.addTween(cjs.Tween.get(this.sh1).wait(1));

	// chem
	this.chem = new lib.Symbol27();
	this.chem.setTransform(-33,-20);

	this.timeline.addTween(cjs.Tween.get(this.chem).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198,-146,330,252);


(lib.chas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.l3 = new lib.Symbol5();
	this.l3.setTransform(65.3,0);

	this.l2 = new lib.Symbol4();
	this.l2.setTransform(-8.1,-0.2);

	this.l1 = new lib.Symbol3();
	this.l1.setTransform(-75.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l1},{t:this.l2},{t:this.l3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-45.6,218.2,91);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var r = this;
		var count = 1;
		var repeat = 20;
		var time2 = 4.0;
		var time3 = time2 + 4.0;
		var time4 = time3 + 3.0;
		
		var tl = new TimelineMax();
		tl.fromTo(r.blk, 0.7, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .from(r.bot1, 1.0, {scaleX:6.0, scaleY:6.0, alpha:0, ease:Expo.easeOut}, 0.0)
		  .from(r.chas1.l1, 1.0, {x:"-=180", scaleX:3.0, scaleY:3.0, alpha:0, ease:Expo.easeOut}, 0.3)
		  .from(r.chas1.l2, 1.0, {x:"-=0", scaleX:3.0, scaleY:3.0, alpha:0, ease:Expo.easeOut}, 0.5)
		  .from(r.chas1.l3, 1.0, {x:"+=180", scaleX:3.0, scaleY:3.0, alpha:0, ease:Expo.easeOut}, 0.7)
		  .from(r.lid1, 1.0, {scaleX:3.0, scaleY:3.0, alpha:0, ease:Expo.easeOut}, 0.8)
		  .from(r.t1, 1.0, {y:"+=200", scaleX:3.0, scaleY:3.0, alpha:0, ease:Expo.easeOut}, 0.9)
		  
		  .from(r.shakeIcon, 0.5, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 1.0)
		  .from(r.shakeIcon, 1.0, {rotation:"-=70", ease:Elastic.easeOut}, 1.0)
		  //.call(glowArrs)
		  
		  .call(shakeIconFn)
		  .call(checkShake)
		  
		  
		  
		  //2
		  .to(r.blk, 0.1, {alpha:1, ease:Power0.easeNone}, time2+0.0)
		  .to(r.blk, 0.9, {alpha:0, ease:Power0.easeNone}, time2+0.1)
		  
		  .staggerTo([r.shakeIcon, r.chas1.l3, r.chas1.l2, r.chas1.l1, r.lid1, r.t1, r.bot1], 0.7, {x:"+=450", ease:Expo.easeIn}, 0.05, time2+0.00)
		  .from(r.cheaps.chem, 1.1, {x:"-=350", ease:Expo.easeOut}, time2+0.70)
		  .from(r.cheaps.b1, 0.4, {x:"+=90", scaleX:4.0, scaleY:4.0, alpha:0, ease:Sine.easeOut}, time2+1.70)
		  .from(r.cheaps.sh1, 0.2, {x:"+=10", scaleX:2.0, scaleY:2.0, alpha:0, ease:Sine.easeOut}, time2+1.90)
		  .to(r.cheaps.b1, 0.2, {scaleX:1.02, scaleY:1.02, ease:Sine.easeOut}, time2+2.10)
		  .to(r.cheaps.b1, 0.1, {scaleX:1.0, scaleY:1.0, ease:Sine.easeIn}, time2+2.40)
		  
		  .from(r.cheaps.b2, 0.5, {x:"-=90", scaleX:4.0, scaleY:4.0, alpha:0, ease:Sine.easeOut}, time2+1.90)
		  .from(r.cheaps.sh2, 0.2, {x:"-=10", scaleX:2.0, scaleY:2.0, alpha:0, ease:Sine.easeOut}, time2+2.20)
		  .to(r.cheaps.b2, 0.1, {scaleX:1.01, scaleY:1.01, ease:Sine.easeOut}, time2+2.40)
		  .to(r.cheaps.b2, 0.1, {scaleX:1.0, scaleY:1.0, ease:Sine.easeIn}, time2+2.50)
		  
		  .from(r.b1, 1.5, {x:"+=450", /*y:"+=600", rotation:"+=40", */ease:Expo.easeOut}, time2+0.70)
		  //.from(r.b2, 1.5, {x:"+=250", y:"+=500", rotation:"-=40", ease:Expo.easeOut}, time2+0.70)
		  .staggerFrom([r.t2.t1, r.t2.t2], 1.2, {x:"+=150", alpha:0, ease:Expo.easeOut}, 0.10, time2+1.20)
		  
		  //3
		  .staggerTo([r.cheaps, r.t2.t1, r.t2.t2, r.b1], 0.6, {x:"-=450", ease:Expo.easeIn}, 0.05, time3+0.00)
		  .call(glowChas2)
		  .staggerTo([r.chas1.l1, r.chas1.l2, r.chas1.l3, r.lid1], 0.7, {x:"-=450", ease:Expo.easeOut}, 0.05, time3+0.70)
		  .staggerTo([r.bot2, r.cover], 0.7, {x:-84, ease:Expo.easeOut}, 0.00, time3+1.00)
		  
		  .to(r.cover, 0.2, {x:"+=100", y:"-=2", rotation:"+=90", ease:Power3.easeOut}, time3+2.00)
		  .to(r.cover.mc1, 0.1, {alpha:0, ease:Power0.easeNone}, time3+2.20)
		  .from(r.cover.mc2, 0.1, {alpha:0, ease:Power0.easeNone}, time3+2.20)
		  .to(r.cover.mc2, 0.3, {scaleY:1, ease:Power3.easeIn}, time3+2.20)
		  .to(r.cover, 0.6, {x:"+=150", y:"+=250", rotation:"+=60", ease:Power3.easeIn}, time3+2.20)
		  
		  
		  //4
		  .to(r.chas1, 1.3, {x:71, y:-231, scaleX:0.9, scaleY:0.9, ease:Expo.easeInOut}, time4+0.00)
		  .to(r.lid1, 1.3, {x:71, y:-176, scaleX:0.9, scaleY:0.9, ease:Expo.easeInOut}, time4+0.07)
		  .from(r.bokal, 1.3, {x:"+=450", ease:Expo.easeOut}, time4+0.60)
		  
		  
		  .call(replay)
		  .to(this.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 18)
		  ;
		
		
		
		function replay() {
		  if (count == repeat){
			  tl.kill();
			  createjs.Ticker.setFPS(1);
		  } else {
		  if (count != repeat) {
			  count++;
			  tl.play();
		  }
		  }
		}
		
		
		function restart() {
			killglowChas2();
			glowChas2();
			tl.play(0);
		}
		
		
		
		//1st chas
		var z1 = this.chas1.l1.glow;
		function chas1Glowl1() {
			var i = 0;
			for (currObj in z1) {
			  if(z1[currObj] && typeof z1[currObj] == "object" && i>=56){
				  TweenMax.set(z1[currObj], {alpha:0});
				  del=Math.random()*8+0.6;
				  TweenMax.to(z1[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del});
				  TweenMax.to(z1[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+0.1});
				  TweenMax.to(z1[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del+6});
				  TweenMax.to(z1[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+6.1});
				  }
			i++;
			 }
		}
		chas1Glowl1();
		
		var z2 = this.chas1.l2.glow;
		function chas1Glowl2() {
			var i = 0;
			for (currObj in z2) {
			  if(z2[currObj] && typeof z2[currObj] == "object" && i>=56){
				  TweenMax.set(z2[currObj], {alpha:0});
				  del=Math.random()*8+0.6;
				  TweenMax.to(z2[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del});
				  TweenMax.to(z2[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+0.1});
				  TweenMax.to(z2[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del+6});
				  TweenMax.to(z2[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+6.1});
				  }
			i++;
			 }
		}
		chas1Glowl2();
		
		var z3 = this.chas1.l3.glow;
		function chas1Glowl3() {
			var i = 0;
			for (currObj in z3) {
			  if(z3[currObj] && typeof z3[currObj] == "object" && i>=56){
				  TweenMax.set(z3[currObj], {alpha:0});
				  del=Math.random()*8+0.6;
				  TweenMax.to(z3[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del});
				  TweenMax.to(z3[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+0.1});
				  TweenMax.to(z3[currObj], 0.1, {alpha:1, ease:Expo.easeOut, delay:del+6});
				  TweenMax.to(z3[currObj], 1.3, {alpha:0, ease:Expo.easeOut, delay:del+6.1});
				  }
			i++;
			 }
		}
		chas1Glowl3();
		
		
		function glowChas2() {
			chas1Glowl1();
			chas1Glowl2();
			chas1Glowl3();
		}
		
		
		//1st chas
		var m = this.chas1.l1.glow;
		function killchas1Glowl1() {
			var i = 0;
			for (currObj in m) {
			  if(m[currObj] && typeof m[currObj] == "object" && i>=56){
				  TweenMax.killTweensOf(m[currObj])
				  }
			i++;
			 }
		}
		
		var mm = this.chas1.l2.glow;
		function killchas1Glowl2() {
			var i = 0;
			for (currObj in mm) {
			  if(mm[currObj] && typeof mm[currObj] == "object" && i>=56){
				  TweenMax.killTweensOf(mm[currObj])
				  }
			i++;
			 }
		}
		
		var mmm = this.chas1.l3.glow;
		function killchas1Glowl3() {
			var i = 0;
			for (currObj in mmm) {
			  if(mmm[currObj] && typeof mmm[currObj] == "object" && i>=56){
				  TweenMax.killTweensOf(mmm[currObj])
				  }
			i++;
			 }
		}
		
		
		function killglowChas2() {
			killchas1Glowl1();
			killchas1Glowl2();
			killchas1Glowl3();
		}
		
		
		
		function moveon() {
			TweenMax.killTweensOf(r.shakeIcon.mc);
			TweenMax.killTweensOf(r.warn);
			window.removeEventListener('devicemotion', YaoYiYao, false);
			tl.play();
		}
		
		
		function shakeIconFn() {
			TweenMax.to(r.shakeIcon.mc, 0.12, {rotation:"-=7", ease:Power0.easeNone}, 0.0)
			TweenMax.to(r.shakeIcon.mc, 0.12, {rotation:"+=15", yoyo:true, repeat:4, repeatDelay:0.0, delay:0.12, ease:Power0.easeNone}/*, 0.12*/)
			TweenMax.to(r.shakeIcon.mc, 0.12, {rotation:0, delay:0.60, ease:Power0.easeNone}/*, 0.60*/)
			TweenMax.to(r.shakeIcon.mc, 1.0, {delay:1.00, onComplete:shakeIconFn})
		}
		
		
		
		function checkShake() {
			tl.pause();
			TweenMax.to(r.warn, 1.0, {delay:5.00, onComplete:moveon})
			if (window.DeviceMotionEvent) {
				window.addEventListener('devicemotion', YaoYiYao, false);
				//console.log(window.DeviceMotionEvent);
			}
		}
		
		var speed = 10; //speed
		var x = y = z = lastX = lastY = lastZ = 0;
		function YaoYiYao(eventData) {
			var acceleration = eventData.accelerationIncludingGravity;
			x = acceleration.x;
			y = acceleration.y;
			z = acceleration.z;
			
			if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed || Math.abs(z - lastZ) > speed) {
				moveon();
				var x = y = z = lastX = lastY = lastZ = 0;
			}
			
			lastX = x;
			lastY = y;
			lastZ = z;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// blk
	this.blk = new lib.blk();
	this.blk.setTransform(0,0,2,2.135);
	this.blk.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// warn
	this.warn = new lib.warn();
	this.warn.setTransform(0,291);

	this.timeline.addTween(cjs.Tween.get(this.warn).wait(1));

	// shakeIcon
	this.shakeIcon = new lib.Symbol16_1();
	this.shakeIcon.setTransform(0,283.2,0.8,0.8,0,0,0,0,91.2);

	this.timeline.addTween(cjs.Tween.get(this.shakeIcon).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(8.1,-132,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// b1
	this.b1 = new lib.bot2();
	this.b1.setTransform(-109,1045.5,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.b1).wait(1));

	// cheaps
	this.cheaps = new lib.cheaps();
	this.cheaps.setTransform(-7,130,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.cheaps).wait(1));

	// Layer 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AK/asQhThTAAh2QAAgcAFgZIjqgDI73gYQiXgDhLgEQh9gIhjgVQi0gnhOheQgjgrgXhAQgRgtgPhKQg8knACkvQABkvBAklQAlirA0iBQAnhjBAhxQAuhQBOh5QB+jDBehvQCHifCShXQCEhOC6gtQBzgcDhggQJAhTEqghQHmg3GJgJQECgFCpAjQDnAwCMCDQBUBRBdCjQCUEIAvDMQAaB2AHCYQADBagDC3IgUSJQgCBogIA3QgPBXgkA8Qg/BkieBFQiPA+i2AgQiNAZjHAMIhhAFQAGAdAAAgQAAB2hUBTQhTBUh2AAQh2AAhUhUg");
	mask.setTransform(9,-250.4);

	// cover
	this.cover = new lib.Symbol17();
	this.cover.setTransform(383.2,-258.2,1.5,1.5,0,0,0,17,0);

	this.cover.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.cover).wait(1));

	// chas1
	this.chas1 = new lib.chas();
	this.chas1.setTransform(0,-100.3,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.chas1).wait(1));

	// lid1
	this.lid1 = new lib.lid1();
	this.lid1.setTransform(0,-2.8,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.lid1).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(0,99.2,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// bot1
	this.bot1 = new lib.bot1();
	this.bot1.setTransform(0,-8);

	this.timeline.addTween(cjs.Tween.get(this.bot1).wait(1));

	// bot2
	this.bot2 = new lib.bot3();
	this.bot2.setTransform(353.5,-6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.bot2).wait(1));

	// bokal
	this.bokal = new lib.Symbol22();
	this.bokal.setTransform(4.3,98.3,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.bokal).wait(1));

	// bg_pattern
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#84B9FF","#96D1EA","#84B9FF"],[0,0.502,1],0,429.2,0,-429.1).s().p("EglfBCtMAAAiFZMBK/AAAMAAACFZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-304,-427,730.3,1746.2);


// stage content:
(lib.pilsner_shakeBanner = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var page_body = document.getElementsByTagName("body")[0];
		page_body.style.backgroundColor = "#3C0600";
		page_body.style.overflow = "hidden";
		page_body.style.position = "fixed";
		
		var page_canvas = document.getElementsByTagName("canvas")[0];
		stageWidth = page_canvas.width;
		stageHeight = page_canvas.height;
		
		var viewport = document.querySelector('meta[name=viewport]');
		var viewportContent = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0';
		
		if (viewport === null) {
		 var head = document.getElementsByTagName('head')[0];
		 viewport = document.createElement('meta');
		 viewport.setAttribute('name', 'viewport');
		 head.appendChild(viewport);
		}
		
		viewport.setAttribute('content', viewportContent);
		
		function onResize() {
		 var widthToHeight = stageWidth / stageHeight;
		 var newWidth = window.innerWidth;
		 var newHeight = window.innerHeight;
		 var newWidthToHeight = newWidth / newHeight;
		 //
		 if (newWidthToHeight < widthToHeight) {
		 newWidth = newHeight * widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 } else {
		 newHeight = newWidth / widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 }
		 scale = newWidthToHeight / widthToHeight;
		 stage.width = newWidth;
		 stage.height = newHeight;
		 page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
		 page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";
		}
		
		window.onresize = function () {
		 onResize();
		}
		
		onResize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(240,427);

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(176,424.4,733.9,1748.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;