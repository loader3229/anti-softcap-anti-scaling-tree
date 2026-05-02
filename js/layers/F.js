addLayer("F", {
    name: "F", 
    symbol: "F", 
    position: 1, 
    startData() { return {
        unlocked: false,
        points: n(0),
        F1: n(10),
        fd1: n(0),
        fd2: n(0),
        fd3: n(0),
        fd4: n(0),
        fd5: n(0),
        fd6: n(0),
        fd7: n(0),
        fd8: n(0),
        F2: n(1),
        f2d1: n(0),
        f2d2: n(0),
        f2d3: n(0),
        f2d4: n(0),
    }},
    resetsNothing(){return upg('F',65)},//||mil('I',1)
    passiveGeneration(){    let p=n(0)
if(mil("Z",14))p = p.add(1)
        if(mil("F", 9)||mil('I',1)) p=p.add(1)
if(mil("Z",14))p = p.mul(10)
if(mil("Z",15))p = p.mul(10)
if(mil("Z",16))p = p.mul(10)
        //if(gcs('I',35)) p=n(1)
        return p},
    color: "#264321",
    requires(){if(mil("Z",14))return n(1);if(mil("Z",13))return n('1e500');if(mil("Z",12))return n('1e600');return n('1e700');}, 
    resource: "F", 
    baseResource: "E", 
    baseAmount() {return player.E.points}, 
    type: "normal", 
    exponent(){
        if(player.Z.points.gte(34))return n(1);
        if(player.Z.points.gte(21))return n(0.0025);
        return n(0.0075).mul(Decimal.pow(0.95,player.Z.points));
    },
    gainExp() {
        let ef=n(1)
        if(gcs('I',32)) ef=ef.add(0.2)
        return ef
    },
    row: 3, 
    hotkeys: [
        {key: "f", description: "F: Reset for F points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    autoUpgrade() {return (gcs('I',101))},
    layerShown(){return ((mil('E',20))||player[this.layer].unlocked)},
    gainMult() { 
        mult = n(1)
        if (mil('Z',12)) mult=Decimal.mul(mult,2)
        if (mil('Z',13)) mult=Decimal.mul(mult,3)
        if (mil('Z',14)) mult=Decimal.mul(mult,4)
        if (mil('Z',15)) mult=Decimal.mul(mult,5)
        if (mil('Z',16)) mult=Decimal.mul(mult,6)
        if (upg('F',21)) mult=mult.mul(2)
        if (upg('F',23)) mult=mult.mul(upgradeEffect('F',23))
        if (upg('F',32)) mult=mult.mul(upgradeEffect('F',32))
        if (player.Z.points.gte(14) && player.Z.points.lte(28)) mult=Decimal.mul(mult,tmp.F.F1f)

                if (upg('G',14)) mult=Decimal.mul(mult,upgradeEffect('G',14))

        return mult
    },
    branches: ['E'],
    milestones: {
        0: {requirementDescription: "1 total F (1",
            done() {return player[this.layer].total.gte('1')}, 
            effectDescription: "keep A/B upg,A/C chal,B/C/D mil,x1 E pas gain,x10 A/B/E.<br>keep E chal gained at the start of Z reset.",
        },
        1: {requirementDescription: "2 total F (2",
            done() {return player[this.layer].total.gte('2')}, 
            effectDescription: "keep C/D upg,E mil.",
        },
        2: {requirementDescription: "4 total F (3",
            done() {return player[this.layer].total.gte('4')}, 
            effectDescription: "B26 ^1.1.",
        },
        3: {requirementDescription: "6 total F (4",
            done() {return player[this.layer].total.gte('6')}, 
            effectDescription: "autobuy E upg.",
        },
        4: {requirementDescription: "15 total F (5",
            done() {return player[this.layer].total.gte('15')}, 
            effectDescription: "keep E upg.",
        },
        5: {requirementDescription: "50 total F (6",
            done() {return player[this.layer].total.gte('50')}, 
            effectDescription: "keep E chal.",
        },
        6: {requirementDescription: "160 total F (7",
            done() {return player[this.layer].total.gte('160')}, 
            effectDescription: "x5 bulk buy Eb1-3.",
        },
        7: {requirementDescription: "1.5e7 total F (8",
            done() {return player[this.layer].total.gte('1.5e7')}, 
            effectDescription: "Bb5 x1.025.",
        },
        8: {requirementDescription: "1e9 total F (9",
            done() {return player[this.layer].total.gte('1e9')}, 
            effectDescription: "x1e100 pts,unlock a chal.",
        },
        9: {requirementDescription: "1e12 total F (10",
            done() {return player[this.layer].total.gte('1e12')}, 
            effectDescription: "gain 100% F on reset/sec.",
        },
        10: {requirementDescription: "1e15 total F (11",
            done() {return player[this.layer].total.gte('1e15') && mil('Z',13)},
            unlocked() {return mil('Z',13)}, 
            effectDescription: "unlock new upgrades.",
        },
        11: {requirementDescription: "1e10 total F1 (12",
            done() {return player[this.layer].F1.gte('1e10')}, 
            unlocked() {return mil('Z',13)}, 
            effectDescription: "unlock tickspeed.",
        },
        12: {requirementDescription: "1e38 total F1 (13",
            done() {return player[this.layer].F1.gte('1e38')}, 
            unlocked() {return mil('Z',13)}, 
            effectDescription: "Fc1 x1.2.",
        },
        13: {requirementDescription: "1e69 total F1 (14",
            done() {return player[this.layer].F1.gte('1e69')}, 
            unlocked() {return mil('Z',13)}, 
            effectDescription: "unlock dimboost.",
        },
        14: {requirementDescription: "1 tickboost (15",
            done() {return (gba('F',102).gte(1))}, 
            unlocked() {return mil('Z',13)},
            effectDescription: "x10 F1,start with 1e6 F1,unlock new upg.",
        },
        15: {requirementDescription: "2 tickboost (16",
            done() {return (gba('F',102).gte(2))}, 
            unlocked() {return mil('Z',13)},
            effectDescription: "start with 1e30 F1,dimmult per buy +0.1,autobuy dims.",
            toggles: [["F","auto1"]]
        },
        16: {requirementDescription: "3 tickboost (17",
            done() {return (gba('F',102).gte(3) && mil('Z',14))}, 
            unlocked() {return mil('Z',14)},
            effectDescription: "autobuy tickspeed.",
            toggles: [["F","auto2"]]
        },
        17: {requirementDescription: "6 tickboost (18",
            done() {return (gba('F',102).gte(6) && mil('Z',15))}, 
            unlocked() {return mil('Z',15)},
            effectDescription: "G10 is stronger,unlock new upg,only can be bought in Gc.",
        },
        18: {requirementDescription: "18 tickboost (19",
            done() {return (gba('F',102).gte(18) && mil('Z',16))}, 
            unlocked() {return mil('Z',16)},
            effectDescription: "Gc1p eff ^1.5, Em effect is better.",
        },
    },
    doReset(layer){
        if (layer=="G") {        
            let keep = []
            keep.push("milestones")
            keep.push("upgrades")
            keep.push("challenges")
            //if(mil("G",8)) keep.push("buyables")
            //let k=player.F.buyables[111,112]
            //let k = []
            //keep.push(buyables[111,112])
            //for(let i in player.F.buyables) k[i]=gba('F',i)
            layerDataReset(this.layer, keep)
        }
            //for(let i in k) setBuyableAmount('F',i,k[i])
        if (layer=="I") {        
            let keep = []
            if(gcs('I',13))  keep.push("challenges")
            if(gcs('I',36))  keep.push("milestones")
            if(mil('I',23))  keep.push("upgrades")
            layerDataReset(this.layer, keep)
            if(gcs('I',15)&&!gcs('I',36))  player[this.layer].milestones=[11,12,13,14,15,16]
            if(gcs('I',36)&&!mil('I',23))  player[this.layer].upgrades=[71,72,73,74,75,81,82,83,84,85]
        }
    },
    microtabs: {
        stuff: {       
            "Upgrades": {
                unlocked() {return true},
                content: [ ["raw-html", () => `<h4 style="opacity:.5">welcome to row 3.F resets row 1-2.</h4>`],"upgrades"]}, 
            "Milestones": {
                unlocked() {return true},
                content: [["raw-html", () => `<h4 style="opacity:.5">keep something as you get more F.</h4>`],"milestones"]},
            "Challenges": {
                unlocked() {return (mil("F",8))},
                content: ["challenges"]},
            "F dims": {
                unlocked() {return (mil("Z",13))},
                content: [["raw-html", () => `<h4 style="opacity:.5">this part is from Antimatter Dimensions(but easier).<br></h4>`]
                //["raw-html", () => `<h4 style="opacity:.5">like Em,F1 mults F.<br></h4>`]
                ,["display-text", function(){
        if(player.Z.points.gte(41))return "You have <h3 style='color: #128253; text-shadow: 0 0 3px #c2b280'>" + format(player.F.F1) + "</h3> F1, point slog +<h3 style='color: #128253; text-shadow: 0 0 3px #c2b280'>" + format(tmp.F.F1f3) + "</h3>.<br>" + "<h4>" + format(tmp.F.F1effect.mul(player.F.fd1)) + " F1/s<h4> <br>"
        if(player.Z.points.gte(29))return "You have <h3 style='color: #128253; text-shadow: 0 0 3px #c2b280'>" + format(player.F.F1) + "</h3> F1, points ^<h3 style='color: #128253; text-shadow: 0 0 3px #c2b280'> " + format(tmp.F.F1f2) + "</h3>.<br>" + "<h4>" + format(tmp.F.F1effect.mul(player.F.fd1)) + " F1/s<h4> <br>"
        return "You have <h3 style='color: #128253; text-shadow: 0 0 3px #c2b280'>" + format(player.F.F1) + "</h3> F1, mult F by <h3 style='color: #128253; text-shadow: 0 0 3px #c2b280'> " + format(tmp.F.F1f) + "x</h3>.<br>" + "<h4>" + format(tmp.F.F1effect.mul(player.F.fd1)) + " F1/s<h4> <br>"}],
                ,["display-text", () => "dim mult per buy: x<h3 style='color: #128253; text-shadow: 0 0 3px #c2b280'>" + format(tmp.F.fdbas)],
                ,["display-text", () => "tickspeed mult per buy: x<h3 style='color: #128253; text-shadow: 0 0 3px #c2b280'>" + format(tmp.F.tick,4)],
                ,["buyables",[1,2,3,10]]
                ]}, 
            "F2": {
                unlocked() {return player.Z.points.gte(22)},//false
                content: [["display-text", () => (player.Z.points.gte(41)?("You have <h3 style='color: #C037A5; text-shadow: 0 0 3px #c2b280'>" + format(player.F.F2) + "</h3> F2, point slog +<h3 style='color: #C037A5; text-shadow: 0 0 3px #c2b280'>" + format(tmp.F.F2f,4) + "</h3>.<br>" + "<h4>" + format(tmp.F.F2effect.mul(player.F.f2d1)) + " F2/s<h4> <br>"):player.Z.points.gte(37)?("You have <h3 style='color: #C037A5; text-shadow: 0 0 3px #c2b280'>" + format(player.F.F2) + "</h3> F2, F1 effect slog +<h3 style='color: #C037A5; text-shadow: 0 0 3px #c2b280'> " + format(tmp.F.F2f,4) + "</h3>.<br>" + "<h4>" + format(tmp.F.F2effect.mul(player.F.f2d1)) + " F2/s<h4> <br>"):("You have <h3 style='color: #C037A5; text-shadow: 0 0 3px #c2b280'>" + format(player.F.F2) + "</h3> F2, raise F1 effect by ^<h3 style='color: #C037A5; text-shadow: 0 0 3px #c2b280'> " + format(tmp.F.F2f,4) + "</h3>.<br>" + "<h4>" + format(tmp.F.F2effect.mul(player.F.f2d1)) + " F2/s<h4> <br>"))],
                ,["buyables",[11,12]]]},   
        }
    },
    softcap(){return n(Infinity)},
    softcapPower(){return n(1)},
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    upgrades: {
        11: {
            title:'F1',
            description: function() {return '1e15x and ^1.0016 points<br> \n\
                '+'layer F total:<br> \n\
                '+ format(this.effect()) +'x'},            
            effect()  { 
                let ef = n('1e15')
                let exp = n(0.5)
                if (upg('F',13)) ef=ef.mul('1e30')
                if (upg('F',15)) ef=ef.mul('1e30')
                if (upg('F',21)) ef=ef.mul('1e30')
                if (upg('F',25)) ef=ef.mul('1e40')
                if (mil('F',8)) ef=ef.mul('1e100')
                if (upg('F',32)) ef=ef.mul('1e111')
                if (upg('F',34)) ef=ef.mul('1e120')
                if (upg('F',23)) exp=exp.add(0.5)
                if (upg('F',15)) ef=ef.pow(buyableEffect("E",21).sub(1).mul(exp).add(1))
                if(mil("Z",16)) ef=ef.pow(10)
                if(mil("Z",17)) ef=ef.pow(10)
                return ef;          
            },
            cost:n(1),
        },
        12: {
            title:'F2',
            description: "total F boost E.(x^3)",
            effect()  { 
                let ef = n(3)
                return player[this.layer].total.add(1).pow(ef);          
            },
            cost:n(1),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (upg(this.layer, 11))},
        },
        13: {
            title:'F3',
            description: "1e30x pts,autobuy B upgs",
            cost:n(1),
            unlocked() { return (upg(this.layer, 12))},
        },
        14: {
            title:'F4',
            description: "^1.0012 pts,Eb1-3 base+0.3,Eb7 base+1",
            cost:n(2),
            unlocked() { return (upg(this.layer, 13))},
        },
        15: {
            title:'F5',
            description: "1e30x pts,Eb4 applies to F(50%)",
            cost:n(4),
            unlocked() { return (upg(this.layer, 14))},
        },
        21: {
            title:'F6',
            description: "1e30x pts,Eb4 applies to C/D at 100% eff,x2 F",
            cost:n(10),
            unlocked() { return (upg(this.layer, 15))},
        },
        22: {
            title:'F7',
            description: "Eb4 x1.1.",
            cost:n(15),
            unlocked() { return (upg(this.layer, 21))},
        },
        23: {
            title:'F8',
            description(){if(player.Z.points.gte(42))return "Ap boosts F,F5 is 100%,Eb4 x1.1.";if(player.Z.points.gte(35))return "Zp boosts F,F5 is 100%,Eb4 x1.1.";return "pts boosts F,F5 is 100%,Eb4 x1.1."},
            cost:n(40),
            effect()  { 
                let ef = player.points.add(10).log(10).div('4e4').add(1)
                if(player.Z.points.gte(42))return layers.A.getAp().add(10);
                if(player.Z.points.gte(35))return layers.Z.getZp().add(10);
                return ef;
            },
            effectDisplay() { return format(this.effect())+"x" },
            unlocked() { return (upg(this.layer, 22))},
        },
        24: {
            title:'F9',
            description: "Ec6 eff x1.5,Ec8 eff x1.1.",
            cost:n(150),
            unlocked() { return (upg(this.layer, 23))},
        },
        25: {
            title:'F10',
            description: "1e40x pts, x5 bulk buy Eb5-7.",
            cost:n(1000),
            unlocked() { return (upg(this.layer, 24) && mil('Z', 12))},
        },
        31: {
            title:'F11',
            description: "new 2 C/D upg.",
            cost:n(2000),
            unlocked() { return (upg(this.layer, 25))},
        },
        32: {
            title:'F12',
            description: "1e111x pts,total F boost itself(^0.1)",
            cost:n(4000),
            effect()  { 
                let exp=n(0.1)
                if (upg('F',33)) exp=exp.add(0.1)
                let ef = player.F.total.add(1).pow(exp)
                return ef;
            },
            effectDisplay() { return format(this.effect())+"x" },
            unlocked() { return (upg(this.layer, 31))},
        },
        33: {
            title:'F13',
            description: "F12 exp +0.1,F boost Bb5",
            cost:n(1e4),
            effect()  { 
                let ef = player.F.total.add(10).log(10).pow(0.25).div(1.5)
                if (upg('F',53)) ef=player.F.total.add(10).log(10).pow(0.28).div(1.35)
                return ef;
            },
            effectDisplay() { return "+"+format(this.effect())+'%' },
            unlocked() { return (upg(this.layer, 32))},
        },
        34: {
            title:'F14',
            description: "1e120x pts, Em exp+0.014",
            cost:n(5e4),
            unlocked() { return (upg(this.layer, 33))},
        },
        35: {
            title:'F15',
            description: "Fc1 eff x1.25,Bb3-4 +5%,Eb4 +8%,cheaper Bb3-5.",
            cost:n('1e10'),
            unlocked() { return (upg(this.layer, 34))},
        },
        41: {
            title:'F16',
            description: "x2 F1,Bb5 +3%",
            cost(){if(mil('Z',15))return n(1e15);return n(2e4)},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (mil(this.layer, 10))},
        },
        42: {
            title:'F17',
            description: "Fd is cheaper",
            cost(){if(mil('Z',15))return n(1e18);return n(2e7)},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 41))},
        },
        43: {
            title:'F18',
            description: "F boost Fd1",
            cost(){if(mil('Z',15))return n(1e21);return n(2e9)},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            effect()  { 
                let ef = player.F.total.add(10).log(10).mul(0.2)
                if (upg('F',63)) ef=ef.pow(1.2)
                return ef;
            },
            effectDisplay() { return format(this.effect())+'x' },
            unlocked() { return (upg(this.layer, 42))},
        },
        44: {
            title:'F19',
            description: "Em boost Fd1",
            cost(){if(mil('Z',15))return n(1e24);return n(5e16)},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            effect()  { 
                let ef = player.E.Em.add(10).log(10).div(80)
                if (upg('F',63)) ef=ef.pow(1.2)
                return ef;
            },
            effectDisplay() { return format(this.effect())+'x' },
            unlocked() { return (upg(this.layer, 43))},
        },
        45: {
            title:'F20',
            description: "x4 F1",
            cost(){if(mil('Z',15))return n(1e27);if(mil('Z',14))return n(1e20);return n(2e30)},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 44))},
        },
        51: {
            title:'F21',
            description: "Ek boost Fd1",
            cost(){if(mil('Z',15))return n(1e29);if(mil('Z',14))return n(1e25);return n(1e34)},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            effect()  { 
                let ef = player.E.Ek.add(10).log(10).div(30)
                return ef;
            },
            effectDisplay() { return format(this.effect())+'x' },
            unlocked() { return (upg(this.layer, 45))},
        },
        52: {
            title:'F22',
            description: "^3 F1 eff,^1.002 pts.",
            cost(){if(mil('Z',14))return n(1e32);return n(1e40)},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 51))},
        },
        53: {
            title:'F23',
            description: "F13 is stronger,unlock a chal.",
            cost(){if(mil('Z',14))return n(1e38);return n(1e43)},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 52))},
        },
        54: {
            title:'F24',
            description: "F1 eff exp is 1",
            cost(){if(mil('Z',14))return n(1e43);return n(1e46)},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 45))},
        },
        55: {
            title:'F25',
            description: "Fd and tickspeed use F instead of F1.",
            cost(){if(mil('Z',14))return n(1e48);return n(1e50)},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 54))},
        },
        61: {
            title:'F26',
            description: "F dim mult per buy+0.1.",
            cost(){if(mil('Z',15))return n('1e90');return n('1e100')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (mil(this.layer,14))},
        },
        62: {
            title:'F27',
            description: "Ek is stronger.",
            cost(){if(mil('Z',15))return n('1e100');return n('1e120')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer,61))},
        },
        63: {
            title:'F28',
            description: "F1 eff exp x1.1,F18-19 ^1.2.",
            cost(){if(mil('Z',15))return n('1e110');return n('1e125')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 62) && mil('Z',14))},
        },
        64: {
            title:'F29',
            description: "F1 boost Fd1",
            cost:n('1e140'),
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            effect()  { 
                let ef = player.F.F1.add(10).log(10).div(1.5)
                return ef;
            },
            effectDisplay() { return format(this.effect())+'x' },
            unlocked() { return (upg(this.layer, 62) && mil('Z',14))},
        },
        65: {
            title:'F30',
            description: "F1 boost Bb1-2,Eb1-3 base,^1.006 pts,F1 eff exp x1.14,F resets nothing.",
            cost(){if(mil('Z',15))return n('1e160');return n('1e180')},
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            effect()  { 
                let ef = player.F.F1.add(10).log(10).div(50).add(1)
                if (mil('Z',15))  ef = player.F.F1.add(10).log(10).add(10).pow(0.25).mul(3).add(1)
                if (mil('Z',23))  ef = player.F.F1.add(10).log(10).add(10).pow(0.25).div(10).add(1)
                if (upg('G',15))  ef=Decimal.pow(ef,1.1)
                if (upg('G',23))  ef=Decimal.pow(ef,upgradeEffect('G',23))
                return ef;
            },
            effectDisplay() { return '+'+format(this.effect(),4) },
            unlocked() { return (upg(this.layer, 64))},
        },
        71: {
            title:'F31',
            description: "F upg boost F dims.<br>(need Gc1).",
            cost:n('1e970'),
            canAfford() {return inChallenge('G',11) && player.F.F1.gte('1e970')}, //
            effect()  { 
                let a=player[this.layer].upgrades.length
                let ef=n(1.075).pow(a)
                if (upg('F',75)) ef=ef.pow(2)
                return ef;          
            },
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (mil(this.layer, 17))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        72: {
            title:'F32',
            description: "tickspeed mult x1.01,log G mults itself.(need Gc1).",
            cost:n('1e1000'),
            canAfford() {return inChallenge('G',11) && player.F.F1.gte('1e1000')}, // 
            effect()  { 
                let ef = player.G.total.add(10).log(10)
                return ef;          
            },
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 71))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        73: {
            title:'F33',
            description: "F1 eff is better,Gb1 mults Fds.(need Gc1).",
            cost:n('1e1234'),
            canAfford() {return inChallenge('G',11) && player.F.F1.gte('1e1234')}, //  
            effect()  { 
                let t = n(gba('G',11))
                let ef=n(1.5).pow(t)
                return ef;          
            },
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 72))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        74: {
            title:'F34',
            description: "Gb2 amt boost its base,Gc1p mults G.(need Gc1).",
            cost:n('1e1342'),
            canAfford() {return inChallenge('G',11) && player.F.F1.gte('1e1342')}, //  
            effect()  { 
                let t=n(gba('G',12))
                let ef1=t.mul(0.06)
                let ef2=player.G.Gc1p.add(10).log(10).div(1.5)
                return [ef1,ef2];          
            },
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 73))},
            effectDisplay() { return 'Gb2:+'+format(this.effect()[0])+'<br> G:x'+format(this.effect()[1]) },
        },
        75: {
            title:'F35',
            description: "Gb3 amt boost its base,F31 ^2,unlock next G chal.(need Gc1).",
            cost(){if(player.Z.points.gte(20))return n('1e2200');if(player.Z.points.gte(19))return n('1e2400');if(player.Z.points.gte(18))return n('1e2500');return n('1e2666')},
            canAfford() {return inChallenge('G',11) && player.F.F1.gte(player.Z.points.gte(20)?'1e2200':player.Z.points.gte(19)?'1e2400':player.Z.points.gte(18)?'1e2500':'1e2666')}, //   
            effect()  { 
                let t = n(gba('G',13))
                let ef=t.mul(0.001)
                if(player.Z.points.gte(20))ef = ef.mul(10)
                return ef;          
            },
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            unlocked() { return (upg(this.layer, 74) && player.Z.points.gte(17))},
            effectDisplay() { return '+'+format(this.effect())},
        },
        81: {
            title:'F36',
            description(){return "F dim mult +0.1,E25 is multiplicative at ^0.01 eff and applies to Eb3"+(player.Z.points.eq(18)?" at a reduced rate":"")+".(need Gc2)"},         
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            cost(){if(player.Z.points.gte(20))return n('1e1230');if(player.Z.points.gte(19))return n('1e1540');return n('1e1800')},
            canAfford() {return inChallenge('G',12) && player.F.F1.gte(player.Z.points.gte(20)?'1e1230':player.Z.points.gte(19)?'1e1540':'1e1800')},
            effect()  { 
                let exp=n(0.01)
                let ef= Decimal.pow(upgradeEffect('E',55),exp)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (upg(this.layer, 75))},
        },
        82: {
            title:'F37',
            description: "Gc1p mults Gb3 base.(need Gc2)",         
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            cost:n('e5600'),
            canAfford() {return inChallenge('G',12) && player.F.F1.gte('1e5600')},
            effect()  { 
                let ef=player.G.Gc1p.add(10).log(10).add(10).log(10).pow(0.1)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (upg(this.layer, 81))},
        },
        83: {
            title:'F38',
            description: "Gc2p eff ^1.5.(need Gc2)",         
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            cost:n('e6900'),
            canAfford() {return inChallenge('G',12) && player.F.F1.gte('1e6900')},
            unlocked() { return (upg(this.layer, 82))},
        },
        84: {
            title:'F39',
            description: "Gc2p mults Gb3 base.(need Gc3)",         
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            cost:n('e317000'),
            canAfford() {return inChallenge('G',21) && player.F.F1.gte('e317000')},
            effect()  { 
                let ef=player.G.Gc2p.add(10).log(10).add(10).log(10).pow(upg('G',44)?0.03:0.02)
                return ef;
            },
            effectDisplay() { return 'x'+format(this.effect()) },
            unlocked() { return (upg(this.layer, 83) && mil('Z',18))},
        },
        85: {
            title:'F40',
            description: "Increase Gc3p gain. Buy max tickboost.(need Gc3)",         
            currencyLocation() {return player[this.layer]}, 
            currencyDisplayName: "F1",
            currencyInternalName: "F1",
            cost:n('e73e6'),
            canAfford() {return inChallenge('G',21) && player.F.F1.gte('e73e6')},
            unlocked() { return (upg(this.layer, 83) && mil('Z',19))},
        },
    },
    challenges:{
        11: {
            name: "Fc1",
            completionLimit: 3,
            challengeDescription: function() {
                return "B/E prod ^0.25. <br> Completion: " +challengeCompletions(this.layer,this.id) + "/3"},
            unlocked() { return (mil("F", 8))},
            goal(){
                let a=[n(mil('Z',13)?'e12800':'e14200'),n(mil('Z',13)?'e13700':'e14300'),n(mil('Z',13)?'e14000':'e15500'),n(0)]
                return a[(challengeCompletions(this.layer,this.id))]
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "Bb3-5 are stronger.",
            rewardEffect() {
                let ef = Decimal.mul(challengeCompletions("F", 11),0.8)
                if (upg('F',35)) ef=Decimal.mul(ef,1.25)
                if (mil('F',12)) ef=Decimal.mul(ef,1.2)
                if (challengeCompletions("F", 11) >= 1)  return ef
                else return n(0)
            },
            rewardDisplay() {return '+'+format(this.rewardEffect())+"%"},
        },
        12: {//
            name: "Fc2",
            completionLimit: 3,
            challengeDescription: function() {
                return "pts exp ^0.8. <br> Completion: " +challengeCompletions("F", 12) + "/3"},
            unlocked() { return (upg("F", 53))},
            goal(){
                let a=[n('ee3'),n('e2e5'),n('e5e5'),n(0)]//edit at v0.6.4
                return a[(challengeCompletions(this.layer,this.id))]
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "B boost Fd1.",
            rewardEffect() {
                let exp = Decimal.mul(challengeCompletions("F", 12),0.06).add(0.08)
                let ef = player.B.points.add(10).log(10).add(1).pow(exp)
                if (challengeCompletions("F", 12) >= 1)  return ef
                else return n(1)
            },
            rewardDisplay() {return 'x'+format(this.rewardEffect())},
        },
    },
    automate(){
        if (player.F.auto1)  {buyBuyable("F",11),buyBuyable("F",12),buyBuyable("F",13),buyBuyable("F",21),
            buyBuyable("F",22),buyBuyable("F",23),buyBuyable("F",31),buyBuyable("F",32)}
        if (player.F.auto2)  buyBuyable("F",101) 
        if (player.G.auto1)  buyBuyable("F",102)
        if (player.G.auto3)  buyBuyable("F",111),buyBuyable("F",112),buyBuyable("F",113),buyBuyable("F",121)
    },
    buyables:{
        11: {
            title: "Fd1", 
            cost(x) {
        if(player.Z.points.gte(37))return Decimal.tetrate(10, x.add(1).slog().mul(tmp.F.scaling).add(1));
        if(player.Z.points.gte(30))return Decimal.pow(10, Decimal.pow(10, x.add(1).log10().pow(tmp.F.scaling)));
                return Decimal.pow(10, x.pow(tmp.F.scaling).mul(tmp.F.scaling)).mul(player.Z.points.gte(19)?1:10)
            },
            canAfford() { let cost = this.cost()
                return player[this.layer][upg('F',55)?"points":"F1"].gte(cost) },
            buy() {
                player.F.fd1 = player.F.fd1.add(1)
                setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let bas = tmp.F.fdbas
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.fdm)

                if (upg('F',43))  ef=Decimal.mul(ef,upgradeEffect('F',43))
                if (upg('F',44))  ef=Decimal.mul(ef,upgradeEffect('F',44))
                if (upg('F',51))  ef=Decimal.mul(ef,upgradeEffect('F',51))
                if (hasChallenge('F',12))  ef=Decimal.mul(ef,challengeEffect('F',12))
                if (upg('F',64))  ef=Decimal.mul(ef,upgradeEffect('F',64))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce F1 \n\
                Need: " + format(this.cost()) + " "+(upg('F',55)?"F":"F1")+" \n\
                Amount: "+ format(player.F.fd1) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { if (gba('F',102).gte(1)||mil('Z',14)) return true
                else return mil('Z',13) },
            style: {'height':'150px'},
        },
        12: {
            title: "Fd2", 
            cost(x) {
        if(player.Z.points.gte(37))return Decimal.tetrate(10, x.add(1).slog().mul(tmp.F.scaling).add(1));
        if(player.Z.points.gte(30))return Decimal.pow(10, Decimal.pow(10, x.add(1).log10().pow(tmp.F.scaling)));
                return Decimal.pow(10, x.pow(tmp.F.scaling).mul(tmp.F.scaling.pow(2))).mul(player.Z.points.gte(19)?1:100)
            },
            canAfford() { return player[this.layer][upg('F',55)?"points":"F1"].gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd2 = player.F.fd2.add(1)
            },
            base(){   let bas = tmp.F.fdbas
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.fdm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce Fd1 \n\
                Need: " + format(this.cost()) + " "+(upg('F',55)?"F":"F1")+" \n\
                Amount: " + format(player.F.fd2) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { if (gba('F',102).gte(1)||mil('Z',14)) return true
                else return (tmp.F.buyables[11].effect.gte(2)) },
            style: {'height':'150px'},
        },
        13: {
            title: "Fd3",  
            cost(x) {
        if(player.Z.points.gte(37))return Decimal.tetrate(10, x.add(1).slog().mul(tmp.F.scaling).add(1));
        if(player.Z.points.gte(30))return Decimal.pow(10, Decimal.pow(10, x.add(1).log10().pow(tmp.F.scaling)));
                return Decimal.pow(10, x.pow(tmp.F.scaling).mul(tmp.F.scaling.pow(3))).mul(player.Z.points.gte(19)?1:1e4)
            },
            canAfford() { return player[this.layer][upg('F',55)?"points":"F1"].gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd3 = player.F.fd3.add(1)
            },
            base(){   let bas = tmp.F.fdbas
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.fdm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce Fd2 \n\
                Need: " + format(this.cost()) + " "+(upg('F',55)?"F":"F1")+" \n\
                Amount: " + format(player.F.fd3) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { if (gba('F',102).gte(1)||mil('Z',14)) return true
                else return (tmp.F.buyables[12].effect.gte(2)) },
            style: {'height':'150px'},
        },
        21: {
            title: "Fd4",  
            cost(x) {
        if(player.Z.points.gte(37))return Decimal.tetrate(10, x.add(1).slog().mul(tmp.F.scaling).add(1));
        if(player.Z.points.gte(30))return Decimal.pow(10, Decimal.pow(10, x.add(1).log10().pow(tmp.F.scaling)));
                return Decimal.pow(10, x.pow(tmp.F.scaling).mul(tmp.F.scaling.pow(4))).mul(player.Z.points.gte(19)?1:1e7)
            },
            canAfford() { return player[this.layer][upg('F',55)?"points":"F1"].gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd4 = player.F.fd4.add(1)
            },
            base(){   let bas = tmp.F.fdbas
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.fdm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce Fd3 \n\
                Need: " + format(this.cost()) + " "+(upg('F',55)?"F":"F1")+" \n\
                Amount: " + format(player.F.fd4) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { if (gba('F',102).gte(1)||mil('Z',14)) return true
                else return (player.F.F1.gte(1e7)) },
            style: {'height':'150px'},
        },
        22: {
            title: "Fd5",  
            cost(x) {
        if(player.Z.points.gte(37))return Decimal.tetrate(10, x.add(1).slog().mul(tmp.F.scaling).add(1));
        if(player.Z.points.gte(30))return Decimal.pow(10, Decimal.pow(10, x.add(1).log10().pow(tmp.F.scaling)));
                return Decimal.pow(10, x.pow(tmp.F.scaling).mul(tmp.F.scaling.pow(5))).mul(player.Z.points.gte(19)?1:1e11)
            },
            canAfford() { return player[this.layer][upg('F',55)?"points":"F1"].gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd5 = player.F.fd5.add(1)
            },
            base(){   let bas = tmp.F.fdbas
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.fdm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce Fd4 \n\
                Need: " + format(this.cost()) + " "+(upg('F',55)?"F":"F1")+" \n\
                Amount: " + format(player.F.fd5) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { if (gba('F',102).gte(1)||mil('Z',14)) return true
                else return (player.F.F1.gte(1e11)) },
            style: {'height':'150px'},
        },
        23: {
            title: "Fd6",   
            cost(x) {
        if(player.Z.points.gte(37))return Decimal.tetrate(10, x.add(1).slog().mul(tmp.F.scaling).add(1));
        if(player.Z.points.gte(30))return Decimal.pow(10, Decimal.pow(10, x.add(1).log10().pow(tmp.F.scaling)));
                return Decimal.pow(10, x.pow(tmp.F.scaling).mul(tmp.F.scaling.pow(6))).mul(player.Z.points.gte(19)?1:1e16)
            },
            canAfford() { return player[this.layer][upg('F',55)?"points":"F1"].gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd6 = player.F.fd6.add(1)
            },
            base(){   let bas = tmp.F.fdbas
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.fdm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce Fd5 \n\
                Need: " + format(this.cost()) + " "+(upg('F',55)?"F":"F1")+" \n\
                Amount: " + format(player.F.fd6) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { if (gba('F',102).gte(1)||mil('Z',14)) return true
                else return (player.F.F1.gte(1e16)) },
            style: {'height':'150px'},
        },
        31: {
            title: "Fd7",
            cost(x) {
        if(player.Z.points.gte(37))return Decimal.tetrate(10, x.add(1).slog().mul(tmp.F.scaling).add(1));
        if(player.Z.points.gte(30))return Decimal.pow(10, Decimal.pow(10, x.add(1).log10().pow(tmp.F.scaling)));
                return Decimal.pow(10, x.pow(tmp.F.scaling).mul(tmp.F.scaling.pow(7))).mul(player.Z.points.gte(19)?1:1e22)
            },
            canAfford() { return player[this.layer][upg('F',55)?"points":"F1"].gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd7 = player.F.fd7.add(1)
            },
            base(){   let bas = tmp.F.fdbas
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.fdm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce Fd6 \n\
                Need: " + format(this.cost()) + " "+(upg('F',55)?"F":"F1")+" \n\
                Amount: " + format(player.F.fd7) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { if (gba('F',102).gte(1)||mil('Z',14)) return true
                else return (player.F.F1.gte(1e22)) },
            style: {'height':'150px'},
        },
        32: {
            title: "Fd8", 
            cost(x) {
        if(player.Z.points.gte(37))return Decimal.tetrate(10, x.add(1).slog().mul(tmp.F.scaling).add(1));
        if(player.Z.points.gte(30))return Decimal.pow(10, Decimal.pow(10, x.add(1).log10().pow(tmp.F.scaling)));
                return Decimal.pow(10, x.pow(tmp.F.scaling).mul(tmp.F.scaling.pow(8))).mul(player.Z.points.gte(19)?1:1e29)
            },
            canAfford() { return player[this.layer][upg('F',55)?"points":"F1"].gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.fd8 = player.F.fd8.add(1)
            },
            base(){   let bas = tmp.F.fdbas
                if (player.Z.points.lt(23) && challengeCompletions("G", 21)>=3) bas=Decimal.mul(bas,tmp.G.gc3ef)
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.fdm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce Fd7 \n\
                Need: " + format(this.cost()) + " "+(upg('F',55)?"F":"F1")+" \n\
                Amount: " + format(player.F.fd8) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { if (gba('F',102).gte(1)||mil('Z',14)) return true
                else return (player.F.F1.gte(1e29)) },
            style: {'height':'150px'},
        },
        101: {
            title: "tickspeed",
            cost(x) {
        if(player.Z.points.gte(37))return Decimal.tetrate(10, x.add(1).slog().mul(tmp.F.scaling).add(1));
        if(player.Z.points.gte(30))return Decimal.pow(10, Decimal.pow(10, x.add(1).log10().pow(tmp.F.scaling)));
                return Decimal.pow(10, x.pow(tmp.F.scaling)).mul(player.Z.points.gte(19)?1:1e10)
            },
            canAfford() { return player[this.layer][upg('F',55)?"points":"F1"].gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
            base(){   let bas = tmp.F.tick
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "boost all FDs \n\
                Need: " + format(this.cost()) + " "+(upg('F',55)?"F":"F1")+" \n\
                Amount: "+ format(player[this.layer].buyables[this.id])  +" \n\
                Effect: x" + format(this.effect())
            },
            unlocked() { if (gba('F',102).gte(1)) return true
                else return mil('F',11) },
            style: {'height':'150px'},
        },
        102: {
            title: "tickboost", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                if(player.Z.points.gte(30))return x.add(1)
                if(player.Z.points.gte(21))return x.add(1).pow(2)
                return x.pow(2).mul(mil('Z',15)?5:8).add(mil('Z',15)?10:12)
            },
            canAfford() { return player[this.layer].buyables[32].gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
            if (!mil('G',1))
                {let st=n(10)
                if (mil('F',14)) st=n('1e6')
                if (mil('F',15)) st=n('1e30')
                player.F.F1=st
                player.F.fd1=player.F.fd2=player.F.fd3=player.F.fd4=player.F.fd5=player.F.fd6=player.F.fd7=n(0)
}
            },
            display() { // Everything else displayed in the buyable button after the title
                return "reset for a tickboost <br>boost tickspeed mult \n\
                Need: " + format(this.cost()) + " bought Fd8 \n\
                Amount: "+ format( player[this.layer].buyables[this.id]) },
            unlocked() { return mil('F',13) },
            style: {'height':'150px'},
        },
        111: {
            title: "F2d1", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(10,n(1.01).pow(x).mul(player.Z.points.gte(23)?1:43300000))
                return cost},
            canAfford() { let cost = this.cost()
                return player.G.points.gte(cost) },
            buy() {
        setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.f2d1 = player.F.f2d1.add(1)
    },            
            base(){   let bas = n(player.Z.points.gte(23)?1.1:1.8)
                return bas},
            effect(x) { 
                let ef = Decimal.pow(this.base(),x).max(1)
                ef=Decimal.mul(ef,tmp.F.f2dm)
                return ef},
            display() { 
                return "produce F2 \n\
                Need: " + format(this.cost()) + " G \n\
                Amount: "+ format(player.F.f2d1) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { return player.Z.points.gte(22) },
            style() {if (this.canAfford()) return {'height':'150px','background-color': '#C037A5' }
                else return{'height':'150px'}},
        },
        112: {
            title: "F2d2", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(10,n(player.Z.points.gte(23)?1.01:1.05).pow(x).mul(player.Z.points.gte(24)?1e4:4e8).add(player.Z.points.gte(23)?0:'1.6e9'))//x.pow(1.5)
                return cost},
            canAfford() { let cost = this.cost()
                return player.G.points.gte(cost) },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.f2d2 = player.F.f2d2.add(1)},
            base(){   let bas = n(player.Z.points.gte(24)?1.2:player.Z.points.gte(23)?2:25)
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.f2dm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce F2d1 \n\
                Need: " + format(this.cost()) + " G \n\
                Amount: "+ format(player.F.f2d2) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { return player.Z.points.gte(22) },
            //style: {'height':'150px','color':'C037A5'},
            style() {if (this.canAfford()) return {'height':'150px','background-color': '#C037A5' }
                else return{'height':'150px'}},
        },
        113: {
            title: "F2d3", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(10,n(player.Z.points.gte(24)?1.01:1.05).pow(x).mul(player.Z.points.gte(24)?1e8:6e8).add(player.Z.points.gte(24)?0:'3.94e10'))
                return cost},
            canAfford() { let cost = this.cost()
                return player.G.points.gte(cost) },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.f2d3 = player.F.f2d3.add(1)},
            base(){   let bas = n(player.Z.points.gte(24)?1.3:20)
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.f2dm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce F2d2 \n\
                Need: " + format(this.cost()) + " G \n\
                Amount: "+ format(player.F.f2d3) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { return upg('G',52) },
            style() {if (this.canAfford()) return {'height':'150px','background-color': '#C037A5' }
                else return{'height':'150px'}},
        },
        121: {
            title: "F2d4", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(10,n(player.Z.points.gte(24)?1.01:1.05).pow(x).mul(player.Z.points.gte(24)?1e12:1e9).add(player.Z.points.gte(24)?0:'9.99e11'))
                return cost},
            canAfford() { let cost = this.cost()
                return player.G.points.gte(cost) },
            buy() {setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
                player.F.f2d4 = player.F.f2d4.add(1)},
            base(){   let bas = n(player.Z.points.gte(24)?1.4:40)
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                ef=Decimal.mul(ef,tmp.F.f2dm)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "produce F2d3 \n\
                Need: " + format(this.cost()) + " G \n\
                Amount: "+ format(player.F.f2d4) + "(" + format(player[this.layer].buyables[this.id])  +") \n\
                Effect: x" + format(this.effect())},
            unlocked() { return upg('G',52) },
            style() {if (this.canAfford()) return {'height':'150px','background-color': '#C037A5' }
                else return{'height':'150px'}},        
        },
    },
    tick(){let bas=n(1.05)
        let e=n(1.08)
        if(player.Z.points.gte(18)){
            bas = n(1.05).add(gba('F',102).div(player.Z.points.gte(21)?110:50));
            if(upg('G',33)) bas=bas.add(0.005)
            if(upg('F',72))  bas=bas.mul(1.01)
            if (hasChallenge('G',12))  bas=bas.mul(challengeEffect('G',12))
        }else{
            let ef=[n(1.065),n(1.08),e.pow(gba('F',102)).mul(0.3).add(0.73)]
            if(gba('F',102).gte(1)) bas=ef[n(gba('F',102)).sub(1).min(2)]
            if(gba('F',102).gte(10) && player.Z.points.gte(17)) bas=e.pow(gba('F',102).sqrt()).mul(0.1).add(1.25)
            if(upg('G',33)) bas=bas.add(0.005)
            if(upg('F',72))  bas=Decimal.mul(bas.sub(1),1.01).add(1)
            if (hasChallenge('G',12))  bas=Decimal.mul(bas.sub(1),challengeEffect('G',12)).add(1)
        }
        if(upg('G',54)) bas=Decimal.mul(bas.sub(1),upgradeEffect('G',54)).add(1)
        // if(mil('G',14)) bas=Decimal.pow(bas,tmp.G.gsef)
        let expc4=n(1.5)
        if(upg('G',52))  expc4=expc4.add(0.5)
        if (inChallenge('G',22)) bas=n(1);

        return bas},
    F1effect() {
        ef = n(1)
        if (mil('Z',13))  ef=ef.mul(buyableEffect("F", 11))
        if (upg('F',41))  ef=ef.mul(2)
        if(mil('Z',14)) ef = ef.mul(4);
        if(mil('Z',15)) ef = ef.mul(5);
        if(mil('Z',16)) ef = ef.mul(6);
        if (upg('F',45))  ef=ef.mul(4)
        if (mil('F',14))  ef=ef.mul(10)
        if (mil('I',0))  ef=ef.pow(1.05).mul(1e10)
        if (mil('I',1))  ef=ef.pow(1.05).mul(1e10)
        if (gcs('I',31))  ef=ef.pow(1.12)
        if (mil('I',3))  ef=ef.pow(buyableEffect('I',11))
        return ef;
    },
    F2effect() {
        ef=buyableEffect("F", 111)
        return ef;
    },
    fdm(){
        ef = n(1)
        ef=Decimal.mul(ef,buyableEffect('F',101))
        if (upg('G',11))  ef=Decimal.mul(ef,2)
        if (upg('G',21))  ef=Decimal.mul(ef,upgradeEffect('G',21))
        ef=Decimal.mul(ef,buyableEffect('G',12))
        if (hasChallenge("G", 11))  ef = Decimal.mul(ef,challengeEffect('G',11))
        if (upg('F',71))  ef=Decimal.mul(ef,upgradeEffect('F',71))
        if (upg('F',73))  ef=Decimal.mul(ef,upgradeEffect('F',73))
        if (challengeCompletions("G", 11)>=3) ef=Decimal.mul(ef,tmp.G.gc1ef)
        return ef;
    },
    f2dm(){
        ef = n(1)
        if (upg('G',51))  ef=Decimal.mul(ef,upgradeEffect('G',51))
        if (upg('G',53))  ef=Decimal.mul(ef,upgradeEffect('G',53))
        return ef;
    },
    fdbas(){
        ef=n(2)
        if (upg('F',61)) ef=Decimal.add(ef,0.1)
        if (mil('F',15)) ef=Decimal.add(ef,0.1)
        if (upg('G',12)) ef=Decimal.add(ef,0.1)
        if (upg('G',24)) ef=Decimal.add(ef,0.1)
        if (upg('F',81)) ef=Decimal.add(ef,0.1)
        if (hasChallenge('G',21)) ef=Decimal.add(ef,challengeEffect('G',21))
        ef=ef.add(tmp.G.gc4ef)
    if(player.Z.points.gte(23)) ef=Decimal.mul(ef,tmp.G.gc3ef)
        if(gcs('I',33)) ef=ef.mul(1.1)
        if (hasChallenge('G',22)) ef=ef.mul(challengeEffect('G',22))
        if(inChallenge('G',12)) ef=ef.pow(0.5)
        return ef
    },
    scaling(){
    if (player.Z.points.gte(50))return n(1.02);
    if (player.Z.points.gte(49))return n(1.019);
    if (player.Z.points.gte(48))return n(1.018);
    if (player.Z.points.gte(47))return n(1.016);
    if (player.Z.points.gte(46))return n(1.014);
    if (player.Z.points.gte(45))return n(1.012);
    if (player.Z.points.gte(41))return n(1.01);
    if (player.Z.points.gte(40))return n(1.002);
    if (player.Z.points.gte(37))return n(1.001);
    if (player.Z.points.gte(33))return n(1.06);
    if (player.Z.points.gte(30))return Decimal.pow(1.01,player.Z.points.sub(28).min(3));
    if (player.Z.points.gte(29))return n(10);
        ef = n(1.25)
        if (upg('F',42))  ef=ef.sub(0.01)
        if (upg('G',13))  ef=ef.sub(0.01)
        if (upg('G',22))  ef=ef.sub(0.005)
        if (upg('G',35))  ef=ef.sub(0.005)
        if (player.Z.points.gte(20)) ef = ef.sub(0.02).mul(Decimal.pow(1.05,player.Z.points.sub(19)));
        if(inChallenge('G',21)) ef = ef.pow(1.02).mul(1.02)
        return ef;
    },
    F1f() {
        let exp=n(mil('Z',15)?0.25:0.15)  
        if (upg('F',52))  exp=Decimal.mul(exp,3)
        if (upg('F',54))  exp=n(1)
        if (upg('F',63))  exp=Decimal.mul(exp,1.1)
        if (upg('F',65))  exp=Decimal.mul(exp,1.25/1.1)
        if (upg('F',73))  exp=Decimal.mul(exp,1.3/1.25)
        let ef=player.F.F1.max(1).pow(exp)
        if (upg('G',31) && player.Z.points.lt(21) && player.F.F1.gte('1e1200'))ef = ef.mul(player.F.F1.div('1e1200').pow(player.F.F1.log10().log10().div(50)));
        if (upg('G',31) && player.Z.points.gte(21))ef = ef.pow(player.F.F1.max('1e1200').log10().div(12).log10().mul(5).log10());
        if (player.Z.points.gte(22))  ef = ef.pow(tmp.F.F2f)
        if (player.Z.points.gte(20)) ef = Decimal.pow(10, ef.max(1).log10().pow(Decimal.pow(1.05,player.Z.points.sub(19))));
        return ef
    },
    F1f2() {
        let exp=n(mil('Z',15)?0.25:0.15)  
        if (upg('F',52))  exp=Decimal.mul(exp,3)
        if (upg('F',54))  exp=n(1)
        if (upg('F',63))  exp=Decimal.mul(exp,1.1)
        if (upg('F',65))  exp=Decimal.mul(exp,1.25/1.1)
        if (upg('F',73))  exp=Decimal.mul(exp,1.3/1.25)
        let ef=player.F.F1.add(10).log10();
        if (upg('G',31) && ef.gte(1200))ef = ef.pow(1.5).div(1200**0.5);
    if ((!upg('G',64) || player.Z.points.lt(30)) && player.Z.points.lt(31))ef = Decimal.pow(10,ef.log10().div(5).pow(0.99)).max(ef.pow(0.05));
    ef = ef.pow(exp);
        if (player.Z.points.gte(37)) ef = Decimal.tetrate(10, ef.add(10).slog().add(layers.F.F2f()));else if (player.Z.points.gte(22))  ef = ef.pow(tmp.F.F2f);
        return ef;
    },
    F1f3() {
        let exp=n(mil('Z',15)?0.25:0.15)  
        if (upg('F',52))  exp=Decimal.mul(exp,3)
        if (upg('F',54))  exp=n(1)
        if (upg('F',63))  exp=Decimal.mul(exp,1.1)
        if (upg('F',65))  exp=Decimal.mul(exp,1.25/1.1)
        if (upg('F',73))  exp=Decimal.mul(exp,1.3/1.25)
        let ef=player.F.F1.add(1).slog();
        if (upg('G',31) && ef.gte(2.4884352529959806))ef = ef.pow(1.5).div(2.4884352529959806**0.5);
        ef = ef.pow(exp.div(2)).div(1000);
        return ef;
    },
    F2f() {
        let ef=player.F.F2.max(1).log(10).add(1).log(10).add(1).pow(0.1).sub(1).div(10).add(1);
        if (player.Z.points.gte(24)) ef=player.F.F2.max(1).log(10).add(1).log(10).div(10).add(1);
        if (player.Z.points.gte(28)) ef=player.F.F2.max(1).log(10).add(1).log(10).div(10).add(1).pow(2);
        if (player.Z.points.gte(30)) ef=player.F.F2.max(1).log(10).add(1).log(10).add(1).pow(2);
    if (upg('G',64) && player.Z.points.gte(31)) ef = ef.mul(player.F.F2.add(1).log(10).add(1).pow(player.Z.points.gte(32)?0.06:0.04));
    if (player.Z.points.gte(33)) ef = player.F.F2.add(10).log(10).pow(0.1);
    if (player.Z.points.gte(37)) ef = player.F.F2.add(10).slog().mul(0.002);
    if (player.Z.points.gte(40)) ef = ef.mul(2.5);
    if (player.Z.points.gte(41)) ef = ef.div(5);
        return ef
    },
    update(diff) {
        if (mil('Z',13))  player.F.F1 = player.F.F1.add(tmp.F.F1effect.mul(player.F.fd1).pow(inChallenge('G', 11)?0.9:1).mul(diff))
        if (tmp.F.buyables[11].effect.gte(1)) player.F.fd1 = player.F.fd1.add(tmp.F.buyables[12].effect.mul(player.F.fd2).mul(diff))
        if (tmp.F.buyables[12].effect.gte(1)) player.F.fd2 = player.F.fd2.add(tmp.F.buyables[13].effect.mul(player.F.fd3).mul(diff))
        if (tmp.F.buyables[13].effect.gte(1)) player.F.fd3 = player.F.fd3.add(tmp.F.buyables[21].effect.mul(player.F.fd4).mul(diff))
        if (tmp.F.buyables[21].effect.gte(1)) player.F.fd4 = player.F.fd4.add(tmp.F.buyables[22].effect.mul(player.F.fd5).mul(diff))
        if (tmp.F.buyables[22].effect.gte(1)) player.F.fd5 = player.F.fd5.add(tmp.F.buyables[23].effect.mul(player.F.fd6).mul(diff))
        if (tmp.F.buyables[23].effect.gte(1)) player.F.fd6 = player.F.fd6.add(tmp.F.buyables[31].effect.mul(player.F.fd7).mul(diff))
        if (tmp.F.buyables[31].effect.gte(1)) player.F.fd7 = player.F.fd7.add(tmp.F.buyables[32].effect.mul(player.F.fd8).mul(diff))
        if (upg("G",51)) player.F.fd8 = player.F.fd8.add(player.G.Gc1p.mul(diff).mul(upg("G",52)?buyableEffect('F',101):1))
        if (player.Z.points.gte(22))  player.F.F2 = player.F.F2.add(tmp.F.F2effect.mul(player.F.f2d1).mul(diff))
        if (tmp.F.buyables[111].effect.gte(1)) player.F.f2d1 = player.F.f2d1.add(tmp.F.buyables[112].effect.mul(player.F.f2d2).mul(diff))
        if (tmp.F.buyables[112].effect.gte(1)) player.F.f2d2 = player.F.f2d2.add(tmp.F.buyables[113].effect.mul(player.F.f2d3).mul(diff))
        if (tmp.F.buyables[113].effect.gte(1)) player.F.f2d3 = player.F.f2d3.add(tmp.F.buyables[121].effect.mul(player.F.f2d4).mul(diff))
    },
})
