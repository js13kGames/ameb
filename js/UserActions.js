/* UserActions.js */

var UserActions = function () {
    var evnt;
    var moveDist = 5;
    var keyboardMoves = {
        37: [-moveDist, 0], 38: [ 0, -moveDist],
        39: [moveDist, 0], 40: [0, moveDist]
    };

    function setActions() {

        addEventListener("keydown", function (e) {
            l(e.which)
            if (e.which === 65) {     // a Automatic
//        evnt.trigger("game.removeAmebAction");
//        evnt.trigger("ActionScript.addTick");
            }
            else if (e.which === 77) {     // m     Manual
//                evnt.trigger("game.setUserAction");
//        evnt.trigger("game.setAmebAction");
//        evnt.trigger("ActionScript.removeTick");
            }
            else if (e.which === 82) {     // r    Reset
                evnt.trigger("game.reset");
            }
            else if (e.which === 73) {     // i    Intro
                evnt.trigger("Messages.toggleIntro");
            }
            else if (e.which === 191) {     // ?   Description
                evnt.trigger("Messages.toggleDescription");
            }
            else if (e.which === 67) {     // c    Ameb.headConstraintToggle
                evnt.trigger("ameb.headConstraintToggle");
            }
            else if (e.which === 32) {    // [space bar]
                evnt.trigger("ameb.footConstraintToggle");
            }
            else if (e.which >= 37 && e.which <= 40) {
                var moveKey = e.which;
                evnt.trigger("ameb.moveHead", keyboardMoves[moveKey]);
            }
        });
    }

    // removeAmebActions
    function removeActions() {
        removeEventListener("keydown");
    }

    function init() {
        evnt = G.EvntFactory.get();
        evnt.on("game.setUserAction", function () {
            setActions();
        })
        evnt.on("game.removeUserAction", function () {
            removeActions();
        })
    }

    return{
        init: function () {
            init();
        }
    }
}();
