(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];

  // symbols:

  (lib.BG = function () {
    this.initialize(img.BG);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 300, 600); // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }

  (lib.Tween28 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#DDA53B').ss(1, 1, 1).p('Ay5k6MAlzAAAIAAJ1MglzAAAg');

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('rgba(221,165,59,0.4)').s().p('Ay5E7IAAp1MAlzAAAIAAJ1g');

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-122, -32.5, 244.1, 65);

  (lib.Tween17 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('rgba(229,176,68,0.349)')
      .s()
      .p(
        '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'
      );

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-26.6, -725.9, 53.2, 1451.9);

  (lib.Tween16 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.8, 1.9);

  (lib.Tween15 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.8, 1.8);

  (lib.Tween14 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.8, 1.9);

  (lib.Tween13 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.8, 1.8);

  (lib.Tween12 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.9, 1.8);

  (lib.Tween11 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.9, 1.8);

  (lib.Tween10 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.8, 1.8);

  (lib.Tween9 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.8, 1.8);

  (lib.Tween8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.8, 1.8);

  (lib.Tween7 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.9, 1.8);

  (lib.Tween6 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.9, 1.8);

  (lib.Tween5 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.8, 1.9);

  (lib.Tween4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.9, 1.8);

  (lib.Tween3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.9, 1.8);

  (lib.Tween2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.9, 1.8);

  (lib.Tween1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AhEBFIAAiJICJAAIAACJg');
    this.shape.setTransform(0, 0, 0.132, 0.132);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.9, -0.9, 1.9, 1.8);

  (lib.Symbol48 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .rf(['#FFFFFF', 'rgba(255,255,255,0)'], [0, 1], 0, 0, 0, 0, 0, 50.7)
      .s()
      .p('AlgFhQiTiSAAjPQAAjOCTiSQCSiTDOAAQDPAACSCTQCTCSAADOQAADPiTCSQiSCTjPAAQjOAAiSiTg');
    this.shape.setTransform(50, 50);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0, 0, 100, 100), null);

  (lib.Symbol45 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#FFFFFF').ss(1, 1, 1).p('Ay5k6MAlzAAAIAAJ1MglzAAAg');
    this.shape.setTransform(121, 31.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(-1, -1, 244.1, 65), null);

  (lib.Symbol26 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(['rgba(255,255,255,0)', '#FFFFFF', 'rgba(255,255,255,0)'], [0, 0.655, 1], -55.5, 0, 55.5, 0)
      .s()
      .p('AoqGBIAAsBIRVAAIAAMBg');
    this.shape.setTransform(55.5, 38.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0, 0, 111, 77), null);

  (lib.Symbol8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .rf(['#E5B044', 'rgba(229,176,68,0)'], [0, 1], 0, 0, 0, 0, 0, 102.8)
      .s()
      .p('ArRLSQkrksAAmmQAAmlErksQEskrGlAAQGmAAEsErQErEsAAGlQAAGmkrEsQksErmmAAQmlAAkskrg');
    this.shape.setTransform(102.1, 102.1);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 204.1, 204.1);

  (lib.Symbol5 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(
        ['rgba(255,255,255,0)', 'rgba(255,255,255,0.49)', '#FFFFFF', 'rgba(255,255,255,0.443)', 'rgba(255,255,255,0)'],
        [0, 0.427, 0.486, 0.549, 1],
        -0.1,
        69.5,
        -0.1,
        -69.4
      )
      .s()
      .p('Az/K3IAA1tMAn+AAAIAAVtg');
    this.shape.setTransform(128, 69.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 255.9, 139);

  (lib.LearnMore = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AIQBJQgSgTAAgdIAAgEQAAgTAHgPQAIgPAOgJQAOgIASAAQAbgBAQASQAPAQAAAfIAAAOIhTAAQABANAJAIQAIAIAOAAQAUAAALgPIARATQgHALgOAHQgNAGgRAAQgdAAgSgRgAIqgKQgGAHgCAMIAxAAIAAgCQAAgMgHgFQgGgHgLAAQgKAAgHAHgAEmBIQgQgTAAgfIAAgCQAAgTAHgOQAIgPAOgJQAOgIATAAQAagBARARQARAQACAcIAAAIQAAAegRATQgRASgcAAQgdAAgRgSgAFAgHQgHAJAAAVQAAASAHALQAHAJANABQANAAAHgKQAHgKAAgWQAAgSgHgJQgHgKgNAAQgNAAgHAKgAlhBPQgNgMAAgQQAAgVAQgMQAPgLAdAAIARAAIAAgHQAAgJgFgFQgFgGgKABQgJAAgFADQgFAFAAAHIgjAAQAAgLAHgKQAHgKANgFQANgGAQABQAYAAAPAMQAOAMAAAVIAAA5QAAATAFAJIAAADIgjAAQgDgFgBgHQgNAOgUAAQgTAAgNgLgAlLAuIAAACQAAAHAFAEQAEAEAJAAQAHAAAHgDQAGgDAEgGIAAgXIgOAAQgaAAgCASgAniBJQgSgTAAgdIAAgEQAAgTAHgPQAIgPAOgJQAOgIASAAQAbgBAQASQAPAQAAAfIAAAOIhTAAQABANAJAIQAIAIAOAAQAUAAALgPIARATQgHALgOAHQgNAGgRAAQgdAAgSgRgAnIgKQgGAHgCAMIAxAAIAAgCQAAgMgHgFQgGgHgLAAQgKAAgHAHgAGoBYIAAiDIAhAAIABAQQALgTASABQAGgBAFACIAAAiIgNgBQgUAAgGAMIAABXgADZBYIADiEIgwCEIgYAAIgwiEIADCEIgkAAIAAixIAvAAIAuCAIAtiAIAwAAIAACxgAg7BYIAAhVQAAgKgEgFQgFgFgMAAQgOAAgIAMIAABdIgjAAIAAiDIAhAAIABAPQAPgRAXAAQAVAAAKAMQAKAMABAXIAABWgAjjBYIAAiDIAhAAIABAQQALgTASABQAGgBAFACIAAAiIgNgBQgUAAgGAMIAABXgAp0BYIAAixIAkAAIAACTIBOAAIAAAeg'
      );
    this.shape.setTransform(58.9, 10.8);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.LearnMore, new cjs.Rectangle(-4, 1.8, 125.9, 18), null);

  (lib.Symbol49 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Symbol 45
    this.instance = new lib.Symbol45();
    this.instance.parent = this;
    this.instance.setTransform(127.8, 31.5, 1, 1, 0, 0, 0, 121, 31.5);
    this.instance.filters = [new cjs.BlurFilter(10, 10, 3)];
    this.instance.cache(-3, -3, 248, 69);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Symbol 45
    this.instance_1 = new lib.Symbol45();
    this.instance_1.parent = this;
    this.instance_1.setTransform(127.8, 31.5, 1, 1, 0, 0, 0, 121, 31.5);
    this.instance_1.filters = [new cjs.BlurFilter(5, 5, 3)];
    this.instance_1.cache(-3, -3, 248, 69);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    // Layer_5
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#FFFFFF').ss(1, 1, 1).p('Ay5k6MAlzAAAIAAJ1MglzAAAg');
    this.shape.setTransform(127.8, 31.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer_6 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('Ay5E7IAAp1MAlzAAAIAAJ1g');
    mask.setTransform(129.1, 31.5);

    // Symbol 48
    this.instance_2 = new lib.Symbol48();
    this.instance_2.parent = this;
    this.instance_2.setTransform(124.7, 69.9, 2.488, 1, 0, 0, 0, 50.1, 50);
    this.instance_2.alpha = 0.238;
    this.instance_2.compositeOperation = 'lighter';

    var maskedShapeInstanceList = [this.instance_2];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(-7.7, -14.5, 275, 95), null);

  (lib.Symbol27 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Learn More
    this.instance = new lib.LearnMore();
    this.instance.parent = this;
    this.instance.setTransform(121.3, 38.4, 1, 1, 0, 0, 0, 58.3, 9);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(29)
        .to({ _off: false }, 0)
        .to({ y: 28.4, alpha: 1 }, 30, cjs.Ease.get(1))
        .wait(31)
    );

    // Layer_4 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('A0MFVIAAqpMAoZAAAIAAKpg');
    mask.setTransform(121.1, 29.4);

    // Layer_5
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('#DDA53B').ss(1, 1, 1).p('Ay5AAMAlzAAA');
    this.shape.setTransform(121, 63.3);
    this.shape._off = true;

    var maskedShapeInstanceList = [this.shape];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(19).to({ _off: false }, 0).to({ _off: true }, 40).wait(31));

    // Layer_3
    this.instance_1 = new lib.Tween28('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(121, 93.8, 0, 1);

    var maskedShapeInstanceList = [this.instance_1];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to({ scaleX: 1 }, 19, cjs.Ease.cubicInOut)
        .to({ y: 31.5 }, 20, cjs.Ease.cubicInOut)
        .wait(51)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(120, 61.3, 2.1, 2.3);

  (lib.Symbol7 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_4 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p(
      'AMEHDIiUhVIAAj3ICzAAIAACzIDTAAIAArsIC0AAIAAMwIiVBVgAhJG9IAAt/IHkAAICVBWIAAEZIhvBAIAAADIBvA/IAAE4IiVBWgABpEjIEUAAIAAjpIkUAAgABpheIEUAAIAAjKIkUAAgAtcG9IAAt/IHlAAICVBWIAAEZIhwBAIAAADIBwA/IAAE4IiVBWgAqpEjIETAAIAAjpIkTAAgAqpheIETAAIAAjKIkTAAgAypG9IAAt/ICzAAIAAN/g'
    );
    mask.setTransform(128.7, 75.8);

    // Layer_3
    this.instance = new lib.Symbol26();
    this.instance.parent = this;
    this.instance.setTransform(-123.3, 76.4, 1.688, 2.064, 0, 39.9, 0, 55.5, 38.4);
    this.instance.alpha = 0.301;
    this.instance.compositeOperation = 'lighter';

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: 377.7 }, 179, cjs.Ease.quintInOut).wait(1));

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#E5B044').s().p('AiIHDIiUhVIAAj3IC0AAIAACzIDRAAIAArsIC0AAIAAMwIiUBVg');
    this.shape.setTransform(219.7, 75.8);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f('#E5B044')
      .s()
      .p('Ak8HAIAAt/IHkAAICVBWIAAEZIhvBAIAAADIBvA/IAAE4IiVBWgAiJEmIETAAIAAjpIkTAAgAiJhbIETAAIAAjKIkTAAg');
    this.shape_1.setTransform(153.1, 75.5);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f('#E5B044')
      .s()
      .p('Ak8HAIAAt/IHlAAICUBWIAAEZIhwBAIAAADIBwA/IAAE4IiUBWgAiIEmIERAAIAAjpIkRAAgAiIhbIERAAIAAjKIkRAAg');
    this.shape_2.setTransform(74.4, 75.5);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#E5B044').s().p('AhZHAIAAt/ICzAAIAAN/g');
    this.shape_3.setTransform(18.4, 75.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] })
        .wait(180)
    );

    // Layer_1
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f('#E5B044')
      .s()
      .p('AFlAiIg9g8IpQAAIg8A8I3qAAIgdgdIhUAAIAAgHIBXAAIAeAcIXjAAIA8g7IJWAAIA9A7IXjAAIAegcIBYAAIAAAHIhVAAIgdAdg');
    this.shape_4.setTransform(128.8, 138.4);

    this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(180));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-69.7, 30.7, 396.9, 111.2);

  (lib.Symbol4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p(
      'EgCmAiNQgIgIgBgMIACgJIiMhOIgDADQgIAGgLABQgMAAgJgIQgJgJAAgMQAAgNAKgJQAGgFAHgCIgDidQgIgCgGgGQgJgIAAgNIABgJIiMhOIgDADQgIAHgLAAQgMAAgJgIQgIgIgBgMQAAgHADgGQACgFAFgFQAGgFAHgBIgDieQgHgCgHgGQgJgIAAgMQAAgNAKgKQAIgHALAAQALAAAJAHICLhTIgBgJQAAgGACgGQADgGAEgEQAGgFAHgCIgCieQgIgBgHgGQgJgJAAgMIABgIIiMhOIgCACQgIAHgLABQgNAAgIgJQgJgJAAgLQAAgHACgGQADgGAFgEQAGgFAHgBIgDihQgIgCgHgGQgJgIAAgNIACgIIiMhOIgDADQgIAIgLAAQgMAAgJgJQgJgIAAgMQAAgGACgGQADgGAFgEQAGgFAHgCIgDieQgKgBgJgIQgIgIAAgMQAAgOAJgJQAIgHALAAQAMgBAJAJIABABICOhUIgCgKQAAgNAKgIQAIgIALAAQAMgBAJAJQAJAJAAAMIgBAJICNBOIABgBQAIgHALAAQAMgBAJAJQAJAIAAANQAAANgKAIQgFAGgIABIADCgQAIABAGAHQAJAIAAAMQABAFgCAEICNBOIACgDQAIgGALgBQAMAAAJAIIAEAFICHhQIgCgJQAAgOAJgIQAGgGAHgBIgDifQgIgBgFgHQgJgIAAgMQgBgHADgFQACgHAFgDQAIgIAKAAQAMAAAIAIICLhUIgBgDQAAgNAKgJQAGgFAHgBIgDihQgIgCgGgGQgJgJAAgMIABgIIiKhOIgFAFQgIAHgLAAQgLABgIgJQgJgJAAgMQgBgNAKgJQAGgFAGgCIgCiiQgHgBgHgHQgJgIAAgMQAAgGADgHQACgFAFgFQAIgGAKgBQAMAAAJAIIABACICJhTQgBgEAAgFQAAgHACgFQADgGAEgEQAGgFAHgCIgCieQgIgCgHgGQgJgIAAgNIACgJIiOhPIgBABQgIAIgKAAQgMgBgJgHQgJgJAAgMQAAgHACgGQADgFAFgEQAGgFAHgCIgDibQgIgBgGgHQgJgIAAgMQAAgFABgEIiOhPIgBAAQgIAIgLAAQgMAAgJgIQgJgIAAgMQAAgOAKgJQAGgFAHgCIgDidQgIgBgGgHQgJgIAAgMQAAgHACgFQADgGAFgFQAIgHALAAQAMgBAIAJIABABICKhSIgBgJQgBgGADgHQADgFAEgFQAGgFAHgBIgDieQgIgBgGgGQgJgIAAgNIABgIIiMhOIgCACQgIAHgLAAQgMAAgJgIQgJgIAAgMQAAgOAKgJQAGgFAGgBIgCieQgIgBgHgHQgJgJAAgLIACgJIiOhPIgBAAQgIAIgLAAQgMAAgJgJQgJgIAAgMQAAgGADgGQACgGAFgEQAGgFAHgCIgDiZQgIgBgGgGQgJgKAAgLQAAgNAJgKQAIgGAMgBQALAAAIAGICMhTIgCgJQAAgHADgGQACgFAFgFQAIgHALAAQAMgBAJAJQAJAIAAANIgBAJICPBPQAIgHAKAAQAMgBAJAJQAIAJAAAMQAAAGgCAGQgCAFgFAFQgFAFgHACIACCZQAIACAHAGQAHAIABAMIgBAJICNBPIABAAQAIgIALAAQAMAAAIAHICKhTIAAgCQAAgNAKgJQAGgFAHgCIgDilQgIgBgHgHQgIgIgBgMQAAgGADgGQACgGAFgEQAIgIALAAQAMAAAJAIIABACICKhTIgCgJQAAgGACgGQADgFAFgFQAIgHALgBQAMABAJAIQAIAIABAMIgBAJICMBOIACgCQAIgHALAAQAMgBAJAJQAJAIAAAMQAAAOgKAIQgGAFgHACIADCeQAIABAGAHQAJAHAAANQAAAGgCAGQgDAGgEAEQgJAHgLAAQgLABgJgIIiLBTIACAKQAAANgKAJQgGAFgHACIADCdQAIABAGAGQAJAJAAAMIAAAGICLBOIACgDQAJgGALgBQAMAAAIAJQAJAIAAAMQAAAGgCAGQgDAGgEAEQgGAFgHACIACCgQAJACAGAGQAIAJABAMQAAAMgKAKQgIAHgLAAQgMABgJgJIgBgBIiJBSIABAJQAAAHgCAGQgDAFgFAFQgFAFgHACIACCdQAJABAGAGQAIAJABAMQAAAGgDAGQgCAGgFAFQgIAGgLABQgLAAgJgIIiMBUQACAEAAAFQAAANgKAJQgFAFgIACIADCaQAIACAHAGQAIAIAAANIgBAJICOBPIABgBQAIgHALgBQAMAAAJAJQAIAIABANQAAAMgKAJQgGAGgHABIADCeQAIABAGAGQAJAJAAAMQAAANgKAKQgIAHgLAAQgMAAgIgIIgBgBIiKBSQABAEAAAFQABANgKAJQgGAFgHACIACCdQAJACAGAGQAJAJAAAMQAAAEgBAFICOBPIAAgBQAJgHAKAAQANgBAIAJQAJAIAAAMQAAAOgKAIQgFAGgHABIACCaQALAAAJAIQAJAJAAAMQAAANgKAKQgIAHgLAAQgMAAgJgIIgBgBIiOBVIABAJQAAANgKAJQgFAFgIACIADCdQAIACAHAGQAIAIAAAMQABAHgDAFQgCAHgFAEQgJAHgKAAQgMABgJgJIgBgBIiKBSQACAFAAAFQAAAGgDAGQgCAFgFAEQgFAGgIABIADCbQAIACAGAGQAJAIAAAMIgBAJICMBPIADgDQAIgIALABQAMgBAIAJQAJAIAAAMQAAAOgJAIQgGAGgHABIACCeQAJABAGAGQAJAJAAAMQAAAFgBAEICNBPIABgBQAJgHAKAAQAMgBAJAJQAJAJAAAMQAAANgKAIQgFAGgIACIADCdQAJABAGAHQAIAIABANQAAAGgDAFQgCAGgFAEQgIAIgLAAQgMAAgJgIIgBgBIiJBSIABAJQAAAGgDAGQgCAGgFAFQgIAHgLAAQgMAAgJgJQgJgIAAgMIACgJIiMhOIgDADQgIAHgLAAQgMABgJgJQgJgIAAgNQAAgNAKgJQAGgFAHgCIgDidQgIgCgGgGQgJgIAAgMIABgKIiMhNIgDACQgIAHgLABQgMAAgJgJIAAgBIiJBTIABAIQABAOgKAJQgGAFgHACIADCbQAIABAGAGQAJAJAAAMIgBAJICLBNIACgCQAIgHALgBQAMAAAJAJQAJAJAAALQAAAOgKAJQgFAFgIACIADCfQAJACAGAGQAJAIAAANQAAAHgCAGQgDAFgFAEQgIAIgLAAQgNAAgIgIIgBgBIiIBSIABAJQAAAGgDAGQgCAGgFAEQgIAIgLgBQgMAAgJgIgAk3cuIABAJQAAANgJAKQgGAFgHABIACCeQAJABAGAGQAIAJABAMQAAAFgCAEICNBOIACgCQAIgIALAAQAMAAAJAJIABAAICIhSIgCgJQAAgNAKgKQAGgFAIgCIgDifQgIgCgHgGQgIgJgBgLIACgKIiLhNIgDACQgIAHgLABQgLAAgJgIgAn6XsQADAFAAAGQAAAGgDAGQgDAFgEAFQgGAFgHACIACCdQAJACAGAGQAJAIAAANQAAAEgBAFICMBNIACgCQAJgIAKAAQANAAAIAIICLhTQgCgFAAgEQAAgNAKgKQAGgFAHgBIgDibQgIgCgGgFQgJgJAAgNIABgIIiOhPIgBABQgIAGgLABQgMAAgIgJIgBAAgAD4XiIABAIQABAOgKAJQgGAFgHACIADCdQAIACAGAGQAIAIABAMIgBAJICMBOIACgCQAIgHALAAQAMgBAJAJIABABICKhSIgCgJQAAgHACgGQADgGAFgEQAGgFAHgCIgDidQgIgCgGgGQgJgIAAgMQAAgHACgFIiNhOIgDACQgIAIgLgBQgMABgIgIgAiIXcIACABICIhSIgBgJQgBgOAKgJQAGgFAHgBIgDihQgHgBgHgGQgIgJAAgMIAAgDIiPhQQgHAGgKAAQgNAAgIgIIgBgBIiKBTIACAIQAAANgKAKQgFAFgIABIADCeQAIABAGAHQAJAIAAAMIgBAJICOBPIABAAQAIgIALAAIABAAQALAAAIAIgAA4SkIAAADQAAANgKAKQgGAEgHACIADChQAIABAGAGQAJAIAAANIgBAJICMBOIACgDQAJgHAKgBQANABAIAHICLhTQgCgEAAgFQAAgOAKgJQAGgEAHgCIgDieQgIgBgGgHQgJgHAAgNIABgJIiMhOIgCADQgJAHgLAAQgJAAgIgFgAoDNiIABAHQAAAOgKAJQgFAFgIACIADCgQAIACAHAGQAIAJAAALQABAGgCAFICMBNIADgDQAIgHALAAQAMAAAJAIIABABICJhSIgBgJQAAgOAKgJQAGgFAGgBIgCigQgIgBgHgHQgJgIAAgMIACgJIiNhOIgCACQgIAIgLAAQgNAAgIgJIgBAAgAiJNhIAAAEQAAANgKAJQgFAFgIACIADCfQAIACAGAGQAJAJAAAMIgBAJICLBNIADgCQAIgIALAAQAMAAAJAIIABABICJhSQgBgEAAgFQgBgGADgGQADgFAEgFQAHgFAGgCIgCiaQgIgCgHgGQgJgIAAgMIABgIIiMhOIgCACQgIAHgLAAQgMABgIgJIgBgBgArJIgIABAJQAAAGgCAGQgDAFgFAFQgEAEgFACIADCgQAIACAHAFQAIAJAAAMIAAAIICMBOIACgCQAIgIALAAQAMAAAJAIIABABICJhSIgBgIQAAgNAJgJQAGgFAIgCIgDigQgIgBgHgGQgJgJAAgLQAAgHACgFIiMhOIgDADQgIAHgLAAQgMAAgJgIIgBgBgAArIYQACAFAAAGQAAANgKAJQgFAFgHACIACCfQAIABAHAHQAIAIABAMIgBAIICLBOIADgDQAIgHALgBQAMAAAJAJIABABICJhTIgBgJQAAgNAKgIQAFgGAIgBIgDieQgIgBgHgGQgIgJgBgMIACgJIiKhNIgFAEQgIAIgLAAQgMAAgJgIIgEgFgAGdIIIABABICPhVQgCgEAAgFQAAgGADgGQACgGAFgEIAIgFIgDidQgIgBgGgHQgJgIAAgMQAAgGACgFIiNhPIgDADQgIAHgLAAQgLAAgJgHIiLBTQABAFAAAFQABAMgKAJQgGAGgHACIADCgQAIACAGAGQAJAIAAANIAAADICNBOIAAAAQAIgIALAAQAMAAAJAIgAAhhvIACAJQAAANgKAJQgGAFgHACIADCiQAIACAGAGQAJAIAAAMIAAAHICLBOIACgDQAJgIALAAQALAAAJAIICLhTQgCgEAAgGQAAgNAKgIQAGgGAHgBIgCieQgIgBgHgHQgJgIAAgMIABgJIiLhNIgDADQgJAGgLABQgMAAgIgIIgBgBgADYm3IACAJQAAAGgDAHQgCAFgFAFQgFAFgIABIADCfQAIACAGAFQAJAJAAAMIAAAIICLBOIADgCQAIgIALAAQAMAAAIAJIABABICKhTQgBgEAAgFQgBgGADgHQACgFAFgFQAGgEAHgCIgCidQgIgCgHgGQgJgJAAgMQAAgGACgFIiNhOIgCACQgIAHgLABQgLAAgJgIgAAXr3IABAJQAAAHgCAFQgDAGgFAEQgFAFgHACIACCaQAIACAHAHQAIAIABAMQAAAGgCAFICNBOIACgCQAIgHALgBQAMAAAIAIICMhTIgCgJQAAgHACgGQADgFAFgFQAGgFAGgBIgCibQgIgBgHgHQgIgIgBgMIACgJIiOhPIgBAAQgIAIgLAAQgLAAgJgIgAiqw6QABAEAAAFQABANgKAJQgGAFgHACIACCdQAJACAGAGQAJAIAAANQAAAFgCAGICNBOIACgDQAIgGALAAQALgBAIAHICMhTIgCgJQAAgNAKgJQAGgFAHgCIgDidQgIgCgGgGQgJgJAAgMIABgIIiMhOIgDACQgHAIgLAAQgMAAgIgIIgBgCgAGIsIIABABICLhTQgDgGAAgGQAAgNAKgJQAGgFAHgCIgDidQgIgCgGgGQgJgJAAgLIABgJIiMhOIgDACQgIAHgLAAQgMAAgJgIIAAgBIiKBTIABAIQABAOgKAJQgGAFgHABIACCeQAIABAHAHQAJAIAAAMIgBAJICOBPIAAAAQAIgIALAAQAMAAAJAJgAAM2BIACAKQAAAMgKAKQgFAFgHACIACCcQAIACAGAGQAJAJAAAMIgBAJICMBOIACgCQAIgIAMAAQAMAAAIAIIABABICKhSIgCgJQAAgOAKgJQAGgFAHgBIgCieQgIgBgHgHQgJgIAAgMIABgJIiLhOIgDADQgIAHgLAAQgNABgIgJIgBgBgAGF2HIABAJQABAGgDAGQgDAFgEAFQgGAFgHACIACCeQAJABAGAGQAJAJAAAMIgBAJICMBNIACgCQAJgHAKgBQAMAAAJAJIABABICKhTQgCgEAAgFQAAgNAKgIQAGgGAHgBIgDihQgIgBgGgHQgJgIAAgMIABgJIiLhNIgEAEQgIAIgLAAQgMAAgIgIIgBgBgAi07BIABAJQAAANgKAJQgGAFgHACIADCdQAIACAGAGQAJAJAAAMIgBAJICNBNIACgCQAIgIALAAQALAAAIAIICLhTIgBgHQAAgGACgFQADgGAEgFQAGgFAHgCIgCidQgIgCgHgGQgJgJAAgMQAAgGACgFIiMhOIgCADQgIAGgLABQgMAAgIgHgADC7KQADAFAAAGQAAAOgKAJQgFAFgIABIADCeQAIACAGAGQAJAIAAAMIAAAHICNBOIABgBQAIgHALAAQAMAAAIAHICLhTIgBgGQgBgNAKgKQAHgEAHgCIgDidQgIgCgHgGQgJgIAAgMQAAgFABgEIiJhNIgFAFQgIAIgLAAQgMAAgJgIIgFgHgEgF4ggEQADAGAAAHQAAAGgCAGQgDAGgEAEQgGAFgHACIACCZQAJABAGAHQAIAIABAMQAAAGgCAGICNBOIACgCQAIgIALAAQAMAAAIAIICMhUIgCgJQAAgNAKgJQAGgFAHgCIgDiZQgIgCgGgGQgJgIAAgMQAAgHACgGIiNhPIgDADQgIAHgLABQgMAAgJgJIgBgBgAI17ZIABABICKhTQgCgFAAgGQgBgOAKgJQAGgEAHgCIgCieQgIgBgHgHQgIgIgBgMIACgJIiNhOIgCADQgIAHgLAAQgMABgJgJIgBgBIiJBSIABAJQAAANgKAJQgFAGgIABIADCkQAIACAHAHQAIAIABAMIAAACICMBOIABAAQAIgHALAAIABAAQAMAAAIAIg'
    );
    mask.setTransform(77.1, 219.8);

    // Layer_3
    this.instance = new lib.Symbol5('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(119.9, 492.3, 1, 1, -34, 0, 0, 127.9, 69.5);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: 59.9, y: -102.7 }, 599).wait(1));

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('rgba(229,175,69,0.298)')
      .s()
      .p(
        'EgCmAiNQgIgIgBgMIACgJIiMhOIgDADQgIAGgLABQgMAAgJgIQgJgJAAgMQAAgNAKgJQAGgFAHgCIgDidQgIgCgGgGQgJgIAAgNIABgJIiMhOIgDADQgIAHgLAAQgMAAgJgIQgIgIgBgMQAAgHADgGQACgFAFgFQAGgFAHgBIgDieQgHgCgHgGQgJgIAAgMQAAgNAKgKQAIgHALAAQALAAAJAHICLhTIgBgJQAAgGACgGQADgGAEgEQAGgFAHgCIgCieQgIgBgHgGQgJgJAAgMIABgIIiMhOIgCACQgIAHgLABQgNAAgIgJQgJgJAAgLQAAgHACgGQADgGAFgEQAGgFAHgBIgDihQgIgCgHgGQgJgIAAgNIACgIIiMhOIgDADQgIAIgLAAQgMAAgJgJQgJgIAAgMQAAgGACgGQADgGAFgEQAGgFAHgCIgDieQgKgBgJgIQgIgIAAgMQAAgOAJgJQAIgHALAAQAMgBAJAJIABABICOhUIgCgKQAAgNAKgIQAIgIALAAQAMgBAJAJQAJAJAAAMIgBAJICNBOIABgBQAIgHALAAQAMgBAJAJQAJAIAAANQAAANgKAIQgFAGgIABIADCgQAIABAGAHQAJAIAAAMQABAFgCAEICNBOIACgDQAIgGALgBQAMAAAJAIIAEAFICHhQIgCgJQAAgOAJgIQAGgGAHgBIgDifQgIgBgFgHQgJgIAAgMQgBgHADgFQACgHAFgDQAIgIAKAAQAMAAAIAIICLhUIgBgDQAAgNAKgJQAGgFAHgBIgDihQgIgCgGgGQgJgJAAgMIABgIIiKhOIgFAFQgIAHgLAAQgLABgIgJQgJgJAAgMQgBgNAKgJQAGgFAGgCIgCiiQgHgBgHgHQgJgIAAgMQAAgGADgHQACgFAFgFQAIgGAKgBQAMAAAJAIIABACICJhTQgBgEAAgFQAAgHACgFQADgGAEgEQAGgFAHgCIgCieQgIgCgHgGQgJgIAAgNIACgJIiOhPIgBABQgIAIgKAAQgMgBgJgHQgJgJAAgMQAAgHACgGQADgFAFgEQAGgFAHgCIgDibQgIgBgGgHQgJgIAAgMQAAgFABgEIiOhPIgBAAQgIAIgLAAQgMAAgJgIQgJgIAAgMQAAgOAKgJQAGgFAHgCIgDidQgIgBgGgHQgJgIAAgMQAAgHACgFQADgGAFgFQAIgHALAAQAMgBAIAJIABABICKhSIgBgJQgBgGADgHQADgFAEgFQAGgFAHgBIgDieQgIgBgGgGQgJgIAAgNIABgIIiMhOIgCACQgIAHgLAAQgMAAgJgIQgJgIAAgMQAAgOAKgJQAGgFAGgBIgCieQgIgBgHgHQgJgJAAgLIACgJIiOhPIgBAAQgIAIgLAAQgMAAgJgJQgJgIAAgMQAAgGADgGQACgGAFgEQAGgFAHgCIgDiZQgIgBgGgGQgJgKAAgLQAAgNAJgKQAIgGAMgBQALAAAIAGICMhTIgCgJQAAgHADgGQACgFAFgFQAIgHALAAQAMgBAJAJQAJAIAAANIgBAJICPBPQAIgHAKAAQAMgBAJAJQAIAJAAAMQAAAGgCAGQgCAFgFAFQgFAFgHACIACCZQAIACAHAGQAHAIABAMIgBAJICNBPIABAAQAIgIALAAQAMAAAIAHICKhTIAAgCQAAgNAKgJQAGgFAHgCIgDilQgIgBgHgHQgIgIgBgMQAAgGADgGQACgGAFgEQAIgIALAAQAMAAAJAIIABACICKhTIgCgJQAAgGACgGQADgFAFgFQAIgHALgBQAMABAJAIQAIAIABAMIgBAJICMBOIACgCQAIgHALAAQAMgBAJAJQAJAIAAAMQAAAOgKAIQgGAFgHACIADCeQAIABAGAHQAJAHAAANQAAAGgCAGQgDAGgEAEQgJAHgLAAQgLABgJgIIiLBTIACAKQAAANgKAJQgGAFgHACIADCdQAIABAGAGQAJAJAAAMIAAAGICLBOIACgDQAJgGALgBQAMAAAIAJQAJAIAAAMQAAAGgCAGQgDAGgEAEQgGAFgHACIACCgQAJACAGAGQAIAJABAMQAAAMgKAKQgIAHgLAAQgMABgJgJIgBgBIiJBSIABAJQAAAHgCAGQgDAFgFAFQgFAFgHACIACCdQAJABAGAGQAIAJABAMQAAAGgDAGQgCAGgFAFQgIAGgLABQgLAAgJgIIiMBUQACAEAAAFQAAANgKAJQgFAFgIACIADCaQAIACAHAGQAIAIAAANIgBAJICOBPIABgBQAIgHALgBQAMAAAJAJQAIAIABANQAAAMgKAJQgGAGgHABIADCeQAIABAGAGQAJAJAAAMQAAANgKAKQgIAHgLAAQgMAAgIgIIgBgBIiKBSQABAEAAAFQABANgKAJQgGAFgHACIACCdQAJACAGAGQAJAJAAAMQAAAEgBAFICOBPIAAgBQAJgHAKAAQANgBAIAJQAJAIAAAMQAAAOgKAIQgFAGgHABIACCaQALAAAJAIQAJAJAAAMQAAANgKAKQgIAHgLAAQgMAAgJgIIgBgBIiOBVIABAJQAAANgKAJQgFAFgIACIADCdQAIACAHAGQAIAIAAAMQABAHgDAFQgCAHgFAEQgJAHgKAAQgMABgJgJIgBgBIiKBSQACAFAAAFQAAAGgDAGQgCAFgFAEQgFAGgIABIADCbQAIACAGAGQAJAIAAAMIgBAJICMBPIADgDQAIgIALABQAMgBAIAJQAJAIAAAMQAAAOgJAIQgGAGgHABIACCeQAJABAGAGQAJAJAAAMQAAAFgBAEICNBPIABgBQAJgHAKAAQAMgBAJAJQAJAJAAAMQAAANgKAIQgFAGgIACIADCdQAJABAGAHQAIAIABANQAAAGgDAFQgCAGgFAEQgIAIgLAAQgMAAgJgIIgBgBIiJBSIABAJQAAAGgDAGQgCAGgFAFQgIAHgLAAQgMAAgJgJQgJgIAAgMIACgJIiMhOIgDADQgIAHgLAAQgMABgJgJQgJgIAAgNQAAgNAKgJQAGgFAHgCIgDidQgIgCgGgGQgJgIAAgMIABgKIiMhNIgDACQgIAHgLABQgMAAgJgJIAAgBIiJBTIABAIQABAOgKAJQgGAFgHACIADCbQAIABAGAGQAJAJAAAMIgBAJICLBNIACgCQAIgHALgBQAMAAAJAJQAJAJAAALQAAAOgKAJQgFAFgIACIADCfQAJACAGAGQAJAIAAANQAAAHgCAGQgDAFgFAEQgIAIgLAAQgNAAgIgIIgBgBIiIBSIABAJQAAAGgDAGQgCAGgFAEQgIAIgLgBQgMAAgJgIgAk3cuIABAJQAAANgJAKQgGAFgHABIACCeQAJABAGAGQAIAJABAMQAAAFgCAEICNBOIACgCQAIgIALAAQAMAAAJAJIABAAICIhSIgCgJQAAgNAKgKQAGgFAIgCIgDifQgIgCgHgGQgIgJgBgLIACgKIiLhNIgDACQgIAHgLABQgLAAgJgIgAn6XsQADAFAAAGQAAAGgDAGQgDAFgEAFQgGAFgHACIACCdQAJACAGAGQAJAIAAANQAAAEgBAFICMBNIACgCQAJgIAKAAQANAAAIAIICLhTQgCgFAAgEQAAgNAKgKQAGgFAHgBIgDibQgIgCgGgFQgJgJAAgNIABgIIiOhPIgBABQgIAGgLABQgMAAgIgJIgBAAgAD4XiIABAIQABAOgKAJQgGAFgHACIADCdQAIACAGAGQAIAIABAMIgBAJICMBOIACgCQAIgHALAAQAMgBAJAJIABABICKhSIgCgJQAAgHACgGQADgGAFgEQAGgFAHgCIgDidQgIgCgGgGQgJgIAAgMQAAgHACgFIiNhOIgDACQgIAIgLgBQgMABgIgIgAiIXcIACABICIhSIgBgJQgBgOAKgJQAGgFAHgBIgDihQgHgBgHgGQgIgJAAgMIAAgDIiPhQQgHAGgKAAQgNAAgIgIIgBgBIiKBTIACAIQAAANgKAKQgFAFgIABIADCeQAIABAGAHQAJAIAAAMIgBAJICOBPIABAAQAIgIALAAIABAAQALAAAIAIgAA4SkIAAADQAAANgKAKQgGAEgHACIADChQAIABAGAGQAJAIAAANIgBAJICMBOIACgDQAJgHAKgBQANABAIAHICLhTQgCgEAAgFQAAgOAKgJQAGgEAHgCIgDieQgIgBgGgHQgJgHAAgNIABgJIiMhOIgCADQgJAHgLAAQgJAAgIgFgAoDNiIABAHQAAAOgKAJQgFAFgIACIADCgQAIACAHAGQAIAJAAALQABAGgCAFICMBNIADgDQAIgHALAAQAMAAAJAIIABABICJhSIgBgJQAAgOAKgJQAGgFAGgBIgCigQgIgBgHgHQgJgIAAgMIACgJIiNhOIgCACQgIAIgLAAQgNAAgIgJIgBAAgAiJNhIAAAEQAAANgKAJQgFAFgIACIADCfQAIACAGAGQAJAJAAAMIgBAJICLBNIADgCQAIgIALAAQAMAAAJAIIABABICJhSQgBgEAAgFQgBgGADgGQADgFAEgFQAHgFAGgCIgCiaQgIgCgHgGQgJgIAAgMIABgIIiMhOIgCACQgIAHgLAAQgMABgIgJIgBgBgArJIgIABAJQAAAGgCAGQgDAFgFAFQgEAEgFACIADCgQAIACAHAFQAIAJAAAMIAAAIICMBOIACgCQAIgIALAAQAMAAAJAIIABABICJhSIgBgIQAAgNAJgJQAGgFAIgCIgDigQgIgBgHgGQgJgJAAgLQAAgHACgFIiMhOIgDADQgIAHgLAAQgMAAgJgIIgBgBgAArIYQACAFAAAGQAAANgKAJQgFAFgHACIACCfQAIABAHAHQAIAIABAMIgBAIICLBOIADgDQAIgHALgBQAMAAAJAJIABABICJhTIgBgJQAAgNAKgIQAFgGAIgBIgDieQgIgBgHgGQgIgJgBgMIACgJIiKhNIgFAEQgIAIgLAAQgMAAgJgIIgEgFgAGdIIIABABICPhVQgCgEAAgFQAAgGADgGQACgGAFgEIAIgFIgDidQgIgBgGgHQgJgIAAgMQAAgGACgFIiNhPIgDADQgIAHgLAAQgLAAgJgHIiLBTQABAFAAAFQABAMgKAJQgGAGgHACIADCgQAIACAGAGQAJAIAAANIAAADICNBOIAAAAQAIgIALAAQAMAAAJAIgAAhhvIACAJQAAANgKAJQgGAFgHACIADCiQAIACAGAGQAJAIAAAMIAAAHICLBOIACgDQAJgIALAAQALAAAJAIICLhTQgCgEAAgGQAAgNAKgIQAGgGAHgBIgCieQgIgBgHgHQgJgIAAgMIABgJIiLhNIgDADQgJAGgLABQgMAAgIgIIgBgBgADYm3IACAJQAAAGgDAHQgCAFgFAFQgFAFgIABIADCfQAIACAGAFQAJAJAAAMIAAAIICLBOIADgCQAIgIALAAQAMAAAIAJIABABICKhTQgBgEAAgFQgBgGADgHQACgFAFgFQAGgEAHgCIgCidQgIgCgHgGQgJgJAAgMQAAgGACgFIiNhOIgCACQgIAHgLABQgLAAgJgIgAAXr3IABAJQAAAHgCAFQgDAGgFAEQgFAFgHACIACCaQAIACAHAHQAIAIABAMQAAAGgCAFICNBOIACgCQAIgHALgBQAMAAAIAIICMhTIgCgJQAAgHACgGQADgFAFgFQAGgFAGgBIgCibQgIgBgHgHQgIgIgBgMIACgJIiOhPIgBAAQgIAIgLAAQgLAAgJgIgAiqw6QABAEAAAFQABANgKAJQgGAFgHACIACCdQAJACAGAGQAJAIAAANQAAAFgCAGICNBOIACgDQAIgGALAAQALgBAIAHICMhTIgCgJQAAgNAKgJQAGgFAHgCIgDidQgIgCgGgGQgJgJAAgMIABgIIiMhOIgDACQgHAIgLAAQgMAAgIgIIgBgCgAGIsIIABABICLhTQgDgGAAgGQAAgNAKgJQAGgFAHgCIgDidQgIgCgGgGQgJgJAAgLIABgJIiMhOIgDACQgIAHgLAAQgMAAgJgIIAAgBIiKBTIABAIQABAOgKAJQgGAFgHABIACCeQAIABAHAHQAJAIAAAMIgBAJICOBPIAAAAQAIgIALAAQAMAAAJAJgAAM2BIACAKQAAAMgKAKQgFAFgHACIACCcQAIACAGAGQAJAJAAAMIgBAJICMBOIACgCQAIgIAMAAQAMAAAIAIIABABICKhSIgCgJQAAgOAKgJQAGgFAHgBIgCieQgIgBgHgHQgJgIAAgMIABgJIiLhOIgDADQgIAHgLAAQgNABgIgJIgBgBgAGF2HIABAJQABAGgDAGQgDAFgEAFQgGAFgHACIACCeQAJABAGAGQAJAJAAAMIgBAJICMBNIACgCQAJgHAKgBQAMAAAJAJIABABICKhTQgCgEAAgFQAAgNAKgIQAGgGAHgBIgDihQgIgBgGgHQgJgIAAgMIABgJIiLhNIgEAEQgIAIgLAAQgMAAgIgIIgBgBgAi07BIABAJQAAANgKAJQgGAFgHACIADCdQAIACAGAGQAJAJAAAMIgBAJICNBNIACgCQAIgIALAAQALAAAIAIICLhTIgBgHQAAgGACgFQADgGAEgFQAGgFAHgCIgCidQgIgCgHgGQgJgJAAgMQAAgGACgFIiMhOIgCADQgIAGgLABQgMAAgIgHgADC7KQADAFAAAGQAAAOgKAJQgFAFgIABIADCeQAIACAGAGQAJAIAAAMIAAAHICNBOIABgBQAIgHALAAQAMAAAIAHICLhTIgBgGQgBgNAKgKQAHgEAHgCIgDidQgIgCgHgGQgJgIAAgMQAAgFABgEIiJhNIgFAFQgIAIgLAAQgMAAgJgIIgFgHgEgF4ggEQADAGAAAHQAAAGgCAGQgDAGgEAEQgGAFgHACIACCZQAJABAGAHQAIAIABAMQAAAGgCAGICNBOIACgCQAIgIALAAQAMAAAIAIICMhUIgCgJQAAgNAKgJQAGgFAHgCIgDiZQgIgCgGgGQgJgIAAgMQAAgHACgGIiNhPIgDADQgIAHgLABQgMAAgJgJIgBgBgAI17ZIABABICKhTQgCgFAAgGQgBgOAKgJQAGgEAHgCIgCieQgIgBgHgHQgIgIgBgMIACgJIiNhOIgCADQgIAHgLAAQgMABgJgJIgBgBIiJBSIABAJQAAANgKAJQgFAGgIABIADCkQAIACAHAHQAIAIABAMIAAACICMBOIABAAQAIgHALAAIABAAQAMAAAIAIg'
      );
    this.shape.setTransform(77.1, 219.8);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(600));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 154.2, 439.5);

  (lib.Symbol3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Tween17('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(26.6, 725.9);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ y: 242 }, 1199).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 53.2, 1451.9);

  (lib.Symbol2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.instance = new lib.Tween1('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(15.7, 3.9);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(137).to({ _off: false }, 0).to({ alpha: 1 }, 9).to({ alpha: 0 }, 10).wait(1)
    );

    // Layer_3
    this.instance_1 = new lib.Tween2('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(9.8, 3.9);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(127)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(10)
    );

    // Layer_4
    this.instance_2 = new lib.Tween3('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(18.6, 0.9);
    this.instance_2.alpha = 0;
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(117)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(20)
    );

    // Layer_5
    this.instance_3 = new lib.Tween4('synched', 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(6.8, 0.9);
    this.instance_3.alpha = 0;
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(108)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(29)
    );

    // Layer_6
    this.instance_4 = new lib.Tween5('synched', 0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(3.9, 3.8);
    this.instance_4.alpha = 0;
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(99)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(38)
    );

    // Layer_7
    this.instance_5 = new lib.Tween6('synched', 0);
    this.instance_5.parent = this;
    this.instance_5.setTransform(18.6, 3.9);
    this.instance_5.alpha = 0;
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(90)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(47)
    );

    // Layer_8
    this.instance_6 = new lib.Tween7('synched', 0);
    this.instance_6.parent = this;
    this.instance_6.setTransform(9.8, 0.9);
    this.instance_6.alpha = 0;
    this.instance_6._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(81)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(56)
    );

    // Layer_9
    this.instance_7 = new lib.Tween8('synched', 0);
    this.instance_7.parent = this;
    this.instance_7.setTransform(21.6, 0.9);
    this.instance_7.alpha = 0;
    this.instance_7._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(72)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(65)
    );

    // Layer_10
    this.instance_8 = new lib.Tween9('synched', 0);
    this.instance_8.parent = this;
    this.instance_8.setTransform(12.8, 3.9);
    this.instance_8.alpha = 0;
    this.instance_8._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(63)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(74)
    );

    // Layer_11
    this.instance_9 = new lib.Tween10('synched', 0);
    this.instance_9.parent = this;
    this.instance_9.setTransform(0.9, 0.9);
    this.instance_9.alpha = 0;
    this.instance_9._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .wait(54)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(83)
    );

    // Layer_12
    this.instance_10 = new lib.Tween11('synched', 0);
    this.instance_10.parent = this;
    this.instance_10.setTransform(15.7, 0.9);
    this.instance_10.alpha = 0;
    this.instance_10._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .wait(45)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(92)
    );

    // Layer_13
    this.instance_11 = new lib.Tween12('synched', 0);
    this.instance_11.parent = this;
    this.instance_11.setTransform(6.8, 3.9);
    this.instance_11.alpha = 0;
    this.instance_11._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .wait(36)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(101)
    );

    // Layer_14
    this.instance_12 = new lib.Tween13('synched', 0);
    this.instance_12.parent = this;
    this.instance_12.setTransform(21.6, 3.9);
    this.instance_12.alpha = 0;
    this.instance_12._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_12)
        .wait(27)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(110)
    );

    // Layer_15
    this.instance_13 = new lib.Tween14('synched', 0);
    this.instance_13.parent = this;
    this.instance_13.setTransform(3.9, 0.9);
    this.instance_13.alpha = 0;
    this.instance_13._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_13)
        .wait(18)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(119)
    );

    // Layer_16
    this.instance_14 = new lib.Tween15('synched', 0);
    this.instance_14.parent = this;
    this.instance_14.setTransform(12.8, 0.9);
    this.instance_14.alpha = 0;
    this.instance_14._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_14)
        .wait(9)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 9)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(128)
    );

    // Layer_17
    this.instance_15 = new lib.Tween16('synched', 0);
    this.instance_15.parent = this;
    this.instance_15.setTransform(0.9, 3.8);
    this.instance_15.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_15).to({ alpha: 1 }, 9).to({ alpha: 0 }, 10).to({ _off: true }, 1).wait(137)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 2.9, 1.8, 1.9);

  (lib.Symbol1copy = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#E5B044')
      .s()
      .p(
        'ABWCqQAogVAagjIABgBIAbAVIgGgGIAUAOIgBABQgiAugzAZgAiPDCQgtgjgZgyIAsgXQATAoAlAaIABABIgdAqgABxiYIgCgDIARgRIAMgWIACACIABAAQAuAhAZAzIgtAXQgUgogkgbgAjBiNIAAgBQAjguAygZIAXAsQgpAVgbAkg'
      );
    this.shape.setTransform(3.9, 3.9, 0.112, 0.112);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f('#E5B044')
      .s()
      .p(
        'AgvFcQhDgJg6ghQg7ghgqg1IAngfQAkAtAyAcQAzAdA5AIIgGAxgABqEaQA2gUArgnQAqgnAZg0IAtAWQgdA9gxAtQgyAtg/AYgAldACQAAgXADgYQAMhQArhBIAqAbQglA4gKBEQgDAVAAAUQAAAYAFAcIgyAJQgFgcAAghgAERh5QgYg1gpgoIAigkQAxAvAcA9QAcA9ADBDIgyADQgDg6gYg0gAikkyQAxgaA2gKQA3gKA2AIQAXADAWAGIgNAwQgZgGgOgBQgugHgvAIQgvAJgqAWg'
      );
    this.shape_1.setTransform(3.9, 3.9, 0.112, 0.112);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(157)
    );

    // Symbol 2
    this.instance = new lib.Symbol2('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(21.8, 4.2, 1, 1, 180, 0, 0, 11.2, 2.4);
    this.instance.alpha = 0.5;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(157));

    // Symbol 2
    this.instance_1 = new lib.Symbol2('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(21.8, 4.3, 1, 1, 0, 0, 180, 11.2, 2.4);
    this.instance_1.alpha = 0.5;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(157));

    // Symbol 2
    this.instance_2 = new lib.Symbol2('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(21.7, 4.3, 1, 1, 0, 0, 0, 11.2, 2.4);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(157));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 33, 7.8);

  (lib.Symbol1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#E5B044')
      .s()
      .p(
        'AhdCIQAggDAdgRQAdgRASgbQAdgoAAgxQAAgmgRghQgRghgdgWIgCgBIAcgpIABABQAoAcAYAtQAWAtAAAxQAABCgnA0QgYAkgmAWQglAWgrAFg'
      );
    this.shape.setTransform(5.4, 4.2, 0.132, 0.132);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f('#E5B044')
      .s()
      .p(
        'AgjEnQhXgLhCg3IAggmQA2AtBJAJQAdAEAagDIAFAxQgPACgQAAQgTAAgQgCgAAzDyQAwgKApgdQAqgcAagqIAqAbQggAygxAiQgyAig6ANgAkSBxQgWg2AAg7IAAgDIAyAAIAAADQAAAxASAtQATAsAiAjIgjAkQgqgqgWg2gADdBvQATgnAFgqQACgPAAgPQAAgngNgoIAvgQQAQAuAAAxQAAAUgCAQQgHA1gXAsgAkmgiIAAgBQAIg8AdgzQAdg0AwgkIAfAnQgoAfgYAqQgZArgGAygACni1QglgigugQIARgvQA3AUAsAoQAtApAZA2IguAVQgUgtglgigAibj8QArgaAygLQAxgLAxAGQAUADAPAEIgMAwQgIgCgVgDQhWgKhIAtg'
      );
    this.shape_1.setTransform(3.9, 3.9, 0.132, 0.132);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(157)
    );

    // Symbol 2
    this.instance = new lib.Symbol2('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(21.8, 4.2, 1, 1, 180, 0, 0, 11.2, 2.4);
    this.instance.alpha = 0.5;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(157));

    // Symbol 2
    this.instance_1 = new lib.Symbol2('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(21.8, 4.3, 1, 1, 0, 0, 180, 11.2, 2.4);
    this.instance_1.alpha = 0.5;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(157));

    // Symbol 2
    this.instance_2 = new lib.Symbol2('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(21.7, 4.3, 1, 1, 0, 0, 0, 11.2, 2.4);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(157));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 33, 7.9);

  (lib.Symbol50 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Symbol49();
    this.instance.parent = this;
    this.instance.setTransform(-537.5, -1.8, 1, 1, 0, 0, 0, 125, 59.6);

    this.shape = new cjs.Shape();
    this.shape.graphics.f('#993399').s().p('EhOWAx2MAAAhjrMCctAAAMAAABjrg');
    this.shape.setTransform(-220.8, -167.1);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.instance }] }, 1)
        .to({ state: [] }, 1)
        .to({ state: [{ t: this.shape }] }, 1)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = null;

  // stage content:
  (lib._970x250 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Handle Clicks
    this.on('click', function () {
      window.open('https://bit.ly/2ED6hzA', '_blank');
    });

    // timeline functions:
    this.frame_1799 = function () {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(1799).call(this.frame_1799).wait(1));

    // FlashAICB
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FFFFFF').s().p('AgoBDIAAiFIBRAAIAAAYIg2AAIAAAeIAqAAIAAAWIgqAAIAAA5g');
    this.shape.setTransform(864.1, 194.2, 2.624, 2.624);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FFFFFF').s().p('AgMBDIAAhtIgkAAIAAgYIBhAAIAAAYIgkAAIAABtg');
    this.shape_1.setTransform(836.4, 194.2, 2.624, 2.624);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('AgnBDIAAiFIBPAAIAAAYIg0AAIAAAeIAoAAIAAAWIgoAAIAAAhIA0AAIAAAYg');
    this.shape_2.setTransform(810.8, 194.2, 2.624, 2.624);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#FFFFFF').s().p('AAaBDIAAg5IgzAAIAAA5IgbAAIAAiFIAbAAIAAA2IAzAAIAAg2IAbAAIAACFg');
    this.shape_3.setTransform(767.7, 194.2, 2.624, 2.624);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f('#FFFFFF')
      .s()
      .p('AgaBDIgWgMIAAhsIAWgNIA1AAIAWANIAAAbIgbAAIAAgRIgrAAIAABYIArAAIAAgRIAbAAIAAAbIgWAMg');
    this.shape_4.setTransform(734.5, 194.1, 2.624, 2.624);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#FFFFFF').s().p('AgnBDIAAiFIBPAAIAAAYIg0AAIAAAeIAoAAIAAAWIgoAAIAAAhIA0AAIAAAYg');
    this.shape_5.setTransform(706, 194.2, 2.624, 2.624);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#FFFFFF').s().p('AgMBDIAAhtIgkAAIAAgYIBhAAIAAAYIgkAAIAABtg');
    this.shape_6.setTransform(678.5, 194.2, 2.624, 2.624);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#FFFFFF').s().p('AgdBDIgWgMIAAhsIAWgNIA6AAIAWANIAABsIgWAMgAgYAtIAxAAIAAhYIgxAAg');
    this.shape_7.setTransform(648.1, 194.1, 2.624, 2.624);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f('#FFFFFF').s().p('AgMBDIAAiFIAZAAIAACFg');
    this.shape_8.setTransform(623.9, 194.2, 2.624, 2.624);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f('#FFFFFF')
      .s()
      .p('AguBDIAAiFIBHAAIAWAOIAAApIgRAJIAAABIARAIIAAAuIgWAOgAgUArIApAAIAAgiIgpAAgAgUgMIApAAIAAgeIgpAAg');
    this.shape_9.setTransform(600.9, 194.2, 2.624, 2.624);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f('#FFFFFF')
      .s()
      .p('AAVBDIgbgzIgRAAIAAAzIgaAAIAAiFIBGAAIAWAOIAAA4IgWAMIAdAzgAgXgFIAoAAIAAglIgoAAg');
    this.shape_10.setTransform(558.3, 194.2, 2.624, 2.624);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#FFFFFF').s().p('AgdBDIgWgMIAAhsIAWgNIA7AAIAWANIAABsIgWAMgAgYAtIAxAAIAAhYIgxAAg');
    this.shape_11.setTransform(524.3, 194.1, 2.624, 2.624);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#FFFFFF').s().p('AgMBDIAAiFIAZAAIAACFg');
    this.shape_12.setTransform(500.1, 194.2, 2.624, 2.624);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#FFFFFF').s().p('AAeBDIg4hWIAABWIgbAAIAAiFIAZAAIA4BWIAAhWIAaAAIAACFg');
    this.shape_13.setTransform(475.1, 194.2, 2.624, 2.624);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f('#FFFFFF').s().p('AgdBDIgWgNIAAh4IAbAAIAABsIAxAAIAAhsIAbAAIAAB4IgWANg');
    this.shape_14.setTransform(440.1, 194.2, 2.624, 2.624);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f('#FFFFFF').s().p('AgTBDIgWgNIAAgkIAaAAIAAAaIAfAAIAAhuIAaAAIAAB4IgWANg');
    this.shape_15.setTransform(408.3, 194.2, 2.624, 2.624);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1800)
    );

    // logo
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f('#FFFFFF').s().p('AggANIgbgZIB3AAIAAAZg');
    this.shape_16.setTransform(234, 74.9, 1.168, 1.168);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f('#FFFFFF').s().p('AhTBVIAAioICoAAIAAAbIiOAAIAAByICOAAIAAAbg');
    this.shape_17.setTransform(232.4, 75, 1.168, 1.168);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgiBVQgUAAgPgPQgPgOAAgVIAAhGQAAgTAPgPQAPgOAUAAIBGAAQAUAAAOAOQAOAPAAATIAAAOIgbAAIAAgOQAAgIgGgHQgGgGgJAAIhGAAQgKAAgGAGQgHAHAAAIIAABGQAAAKAHAGQAGAHAKAAIBGAAQAJAAAGgHQAGgGAAgKIAAgNIAbAAIAAANQAAAVgOAOQgOAPgUAAg'
      );
    this.shape_18.setTransform(205.9, 75, 1.168, 1.168);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f('#FFFFFF').s().p('AAuBUIhniKIAACKIgaAAIAAinIAlAAIBnCKIAAiKIAbAAIAACng');
    this.shape_19.setTransform(179.5, 75, 1.168, 1.168);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f('#FFFFFF').s().p('ABHBVIgRgkIg3AAIgbgbIBFAAIgphTIhGCSIgcAAIBRioIAjAAIBRCog');
    this.shape_20.setTransform(151.5, 75, 1.168, 1.168);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f('#FFFFFF').s().p('AgMBVIAAioIAZAAIAACog');
    this.shape_21.setTransform(131, 75, 1.168, 1.168);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics.f('#FFFFFF').s().p('AggANIgbgZIB3AAIAAAZg');
    this.shape_22.setTransform(114.5, 75, 1.168, 1.168);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics.f('#FFFFFF').s().p('AhUBVIAAioICoAAIAAAbIiNAAIAACNg');
    this.shape_23.setTransform(112.9, 75, 1.168, 1.168);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics.f('#FFFFFF').s().p('AhTBVIAAioICnAAIAAAbIiNAAIAAByICNAAIAAAbg');
    this.shape_24.setTransform(86.4, 75, 1.168, 1.168);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics.f('#FFFFFF').s().p('AghANIgagZIB3AAIAAAZg');
    this.shape_25.setTransform(88, 75, 1.168, 1.168);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AhGBVIAAh+IAbAbIAABIIBbAAQAKAAAGgHQAHgHAAgJIAAhGQAAgJgHgGQgGgGgKAAIh2AAIgbgbICRAAIAOABQAPAFALANQAJANABAQIAABGQAAAVgPAOQgOAPgVAAg'
      );
    this.shape_26.setTransform(58.4, 75, 1.168, 1.168);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics.f('#FFFFFF').s().p('AgNAGIgMgLIAzAAIAAALg');
    this.shape_27.setTransform(264.8, 75, 1.168, 1.168);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics.f('#FFFFFF').s().p('AgjAkIAAhHIBGAAIAAANIg5AAIAAAtIA5AAIAAANg');
    this.shape_28.setTransform(264.2, 75, 1.168, 1.168);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics.f('#FFFFFF').s().p('AgNAGIgMgLIAzAAIAAALg');
    this.shape_29.setTransform(286.7, 75, 1.168, 1.168);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics.f('#FFFFFF').s().p('AgjAkIAAhHIBHAAIAAANIg6AAIAAA6g');
    this.shape_30.setTransform(286.1, 75, 1.168, 1.168);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgKAbQgGAAgFgFQgFgFABgHIAAgBIALAAIAAABQAAAFAEAAIAVAAQAEAAAAgFQAAgEgEAAIgVAAQgHAAgFgGQgDgEAAgFQgBgHAFgFQAFgFAGAAIAVAAQAGAAAEAFQAFAFABAHIAAABIgMAAIAAgBQAAgFgEAAIgVAAQgEAAAAAFQAAAEAEAAIAVAAQAGAAAFAFQAFAEAAAGQgBAHgFAFQgEAFgGAAg'
      );
    this.shape_31.setTransform(295.1, 76.1, 1.168, 1.168);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics.f('#FFFFFF').s().p('AgFAkIAAg6IgeAAIAAgNIBHAAIAAANIgeAAIAAA6g');
    this.shape_32.setTransform(275.1, 75, 1.168, 1.168);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics.f('#FFFFFF').s().p('AgECcIAAk3IAJAAIAAE3g');
    this.shape_33.setTransform(251.2, 75, 1.168, 1.168);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics.f('#FFFFFF').s().p('AggANIgbgZIB3AAIAAAZg');
    this.shape_34.setTransform(234, 75, 1.168, 1.168);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics.f('#FFFFFF').s().p('AhTBVIAAioICoAAIAAAbIiOAAIAAByICOAAIAAAbg');
    this.shape_35.setTransform(232.4, 75, 1.168, 1.168);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgiBVQgUAAgPgPQgPgOAAgVIAAhGQAAgTAPgPQAPgOAUAAIBGAAQAUAAAOAOQAOAPAAATIAAAOIgbAAIAAgOQAAgIgGgHQgGgGgJAAIhGAAQgKAAgGAGQgHAHAAAIIAABGQAAAKAHAGQAGAHAKAAIBGAAQAJAAAGgHQAGgGAAgKIAAgNIAbAAIAAANQAAAVgOAOQgOAPgUAAg'
      );
    this.shape_36.setTransform(206, 75, 1.168, 1.168);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics.f('#FFFFFF').s().p('AAuBUIhniKIAACKIgaAAIAAinIAlAAIBnCKIAAiKIAbAAIAACng');
    this.shape_37.setTransform(179.5, 75, 1.168, 1.168);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics.f('#FFFFFF').s().p('ABHBVIgRgkIg3AAIgbgbIBFAAIgphTIhGCSIgcAAIBRioIAjAAIBRCog');
    this.shape_38.setTransform(151.5, 75, 1.168, 1.168);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics.f('#FFFFFF').s().p('AgMBVIAAioIAZAAIAACog');
    this.shape_39.setTransform(131, 75, 1.168, 1.168);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics.f('#FFFFFF').s().p('AggANIgbgZIB3AAIAAAZg');
    this.shape_40.setTransform(114.4, 75, 1.168, 1.168);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics.f('#FFFFFF').s().p('AhUBVIAAioICoAAIAAAbIiNAAIAACNg');
    this.shape_41.setTransform(112.8, 75, 1.168, 1.168);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics.f('#FFFFFF').s().p('AhTBVIAAioICnAAIAAAbIiNAAIAAByICNAAIAAAbg');
    this.shape_42.setTransform(86.4, 75, 1.168, 1.168);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics.f('#FFFFFF').s().p('AghANIgagZIB3AAIAAAZg');
    this.shape_43.setTransform(88, 75, 1.168, 1.168);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AhGBVIAAh+IAbAbIAABIIBbAAQAKAAAGgHQAHgHAAgJIAAhGQAAgJgHgGQgGgGgKAAIh2AAIgbgbICRAAIAOABQAPAFALANQAJANABAQIAABGQAAAVgPAOQgOAPgVAAg'
      );
    this.shape_44.setTransform(58.4, 75, 1.168, 1.168);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
          ],
        })
        .wait(1800)
    );

    // Symbol 50
    this.instance = new lib.Symbol50();
    this.instance.parent = this;
    this.instance.setTransform(826.7, 253.8, 1, 1, 0, 0, 0, 118.3, 59.6);
    new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol50(), 3);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1800));

    // Symbol 27
    this.instance_1 = new lib.Symbol27('single', 89);
    this.instance_1.parent = this;
    this.instance_1.setTransform(172.6, 164.7, 1, 1, 0, 0, 0, 121, 31.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1800));

    // disclosure
    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgEAFQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgCACgCQACgBACAAQADAAACABQACACAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCABgDAAQgCAAgCgBg'
      );
    this.shape_45.setTransform(877.6, 244.5);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgXAhQgJgLAAgSIAAgHQAAgMAFgJQAEgJAIgFQAHgFAKAAQANAAAIAIQAJAHABAOIgLAAQgCgKgFgFQgFgFgIAAQgKAAgGAIQgGAIAAAPIAAAHQAAAOAFAJQAGAIAKAAQAJAAAFgEQAFgFACgKIALAAQgCANgIAIQgIAHgOAAQgPAAgJgLg'
      );
    this.shape_46.setTransform(872.3, 240.8);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics.f('#FFFFFF').s().p('AgZArIAAhVIALAAIAABMIAoAAIAAAJg');
    this.shape_47.setTransform(865.4, 240.8);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics.f('#FFFFFF').s().p('AgZArIAAhVIALAAIAABMIAoAAIAAAJg');
    this.shape_48.setTransform(859, 240.8);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics.f('#FFFFFF').s().p('AgHALQAFgIABgHIAAgKIAJAAIAAAJQAAAFgDAFQgDAGgDAEg');
    this.shape_49.setTransform(851.1, 245.3);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgMAeQgGgCgDgFQgDgFAAgGIALAAQAAAGAEADQAEADAGAAQAGAAAEgCQADgDAAgEQAAgEgDgDQgDgCgIgCQgIgCgFgCQgEgCgDgDQgCgEAAgEQAAgIAHgFQAGgGAJAAQALAAAHAGQAHAFAAAJIgLAAQAAgEgEgEQgEgDgGAAQgEAAgEADQgDACAAAEQAAAEADACIAKAEQAIACAFACQAFACADAEQACADAAAFQAAAJgHAFQgGAFgLAAQgHAAgGgDg'
      );
    this.shape_50.setTransform(847, 241.9);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgSAYQgIgIAAgOIAAgCQAAgJAEgHQADgHAHgFQAGgEAHAAQAMAAAHAIQAHAIAAAQIAAADIgqAAQAAAKAGAFQAFAGAHAAQAGAAAEgCIAHgGIAGAFQgIAMgQAAQgMAAgIgJgAgJgSQgFAFgBAIIAfAAIAAgBQAAgIgEgEQgEgFgHAAQgGAAgEAFg'
      );
    this.shape_51.setTransform(840.8, 241.9);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgSAYQgIgIAAgPIAAgBQAAgJAEgIQADgHAGgEQAHgEAHAAQALAAAHAHQAHAGABAKIgLAAQAAgGgEgEQgFgEgGAAQgHAAgEAGQgFAGAAALIAAABQAAALAEAGQAFAGAHAAQAGAAAFgDQAEgEAAgFIALAAQgBAFgDAFQgEAFgFADQgGADgHAAQgMAAgHgJg'
      );
    this.shape_52.setTransform(834.6, 241.9);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgFArIAAg+IAKAAIAAA+gAgEggQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQADAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCACgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg'
      );
    this.shape_53.setTransform(829.9, 240.7);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics.f('#FFFFFF').s().p('AgDAgIgXg/IALAAIAPAwIAQgwIALAAIgXA/g');
    this.shape_54.setTransform(825.6, 241.9);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics.f('#FFFFFF').s().p('AgPAgIAAg+IAMAAIAAAHQAEgIAJAAIAGABIAAAKIgGgBQgKAAgDAJIAAAsg');
    this.shape_55.setTransform(821, 241.8);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgSAYQgIgIAAgOIAAgCQAAgJAEgHQADgHAHgFQAGgEAHAAQAMAAAHAIQAHAIAAAQIAAADIgqAAQAAAKAGAFQAFAGAHAAQAGAAAEgCIAHgGIAGAFQgIAMgQAAQgMAAgIgJgAgJgSQgFAFgBAIIAfAAIAAgBQAAgIgEgEQgEgFgHAAQgGAAgEAFg'
      );
    this.shape_56.setTransform(815.5, 241.9);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgOApQgIgEgEgGQgEgGAAgHIAMAAQAAAIAFAEQAGAFAIAAQAKAAAEgEQAFgEAAgGQAAgGgEgDQgFgEgLgDQgOgEgGgFQgHgHAAgIQAAgLAIgGQAIgHAMAAQAIAAAIAEQAGADAEAGQAEAGAAAHIgMAAQABgIgFgEQgFgFgJAAQgHAAgFAEQgEAEgBAGQAAAGAFADQAEAEAKADQALADAFACQAHAEACAFQADAFAAAGQAAAKgIAHQgIAGgOAAQgIAAgHgDg'
      );
    this.shape_57.setTransform(808.7, 240.8);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgTAlQgHgKAAgOIAAgBQAAgNAHgJQAHgJALAAQAKAAAHAHIAAggIALAAIAABZIgKAAIgBgIQgGAJgLAAQgLAAgHgJgAgKgEQgFAFAAAMQAAAMAFAFQAEAHAHAAQAKAAAFgKIAAgcQgFgJgKAAQgHAAgEAGg'
      );
    this.shape_58.setTransform(798.7, 240.6);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f('#FFFFFF')
      .s()
      .p('AAOAgIAAgpQAAgHgDgDQgDgDgHAAQgEAAgEADQgEADgCAEIAAAsIgLAAIAAg+IALAAIAAAIQAHgJALAAQAUAAAAAWIAAApg');
    this.shape_59.setTransform(792.2, 241.8);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f('#FFFFFF')
      .s()
      .p('AgSAbQgGgGAAgMIAAgoIALAAIAAAoQAAAOAMAAQALAAAEgJIAAgtIALAAIAAA+IgLAAIAAgGQgGAHgLAAQgLAAgEgFg');
    this.shape_60.setTransform(785.6, 241.9);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics.f('#FFFFFF').s().p('AgaArIAAhVIA0AAIAAAKIgoAAIAAAdIAjAAIAAAIIgjAAIAAAmg');
    this.shape_61.setTransform(779.3, 240.8);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgSAYQgIgIAAgOIAAgCQAAgJAEgHQADgHAHgFQAGgEAHAAQAMAAAHAIQAHAIAAAQIAAADIgqAAQAAAKAGAFQAFAGAHAAQAGAAAEgCIAHgGIAGAFQgIAMgQAAQgMAAgIgJgAgJgSQgFAFgBAIIAfAAIAAgBQAAgIgEgEQgEgFgHAAQgGAAgEAFg'
      );
    this.shape_62.setTransform(769.6, 241.9);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgTAlQgHgKAAgOIAAgBQAAgNAHgJQAHgJALAAQAKAAAHAHIAAggIALAAIAABZIgKAAIgBgIQgGAJgLAAQgLAAgHgJgAgKgEQgFAFAAAMQAAAMAFAFQAEAHAHAAQAKAAAFgKIAAgcQgFgJgKAAQgHAAgEAGg'
      );
    this.shape_63.setTransform(762.8, 240.6);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgFArIAAg+IAKAAIAAA+gAgEggQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQADAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCACgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg'
      );
    this.shape_64.setTransform(758.2, 240.7);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgMAeQgGgCgDgFQgDgFAAgGIALAAQAAAGAEADQAEADAGAAQAGAAAEgCQADgDAAgEQAAgEgDgDQgDgCgIgCQgIgCgFgCQgEgCgDgDQgCgEAAgEQAAgIAHgFQAGgGAJAAQALAAAHAGQAHAFAAAJIgLAAQAAgEgEgEQgEgDgGAAQgEAAgEADQgDACAAAEQAAAEADACIAKAEQAIACAFACQAFACADAEQACADAAAFQAAAJgHAFQgGAFgLAAQgHAAgGgDg'
      );
    this.shape_65.setTransform(753.6, 241.9);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgSAYQgIgIAAgOIAAgCQAAgJAEgHQADgHAHgFQAGgEAHAAQAMAAAHAIQAHAIAAAQIAAADIgqAAQAAAKAGAFQAFAGAHAAQAGAAAEgCIAHgGIAGAFQgIAMgQAAQgMAAgIgJgAgJgSQgFAFgBAIIAfAAIAAgBQAAgIgEgEQgEgFgHAAQgGAAgEAFg'
      );
    this.shape_66.setTransform(747.4, 241.9);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics.f('#FFFFFF').s().p('AgOAgIAAg+IAKAAIAAAHQAFgIAKAAIAEABIAAAKIgFgBQgKAAgEAJIAAAsg');
    this.shape_67.setTransform(742.5, 241.8);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgUAYQgIgJAAgPIAAAAQAAgJAEgHQADgIAHgEQAGgEAIAAQANAAAIAJQAIAJAAAOIAAABQAAAJgEAHQgDAIgHAEQgGAEgJAAQgMAAgIgJgAgMgRQgFAHAAALQAAAKAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgLQAAgKgFgGQgFgHgIAAQgHAAgFAGg'
      );
    this.shape_68.setTransform(736.8, 241.9);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics.f('#FFFFFF').s().p('AgaArIAAhVIA0AAIAAAKIgpAAIAAAdIAjAAIAAAIIgjAAIAAAmg');
    this.shape_69.setTransform(730.4, 240.8);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .f('#FFFFFF')
      .s()
      .p('AgTAsIgEAAIAAgJIADAAQAGAAADgCQADgDACgFIACgHIgWg+IAMAAIAPAvIAOgvIAMAAIgZBJQgGAPgMAAg');
    this.shape_70.setTransform(721, 243.2);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgPAlIgBAIIgKAAIAAhZIALAAIAAAhQAHgIAKAAQALAAAIAJQAGAIAAAOIAAABQAAAPgHAJQgHAJgKAAQgMAAgGgJgAgPAAIAAAbQAFAKAKAAQAHAAAFgHQAEgFAAgNQAAgLgEgFQgEgGgIAAQgKAAgFAKg'
      );
    this.shape_71.setTransform(715, 240.6);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgTAlQgHgKAAgOIAAgBQAAgNAHgJQAHgJALAAQAKAAAHAHIAAggIALAAIAABZIgKAAIgBgIQgGAJgLAAQgLAAgHgJgAgKgEQgFAFAAAMQAAAMAFAFQAEAHAHAAQAKAAAFgKIAAgcQgFgJgKAAQgHAAgEAGg'
      );
    this.shape_72.setTransform(705, 240.6);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgSAYQgIgIAAgOIAAgCQAAgJAEgHQADgHAHgFQAGgEAHAAQAMAAAHAIQAHAIAAAQIAAADIgqAAQAAAKAGAFQAFAGAHAAQAGAAAEgCIAHgGIAGAFQgIAMgQAAQgMAAgIgJgAgJgSQgFAFgBAIIAfAAIAAgBQAAgIgEgEQgEgFgHAAQgGAAgEAFg'
      );
    this.shape_73.setTransform(698.6, 241.9);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgBAkQgEgFAAgIIAAgmIgLAAIAAgJIALAAIAAgPIAKAAIAAAPIAMAAIAAAJIgMAAIAAAmQAAAEACACQABACAEAAIAFgBIAAAJIgIABQgHAAgDgEg'
      );
    this.shape_74.setTransform(693.3, 241.2);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .f('#FFFFFF')
      .s()
      .p('AgTAbQgFgGAAgMIAAgoIALAAIAAAoQAAAOAMAAQALAAAEgJIAAgtIALAAIAAA+IgKAAIAAgGQgHAHgLAAQgLAAgFgFg');
    this.shape_75.setTransform(688.2, 241.9);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgQAlIAAAIIgKAAIAAhZIALAAIAAAhQAGgIALAAQAMAAAGAJQAHAIAAAOIAAABQAAAPgHAJQgHAJgLAAQgKAAgIgJgAgPAAIAAAbQAFAKAKAAQAHAAAEgHQAFgFAAgNQAAgLgEgFQgFgGgHAAQgLAAgEAKg'
      );
    this.shape_76.setTransform(681.7, 240.6);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgFArIAAg+IAKAAIAAA+gAgEggQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQADAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCACgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg'
      );
    this.shape_77.setTransform(676.8, 240.7);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics.f('#FFFFFF').s().p('AgPAgIAAg+IALAAIAAAHQAFgIAJAAIAGABIAAAKIgGgBQgKAAgEAJIAAAsg');
    this.shape_78.setTransform(673.6, 241.8);

    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgBAkQgEgFAAgIIAAgmIgLAAIAAgJIALAAIAAgPIAKAAIAAAPIAMAAIAAAJIgMAAIAAAmQAAAEACACQABACAEAAIAFgBIAAAJIgIABQgHAAgDgEg'
      );
    this.shape_79.setTransform(669.1, 241.2);

    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgMAeQgGgCgDgFQgDgFAAgGIALAAQAAAGAEADQAEADAGAAQAGAAAEgCQADgDAAgEQAAgEgDgDQgDgCgIgCQgIgCgFgCQgEgCgDgDQgCgEAAgEQAAgIAHgFQAGgGAJAAQALAAAHAGQAHAFAAAJIgLAAQAAgEgEgEQgEgDgGAAQgEAAgEADQgDACAAAEQAAAEADACIAKAEQAIACAFACQAFACADAEQACADAAAFQAAAJgHAFQgGAFgLAAQgHAAgGgDg'
      );
    this.shape_80.setTransform(664.3, 241.9);

    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgFArIAAg+IAKAAIAAA+gAgEggQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQADAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCACgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg'
      );
    this.shape_81.setTransform(659.8, 240.7);

    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgeArIAAhVIAYAAQAKAAAJAFQAIAFAFAJQAFAJAAAMIAAAFQAAAMgFAJQgEAJgJAFQgJAFgKAAgAgTAiIAMAAQAMAAAIgJQAHgIAAgPIAAgEQAAgOgHgIQgHgIgLAAIgOAAg'
      );
    this.shape_82.setTransform(654.5, 240.8);

    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgEAFQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgCACgCQACgBACAAQADAAACABQACACAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCABgDAAQgCAAgCgBg'
      );
    this.shape_83.setTransform(645.9, 244.5);

    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgSAYQgIgIAAgOIAAgCQAAgJAEgHQADgHAHgFQAGgEAHAAQAMAAAHAIQAHAIAAAQIAAADIgqAAQAAAKAGAFQAFAGAHAAQAGAAAEgCIAHgGIAGAFQgIAMgQAAQgMAAgIgJgAgJgSQgFAFgBAIIAfAAIAAgBQAAgIgEgEQgEgFgHAAQgGAAgEAFg'
      );
    this.shape_84.setTransform(641.2, 241.9);

    this.shape_85 = new cjs.Shape();
    this.shape_85.graphics.f('#FFFFFF').s().p('AgEAtIAAhZIAKAAIAABZg');
    this.shape_85.setTransform(636.6, 240.6);

    this.shape_86 = new cjs.Shape();
    this.shape_86.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgPAlIgBAIIgKAAIAAhZIALAAIAAAhQAGgIALAAQALAAAIAJQAGAIAAAOIAAABQAAAPgHAJQgGAJgLAAQgMAAgGgJgAgPAAIAAAbQAFAKAKAAQAIAAAEgHQAEgFAAgNQAAgLgEgFQgFgGgHAAQgKAAgFAKg'
      );
    this.shape_86.setTransform(631.9, 240.6);

    this.shape_87 = new cjs.Shape();
    this.shape_87.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgFArIAAg+IAKAAIAAA+gAgEggQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQADAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCACgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg'
      );
    this.shape_87.setTransform(627, 240.7);

    this.shape_88 = new cjs.Shape();
    this.shape_88.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgMAeQgGgCgDgFQgDgFAAgGIALAAQAAAGAEADQAEADAGAAQAGAAAEgCQADgDAAgEQAAgEgDgDQgDgCgIgCQgIgCgFgCQgEgCgDgDQgCgEAAgEQAAgIAHgFQAGgGAJAAQALAAAHAGQAHAFAAAJIgLAAQAAgEgEgEQgEgDgGAAQgEAAgEADQgDACAAAEQAAAEADACIAKAEQAIACAFACQAFACADAEQACADAAAFQAAAJgHAFQgGAFgLAAQgHAAgGgDg'
      );
    this.shape_88.setTransform(622.4, 241.9);

    this.shape_89 = new cjs.Shape();
    this.shape_89.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgMAeQgGgCgDgFQgDgFAAgGIALAAQAAAGAEADQAEADAGAAQAGAAAEgCQADgDAAgEQAAgEgDgDQgDgCgIgCQgIgCgFgCQgEgCgDgDQgCgEAAgEQAAgIAHgFQAGgGAJAAQALAAAHAGQAHAFAAAJIgLAAQAAgEgEgEQgEgDgGAAQgEAAgEADQgDACAAAEQAAAEADACIAKAEQAIACAFACQAFACADAEQACADAAAFQAAAJgHAFQgGAFgLAAQgHAAgGgDg'
      );
    this.shape_89.setTransform(616.3, 241.9);

    this.shape_90 = new cjs.Shape();
    this.shape_90.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgUAYQgIgJAAgPIAAAAQAAgJAEgHQADgIAHgEQAGgEAIAAQANAAAIAJQAIAJAAAOIAAABQAAAJgEAHQgDAIgHAEQgGAEgJAAQgMAAgIgJgAgMgRQgFAHAAALQAAAKAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgLQAAgKgFgGQgFgHgIAAQgHAAgFAGg'
      );
    this.shape_90.setTransform(609.8, 241.9);

    this.shape_91 = new cjs.Shape();
    this.shape_91.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgaAsIAAhXIAKAAIABAHQAHgIAKAAQALAAAHAJQAHAIAAAQIAAABQAAAOgHAIQgHAJgLAAQgKAAgHgHIAAAegAgPgaIAAAdQAFAJAKAAQAHABAEgHQAFgGAAgLQAAgLgFgGQgEgGgHgBQgKAAgFAJg'
      );
    this.shape_91.setTransform(603.2, 243.1);

    this.shape_92 = new cjs.Shape();
    this.shape_92.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgMAeQgGgCgDgFQgDgFAAgGIALAAQAAAGAEADQAEADAGAAQAGAAAEgCQADgDAAgEQAAgEgDgDQgDgCgIgCQgIgCgFgCQgEgCgDgDQgCgEAAgEQAAgIAHgFQAGgGAJAAQALAAAHAGQAHAFAAAJIgLAAQAAgEgEgEQgEgDgGAAQgEAAgEADQgDACAAAEQAAAEADACIAKAEQAIACAFACQAFACADAEQACADAAAFQAAAJgHAFQgGAFgLAAQgHAAgGgDg'
      );
    this.shape_92.setTransform(593.7, 241.9);

    this.shape_93 = new cjs.Shape();
    this.shape_93.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgFArIAAg+IAKAAIAAA+gAgEggQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQADAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCACgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg'
      );
    this.shape_93.setTransform(589.2, 240.7);

    this.shape_94 = new cjs.Shape();
    this.shape_94.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgMAeQgGgCgDgFQgDgFAAgGIALAAQAAAGAEADQAEADAGAAQAGAAAEgCQADgDAAgEQAAgEgDgDQgDgCgIgCQgIgCgFgCQgEgCgDgDQgCgEAAgEQAAgIAHgFQAGgGAJAAQALAAAHAGQAHAFAAAJIgLAAQAAgEgEgEQgEgDgGAAQgEAAgEADQgDACAAAEQAAAEADACIAKAEQAIACAFACQAFACADAEQACADAAAFQAAAJgHAFQgGAFgLAAQgHAAgGgDg'
      );
    this.shape_94.setTransform(581.7, 241.9);

    this.shape_95 = new cjs.Shape();
    this.shape_95.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgMAeQgGgCgDgFQgDgFAAgGIALAAQAAAGAEADQAEADAGAAQAGAAAEgCQADgDAAgEQAAgEgDgDQgDgCgIgCQgIgCgFgCQgEgCgDgDQgCgEAAgEQAAgIAHgFQAGgGAJAAQALAAAHAGQAHAFAAAJIgLAAQAAgEgEgEQgEgDgGAAQgEAAgEADQgDACAAAEQAAAEADACIAKAEQAIACAFACQAFACADAEQACADAAAFQAAAJgHAFQgGAFgLAAQgHAAgGgDg'
      );
    this.shape_95.setTransform(575.5, 241.9);

    this.shape_96 = new cjs.Shape();
    this.shape_96.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgUAYQgIgJAAgPIAAAAQAAgJAEgHQADgIAHgEQAGgEAIAAQANAAAIAJQAIAJAAAOIAAABQAAAJgEAHQgDAIgHAEQgGAEgJAAQgMAAgIgJgAgMgRQgFAHAAALQAAAKAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgLQAAgKgFgGQgFgHgIAAQgHAAgFAGg'
      );
    this.shape_96.setTransform(569.1, 241.9);

    this.shape_97 = new cjs.Shape();
    this.shape_97.graphics.f('#FFFFFF').s().p('AgEAtIAAhZIAJAAIAABZg');
    this.shape_97.setTransform(564.2, 240.6);

    this.shape_98 = new cjs.Shape();
    this.shape_98.graphics.f('#FFFFFF').s().p('AgEAtIAAhZIAJAAIAABZg');
    this.shape_98.setTransform(558.4, 240.6);

    this.shape_99 = new cjs.Shape();
    this.shape_99.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgTAcQgGgGAAgIQAAgKAHgEQAIgGAMAAIALAAIAAgFQAAgFgEgEQgCgDgHAAQgFAAgEADQgEADAAAEIgLAAQAAgFAEgEQADgFAGgCQAGgDAFAAQAMAAAFAGQAHAFAAAKIAAAcQAAAJACAFIAAABIgLAAIgBgHQgIAIgJAAQgKAAgGgFgAgPANQAAAFAEADQAEACAFAAQAEAAAFgCQAEgDACgEIAAgNIgIAAQgUAAAAAMg'
      );
    this.shape_99.setTransform(553.7, 241.9);

    this.shape_100 = new cjs.Shape();
    this.shape_100.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgaAsIAAhXIAKAAIABAHQAGgIALAAQAMAAAGAJQAHAIAAAQIAAABQAAAOgHAIQgGAJgMAAQgKAAgHgHIAAAegAgPgaIAAAdQAFAJAKAAQAGABAGgHQAEgGAAgLQAAgLgEgGQgFgGgHgBQgKAAgFAJg'
      );
    this.shape_100.setTransform(547.2, 243.1);

    this.shape_101 = new cjs.Shape();
    this.shape_101.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgFArIAAg+IAKAAIAAA+gAgEggQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQADAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCACgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg'
      );
    this.shape_101.setTransform(542.3, 240.7);

    this.shape_102 = new cjs.Shape();
    this.shape_102.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgSAYQgIgIAAgPIAAgBQAAgJAEgIQADgHAGgEQAHgEAHAAQALAAAHAHQAHAGABAKIgLAAQAAgGgEgEQgFgEgGAAQgHAAgEAGQgFAGAAALIAAABQAAALAEAGQAFAGAHAAQAGAAAFgDQAEgEAAgFIALAAQgBAFgDAFQgEAFgFADQgGADgHAAQgMAAgHgJg'
      );
    this.shape_102.setTransform(537.8, 241.9);

    this.shape_103 = new cjs.Shape();
    this.shape_103.graphics
      .f('#FFFFFF')
      .s()
      .p('AAOAgIAAgpQAAgHgDgDQgDgDgHAAQgEAAgEADQgEADgCAEIAAAsIgLAAIAAg+IALAAIAAAIQAHgJALAAQAUAAAAAWIAAApg');
    this.shape_103.setTransform(531.3, 241.8);

    this.shape_104 = new cjs.Shape();
    this.shape_104.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgFArIAAg+IAKAAIAAA+gAgEggQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQADAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCACgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg'
      );
    this.shape_104.setTransform(526.5, 240.7);

    this.shape_105 = new cjs.Shape();
    this.shape_105.graphics.f('#FFFFFF').s().p('AgOAgIAAg+IAKAAIAAAHQAFgIAKAAIAEABIAAAKIgFgBQgKAAgEAJIAAAsg');
    this.shape_105.setTransform(523.4, 241.8);

    this.shape_106 = new cjs.Shape();
    this.shape_106.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgeArIAAhVIAfAAQAOAAAIAIQAIAHAAAMQAAAMgIAGQgIAGgOAAIgUAAIAAAigAgTAAIAUAAQAJAAAEgDQAFgEAAgIQAAgIgFgFQgEgEgJAAIgUAAg'
      );
    this.shape_106.setTransform(517.5, 240.8);

    this.shape_107 = new cjs.Shape();
    this.shape_107.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgEAFQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgCACgCQACgBACAAQADAAACABQACACAAACQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCABgDAAQgCAAgCgBg'
      );
    this.shape_107.setTransform(508.9, 244.5);

    this.shape_108 = new cjs.Shape();
    this.shape_108.graphics.f('#FFFFFF').s().p('AANAtIgUgeIgIAIIAAAWIgKAAIAAhZIAKAAIAAA1IAHgGIASgVIANAAIgXAaIAaAlg');
    this.shape_108.setTransform(504.8, 240.6);

    this.shape_109 = new cjs.Shape();
    this.shape_109.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgMAeQgGgCgDgFQgDgFAAgGIALAAQAAAGAEADQAEADAGAAQAGAAAEgCQADgDAAgEQAAgEgDgDQgDgCgIgCQgIgCgFgCQgEgCgDgDQgCgEAAgEQAAgIAHgFQAGgGAJAAQALAAAHAGQAHAFAAAJIgLAAQAAgEgEgEQgEgDgGAAQgEAAgEADQgDACAAAEQAAAEADACIAKAEQAIACAFACQAFACADAEQACADAAAFQAAAJgHAFQgGAFgLAAQgHAAgGgDg'
      );
    this.shape_109.setTransform(498.2, 241.9);

    this.shape_110 = new cjs.Shape();
    this.shape_110.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgFArIAAg+IAKAAIAAA+gAgEggQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQADAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCACgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg'
      );
    this.shape_110.setTransform(493.7, 240.7);

    this.shape_111 = new cjs.Shape();
    this.shape_111.graphics.f('#FFFFFF').s().p('AgPAgIAAg+IAMAAIAAAHQAEgIAJAAIAGABIAAAKIgGgBQgKAAgDAJIAAAsg');
    this.shape_111.setTransform(490.6, 241.8);

    this.shape_112 = new cjs.Shape();
    this.shape_112.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgMAeQgGgCgDgFQgDgFAAgGIALAAQAAAGAEADQAEADAGAAQAGAAAEgCQADgDAAgEQAAgEgDgDQgDgCgIgCQgIgCgFgCQgEgCgDgDQgCgEAAgEQAAgIAHgFQAGgGAJAAQALAAAHAGQAHAFAAAJIgLAAQAAgEgEgEQgEgDgGAAQgEAAgEADQgDACAAAEQAAAEADACIAKAEQAIACAFACQAFACADAEQACADAAAFQAAAJgHAFQgGAFgLAAQgHAAgGgDg'
      );
    this.shape_112.setTransform(482.2, 241.9);

    this.shape_113 = new cjs.Shape();
    this.shape_113.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgSAYQgIgIAAgOIAAgCQAAgJAEgHQADgHAHgFQAGgEAHAAQAMAAAHAIQAHAIAAAQIAAADIgqAAQAAAKAGAFQAFAGAHAAQAGAAAEgCIAHgGIAGAFQgIAMgQAAQgMAAgIgJgAgJgSQgFAFgBAIIAfAAIAAgBQAAgIgEgEQgEgFgHAAQgGAAgEAFg'
      );
    this.shape_113.setTransform(476, 241.9);

    this.shape_114 = new cjs.Shape();
    this.shape_114.graphics.f('#FFFFFF').s().p('AgDAgIgXg/IALAAIAPAwIAQgwIALAAIgXA/g');
    this.shape_114.setTransform(469.9, 241.9);

    this.shape_115 = new cjs.Shape();
    this.shape_115.graphics.f('#FFFFFF').s().p('AgFAtIAAhZIAKAAIAABZg');
    this.shape_115.setTransform(465.5, 240.6);

    this.shape_116 = new cjs.Shape();
    this.shape_116.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgUAYQgIgJAAgPIAAAAQAAgJAEgHQADgIAHgEQAGgEAIAAQANAAAIAJQAIAJAAAOIAAABQAAAJgEAHQgDAIgHAEQgGAEgJAAQgMAAgIgJgAgMgRQgFAHAAALQAAAKAFAHQAFAGAHAAQAIAAAFgGQAFgHAAgLQAAgKgFgGQgFgHgIAAQgHAAgFAGg'
      );
    this.shape_116.setTransform(460.7, 241.9);

    this.shape_117 = new cjs.Shape();
    this.shape_117.graphics.f('#FFFFFF').s().p('AgDAgIgXg/IALAAIAPAwIAQgwIALAAIgXA/g');
    this.shape_117.setTransform(454.4, 241.9);

    this.shape_118 = new cjs.Shape();
    this.shape_118.graphics
      .f('#FFFFFF')
      .s()
      .p('AAOAgIAAgpQAAgHgDgDQgDgDgHAAQgEAAgEADQgDADgDAEIAAAsIgLAAIAAg+IAKAAIABAIQAHgJALAAQAUAAAAAWIAAApg');
    this.shape_118.setTransform(448.2, 241.8);

    this.shape_119 = new cjs.Shape();
    this.shape_119.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgFArIAAg+IAKAAIAAA+gAgEggQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQADAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCACgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg'
      );
    this.shape_119.setTransform(443.4, 240.7);

    this.shape_120 = new cjs.Shape();
    this.shape_120.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgMAqQgHgDgDgFIAFgHQAHAJAKAAQAHAAAFgFQAEgEAAgIIAAgGQgGAIgLAAQgLAAgHgJQgHgJAAgOQAAgPAHgJQAHgJALAAQALAAAHAIIAAgHIAKAAIAAA9QAAANgHAHQgIAHgMAAQgGAAgGgDgAgKgcQgFAGAAAMQAAAKAFAGQAEAGAHAAQAKAAAFgKIAAgcQgFgJgKAAQgHAAgEAHg'
      );
    this.shape_120.setTransform(435.5, 243.1);

    this.shape_121 = new cjs.Shape();
    this.shape_121.graphics
      .f('#FFFFFF')
      .s()
      .p('AAOAgIAAgpQAAgHgDgDQgDgDgHAAQgEAAgEADQgEADgCAEIAAAsIgLAAIAAg+IALAAIAAAIQAHgJALAAQAUAAAAAWIAAApg');
    this.shape_121.setTransform(429, 241.8);

    this.shape_122 = new cjs.Shape();
    this.shape_122.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgFArIAAg+IAKAAIAAA+gAgEggQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQADAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCACgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg'
      );
    this.shape_122.setTransform(424.3, 240.7);

    this.shape_123 = new cjs.Shape();
    this.shape_123.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgBAkQgEgFAAgIIAAgmIgLAAIAAgJIALAAIAAgPIAKAAIAAAPIAMAAIAAAJIgMAAIAAAmQAAAEACACQABACAEAAIAFgBIAAAJIgIABQgHAAgDgEg'
      );
    this.shape_123.setTransform(420.7, 241.2);

    this.shape_124 = new cjs.Shape();
    this.shape_124.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgMAeQgGgCgDgFQgDgFAAgGIALAAQAAAGAEADQAEADAGAAQAGAAAEgCQADgDAAgEQAAgEgDgDQgDgCgIgCQgIgCgFgCQgEgCgDgDQgCgEAAgEQAAgIAHgFQAGgGAJAAQALAAAHAGQAHAFAAAJIgLAAQAAgEgEgEQgEgDgGAAQgEAAgEADQgDACAAAEQAAAEADACIAKAEQAIACAFACQAFACADAEQACADAAAFQAAAJgHAFQgGAFgLAAQgHAAgGgDg'
      );
    this.shape_124.setTransform(415.8, 241.9);

    this.shape_125 = new cjs.Shape();
    this.shape_125.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgSAYQgIgIAAgOIAAgCQAAgJAEgHQADgHAHgFQAGgEAHAAQAMAAAHAIQAHAIAAAQIAAADIgqAAQAAAKAGAFQAFAGAHAAQAGAAAEgCIAHgGIAGAFQgIAMgQAAQgMAAgIgJgAgJgSQgFAFgBAIIAfAAIAAgBQAAgIgEgEQgEgFgHAAQgGAAgEAFg'
      );
    this.shape_125.setTransform(409.6, 241.9);

    this.shape_126 = new cjs.Shape();
    this.shape_126.graphics.f('#FFFFFF').s().p('AgDAgIgXg/IALAAIAPAwIAQgwIALAAIgXA/g');
    this.shape_126.setTransform(403.5, 241.9);

    this.shape_127 = new cjs.Shape();
    this.shape_127.graphics
      .f('#FFFFFF')
      .s()
      .p('AAOAgIAAgpQAAgHgDgDQgDgDgHAAQgEAAgEADQgDADgDAEIAAAsIgLAAIAAg+IAKAAIABAIQAHgJALAAQAUAAAAAWIAAApg');
    this.shape_127.setTransform(397.3, 241.8);

    this.shape_128 = new cjs.Shape();
    this.shape_128.graphics.f('#FFFFFF').s().p('AgFArIAAhVIALAAIAABVg');
    this.shape_128.setTransform(392.4, 240.8);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_128 },
            { t: this.shape_127 },
            { t: this.shape_126 },
            { t: this.shape_125 },
            { t: this.shape_124 },
            { t: this.shape_123 },
            { t: this.shape_122 },
            { t: this.shape_121 },
            { t: this.shape_120 },
            { t: this.shape_119 },
            { t: this.shape_118 },
            { t: this.shape_117 },
            { t: this.shape_116 },
            { t: this.shape_115 },
            { t: this.shape_114 },
            { t: this.shape_113 },
            { t: this.shape_112 },
            { t: this.shape_111 },
            { t: this.shape_110 },
            { t: this.shape_109 },
            { t: this.shape_108 },
            { t: this.shape_107 },
            { t: this.shape_106 },
            { t: this.shape_105 },
            { t: this.shape_104 },
            { t: this.shape_103 },
            { t: this.shape_102 },
            { t: this.shape_101 },
            { t: this.shape_100 },
            { t: this.shape_99 },
            { t: this.shape_98 },
            { t: this.shape_97 },
            { t: this.shape_96 },
            { t: this.shape_95 },
            { t: this.shape_94 },
            { t: this.shape_93 },
            { t: this.shape_92 },
            { t: this.shape_91 },
            { t: this.shape_90 },
            { t: this.shape_89 },
            { t: this.shape_88 },
            { t: this.shape_87 },
            { t: this.shape_86 },
            { t: this.shape_85 },
            { t: this.shape_84 },
            { t: this.shape_83 },
            { t: this.shape_82 },
            { t: this.shape_81 },
            { t: this.shape_80 },
            { t: this.shape_79 },
            { t: this.shape_78 },
            { t: this.shape_77 },
            { t: this.shape_76 },
            { t: this.shape_75 },
            { t: this.shape_74 },
            { t: this.shape_73 },
            { t: this.shape_72 },
            { t: this.shape_71 },
            { t: this.shape_70 },
            { t: this.shape_69 },
            { t: this.shape_68 },
            { t: this.shape_67 },
            { t: this.shape_66 },
            { t: this.shape_65 },
            { t: this.shape_64 },
            { t: this.shape_63 },
            { t: this.shape_62 },
            { t: this.shape_61 },
            { t: this.shape_60 },
            { t: this.shape_59 },
            { t: this.shape_58 },
            { t: this.shape_57 },
            { t: this.shape_56 },
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
          ],
        })
        .wait(1800)
    );

    // IBBJ
    this.instance_2 = new lib.Symbol7('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(637.1, 86, 1.21, 1.21, 0, 0, 0, 128.8, 77.2);

    this.instance_3 = new lib.Symbol8('synched', 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(665, 88, 1.778, 1.21, 0, 0, 0, 102.1, 102.1);
    this.instance_3.alpha = 0.422;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_3 }, { t: this.instance_2 }] })
        .wait(1800)
    );

    // bg_animation
    this.shape_129 = new cjs.Shape();
    this.shape_129.graphics.f('#E5B044').s().p('AjvAeIAAg8IHfAAIAAADIAAABIAAACInaAAIAAA2g');
    this.shape_129.setTransform(632.5, 21.5, 1.21, 1.21);

    this.instance_4 = new lib.Symbol1copy('synched', 0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(689.3, 18.1, 1.512, 1.512, 0, 0, 0, 16.6, 4);

    this.shape_130 = new cjs.Shape();
    this.shape_130.graphics.f('#E5B044').s().p('AhWAeIAAg7IAFAAIAAA2ICjAAIAAg2IAFAAIAAA7g');
    this.shape_130.setTransform(551, 148.9, 1.21, 1.21);

    this.instance_5 = new lib.Symbol1('synched', 0);
    this.instance_5.parent = this;
    this.instance_5.setTransform(560.8, 115.1, 1.512, 1.512, -90, 0, 0, 16.4, 4);

    this.shape_131 = new cjs.Shape();
    this.shape_131.graphics.f('#E5B044').s().p('AgpAeIAAg7IBSAAIAAACIAAABIAAABIhMAAIAAA3g');
    this.shape_131.setTransform(820.2, 56.6, 1.21, 1.21);

    this.instance_6 = new lib.Symbol1copy('synched', 0);
    this.instance_6.parent = this;
    this.instance_6.setTransform(784.3, 88.3, 1.512, 1.512, 90, 0, 0, 16.6, 3.9);

    this.instance_7 = new lib.Symbol1('synched', 0);
    this.instance_7.parent = this;
    this.instance_7.setTransform(770.7, 165.1, 1.512, 1.512, 0, 0, 0, 16.6, 4);

    this.shape_132 = new cjs.Shape();
    this.shape_132.graphics.f('#E5B044').s().p('AjfAnIAAgwIG7AAIAAgdIAEAAIAAAhIm7AAIAAAsg');
    this.shape_132.setTransform(753.4, 151.1, 1.512, 1.512);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_132 },
            { t: this.instance_7 },
            { t: this.instance_6 },
            { t: this.shape_131 },
            { t: this.instance_5 },
            { t: this.shape_130 },
            { t: this.instance_4 },
            { t: this.shape_129 },
          ],
        })
        .wait(1800)
    );

    // Cells
    this.instance_8 = new lib.Symbol4('synched', 0);
    this.instance_8.parent = this;
    this.instance_8.setTransform(135.8, 229.9, 1.125, 1.125, -90, 0, 0, 77.1, 219.8);

    this.instance_9 = new lib.Symbol4('synched', 0);
    this.instance_9.parent = this;
    this.instance_9.setTransform(847.5, 135.4, 1.125, 1.125, -90, 0, 0, 77.1, 219.8);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_9 }, { t: this.instance_8 }] })
        .wait(1800)
    );

    // DNA
    this.instance_10 = new lib.Symbol3('synched', 0);
    this.instance_10.parent = this;
    this.instance_10.setTransform(165.1, 648.9, 1.5, 1.5, 0, 0, 0, 26.6, 483.9);

    this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1800));

    // BG
    this.instance_11 = new lib.BG();
    this.instance_11.parent = this;
    this.instance_11.setTransform(896, -185);

    this.instance_12 = new lib.BG();
    this.instance_12.parent = this;
    this.instance_12.setTransform(578, -20);

    this.instance_13 = new lib.BG();
    this.instance_13.parent = this;
    this.instance_13.setTransform(298, -185);

    this.instance_14 = new lib.BG();
    this.instance_14.parent = this;
    this.instance_14.setTransform(0, -20);

    this.instance_15 = new lib.BG();
    this.instance_15.parent = this;
    this.instance_15.setTransform(714, -185);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_15 },
            { t: this.instance_14 },
            { t: this.instance_13 },
            { t: this.instance_12 },
            { t: this.instance_11 },
          ],
        })
        .wait(1800)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(373.5, -166.9, 1307.6, 2392.8);
  // library properties:
  lib.properties = {
    id: '72DC4EBEC57E46858DB6AB3DAB4EAEE2',
    width: 970,
    height: 250,
    fps: 60,
    color: '#000026',
    opacity: 1.0,
    manifest: [{ src: 'images/BG.jpg', id: 'BG' }],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions['72DC4EBEC57E46858DB6AB3DAB4EAEE2'] = {
    getStage: function () {
      return exportRoot.getStage();
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
