(function (window) {
    if (!window.basic) window.basic = {};
    var Juggler = window.basic.Juggler;
    var JugglerManager = function () {
        this.processTime = new Date().getTime();
        this.oneJuggler = new Juggler();
        this.twoJuggler = new Juggler();
        this.threeJuggler = new Juggler();
        this.fourJuggler = new Juggler();
        this.intervalId = setInterval(this.onEnterFrame, 25);
        this.isStop = false;
        this.onEnterFrame = function () {
            var now = new Date().getTime();
            var passedTime = (now - basic.jugglerManager.processTime) / 1000.0;
            basic.jugglerManager.processTime = now;
            if (passedTime === 0.0 || this.isStop) {
                return;
            }
            basic.jugglerManager.oneJuggler.advanceTime(passedTime);
            basic.jugglerManager.twoJuggler.advanceTime(passedTime);
            basic.jugglerManager.threeJuggler.advanceTime(passedTime);
            basic.jugglerManager.fourJuggler.advanceTime(passedTime);
        }
    };
    window.basic.jugglerManager = new JugglerManager();
})(window);