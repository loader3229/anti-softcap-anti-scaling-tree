addLayer("Z", {
    name: "Z", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Z", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        best: new Decimal(0),

    }},
    color: "#FFFFFF",
    requires(){ if(hasMilestone("Z",13))return new Decimal(1); return new Decimal(1e100);}, // Can be a funct}ion that takes requirement increases into account
    resource: "Z", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    base(){
        return new Decimal([1e100,1e150,1e175,1e200,1e225,1e260,"1e440","1e600","1e1250","1e2500","1e4500","e9e3","e3e4","e5e4","e4e5","ee6","e5e6","e2e7","e19e7","e27e8","e124e11","ee17","ee24","e18e26","e4e33","ee9990","ee9999999990","eee24","eee70","eee350","eee17000","eeee100","eeee1000","eeee50000","eeeee6","eeeee10","eeeee20","eeeee30","eeeee174","eeeee2e3","10^^10"][player.Z.points.toNumber()]);
    },
    exponent: n(1), // Prestige currency exponent
    row: "side", // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "z", description: "Z: Reset for Z points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        ["display-text",function(){if(player.Z.points.gte(25))return "You have "+format(layers.Z.getZp())+" Zp (based on points), which are boosting points by "+format(upgradeEffect("A",15))+"x (A5 effect)";return "";}],
    "clickables",
    "milestones"

    ],
    layerShown(){return true},
    doReset(layer){
        if (layer=="Z") {
            layerDataReset("A");
            layerDataReset("B");
            layerDataReset("C");
            layerDataReset("D");
            layerDataReset("E");
            layerDataReset("F");
            layerDataReset("G");
            layerDataReset("H");
            if(player.Z.points.gte(4))player.A.challenges[11]=1;
            if(player.Z.points.gte(4))player.A.challenges[12]=1;
            if(player.Z.points.gte(4))player.A.challenges[21]=1;
            if(player.Z.points.gte(4))player.A.challenges[22]=1;
            if(player.Z.points.gte(4))player.A.challenges[31]=1;
            if(player.Z.points.gte(4))player.A.challenges[32]=1;
            if(player.Z.points.gte(8))player.A.challenges[41]=5;
            if(player.Z.points.gte(5))player.C.challenges[11]=1;
            if(player.Z.points.gte(5))player.C.challenges[12]=1;
            if(player.Z.points.gte(11))player.E.challenges[11]=3;
            if(player.Z.points.gte(11))player.E.challenges[12]=3;
            if(player.Z.points.gte(12))player.E.challenges[21]=3;
            if(player.Z.points.gte(12))player.E.challenges[22]=3;
            if(player.Z.points.gte(13))player.E.challenges[31]=5;
            if(player.Z.points.gte(13))player.E.challenges[32]=5;
            if(player.Z.points.gte(14))player.E.challenges[41]=5;
            if(player.Z.points.gte(14))player.E.challenges[42]=5;
            if(player.Z.points.gte(20))player.F.challenges[11]=3;
            if(player.Z.points.gte(20))player.F.challenges[12]=3;
            if(player.Z.points.gte(21))player.E.challenges[11]=6;
            if(player.Z.points.gte(21))player.E.challenges[12]=6;
            if(player.Z.points.gte(21))player.E.challenges[21]=6;
            if(player.Z.points.gte(21))player.E.challenges[22]=6;
            if(player.Z.points.gte(21))player.E.challenges[31]=6;
            if(player.Z.points.gte(21))player.E.challenges[32]=6;
            if(player.Z.points.gte(21))player.E.challenges[41]=6;
            if(player.Z.points.gte(21))player.E.challenges[42]=6;
            if(player.Z.points.gte(26))player.G.challenges[11]=5;
            if(player.Z.points.gte(26))player.G.challenges[12]=5;
            if(player.Z.points.gte(27))player.G.challenges[21]=5;
            if(player.Z.points.gte(27))player.G.challenges[22]=5;
            if(player.Z.points.gte(6))player.A.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65];
            if(player.Z.points.gte(7))player.B.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65, 71, 72, 73, 74, 75, 81, 82];
            if(player.Z.points.gte(14))player.C.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42];
            if(player.Z.points.gte(15))player.D.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52];
            if(player.Z.points.gte(13))player.F.upgrades=[11];
            if(player.Z.points.gte(16))player.F.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 55];
            if(player.Z.points.gte(18))player.F.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65];
            if(player.Z.points.gte(24))player.F.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65, 71, 72, 73, 74, 75, 81, 82, 83, 84, 85];
            if(player.Z.points.gte(23))player.G.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25];
            if(player.Z.points.gte(29))player.G.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35];
            if(player.Z.points.gte(30))player.C.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55];
            if(player.Z.points.gte(30))player.D.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55];
            if(player.Z.points.gte(30))player.G.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55];
            if(player.Z.points.gte(32))player.B.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65, 71, 72, 73, 74, 75, 81, 82, 83, 84, 85];
            if(player.Z.points.gte(36))player.G.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65];
            if(player.Z.points.gte(37))player.G.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65, 71, 72, 73, 74, 75];
            if(player.Z.points.gte(38))player.G.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65, 71, 72, 73, 74, 75, 81, 82, 83, 84, 85];
            if(player.Z.points.gte(39))player.G.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65, 71, 72, 73, 74, 75, 81, 82, 83, 84, 85, 91, 92, 93, 94, 95];
            if(player.Z.points.gte(40))player.G.upgrades=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65, 71, 72, 73, 74, 75, 81, 82, 83, 84, 85, 91, 92, 93, 94, 95, 101, 102, 103, 104, 105];
            if(player.Z.points.gte(10))player.B.milestones=['0','1','2','3','4','5','6','7'];
            if(player.Z.points.gte(10))player.C.milestones=['0','1','2','3'];
            if(player.Z.points.gte(12))player.D.milestones=['0','1','2','3','4'];
            if(player.Z.points.gte(13))player.E.milestones=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
            if(player.Z.points.gte(18))player.F.milestones=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18'];
            if(player.Z.points.gte(22))player.G.milestones=['0','1','2','3','4','5','6'];
            if(player.Z.points.gte(31))player.G.milestones=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17'];
            if(player.Z.points.gte(39))player.G.milestones=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'];
            if(player.Z.points.gte(40))player.G.milestones=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];
            if(player.Z.points.gte(37))player.H.milestones=['0','1'];
            player.points=new Decimal(10);
            for(let i=0;i<10;i++)updateTemp();
        }
    },
    update(){
        player.Z.best=player.Z.best.floor();
        if(player.Z.points.gte(9)){
            let effective_B = player.B.points.add(1).mul(10);
            if (hasMilestone('B',1))effective_B=effective_B.mul(upgradeEffect('B',61));
                if (hasChallenge('E',31))effective_B=effective_B.mul(challengeEffect('E',31))
            if(player.Z.points.gte(11))effective_B=effective_B.mul(tmp.E.ekf);
            player.B.buyables[11]=player.B.buyables[11].max(effective_B.log(player.Z.points.gte(24)?2.5:hasUpgrade('E',73)?2.6:hasUpgrade('E',43)?2.7:2.8).max(0).root(1.1).ceil().max(0));
            player.B.buyables[12]=player.B.buyables[12].max(effective_B.log(player.Z.points.gte(24)?2.5:hasUpgrade('E',73)?7:hasUpgrade('E',43)?7.5:8).max(0).root(1.1).ceil().max(0));
            player.B.buyables[21]=player.B.buyables[21].max(effective_B.log(player.Z.points.gte(24)?2.5:player.Z.points.gte(22)?2.6:hasUpgrade('F',35)?3.6:9).max(0).root(1.1).ceil().max(0));
            player.B.buyables[22]=player.B.buyables[22].max(effective_B.log(player.Z.points.gte(24)?2.5:player.Z.points.gte(22)?2.6:hasUpgrade('F',35)?4.9:10).max(0).root(1.1).ceil().max(0));
            player.B.buyables[23]=player.B.buyables[23].max(effective_B.log(player.Z.points.gte(24)?2.5:hasUpgrade('F',35)?700:hasUpgrade('D',44)?800:hasUpgrade('E',62)?900:1000).max(0).root(player.Z.points.gte(24)?1.1:1.2).ceil().max(0));
        }
        if(player.Z.points.gte(14)){
            let effective_E = player.E.points.add(1);
            if (hasChallenge('E',41))effective_E=effective_E.mul(challengeEffect('E',41));
            player.E.buyables[11]=player.E.buyables[11].max(effective_E.div(hasUpgrade('E',54)?1:1000).log(2).max(0).root(1.1).ceil().max(0));
            player.E.buyables[12]=player.E.buyables[12].max(effective_E.div(hasUpgrade('E',54)?1:1000).log(3).max(0).root(1.1).ceil().max(0));
            player.E.buyables[13]=player.E.buyables[13].max(effective_E.div(hasUpgrade('E',54)?1:40000).log(5).max(0).root(1.1).ceil().max(0));
            player.E.buyables[21]=player.E.buyables[21].max(effective_E.div(hasUpgrade('E',94)?1:1e10).log(25).max(0).root(1.1).ceil().max(0));
            player.E.buyables[31]=player.E.buyables[31].max(player.E.points.add(1).log(2).max(0).root(1.2).ceil().max(0));
            player.E.buyables[32]=player.E.buyables[32].max(player.E.points.add(1).log(5).max(0).root(1.2).ceil().max(0));
            player.E.buyables[33]=player.E.buyables[33].max(player.E.points.add(1).log(hasUpgrade("E",93)?9:10).max(0).root(1.2).ceil().max(0));
            player.E.buyables[41]=player.E.buyables[41].max(player.E.points.add(1).div(1e24).log(10).max(0).root(1.2).ceil().max(0));        player.E.buyables[42]=player.E.buyables[42].max(player.E.points.add(1).div(1e40).log(10).max(0).root(1.2).ceil().max(0));    player.E.buyables[22]=player.E.buyables[22].max(player.E.points.add(1).div('1e330').log(1e6).max(0).root(1.5).ceil().max(0));

        }
        if((player.Z.points.gte(17) || hasMilestone('G',3)) && player.Z.points.lt(30)){
            player.F.fd1=player.F.fd1.max(player.F.buyables[11]=player.F.buyables[11].max(player.F.points.div(player.Z.points.gte(19)?1:10).max(1).log(10).max(0).div(layers.F.scaling().pow(1)).root(layers.F.scaling()).ceil().max(0)));
            player.F.fd2=player.F.fd2.max(player.F.buyables[12]=player.F.buyables[12].max(player.F.points.div(player.Z.points.gte(19)?1:100).max(1).log(10).max(0).div(layers.F.scaling().pow(2)).root(layers.F.scaling()).ceil().max(0)));
            player.F.fd3=player.F.fd3.max(player.F.buyables[13]=player.F.buyables[13].max(player.F.points.div(player.Z.points.gte(19)?1:1e4).max(1).log(10).max(0).div(layers.F.scaling().pow(3)).root(layers.F.scaling()).ceil().max(0)));
            player.F.fd4=player.F.fd4.max(player.F.buyables[21]=player.F.buyables[21].max(player.F.points.div(player.Z.points.gte(19)?1:1e7).max(1).log(10).max(0).div(layers.F.scaling().pow(4)).root(layers.F.scaling()).ceil().max(0)));
            player.F.fd5=player.F.fd5.max(player.F.buyables[22]=player.F.buyables[22].max(player.F.points.div(player.Z.points.gte(19)?1:1e11).max(1).log(10).max(0).div(layers.F.scaling().pow(5)).root(layers.F.scaling()).ceil().max(0)));
            player.F.fd6=player.F.fd6.max(player.F.buyables[23]=player.F.buyables[23].max(player.F.points.div(player.Z.points.gte(19)?1:1e16).max(1).log(10).max(0).div(layers.F.scaling().pow(6)).root(layers.F.scaling()).ceil().max(0)));
            player.F.fd7=player.F.fd7.max(player.F.buyables[31]=player.F.buyables[31].max(player.F.points.div(player.Z.points.gte(19)?1:1e22).max(1).log(10).max(0).div(layers.F.scaling().pow(7)).root(layers.F.scaling()).ceil().max(0)));
            player.F.fd8=player.F.fd8.max(player.F.buyables[32]=player.F.buyables[32].max(player.F.points.div(player.Z.points.gte(19)?1:1e29).max(1).log(10).max(0).div(layers.F.scaling().pow(8)).root(layers.F.scaling()).ceil().max(0)));
player.F.buyables[101]=player.F.buyables[101].max(player.F.points.div(player.Z.points.gte(19)?1:1e10).max(1).log(10).max(0).root(layers.F.scaling()).ceil().max(0))

        }
        if(player.Z.points.gte(20)){
            player.G.buyables[11]=player.G.buyables[11].max(player.G.points.add(1).log(10).max(0).root(1.1).ceil().max(0));
            player.G.buyables[12]=player.G.buyables[12].max(player.G.points.add(1).log(100).max(0).root(1.2).ceil().max(0));
        }
        if((player.Z.points.gte(21) || hasUpgrade('F',85)) && player.Z.points.lt(30)){
            player.F.buyables[102]=player.F.buyables[102].max(player.F.buyables[32].div(player.Z.points.gte(21)?1:5).sqrt().floor());
        }
        if(player.Z.points.gte(23) || hasMilestone('G',10)){
            player.F.f2d1 = player.F.f2d1.max(player.F.buyables[111]=player.F.buyables[111].max(player.G.points.add(1).log10().max(1).div(player.Z.points.gte(23)?1:43300000).log(1.01).ceil().max(0)));
        }
        if(player.Z.points.gte(23)){
            player.F.f2d2 = player.F.f2d2.max(player.F.buyables[112]=player.F.buyables[112].max(player.G.points.add(1).log10().max(1).div(player.Z.points.gte(24)?1e4:4e8).log(1.01).ceil().max(0)));
            player.G.buyables[13] = player.G.buyables[13].max(player.G.points.add(1).log10().max(1).log(2).max(0));
        }
        if(player.Z.points.gte(24) && upg('G',52)){
            player.F.f2d3 = player.F.f2d3.max(player.F.buyables[113]=player.F.buyables[113].max(player.G.points.add(1).log10().max(1).div(1e8).log(1.01).ceil().max(0)));
            player.F.f2d4 = player.F.f2d4.max(player.F.buyables[121]=player.F.buyables[121].max(player.G.points.add(1).log10().max(1).div(1e12).log(1.01).ceil().max(0)));
        }
        if(player.Z.points.gte(30)){
            let target=Decimal.pow(10, player.F.points.add(10).log10().log10().root(layers.F.scaling()));
            if(player.Z.points.gte(37))target=Decimal.tetrate(10, player.F.points.add(1).slog().sub(1).div(layers.F.scaling()).max(0));
            player.F.fd1=player.F.fd1.max(player.F.buyables[11]=player.F.buyables[11].max(target));
            player.F.fd2=player.F.fd2.max(player.F.buyables[12]=player.F.buyables[12].max(target));
            player.F.fd3=player.F.fd3.max(player.F.buyables[13]=player.F.buyables[13].max(target));
            player.F.fd4=player.F.fd4.max(player.F.buyables[21]=player.F.buyables[21].max(target));
            player.F.fd5=player.F.fd5.max(player.F.buyables[22]=player.F.buyables[22].max(target));
            player.F.fd6=player.F.fd6.max(player.F.buyables[23]=player.F.buyables[23].max(target));
            player.F.fd7=player.F.fd7.max(player.F.buyables[31]=player.F.buyables[31].max(target));
            player.F.fd8=player.F.fd8.max(player.F.buyables[32]=player.F.buyables[32].max(target));
            player.F.buyables[101]=player.F.buyables[101].max(target);
            player.F.buyables[102]=player.F.buyables[102].max(target);
        }

        if(player.Z.points.gte(27)){
            let effective_Gs = player.G.Gs.add(1);
                    if (hasUpgrade('G',81))  effective_Gs=effective_Gs.mul(upgradeEffect('G',81))
                    if (hasUpgrade('G',65))  effective_Gs=effective_Gs.root(upgradeEffect('G',65))

            if(mil('G',17) || player.Z.points.gte(29))player.G.buyables[21]=player.G.buyables[21].max(effective_Gs.add(1).log(hasUpgrade("G",122)?4:4.1).max(0).root(hasUpgrade("G",122)?1.25:1.35).ceil().max(0));
            if(player.Z.points.gte(30))player.G.buyables[22]=player.G.buyables[22].max(effective_Gs.add(1).log(hasUpgrade("G",92)?5:10).max(0).root(player.Z.points.gte(33)?2:2.5).ceil().max(0));
            if(mil('G',17) && player.Z.points.lt(30))player.G.buyables[23]=player.G.buyables[23].max(effective_Gs.add(1).log(100).max(0).root(1).ceil().max(0));
            if(player.Z.points.gte(30))player.G.buyables[23]=player.G.buyables[23].max(effective_Gs.add(1).log(1000).max(0).root(3).ceil().max(0));
        }
    if(player.Z.points.gte(31)){
            let effective_Gsi = player.G.Gsi.add(1);
                    if (hasUpgrade('G',65))  effective_Gsi=effective_Gsi.root(upgradeEffect('G',65))
            if(player.Z.points.gte(31))player.G.buyables[31]=player.G.buyables[31].max(effective_Gsi.add(1).log(hasUpgrade("G",93)?4:4.8).max(0).root((hasUpgrade("G",122) && player.Z.points.gte(37))?1.25:hasUpgrade("G",122)?1.5:1.6).ceil().max(0));
            if(player.Z.points.gte(32))player.G.buyables[32]=player.G.buyables[32].max(effective_Gsi.add(1).log(player.Z.points.gte(33)?5:100).max(0).root(player.Z.points.gte(33)?2:hasMilestone("G",18)?2:3).ceil().max(0));
            if(player.Z.points.gte(36))player.G.buyables[33]=player.G.buyables[33].max(effective_Gsi.add(1).log(10).add(1).log(2.5).ceil().max(0));
        }
    if(player.Z.points.gte(34)){
            let effective_Gse = player.G.Gse.add(1);
                    if (hasUpgrade('G',65))  effective_Gse=effective_Gse.root(upgradeEffect('G',65))
            if(hasUpgrade("G",162) || player.Z.points.gte(35))player.G.buyables[41]=player.G.buyables[41].max(effective_Gse.add(1).log(4).max(0).root(1.4).ceil().max(0));
            if((hasUpgrade("G",162) && player.Z.points.gte(35)) || player.Z.points.gte(37))player.G.buyables[42]=player.G.buyables[42].max(effective_Gse.add(1).log(100).max(0).root(2).ceil().max(0));
            if((hasUpgrade("H",11) && player.Z.points.gte(35)) || player.Z.points.gte(40))player.G.buyables[61]=player.G.buyables[61].max(player.G.Gse.add(1).log(10).max(0).root(3).ceil().max(0));
            if(player.Z.points.gte(40))player.G.buyables[51]=player.G.buyables[51].max(effective_Gse.add(1).log(10).add(1).log(2).pow(2).ceil().max(0));
            if(player.Z.points.gte(40))player.G.buyables[52]=player.G.buyables[52].max(effective_Gse.add(1).log(10).add(1).log(2).ceil().max(0));
        }
    if(player.Z.points.gte(37)){
            let effective_Gsq = player.G.Gsq.add(1);
                    if (hasUpgrade('G',65))  effective_Gsq=effective_Gsq.root(upgradeEffect('G',65))
            if(hasUpgrade("G",191))player.G.buyables[81]=player.G.buyables[81].max(effective_Gsq.add(1).log(4).max(0).root(1.5).ceil().max(0));
            if(hasUpgrade("G",203)){
                player.G.buyables[82]=player.G.buyables[82].max(effective_Gsq.add(1).log(4).max(0).root(2).ceil().max(0));
                player.H.buyables[51]=player.H.buyables[51].max(player.H.hyper.add(1).log(10).add(1).log(10).add(1).root(layers.H.buyables[51].sc()).sub(1).ceil().max(0));
            }
            if(hasUpgrade("G",204)){
                player.H.buyables[11]=player.H.buyables[11].max(player.H.harsh.add(1).log(10).add(1).log(10).add(1).root(layers.H.buyables[11].sc()).sub(1).ceil().max(0));
            }
        }
        if(player.Z.points.gte(40))player.G.buyables[62]=player.G.buyables[62].max(player.points.slog().sub(5).max(0).mul(2).root(0.15).ceil().max(1));
        if(player.Z.points.gte(40))player.G.buyables[63]=player.G.buyables[63].max(player.G.Gsq.add(1).log(10).max(0).root(3).ceil().max(1));
    },
    milestones: {
        0: {requirementDescription: "1 Z",
            done() {return player.Z.points.gte(1)}, 
            effectDescription: "100x A/B passive, unlock D.",
        },
        1: {requirementDescription: "2 Z",
            done() {return player.Z.points.gte(2)}, 
            effectDescription: "100x A/B/C passive.",
        },
        2: {requirementDescription: "3 Z",
            done() {return player.Z.points.gte(3)}, 
            effectDescription: "100x A/B/C passive, 1x D passive.<br>cheaper B buyables, square B26 base effect.",
        },
        3: {requirementDescription: "4 Z",
            done() {return player.Z.points.gte(4)}, 
            effectDescription: "100x A/B/C/D passive. Start with first 6 A chall completed.<br>points^1.05. B35 is stronger.",
        },
        4: {requirementDescription: "5 Z",
            done() {return player.Z.points.gte(5)}, 
            effectDescription: "100x A/B/C/D passive. Start with first 2 C chall completed.<br>Reduce requirement of A/B/C/D to 1.<br>All mult to B26 applied to base. points^1.02.",
        },
        5: {requirementDescription: "6 Z",
            done() {return player.Z.points.gte(6)}, 
            effectDescription: "Start with all A upgrades. A9^15.",
        },
        6: {requirementDescription: "7 Z",
            done() {return player.Z.points.gte(7)}, 
            effectDescription: "Start with all B upgrades. cheaper B buyables.",
        },
        7: {requirementDescription: "8 Z",
            done() {return player.Z.points.gte(8)}, 
            effectDescription: "Start with Ac7 completed 5 times. Base of first 2 B buyables +1",
        },
        8: {requirementDescription: "9 Z",
            done() {return player.Z.points.gte(9)}, 
            effectDescription: "Autobuy Max B buyables. cheaper Bb3. change Bb5 formula. 10x E.",
        },
        9: {requirementDescription: "10 Z",
            done() {return player.Z.points.gte(10)}, 
            effectDescription: "Start with all B & C milestones. change Bb5 formula.<br>10x passive E and unlock Em. cheaper Eb4. Stronger E25.",
        },
        10: {requirementDescription: "11 Z",
            done() {return player.Z.points.gte(11)}, 
            effectDescription: "Start with first 2 E chall completed 3 times.<br>unlock Ek. cheaper Eb5-7.",
        },
        11: {requirementDescription: "12 Z",
            done() {return player.Z.points.gte(12)}, 
            effectDescription: "Start with Ec3-4 completed 3 times and all D milestones.<br>10x passive E and Reduce requirement of E to 1.<br>points^1.13 and Ec3-4 applied before powerer.<br>change Bb5 formula.",
        },
        12: {requirementDescription: "13 Z",
            done() {return player.Z.points.gte(13)}, 
            effectDescription: "Start with Ec5-6 completed 5 times, all E milestones and the 1st F upgrade.<br>10x passive E.<br>points^1.011. 2x F.<br>change formulas of Ac7 and E22.",
        },
        13: {requirementDescription: "14 Z",
            done() {return player.Z.points.gte(14)}, 
            effectDescription: "Start with Ec7-8 completed 5 times and first 17 C upgrades. 3x F.<br>Autobuy max E buyables.<br>Unlock F1 and F dimensions.",
        },
        14: {requirementDescription: "15 Z",
            done() {return player.Z.points.gte(15)}, 
            effectDescription: "Start with first 22 D upgrades. 4x F and F1, 10x passive F and reduce requirement of F to 1.<br>change formula of Ac7.",
        },
        15: {requirementDescription: "16 Z",
            done() {return player.Z.points.gte(16)}, 
            effectDescription: "Start with first 15 F upgrades. 5x F and F1, 10x passive F.<br>F dims requires F instead of F1, but increase base F1 effect before F24. <br>change formula of Ac7 and F30.",
        },
        16: {requirementDescription: "17 Z",
            done() {return player.Z.points.gte(17)}, 
            effectDescription: "Autobuy max F dimensions. A1,B1,C1,D1 and F1 upgrade ^10; E1 ^100. 6x F and F1, 10x passive F.<br>change formula of Ac7. Change Gb3 cost.",
        },
        17: {requirementDescription: "18 Z",
            done() {return player.Z.points.gte(18)}, 
            effectDescription: "Start with all F milestones. Increase max completion for all E challenges to 6. A1,B1,C1,D1,E1 and F1 upgrade ^10. Tickspeed boost effect is changed.",
        },
        18: {requirementDescription: "19 Z",
            done() {return player.Z.points.gte(19)}, 
            effectDescription: "Start with first 30 F upgrades. Reduce requirement of G to 1. Also initial cost of F dims and G buyables are 1. Change G7 and G8.",
        },
        19: {requirementDescription: "20 Z",
            done() {return player.Z.points.gte(20)}, 
            effectDescription: "Start with Fc1-2 completed 3 times. Autobuy max Gb1-Gb2. Change Fd and Gb3 cost but increase F1 effect.",
        },
        20: {requirementDescription: "21 Z",
            done() {return player.Z.points.gte(21)}, 
            effectDescription: "Start with Ec1-8 completed 6 times. Change tickboost cost and autobuy max tickboost. Change Fd cost and Ac7 but increase F1 effect. Unlock more C and D upgrades.",
        },
        21: {requirementDescription: "22 Z",
            done() {return player.Z.points.gte(22)}, 
            effectDescription: "Start with first 7 G milestones. Change Fd cost and E22 but increase F1 effect. Reduce Bb3-4 cost and increase Bb3-4, A1 and B1 effect. Unlock F2 and more C upgrades.",
        },
        22: {requirementDescription: "23 Z",
            done() {return player.Z.points.gte(23)}, 
            effectDescription: "Start with first 10 G upgrades. Change Fd cost and Gc3p but increase F1 effect. Change F2 dimension costs, buy max F2d1 and F2d2. Buy max and decimal Gb3. Unlock more D upgrades.",
        },
        23: {requirementDescription: "24 Z",
            done() {return player.Z.points.gte(24)}, 
            effectDescription: "Start with first 40 F upgrades. Change Fd cost and F30 but increase F1 effect. Change all B buyables. Change F2 dimension costs, buy max F2d3 and F2d4. Increase F2 effect.",
        },
        24: {requirementDescription: "25 Z",
            done() {return player.Z.points.gte(25)}, 
            effectDescription: "Unlock Zp. A gain is based on Zp instead of points. C gain is based on B now. A5 changed to Zp boost points. Change Fd cost but increase F1 effect.",
        },
        25: {requirementDescription: "26 Z",
            done() {return player.Z.points.gte(26)}, 
            effectDescription: "Start with Gc1 and Gc2 completed 5 times. Permanently unlock Gs, and you can gain Gs when you reach 1e10 G. Gs effect exp ^1.2. Change Fd cost but increase F1 effect.",
        },
        26: {requirementDescription: "27 Z",
            done() {return player.Z.points.gte(27)}, 
            effectDescription: "Start with Gc3 and Gc4 completed 5 times. Gs effect exp ^1.5. Change Fd cost but increase F1 effect.",
        },
        27: {requirementDescription: "28 Z",
            done() {return player.Z.points.gte(28)}, 
            effectDescription: "F2 effect is better. Gs effect exp ^2. Change Fd cost but increase F1 effect.",
        },
        28: {requirementDescription: "29 Z",
            done() {return player.Z.points.gte(29)}, 
            effectDescription: "Start with first 15 G upgrades. Gs effect ^5 and exp ^1.389. Change Fd cost and change F1 effect to point boost, permanently autobuy max Gsb1.",
        },
        29: {requirementDescription: "30 Z",
            done() {return player.Z.points.gte(30)}, 
            effectDescription: "Start with first 25 C, D and G upgrades. Change Fd, Gsb2 and Gsb3 cost and Gs effect but increase F2 effect, permanently autobuy max Gsb2 and Gsb3 and change costs, permanently unlock Gsi.",
        },
        30: {requirementDescription: "31 Z",
            done() {return player.Z.points.gte(31)}, 
            effectDescription: "Start with first 18 G milestones. Gs effect exp ^1.2. Change Fd and Gsb4 cost but increase F1 effect, permanently autobuy max Gsb4.",
        },
        31: {requirementDescription: "32 Z",
            done() {return player.Z.points.gte(32)}, 
            effectDescription: "Start with first 40 B upgrades. Gain all 4 Gc points equal to F1 per second. Change Gs effect. Change Gsb5 cost but increase F1 effect, permanently autobuy max Gsb5.",
        },
        32: {requirementDescription: "33 Z",
            done() {return player.Z.points.gte(33)}, 
            effectDescription: "Gsb6 and Gsb9 bases are fixed to hardcap, and any mult to base multiply to its hardcap. Change Fd cost but increase Gs and F2 effect.",
        },
        33: {requirementDescription: "34 Z",
            done() {return player.Z.points.gte(34)}, 
            effectDescription: "A-G gain exponents are 1. Gs effect exp ^5. Permanently unlock Gse.",
        },
        34: {requirementDescription: "35 Z",
            done() {return player.Z.points.gte(35)}, 
            effectDescription: "Permanently autobuy max Gsb7, Unlock H.",
        },
        35: {requirementDescription: "36 Z",
            done() {return player.Z.points.gte(36)}, 
            effectDescription: "Start with first 5 Gs upgrades. H requirement is 1. Change Gsb6 cost and remove Gsb6 limit, permanently autobuy max Gsb6.",
        },
        36: {requirementDescription: "37 Z",
            done() {return player.Z.points.gte(37)}, 
            effectDescription: "Start with first 10 Gs upgrades and first 2 H milestones. Change Fd costs, F1/F2 effects. Change Gsb8 cost and remove Gsb8 limit, permanently autobuy max Gsb8. Permanently unlock GG.",
        },
        37: {requirementDescription: "38 Z",
            done() {return player.Z.points.gte(38)}, 
            effectDescription: "Start with first 15 Gs upgrades. Change Gs effect. Permanently unlock Gsq. H cost is changed below 16.",
        },
        38: {requirementDescription: "39 Z",
            done() {return player.Z.points.gte(39)}, 
            effectDescription: "Start with first 20 Gs upgrades and G milestones. H cost is changed below 17. Permanently unlock Gsb10-12, increase Gsb11/Gsb12 effects and decrease their costs.",
        },
        39: {requirementDescription: "40 Z",
            done() {return player.Z.points.gte(40)}, 
            effectDescription: "Start with first 25 Gs upgrades and G milestones. Permanently unlock and autobuy max Gsb11-12 and GG1-3. Permanently unlock first 31 Gts.",
        },

    },
    setZ(a){
        if(a === undefined)return;
        player.Z.points=new Decimal(a).floor();
        player.Z.milestones=[];
        for(let i=0;i<new Decimal(a).floor().toNumber();i++){
            player.Z.milestones.push(i+'');
        }
        player.Z.best=player.Z.best.max(player.Z.points);
        layers.Z.doReset('Z');
    },
    getZp(){
        if(player.Z.points.lt(25))return player.points;
    if(player.Z.points.gte(35)){
        return Decimal.tetrate(10,player.points.add(1).slog().div([1.00001,1.00005,1.002,1.0025,1.003,1.005][player.Z.points.sub(35).toNumber()]));
    }
    if(player.Z.points.gte(29)){
        return Decimal.pow(10,Decimal.pow(10,player.points.add(1).log10().add(1).log10().pow(Decimal.pow(0.99,player.Z.points.sub(28)))));
    }
        return Decimal.pow(10,player.points.add(10).log10().pow(Decimal.pow(0.99,player.Z.points.sub(24))));
    },
    clickables: {
        11: {
            title() {
                return "-1 Z"
            },
            canClick() {
                return player.Z.points.gte(1)
            },
            onClick() {
                if (!player.Z.points.gte(1)) return;
                layers.Z.setZ(player.Z.points.sub(1));
            },
            unlocked: true,
        },21: {
            title() {
                return "Force Z Reset"
            },
            canClick() {
                return true;
            },
            onClick() {
                layers.Z.setZ(player.Z.points);
            },
            unlocked: true,
        },    12: {
            title() {
                return "+1 Z"
            },
            canClick() {
                return player.Z.points.lt(player.Z.best);
            },
            onClick() {
                if (!player.Z.points.lt(player.Z.best)) return;
                layers.Z.setZ(player.Z.points.add(1));
            },
            unlocked: true,
        },    
    }
})
