StartupEvents.registry('fluid', e => {
    let waterLike = (id, color) => e.create(id, 'thin').stillTexture('kubejs:fluid/water_like').flowingTexture('kubejs:fluid/water_like').noBlock().tint(color)
    let lavaLike = (id, color) => e.create(id, 'thick').stillTexture('kubejs:fluid/lava_like').flowingTexture('kubejs:fluid/lava_like').noBlock().tint(color)

    waterLike('conduit_binder_fluid', 0xab9d91)
    //waterLike('empowered_pink_slime', 0xea2264)
    waterLike('molten_ender', 0x147766)
    waterLike('unrefined_boosted_diesel', 0x8a440b)
    waterLike('air', 'thin', 0xbfbfbf)
    waterLike('end_air', 0x7d8595)
    waterLike('liquid_end_air', 0x9ca9c4)
    waterLike('liquid_dragons_breath', 0xcbb0d2).displayName(`Liquid Dragon's Breath`)
    waterLike('fluorine', 0x7ac7f0)
    waterLike('chloroform', 0x9541d1)
    waterLike('diluted_hydrochloric_acid', 0xc6d4cd)
    waterLike('phosphoric_acid', 0xbfc92c)
    waterLike('acetone', 0xe6e6e6)
    waterLike('cumene', 0x5c2f1c)
    waterLike('phenol', 0x7b4a29)
    waterLike('epichlorohydrin', 0x632f1f)
    waterLike('bisphenol_a', 0xc79e2f)
    waterLike('tetrafluoroethylene', 0x999999)
    waterLike('uranium_hexafluoride', 0x31e328)
    waterLike('anomaly', 0x0a0a0a)
    waterLike('aberration', 0x302b2a)

    lavaLike('molten_aluminum', 0x54c7f9).tag('c:molten_aluminum')
    lavaLike('molten_antimony', 0xdfdfe8).tag('c:molten_antimony')
    lavaLike('molten_tin', 0xcfd4f2).tag('c:molten_tin')
    lavaLike('molten_stainless_steel', 0xc7d8e7).tag('c:molten_stainless_steel')
    lavaLike('molten_platinum', 0xeedbab).tag('c:molten_platinum')
    lavaLike('molten_plastic', 0xebefef);
    lavaLike('molten_iridium', 0xd7e0e0).tag('c:molten_iridium');
    //e.create('molten_emerald', 'thick').tint(0x3dff5a);
    lavaLike('hydrofluoric_acid', 0x7ad6f0)
    lavaLike('epoxy_resin', 0xc78723)
    lavaLike('polytetrafluoroethylene', 0x808080)
    lavaLike('osmium_acid', 0xd7cdcd)
    lavaLike('osmium_tetroxide', 0xdce0bf)
    lavaLike('bedrock_substance', 0x383838)
});

// MIRegistrationEvents.registerFluids(e => {
//     e.register(
//         "Fluorine", "fluorine",
//         0x7ac7f0,
//         "water",
//         true,
//         "high",
//     );

//     e.register(
//         "Hydrofluoric Acid", "hydrofluoric_acid",
//         0x7ad6f0,
//         "lava",
//         false,
//         "high",
//     );

//     e.register(
//         "Chloroform", "chloroform",
//         0x9541d1,
//         "water",
//         false,
//         "high",
//     );

//     e.register(
//         "Tetrafluoroethylene", "tetrafluoroethylene",
//         0x999999,
//         "water",
//         true,
//         "low",
//     );

//     e.register(
//         "Polytetrafluoroethylene", "polytetrafluoroethylene",
//         0x808080,
//         "lava",
//         true,
//         "medium",
//     );
// });