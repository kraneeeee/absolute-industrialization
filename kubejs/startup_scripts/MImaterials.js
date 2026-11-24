MIRegistrationEvents.registerCableTiers(event => {
    event.register(
        "chaotic",
        "Chaotic",
        "Chaotic Voltage",
        2147483647,
        "kubejs:chaotic_machine_hull",
    );
});

global.toGenerateDefaultTexture = {
    'restonia': ['battery'],
    'osmium': ['battery'],
    'chaotic': ['battery']
}

MIMaterialEvents.addMaterials(e => {
    e.createMaterial('Restonia', 'restonia', 0xe81e32, builder => {
        builder
            .battery(640000)
    });
    
    e.createMaterial('Osmium', 'osmium', 0xc7e7ff, builder => {
        builder
            .cable("ev")
            .battery(327680000)
    });

    e.createMaterial('Chaotic', 'chaotic', 0x191919, builder => {
        builder
            .cable("chaotic")
            .battery(2147483647)
    });

    e.createMaterial('Nichrome', 'nichrome', 0xbe8dc9, builder => {
        builder
            .cable("hv")
    });

    e.createMaterial('Tungstensteel', 'tungstensteel', 0x3e3647, builder => {
        builder
            .cable("ev")
    });
});