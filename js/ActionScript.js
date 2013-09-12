/* ActionScript.js */

var ActionScript = function () {
    var evnt;
    var loopInc = 10;
    var acts = {
        "0": function () {
            evnt.trigger("ameb.moveHead", [0, -10 ]);
            evnt.trigger("ameb.footConstraintToggle");
        },
        "1": function () {
            evnt.trigger("ameb.footConstraintToggle");
            evnt.trigger("ameb.moveHead", [0, -10]);
        },
        "2": function () {
            evnt.trigger("ameb.moveHead", [-20, 0]);
        },
        "5": function () {
            evnt.trigger("ameb.moveHead",  [0, -10]);
            evnt.trigger("ameb.headConstraintToggle");
            evnt.trigger("ameb.footConstraintToggle");
        },
        "6": function () {
            evnt.trigger("ameb.moveHead", [0, -40]);
            evnt.trigger("ameb.footConstraintToggle");
        },
        "9": function () {
            evnt.trigger("ameb.headConstraintToggle");
        }
    }

    function init() {
        evnt = G.EvntFactory.get();
//          addTick();
//evnt.on removeTick addTick
        evnt.on("ActionScript.addTick", function( ){
            addTick( );
        })
        evnt.on("ActionScript.removeTick", function(){
            removeTick();
        })
    }
    function addTick(){
        evnt.on("tick", function (tick) {
            onTick(tick);
        })
    }
    function removeTick(){
l("removeTick")
//        evnt.on("tick", function (tick) {
//            onTick(tick);
//        })
    }
    // removeTick, addTick
    function onTick(tick) {
        var actInc = tick % loopInc;
        if (acts[actInc]) {
            acts[actInc]()
        }
    }

    return{
        init: function () {
            init();
        }
    }

}();

