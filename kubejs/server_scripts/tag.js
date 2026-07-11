const toRemoveEmc = [
    saws,
    screwdrivers,
    mortars,
    files,
    hammers,
    knives,
    wrenches,
    mallets,
    'kubejs:osmium_ingot'
]

ServerEvents.tags('item', e => {
    const tags = {
        'trinkets:hand/glove': 'kubejs:main_hand_leather_glove',
        'trinkets:offhand/glove': 'kubejs:off_hand_leather_glove',
        'c:ingots/rubber': 'kubejs:rubber',
        'c:diamonds':'minecraft:diamond',
        'c:ingots/diamond':'minecraft:diamond',
        'c:gems/enori': 'actuallyadditions:enori_crystal',
        'c:gems/diamatine': 'actuallyadditions:diamatine_crystal',
        'c:gems/empowered_diamatine': 'actuallyadditions:empowered_diamatine_crystal',
        'c:gems/restonia': 'actuallyadditions:restonia_crystal',
        'c:gems/quartzite': 'kubejs:quartzite_crystal',
        'c:gems/empowered_emeradic': 'actuallyadditions:empowered_emeradic_crystal',
        'c:gems/empowered_enori': 'actuallyadditions:empowered_enori_crystal',
        'c:gems/empowered_restonia': 'actuallyadditions:empowered_restonia_crystal',
        'c:gems/empowered_void': 'actuallyadditions:empowered_void_crystal',
        'c:silicon': `${mi}silicon_ingot`,
        'kubejs:radioactive_items': [
            /modern_industrialization:\w*fuel_rod/,
            /modern_industrialization:(he|le)_(uranium|mox)/,
            /modern_industrialization:\w*uranium_(235|238)/,
            /modern_industrialization:plutonium_(ingot|block|nugget|tiny_dust|dust)/,
            'kubejs:superconductor_rod_magnetic'
        ],
        'kubejs:radiation_protective_suit': [
            /modern_industrialization:rubber_(helmet|boots)/
        ],
        'c:gears/energized': 'kubejs:energized_alloy_gear',
        'kubejs:to_remove_emc': toRemoveEmc,
        'projecte:collector_fuel': 'kubejs:perfectus_fuel',
        'c:ingots/entro_infused': 'extendedae:entro_ingot',
        'modern_industrialization:forge_hammer_tools': /kubejs:(stainless_steel|diamond|bronze|titanium|invar|steel|netherite|iron|aluminum)_hammer/,
        'c:storage_blocks': 'actuallyadditions:black_quartz_block'
    };

    for (const [tag, item] of Object.entries(tags)) {
        e.add(tag, item)
    };

    const removals = {
        'c:tools/knife': /farmersdelight:\w*knife/,
        'c:ores/iridium': [
            'modern_industrialization:iridium_ore',
            'modern_industrialization:deepslate_iridium_ore'
        ],
        'c:ores/tungsten': [
            'modern_industrialization:tungsten_ore',
            'modern_industrialization:deepslate_tungsten_ore'
        ],
        'c:ores/titanium': [
            'modern_industrialization:titanium_ore',
            'modern_industrialization:deepslate_titanium_ore'
        ],
        'c:ingots/redstone_alloy': 'morered:red_alloy_ingot',
        'expandeddelight:crushing_tools': 'expandeddelight:crushing_mallet',
        'c:tools/knife': [/aquaculture:\w*fillet_knife/, /farmersdelight:(flint|iron|diamond|golden|netherite)_knife/],
        'modern_industrialization:forge_hammer_tools': /modern_industrialization:\w*hammer/ ,
        'c:dusts/lapis': 'enderio:powdered_lapis_lazuli',
        'c:crops/rice': 'actuallyadditions:rice',
        'c:crops': 'actuallyadditions:rice',
        'c:crops/flax': 'actuallyadditions:flax_seeds',
        'c:crops': 'actuallyadditions:flax_seeds'
    };

    for (const [tag, item] of Object.entries(removals)) {
        e.remove(tag, item);
    };

    const parts = [
        {
            part: 'ring',
            materials: [
                'steel',
                'stainless_steel',
                'tin',
                'titanium',
                'aluminum',
                'bronze',
                'copper',
                'gold',
                'invar',
                'iron'
            ]
        },
        {
            part: 'curved_plate',
            materials: [
                'steel',
                'iridium'
            ]
        },
        {
            part: 'bolt',
            materials: [
                'steel',
                'bronze',
                'aluminum',
                'iron',
                'copper',
                'stainless_steel',
                'titanium',
                'tin'
            ]
        }
    ];

    parts.forEach(property => {
        property.materials.forEach(material => {
            e.add(`c:${property.part}s/${material}`, `modern_industrialization:${material}_${property.part}`)
        });
    });

    const hideFromEmi = [
        `${mi}massive_compressor`,
        `${mi}massive_wiremill`,
        `${mi}massive_forge_hammer`
    ];

    hideFromEmi.forEach(item => {
        e.add('c:hidden_from_recipe_viewers', item)
    });
});

ServerEvents.tags('block', e => {
    const adds = {
        'minecraft:mineable/pickaxe': /elevatorid:elevator/,
        'minecraft:needs_stone_tool': /elevatorid:elevator/
    };

    for (const [tag, item] of Object.entries(adds)) {
        e.add(tag, item)
    };

    global.customMIMachines.forEach(machine => { 
        e.add('minecraft:mineable/pickaxe', `modern_industrialization:${machine}`)
        e.add('minecraft:needs_stone_tool', `modern_industrialization:${machine}`)
    });

    global.miTweaksMachines.forEach(machine => { 
        e.add('minecraft:mineable/pickaxe', `mi_tweaks:${machine}`)
        e.add('minecraft:needs_stone_tool', `mi_tweaks:${machine}`)
    });
})

ServerEvents.tags('fluid', e => {
    const toHide = [
        'productivemetalworks:molten_aluminum',
        'productivemetalworks:molten_tin',
        'productivemetalworks:molten_platinum',
        'productivemetalworks:molten_iridium',
        'productivemetalworks:molten_uranium'
    ];
    toHide.forEach(fluid => {
        e.add("c:hidden_from_recipe_viewers", fluid);
    });
});

ServerEvents.tags('point_of_interest_type', e => {
    let removals = [
        'ae2:fluix_researcher',
        'modern_industrialization:industrialist',
        'actuallyadditions:enginner'
    ];

    removals.forEach(id => {
        e.remove('minecraft:acquirable_job_site', id)
    });
})