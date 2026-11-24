const $UniversalBucketItem = Java.loadClass('de.cech12.bucketlib.api.item.UniversalBucketItem');
const $HammerItem = Java.loadClass('pro.mikey.justhammers.HammerItem')
const $Tiers = Java.loadClass('net.minecraft.world.item.Tiers')

const registry = [
    'steel_bars',
    'chad',
    'sand_dust',
    'glass_dust',
    'latex',
    'rubber',
    'drop_of_evil',
    'epoxy_resin_sheet',
    'epoxy_resin_board',
    'unfired_brick',
    'unfired_fire_clay_brick',
    'blue_matter',
    'empowered_pink_slime',
    'empowered_pink_slime_ingot',
    'double_silver_plate',
    'raw_treated_leather',
    'treated_leather',
    'pattern',
    'stone_bucket',
    'tool_rod',
    'iron_rotary_blade',
    'steel_rotary_blade',
    'advanced_robot_arm',
    'core_base',
    'ultimate_motor',
    'large_ultimate_motor',
    'ultimate_pump',
    'large_ultimate_pump',
    'ultimate_robot_arm',
    'iridium_band',
    'copper_chainsaw_head',
    'short_wood_stick',
    'treated_stick',
    'raw_tungsten_dust',
    'tungsten_acid',
    'tiny_grains_of_piezallity',
    'mysterious_chunk'
];
StartupEvents.registry('item', e => {
    for (const i of registry) {
        e.create(i)
    };

    e.create('chaotic_singularity').rarity(4)
    e.create('activated_singularity').rarity(4)
    e.create('activated_dragon_heart').rarity(3)
    e.create('chaotic_circuit_board')
    e.create('chaotic_circuit').glow(true).rarity(3)
    e.create('dragon_model').maxStackSize(1).rarity(4)
    e.create('chaos_dragon_model').maxStackSize(1).rarity(4)
    e.create('interdimensional_mining_module').maxStackSize(1).rarity(4)
    e.create('awakened_star').glow(true);
    e.create('chaotic_star').glow(true);
    e.create('perfectus_fuel').burnTime(2048 * 200)
    e.create('ultimate_coil').glow(true);
    e.create('awakened_coil')
    e.create('undergarden_prediction').displayName('Generalized Undergarden Prediction')
    e.create('flaming_crystal').glow(true)
    e.create('revived_contractor').texture('enderio:item/skeletal_contractor').glow(true)
    e.create('black_plastic').texture('industrialforegoing:item/plastic').color(0, '#303130');
    e.create('brick_mold').displayName('Mold for Bricks').maxDamage(200);
    e.create('ore_waypoint_maker').maxStackSize(1);
    e.create('nacreous_laser_lens').maxStackSize(1);
    e.create('absorbing_laser_lens').maxStackSize(1);
    e.create('awakened_laser_lens').maxStackSize(1);
    e.create('the_tear').displayName('§6The Tear').maxStackSize(1).rarity(4)
    e.create('draconium_block')
        .tag('c:storage_blocks')
        .tag('c:storage_blocks/draconium')
        .parentModel('draconicevolution:item/draconium_block')
        .barWidth(item => {
            const energy = Number(
                item.getComponents().get('powerfuljs:forge_energy') ?? 0
            )
    
            return Math.max(0, Math.min(13,
                Math.floor(13 * energy / 100000000)
            ))
        })
        .barColor(() => Color.MAGENTA_DYE)

    const Hammer = (id, setting) => e.createCustom(id, () => setting).tag('minecraft:pickaxes').tag('c:tools')
    
    Hammer('steel_mining_hammer', new $HammerItem($Tiers.IRON, 3, 1, 1))
    Hammer('dark_steel_mining_hammer', new $HammerItem($Tiers.DIAMOND, 3, 1, 1))
    Hammer('draconium_mining_hammer', new $HammerItem($Tiers.DIAMOND, 5, 1, 1))
    
    global.processors = [
        {
            name: 'idea',
            color: '#ffbdc5',
            input: 'modern_industrialization:chromium_double_ingot'
        },
        {
            name: 'extensional',
            color: '#F388FF',
            input: 'modern_industrialization:titanium_double_ingot'
        },
        {
            name: 'remote',
            color: '#3e3647',
            input: 'kubejs:tungstensteel_double_ingot'
        },
        {
            name: 'molecular',
            color: '#ffd6b6',
            input: 'modern_industrialization:platinum_double_ingot'
        },
        {
            name: 'awakened',
            color: '#ed8608',
            input: 'draconicevolution:awakened_draconium_ingot'
        }
    ]

    global.processors.forEach(property => {
        const {name,color} = property;

        e.create(`${name}_processor_press`)
            .tag('ae2:inscriber_presses');

        e.create(`printed_${name}_processor`)
            .texture(`kubejs:item/print`)
            .color(0, color);

        e.create(`${name}_processor`)
            .textures({layer0: 'kubejs:item/print', layer1: 'kubejs:item/processor_outline'})
            .color(0, color);
    });

    global.Singularities = [
        {
            material: 'iron',
            color: '#d9d9d9',
            input: '1000x iron_block',
            glow: false
        },
        {
            material: 'redstone',
            color: '#d00909',
            input: '2000x redstone_block',
            glow: false
        },
        {
            material: 'diamond',
            color: '#92f2e4',
            input: '700x diamond_block',
            glow: false
        },
        {
            material: 'dark_steel',
            color: '#444040',
            input: '800x enderio:dark_steel_block',
            glow: false
        },
        {
            material: 'iridium',
            color: '#faf9fb',
            input: '200x modern_industrialization:iridium_block',
            glow: false
        },
        {
            material: 'superconductor',
            color: '#6eecff',
            input: '500x kubejs:superconductor_block',
            glow: false
        },
        {
            material: 'empowered_void',
            color: '#212121',
            input: '350x actuallyadditions:empowered_void_crystal_block',
            glow: true
        },
        {
            material: 'empowered_enori',
            color: '#bfc3c5',
            input: '100x actuallyadditions:empowered_enori_crystal_block',
            glow: true
        },
        {
            material: 'empowered_restonia',
            color: '#d42828',
            input: '200x actuallyadditions:empowered_restonia_crystal_block',
            glow: true
        },
        {
            material: 'empowered_pink_slime',
            color: '#ff5683',
            input: '800x kubejs:empowered_pink_slime_ingot',
            glow: false
        },
        {
            material: 'draconium',
            color: '#882ed2',
            input: '500x kubejs:draconium_block',
            glow: false
        },
        {
            material: 'draconic',
            color: '#e57614',
            input: '250x draconicevolution:awakened_draconium_block',
            glow: false
        },
        {
            material: 'chaos',
            color: '#1d1d1d',
            input: '300x draconicevolution:chaos_shard',
            glow: false
        }
    ];

    global.Singularities.forEach(prop => {
        const {material, color, glow} = prop

        e.create(`${material}_singularity`)
            .glow(glow)
            .texture(`kubejs:item/singularity`)
            .color(0, color);
    })


    // e.createCustom('kubejs:fluid_cell', () => new $UniversalBucketItem(
    //     new $UniversalBucketItem.Properties()
    //         .stacksTo(64)
    //         .disableEntityObtaining()
    //         .disableMilking()
    //     )
    // );
    
    global.partsAndCasts = [
        {
            id: 'sword',
            materials: [
                'flint',
                'iron',
                'gold'
            ],
            fluidAmount: 180  // 1 ingot = 90 mb
        },
        {
            id: 'pickaxe',
            materials: [
                'flint',
                'iron',
                'gold'
            ],
            fluidAmount: 270
        },
        {
            id: 'axe',
            materials: [
                'flint',
                'iron',
                'gold'
            ],
            fluidAmount: 270
        },
        {
            id: 'shovel',
            materials: [
                'flint',
                'iron',
                'gold'
            ],
            fluidAmount: 90
        },
        {
            id: 'hoe',
            materials: [
                'flint',
                'iron',
                'gold'
            ],
            fluidAmount: 180
        }
    ];

    global.partsAndCasts.forEach(property => {
        let {id, materials} = property;

        materials.forEach(material => {
            e.create(`${material}_${id}_head`).tag(`kubejs:${id}_heads`).maxStackSize(1);
        });

        e.create(`${id}_head_cast`).maxStackSize(1);
        e.create(`bronze_${id}_head_cast`).maxStackSize(1);
    });

    e.create('bucket_cast').maxStackSize(1);
    e.create('bronze_bucket_cast').maxStackSize(1);
    e.create('bronze_ingot_cast').maxStackSize(1);
    e.create('bronze_nugget_cast').maxStackSize(1);
    e.create('bronze_gem_cast').maxStackSize(1);
    global.molds = [
        ['block',['abc','   ','   ']],
        ['gear',['cba','   ','   ']],
        ['rotor',['a','b','c']],
        ['plate',['c  ',' b ','  a']],
        ['ingot',['c','b','a']],
        ['nugget',['a  ',' b ','  c']],
        //['pipe',['c  ',' b ','  a']]
    ];

    global.molds.forEach(prop => {
        e.create(`${prop[0]}_mold`).maxStackSize(1).texture(`kubejs:item/molds/${prop[0]}_mold`);
    });

    const tools = [
        ['hammer'],
        ['saw'],
        ['mortar'],
        ['knife', 2]
    ]
    
    tools.forEach(x => {
        global.materials = [
            ['iron', '#d9d9d9', 128],
            ['diamond', '#53ffea', 384, 'diamond', '#c:plates/diamond'],
            ['netherite', '#5b555b', 640],
            ['aluminum','#7fccff', 384],
            ['bronze', '#e8b143', 96],
            ['invar','#d4d49a', 192],
            ['stainless_steel','#cad3f1', 512],
            ['steel', '#474747', 256],
            ['titanium', '#fa94ff', 768]
        ];
        global.materials.forEach(i => {
            if (!x[1]) x[1] = 1;
            if (x[0] == 'knife') {
                e.create(`${i[0]}_${x[0]}`).parentModel('minecraft:item/handheld').maxDamage(Math.floor(i[2] * x[1])).tag(`kubejs:knives`).tag('farmersdelight:straw_harvesters').tag('c:tools/knife').textures({layer0: `kubejs:item/${x[0]}s/handle_${x[0]}`,layer1: `kubejs:item/${x[0]}s/${x[0]}`}).color(1, i[1]);
            } else {
                e.create(`${i[0]}_${x[0]}`).parentModel('minecraft:item/handheld').maxDamage(Math.floor(i[2] * x[1])).tag(`kubejs:${x[0]}s`).textures({layer0: `kubejs:item/${x[0]}s/handle_${x[0]}`,layer1: `kubejs:item/${x[0]}s/${x[0]}`}).color(1, i[1]);
            };
        });
    });

    global.softMallets = [
        ['wooden', '#684e1e', 48, '#minecraft:planks'],
        ['rubber', '#322d2d', 256, 'modern_industrialization:rubber_sheet']
    ];

    global.softMallets.forEach(i => {
        e.create(`${i[0]}_soft_mallet`).parentModel('minecraft:item/handheld').maxDamage(i[2]).tag('kubejs:soft_mallets').tag('expandeddelight:crushing_tools').textures({layer0: `kubejs:item/softmallets/handle`,layer1: `kubejs:item/softmallets/soft_hammer`}).color(1, i[1]);
    })

    e.create(`flint_knife`).parentModel('minecraft:item/handheld').maxDamage(64).tag('kubejs:knives').tag('farmersdelight:straw_harvesters').tag('c:tools/knife').textures({layer0: `kubejs:item/knifes/handle_knife`,layer1: `kubejs:item/knifes/knife`}).color(1, '#404040');
    e.create(`flint_mortar`).maxDamage(32).tag('kubejs:mortars').textures({layer0: `kubejs:item/mortars/handle_mortar`,layer1: `kubejs:item/mortars/mortar`}).color(1, '#404040');
    
    global.tools = [
        ['flint', 'stone', 120, 2.5, '#616161']
    ];

    for (const i of global.tools) {
        if (!i[5]) i[5] = i[0];
        e.create(`${i[0]}_sword`, 'sword')
        .color(1, i[4])
        .tier(i[1])
        .modifyTier(tier => {
            tier.uses = i[2]
            tier.repairIngredient = i[5]
        });

        e.create(`${i[0]}_pickaxe`, 'pickaxe')
        .color(1, i[4])
        .tier(i[1])
        .modifyTier(tier => {
            tier.uses = i[2] * 1.5
            tier.speed = i[3]
            tier.repairIngredient = i[5]
        });

        e.create(`${i[0]}_axe`, 'axe')
        .color(1, i[4])
        .tier(i[1])
        .modifyTier(tier => {
            tier.uses = i[2] * 2
            tier.speed = i[3]
            tier.repairIngredient = i[5]
        });

        e.create(`${i[0]}_shovel`, 'shovel')
        .color(1, i[4])
        .tier(i[1])
        .modifyTier(tier => {
            tier.uses = i[2]
            tier.speed = i[3]
            tier.repairIngredient = i[5]
        });

        e.create(`${i[0]}_hoe`, 'hoe')
        .color(1, i[4])
        .tier(i[1])
        .modifyTier(tier => {
            tier.uses = i[2] * 2
            tier.speed = i[3]
            tier.repairIngredient = i[5]
        });
    };
    e.create(`geological_hammer`).parentModel('minecraft:item/handheld').maxDamage(250).tag('c:tools')
    e.create(`rubber_chestplate`, 'chestplate').material('modern_industrialization:rubber').tag('kubejs:radiation_protective_suit');
    e.create(`rubber_leggings`, 'leggings').material('modern_industrialization:rubber').tag('kubejs:radiation_protective_suit')

    global.dusts = [
        ['clay', '#cad1e6', true, 4],
        ['raw_rubber','#b8b8a5', true, 9],
        ['flint', '#4d4d4d', true, 9]
    ];

    global.dusts.forEach(i => {
        if (i[2] == true) e.create(`${i[0]}_tiny_dust`).tag(`c:${i[0]}_dusts`).texture("modern_industrialization:item/iron_tiny_dust").color(0, i[1]);
        e.create(`${i[0]}_dust`).tag(`c:${i[0]}_dusts`).texture("modern_industrialization:item/iron_dust").color(0, i[1])
    });

    global.processingItems = {
        'iron': '#c7c7c7',
        'gold': '#fff019',
        'copper': '#e47b55',
        'antimony': '#a9a9b8',
        'lead': '#545e9e',
        'nickel': '#ced6b2',
        'silver':'#a7bccf',
        'tin':'#cacee8',
        //'tungsten':'#2f263b',
        'diamond': '#53ffea',
        'redstone': '#d11d1d',
        'coal': '#3d3d3d',
        'lapis': '#1d55cf',
        'emerald': '#37fd83',
        'sulfur': '#ccbc39',
        'bauxite': '#a65929',
        'lignite_coal': '#4e3636',
        'quartz': '#e4e0da',
        'salt': '#b6c5b4',
        'monazite': '#821d6c',
        'black_quartz': '#324048',
        'cloggrum': '#bd9c7e',
        'froststeel': '#bbddff',
        'draconium': '#882ed2',
    };

    for (const [material, color] of Object.entries(global.processingItems)) {
        e.create(`impure_${material}_dust`)
            .tag('kubejs:impure_dusts')
            .textures({layer0: "kubejs:item/dust_impure",layer1: "kubejs:item/dust_impure_overlay"})
            .color(0, color);
            
        e.create(`crushed_${material}_dust`)
            .tag('kubejs:crushed_dusts')
            .texture("kubejs:item/crushed_dust")
            .color(0, color);

        switch (material) {
            case 'diamond':
            case 'redstone':
            case 'coal':
            case 'lapis':
            case 'emerald':
            case 'sulfur':
            case 'bauxite':
            case 'lignite_coal':
            case 'quartz':
            case 'monazite':
            case 'salt':
            case 'black_quartz':
            case 'draconium':
                e.create(`raw_${material}`)
                    .tag(`c:raw_materials/${material}`)
                    .texture("kubejs:item/materialsets/raw")
                    .color(0, color);
            break;
        }
    };

    global.materialsToRegister.forEach(prop => {
        let texture;    
        let outline;
        let glow;

        prop.glow ? glow = true : glow = false;

        const create = (id) => e.create(`${prop.material}_${id}`).tag(`c:${id}s/${prop.material}`).glow(glow);

        prop.items.forEach(item => {

            switch (item) {
                case 'rod_magnetic':
                    texture = `kubejs:item/materialsets/rod`;
                    outline = `kubejs:item/materialsets/magnetic`
                break;
                case 'magnetic_wire':
                    texture = `kubejs:item/materialsets/wire`;
                    outline = `kubejs:item/materialsets/magnetic`
                break;
                case 'magnetic_plate':
                    texture = `kubejs:item/materialsets/plate`
                    outline = `kubejs:item/materialsets/magnetic`
                break;
                case 'drill':
                    texture = `kubejs:item/materialsets/drill_overlay`,
                    outline = `kubejs:item/materialsets/drill_underlay`
                break;
                case 'fine_wire':
                    texture = `kubejs:item/materialsets/fine_wire`,
                    outline = `kubejs:item/materialsets/fine_wire_overlay`
                break;
                default:
                    texture = `kubejs:item/materialsets/${item}`
            };

            switch (item) {
                case 'coil':
                case 'frame_box':
                case 'machine_casing':
                case 'block':
                break;
                case 'magnetic_plate':
                case 'rod_magnetic':
                case 'magnetic_wire':
                case 'drill':
                case 'fine_wire':
                    create(item).textures({layer0: texture, layer1: outline}).color(0, prop.color);
                break;
                case 'hot_ingot':
                    create(item)
                break;
                case 'raw':
                    e.create(`${item}_${prop.material}`)
                        .tag(`c:${item}_materials/${prop.material}`)
                        .texture(texture)
                        .color(prop.color)
                break;
                default:
                    switch (prop.material) {
                        case 'chaotic':
                            create(item)
                        break;
                        default:
                            create(item).texture(texture).color(prop.color)   
                    };
            };
        })
    });
});