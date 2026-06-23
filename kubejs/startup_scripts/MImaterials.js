global.toGenerateDefaultTexture = {
    'restonia': ['battery'],
    'osmium': ['battery']
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

    e.createMaterial('Nichrome', 'nichrome', 0xbe8dc9, builder => {
        builder
            .cable("hv")
    });

    e.createMaterial('Tungstensteel', 'tungstensteel', 0x3e3647, builder => {
        builder
            .cable("ev")
    });
}) 