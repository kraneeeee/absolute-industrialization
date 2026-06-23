ServerEvents.recipes(e => {
    shaped();
    shapeless();
    MITypes();
    industrialforegoing();
    enderio();
    actuallyadditions();
    ae2()
    tools();
    tools_uses();
    dusts();
    other();
    nerfs();
    smelting();
    metalworks();
    compactcrafting();
    //custommachinery();

    function shaped() {
        let shapedRecipes = [
            [
                '8x kubejs:unfired_brick',
                ['aaa','aba','aaa'],
                {
                    a: 'clay_ball',
                    b: 'kubejs:brick_mold'
                },
                false,
                'unfired_brick'
            ],
            [
                'kubejs:pattern',
                ['aa','aa','  '],
                {
                    a: 'paper'
                }
            ],
            [
                '2x kubejs:short_wood_stick',
                ['a ',' b','  '],
                {
                    a: saws,
                    b:'stick'
                },
                false,
                'short_wood_stick'
            ],
            [
                'farmersdelight:cutting_board',
                ['aaa','bbb','   '],
                {
                    a: 'kubejs:pattern',
                    b: '#minecraft:planks'
                },
                true
            ],
            [
                '2x paper',
                [' a ','bbb',' a '],
                {
                    a: 'stone_slab',
                    b: 'kubejs:chad'
                },
                false,
                'paper_with_chad'
            ],
            [
                '2x kubejs:chad',
                ['aaa',' b ','   '],
                {
                    a: 'sugar_cane',
                    b: mortars
                },
                false,
                'chad'
            ],
            [
                'chest',
                ['aba','bcb','aba'],
                {
                    a: '#minecraft:logs',
                    b: '#minecraft:planks',
                    c: 'flint'
                },
                true
            ],
            [
                'crafting_table',
                ['aa','bb','  '],
                {
                    a: 'flint',
                    b: '#minecraft:logs'
                },
                true
            ],
            [
                'ceramicbucket:unfired_clay_bucket',
                ['a a','a a','aaa'],
                {
                    a: 'kubejs:clay_dust'
                }
            ],
            // [
            //     'kubejs:water_tank_siding',
            //     ['aaa','bcb','aaa'],
            //     {
            //         a: '#minecraft:planks',
            //         b: '#c:iron_rods',
            //         c: '#c:slimeballs'
            //     }
            // ],
            // [
            //     'kubejs:water_tank_siding',
            //     ['aaa','bcb','aaa'],
            //     {
            //         a: '#minecraft:planks',
            //         b: '#c:iron_rods',
            //         c: 'myrtrees:latex'
            //     },
            //     'water_tank_siding_alt'
            // ],
            // [
            //     'myrtrees:tree_tap',
            //     ['a a','bab','   '],
            //     {
            //         a: '#c:steel_nuggets',
            //         b: '#c:steel_plates'
            //     }
            // ],
            // [
            //     Item.of('custommachinery:custom_machine_item', '{machine:"kubejs:water_tank"}'),
            //     [' a ','bcd',' a '],
            //     {
            //         a: `${mi}iron_plate`,
            //         b: screwdrivers,
            //         c: 'kubejs:water_tank_siding',
            //         d: wrenches
            //     },
            //     'water_tank'
            // ],
            [
                '8x kubejs:unfired_fire_clay_brick',
                ['aaa','aba','aaa'],
                {
                    a: `${mi}fire_clay_dust`,
                    b: 'kubejs:brick_mold'
                },
                false,
                'unfired_fire_clay'
            ],
            // [
            //     'kubejs:main_hand_leather_glove',
            //     ['  a','aaa',' aa'],
            //     {
            //         a: 'leather'
            //     }
            // ],
            // [
            //     'kubejs:off_hand_leather_glove',
            //     ['a  ','aaa','aa '],
            //     {
            //         a: 'leather'
            //     }
            // ],
            [
                'farmersdelight:basket',
                ['aba','bcb','aba'],
                {
                    a: 'bamboo',
                    b: 'farmersdelight:canvas',
                    c: 'chest'
                },
                true
            ],
            [
                'kubejs:bricked_bronze_casing',
                ['aaa','aba','ccc'],
                {
                    a: '#c:plates/bronze',
                    b: `${mi}bronze_gear`,
                    c: `${mi}fire_clay_bricks`
                }
            ],
            [
                `${mi}bronze_boiler`,
                ['aba','aea','ddd'],
                {
                    a: `#c:plates/bronze`,
                    b: `${mi}bronze_tank`,
                    d: `${mi}fire_clay_bricks`,
                    e: 'furnace'
                },
                'modern_industrialization:steam_age/bronze/boiler_asbl'
            ],
            [
                'barrel',
                ['aba','aca','aba'],
                {
                    a: '#minecraft:planks',
                    b: '#minecraft:wooden_slabs',
                    c: 'chest'
                },
                true
            ],
            // [
            //     'ironchests:copper_chest',
            //     ['aba','cdc','aba'],
            //     {
            //         a: '#c:copper_plates',
            //         b: `${mi}copper_ring`,
            //         c: 'kubejs:copper_screw',
            //         d: 'chest' 
            //     }
            // ],
            // [
            //     'ironchests:copper_chest_upgrade',
            //     ['aba','cdc','aba'],
            //     {
            //         a: '#c:copper_plates',
            //         b: `${mi}copper_ring`,
            //         c: 'kubejs:copper_screw',
            //         d: 'ironchests:blank_chest_upgrade' 
            //     }
            // ],
            [
                'campfire',
                [' a ','aba','ccc'],
                {
                    a: 'stick',
                    b: '#minecraft:axes',
                    c: '#minecraft:logs'
                }
            ],
            [
                'furnace',
                ['aaa','aba','ccc'],
                {
                    a: 'cobblestone', 
                    b: 'campfire',
                    c: 'stone'
                },
                true
            ],
            // [
            //     'kibe:glider_right_wing',
            //     ['ab ','aab','caa'],
            //     {
            //         a: 'kubejs:treated_leather',
            //         b: 'string',
            //         c: 'white_wool'
            //     }
            // ],
            // [
            //     'kibe:glider_left_wing',
            //     [' ba','baa','aac'],
            //     {
            //         a: 'kubejs:treated_leather',
            //         b: 'string',
            //         c: 'white_wool'
            //     }
            // ],
            // [
            //     'coxinhautilities:drying_rack',
            //     ['aaa',' b ','   '],
            //     {
            //         a: '#minecraft:wooden_slabs',
            //         b: saws
            //     }
            // ],
            [
                'cauldron',
                ['a a','a a','aaa'],
                {
                    a: '#c:plates/iron'
                },
                false
            ],
            [
                'sophisticatedbackpacks:backpack',
                ['aba','cdc','aba'],
                {
                    a: 'kubejs:treated_leather',
                    b: '#minecraft:wool',
                    c: `${mi}iron_ring`,
                    d: 'chest'
                }
            ],
            [
                'piston',
                ['AAA','DED','BCB'],
                {
                    A: '#minecraft:wooden_slabs',
                    B: '#c:cobblestones',
                    C: `kubejs:red_alloy_plate`,
                    D: `kubejs:iron_small_gear`,
                    E: '#c:fences'
                },
                true,
                'piston'
            ],
            [
                `${mi}bronze_alloy_smelter_alt`,
                ['EBE','CDC','EFE'],
                {
                    B: `${mi}copper_gear`,
                    C: `${mi}copper_rotor`,
                    D: `${ct}bricked_bronze_casing`,
                    E: `#${mi}fluid_pipes`,
                    F: 'furnace'
                },
                true,
                'bronze_alloy_smelter'
            ],
            [
                'compass',
                ['aba','bcb','aba'],
                {
                    a: `${ct}iron_screw`,
                    b: '#c:plates/iron',
                    c: `${ct}red_alloy_small_gear`
                },
                true,
                'compass'
            ],
            [
                `${mi}bronze_macerator`,
                ['ABA','BCB','DED'],
                {
                    A: 'diamond',
                    B: `${mi}copper_gear`,
                    C: `${mi}bronze_machine_casing`,
                    D: 'piston',
                    E: `#${mi}fluid_pipes` 
                },
                true,
                'macerator',
                'modern_industrialization:steam_age/bronze/macerator_asbl'
            ],
            [
                `${mi}bronze_compressor`,
                ['ADA','BCB','EEE'],
                {
                    A: `${ct}copper_screw`,
                    B: `${mi}copper_gear`,
                    C: `${mi}bronze_machine_casing`,
                    D: 'piston',
                    E: `#${mi}fluid_pipes`
                },
                true,
                'modern_industrialization:steam_age/bronze/compressor_asbl'
            ],
            [
                `${mi}bronze_automatic_forge_hammer`,
                ['EBE','CDC','EFE'],
                {
                    B: 'piston',
                    C: `${mi}copper_gear`,
                    D: `${mi}bronze_machine_casing`,
                    E: `#${mi}fluid_pipes`,
                    F: 'anvil'
                },
                true,
                'bronze_forge_hammer'
            ],
            [
                'smithing_table',
                ['aa','bb','  '],
                {
                    a: '#c:plates/steel',
                    b: '#minecraft:planks'
                },
                true,
                'smithing_table'
            ],
            [
                `${mi}capacitor`,
                ['aba','cdc','aba'],
                {
                    a: '#c:nuggets/red_alloy',
                    b: '#c:plates/gold',
                    c: `${mi}copper_wire`,
                    d: `${mi}rubber_sheet`
                },
                false,
                'capacitor'
            ],
            [
                `2x ${mi}resistor`,
                ['aba','cdc','aba'],
                {
                    a: '#c:nuggets/red_alloy',
                    b: 'paper',
                    c: `${mi}copper_fine_wire`,
                    d: `${mi}coal_dust`
                },
                false,
                'resistor'
            ],
            [
                `${mi}redstone_battery`,
                ['aba','cdc','cdc'],
                {
                    a: `${mi}tin_cable`,
                    b: `${mi}battery_alloy_plate`,
                    c: `${mi}battery_alloy_curved_plate`,
                    d: `#c:plates/red_alloy`
                },
                true,
                'redstone_battery'
            ],
            [
                'hangglider:glider_framework',
                [' a ', 'aba','ccc'],
                {
                    a: `${mi}steel_plate`,
                    b: `${mi}steel_ring`,
                    c: `${mi}steel_rod`,
                },
                true,
            ],
            [
                'hangglider:glider_wing',
                ['  a',' ab','abb'],
                {
                    a:'kubejs:treated_stick',
                    b: 'kubejs:treated_leather'
                },
                true,
            ],
            [
                '2x kubejs:treated_stick',
                ['a','a',' '],
                {
                    a: 'kubejs:treated_wood_planks'
                },
                false,
                'treated_stick'
            ],
            [
                '4x kubejs:treated_stick',
                ['ab','a ','  '],
                {
                    a: 'kubejs:treated_wood_planks',
                    b: saws
                },
                false,
                'treated_stick_alt'
            ],
            [
                '2x kubejs:treated_wood_frame_box',
                ['a a',' a ','a a'],
                {
                    a: 'kubejs:treated_stick'
                },
                true,
                'frame_box'
            ],
            [
                'kubejs:primitive_pump_siding',
                ['aba',' d ','   '],
                {
                    a: 'kubejs:steel_screw',
                    b: 'kubejs:treated_wood_planks',
                    d: 'cobblestone_slab'
                },
                true,
            ],
            [
                'modern_industrialization:primitive_pump',
                ['fba','ede','   '],
                {
                    a: 'kubejs:steel_screw',
                    b: 'kubejs:treated_wood_planks',
                    d: 'cobblestone_slab',
                    e: `kubejs:steel_rotor`,
                    f: `#c:rings/steel`
                },
                true,
            ],
            [
                'minecraft:nether_brick_fence',
                ['aba','aba','aba'],
                {
                    a: 'nether_bricks',
                    b: 'nether_brick'
                }
            ],
            [
                'actuallyadditions:wood_casing',
                ['aba','b b','aba'],
                {
                    a: 'kubejs:treated_wood_planks',
                    b: 'kubejs:treated_stick'
                }
            ],
            [
                'actuallyadditions:fermenting_barrel',
                ['aba','aca','ada'],
                {
                    a: '#minecraft:logs',
                    b: 'modern_industrialization:iron_large_plate',
                    c: 'actuallyadditions:canola',
                    d: 'actuallyadditions:wood_casing'
                },
                true,
            ],
            [
                'justhammers:iron_hammer',
                ['aba','aca',' c '],
                {
                    a: `${mi}iron_plate`,
                    b: `${mi}iron_large_plate`,
                    c: 'kubejs:treated_stick',
                }
            ],
            [
                'justhammers:gold_hammer',
                ['aba','aca',' c '],
                {
                    a: `${mi}gold_plate`,
                    b: `kubejs:gold_large_plate`,
                    c: 'kubejs:treated_stick'
                }
            ],
            [
                'justhammers:diamond_hammer',
                ['aba','aca',' c '],
                {
                    a: `${mi}diamond_plate`,
                    b: `${mi}diamond_large_plate`,
                    c: 'kubejs:treated_stick'
                }
            ],
            [
                'kubejs:steel_mining_hammer',
                ['aba','aca',' c '],
                {
                    a: `${mi}steel_plate`,
                    b: `${mi}steel_large_plate`,
                    c: 'kubejs:treated_stick'
                }
            ],
            [
                'kubejs:dark_steel_mining_hammer',
                ['aba','aca',' c '],
                {
                    a: `kubejs:dark_steel_plate`,
                    b: `kubejs:dark_steel_large_plate`,
                    c: 'kubejs:treated_stick'
                }
            ],
            [
                'actuallyadditions:basic_coil',
                ['abc','bdb','cba'],
                {
                    a: 'actuallyadditions:restonia_crystal',
                    b: 'kubejs:enori_wire',
                    c: 'kubejs:black_quartz_rod',
                    d: 'kubejs:black_quartz_rod_magnetic'
                }
            ],
            [
                'actuallyadditions:advanced_coil',
                ['bbb','cac','bbb'],
                {
                    a: 'kubejs:diamatine_rod',
                    b: 'kubejs:gold_magnetic_wire',
                    c: 'actuallyadditions:basic_coil',
                }
            ],
            [
                'extended_industrialization:bronze_solar_boiler',
                ['aaa','bbb','cdc'],
                {
                    a: '#c:glass_blocks',
                    b: 'kubejs:double_silver_plate',
                    c: `${mi}fire_clay_bricks`,
                    d: `${mi}bronze_boiler`
                },
                true,
            ],
            [
                'modern_industrialization:steam_mining_drill',
                ['abb','cdb','eca'],
                {
                    a:`${mi}bronze_furnace` ,
                    b: `${mi}diamond_plate`,
                    c: `${mi}iron_large_plate`,
                    d: `${mi}copper_drill_head`,
                    e: 'kubejs:iron_rotary_blade'
                },
                false,
                'modern_industrialization:tools/steam_mining_drill'
            ],
            [
                'kubejs:steel_casing',
                ['aba','bcb','aba'],
                {
                    a: `${mi}steel_large_plate`,
                    b: 'kubejs:black_quartz_plate',
                    c: 'industrialforegoing:machine_frame_pity'
                },
                true,
            ],
            [
                'industrialforegoing:machine_frame_pity',
                ['aba','bcb','aba'],
                {
                    a: 'kubejs:canola_treated_wood_planks',
                    b: 'kubejs:compressed_cobblestone',
                    c: 'kubejs:red_alloy_gear'
                },
                true,
            ],
            [
                'actuallyadditions:lens',
                ['cac','aba','cac'],
                {
                    a: '#c:glass_blocks',
                    b: 'industrialforegoing:white_laser_lens',
                    c: `${mi}steel_plate`
                },
                true,
            ],
            [
                `2x ${mi}diode`,
                [' bc','adc',' bc'],
                {
                    a: 'actuallyadditions:advanced_coil',
                    b: `kubejs:steel_magnetic_plate`,
                    c: '#c:glass_blocks',
                    d: `${mi}silicon_plate`
                },
                false,
                'diode'
            ],
            [
                `4x ${mi}diode`,
                [' bc','adc',' bc'],
                {
                    a: 'actuallyadditions:advanced_coil',
                    b: `kubejs:steel_magnetic_plate`,
                    c: '#c:glass_blocks',
                    d: `${mi}silicon_n_doped_plate`
                },
                false,
                'diode_alt'
            ],
            [
                `4x ${mi}transistor`,
                [' a ','bbb','ccc'],
                {
                    a: 'actuallyadditions:advanced_coil',
                    b: `kubejs:steel_magnetic_plate`,
                    c: `${mi}silicon_plate`
                },
                false,
                'transistor'
            ],
            [
                `8x ${mi}transistor`,
                [' a ','bbb','cdc'],
                {
                    a: 'actuallyadditions:advanced_coil',
                    b: `kubejs:steel_magnetic_plate`,
                    c: `${mi}silicon_n_doped_plate`,
                    d: `${mi}silicon_p_doped_plate`
                },
                false,
                'transistor_alt'
            ],
            [
                'ironchest:wood_to_copper_chest_upgrade',
                ['aaa','aba','aaa'],
                {
                    a: `${mi}copper_plate`,
                    b: '#minecraft:planks'
                },
                true,
            ],
            [
                'actuallyadditions:canola_press',
                ['aba','cdc','aba'],
                {
                    a: `${mi}iron_plate`,
                    b: 'actuallyadditions:canola',
                    c: 'piston',
                    d: 'kubejs:stone_casing'
                },
                true,
            ],
            [
                'kubejs:stone_casing',
                ['aba','bcb','aba'],
                {
                    a: 'kubejs:treated_wood_frame_box',
                    b: 'kubejs:double_compressed_cobblestone',
                    c: 'actuallyadditions:wood_casing'
                }
            ],
            [
                'actuallyadditions:drill_light_blue',
                ['fab','cda','ecf'],
                {
                    a: 'actuallyadditions:advanced_coil',
                    b: 'kubejs:enori_drill_head',
                    c: `${mi}aluminum_large_plate`,
                    d: 'actuallyadditions:drill_core',
                    e: `${mi}electronic_circuit`,
                    f: 'kubejs:steel_rotary_blade'
                },
                true,
            ],
            [
                'actuallyadditions:drill_upgrade_five_by_five',
                ['aba','bcb','aba'],
                {
                    a: 'kubejs:empowered_diamatine_plate',
                    b: 'actuallyadditions:empowered_enori_crystal',
                    c: 'kubejs:ultimate_coil'
                },
                true,
            ],
            [
                'actuallyadditions:drill_upgrade_silk_touch',
                ['aba','bcb','aba'],
                {
                    a: 'kubejs:empowered_emeradic_plate',
                    b: 'actuallyadditions:empowered_diamatine_crystal',
                    c: 'kubejs:ultimate_coil'
                },
                true,
            ],
            // [
            //     `${mi}fluid_extractor`,
            //     ['aba','cde','fbf'],
            //     {
            //         a: '#c:glass_blocks',
            //         b: `${mi}analog_circuit`,
            //         c: `${mi}pump`,
            //         d: `${mi}basic_machine_hull`,
            //         e: `${mi}piston`,
            //         f: `${mi}tin_cable`
            //     },
            //     true,
            // ],
            [
                `${mi}lathe`,
                ['faf','cde','bfb'],
                {
                    a: `kubejs:steel_rotary_blade`,
                    b: `${mi}analog_circuit`,
                    c: `${mi}motor`,
                    d: `${mi}basic_machine_hull`,
                    e: `${mi}piston`,
                    f: `${mi}tin_cable`
                },
                true,
            ],
            [
                'kubejs:steel_rotary_blade',
                [' a ','aba',' a '],
                {
                    a: `${mi}emerald_dust`,
                    b: `${mi}steel_gear`
                }
            ],
            [
                'kubejs:iron_rotary_blade',
                [' a ','aba',' a '],
                {
                    a: `kubejs:black_quartz_dust`,
                    b: `${mi}iron_gear`
                }
            ],
            [
                `${mi}chemical_bath`,
                ['aba','cdc','efe'],
                {
                    a: `${mi}conveyor`,
                    b: `${mi}tin_cable`,
                    c: `${mi}pump`,
                    d: `#c:glass_blocks`,
                    e: `${mi}analog_circuit`,
                    f: `${mi}basic_machine_hull`
                },
                true,
            ],
            [
                `${mi}steel_upgrade`,
                ['aba','cdc','efe'],
                {
                    a: `${mi}bronze_rod`,
                    b: `${mi}bronze_rotor`,
                    c: `${mi}bronze_gear`,
                    d: `${mi}steel_machine_casing`,
                    e: `#${mi}fluid_pipes`,
                    f: `${mi}fire_clay_bricks`
                }
            ],
            [
                `${mi}automatic_forge_hammer_electric`,
                ['aba','cdc','aea'],
                {
                    a: `${mi}tin_cable`,
                    b: `${mi}piston`,
                    c: `${mi}analog_circuit`,
                    d: `${mi}basic_machine_hull`,
                    e: `anvil`
                },
                true,
            ],
            [
                'stonecutter',
                [' a ','bbb','   '],
                {
                    a: `kubejs:iron_rotary_blade`,
                    b: 'stone',
                }
            ],
            [
                'actuallyadditions:drill_upgrade_fortune_ii',
                ['aba','bcb','aba'],
                {
                    a: 'actuallyadditions:ender_casing',
                    b: 'actuallyadditions:empowered_emeradic_crystal',
                    c: 'kubejs:ultimate_coil'
                },
                true,
            ],
            [
                'dankstorage:dock',
                ['aba','b b','aba'],
                {
                    a: `${mi}steel_double_ingot`,
                    b: 'kubejs:black_plastic'
                },
                true,
            ],
            [
                'enderio:basic_capacitor',
                [' a ','bcb','a a'],
                {
                    a: 'actuallyadditions:basic_coil',
                    b: 'enderio:grains_of_infinity',
                    c: `${mi}capacitor`
                },
                true,
            ],
            [
                `${mi}op_amp`,
                ['abb','acd','abb'],
                {
                    a: `${mi}resistor`,
                    b: `${mi}transistor`,
                    c: `${mi}diode`,
                    d: 'enderio:basic_capacitor'
                }
            ],
            [
                `${mi}and_gate`,
                ['ab ','aca','ab '],
                {
                    a: 'kubejs:pulsating_alloy_wire',
                    b: `${mi}resistor`,
                    c: `${mi}op_amp`
                }
            ],
            [
                `${mi}not_gate`,
                ['   ','acb','   '],
                {
                    a: 'kubejs:empowered_diamatine_wire',
                    b: `${mi}resistor`,
                    c: `${mi}op_amp`
                }
            ],
            [
                `${mi}or_gate`,
                [' c ','aba',' c '],
                {
                    a: 'kubejs:redstone_alloy_wire',
                    b: `${mi}diode`,
                    c: `${mi}op_amp`
                }
            ],
            [
                `${mi}extruder`,
                ['aba','bcb','ada'],
                {
                    a: `${mi}electrum_cable`,
                    b: `${mi}electronic_circuit`,
                    c: `${mi}basic_machine_hull`,
                    d: `anvil`
                },
                true,
            ],
            [
                'kubejs:copper_chainsaw_head',
                [' ab','cda','ec '],
                {
                    a: `${mi}copper_curved_plate`,
                    b: `${mi}copper_plate`,
                    c: `${mi}copper_gear`,
                    d: `${mi}copper_rod`,
                    e: `${mi}copper_bolt`
                },
                true,
            ],
            [
                'extended_industrialization:steam_chainsaw',
                ['abb','cdb','eca'],
                {
                    a:`${mi}bronze_furnace` ,
                    b: `${mi}diamond_plate`,
                    c: `${mi}iron_large_plate`,
                    d: `kubejs:copper_chainsaw_head`,
                    e: 'kubejs:iron_rotary_blade'
                },
                true,
                'steam_chainsaw'
            ],
            [
                'actuallyadditions:drill_upgrade_speed_iii',
                ['ada','dcd','ada'],
                {
                    a: 'actuallyadditions:empowered_enori_crystal',
                    c: 'kubejs:ultimate_coil',
                    d: 'cake'
                },
                true,
                'drill_upgrade_speed_iii',
            ],
            [
                `${mi}electric_alloy_smelter_alt`,
                ['aba','bcb','ddd'],
                {
                    a: `${mi}analog_circuit`,
                    b: `${mi}cupronickel_wire_magnetic`,
                    c: `${mi}basic_machine_hull`,
                    d: `${mi}tin_cable` 
                },
                true,
            ],
            [
                'industrialforegoing:resourceful_furnace',
                ['aba','cdc','efg'],
                {
                    a: 'industrialforegoing:plastic',
                    b: `${mi}electric_furnace`,
                    c: `${mi}electronic_circuit`,
                    d: 'industrialforegoing:machine_frame_simple',
                    e: `${mi}silicon_n_doped_plate`,
                    f: `${mi}large_motor`,
                    g: `${mi}silicon_p_doped_plate`
                },
                true,
            ],
            [
                `${mi}steel_extractor`,
                ['aea','bcd','aea'],
                {
                    a: `#${mi}fluid_pipes`,
                    b: 'piston',
                    c: `${mi}steel_machine_casing`,
                    d: `glass`,
                    e: `${mi}bronze_gear`
                },
                true,
            ],
            [
                `${mi}electric_extractor`,
                ['aba','cde','fbf'],
                {
                    a: 'glass',
                    b: `${mi}analog_circuit`,
                    c: `${mi}piston`,
                    d: `${mi}basic_machine_hull`,
                    e: `${mi}pump`,
                    f: `${mi}tin_cable`
                },
                true,
            ],
            [
                'coxinhautilities:cardboard_box',
                ['aaa','aba','aaa'],
                {
                    a: `${mi}wood_pulp`,
                    b: 'dankstorage:dock'
                },
                true,
            ],
            [
                '16x kubejs:steel_bars',
                ['aaa','aaa','   '],
                {
                    a: `${mi}steel_ingot`
                },
                false,
                'steelbars'
            ],
            [
                '4x prettypipes:pipe',
                ['aaa','bcb','aaa'],
                {
                    a: `kubejs:steel_bars`,
                    b: 'glass',
                    c: `kubejs:red_alloy_small_gear`
                },
                true,
                'prettypipe'
            ],
            [
                'enderio:alloy_smelter',
                ['dbd','bcb','aea'],
                {
                    a: `${mi}steel_gear`,
                    b: `blast_furnace`,
                    c: 'enderio:void_chassis',
                    d: `${mi}electronic_circuit`,
                    e: 'actuallyadditions:advanced_coil'
                },
                true,
            ],
            [
                'industrialforegoing:enchantment_extractor',
                ['aba','cdc','efe'],
                {
                    a: 'industrialforegoing:plastic',
                    b: 'actuallyadditions:lens_of_disenchanting',
                    c: 'bookshelf',
                    d: 'industrialforegoing:machine_frame_advanced',
                    e: 'kubejs:empowered_diamatine_plate',
                    f: 'kubejs:vibrant_alloy_gear'
                },
                true,
            ],
            [
                'craftingstation:crafting_station',
                ['aba','aca','aaa'],
                {
                    a: 'stick',
                    b: 'kubejs:pattern',
                    c:'crafting_table'
                },
                true,
            ],
            [
                'enderio:fluid_tank',
                ['aba','bcb','aba'],
                {
                    a: `${mi}steel_ingot`,
                    b: `kubejs:steel_bars`,
                    c: '#c:glass_blocks'
                },
                true,
            ],
            [
                `${mi}bronze_tank`,
                ['bbb','bab','bbb'],
                {
                    a: 'bucket',
                    b: `${mi}bronze_plate`
                }
            ],
            [
                'anvil',
                ['aaa',' b ','bbb'],
                {
                    a: 'iron_block',
                    b: `${mi}iron_plate`,
                }
            ],
            [
                `${mi}inscriber`,
                ['aba','cde','aba'],
                {
                    a: `${mi}tin_cable`,
                    b: `${mi}analog_circuit`,
                    c: 'ae2:quartz_block',
                    d: `${mi}basic_machine_hull`,
                    e: `${mi}robot_arm`
                },
                true,
            ],
            [
                'actuallyadditions:teleport_staff',
                [' ab',' ce','cd '],
                {
                    a: 'actuallyadditions:empowered_diamatine_crystal',
                    b: 'enderio:ender_crystal',
                    c: 'actuallyadditions:ender_casing',
                    d: 'actuallyadditions:single_battery',
                    e: 'enderio:staff_of_travelling' 
                },
                true,
            ],
            [
                'enderio:pulsating_crystal',
                ['aca','aba','aca'],
                {
                    a: 'enderio:pulsating_alloy_nugget',
                    b: 'actuallyadditions:diamatine_crystal',
                    c: 'undergarden:forgotten_nugget'
                }
            ],
            [
                'enderio:vibrant_crystal',
                ['aaa','aba','aaa'],
                {
                    a: 'enderio:vibrant_alloy_nugget',
                    b: 'actuallyadditions:emeradic_crystal'
                }
            ],
            [
                `${mi}gas_collector`,
                ['aba','cdc','aea'],
                {
                    a: 'enderio:dark_steel_bars',
                    b: `${mi}stainless_steel_tank`,
                    c: `${mi}large_pump`,
                    d: `${mi}basic_machine_hull`,
                    e: `${mi}electronic_circuit`
                },
                true,
            ],
            [
                `${mi}large_chemical_reactor`,
                ['aba','cdc','aea'],
                {
                    a: `${mi}digital_circuit`,
                    b: `${mi}stainless_steel_rotor`,
                    c: `${mi}advanced_pump`,
                    d: `${mi}advanced_motor`,
                    e: `${mi}turbo_machine_hull`
                },
                true,
            ],
            [
                `4x ${mi}stainless_steel_drill`,
                ['afc','def','gda'],
                {
                    a: 'kubejs:dark_steel_gear',
                    c: `${mi}stainless_steel_drill_head`,
                    d: `${mi}advanced_motor`,
                    e: `${mi}digital_circuit`,
                    f: `#${mi}item_pipes`,
                    g: `${mi}aluminum_cable`
                },
                true,
                'stainless_steel_drill'
            ],
            [
                '4x kubejs:soularium_drill',
                ['afc','def','gda'],
                {
                    a: 'kubejs:dark_steel_gear',
                    c: 'kubejs:soularium_drill_head',
                    d: `${mi}advanced_pump`,
                    e: `${mi}digital_circuit`,
                    f: `#${mi}fluid_pipes`,
                    g: `${mi}aluminum_cable`
                },
                true,
                'soularium_drill'
            ],
            [
                '4x kubejs:cloggrum_drill',
                ['abc','deb','fda'],
                {
                    a: `${mi}iron_gear`,
                    b: `#${mi}item_pipes`,
                    c: 'kubejs:cloggrum_drill_head',
                    d: `${mi}motor`,
                    e: `${mi}analog_circuit`,
                    f: `${mi}tin_cable`,
                },
                true,
                'cloggrum_drill'
            ],
            [
                '4x kubejs:froststeel_drill',
                ['abc','deb','fda'],
                {
                    a: `${mi}steel_gear`,
                    b: `#${mi}item_pipes`,
                    c: 'kubejs:froststeel_drill_head',
                    d: `${mi}motor`,
                    e: `${mi}electronic_circuit`,
                    f: `${mi}electrum_cable`,
                },
                true,
                'froststeel_drill'
            ],
            [
                '4x kubejs:iridium_drill',
                ['abc','geh','fda'],
                {
                    a: `kubejs:osmium_gear`,
                    b: `#${mi}item_pipes`,
                    c: 'kubejs:iridium_drill_head',
                    d: `kubejs:large_ultimate_motor`,
                    e: `${mi}quantum_circuit`,
                    f: `${mi}superconductor_cable`,
                    g: `kubejs:large_ultimate_pump`,
                    h: `#${mi}fluid_pipes`
                },
                true,
                'iridium_drill'
            ],
            [
                '4x modern_industrialization:titanium_drill',
                ['abc','deb','fda'],
                {
                    a: `kubejs:tungstensteel_gear`,
                    b: `#${mi}item_pipes`,
                    c: `${mi}titanium_drill_head`,
                    d: `${mi}large_advanced_motor`,
                    e: `${mi}processing_unit`,
                    f: `${mi}annealed_copper_cable`,
                },
                false,
                'titanium_drill'
            ],
            [
                '4x kubejs:tungstensteel_drill',
                ['agc','heb','fda'],
                {
                    a: `kubejs:platinum_gear`,
                    b: `#${mi}item_pipes`,
                    c: `kubejs:tungstensteel_drill_head`,
                    d: `${mi}large_advanced_motor`,
                    e: `${mi}processing_unit`,
                    f: `${mi}annealed_copper_cable`,
                    g: `#${mi}fluid_pipes`,
                    h: `${mi}large_advanced_pump`
                },
                true,
                'tungstensteel_drill'
            ],
            [
                'enderio:enchanter',
                ['aba','ccc',' c '],
                {
                    a: 'kubejs:empowered_diamatine_plate',
                    b: 'book',
                    c: 'enderio:dark_steel_ingot'
                },
                true,
            ],
            [
                'enderio:soul_chain',
                [' a ','bcb',' a '],
                {
                    a: 'kubejs:soularium_curved_plate',
                    b: `${mi}quartz_dust`,
                    c: 'kubejs:empowered_enori_rod'
                },
                true,
            ],
            [
                `${mi}small_chemical_reactor`,
                ['aba','cdc','efe'],
                {
                    a: '#c:glass_blocks',
                    b: `${mi}large_pump`,
                    c: `${mi}aluminum_rotor`,
                    d: `${mi}basic_machine_hull`,
                    e: `${mi}electronic_circuit`,
                    f: `${mi}electrum_cable`
                },
                true,
            ],
            [
                '4x stick',
                ['ab','a ','  '],
                {
                    a: '#minecraft:planks',
                    b: saws
                },
                false,
                'stick_with_saw'
            ],
            [
                '2x stick',
                ['a','a',' '],
                {
                    a: '#minecraft:planks'
                },
                false,
                'stick'
            ],
            [
                'kubejs:stone_bucket',
                ['a a',' a ','   '],
                {
                    a: '#c:stones'
                }
            ],
            [
                'kubejs:flint_pickaxe_head',
                ['aaa',' b ','   '],
                {
                    a: 'flint',
                    b: knives
                }
            ],
            [
                'kubejs:flint_axe_head',
                ['aa','ab','  '],
                {
                    a: 'flint',
                    b: knives
                }
            ],
            [
                'kubejs:flint_shovel_head',
                ['a','b',' '],
                {
                    a: 'flint',
                    b: knives
                }
            ],
            [
                'kubejs:flint_sword_head',
                ['a','a','b'],
                {
                    a: 'flint',
                    b: knives
                }
            ],
            [
                'kubejs:flint_hoe_head',
                ['aab','   ','   '],
                {
                    a: 'flint',
                    b: knives
                }
            ],
            [
                'kubejs:tool_rod',
                [' a','a ','  '],
                {
                    a: 'stick'
                }
            ],
            [
                'coxinhautilities:drying_rack',
                ['   ','aaa','ccc'],
                {
                    a: '#minecraft:wooden_slabs',
                    c: 'kubejs:wooden_screw'
                },
                true,
            ],
            [
                'actuallyadditions:crafter_on_a_stick',
                ['ab','c ','  '],
                {
                    a: 'kubejs:wooden_screw',
                    b: 'crafting_table',
                    c: 'stick'
                },
                true,
            ],
            [
                'productivemetalworks:brown_foundry_controller',
                ['aaa','aba','aaa'],
                {
                    a: `${mi}fire_clay_brick`,
                    b: 'blast_furnace'
                }
            ],
            [
                'patchouli:guide_book[patchouli:book="productivemetalworks:guide"]',
                [' a ','aba',' a '],
                {
                    a: `${mi}fire_clay_brick`,
                    b: 'book'
                },
                false,
                'productivemetalworks_book'
            ],
            [
                'productivemetalworks:brown_foundry_drain',
                ['aaa','a a','aaa'],
                {
                    a: `${mi}fire_clay_brick`
                }
            ],
            [
                'productivemetalworks:brown_foundry_tank',
                ['aaa','aba','aaa'],
                {
                    a: `${mi}fire_clay_brick`,
                    b: 'bucket'
                }
            ],
            [
                'productivemetalworks:brown_foundry_tank',
                ['aaa','aba','aaa'],
                {
                    a: `${mi}fire_clay_brick`,
                    b: 'ceramicbucket:ceramic_bucket'
                },
                false,
                'black_foundry_tank_alt'
            ],
            [
                'productivemetalworks:brown_foundry_window',
                [' a ','aba',' a '],
                {
                    a: `${mi}fire_clay_brick`,
                    b: '#c:glass_blocks/colorless'
                }
            ],
            [
                'productivemetalworks:brown_fire_bricks',
                ['aa','aa','  '],
                {
                    a: `${mi}fire_clay_brick`
                },
                false,
                'brown_fire_bricks'
            ],
            [
                'productivemetalworks:foundry_tap',
                ['a a',' a ','   '],
                {
                    a: `${mi}fire_clay_brick`
                },
                false,
                'foundry_tap'
            ],
            [
                'productivemetalworks:casting_basin',
                ['a a','a a','aaa'],
                {
                    a: `${mi}fire_clay_brick`
                }
            ],
            [
                'productivemetalworks:casting_table',
                ['aaa','a a','a a'],
                {
                    a: `${mi}fire_clay_brick`
                }
            ],
            [
                'productivemetalworks:liquid_heating_coil',
                ['bbb','bcb','aaa'],
                {
                    a: `${mi}fire_clay_brick`,
                    b: `${mi}copper_plate`,
                    c: 'bucket'
                }
            ],
            [
                'productivemetalworks:liquid_heating_coil',
                ['bbb','bcb','aaa'],
                {
                    a: `${mi}fire_clay_brick`,
                    b: `${mi}copper_plate`,
                    c: 'ceramicbucket:ceramic_bucket'
                },
                false,
                'liquid_heating_coil_alt'
            ],
            [
                'productivemetalworks:powered_heating_coil',
                ['bbb','bcb','aaa'],
                {
                    a: `${mi}fire_clay_brick`,
                    b: `${mi}annealed_copper_plate`,
                    c: `${mi}motor`
                }
            ],
            [
                'treetap:tap',
                ['   ','a a','bab'],
                {
                    a: `${mi}steel_plate`,
                    b: `${mi}steel_nugget`
                }
            ],
            [
                'buildinggadgets2:gadget_building',
                ['aba','cdc','aea'],
                {
                    a: `${mi}iron_plate`,
                    b: 'kubejs:diamond_gear',
                    c: `${mi}iron_large_plate`,
                    d: `${mi}analog_circuit`,
                    e: `${mi}restonia_battery`
                },
                true,
            ],
            [
                'buildinggadgets2:gadget_exchanging',
                ['aba','cdc','aea'],
                {
                    a: `${mi}iron_plate`,
                    b: 'kubejs:diamond_gear',
                    c: `${mi}iron_large_plate`,
                    d: `${mi}electronic_circuit`,
                    e: `${mi}motor`
                },
                true,
            ],
            [
                'buildinggadgets2:gadget_copy_paste',
                ['aba','cdc','aea'],
                {
                    a: `${mi}iron_plate`,
                    b: 'kubejs:emerald_gear',
                    c: `${mi}iron_large_plate`,
                    d: `${mi}electronic_circuit`,
                    e: 'kubejs:diamond_gear'
                },
                true,
            ],
            [
                'buildinggadgets2:gadget_cut_paste',
                ['aba','cdc','aea'],
                {
                    a: `${mi}lead_plate`,
                    b: 'kubejs:redstone_alloy_gear',
                    c: `kubejs:lead_large_plate`,
                    d: `${mi}electronic_circuit`,
                    e: `ender_pearl`
                },
                true,
            ],
            [
                'buildinggadgets2:gadget_destruction',
                ['aba','cdc','aea'],
                {
                    a: `${mi}lead_plate`,
                    b: 'kubejs:redstone_alloy_gear',
                    c: `kubejs:lead_large_plate`,
                    d: `${mi}electronic_circuit`,
                    e: `actuallyadditions:empowered_void_crystal`
                },
                true,
            ],
            [
                'diamond_pickaxe',
                ['aee',' c ',' c '],
                {
                    a: `${mi}diamond_plate`,
                    c: 'stick',
                    e: 'diamond'
                }
            ],
            [
                'diamond_axe',
                ['ae ','ac ',' c '],
                {
                    a: `${mi}diamond_plate`,
                    c: 'stick',
                    e: 'diamond'
                }
            ],
            [
                'diamond_shovel',
                [' a ',' c ',' c '],
                {
                    a: `${mi}diamond_plate`,
                    c: 'stick',
                }
            ],
            [
                'diamond_hoe',
                ['ae ',' c ',' c '],
                {
                    a: `${mi}diamond_plate`,
                    c: 'stick',
                    e: 'diamond'
                }
            ],
            [
                'diamond_sword',
                [' a ',' a ',' c '],
                {
                    a: `${mi}diamond_plate`,
                    c: 'stick',
                }
            ],
            [
                'hopper',
                ['aba','aca',' a '],
                {
                    a: `${mi}iron_plate`,
                    b: 'chest',
                    c: `kubejs:iron_small_gear`,
                }
            ],
            [
                `${mi}oil_cracking_unit`,
                ['aba','cdc','aba'],
                {
                    a: `${mi}cupronickel_coil`,
                    b: `${mi}advanced_pump`,
                    c: `${mi}digital_circuit`,
                    d: `${mi}turbo_machine_hull`
                },
                true,
            ],
            [
                `${mi}autoclave`,
                ['aba','aca','ded'],
                {
                    a: `${mi}steel_plate`,
                    b: `glass`,
                    c: `${mi}basic_machine_hull`,
                    d: `${mi}analog_circuit`,
                    e: `${mi}pump`
                },
                true,
            ],
            [
                `kubejs:rubber_chestplate`,
                ['a a','aaa','aaa'],
                {
                    a: `${mi}rubber_sheet`
                }
            ],
            [
                `kubejs:rubber_leggings`,
                ['aaa','a a','a a'],
                {
                    a: `${mi}rubber_sheet`
                }
            ],
            [
                'enderio:double_layer_capacitor',
                ['ada','bcb','ada'],
                {
                    a: 'actuallyadditions:empowered_restonia_crystal',
                    b: 'enderio:basic_capacitor',
                    c: 'kubejs:energetic_alloy_gear',
                    d: 'actuallyadditions:advanced_coil'
                },
                true,
            ],
            [
                'hostilenetworks:deep_learner',
                ['aba','bcb','ada'],
                {
                    a: 'kubejs:dark_steel_large_plate',
                    b: 'enderio:double_layer_capacitor',
                    c: 'enderio:sentient_ender',
                    d: `${mi}processing_unit`
                },
                true,
            ],
            [
                'hostilenetworks:blank_data_model',
                ['aba','cde','afa'],
                {
                    a: `${mi}stainless_steel_plate`,
                    b: 'enderio:octadic_capacitor',
                    c: `${mi}not_gate`,
                    d: 'kubejs:revived_contractor',
                    e: `${mi}and_gate`,
                    f: `${mi}or_gate` 
                },
                true,
            ],
            [
                '16x hostilenetworks:prediction_matrix',
                ['bab','aca','bab'],
                {
                    a: '#c:glass_panes',
                    b: 'kubejs:double_silver_plate',
                    c: `${mi}random_access_memory`
                },
                true,
                'prediction_matrix'
            ],
            [
                'hostilenetworks:sim_chamber',
                [' a ','bcb','ded'],
                {
                    a: 'enderio:frank_n_zombie',
                    b: 'enderio:pulsating_crystal',
                    c: 'kubejs:neural_casing',
                    d: 'actuallyadditions:empowered_palis_crystal_block',
                    e: `${mi}processing_unit`
                },
                true,
            ],
            [
                'hostilenetworks:loot_fabricator',
                [' a ','bcb','ded'],
                {
                    a: 'netherite_ingot',
                    b: 'kubejs:flaming_crystal',
                    c: 'kubejs:neural_casing',
                    d: 'actuallyadditions:empowered_restonia_crystal_block',
                    e: `${mi}processing_unit`
                },
                true,
            ],
            [
                'kubejs:advanced_robot_arm',
                ['aaa','bcb','dec'],
                {
                    a: `${mi}annealed_copper_cable`,
                    b: `${mi}large_advanced_motor`,
                    c: 'kubejs:titanium_rod_magnetic',
                    d: `${mi}robot_arm`,
                    e: `${mi}processing_unit`
                }
            ],
            [
                `${mi}advanced_electric_quarry`,
                ['aba','cdc','aea'],
                {
                    a: `${mi}large_advanced_motor`,
                    b: `kubejs:advanced_robot_arm`,
                    c: `${mi}processing_unit`,
                    d: `${mi}highly_advanced_machine_hull`,
                    e: `${mi}electric_quarry`
                },
                true,
            ],
            [
                `${mi}bedrock_drilling_rig`,
                ['aba','cdc','aea'],
                {
                    a: `${mi}large_advanced_pump`,
                    b: `kubejs:advanced_robot_arm`,
                    c: `${mi}processing_unit`,
                    d: `${mi}highly_advanced_machine_hull`,
                    e: `${mi}oil_drilling_rig`
                },
                true,
            ],
            [
                '12x enderio:dark_steel_ladder',
                ['a a','aaa','a a'],
                {
                    a: 'kubejs:dark_steel_rod'
                },
                false,
                'dark_steel_ladder'
            ],
            [
                '8x coxinhautilities:copper_ladder',
                ['a a','aaa','a a'],
                {
                    a: `${mi}copper_rod`
                },
                false,
                'copper_ladder'
            ],
            [
                'kubejs:assembly_control_casing',
                ['aba','cdc','aca'],
                {
                    a: `${mi}quantum_circuit`,
                    b: "modern_industrialization:qubit",
                    c: 'kubejs:ultimate_motor',
                    d: 'kubejs:tungstensteel_frame_box'
                },
                true,
                'assembly_control_casing'
            ],
            [
                'kubejs:ultimate_motor',
                ['abc','bdb','cba'],
                {
                    a: `${mi}osmium_cable`,
                    b: 'kubejs:iridium_wire',
                    c:'kubejs:superconductor_rod',
                    d: 'kubejs:superconductor_rod_magnetic'
                },
                true,
            ],
            [
                'kubejs:large_ultimate_motor',
                ['aaa','bcc','aaa'],
                {
                    a: 'kubejs:ultimate_motor',
                    b: `${mi}quantum_circuit`,
                    c: 'kubejs:superconductor_rod'
                },
                true,
            ],
            [
                'kubejs:ultimate_robot_arm',
                ['aaa','bcb','dec'],
                {
                    a: `${mi}osmium_cable`,
                    b: `kubejs:ultimate_motor`,
                    c: 'kubejs:superconductor_rod_magnetic',
                    e: `${mi}quantum_circuit`,
                    d: 'kubejs:advanced_robot_arm'
                },
                true,
            ],
            [
                `${mi}assembly_line`,
                ['aba','cdc','aba'],
                {
                    a: `kubejs:assembly_control_casing`,
                    b: 'kubejs:ultimate_robot_arm',
                    c: 'kubejs:large_ultimate_motor',
                    d: `${mi}quantum_machine_hull`
                },
                true,
            ],
            [
                'kubejs:assembly_line_casing',
                ['aba','cdc','aba'],
                {
                    a: `${mi}steel_plate`,
                    b: 'kubejs:ultimate_motor',
                    c: 'kubejs:ultimate_robot_arm',
                    d: 'kubejs:tungstensteel_frame_box',
                },
                true,
            ],
            [
                `2x ${mi}iridium_machine_casing_pipe`,
                ['aca','aba','aca'],
                {
                    a: `${mi}iridium_curved_plate`,
                    b: `${mi}plasma_handling_iridium_machine_casing`,
                    c: 'kubejs:large_ultimate_pump' 
                },
                true,
                'iridium_machine_casing_pipe'
            ],
            [
                'kubejs:ultimate_pump',
                ['aaa','bcb','dbd'],
                {
                    a: `#${mi}fluid_pipes`,
                    b: 'kubejs:iridium_rotor',
                    c: 'kubejs:ultimate_motor',
                    d: 'kubejs:iridium_bolt'
                }
            ],
            [
                'kubejs:large_ultimate_pump',
                ['aaa','bcb','dbd'],
                {
                    b: 'kubejs:iridium_rotor',
                    a: 'kubejs:ultimate_pump',
                    d: `${mi}quantum_circuit`,
                    c: 'kubejs:large_ultimate_motor'
                }
            ],
            [
                'kubejs:steel_frame_box',
                ['aaa','a a','aaa'],
                {
                    a: `${mi}steel_rod`
                }
            ],
            [
                'elevatorid:elevator_black',
                ['aba','cdc','aba'],
                {
                    a: `${mi}steel_plate`,
                    b: `kubejs:steel_small_gear`,
                    c: `${mi}motor`,
                    d: 'kubejs:steel_frame_box'
                }
            ],
            // [
            //     '4x croptopia:peanut_butter',
            //     [' a ','aba',' a '],
            //     {
            //         a: '#c:peanuts',
            //         b: mallets
            //     },
            //     false,
            //     'peanut_butter'
            // ],
            [
                'farmersdelight:stove',
                ['aaa','b b','bdb'],
                {
                    a: `${mi}steel_ingot`,
                    b: 'bricks',
                    d: 'campfire'
                },
                true,
            ],
            [
                'farmersdelight:skillet',
                [' aa', ' aa','b  '],
                {
                    a: `${mi}steel_ingot`,
                    b: 'brick'
                },
                true,
            ],
            [
                'ae2:energy_acceptor',
                ['aba','bcb','aba'],
                {
                    a: `${mi}iron_plate`,
                    b: 'ae2:quartz_glass',
                    c: `${mi}analog_circuit`
                },
                true,
                'energy_acceptor'
            ],
            [
                '2x ae2:quartz_fiber',
                ['aaa','bbb','aaa'],
                {
                    a: '#c:glass_blocks',
                    b: 'ae2:certus_quartz_dust'
                },
                true,
                'quartz_fiber'
            ],
            [
                'ae2:me_p2p_tunnel',
                [' a ','aba','ccc'],
                {
                    a: `${mi}stainless_steel_ingot`,
                    b: 'kubejs:idea_processor',
                    c: 'ae2:fluix_crystal'
                },
                true,
            ],
            [
                'ae2:controller',
                ['aba','cdc','aea'],
                {
                    a: 'kubejs:meteorite_iron_plate',
                    b: 'ae2:fluix_block',
                    c: `${mi}digital_circuit`,
                    d: 'ae2:engineering_processor',
                    e: 'ae2:energy_acceptor'
                },
                true,
            ],
            [
                'ae2:crafting_unit',
                ['aba','cdc','aba'],
                {
                    a: `${mi}stainless_steel_ingot`,
                    b: 'kubejs:molecular_processor',
                    c: 'ae2:fluix_glass_cable',
                    d: `${mi}digital_circuit`
                },
                true,
            ],
            [
                'ae2:pattern_provider',
                ['aca','ebd','aca'],
                {
                    a: `${mi}stainless_steel_ingot`,
                    b: 'kubejs:molecular_processor',
                    c: `${mi}digital_circuit`,
                    d: `ae2:formation_core`,
                    e: 'ae2:annihilation_core'
                },
                true,
            ],
            [
                'ae2:molecular_assembler',
                ['aca','ebd','aca'],
                {
                    a: `${mi}stainless_steel_ingot`,
                    b: 'kubejs:molecular_processor',
                    c: `craftingstation:crafting_station`,
                    d: `ae2:formation_core`,
                    e: 'ae2:annihilation_core'
                },
                true,
            ],
            [
                'ae2:crafting_accelerator',
                [' a ','bcb',' d '],
                {
                    a: `${mi}memory_management_unit`,
                    b: 'ae2:engineering_processor',
                    c: 'ae2:crafting_unit',
                    d: `${mi}arithmetic_logic_unit`
                },
                true,
            ],
            [
                `${mi}arithmetic_logic_unit`,
                ['aba','cdc','aba'],
                {
                    a: `${mi}not_gate`,
                    b: `${mi}and_gate`,
                    c: `${mi}or_gate`,
                    d: 'ae2:printed_engineering_processor' 
                },
                true
            ],
            [
                'actuallyadditions:single_battery',
                ['aba','cec','cdc'],
                {
                    a: 'kubejs:restonia_wire',
                    b: 'kubejs:enori_plate',
                    c: 'kubejs:enori_curved_plate',
                    d: 'actuallyadditions:advanced_coil',
                    e: `${mi}restonia_battery`
                },
                true
            ],
            [
                'actuallyadditions:double_battery',
                ['aba','cec','cdc'],
                {
                    a: 'kubejs:redstone_alloy_wire',
                    b: 'kubejs:enori_large_plate',
                    c: 'kubejs:enori_curved_plate',
                    d: 'actuallyadditions:advanced_coil',
                    e: 'actuallyadditions:single_battery'
                },
                true
            ],
            [
                'actuallyadditions:triple_battery',
                ['aba','cec','cdc'],
                {
                    a: 'kubejs:empowered_restonia_wire',
                    b: 'kubejs:empowered_enori_plate',
                    c: 'kubejs:empowered_enori_curved_plate',
                    d: 'actuallyadditions:advanced_coil',
                    e: 'actuallyadditions:double_battery'
                },
                true
            ],
            [
                'actuallyadditions:quadruple_battery',
                ['aba','cec','cdc'],
                {
                    a: 'kubejs:empowered_restonia_wire',
                    b: 'kubejs:empowered_diamatine_plate',
                    c: 'kubejs:empowered_diamatine_curved_plate',
                    d: 'kubejs:ultimate_coil',
                    e: 'actuallyadditions:triple_battery'
                },
                true
            ],
            [
                'actuallyadditions:quintuple_battery',
                ['aba','cec','cdc'],
                {
                    a: 'kubejs:empowered_restonia_wire',
                    b: 'kubejs:empowered_emeradic_plate',
                    c: 'kubejs:empowered_emeradic_curved_plate',
                    d: 'kubejs:ultimate_coil',
                    e: 'actuallyadditions:quadruple_battery'
                },
                true
            ],
            [
                'actuallyadditions:empowerer',
                [' a ','bcb','ded'],
                {
                    a: 'kubejs:redstone_alloy_gear',
                    b: `${mi}electronic_circuit`,
                    c: 'actuallyadditions:double_battery',
                    d: 'kubejs:steel_casing',
                    e: 'actuallyadditions:display_stand'
                },
                true
            ],
            [
                'modularrouters:modular_router',
                ['aaa','bcb','aaa'],
                {
                    a: `${mi}stainless_steel_plate`,
                    b: `${mi}advanced_motor`,
                    c: `${mi}basic_machine_hull`
                },
                true
            ],
            [
                '4x modularrouters:blank_module',
                ['aba','bcb','aba'],
                {
                    a: 'industrialforegoing:plastic',
                    b: `${mi}gold_bolt`,
                    c: `${mi}digital_circuit_board`
                },
                true,
                'blank_module'
            ],
            [
                '8x laserio:logic_chip_raw',
                ['aea','cdc','aba'],
                {
                    a: 'kubejs:gold_wire',
                    b: `${mi}arithmetic_logic_unit`,
                    c: 'enderio:redstone_alloy_ingot',
                    d: 'kubejs:logic_casing',
                    e: `${mi}memory_management_unit`
                },
                true,
                'logic_chip_raw'
            ],
            [
                'kubejs:dark_matter_casing',
                ['aca','cbc','aca'],
                {
                    a: 'projecte:dark_matter',
                    b: `${mi}plasma_handling_iridium_machine_casing`,
                    c: 'kubejs:empowered_void_plate'
                },
                true
            ],
            [
                '8x kubejs:hyperbox_wall',
                ['cac','aba','cac'],
                {
                    a: 'enderio:powdered_obsidian',
                    b: 'actuallyadditions:ender_casing',
                    c: 'actuallyadditions:void_crystal'
                },
                true,
                'hyperbox_wall'
            ],
            [
                'kubejs:tungstensteel_machine_casing',
                ['aaa','aba','aaa'],
                {
                    a: 'kubejs:tungstensteel_plate',
                    b: 'kubejs:tungstensteel_gear'
                },
                true
            ],
            [
                `${mi}industrial_empowerer`,
                ['aba','cdc','aea'],
                {
                    a: `kubejs:tungstensteel_machine_casing`,
                    b: 'actuallyadditions:empowered_diamatine_crystal_block',
                    c: `${mi}processing_unit`,
                    d: `${mi}highly_advanced_machine_hull`,
                    e: 'actuallyadditions:empowerer'
                },
                true
            ],
            [
                `${mi}nuclear_recycler`,
                ['aba','cdc','aea'],
                {
                    a: `${mi}nuclear_casing`,
                    b: `${mi}large_advanced_pump`,
                    c: `${mi}large_advanced_motor`,
                    d: `${mi}highly_advanced_machine_hull`,
                    e: `${mi}processing_unit`
                }
            ],
            [
                'industrialforegoing:dissolution_chamber',
                ['aba','cdc','efe'],
                {
                    a: 'industrialforegoing:plastic',
                    b: `${mi}robot_arm`,
                    e: `${mi}analog_circuit`,
                    d: 'industrialforegoing:machine_frame_pity',
                    c: `${mi}pump`,
                    f: `kubejs:diamond_gear`
                }
            ],
            [
                `${mi}pyrolyse_oven`,
                ['abc','bde','abc'],
                {
                    a: `${mi}large_motor`,
                    b: `${mi}electronic_circuit`,
                    c: `${mi}cupronickel_cable`,
                    d: `${mi}advanced_machine_hull`,
                    e: `${mi}large_pump`
                },
                true
            ],
            [
                'kubejs:geological_hammer',
                ['aab',' c ',' c '],
                {
                    a: `${mi}steel_ingot`,
                    b: `${mi}steel_plate`,
                    c: 'kubejs:treated_stick'
                }
            ],
            // [
            //     'tiab:time_in_a_bottle',
            //     ['aba','bcb','ada'],
            //     {
            //         a: 'ae2:speed_card',
            //         b: `${mi}iridium_plate`,
            //         c: 'kubejs:perfectus_fuel',
            //         d: 'glass_bottle'
            //     },
            //     true
            // ],
            [
                'kubejs:neural_casing',
                ['aba','bcb','aba'],
                {
                    a: `${mi}carbon_large_plate`,
                    b: 'actuallyadditions:empowered_void_crystal',
                    c: 'enderio:void_chassis'
                },
                true
            ],
            [
                'shears',
                [' a','a ','  '],
                {
                    a: `${mi}iron_plate`
                }
            ],
            [
                '3x morered:red_alloy_wire',
                [' c ','aaa','   '],
                {
                    a: 'kubejs:red_alloy_wire',
                    c: 'shears'
                },
                false,
                'red_alloy_wire'
            ],
            [
                'ae2:meteorite_compass',
                ['   ','aba','   '],
                {
                    a: 'kubejs:steel_magnetic_wire',
                    b: 'compass'
                },
                true
            ],
            [
                'enderio:vacuum_chest',
                ['aba','cdc','aba'],
                {
                    a: 'kubejs:dark_steel_plate',
                    b: 'actuallyadditions:empowered_void_crystal',
                    c: 'enderio:pulsating_crystal',
                    d: 'actuallyadditions:ranged_collector'
                },
                true
            ],
            [
                'enderio:xp_vacuum',
                ['aba','bcb','ada'],
                {
                    a: 'kubejs:dark_steel_plate',
                    b: 'kubejs:vibrant_alloy_fine_wire',
                    d: 'enderio:pulsating_crystal',
                    c: 'enderio:void_vial'
                },
                true
            ],
            [
                `${mi}overdrive_module`,
                ['aba','dcd','aba'],
                {
                    a: `${mi}electrum_fine_wire`,
                    b: `${mi}op_amp`,
                    c: `${mi}electronic_circuit_board`,
                    d: 'enderio:double_layer_capacitor'
                },
                true
            ],
            [
                'kubejs:red_matter_casing',
                ['aba','bcb','aba'],
                {
                    a: 'projecte:red_matter',
                    b: 'kubejs:empowered_restonia_plate',
                    c: `${mi}plasma_handling_iridium_machine_casing`
                },
                true
            ],
            [
                'projecte:collector_mk1',
                ['aba','cdc','aea'],
                {
                    a: 'kubejs:double_compressed_glowstone',
                    b: 'enderio:octadic_capacitor',
                    c: `${mi}processing_unit`,
                    d: `${mi}highly_advanced_machine_hull`,
                    e: `kubejs:perfectus_fuel`
                }
            ],
            [
                'projecte:collector_mk2',
                ['aba','cdc','aea'],
                {
                    a: 'kubejs:dark_matter_casing',
                    b: `${mi}quantum_machine_hull`,
                    c: 'kubejs:ultimate_motor',
                    d: `${mi}quantum_circuit`,
                    e: `projecte:collector_mk1`
                }
            ],
            [
                'projecte:watch_of_flowing_time',
                ['aba','cdc','aba'],
                {
                    a: 'kubejs:blue_matter',
                    b: 'kubejs:ultimate_motor',
                    c: 'actuallyadditions:empowered_void_crystal_block',
                    d: `${mi}singularity`
                }
            ],
            [
                'projecte:dm_pedestal',
                ['aba','aba','bbb'],
                {
                    a: 'projecte:red_matter',
                    b: 'kubejs:dark_matter_casing'
                }
            ],
            [
                'projecte:condenser_mk1',
                ['aba','cdc','aea'],
                {
                    a: 'kubejs:dark_matter_casing',
                    b: `${mi}highly_advanced_machine_hull`,
                    c: 'actuallyadditions:empowered_emeradic_crystal_block',
                    d: `${mi}singularity`,
                    e: 'projecte:alchemical_chest'
                },
                true
            ],
            [
                'projecte:alchemical_chest',
                ['abc','ded','fgf'],
                {
                    a: 'projecte:low_covalence_dust',
                    b: 'projecte:medium_covalence_dust',
                    c: 'projecte:high_covalence_dust',
                    d: `${mi}superconductor_plate`,
                    e: `actuallyadditions:empowered_diamatine_crystal`,
                    f: 'kubejs:double_compressed_obsidian',
                    g: 'ironchest:gold_chest'
                }
            ],
            [
                '2x ae2:advanced_card',
                ['ab ','cdb','ab '],
                {
                    a: 'kubejs:empowered_diamatine_wire',
                    b: 'enderio:dark_steel_ingot',
                    c: 'actuallyadditions:restonia_crystal',
                    d: 'ae2:calculation_processor'
                },
                false,
                'advanced_card'
            ],
            [
                'ae2:basic_card',
                ['ab ','cdb','ab '],
                {
                    a: `${mi}electrum_wire`,
                    b: 'iron_ingot',
                    c: 'actuallyadditions:restonia_crystal',
                    d: 'ae2:calculation_processor'
                }
            ],
            [
                'ae2:wireless_receiver',
                [' a ','bcb','ddd'],
                {
                    a: 'ae2:fluix_pearl',
                    b: 'kubejs:stainless_steel_screw',
                    c: 'kubejs:remote_processor',
                    d: `${mi}stainless_steel_ingot`
                }
            ],
            [
                `${mi}memory_management_unit`,
                ['aba','cdc','aba'],
                {
                    a: `${mi}platinum_fine_wire`,
                    b: 'enderio:vibrant_crystal',
                    c: `${mi}silicon_wafer`,
                    d: 'enderio:double_layer_capacitor'
                },
                true
            ],
            [
                'modularrouters:activator_module',
                [' a ','bcb','ada'],
                {
                    a: `${mi}invar_gear`,
                    b: 'dispenser',
                    c: 'modularrouters:blank_module',
                    d: 'enderio:z_logic_controller'
                }
            ],
            [
                'modularrouters:sender_module_1',
                [' a ','bdb','aca'],
                {
                    a: `kubejs:nickel_gear`,
                    b: 'ae2:wireless_receiver',
                    c: `${mi}advanced_motor`,
                    d: 'modularrouters:blank_module'
                }
            ],
            [
                'modularrouters:sender_module_2',
                [' a ','bdb','aca'],
                {
                    a: `kubejs:nickel_gear`,
                    b: 'ae2:wireless_booster',
                    c: `${mi}large_advanced_motor`,
                    d: 'modularrouters:sender_module_1'
                }
            ],
            [
                'modularrouters:puller_module_1',
                [' a ','bcb','ada'],
                {
                    a: `kubejs:lead_gear`,
                    b: 'dispenser',
                    c: `modularrouters:blank_module`,
                    d: `${mi}advanced_motor`
                }
            ],
            [
                'modularrouters:puller_module_2',
                [' a ','bdb','aca'],
                {
                    a: `kubejs:lead_gear`,
                    b: 'ae2:wireless_receiver',
                    c: `${mi}large_advanced_motor`,
                    d: 'modularrouters:puller_module_1'
                }
            ],
            [
                '4x minecraft:scaffolding',
                ['aba','a a','a a'],
                {
                    a: 'bamboo',
                    b: 'string'
                },
                true,
                'scaffolding'
            ],
            [
                'bhc:relic_apple',
                ['aba','bcb','aba'],
                {
                    a: 'actuallyadditions:emeradic_crystal',
                    b: 'actuallyadditions:diamatine_crystal',
                    c: 'golden_apple'
                }
            ],
            [
                'bhc:relic_apple',
                ['aba','bcb','aba'],
                {
                    b: 'actuallyadditions:emeradic_crystal',
                    a: 'actuallyadditions:diamatine_crystal',
                    c: 'golden_apple'
                },
                false,
                'relic_apple_alt'
            ],
            // [
            //     'kubejs:enchanted_relic_apple',
            //     ['aba','bcb','aba'],
            //     {
            //         a: 'actuallyadditions:empowered_emeradic_crystal',
            //         b: 'actuallyadditions:empowered_diamatine_crystal',
            //         c: 'golden_apple'
            //     }
            // ],
            // [
            //     'kubejs:enchanted_relic_apple',
            //     ['aba','bcb','aba'],
            //     {
            //         b: 'actuallyadditions:empowered_emeradic_crystal',
            //         a: 'actuallyadditions:empowered_diamatine_crystal',
            //         c: 'golden_apple'
            //     },
            //     false,
            //     'enchanted_relic_apple_alt'
            // ],
            [
                'industrialforegoing:fluid_laser_base',
                ['aba','cdc','aea'],
                {
                    b: `extended_industrialization:electric_mining_drill`,
                    a: `${mi}titanium_tank`,
                    c: `${mi}large_advanced_pump`,
                    d: 'industrialforegoing:machine_frame_advanced',
                    e: `${mi}processing_unit`
                }
            ],
            [
                'industrialforegoing:laser_drill',
                ['aba','cdc','aba'],
                {
                    b: `${mi}digital_circuit`,
                    a: `industrialforegoing:plastic`,
                    c: `#actuallyadditions:drills`,
                    d: 'industrialforegoing:machine_frame_advanced',
                }
            ],
            [
                'industrialforegoing:ore_laser_base',
                ['aba','cdc','aea'],
                {
                    a: `${mi}digital_circuit`,
                    b: `extended_industrialization:electric_mining_drill`,
                    c: `${mi}advanced_motor`,
                    d: 'industrialforegoing:machine_frame_advanced',
                    e: `${mi}electric_quarry`
                }
            ],
            [
                'extendedae:infinity_water_cell',
                ['aaa','aba','dcd'],
                {
                    a: 'ae2:quartz_glass',
                    b: 'ae2:cell_component_256k',
                    c: `${mi}water_tower`,
                    d: `${mi}large_advanced_pump`
                },
                true
            ],
            [
                'extendedae:infinity_cobblestone_cell',
                ['cac','aba','ded'],
                {
                    a: 'ae2:quartz_glass',
                    b: 'megacells:cell_component_1m',
                    c: `${mi}electric_mixer`,
                    e: `${mi}processing_unit`,
                    d: `kubejs:quadruple_compressed_cobblestone`
                },
                true
            ],
            [
                'kubejs:metamorphic_constructor_casing',
                ['aba','cdc','aba'],
                {
                    a: `${mi}blastproof_alloy_large_plate`,
                    b: 'kubejs:mysterious_chunk',
                    c: `${mi}iridium_plate`,
                    d: 'industrialforegoing:machine_frame_supreme'
                }
            ],
            [
                '3x kubejs:tungstensteel_fence',
                ['aba','aba','aba'],
                {
                    a: 'kubejs:tungstensteel_plate',
                    b: 'kubejs:tungstensteel_rod'
                },
                true,
                'tungstensteel_fence'
            ],
            [
                '3x kubejs:stainless_steel_fence',
                ['aba','aba','aba'],
                {
                    a: `${mi}stainless_steel_plate`,
                    b: `${mi}stainless_steel_rod`
                },
                true,
                'stainless_steel_fence'
            ],
            [
                '6x kubejs:copper_fence',
                ['aba','aba','aba'],
                {
                    a: `${mi}copper_plate`,
                    b: `${mi}copper_rod`
                },
                true,
                'copper_fence'
            ],
            [
                'kubejs:titanium_laser_drill',
                ['aba','aca','ada'],
                {
                    a: `${mi}titanium_curved_plate`,
                    b: `${mi}processing_unit`,
                    c: 'modern_industrialization:solid_titanium_machine_casing',
                    d: '#actuallyadditions:drills'
                }
            ],
            [
                'kubejs:stainless_steel_laser_drill',
                ['aba','aca','ada'],
                {
                    a: `${mi}stainless_steel_curved_plate`,
                    b: `${mi}processing_unit`,
                    c: 'modern_industrialization:clean_stainless_steel_machine_casing',
                    d: '#actuallyadditions:drills'
                }
            ],
            [
                'kubejs:dark_steel_casing',
                ['aaa','aba','aaa'],
                {
                    a: 'kubejs:dark_steel_plate',
                    b: 'kubejs:dark_steel_gear'
                },
                true
            ],
            [
                'kubejs:massive_line_casing',
                ['aba','bcb','aba'],
                {
                    a: 'kubejs:dark_steel_casing',
                    b: `${mi}electronic_circuit`,
                    c: `${mi}advanced_machine_hull`
                },
                true
            ],
            [
                `${mi}massive_compressor`,
                ['aaa','bcb','aaa'],
                {
                    a: `${mi}electric_compressor`,
                    b: `${mi}digital_circuit`,
                    c: `${mi}turbo_machine_hull`
                },
                true
            ],
            [
                `${mi}massive_wiremill`,
                ['aaa','bcb','aaa'],
                {
                    a: `${mi}electric_wiremill`,
                    b: `${mi}digital_circuit`,
                    c: `${mi}turbo_machine_hull`
                },
                true
            ],
            [
                `${mi}massive_forge_hammer`,
                ['aaa','bcb','aaa'],
                {
                    a: `${mi}automatic_forge_hammer_electric`,
                    b: `${mi}digital_circuit`,
                    c: `${mi}turbo_machine_hull`
                },
                true
            ],
            [
                'kubejs:iron_casing',
                ['aaa','aba','aaa'],
                {
                    a: `${mi}iron_plate`,
                    b: `${mi}iron_gear`
                }
            ],
            [
                'kubejs:copper_casing',
                ['aaa','aba','aaa'],
                {
                    a: `${mi}copper_plate`,
                    b: `${mi}copper_gear`
                }
            ],
            [
                `${mi}polarization_tower`,
                ['aba','cdc','ebe'],
                {
                    a: `${mi}advanced_motor`,
                    b: `${mi}inductor`,
                    c: `${mi}digital_circuit`,
                    d: `${mi}turbo_machine_hull`,
                    e: `${mi}polarizer`
                },
                true
            ],
            [
                `${mi}compact_greenhouse`,
                ['aba','cdc','ebe'],
                {
                    a: `${mi}advanced_motor`,
                    b: `${mi}digital_circuit`,
                    c: `${mi}advanced_pump`,
                    d: `${mi}turbo_machine_hull`,
                    e: `extended_industrialization:electric_farmer`
                },
                true
            ],
            [
                'kubejs:drop_of_evil',
                [' a ','bcb',' a '],
                {
                    a: 'wither_skeleton_skull',
                    b: 'actuallyadditions:void_crystal_block',
                    c: 'wither_rose'
                }
            ],
            [
                'ironchest:copper_chest',
                ['aaa','aba','aaa'],
                {
                    a: `${mi}copper_plate`,
                    b: 'chest'
                },
                true
            ],
            [
                'ironchest:wood_to_iron_chest_upgrade',
                ['aaa','aba','aaa'],
                {
                    a: '#c:plates/iron',
                    b: '#minecraft:planks'
                },
                true
            ],
            [
                'ironchest:copper_to_iron_chest_upgrade',
                [' a ','aba',' a '],
                {
                    a: '#c:plates/iron',
                    b: 'copper_ingot'
                },
                true
            ],
            [
                'ironchest:iron_chest',
                ['aaa','aba','aaa'],
                {
                    a: '#c:plates/iron',
                    b: 'chest'
                },
                true
            ],
            [
                'ironchest:iron_chest',
                [' a ','aba',' a '],
                {
                    a: '#c:plates/iron',
                    b: 'ironchest:copper_chest'
                },
                true,
                'iron_chest_alt'
            ],
            [
                'ironchest:gold_chest',
                ['aaa','aba','aaa'],
                {
                    a: '#c:plates/gold',
                    b: 'ironchest:iron_chest'
                },
                true
            ],
            [
                'ironchest:iron_to_gold_chest_upgrade',
                ['aaa','aba','aaa'],
                {
                    a: '#c:plates/gold',
                    b: 'iron_ingot'
                },
                true
            ],
            [
                'ironchest:gold_to_diamond_chest_upgrade',
                ['aaa','aba','aaa'],
                {
                    a: '#c:plates/diamond',
                    b: 'gold_ingot'
                },
                true
            ],
            [
                'ironchest:diamond_chest',
                ['aaa','aba','aaa'],
                {
                    a: '#c:plates/diamond',
                    b: 'ironchest:gold_chest'
                },
                true
            ],
            [
                'extendedae:crystal_assembler',
                [' a ', 'bcb','ded'],
                {
                    a: 'ae2:crafting_terminal',
                    b: 'kubejs:idea_processor',
                    c: 'extendedae:machine_frame',
                    d: '#ae2:glass_cable',
                    e: `${mi}assembler`
                },
                true
            ],
            [
                'extendedae:machine_frame',
                ['aba','cdc','aba'],
                {
                    a: 'kubejs:double_silver_plate',
                    b: 'ae2:quartz_glass',
                    c: 'kubejs:entro_infused_large_plate',
                    d: `${mi}highly_advanced_machine_hull`
                },
                true
            ],
            [
                'enderio:travel_anchor',
                ['aba','cdc','aba'],
                {
                    a: 'kubejs:dark_steel_large_plate',
                    d: 'enderio:pulsating_crystal',
                    c: '#elevatorid:elevators',
                    b: 'actuallyadditions:empowered_void_crystal'
                },
                true
            ],
            [
                'waystones:warp_stone',
                ['aba','bcb','aba'],
                {
                    a: 'amethyst_block',
                    b: 'enderio:ender_crystal',
                    c: 'nether_star'
                }
            ],
            [
                '4x kubejs:plastic_block',
                ['aa','aa','  '],
                {
                    a: 'industrialforegoing:plastic'
                },
                true,
                'plastic_block'
            ],
            [
                '2x kubejs:logic_casing',
                [' a ','aba',' a '],
                {
                    a: 'kubejs:plastic_block',
                    b: 'ae2:logic_processor'
                },
                true,
                'logic_casing'
            ],
            [
                'prettypipes:item_terminal',
                ['aba','cde','aba'],
                {
                    a: 'ironchest:iron_chest',
                    b: `${mi}steel_barrel`,
                    c: 'prettypipes:high_retrieval_module',
                    d: `${mi}steel_machine_casing`,
                    e: 'prettypipes:high_extraction_module'
                },
                true
            ],
            [
                `16x ${mi}fluid_pipe`,
                ['aaa','bcb','aaa'],
                {
                    a: `${mi}bronze_curved_plate`,
                    b: `${mi}copper_rotor`,
                    c: 'bucket'
                },
                true,
                'fluid_pipe_alt'
            ],
            [
                `${mi}oil_press`,
                ['aba','cde','aba'],
                {
                    a: `${mi}tin_cable`,
                    b: `${mi}analog_circuit`,
                    c: `${mi}pump`,
                    d: `${mi}basic_machine_hull`,
                    e: 'piston'
                },
                true
            ],
            [
                `${mi}fermenter`,
                ['aba','cde','aba'],
                {
                    a: `${mi}electrum_cable`,
                    b: `${mi}electronic_circuit`,
                    c: `${mi}large_pump`,
                    d: `${mi}basic_machine_hull`,
                    e: 'piston'
                },
                true
            ],
            [
                'kubejs:copper_drill',
                ['   ','aba','   '],
                {
                    a: `${mi}steel_gear`,
                    b: 'kubejs:copper_casing'
                },
                true
            ],
            [
                'enderio:attractor_obelisk',
                [' a ','bcb','ded'],
                {
                    a: 'enderio:enticing_crystal',
                    b: 'enderio:energetic_alloy_ingot',
                    c: 'kubejs:energetic_alloy_gear',
                    d: 'enderio:soularium_ingot',
                    e: 'enderio:ensouled_chassis'
                }
            ],
            [
                'enderio:energetic_photovoltaic_module',
                ['aba','ccc','ded'],
                {
                    a: 'enderio:energetic_alloy_ingot',
                    b: 'actuallyadditions:advanced_coil',
                    c: 'enderio:photovoltaic_plate',
                    d: 'enderio:basic_capacitor',
                    e: `${mi}electronic_circuit`
                }
            ],
            [
                'actuallyadditions:ender_casing',
                ['aba', 'bcb','aba'],
                {
                    a:'kubejs:empowered_diamatine_curved_plate',
                    b: 'enderio:ender_crystal_powder',
                    c: 'enderio:void_chassis'
                },
                true
            ],
            [
                'actuallyadditions:wings_of_the_bats',
                ['aba','aca','aba'],
                {
                    a: 'actuallyadditions:bats_wing',
                    b: 'actuallyadditions:diamatine_crystal_block',
                    c: 'nether_star'
                }
            ],
            [
                'enderstorage:ender_chest',
                ['aba','cdc','aea'],
                {
                    a: 'kubejs:compressed_obsidian',
                    b: 'actuallyadditions:ender_casing',
                    c: 'kubejs:flaming_crystal',
                    d: 'enderio:sentient_ender',
                    e: 'ironchest:obsidian_chest'
                },
                true
            ],
            [
                'enderstorage:ender_tank',
                ['aba','cdc','aea'],
                {
                    a: 'kubejs:compressed_obsidian',
                    b: 'actuallyadditions:ender_casing',
                    c: 'kubejs:flaming_crystal',
                    d: 'enderio:sentient_ender',
                    e: `${mi}steel_tank`
                },
                true
            ],
            [
                'enderstorage:ender_pouch',
                ['aba','cdc','aea'],
                {
                    a: 'kubejs:treated_leather',
                    b: 'actuallyadditions:ender_casing',
                    c: 'kubejs:flaming_crystal',
                    d: 'enderio:sentient_ender',
                    e: `sophisticatedbackpacks:gold_backpack`
                },
                true
            ],
            [
                'tesseract:tesseract',
                ['aba','cdc','aea'],
                {
                    a: 'actuallyadditions:ender_casing',
                    b: 'extended_industrialization:tesla_interdimensional_upgrade',
                    c: `${mi}quantum_machine_hull`,
                    d: 'enderstorage:ender_tank',
                    e: 'enderstorage:ender_chest'
                },
                true
            ],
            [
                'kubejs:superconductor_casing',
                ['aaa','aba','aaa'],
                {
                    a: `${mi}superconductor_plate`,
                    b: `${mi}highly_advanced_machine_hull`
                },
                true
            ],
            [
                `extended_industrialization:processing_array`,
                ['aba','cdc','aba'],
                {
                    a: 'kubejs:advanced_robot_arm',
                    b: `${mi}assembler`,
                    c: `${mi}processing_unit`,
                    d: `${mi}highly_advanced_machine_hull`
                },
                true
            ],
            [
                `${mi}nuclear_component_assembler`,
                ['aba','cdc','aba'],
                {
                    a: `${mi}nuclear_alloy_large_plate`,
                    b: 'kubejs:advanced_robot_arm',
                    c: `${mi}processing_unit`,
                    d: `${mi}highly_advanced_machine_hull`
                },
                true
            ],
            [
                `${mi}electric_blast_furnace`,
                ['aaa','aba','aca'],
                {
                    a: `${mi}cupronickel_wire_magnetic`,
                    b: `${mi}basic_machine_hull`,
                    c: 'jumbofurnace:jumbo_furnace'
                },
                true
            ],
            [
                '4x compactcrafting:base',
                [' d ','bab','ccc'],
                {
                    a: 'kubejs:enori_gear',
                    b: `${mi}analog_circuit`,
                    c: 'ae2:smooth_sky_stone_slab',
                    d: 'redstone_torch'
                },
                true,
                'base'
            ],
            [
                '4x compactcrafting:projector_dish',
                ['ab ','acb','ab '],
                {
                    a: 'glass_pane',
                    b: 'kubejs:enori_curved_plate',
                    c: 'computercraft:monitor_normal'
                },
                true,
                'projector_dish'
            ],
            [
                `${mi}lubricant_bucket`,
                ['aaa','aba','aaa'],
                {
                    a: 'redstone',
                    b: 'water_bucket'
                }
            ],
            [
               '3x enderio:conduit[enderio:conduit="enderio:pressurized_fluid"]',
               ['aaa','bcb','aaa'],
               {
                    a: 'enderio:conduit_binder',
                    b: 'kubejs:energetic_alloy_wire',
                    c: 'enderio:conduit[enderio:conduit="enderio:fluid"]'
               },
               false,
               'pressurized_fluid'
            ],
            [
               '3x enderio:conduit[enderio:conduit="enderio:ender_fluid"]',
               ['aaa','bcb','aaa'],
               {
                    a: 'enderio:conduit_binder',
                    b: 'kubejs:vibrant_alloy_wire',
                    c: 'enderio:conduit[enderio:conduit="enderio:pressurized_fluid"]'
               },
               false,
               'ender_fluid'
            ],
            [
               '3x enderio:conduit[enderio:conduit="enderio:enhanced_item"]',
               ['aaa','bcb','aaa'],
               {
                    a: 'enderio:conduit_binder',
                    b: 'kubejs:energetic_alloy_wire',
                    c: 'enderio:conduit[enderio:conduit="enderio:item"]'
               },
               false,
               'enhanced_item'
            ],
            [
               '3x enderio:conduit[enderio:conduit="enderio:ender_item"]',
               ['aaa','bcb','aaa'],
               {
                    a: 'enderio:conduit_binder',
                    b: 'kubejs:vibrant_alloy_wire',
                    c: 'enderio:conduit[enderio:conduit="enderio:enhanced_item"]'
               },
               false,
               'ender_item'
            ],
            [
                '3x enderio:conduit[enderio:conduit="enderio:redstone"]',
                ['aaa','bbb','aaa'],
                {
                    a: 'enderio:conduit_binder',
                    b: 'kubejs:redstone_alloy_wire'
                },
                false,
                'redstone_conduit'
            ],
            [
                'ae2:quantum_link',
                ['aca','bdb','aca'],
                {
                    a: 'ae2:quartz_glass',
                    b: 'ae2:fluix_pearl',
                    c: 'kubejs:remote_processor',
                    d: `${mi}processing_unit`
                },
                true
            ],
            [
                'ae2:fluix_pearl',
                ['aba','bcb','aba'],
                {
                    a: 'ae2:fluix_crystal',
                    b: 'kubejs:empowered_pink_slime',
                    c: 'ender_pearl'
                }
            ],
            [
                'kubejs:iridium_band',
                [' a ','aba',' a '],
                {
                    a: `${mi}iridium_curved_plate`,
                    b: `kubejs:iridium_ring`
                }
            ],
            [
                '4x modularrouters:blank_upgrade',
                [' ab','acb',' ab'],
                {
                    a: 'industrialforegoing:plastic',
                    b: `${mi}gold_bolt`,
                    c: `${mi}digital_circuit_board`
                },
                true,
                'blank_upgrade'
            ],
            [
                'ae2:blank_pattern',
                ['aba','b b','dcd'],
                {
                    a: 'ae2:quartz_glass',
                    b: 'actuallyadditions:palis_crystal',
                    c: 'ae2:charged_certus_quartz_crystal',
                    d: `${mi}stainless_steel_double_ingot`
                },
                true
            ],
            [
                'ae2:item_cell_housing',
                ['aba','b b','cdc'],
                {
                    a: 'ae2:quartz_glass',
                    b: 'kubejs:conductive_alloy_wire',
                    c: 'kubejs:enori_large_plate',
                    d: 'ironchest:iron_chest'
                },
                true
            ],
            [
                'ae2:fluid_cell_housing',
                ['aba','b b','cdc'],
                {
                    a: 'ae2:quartz_glass',
                    b: 'kubejs:conductive_alloy_wire',
                    c: 'kubejs:copper_large_plate',
                    d: `${mi}steel_tank`
                },
                true
            ],
            [
                'megacells:mega_item_cell_housing',
                ['aba','b b','cdc'],
                {
                    a: 'kubejs:reinforced_glass',
                    b: 'kubejs:iridium_wire',
                    c: 'kubejs:sky_steel_large_plate',
                    d: 'projecte:alchemical_chest'
                },
                true
            ],
            [
                'megacells:mega_fluid_cell_housing',
                ['aba','b b','cdc'],
                {
                    a: 'kubejs:reinforced_glass',
                    b: 'kubejs:iridium_wire',
                    c: 'kubejs:sky_bronze_large_plate',
                    d: 'projecte:alchemical_chest'
                },
                true
            ],
            [
                'undergarden:catalyst',
                ['aba','bcb','aba'],
                {
                    a: 'kubejs:copper_large_plate',
                    b: `${mi}iron_large_plate`,
                    c: 'ender_pearl'
                }
            ],
            [
                `${mi}large_motor`,
                ['aaa','bcc','aaa'],
                {
                    a: `${mi}motor`,
                    b: `${mi}electronic_circuit`,
                    c: 'kubejs:cloggrum_steel_rod'
                },
                true
            ],
            [
                'kubejs:cloggrum_steel_casing',
                ['aaa','aba','aaa'],
                {
                    a: 'kubejs:cloggrum_steel_plate',
                    b: 'kubejs:cloggrum_steel_gear'
                },
                true
            ],
            [
                'laserio:laser_connector',
                [' a ','bcb','ddd'],
                {
                    a: 'glass',
                    b: `${mi}electronic_circuit`,
                    c: 'laserio:logic_chip',
                    d: `${mi}stainless_steel_ingot`
                },
                true
            ],
            [
                'laserio:laser_node',
                ['aba','bcb','aba'],
                {
                    a: `${mi}stainless_steel_ingot`,
                    b: '#c:glass_panes',
                    c: 'laserio:laser_connector'
                },
                true
            ],
            [
                'extendedae:assembler_matrix_frame',
                ['aba','bcb','aba'],
                {
                    a: `kubejs:quartz_plate`,
                    b: 'actuallyadditions:palis_crystal',
                    c: 'extendedae:machine_frame'
                },
                true
            ],
            [
                'extendedae:ingredient_buffer',
                ['aba','c c','aba'],
                {
                    a: `${mi}stainless_steel_ingot`,
                    b: 'ae2:cell_component_1k',
                    c: 'ae2:quartz_glass'
                },
                true
            ],
            [
                'extendedae:assembler_matrix_wall',
                ['aba','cdc','aba'],
                {
                    a: 'enderio:end_steel_bars',
                    b: 'ae2:fluix_crystal',
                    c: 'extendedae:entro_ingot',
                    d: 'kubejs:logic_casing'
                },
                true
            ],
            [
                'modern_industrialization:large_heat_exchanger',
                ['aba','cdc','aba'],
                {
                    a: 'kubejs:osmium_gear',
                    b: `${mi}small_heat_exchanger`,
                    c: `${mi}aluminum_rotor`,
                    d: `${mi}large_advanced_pump`
                },
                true
            ],
            [
                'laserio:laser_wrench',
                ['a a',' b ',' a '],
                {
                    a: 'actuallyadditions:enori_crystal',
                    b: 'laserio:logic_chip'
                }
            ],
            [
                'laserio:card_energy',
                ['aba','cdc','eee'],
                {
                    a: `${mi}analog_circuit`,
                    b: `${mi}silicon_battery`,
                    c: `kubejs:quartz_plate`,
                    d: 'laserio:logic_chip',
                    e: `${mi}electrum_wire`
                },
                true
            ],
            [
                'laserio:card_item',
                ['aba','cdc','eee'],
                {
                    a: `${mi}analog_circuit`,
                    b: `chest`,
                    c: `kubejs:quartz_plate`,
                    d: 'laserio:logic_chip',
                    e: `${mi}electrum_wire`
                },
                true
            ],
            [
                'laserio:card_fluid',
                ['aba','cdc','eee'],
                {
                    a: `${mi}analog_circuit`,
                    b: `bucket`,
                    c: `kubejs:quartz_plate`,
                    d: 'laserio:logic_chip',
                    e: `${mi}electrum_wire`
                },
                true
            ],
            [
                'laserio:card_redstone',
                ['aba','cdc','eee'],
                {
                    a: `${mi}analog_circuit`,
                    b: `kubejs:redstone_alloy_gear`,
                    c: `kubejs:quartz_plate`,
                    d: 'laserio:logic_chip',
                    e: `${mi}electrum_wire`
                },
                true
            ],
            [
                'storagedrawers:remote_upgrade',
                [' a ',' b ',' c '],
                {
                    a: 'ae2:wireless_access_point',
                    b: 'storagedrawers:upgrade_template',
                    c: 'actuallyadditions:ender_casing'
                }
            ],
            [
                'storagedrawers:remote_group_upgrade',
                ['aaa','aba','aaa'],
                {
                    a: 'ae2:fluix_pearl',
                    b: 'storagedrawers:remote_upgrade'
                }
            ],
            [
                'storagedrawers:upgrade_template',
                ['aaa','aba','aaa'],
                {
                    a: 'kubejs:treated_stick',
                    b: '#storagedrawers:drawers'
                }
            ],
            [
                'dankstorage:dank_1',
                ['aaa','aba','aaa'],
                {
                    a: `${mi}coke_block`,
                    b: 'ironchest:iron_chest'
                }
            ],
            [
                'storagedrawers:controller',
                ['aba','cdc','aea'],
                {
                    a: 'smooth_stone_slab',
                    b: 'repeater',
                    c: `${mi}analog_circuit`,
                    d: '#storagedrawers:drawers',
                    e: 'kubejs:red_alloy_gear'
                },
                true
            ],
            [
                'storagedrawers:controller_io',
                ['aba','cdc','aea'],
                {
                    a: 'smooth_stone_slab',
                    b: 'repeater',
                    c: `${mi}analog_circuit`,
                    d: '#storagedrawers:drawers',
                    e: 'kubejs:redstone_alloy_gear'
                },
                true
            ],
            [
                'laserio:overclocker_card',
                ['aaa','bcb','aaa'],
                {
                    a: `${mi}gold_plate`,
                    b: 'ae2:speed_card',
                    c: 'laserio:logic_chip'
                },
                true
            ],
            [
                'laserio:overclocker_node',
                ['aaa','bcb','aaa'],
                {
                    a: `kubejs:diamatine_plate`,
                    b: 'ae2:speed_card',
                    c: 'laserio:logic_chip'
                },
                true
            ],
            [
                'merequester:requester',
                ['aba','cdc','aba'],
                {
                    a: 'enderio:basic_capacitor',
                    b: 'extendedae:concurrent_processor',
                    c: 'ae2:crafting_accelerator',
                    d: 'extendedae:machine_frame'
                },
                true
            ],
            [
                'mi_sound_addon:mallet',
                [' ab',' ca','c  '],
                {
                    a: `${mi}stainless_steel_plate`,
                    b: 'string',
                    c: 'kubejs:treated_stick'
                }
            ],
            [
                'projecte:swiftwolf_rending_gale',
                [' a ','aba','dcd'],
                {
                    a: 'feather',
                    b: 'kubejs:iridium_band',
                    c: `${mi}diesel_jetpack`,
                    d: 'projecte:red_matter'
                }
            ],
            [
                'prettypipes:crafting_terminal',
                [' a ','bcb',' b '],
                {
                    a: 'craftingstation:crafting_station',
                    b: `${mi}analog_circuit`,
                    c: 'prettypipes:item_terminal'
                },
                true
            ],
            [
                'rechiseled:chisel',
                [' a','b ','  '],
                {
                    a: `${mi}steel_ingot`,
                    b: 'stick'
                }
            ],
            [
                'ae2:cell_component_1k',
                ['aba','bcb','aba'],
                {
                    a: 'kubejs:red_alloy_ring',
                    b: '#c:gems/certus_quartz',
                    c: 'ae2:logic_processor'
                }
            ],
            [
                'ae2:cell_component_4k',
                ['aca','bdb','aba'],
                {
                    a: 'kubejs:froststeel_ring',
                    b: 'ae2:cell_component_1k',
                    c: 'ae2:calculation_processor',
                    d: 'ae2:quartz_glass'
                }
            ],
            [
                'ae2:cell_component_16k',
                ['aca','bdb','aba'],
                {
                    a: 'kubejs:energetic_alloy_ring',
                    b: 'ae2:cell_component_4k',
                    c: 'ae2:calculation_processor',
                    d: 'ae2:quartz_glass'
                }
            ],
            [
                'ae2:cell_component_64k',
                ['aca','bdb','aba'],
                {
                    a: 'kubejs:soularium_ring',
                    b: 'ae2:cell_component_16k',
                    c: 'ae2:calculation_processor',
                    d: 'ae2:quartz_glass'
                }
            ],
            [
                'ae2:cell_component_256k',
                ['aca','bdb','aba'],
                {
                    a: 'kubejs:platinum_ring',
                    b: 'ae2:cell_component_64k',
                    c: 'ae2:calculation_processor',
                    d: 'ae2:quartz_glass'
                }
            ],
            [
                'megacells:cell_component_1m',
                ['aca','bdb','aba'],
                {
                    a: 'kubejs:iridium_ring',
                    b: 'ae2:cell_component_256k',
                    c: 'megacells:accumulation_processor',
                    d: 'ae2:quartz_glass'
                }
            ],
            [
                'megacells:cell_component_4m',
                ['aca','bdb','aba'],
                {
                    a: 'kubejs:superconductor_ring',
                    b: 'megacells:cell_component_1m',
                    c: 'megacells:accumulation_processor',
                    d: 'ae2:quartz_glass'
                }
            ],
            [
                'framedblocks:framed_chest',
                ['aaa','aba','aaa'],
                {
                    a: 'framedblocks:framed_cube',
                    b: 'chest'
                }
            ],
            [
                'ae2:condenser',
                ['aba','bcb','aba'],
                {
                    a: `${mi}stainless_steel_large_plate`,
                    b: `${mi}electric_compressor`,
                    c: 'ae2:fluix_pearl'
                },
                true
            ],
            [
                'ae2:wireless_booster',
                ['aba','bcb','aba'],
                {
                    a: `${mi}stainless_steel_curved_plate`,
                    b: 'ae2:fluix_dust',
                    c: 'enderio:ender_crystal'
                },
                true
            ],
            [
                'ae2:import_bus',
                [' a ','bcb','   '],
                {
                    a: 'ae2:annihilation_core',
                    b: `${mi}aluminum_ingot`,
                    c: 'piston'
                },
                true
            ],
            [
                'ae2:export_bus',
                ['bab',' c ','   '],
                {
                    a: 'ae2:annihilation_core',
                    b: `${mi}aluminum_ingot`,
                    c: 'piston'
                },
                true
            ],
            [
                'ae2:drive',
                ['aba','cdc','aba'],
                {
                    a: `iron_ingot`,
                    b: 'ae2:engineering_processor',
                    c: 'ae2:fluix_glass_cable',
                    d: 'ironchest:diamond_chest'
                },
                true
            ],
            [
                'ae2:spatial_cell_component_2',
                ['aba','bcb','aba'],
                {
                    a: 'kubejs:enori_ring',
                    b: 'ae2:fluix_pearl',
                    c: 'kubejs:extensional_processor'
                }
            ],
            [
                'ae2:spatial_cell_component_16',
                ['aba','bcb','aba'],
                {
                    a: 'kubejs:empowered_enori_ring',
                    b: 'ae2:spatial_cell_component_2',
                    c: 'kubejs:extensional_processor'
                }
            ],
            [
                'ae2:spatial_cell_component_128',
                ['aba','bcb','aba'],
                {
                    a: 'kubejs:iridium_ring',
                    b: 'ae2:spatial_cell_component_16',
                    c: 'kubejs:extensional_processor'
                }
            ],
            [
                'ae2:wireless_access_point',
                [' a ',' b ',' c '],
                {
                    a: 'ae2:wireless_receiver',
                    b: 'kubejs:remote_processor',
                    c: 'ae2:fluix_block'
                },
                true
            ],
            [
                'computercraft:computer_normal',
                ['aba','cdc','aba'],
                {
                    a: 'smooth_stone',
                    b: '#c:glass_blocks',
                    c: `${mi}analog_circuit`,
                    d: 'ae2:terminal'
                },
                true
            ],
            [
                'computercraft:computer_advanced',
                ['aaa','aba','aaa'],
                {
                    b: 'computercraft:computer_normal',
                    a: `${mi}gold_plate`
                },
                true
            ],
            [
                'computercraft:pocket_computer_advanced',
                ['aaa','aba','aaa'],
                {
                    b: 'computercraft:pocket_computer_normal',
                    a: `${mi}gold_plate`
                },
                false,
                'pocket_computer_advanced_alt'
            ],
            [
                'computercraft:turtle_normal',
                ['aba','bcb','aba'],
                {
                    a: 'kubejs:dark_steel_gear',
                    b: `${mi}electronic_circuit`,
                    c: 'computercraft:computer_normal'
                },
                true
            ],
            [
                'computercraft:turtle_advanced',
                ['aba','bcb','aba'],
                {
                    a: 'kubejs:dark_steel_gear',
                    b: `${mi}electronic_circuit`,
                    c: 'computercraft:computer_advanced'
                },
                true
            ],
            [
                'computercraft:turtle_advanced',
                ['aaa','aba','aaa'],
                {
                    a: `${mi}gold_plate`,
                    b: 'computercraft:turtle_normal',
                },
                false,
                'turtle_advanced_alt'
            ],
            [
                'computercraft:disk_drive',
                ['aba','b b','aca'],
                {
                    a: 'smooth_stone',
                    b: `${mi}analog_circuit`,
                    c: 'chest'
                },
                true
            ],
            [
                '2x computercraft:monitor_advanced',
                ['aaa','aba','aaa'],
                {
                    a: `${mi}gold_plate`,
                    b: `#c:glass_panes`
                },
                false,
                'monitor_advanced'
            ],
            [
                'actuallyadditions:ring',
                ['ab ','bcb',' b '],
                {
                    a: 'gold_block',
                    b: 'iron_ingot',
                    c: 'glowstone_dust'
                }
            ],
            [
                'actuallyadditions:ring_of_magnetizing',
                ['aba','cdc','aba'],
                {
                    a: 'kubejs:steel_magnetic_wire',
                    b: 'actuallyadditions:restonia_crystal_block',
                    c: 'actuallyadditions:palis_crystal_block',
                    d: 'actuallyadditions:ring'
                }
            ],
            [
                'dankstorage:dank_2',
                ['aaa','aba','aaa'],
                {
                    a: 'actuallyadditions:restonia_crystal_block',
                    b: 'dankstorage:dank_1'
                }
            ],
            [
                'dankstorage:1_to_2',
                ['aaa','a a','aaa'],
                {
                    a: 'actuallyadditions:restonia_crystal_block'
                }
            ],
            [
                'dankstorage:dank_3',
                ['aaa','aba','aaa'],
                {
                    a: `${mi}aluminum_block`,
                    b: 'dankstorage:dank_2'
                }
            ],
            [
                'dankstorage:2_to_3',
                ['aaa','a a','aaa'],
                {
                    a: `${mi}aluminum_block`
                }
            ],
            [
                'dankstorage:dank_4',
                ['aaa','aba','aaa'],
                {
                    a: `enderio:vibrant_alloy_block`,
                    b: 'dankstorage:dank_3'
                }
            ],
            [
                'dankstorage:3_to_4',
                ['aaa','a a','aaa'],
                {
                    a: `enderio:vibrant_alloy_block`
                }
            ],
            [
                'dankstorage:dank_5',
                ['aaa','aba','aaa'],
                {
                    a: `enderio:soularium_block`,
                    b: 'dankstorage:dank_4'
                }
            ],
            [
                'dankstorage:4_to_5',
                ['aaa','a a','aaa'],
                {
                    a: `enderio:soularium_block`
                }
            ],
            [
                'dankstorage:dank_6',
                ['aaa','aba','aaa'],
                {
                    a: `${mi}platinum_block`,
                    b: 'dankstorage:dank_5'
                }
            ],
            [
                'dankstorage:5_to_6',
                ['aaa','a a','aaa'],
                {
                    a: `${mi}platinum_block`
                }
            ],
            [
                'dankstorage:dank_7',
                ['cac','aba','cac'],
                {
                    a: `${mi}iridium_block`,
                    b: 'dankstorage:dank_6',
                    c: 'kubejs:nether_star_block'
                }
            ],
            [
                'dankstorage:6_to_7',
                ['cac','a a','cac'],
                {
                    a: `${mi}iridium_block`,
                    c: 'kubejs:nether_star_block'
                }
            ],
            [
                'ae2:quantum_ring',
                ['aba','cdc','aba'],
                {
                    a: `${mi}stainless_steel_large_plate`,
                    b: 'kubejs:remote_processor',
                    c: 'kubejs:tungstensteel_frame_box',
                    d: `${mi}advanced_motor`
                },
                true
            ],
            [
                'ae2:chest',
                ['aba','cec','dfd'],
                {
                    a: 'kubejs:fluix_glass',
                    b: 'ae2:terminal',
                    c: 'ae2:fluix_glass_cable',
                    d: `${mi}iron_large_plate`,
                    e: `${mi}electronic_circuit`,
                    f: 'ironchest:gold_chest'
                },
                true
            ],
            [
                'ae2:interface',
                ['aba','c d','aba'],
                {
                    a: 'iron_ingot',
                    b: 'kubejs:fluix_glass',
                    c: 'ae2:annihilation_core',
                    d: 'ae2:formation_core'
                },
                true
            ],
            [
                'ae2:growth_accelerator',
                ['aba','cdc','aba'],
                {
                    a: 'iron_ingot',
                    b: `${mi}basic_upgrade`,
                    c: 'kubejs:fluix_glass',
                    d: 'ae2:fluix_block'
                },
                true
            ],
            [
                `${mi}air_intake`,
                ['aba','bcb','aba'],
                {
                    a: 'kubejs:empowered_enori_plate',
                    b: `${mi}stainless_steel_plate`,
                    c: `${mi}stainless_steel_rotor`
                },
                true
            ],
            [
                'industrialforegoing:mob_imprisonment_tool',
                ['aba','bcb','aba'],
                {
                    a: 'kubejs:black_plastic',
                    b: 'ghast_tear',
                    c: 'actuallyadditions:empowered_void_crystal_block'
                },
                true
            ],
            [
                'torchmaster:megatorch',
                [' a ','bcb','bcb'],
                {
                    a: 'glowstone',
                    b: 'gold_block',
                    c:'actuallyadditions:wood_casing'
                }
            ]
            // [
            //     'dankstorage:dank_1'
            // ]
        ];
        for (const prop of shapedRecipes) {
            let recipeId;
            if (!prop[4]) recipeId = `kubejs:shaped/${prop[0].replace(':', '_')}`;
            if (prop[4]) {
                if (prop[4].includes(':')) {
                    recipeId = prop[4]
                } else {
                    recipeId = `kubejs:shaped/${prop[4]}`
                }
            }

            e.shaped(prop[0], prop[1], prop[2])
                .id(recipeId)
                .damageIngredient(Ingredient.all);

            if (prop[3]) {
                let inputs = [];

                prop[1].forEach(recipeLayer => {
                    for (let i = 0; i < recipeLayer.length; i++) {
                        for (let [key, input] of Object.entries(prop[2])) {
                            if (recipeLayer.charAt(i) == key) {
                                switch (input) {
                                    case wrenches:
                                    case hammers:
                                    case mallets:
                                    case saws:
                                    case screwdrivers:
                                    break;
                                    default:
                                        inputs.push(input);
                                };         
                            };
                        };
                    };
                });
    
                let JsonInput = [];
                let counts = {};
    
                inputs.forEach(input => {
                    if (counts[input]) {
                        counts[input] += 1
                        return
                    };
                    counts[input] = 1;
                });
    
                for (const [inputId, amount] of Object.entries(counts)) {
                    if (inputId.startsWith('#')) {
                        JsonInput.push({tag: inputId.slice(1), amount: amount});
                    } else {
                        JsonInput.push({item: inputId, amount: amount});
                    }; 
                };   
    
                let OutputId;
                let OutputCount;
    
                if (!isNaN(prop[0].charAt(0))) {
                    if (prop[0].charAt(2) == ' ') {
                        OutputId = prop[0].slice(3);
                        OutputCount = prop[0].charAt(0);
                    };
    
                    if (prop[0].charAt(3) == ' ') {
                        OutputId = prop[0].slice(4);
                        OutputCount = prop[0].substring(0, 2);
                    };
                } else {
                    OutputId = prop[0];
                    OutputCount = 1;
                };
    
                e.custom({
                    type: `${mi}assembler`,
                    item_inputs: JsonInput,
                    item_outputs: [
                        {
                            item: OutputId,
                            amount: parseInt(OutputCount)
                         }
                    ],
                    eu: 8,
                    duration: 10 * tickMultiplier
                }).id(`kubejs:generated/assembler/${recipeId.replace(':','_')}`)
            }
        };
    
        let shapedWithReplace = [
            [
                '2x paper',
                ['aaa','aba','aaa'],
                {
                    a: `${mi}wood_pulp`,
                    b: 'water_bucket'
                },
                'paper',
                'water_bucket',
                'bucket'
            ],
            [
                '2x paper',
                ['aaa','aba','aaa'],
                {
                    a: `${mi}wood_pulp`,
                    b: 'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:water"}]'
                },
                'paper_alt',
                'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:water"}]',
                'ceramicbucket:ceramic_bucket'
            ],
            [
                '8x kubejs:treated_wood_planks',
                ['aaa','aba','aaa'],
                {
                    a: '#minecraft:planks',
                    b: `${mi}creosote_bucket`
                },
                'treated_wood_planks',
                `${mi}creosote_bucket`,
                'bucket'
            ],
            [
                '8x kubejs:canola_treated_wood_planks',
                ['aaa','aba','aaa'],
                {
                    a: 'kubejs:treated_wood_planks',
                    b: `actuallyadditions:refined_canola_oil_bucket`
                },
                'canola_treated_wood_planks',
                `actuallyadditions:refined_canola_oil_bucket`,
                'bucket'
            ],
            [
                'industrialforegoing:water_condensator',
                ['aba','cdc','efe'],
                {
                    a: 'industrialforegoing:plastic',
                    b: 'water_bucket',
                    c: `${mi}primitive_pump`,
                    d: 'industrialforegoing:machine_frame_pity',
                    e: `${mi}iron_gear`,
                    f: 'kubejs:red_alloy_small_gear'
                },
                'water_condensator',
                'water_bucket',
                'bucket'
            ],
            [
                'actuallyadditions:drill_upgrade_speed',
                ['aba','bcb','aba'],
                {
                    a: 'actuallyadditions:enori_crystal',
                    b: 'honey_bottle',
                    c: 'actuallyadditions:basic_coil'
                },
                'drill_upgrade_speed',
                'honey_bottle',
                'glass_bottle'
            ],
            [
                'actuallyadditions:drill_upgrade_speed_ii',
                ['aba','dcd','aba'],
                {
                    a: 'actuallyadditions:enori_crystal',
                    b: 'honey_bottle',
                    c: 'actuallyadditions:advanced_coil',
                    d: 'cake'
                },
                'drill_upgrade_speed_ii',
                'honey_bottle',
                'glass_bottle'
            ],
            [
                'cookingforblockheads:sink',
                ['aaa','bcb','bbb'],
                {
                    a: `${mi}iron_large_plate`,
                    b: 'terracotta',
                    c: 'water_bucket'
                },
                'sink',
                'water_bucket',
                'bucket'
            ],
            [
                'farmersdelight:cooking_pot',
                ['a a','cdc','ccc'],
                {
                    a: 'brick',
                    c: `${mi}steel_ingot`,
                    d: 'water_bucket'
                },
                'cooking_pot',
                'water_bucket',
                'bucket'
            ],
            [
                `${mi}water_tower`,
                ['ada','bcb','ada'],
                {
                    a: `${mi}electronic_circuit`,
                    c: `${mi}advanced_machine_hull`,
                    b: `${mi}large_pump`,
                    d: 'water_bucket'
                },
                'water_tower',
                'water_bucket',
                'bucket'
            ],
            [
                `2x ${mi}fire_clay_bricks`,
                ['aaa','aba','aaa'],
                {
                    a: `${mi}fire_clay_brick`,
                    b: 'water_bucket'
                },
                'fire_clay_bricks',
                'water_bucket',
                'bucket'
            ],
            [
                `2x ${mi}fire_clay_bricks`,
                ['aaa','aba','aaa'],
                {
                    a: `${mi}fire_clay_brick`,
                    b: 'water_bucket'
                },
                'fire_clay_bricks_alt',
                'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:water"}]',
                'ceramicbucket:ceramic_bucket'
            ],
        ];
        for (const prop of shapedWithReplace) {
            e.shaped(prop[0], prop[1], prop[2]).id(`kubejs:shaped/${prop[3]}`).replaceIngredient(prop[4], prop[5]).damageIngredient(Ingredient.all)
        };
    
        e.shaped(
            'industrialforegoing:mob_slaughter_factory',
            ['aba','cdc','efe'], 
            {
                a: 'industrialforegoing:plastic',
                b: `kubejs:cloggrum_steel_rotor`,
                c: 'iron_sword',
                e: 'iron_axe',
                d: 'industrialforegoing:machine_frame_simple',
                f: `${mi}analog_circuit` 
            }
        ).id(`kubejs:mob_slaughter_factory`)
        global.colors.forEach(color => {
            e.shaped(`${color}_bed`, ['AAA', 'BBB', 'CCC'], {A: `${color}_carpet`, B: '#minecraft:planks', C: '#c:fences'}).id(`kubejs:shaped/${color}_bed`)
            e.shaped(`${color}_carpet`, ['AA', '  ', '  '], {A: `${color}_wool`}).id(`kubejs:minecraft/shaped/${color}_carpet`)
        })
    
        e.forEachRecipe({output: '#c:fences', type: 'minecraft:crafting_shaped', input: 'stick', not: {output: 'nether_brick_fence'}}, r => {
            e.shaped(Item.of(r.originalRecipeResult, 1), ['BAB', 'BAB', 'BAB'], {A: r.originalRecipeIngredients[1], B: r.originalRecipeIngredients[3]}).id(r.getId())
        });
    
        e.forEachRecipe({output: /modern_industrialization:\w+blade/, type: `${mi}packer`}, r => {
            e.shaped(Item.of(r.originalRecipeResult, 4), [' b ',' b ',' d '], {b: r.originalRecipeIngredients[0], d: r.originalRecipeIngredients[1]}).id(r.getId())
        })

        e.forEachRecipe({id: /farmersdelight:\w*cabinet/}, r => {
            e.shaped(r.originalRecipeResult, ['aaa','bcb','aaa'], {a: r.originalRecipeIngredients[0], b: r.originalRecipeIngredients[3], c: 'chest'}).id(r.getId())
        });

        e.forEachRecipe([
            {id: /ae2:network\/cells\/item_storage_cell_\w+k$/}, 
            {id: /ae2:network\/cells\/spatial_storage_cell_\w+_cubed$/}
        ], r => {
            e.shaped(
                r.originalRecipeResult,
                ['aba','beb','cdc'],
                {
                    a: 'ae2:quartz_glass',
                    b: 'kubejs:conductive_alloy_wire',
                    c: 'kubejs:enori_large_plate',
                    d: 'ironchest:iron_chest',
                    e: r.originalRecipeIngredients[4]
                },
            ).id(r.getId())
        });

        e.forEachRecipe({id: /ae2:network\/cells\/fluid_storage_cell_\w+k$/}, r => {
            e.shaped(
                r.originalRecipeResult,
                ['aba','beb','cdc'],
                {
                    a: 'ae2:quartz_glass',
                    b: 'kubejs:conductive_alloy_wire',
                    c: 'kubejs:copper_large_plate',
                    d: `${mi}steel_tank`,
                    e: r.originalRecipeIngredients[4]
                },
            ).id(r.getId())
        });

        e.forEachRecipe({id: /megacells:cells\/standard\/item_storage_cell_\w+m$/}, r => {
            e.shaped(
                r.originalRecipeResult,
                ['aba','beb','cdc'],
                {
                    a: 'kubejs:reinforced_glass',
                    b: 'kubejs:iridium_wire',
                    c: 'kubejs:sky_steel_large_plate',
                    d: 'projecte:alchemical_chest',
                    e: r.originalRecipeIngredients[4]
                },
            ).id(r.getId())
        });

        e.forEachRecipe({id: /megacells:cells\/standard\/fluid_storage_cell_\w+m$/}, r => {
            e.shaped(
                r.originalRecipeResult,
                ['aba','beb','cdc'],
                {
                    a: 'kubejs:reinforced_glass',
                    b: 'kubejs:iridium_wire',
                    c: 'kubejs:sky_bronze_large_plate',
                    d: 'projecte:alchemical_chest',
                    e: r.originalRecipeIngredients[4]
                },
            ).id(r.getId())
        });

        // e.forEachRecipe({input: 'croptopia:food_press', not: {id: 'croptopia:shaped_peanut_butter'}}, r => {
        //     let inputs = r.originalRecipeIngredients;
        //     let ingredients = [];

        //     inputs.forEach(input => {
        //         if (input.itemIds.contains('croptopia:food_press')) {
        //             ingredients.push(mallets);
        //         } else {
        //             ingredients.push(input.itemIds)
        //         };
        //     });

        //     let output = r.originalRecipeResult

        //     e.shapeless(
        //         output,
        //         ingredients
        //     ).damageIngredient(mallets).id(r.getId())
        // });
    
        global.compressedBlocks.forEach(property => {
            property[1].forEach(tier => {
                let inputs;
                let index = property[1].indexOf(tier);

                if (tier == 'compressed') {
                    inputs = property[3]
                } else {
                    inputs = `kubejs:${property[1][index - 1]}_${property[0]}`
                }
                e.recipes.modern_industrialization.compressor(2, 20 * tickMultiplier)
                    .itemIn(`9x ${inputs}`)
                    .itemOut(`kubejs:${tier}_${property[0]}`)
                    .id(`kubejs:${tier}_${property[0]}`)
            });
        });

        global.molds.forEach(recipe => {
            Forging(e, `kubejs:${recipe[0]}_mold`, [`${mi}steel_plate`, 4],`molds/${recipe[0]}`)
            //e.shaped(`kubejs:${recipe[0]}_mold`, recipe[1], {a: hammers, b: `${mi}steel_plate`, c: files}).damageIngredient(hammers).damageIngredient(files).id(`kubejs:molds/${recipe[0]}`)
        });

        // e.forEachRecipe({id: /modern_industrialization:materials\/\w+\/packer\/double_ingot/}, r => {
        //     e.shaped(r.originalRecipeResult, ['a','b','b'], {a: mallets, b: r.originalRecipeIngredients[0]}).damageIngredient(mallets).id(`kubejs:shaped/${r.originalRecipeResult.id.replace(':','_')}`)
        // });

        e.replaceInput({}, 'actuallyadditions:black_quartz_ore', '#c:ores/black_quartz')
        e.replaceInput({output: /sophisticatedbackpacks:\w*upgrade/}, 'leather', 'kubejs:treated_leather');
        e.replaceInput({output: /modern_industrialization:\w*item_pipe/}, `${mi}bronze_curved_plate`, 'kubejs:invar_curved_plate')
        e.replaceInput({}, 'projecte:iron_band', 'kubejs:iridium_band')
    };

    function shapeless() {
        let shapelessRecipes = [
            [
                'kubejs:brick_mold',
                ['kubejs:pattern', knives]
            ],
            [
                `4x ${mi}wood_pulp`,
                ['#minecraft:logs', mortars],
                'wood_pulp'
            ],
            [
                'kubejs:clay_tiny_dust',
                ['clay_ball',mortars]
            ],
            [
                'kubejs:clay_dust',
                ['clay',mortars]
            ],
            // [
            //     `${mi}tin_dust`,
            //     ['#c:ingots/tin', mortars]
            // ],
            // [
            //     `${mi}copper_dust`,
            //     ['#c:ingots/copper', mortars]
            // ],
            [
                'kubejs:sand_dust',
                ['sand',mortars]
            ],
            [
                'kubejs:flint_dust',
                ['flint',mortars]
            ],
            [
                'kubejs:glass_dust',
                ['kubejs:sand_dust','kubejs:flint_tiny_dust']
            ],
            [
                'flint_and_steel',
                [`kubejs:steel_small_gear`, 'flint']
            ],
            [
                `3x ${mi}uncooked_steel_dust`,
                ['3x #c:dusts/iron', '#c:dusts/coke'],
                'uncooked_steel_dust'
            ],
            [
                '2x craftingstation:crafting_station_slab',
                ['craftingstation:crafting_station', saws],
                'crafting_station_slab'
            ],
            [
                'enderio:pulsating_powder',
                '9x kubejs:tiny_grains_of_piezallity'
            ],
            [
                '9x kubejs:tiny_grains_of_piezallity',
                'enderio:pulsating_powder',
                'tiny_grains_of_piezallity'
            ],
            [
                `${mi}brick_dust`,
                `9x ${mi}brick_tiny_dust`,
                'brick_dust'
            ],
            [
                'ae2:crafting_terminal',
                [
                    'ae2:terminal',
                    'craftingstation:crafting_station',
                    'kubejs:idea_processor'
                ]
            ],
            [
                'ae2:pattern_encoding_terminal',
                [
                    'ae2:crafting_terminal',
                    'ae2:blank_pattern',
                    'kubejs:molecular_processor'
                ]
            ],
            [
                'flint',
                ['3x gravel']
            ],
            [
                'kubejs:ore_waypoint_maker',
                ['paper','raw_iron']
            ],
            [
                'flint',
                ['gravel',mortars],
                'flint_alt'
            ],
            [
                'ae2:guide',
                ['book','ae2:certus_quartz_crystal']
            ],
            [
                'appliede:learning_card',
                ['ae2:advanced_card','projecte:transmutation_tablet','kubejs:blue_matter']
            ],
            [
                'ae2:wireless_crafting_terminal',
                ['ae2:wireless_terminal','craftingstation:crafting_station','kubejs:idea_processor']
            ],
            [
                'modularrouters:speed_upgrade',
                ['modularrouters:blank_upgrade','ae2:speed_card']
            ],
            [
                'ae2:speed_card',
                ['ae2:advanced_card','prettypipes:high_speed_module','extendedae:entro_crystal']
            ],
            [
                'storagedrawers:obsidian_storage_upgrade',
                ['storagedrawers:upgrade_template', `${mi}bronze_barrel`]
            ],
            [
                'storagedrawers:copper_storage_upgrade',
                ['storagedrawers:upgrade_template', `${mi}steel_barrel`]
            ],
            [
                'storagedrawers:iron_storage_upgrade',
                ['storagedrawers:upgrade_template', `${mi}aluminum_barrel`]
            ],
            [
                'storagedrawers:gold_storage_upgrade',
                ['storagedrawers:upgrade_template', `${mi}stainless_steel_barrel`]
            ],
            [
                'storagedrawers:emerald_storage_upgrade',
                ['storagedrawers:upgrade_template', `${mi}titanium_barrel`]
            ],
            [
                'storagedrawers:creative_storage_upgrade',
                ['storagedrawers:upgrade_template', `${mi}quantum_barrel`]
            ],
            [
                'computercraft:pocket_computer_normal',
                ['computercraft:computer_normal', 'golden_apple']
            ],
            [
                'computercraft:pocket_computer_advanced',
                ['computercraft:computer_advanced', 'golden_apple']
            ],
            [
                'sophisticatedbackpacks:magnet_upgrade',
                ['sophisticatedbackpacks:pickup_upgrade', 'actuallyadditions:ring_of_magnetizing']
            ]
        ];
        for (const prop of shapelessRecipes) {
            if (!prop[2]) prop[2] = prop[0].replace(':', '_');
            
            e.shapeless(prop[0], prop[1]).id(`kubejs:shapeless/${prop[2]}`).damageIngredient(Ingredient.all)
        };

        const backpacks = [
            [
                'sophisticatedbackpacks:copper_backpack',
                ['aaa','aba','aaa'],
                {
                    a: {item:`${mi}copper_plate`},
                    b: {item:"sophisticatedbackpacks:backpack"}
                },
                'copper'
            ],
            [
                'sophisticatedbackpacks:iron_backpack',
                ['aca','cbc','aca'],
                {
                    a: {item:`${mi}iron_plate`},
                    b: {item:"sophisticatedbackpacks:copper_backpack"},
                    c: {item: 'iron_block'}
                },
                'iron'
            ],
            [
                'sophisticatedbackpacks:gold_backpack',
                ['aaa','dbd','aaa'],
                {
                    a: {item:`${mi}gold_plate`},
                    b: {item:"sophisticatedbackpacks:iron_backpack"},
                    d: {item: 'kubejs:empowered_pink_slime_ingot'}
                },
                'gold'
            ],
            [
                'sophisticatedbackpacks:diamond_backpack',
                ['aaa','aba','aaa'],
                {
                    a: {item:`kubejs:empowered_diamatine_plate`},
                    b: {item:"sophisticatedbackpacks:gold_backpack"},
                },
                'diamond'
            ]
        ];

        backpacks.forEach(prop => {
            e.custom({
                type: "sophisticatedbackpacks:backpack_upgrade",
                result: Item.of(prop[0]),
                key: prop[2],
                pattern: prop[1]
            }).id(`kubejs:backpacks/${prop[3]}`)
        });
    };

    function MITypes() {
        const prefix = `kubejs:modern_industrialization/`;
        const { 
            macerator, 
            compressor, 
            mixer, 
            automatic_forge_hammer, 
            automatic_forge_hammer_electric,
            extractor,
            alloy_smelter_alt,
            assembler,
            lathe,
            primitive_pump,
            cutting_machine,
            chemical_bath,
            chemical_reactor,
            fermenter,
            oil_press,
            blast_furnace,
            //fluid_extractor,
            packer,
            unpacker,
            inscriber,
            vacuum_freezer,
            extruder,
            coke_oven,
            pyrolyse_oven,
            distillery,
            gas_collector,
            pressurizer,
            oil_drilling_rig,
            distillation_tower,
            large_chemical_reactor,
            small_chemical_reactor,
            heat_exchanger,
            centrifuge,
            electrolyzer,
            quarry,
            advanced_electric_quarry,
            assembly_line,
            matter_condensator,
            industrial_empowerer,
            wiremill,
            implosion_compressor,
            bedrock_drilling_rig,
            metamorphic_constructor,
            transmutator,
            massive_wiremill,
            massive_forge_hammer,
            massive_compressor,
            polarization_tower,
            polarizer,
            compact_greenhouse,
            water_tower,
            nuclear_component_assembler
        } = e.recipes.modern_industrialization;
    
        let maceratorRecipes = [
            [
                'kubejs:chad',
                'sugar_cane',
                2,
                10,
                'chad'
            ],
            [
                'kubejs:clay_dust',
                'clay_ball',
                2,
                10,
                'clay_dust'
            ],
            [
                `2x ${mi}wood_pulp`,
                '#minecraft:logs',
                2,
                10,
                'wood_pulp'
            ],
            [
                '2x netherite_scrap',
                'ancient_debris',
                16,
                40,
                'netherite_scrap'
            ],
            [
                'extendedae:entro_dust',
                'extendedae:entro_crystal',
                2,
                10,
                'entro_dust'
            ],
            [
                'enderio:ender_crystal_powder',
                'enderio:ender_crystal',
                2,
                10,
                'ender_crystal_powder'
            ],
            [
                'enderio:pulsating_powder',
                'enderio:pulsating_crystal',
                2,
                10,
                'pulsating_powder'
            ],
            [
                'enderio:vibrant_powder',
                'enderio:vibrant_crystal',
                2,
                10,
                'vibrant_powder'
            ],
            [
                'enderio:prescient_powder',
                'enderio:prescient_crystal',
                2,
                10,
                'prescient_powder'
            ],
            [
                '2x undergarden:ditchbulb_paste',
                'undergarden:ditchbulb',
                2,
                10,
                'ditchbulb_paste'
            ],
            [
                '4x enderio:powdered_obsidian',
                'obsidian',
                2,
                40,
                'powdered_obsidian'
            ]
        ];
    
        let compressorRecipes = [
            [
                'paper',
                'kubejs:chad',
                2,
                10,
                'paper'
            ],
            [
                'kubejs:unfired_fire_clay_brick',
                `${mi}fire_clay_dust`,
                2,
                10,
                'unfired_fire_clay_brick'
            ],
            [
                'kubejs:unfired_brick',
                `clay_ball`,
                2,
                10,
                'unfired_brick'
            ],
            [
                'kubejs:double_silver_plate',
                '2x modern_industrialization:silver_plate',
                2,
                15,
                'double_silver_plate'
            ],
            [
                'jumbofurnace:jumbo_furnace',
                '27x furnace',
                2,
                30,
                'jumbo_furnace'
            ]
        ];
    
        let extractorRecipes = [
            [
                '3x kubejs:raw_rubber_dust',
                'kubejs:latex',
                4,
                10,
                'raw_rubber'
            ],
            // [
            //     'kubejs:raw_rubber_dust',
            //     'myrtrees:rubberwood_log',
            //     2,
            //     30,
            //     'raw_rubber_alt'
            // ],
            // [
            //     'kubejs:raw_rubber_dust',
            //     'myrtrees:rubberwood_sapling',
            //     2,
            //     30,
            //     'raw_rubber_alt_2'
            // ],
            [
                'kubejs:raw_rubber_dust',
                'slime_ball',
                4,
                10,
                'raw_rubber_alt'
            ],
            [
                'white_wool',
                '#minecraft:wool',
                4,
                10,
                'white_wool'
            ]
        ];
        
        let alloySmelterRecipes = [
            [
                'kubejs:rubber',
                ['3x kubejs:raw_rubber_dust', `${mi}sulfur_dust`],
                2,
                10,
                'rubber'
            ],
            [
                'netherite_ingot',
                ['4x gold_ingot', '4x netherite_scrap'],
                4,
                30,
                'netherite_ingot'
            ],
            [
                'kubejs:red_alloy_ingot',
                [Ingredient.of(['copper_ingot', `${mi}copper_dust`]), '4x redstone'],
                2,
                10,
                'red_alloy_ingot'
            ],
            [
                'kubejs:reinforced_glass',
                [
                    'glass',
                    `${mi}blastproof_alloy_plate`
                ],
                16,
                30,
                'reinforced_glass'
            ],
            [
                'kubejs:fluix_glass',
                [
                    'glass',
                    `ae2:fluix_crystal`
                ],
                8,
                10,
                'fluix_glass'
            ],
            [
                'extendedae:assembler_matrix_glass',
                [
                    'extendedae:assembler_matrix_wall',
                    'kubejs:fluix_glass'
                ],
                8,
                10,
                'assembler_matrix_glass'
            ]
        ];
    
        let cuttingMachineRecipes = [
            [
                '2x kubejs:treated_stick',
                'kubejs:treated_wood_planks',
                2,
                10,
                `1x modern_industrialization:lubricant`,
                'treated_stick'
            ],
            [
                '2x kubejs:short_wood_stick',
                'stick',
                2,
                10,
                `1x modern_industrialization:lubricant`,
                'short_wood_stick'
            ]
        ];

        let fermenterRecipes = [
            [
                'apple',
                150
            ],
            [
                'beetroot',
                100
            ],
            [
                'glow_berries',
                300
            ],
            [
                'melon_slice',
                50
            ],
            [
                'potato',
                120
            ],
            [
                'sugar_cane',
                250
            ],
            [
                'sweet_berries',
                100
            ]
        ];

        let plantPressRecipes = [
            [
                'wheat_seeds',
                550
            ],
            [
                'beetroot_seeds',
                450
            ],
            [
                'pumpkin_seeds',
                500
            ],
            [
                'melon_seeds',
                400
            ],
            [
                'farmersdelight:cabbage_seeds',
                500
            ],
            [
                'farmersdelight:tomato_seeds',
                450
            ],
            [
                'actuallyadditions:canola_seeds',
                400
            ],
        ];

        const plates = [
            [
                `${mi}diamond_plate`,
                `${mi}diamond_dust`,
                'diamond_plate'
            ],
            [
                `${mi}emerald_plate`,
                `${mi}emerald_dust`,
                'emerald_plate'
            ]
        ]

        plates.forEach(recipe => {
            automatic_forge_hammer(2, 800)
                .itemIn(Item.of(recipe[1], 3))
                .itemOut(Item.of(recipe[0], 2))
                .id(`${prefix}bronze_forge_hammer/${recipe[2]}`);

            automatic_forge_hammer_electric(8, 400)
                .itemIn(Item.of(recipe[1]))
                .itemOut(Item.of(recipe[0]))
                .id(`${prefix}electric_forge_hammer/${recipe[2]}`);

            extruder(8, 10 * tickMultiplier)
                .itemIn(Item.of(recipe[1]))
                .itemIn('kubejs:plate_mold', 0)
                .itemOut(Item.of(recipe[0]))
                .id(`kubejs:mi/extruder/${recipe[2]}_plate`)

            massive_forge_hammer(128, 1 * tickMultiplier)
                .itemIn(Item.of(recipe[1], 1))
                .itemOut(Item.of(recipe[0], 1))
                .id(`${prefix}massive_forge_hammer/${recipe[2]}`);
        });

        plantPressRecipes.forEach(recipe => {
            oil_press(8, 200)
                .itemIn(recipe[0])
                .fluidOut(`${mi}plant_oil`, recipe[1])
                .id(`${prefix}fermenter/${recipe[0].replace(':','_')}`);
        });

        fermenterRecipes.forEach(recipe => {
            fermenter(8, 200)
                .itemIn(recipe[0])
                .fluidOut(`${mi}sugar_solution`, recipe[1])
                .id(`${prefix}fermenter/${recipe[0]}`);
        });


        cuttingMachineRecipes.forEach(recipe => {
            cutting_machine(recipe[2], recipe[3] * tickMultiplier)
                .itemIn(recipe[1])
                .itemOut(recipe[0])
                .fluidIn(recipe[4])
                .id(`${prefix}cutting_machine/${recipe[5]}`);
        })

        maceratorRecipes.forEach(recipe => {
            macerator(recipe[2], recipe[3] * tickMultiplier)
                .itemIn(recipe[1])
                .itemOut(recipe[0])
                .id(`${prefix}macerator/${recipe[4]}`);
        });
    
        compressorRecipes.forEach(recipe => {
            compressor(recipe[2], recipe[3] * tickMultiplier)
                .itemIn(recipe[1])
                .itemOut(recipe[0])
                .id(`${prefix}compressor/${recipe[4]}`);

            massive_compressor(128, recipe[3] / 10 * tickMultiplier)
                .itemIn(recipe[1])
                .itemOut(recipe[0])
                .id(`${prefix}massive_compressor/${recipe[4]}`);
        });
    
        extractorRecipes.forEach(recipe => {
            extractor(recipe[2], recipe[3] * tickMultiplier)
                .itemIn(recipe[1])
                .itemOut(recipe[0])
                .id(`${prefix}extractor/${recipe[4]}`);
        });
    
        alloySmelterRecipes.forEach(recipe => {
            alloy_smelter_alt(recipe[2], recipe[3] * tickMultiplier)
                .itemIn(recipe[1][0])
                .itemIn(recipe[1][1])
                .itemOut(recipe[0])
                .id(`${prefix}alloy_smelter/${recipe[4]}`);

            // e.custom({
            //     "type": "enderio:alloy_smelting",
            //     "energy": 6000,
            //     "experience": 0.2,
            //     "inputs": [
            //         {
            //             item: recipe[1][0][0],
            //             count: recipe[1][0][1]
            //         },
            //         {
            //             item: recipe[1][1][0],
            //             count: recipe[1][1][1]
            //         }
            //     ],
            //     "output": Item.of(recipe[0])
            // }).id(`kubejs:enderio/alloy_smelting/${recipe[4]}`)
        });
    
        materialsToPlates.forEach(recipe => {
            let PlateOutput;
            if (recipe == 'rubber') {
                PlateOutput = `${mi}rubber_sheet`
            } else {
                PlateOutput = `${mi}${recipe}_plate`
            };
            automatic_forge_hammer(2, 10 * tickMultiplier)
                .itemIn(item(`#c:ingots/${recipe}`, 3))
                .itemOut(Item.of(PlateOutput, 2))
                .id(`${prefix}forge_hammer_bronze/${recipe}_plate`)
    
            automatic_forge_hammer_electric(8, 10 * tickMultiplier)
                .itemIn(item(`#c:ingots/${recipe}`))
                .itemOut(Item.of(PlateOutput))
                .id(`${prefix}forge_hammer_electric/${recipe}_plate`)

            extruder(8, 10 * tickMultiplier)
                .itemIn(item(`#c:ingots/${recipe}`))
                .itemIn('kubejs:plate_mold', 0)
                .itemOut(Item.of(PlateOutput))
                .id(`kubejs:mi/extruder/${recipe}_plate`)

            massive_forge_hammer(128, 1 * tickMultiplier)
                .itemIn(item(`#c:ingots/${recipe}`, 1))
                .itemOut(Item.of(PlateOutput, 1))
                .id(`${prefix}massive_forge_hammer/${recipe}_plate`)
        });
        
        const Mixer = (eu, time, id) => mixer(eu, time * tickMultiplier).id(`${prefix}mixer/${id}`);
        const BlastFurnace = (eu, time, id) => blast_furnace(eu, time * tickMultiplier).id(`${prefix}blast_furnace/${id}`);
        const CokeOven = (eu, time, id) => coke_oven(eu, time * tickMultiplier).id(`${prefix}coke_oven/${id}`);
        const PyrolyseOven = (eu, time, id) => pyrolyse_oven(eu, time * tickMultiplier).id(`${prefix}pyrolyse_oven/${id}`);
        const ChemicalBath = (eu, time, id) => chemical_bath(eu, time * tickMultiplier).id(`${prefix}chemical_bath/${id}`);
        const Extractor = (eu, time, id) => extractor(eu, time * tickMultiplier).id(`${prefix}extractor/${id}`);
        const Pressurizer = (eu, time, id) => pressurizer(eu, time * tickMultiplier).id(`${prefix}pressurizer/${id}`);
        const VacuumFreezer = (eu, time, id) => vacuum_freezer(eu, time * tickMultiplier).id(`${prefix}vacuum_freezer/${id}`);
        const HeatExchanger = (eu, time, id) => heat_exchanger(eu, time * tickMultiplier).id(`${prefix}heat_exchanger/${id}`);
        const Packer = (eu, time, id) => packer(eu, time * tickMultiplier).id(`${prefix}packer/${id}`);
        const Unpacker = (eu, time, id) => unpacker(eu, time * tickMultiplier).id(`${prefix}unpacker/${id}`);
        const Macerator = (eu, time, input, id) => macerator(eu, time * tickMultiplier).itemIn(input).id(`${prefix}macerator/${id}`);
        const Assembler = (eu, time, output, id) => assembler(eu, time * tickMultiplier).itemOut(output).id(`${prefix}assembler/${id}`);
        const NuclearComponentAssembler = (eu, time, output, id) => nuclear_component_assembler(eu, time * tickMultiplier).itemOut(output).id(`${prefix}nuclear_component_assembler/${id}`);
        const AssemblyLine = (eu, time, output, id) => assembly_line(eu, time * tickMultiplier).itemOut(output).id(`${prefix}assembly_line/${id}`);
        const Lathe = (eu, time, outputs, input, id) => lathe(eu, time * tickMultiplier).itemOut(outputs).itemIn(input).id(id);
        const Wiremill = (eu, time, output, input, id) => wiremill(eu, time * tickMultiplier).itemOut(output).itemIn(input).id(id);
        const MassiveWiremill = (eu, time, output, input, id) => massive_wiremill(eu, time * tickMultiplier).itemOut(output).itemIn(input).id(`${prefix}massive_wiremill/${id}`);
        const Inscriber = (eu, time, output, id) => inscriber(eu, time * tickMultiplier).itemOut(output).id(`${prefix}inscriber/${id}`)
        const Centrifuge = (eu, time, id) => centrifuge(eu, time * tickMultiplier).id(`${prefix}centrifuge/${id}`);
        const Electrolyzer = (eu, time, id) => electrolyzer(eu, time * tickMultiplier).id(`${prefix}electrolyzer/${id}`);
        const ChemicalReactor = (eu, time, id) => small_chemical_reactor(eu, time * tickMultiplier).id(`${prefix}small_chemical_reactor/${id}`);
        const LargeChemicalReactor = (eu, time, id) => large_chemical_reactor(eu, time * tickMultiplier).id(`${prefix}large_chemical_reactor/${id}`);
        const Distillery = (eu, time, output, input, id) => distillery(eu, time * tickMultiplier).fluidIn(input[0], input[1]).fluidOut(output[0], output[1]).id(`${prefix}distillery/${id}`);
        const GasCollector = (eu, time, output,input, id) => gas_collector(eu, time * tickMultiplier).itemIn(input, 0).fluidOut(output[0], output[1]).id(`${prefix}gas_collector/${id}`);
        const OilDrillingRig = (eu, time, output,input, id) => oil_drilling_rig(eu, time * tickMultiplier).itemIn(input[0], input[1]).fluidOut(output[0], output[1]).id(`${prefix}oil_drilling_rig/${id}`);
        const Polarizer = (eu, time, output,input, id) => polarizer(eu, time * tickMultiplier).itemIn(input).itemOut(output).id(`${prefix}polarizer/${id}`);
        const PolarizationTower = (eu, time, output,input, id) => polarization_tower(eu, time * tickMultiplier).itemIn(input).itemOut(output).id(`${prefix}polarization_tower/${id}`);
        const Quarry = (eu, time, id) => quarry(eu, time * tickMultiplier).id(`${prefix}electric_quarry/${id}`);
        const AdvancedElectricQuarry = (eu, time, id) => advanced_electric_quarry(eu, time * tickMultiplier).id(`${prefix}advanced_electric_quarry/${id}`);
        const DistillationTower = (eu, time, input, id) => distillation_tower(eu, time * tickMultiplier).fluidIn(input[0],input[1]).id(`${prefix}distillation_tower/${id}`);
        const MatterCondensator = (eu, time, id) => matter_condensator(eu, time * tickMultiplier).id(`${prefix}matter_condensator/${id}`);
        const IndustrialEmpowerer = (eu, time, id) => industrial_empowerer(eu, time * tickMultiplier).id(`${prefix}industrial_empowerer/${id}`);
        const ImplosionCompressor = (eu, time,output, id) => implosion_compressor(eu, time * tickMultiplier).itemOut(output).id(`${prefix}implosion_compressor/${id}`);
        const bedrockDrillingRig = (eu, time, id) => bedrock_drilling_rig(eu, time * tickMultiplier).id(`${prefix}bedrock_drilling_rig/${id}`);
        const MetamorphicConstructor = (eu, time, id) => metamorphic_constructor(eu, time * tickMultiplier).id(`${prefix}metamorphic_constructor/${id}`);
        const Transmutator = (eu, time, id) => transmutator(eu, time * tickMultiplier).id(`${prefix}transmutator/${id}`);
        const CompactGreenhouse = (eu, time, input, waterAmount, id) => compact_greenhouse(eu, time * tickMultiplier).itemIn(input,0).itemIn('industrialforegoing:fertilizer', 0.05).fluidIn('water', waterAmount).id(`${prefix}compact_greenhouse/${id}`);
        const WaterTower = (eu, time, id) => water_tower(eu, time * tickMultiplier).id(`${prefix}water_tower/${id}`);

        WaterTower(8, 5, 'water')
            .itemIn(`${mi}copper_rotor`, 0)
            .fluidOut('256000x water')

        Forging(e, `${mi}salt_dust`, [`kubejs:raw_salt`, 1], 'salt')

        let trees = [
            {
                mod: 'minecraft',
                types: [
                    'birch',
                    'spruce',
                    'jungle',
                    'acacia',
                    'dark_oak',
                    'cherry'
                ]
            },
            {
                mod: 'minecraft',
                types: [
                    'oak',
                ],
                byproduct: ['apple', 0.2]
            },
            {
                mod: 'undergarden',
                types: [
                    'grongle'
                ],
                byproduct: ['undergarden:gronglet', 0.3]
            },
            {
                mod: 'undergarden',
                types: [
                    'wigglewood',
                    'smogstem'
                ]
            },
            // {
            //     mod: 'regions_unexplored',
            //     types: [
            //         'alpha',
            //         'ashen',
            //         'bamboo',
            //         'baobab',
            //         'blackwood',
            //         //'blue_magnolia',
            //         'brimwood',
            //         'cobalt',
            //         'cypress',
            //         'dead',
            //         'enchanted_birch',
            //         'eucalyptus',
            //         'joshua',
            //         'kapok',
            //         'larch',
            //         'magnolia',
            //         'maple',
            //         'mauve',
            //         'palm',
            //         'pine',
            //         //'pink_magnolia',
            //         //red_maple,
            //         'redwood',
            //         'silver_birch',
            //         'socotra',
            //         //white_magnolia,
            //         'willow',
            //         'cinnamon'
            //     ]
            // }
        ];

        const BasicTree = (mod, type) => CompactGreenhouse(64, 10, `${mod}:${type}_sapling`, 100, `${mod}_${type}`).itemOut(`6x ${mod}:${type}_log`).itemOut(`${mod}:${type}_sapling`, 0.25).itemOut(`4x stick`, 0.3) 

        trees.forEach(prop => {
            let mod = prop.mod;
            let byproduct = prop.byproduct

            prop.types.forEach(type => {
                if (byproduct) {
                    BasicTree(mod,type).itemOut(byproduct[0], byproduct[1])
                } else {
                    BasicTree(mod,type)
                };
            });
        });

        let teslaWindings = [
            {
                material: 'aluminum',
                coil: 'kubejs:aluminum_coil'
            },
            {
                material: 'annealed_copper',
                coil: 'kubejs:annealed_copper_coil'
            },
            {
                material: 'copper',
                coil: 'kubejs:copper_coil'
            },
            {
                material: 'electrum',
                coil: 'kubejs:electrum_coil'
            },
            {
                material: 'superconductor',
                coil: `${mi}superconductor_coil`
            }
        ];

        teslaWindings.forEach(prop => {
            Assembler(8, 10, `extended_industrialization:${prop.material}_tesla_winding`, `${prop.material}_tesla_winding`)
                .itemIn(prop.coil)
                .itemIn(`8x ${mi}stainless_steel_plate`)
        })

        NuclearComponentAssembler(256, 50, `${mi}cadmium_control_rod`, 'cadmium_control_rod')
            .itemIn(`4x ${mi}blastproof_alloy_curved_plate`)
            .itemIn(`${mi}large_advanced_motor`)
            .itemIn(`2x kubejs:advanced_robot_arm`)
            .itemIn(`18x ${mi}cadmium_rod`)
            .itemIn('enderio:octadic_capacitor')
            .fluidIn(`700x ${mi}soldering_alloy`)
            .fluidIn(`200x ${mi}helium`)

        NuclearComponentAssembler(256, 50, `${mi}he_mox_fuel_rod`, 'he_mox_fuel')
            .itemIn(`4x ${mi}blastproof_alloy_curved_plate`)
            .itemIn(`${mi}large_advanced_motor`)
            .itemIn(`2x kubejs:advanced_robot_arm`)
            .itemIn(`18x ${mi}he_mox_rod`)
            .itemIn('enderio:octadic_capacitor')
            .fluidIn(`700x ${mi}soldering_alloy`)
            .fluidIn(`200x ${mi}helium`)

        NuclearComponentAssembler(256, 50, `${mi}he_uranium_fuel_rod`, 'he_uranium_fuel')
            .itemIn(`4x ${mi}blastproof_alloy_curved_plate`)
            .itemIn(`${mi}large_advanced_motor`)
            .itemIn(`2x kubejs:advanced_robot_arm`)
            .itemIn(`18x ${mi}he_uranium_rod`)
            .itemIn('enderio:octadic_capacitor')
            .fluidIn(`700x ${mi}soldering_alloy`)
            .fluidIn(`200x ${mi}helium`)

        NuclearComponentAssembler(256, 50, `${mi}le_mox_fuel_rod`, 'le_mox_fuel_rod')
            .itemIn(`4x ${mi}blastproof_alloy_curved_plate`)
            .itemIn(`${mi}large_advanced_motor`)
            .itemIn(`2x kubejs:advanced_robot_arm`)
            .itemIn(`18x ${mi}le_mox_rod`)
            .itemIn('enderio:octadic_capacitor')
            .fluidIn(`700x ${mi}soldering_alloy`)
            .fluidIn(`200x ${mi}helium`)

        NuclearComponentAssembler(256, 50, `${mi}le_uranium_fuel_rod`, 'le_uranium_fuel_rod')
            .itemIn(`4x ${mi}blastproof_alloy_curved_plate`)
            .itemIn(`${mi}large_advanced_motor`)
            .itemIn(`2x kubejs:advanced_robot_arm`)
            .itemIn(`18x ${mi}le_uranium_rod`)
            .itemIn('enderio:octadic_capacitor')
            .fluidIn(`700x ${mi}soldering_alloy`)
            .fluidIn(`200x ${mi}helium`)

         NuclearComponentAssembler(256, 50, `${mi}uranium_fuel_rod`, 'uranium_fuel_rod')
            .itemIn(`4x ${mi}blastproof_alloy_curved_plate`)
            .itemIn(`${mi}large_advanced_motor`)
            .itemIn(`2x kubejs:advanced_robot_arm`)
            .itemIn(`18x ${mi}uranium_rod`)
            .itemIn('enderio:octadic_capacitor')
            .fluidIn(`700x ${mi}soldering_alloy`)
            .fluidIn(`200x ${mi}helium`)

        NuclearComponentAssembler(512, 100, `${mi}nuclear_reactor`, 'nuclear_reactor')
            .itemIn(`${mi}highly_advanced_machine_hull`)
            .itemIn(`4x ${mi}processing_unit`)
            .itemIn(`2x ${mi}cadmium_control_rod`)
            .itemIn(`16x ${mi}nuclear_alloy_large_plate`)
            .fluidIn(`400x ${mi}helium`)

        e.forEachRecipe({id: /\w*packer\/fuel_rod/}, r => {
            e.custom({
                type: `${mi}nuclear_component_assembler`,
                item_inputs: r.json.get('item_inputs'),
                item_outputs: r.json.get('item_outputs'),
                eu: 256,
                duration: 20 * tickMultiplier,
                fluid_inputs: [
                    {fluid: `${mi}soldering_alloy`, amount: 300},
                    {fluid: `${mi}helium`, amount: 50}
                ]
            }).id(r.getId())
        });

        e.recipes.extended_industrialization.canning_machine(8, 10 * tickMultiplier)
            .fluidIn('100x kubejs:liquid_dragons_breath')
            .itemOut('dragon_breath')
            .itemIn('glass_bottle')
            .id('kubejs:canning_machine/dragon_breath')

        // Assembler(8, 10, `${mi}fire_clay_bricks`, 'fire_clay_bricks')
        //     .itemIn(`4x ${mi}fire_clay_brick`)
        //     .fluidIn('250x water')

        CompactGreenhouse(64, 5, 'undergarden:ditchbulb', 500, 'ditchbulb')
            .itemOut('undergarden:ditchbulb')
            .itemOut('undergarden:ditchbulb', 0.25)

        CompactGreenhouse(64, 30, 'coxinhautilities:ender_orchid_seeds', 500, 'ender_orchid_seeds')
            .itemOut('ender_pearl')

        CompactGreenhouse(64, 5, 'expandeddelight:chili_pepper_seeds', 100, 'chili_pepper')
            .itemOut('expandeddelight:chili_pepper')
            .itemOut('expandeddelight:chili_pepper_seeds', 0.25)

        CompactGreenhouse(64, 5, 'expandeddelight:asparagus_seeds', 100, 'asparagus_seeds')
            .itemOut('expandeddelight:asparagus')
            .itemOut('expandeddelight:asparagus_seeds', 0.25)

        CompactGreenhouse(64, 5, 'actuallyadditions:coffee_beans', 100, 'coffee_beans')
            .itemOut('2x actuallyadditions:coffee_beans')
            .itemOut('actuallyadditions:coffee_beans', 0.25)

        CompactGreenhouse(64, 5, 'actuallyadditions:rice_seeds', 300, 'rice')
            .itemOut('actuallyadditions:rice')
            .itemOut('actuallyadditions:rice_seeds', 0.25)

        CompactGreenhouse(64, 5, 'actuallyadditions:canola_seeds', 200, 'canola')
            .itemOut('actuallyadditions:canola')
            .itemOut('actuallyadditions:canola', 0.5)
            .itemOut('actuallyadditions:canola_seeds', 0.25)

        CompactGreenhouse(64, 5, 'farmersdelight:onion', 100, 'onion')
            .itemOut('farmersdelight:onion')
            .itemOut('farmersdelight:onion', 0.25)

        CompactGreenhouse(64, 5, 'farmersdelight:tomato_seeds', 100, 'tomato')
            .itemOut('farmersdelight:tomato')
            .itemOut('farmersdelight:tomato_seeds', 0.25)

        CompactGreenhouse(64, 5, 'farmersdelight:cabbage_seeds', 100, 'cabbage')
            .itemOut('farmersdelight:cabbage')
            .itemOut('farmersdelight:cabbage_seeds', 0.25)

        CompactGreenhouse(64, 5, 'supplementaries:flax_seeds', 100, 'flax')
            .itemOut('supplementaries:flax')
            .itemOut('supplementaries:flax_seeds', 0.25)

        CompactGreenhouse(64, 5, 'potato', 100, 'potato')
            .itemOut('potato')
            .itemOut('potato', 0.25)

        CompactGreenhouse(64, 5, 'carrot', 100, 'carrot')
            .itemOut('carrot')
            .itemOut('carrot', 0.25)

        CompactGreenhouse(64, 5, 'nether_wart', 50, 'nether_wart')
            .itemOut('minecraft:nether_wart')
            .itemOut('nether_wart', 0.15)

        CompactGreenhouse(64, 5, 'minecraft:torchflower_seeds', 100, 'torchflower_seeds')
            .itemOut('minecraft:torchflower')
            .itemOut('torchflower_seeds', 0.25)

        CompactGreenhouse(64, 5, 'beetroot_seeds', 100, 'beetroot')
            .itemOut('beetroot')
            .itemOut('beetroot_seeds', 0.25)

        CompactGreenhouse(64, 10, 'melon_seeds', 300, 'melon')
            .itemOut('3x melon_slice')
            .itemOut('melon_slice', 0.25)

        CompactGreenhouse(64, 10, 'pumpkin_seeds', 300, 'pumpkin')
            .itemOut('pumpkin')

        CompactGreenhouse(64, 5, 'cocoa_beans', 50, 'cocoa_beans')
            .itemOut('cocoa_beans')
            .itemOut('cocoa_beans', 0.25)

        CompactGreenhouse(64, 5, 'cactus', 200, 'cactus')
            .itemOut('cactus')

        CompactGreenhouse(64, 5, 'sugar_cane', 200, 'sugar_cane')
            .itemOut('sugar_cane')

        CompactGreenhouse(64, 5, 'wheat_seeds', 100, 'wheat')
            .itemOut('wheat')
            .itemOut('wheat_seeds', 0.20)

        PolarizationTower(128, 5, `${mi}stainless_steel_rod_magnetic`, `${mi}stainless_steel_rod`, 'magnetic_stainless_steel_rod').itemIn(`${mi}neodymium_dust`)
        PolarizationTower(128, 3, `${mi}cupronickel_wire_magnetic`, `${mi}cupronickel_wire`, 'cupronickel_wire_magnetic')
        PolarizationTower(128, 3, `${mi}steel_rod_magnetic`, `${mi}steel_rod`, 'steel_rod_magnetic')

        PolarizationTower(128, 3, 'kubejs:magnetic_iron_casing', 'kubejs:iron_casing', 'magnetic_iron_casing')
        Polarizer(8, 10, 'kubejs:magnetic_iron_casing', 'kubejs:iron_casing', 'magnetic_iron_casing')

        Transmutator(512, 5, '17')
            .itemIn('projecte:philosophers_stone', 0)
            .itemOut('kubejs:perfectus_fuel')
            .itemIn('4x projecte:aeternalis_fuel')

        Transmutator(512, 5, '16')
            .itemIn('projecte:philosophers_stone', 0)
            .itemIn('kubejs:perfectus_fuel')
            .itemOut('4x projecte:aeternalis_fuel')

        Transmutator(512, 5, '15')
            .itemIn('projecte:philosophers_stone', 0)
            .itemIn('4x projecte:mobius_fuel')
            .itemOut('projecte:aeternalis_fuel')

        Transmutator(512, 5, '14')
            .itemIn('projecte:philosophers_stone', 0)
            .itemIn('projecte:aeternalis_fuel')
            .itemOut('4x projecte:mobius_fuel')

        Transmutator(512, 5, '13')
            .itemIn('projecte:philosophers_stone', 0)
            .itemIn('4x projecte:alchemical_coal')
            .itemOut('projecte:mobius_fuel')

        Transmutator(512, 1, '12')
            .itemIn('projecte:philosophers_stone', 0)
            .itemIn('projecte:mobius_fuel')
            .itemOut('4x projecte:alchemical_coal')

        Transmutator(512, 5, '11')
            .itemIn('projecte:philosophers_stone', 0)
            .itemIn('4x coal')
            .itemOut('projecte:alchemical_coal')

        Transmutator(512, 1, '10')
            .itemIn('projecte:philosophers_stone', 0)
            .itemIn('8x iron_ingot')
            .itemOut('gold_ingot')

        Transmutator(512, 1, '9')
            .itemIn('projecte:philosophers_stone', 0)
            .itemIn('diamond')
            .itemOut('4x gold_ingot')

        Transmutator(512, 1, '8')
            .itemIn('projecte:philosophers_stone', 0)
            .itemIn('gold_ingot')
            .itemOut('4x iron_ingot')

        Transmutator(512, 1, '7')
            .itemIn('projecte:philosophers_stone', 0)
            .itemIn('4x gold_ingot')
            .itemOut('diamond')

        Transmutator(512, 1, '6')
            .itemIn('projecte:philosophers_stone', 0)
            .itemIn('emerald')
            .itemOut('2x diamond')

        Transmutator(512, 1, '5')
            .itemIn('projecte:philosophers_stone', 0)
            .itemIn('2x diamond')
            .itemOut('emerald')

        Transmutator(512, 1, '4')
            .itemIn('projecte:philosophers_stone', 0)
            .itemIn('coal')
            .itemOut('4x charcoal')

        Transmutator(512, 1, '3')
            .itemIn('projecte:philosophers_stone', 0)
            .itemIn('projecte:alchemical_coal')
            .itemOut('4x coal')

        Transmutator(512, 1, '2')
            .itemIn('projecte:philosophers_stone', 0)
            .itemIn('4x charcoal')
            .itemOut('coal')

        Transmutator(512, 1, '1')
            .itemIn('projecte:philosophers_stone', 0)
            .itemIn('4x iron_ingot')
            .itemOut('ender_pearl')

        Transmutator(512, 10, 'aberration')
            .fluidIn('kubejs:anomaly', 10)
            .itemIn('projecte:philosophers_stone', 0)
            .fluidOut('kubejs:aberration', 5)

        MetamorphicConstructor(1024, 100, 'arcana_ring')
            .itemIn(`projecte:zero_ring`)
            .itemIn('projecte:ignition_ring')
            .itemIn('projecte:harvest_goddess_band')
            .itemIn('projecte:swiftwolf_rending_gale')
            .itemIn('8x kubejs:blue_matter')
            .itemOut('projecte:arcana_ring')
            .fluidIn(`kubejs:aberration`, 500)

        MetamorphicConstructor(1024, 10, 'high_covalence_dust')
            .itemIn(`${mi}plutonium_dust`)
            .itemIn('4x actuallyadditions:empowered_diamatine_crystal')
            .itemOut('8x projecte:high_covalence_dust')
            .fluidIn(`kubejs:anomaly`, 100)

        MetamorphicConstructor(1024, 10, 'medium_covalence_dust')
            .itemIn(`${mi}plutonium_dust`)
            .itemIn('4x actuallyadditions:empowered_palis_crystal')
            .itemOut('8x projecte:medium_covalence_dust')
            .fluidIn(`kubejs:anomaly`, 100)

        MetamorphicConstructor(1024, 10, 'low_covalence_dust')
            .itemIn(`${mi}plutonium_dust`)
            .itemIn('4x actuallyadditions:empowered_void_crystal')
            .itemOut('8x projecte:low_covalence_dust')
            .fluidIn(`kubejs:anomaly`, 100)

        MetamorphicConstructor(1024, 100, 'tome_of_knowledge')
            .itemIn('minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:fortune":3,"minecraft:looting":3,"minecraft:mending":1,"minecraft:sharpness":5}},repair_cost=7]')
            .itemIn(`${mi}quantum_upgrade`)
            .fluidIn(`kubejs:aberration`, 1000)
            .fluidIn(`${mi}uu_matter`, 500)
            .itemOut(`projecte:tome`)

        MetamorphicConstructor(1024, 10, 'klein_star_ein')
            .itemIn('ae2:singularity')
            .itemIn('8x projecte:mobius_fuel')
            .fluidIn('kubejs:aberration', 25)
            .itemOut(`projecte:klein_star_ein`)

        MetamorphicConstructor(1024, 10, 'klein_star_zwei')
            .itemIn(`4x projecte:klein_star_ein`)
            .itemOut(`projecte:klein_star_zwei`)

        MetamorphicConstructor(1024, 10, 'klein_star_drei')
            .itemIn(`4x projecte:klein_star_zwei`)
            .itemOut(`projecte:klein_star_drei`)

        MetamorphicConstructor(1024, 10, 'klein_star_vier')
            .itemIn(`4x projecte:klein_star_drei`)
            .itemOut(`projecte:klein_star_vier`)

        MetamorphicConstructor(1024, 10, 'klein_star_sphere')
            .itemIn(`4x projecte:klein_star_vier`)
            .itemOut(`projecte:klein_star_sphere`)

        MetamorphicConstructor(1024, 10, 'klein_star_omega')
            .itemIn(`4x projecte:klein_star_sphere`)
            .itemOut(`projecte:klein_star_omega`)

        MetamorphicConstructor(1024, 100, 'transmutator')
            .itemIn(`${mi}highly_advanced_machine_hull`)
            .itemIn(`4x ${mi}processing_unit`)
            .itemIn(`2x ${mi}large_advanced_motor`)
            .itemIn(`2x ${mi}large_advanced_pump`)
            .itemIn(`8x kubejs:superconductor_casing`)
            .fluidIn('kubejs:anomaly', 500)
            .itemOut(`${mi}transmutator`)

        MetamorphicConstructor(1024, 300, 'philosophers_stone')
            //.itemIn('kubejs:philosophers_stone_scheme')
            .itemIn(`${mi}qubit`)
            .itemIn(`4x ${mi}plutonium_ingot`)
            .itemIn(`4x ${mi}uranium_235_ingot`)
            .fluidIn('kubejs:anomaly', 500)
            .itemOut('projecte:philosophers_stone')

        bedrockDrillingRig(256, 1, 'shale_oil')
            .itemIn('kubejs:soularium_drill', 0.05)
            .fluidOut(`${mi}shale_oil`, 3000)  

        bedrockDrillingRig(256, 1, 'crude_oil')
            .itemIn(`${mi}aluminum_drill`, 0.04)
            .fluidOut(`${mi}crude_oil`, 2500)


        bedrockDrillingRig(384, 200, 'bedrock_substance_alt')
            .itemIn('kubejs:iridium_drill', 0.08)
            .fluidOut('kubejs:bedrock_substance', 100)   

        bedrockDrillingRig(384, 200, 'bedrock_substance')
            .itemIn(`kubejs:tungstensteel_drill`, 0.1)
            .fluidOut('kubejs:bedrock_substance', 50)   

        Wiremill(8, 5, 'morered:red_alloy_wire', 'kubejs:red_alloy_wire', 'red_alloy_wire')
        MassiveWiremill(128, 1, '2x morered:red_alloy_wire', 'kubejs:red_alloy_wire', 'red_alloy_wire')

        MassiveWiremill(128, 1, `3x ${mi}aluminum_wire`, `${mi}aluminum_ingot`,  'aluminum_wire')
        MassiveWiremill(128, 1, `3x ${mi}annealed_copper_wire`, `${mi}annealed_copper_ingot`,  'annealed_wire')
        MassiveWiremill(128, 1, `4x ${mi}copper_fine_wire`,  `${mi}copper_wire`,  'copper_fine_wire')
        MassiveWiremill(128, 1, `3x ${mi}copper_wire`, `copper_ingot`,  'copper_wire')
        MassiveWiremill(128, 1, `3x ${mi}cupronickel_wire`, `${mi}cupronickel_ingot`,  'cupronickel_wire')
        MassiveWiremill(128, 1, `4x ${mi}electrum_fine_wire`,  `${mi}electrum_wire`,  'electrum_fine_wire')
        MassiveWiremill(128, 1, `3x ${mi}electrum_wire`, `${mi}electrum_ingot`,  'electrum_wire')
        MassiveWiremill(128, 1, `3x ${mi}kanthal_wire`, `${mi}kanthal_ingot`,  'kanthal_wire')
        MassiveWiremill(128, 1, `4x ${mi}platinum_fine_wire`,  `${mi}platinum_wire`,  'platinum_fine_wire')
        MassiveWiremill(128, 1, `3x ${mi}platinum_wire`, `${mi}platinum_ingot`,  'platinum_wire')
        MassiveWiremill(128, 1, `3x ${mi}silver_wire`, `${mi}silver_ingot`,  'silver_wire')
        MassiveWiremill(128, 1, `3x ${mi}superconductor_wire`, `${mi}superconductor_ingot`,  'superconductor_wire')
        MassiveWiremill(128, 1, `3x ${mi}tin_wire`, `${mi}tin_ingot`,  'tin_wire')

        massive_compressor(128, 30 * tickMultiplier)
            .itemIn(`8x coal_block`)
            .itemOut(`diamond`)
            .id(`kubejs:mi/massive_compressor/diamond_from_coal`)

        massive_compressor(128, 12 * tickMultiplier)
            .itemIn(`${mi}tungsten_tiny_dust`)
            .itemOut(`${mi}tungsten_nugget`)
            .id(`kubejs:mi/massive_compressor/tungsten_nugget`)

        massive_compressor(128, 3 * tickMultiplier)
            .itemIn(`2x ${mi}mixed_ingot_blastproof`)
            .itemOut(`${mi}blastproof_alloy_plate`)
            .id(`kubejs:mi/massive_compressor/blastproof_alloy_plate`)

        massive_compressor(128, 2 * tickMultiplier)
            .itemIn('4x ae2:fluix_crystal')
            .itemOut('ae2:fluix_block')
            .id(`kubejs:mi/massive_compressor/fluix_crystal_block`)

        compressor(2, 20 * tickMultiplier)
            .itemIn('4x ae2:fluix_crystal')
            .itemOut('ae2:fluix_block')
            .id(`kubejs:mi/compressor/fluix_crystal_block`)
                
       extruder(8, 10 * tickMultiplier)
            .itemIn('4x ae2:fluix_crystal')
            .itemIn('kubejs:block_mold', 0)
            .itemOut('ae2:fluix_block')
            .id(`kubejs:mi/extruder/fluix_crystal_block`)

        ImplosionCompressor(1, 0.5, 'tiab:time_in_a_bottle', 'time_in_a_bottle')
            .itemIn('artifacts:cloud_in_a_bottle')
            .itemIn(`16x ${mi}turbo_upgrade`)
            .itemIn(`8x ${mi}industrial_tnt`)

        ImplosionCompressor(1, 0.5, 'kubejs:nether_star_block', 'nether_star_block')
            .itemIn('9x nether_star')
            .itemIn(`${mi}industrial_tnt`)

        ImplosionCompressor(1, 0.5, 'kubejs:absorbing_laser_lens', 'absorbing_laser_lens')
            .itemIn('industrialforegoing:white_laser_lens')
            .itemIn('16x actuallyadditions:empowered_void_crystal_block')
            .itemIn(`8x ${mi}industrial_tnt`)

        IndustrialEmpowerer(256, 5, 'empowered_canola_seeds')
            .itemOut('actuallyadditions:empowered_canola_seed')
            .itemIn('actuallyadditions:crystallized_canola_seed')
            .itemIn('actuallyadditions:canola_seeds')
            .itemIn('actuallyadditions:canola_seeds')
            .itemIn('actuallyadditions:canola_seeds')
            .itemIn('actuallyadditions:canola_seeds')

        MatterCondensator(256, 150, 'uu_matter')
            .itemIn(`${mi}singularity`, 0.02)
            //.customCondition('damage_ingredient')
            .fluidOut(`1x ${mi}uu_matter`)

        // Assembler(8, 40, 'extended_industrialization:lv_photovoltaic_cell', 'lv_photovoltaic_cell_alt')
        //     .itemIn('enderio:photovoltaic_plate')
        //     .itemIn('4x kubejs:double_silver_plate')
        //     .fluidIn(`20x ${mi}synthetic_rubber`)

        // Assembler(8, 40, 'extended_industrialization:lv_photovoltaic_cell', 'lv_photovoltaic_cell')
        //     .itemIn('enderio:photovoltaic_plate')
        //     .itemIn('4x kubejs:double_silver_plate')
        //     .fluidIn(`4x ${mi}styrene_butadiene_rubber`)

        Assembler(32, 20, `${mi}cooling_cell`,'cooling_cell')
            .itemIn('6x enderio:conduit[enderio:conduit="enderio:ender_fluid"]')
            .itemIn(`2x ${mi}small_heat_exchanger`)
            .itemIn(`3x kubejs:osmium_plate`)
            .fluidIn(`1000x ${mi}cryofluid`)

        Assembler(8, 10, `compactcrafting:field_projector`,'field_projector')
            .itemIn(`compactcrafting:base`)
            .itemIn(`compactcrafting:projector_dish`)
            .fluidIn(`250x ${mi}soldering_alloy`)

        Assembler(64, 30, `actuallyadditions:ender_star`,'ender_star')
            .itemIn(`nether_star`)
            .itemIn(`netherite_ingot`)
            .itemIn(`${mi}iridium_dust`)
            .fluidIn('1000x kubejs:liquid_dragons_breath')

        Assembler(8, 10, `${mi}water_tower`,'water_tower')
            .itemIn(`4x ${mi}electronic_circuit`)
            .itemIn(`2x ${mi}large_pump`)
            .itemIn(`${mi}advanced_machine_hull`)
            .fluidIn('2000x water')

        Assembler(8, 10, `kubejs:lamp_of_growth`,'lamp_of_growth')
            .itemIn(`actuallyadditions:lamp_yellow`)
            .itemIn(`8x ${mi}neodymium_dust`)
            .fluidIn('extended_industrialization:composted_manure', 4000)

        Assembler(8, 10, `2x kubejs:iron_casing`,'iron_casing')
            .itemIn(`8x ${mi}iron_plate`)
            .itemIn(`${mi}iron_gear`)
            .fluidIn(`${mi}soldering_alloy`, 150)

        Assembler(8, 10, `2x kubejs:copper_casing`,'copper_casing')
            .itemIn(`8x ${mi}copper_plate`)
            .itemIn(`${mi}copper_gear`)
            .fluidIn(`${mi}soldering_alloy`, 150)

        Assembler(256, 100, `${mi}metamorphic_constructor`,'metamorphic_constructor')
            .itemIn(`${mi}highly_advanced_machine_hull`)
            .itemIn(`4x ${mi}processing_unit`)
            .itemIn(`4x ${mi}plutonium_battery`)
            .itemIn(`4x ${mi}assembler`)
            .itemIn(`8x kubejs:metamorphic_constructor_casing`)
            .fluidIn(`${mi}tritium`, 250)
            .fluidIn(`${mi}deuterium`, 250)

        Assembler(8, 10, 'ae2:wireless_crafting_terminal','wireless_crafting_terminal')
            .itemIn('ae2:wireless_terminal')
            .itemIn('craftingstation:crafting_station')
            .itemIn('kubejs:idea_processor')

        Assembler(8, 10, 'laserio:logic_chip', 'logic_chip')
            .itemIn('laserio:logic_chip_raw')
            .itemIn('16x kubejs:energetic_alloy_fine_wire')
            .fluidIn(`${mi}soldering_alloy`, 90)

        Assembler(8, 10, '2x cauldron', 'cauldron')
            .itemIn('cauldron')
            .itemIn(`7x ${mi}iron_plate`)

        Macerator(8, 10, 'cobbled_deepslate', 'cobbled_deepslate')
            .itemOut('cobblestone')
            .itemOut('enderio:grains_of_infinity', 0.1)

        Macerator(2, 80, 'kubejs:uraninite_ore', 'raw_uraninite')
            .itemOut('3x kubejs:raw_uraninite')

        Macerator(2, 10, 'wither_rose', 'withering_powder')
            .itemOut('enderio:withering_powder')

        Macerator(2, 10, 'wither_skeleton_skull', 'withering_powder_alt')
            .itemOut('2x enderio:withering_powder')
            .itemOut('enderio:withering_powder', 0.2)

        Macerator(2, 30, 'ae2:sky_stone_block', 'sky_dust')
            .itemOut('ae2:sky_dust')
            .itemOut('kubejs:meteorite_iron_chunks')

        Macerator(8, 20, 'netherite_scrap', 'netherite_scrap_chunks')
            .itemOut('4x kubejs:netherite_scrap_chunks')

        BlastFurnace(32, 30, 'cloggrum_steel')
            .itemOut(`kubejs:cloggrum_steel_ingot`)
            .itemIn(`undergarden:cloggrum_ingot`)
            .itemIn(`undergarden:ditchbulb_paste`)   

        BlastFurnace(32, 30, 'cloggrum_steel_alt')
            .itemOut(`kubejs:cloggrum_steel_ingot`)
            .itemIn(`kubejs:cloggrum_dust`)
            .itemIn(`undergarden:ditchbulb_paste`)  
            
        BlastFurnace(128, 75, 'monocrystalline_silicon')
            .itemOut(`${mi}monocrystalline_silicon`)
            .itemIn(`64x ${mi}silicon_dust`)
            .itemIn(`${mi}iridium_tiny_dust`)
            .fluidIn(`1250x ${mi}argon`)

        BlastFurnace(32, 10, 'meteorite_iron_ingot')
            .itemOut('kubejs:meteorite_iron_ingot')
            .itemIn(`kubejs:raw_meteorite_iron`)

        Assembler(8, 10, 'ae2:pattern_encoding_terminal', 'pattern_encoding_terminal')
            .itemIn('ae2:crafting_terminal')
            .itemIn('ae2:blank_pattern')
            .itemIn(`kubejs:molecular_processor`)
    
        Assembler(8, 10, 'ae2:annihilation_core', 'annihilation_core')
            .itemIn('kubejs:core_base')
            .itemIn('actuallyadditions:black_quartz')
            .fluidIn(`${mi}soldering_alloy`, 30)

        Assembler(8, 10, 'ae2:formation_core', 'formation_core')
            .itemIn('kubejs:core_base')
            .itemIn('#c:gems/certus_quartz')
            .fluidIn(`${mi}soldering_alloy`, 30)

        Assembler(8, 10, 'kubejs:core_base', 'core_base')
            .itemIn(`${mi}analog_circuit_board`)
            .itemIn('ae2:fluix_dust')
            .itemIn('ae2:logic_processor')

        Assembler(8, 10, 'ae2:crafting_terminal', 'crafting_terminal')
            .itemIn('ae2:terminal')
            .itemIn(`craftingstation:crafting_station`)
            .itemIn('kubejs:idea_processor')

        Assembler(8, 10, '4x ae2:fluix_glass_cable', 'me_cable')
            .itemIn('ae2:quartz_fiber')
            .itemIn('2x ae2:fluix_crystal')
            .fluidIn(`${mi}soldering_alloy`, 30)

        global.colors.forEach(color => {
            ChemicalBath(8, 5, `${color}_concrete`)
                .fluidIn('50x water')
                .itemIn(`${color}_concrete_powder`)
                .itemOut(`${color}_concrete`)
        });

        ChemicalBath(8,10, 'fluix_glass_cable')
            .itemIn('#ae2:glass_cable')
            .fluidIn(`${mi}chlorine`, 10)
            .itemOut(`ae2:fluix_glass_cable`)

        ChemicalBath(8,10, 'elevator_clean')
            .itemIn('#elevatorid:elevators')
            .fluidIn(`${mi}chlorine`, 50)
            .itemOut(`elevatorid:elevator_black`)

        Assembler(8, 10, 'elevatorid:elevator_black', 'elevator_black')
            .itemIn(`4x ${mi}steel_plate`)
            .itemIn(`2x kubejs:steel_small_gear`)
            .itemIn(`2x ${mi}motor`)
            .itemIn(`kubejs:steel_frame_box`)

        Assembler(8, 10, 'kubejs:steel_frame_box', 'steel_frame_box')
            .itemIn(`4x ${mi}steel_rod`)
            .fluidIn(`${mi}soldering_alloy`, 90)

        AssemblyLine(8192, 200, `industrialforegoing:mycelial_reactor`, 'mycelial_reactor')
            .itemIn(`kubejs:mycelial_frame`)
            .itemIn(`4x ${mi}quantum_machine_hull`)
            .itemIn(`${mi}nuclear_reactor`)
            .itemIn(`${mi}plasma_turbine`)
            .itemIn('4x kubejs:large_ultimate_motor')
            .itemIn(`32x ${mi}quantum_circuit`)
            .itemIn('16x kubejs:nether_star_block')
            .fluidIn(`${mi}uu_matter`, 1000)
            .fluidIn(`${mi}helium_plasma`, 3000)

        AssemblyLine(8192, 200, `kubejs:matter_handling_iridium_machine_casing`, 'matter_handling_iridium_machine_casing')
            .itemIn(`${mi}quantum_machine_hull`)
            .itemIn(`6x ${mi}quantum_circuit`)
            .itemIn('projecte:klein_star_omega')
            .fluidIn(`${mi}uu_matter`, 500)

        AssemblyLine(8192, 1000, `${mi}replicator`, 'replicator')
            .itemIn(`${mi}quantum_machine_hull`)
            .itemIn(`6x ${mi}quantum_upgrade`)
            .itemIn(`12x ${mi}quantum_circuit`)
            .itemIn('4x kubejs:large_ultimate_motor')
            .itemIn('4x kubejs:large_ultimate_pump')
            .itemIn('projecte:condenser_mk2')
            .fluidIn(`${mi}uu_matter`, 1000)

        AssemblyLine(8192, 60, `projecte:collector_mk3`, 'collector_mk3')
            .itemIn(`projecte:collector_mk2`)
            .itemIn(`${mi}quantum_machine_hull`)
            .itemIn(`4x kubejs:red_matter_casing`)
            .itemIn('2x kubejs:large_ultimate_motor')
            .itemIn(`2x ${mi}quantum_circuit`)
            .fluidIn(`${mi}uu_matter`, 80)

        AssemblyLine(8192, 100, `${mi}quantum_upgrade`, 'quantum_upgrade')
            .itemIn(`64x ${mi}highly_advanced_upgrade`)
            .itemIn(`12x ${mi}quantum_circuit`)
            .itemIn(`kubejs:activated_singularity`)
            .itemIn(`8x kubejs:blue_matter`)
            .itemIn(`${mi}quantum_circuit_board`)
            .fluidIn(`${mi}uu_matter`, 100)

        MetamorphicConstructor(1024, 100, 'transmutation_table')
            .itemOut(`projecte:transmutation_table`)
            .itemIn('projecte:condenser_mk1')
            .itemIn('modern_industrialization:transmutator')
            .itemIn('modern_industrialization:quantum_machine_hull')
            .itemIn('2x modern_industrialization:quantum_circuit')
            .itemIn(`8x kubejs:dark_matter_casing`)
            .fluidIn(`kubejs:aberration`, 200)

        MetamorphicConstructor(1024, 15, 'dark_matter')
            .itemOut(`projecte:dark_matter`)
            .itemIn(`8x projecte:aeternalis_fuel`)
            .itemIn(`actuallyadditions:empowered_diamatine_crystal_block`)
            .fluidIn(`kubejs:anomaly`, 30)

        MetamorphicConstructor(1024, 30, 'red_matter')
            .itemOut(`projecte:red_matter`)
            .itemIn(`6x projecte:aeternalis_fuel`)
            .itemIn(`3x projecte:dark_matter`)
            .fluidIn(`kubejs:aberration`, 30)

        MetamorphicConstructor(1024, 30, 'blue_matter')
            .itemOut(`kubejs:blue_matter`)
            .itemIn(`6x kubejs:perfectus_fuel`)
            .itemIn(`3x projecte:red_matter`)
            .fluidIn(`${mi}uu_matter`, 25)

        AssemblyLine(8192, 40, `javd:portal_block`, 'void_portal')
            .itemIn(`hyperbox:hyperbox`)
            .itemIn(`2x ${mi}quantum_circuit`)
            .itemIn(`8x projecte:dark_matter`)
            .itemIn(`16x kubejs:empowered_void_plate`)
            .fluidIn(`${mi}deuterium`, 250)
            .fluidIn(`${mi}tritium`, 250)
            .fluidIn(`${mi}liquid_air`, 64000)

        AssemblyLine(8192, 200, `${mi}quantum_installer`, 'quantum_installer')
            .itemIn(`${mi}quantum_upgrade`)
            .itemIn(`4x ${mi}quantum_circuit`)
            .itemIn(`${mi}quantum_machine_hull`)
            .itemIn(`4x kubejs:large_ultimate_motor`)
            .itemIn(`2x kubejs:ultimate_robot_arm`)
            .fluidIn(`${mi}helium_plasma`, 2500)
            .fluidIn(`${mi}uu_matter`, 500)

        AssemblyLine(8192, 100, `${mi}matter_condensator`, 'matter_condensator')
            .itemIn(`4x kubejs:dark_matter_casing`)
            .itemIn(`2x ${mi}quantum_circuit`)
            .itemIn(`${mi}quantum_machine_hull`)
            .itemIn(`2x kubejs:large_ultimate_pump`)
            .itemIn(`4x kubejs:iridium_rotor`)
            .fluidIn(`${mi}helium_plasma`, 2000)

        AssemblyLine(8192, 200, `${mi}plasma_turbine`, 'plasma_turbine')
            .itemIn(`4x ${mi}superconductor_coil`)
            .itemIn(`2x ${mi}quantum_circuit`)
            .itemIn(`${mi}quantum_machine_hull`)
            .itemIn(`2x kubejs:iridium_rotor`)
            .itemIn(`4x kubejs:large_ultimate_motor`)
            .fluidIn(`${mi}deuterium`, 1500)
            .fluidIn(`${mi}tritium`, 1500)

        AssemblyLine(8192, 20, `${mi}ultradense_metal_ball`, 'ultradense_metal_ball')
            .itemIn(`ae2:singularity`)
            .itemIn(`2x kubejs:iridium_gear`)
            .itemIn(`32x kubejs:tungstensteel_large_plate`)
            .itemIn(`32x kubejs:lead_large_plate`)
            .fluidIn(`${mi}soldering_alloy`, 10000)
            .fluidIn(`productivemetalworks:molten_netherite`, 2700)
            .fluidIn(`kubejs:aberration`, 3000)

        AssemblyLine(8192, 120, `${mi}fusion_reactor`, 'fusion_reactor')
            .itemIn(`12x ${mi}fusion_chamber`)
            .itemIn(`2x ${mi}quantum_machine_hull`)
            .itemIn(`4x ${mi}quantum_circuit`)
            .itemIn(`4x kubejs:large_ultimate_motor`)
            .itemIn(`2x kubejs:large_ultimate_pump`)
            .itemIn(`2x kubejs:ultimate_robot_arm`)
            .fluidIn(`${mi}deuterium`, 2000)
            .fluidIn(`${mi}tritium`, 2000)

        AssemblyLine(8192, 30, `${mi}fusion_chamber`, 'fusion_chamber')
            .itemIn(`4x ${mi}superconductor_coil`)
            .itemIn(`2x ${mi}large_heat_exchanger`)
            .itemIn(`2x kubejs:ultimate_motor`)
            .itemIn(`2x ${mi}nuclear_alloy_large_plate`)
            .itemIn(`${mi}plasma_handling_iridium_machine_casing`)
            .fluidIn(`${mi}deuterium`, 250)
            .fluidIn(`${mi}tritium`, 250)

        Assembler(8, 10, 'kubejs:ultimate_pump', 'ultimate_pump')
            .itemIn(`3x #${mi}fluid_pipes`)
            .itemIn(`3x kubejs:iridium_rotor`)
            .itemIn(`kubejs:ultimate_motor`)
            .fluidIn(`${mi}soldering_alloy`, 100)

        Assembler(8, 10, 'kubejs:large_ultimate_pump', 'large_ultimate_pump')
            .itemIn(`${mi}quantum_circuit`)
            .itemIn(`3x kubejs:iridium_rotor`)
            .itemIn(`kubejs:large_ultimate_motor`)
            .itemIn(`3x kubejs:ultimate_pump`)

        Assembler(32, 10, 'kubejs:tungstensteel_frame_box', 'tungstensteel_frame_box')
            .itemIn(`8x kubejs:tungstensteel_rod`)
            .fluidIn(`200x ${mi}polyvinyl_chloride`)

        Assembler(8, 10, 'kubejs:bricked_bronze_casing', 'bricked_bronze_casing')
            .itemIn(`5x ${mi}bronze_plate`)
            .itemIn(`${mi}bronze_gear`)
            .itemIn(`3x ${mi}fire_clay_bricks`)

        Assembler(8, 10, 'kubejs:advanced_robot_arm', 'advanced_robot_arm')
            .itemIn(`3x ${mi}annealed_copper_cable`)
            .itemIn(`2x ${mi}large_advanced_motor`)
            .itemIn(`2x kubejs:titanium_rod_magnetic`)
            .itemIn(`${mi}robot_arm`)
            .itemIn(`${mi}processing_unit`)

        Assembler(8, 10, `${mi}titanium_drill`, 'titanium_drill')
            .itemIn(`${mi}titanium_drill_head`)
            .itemIn(`2x kubejs:tungstensteel_gear`)
            .itemIn(`2x #${mi}item_pipes`)
            .itemIn(`2x ${mi}large_advanced_motor`)
            .itemIn(`${mi}annealed_copper_cable`)
            .itemIn(`${mi}processing_unit`)

        Packer(16, 20, 'mixed_ingot')
            .itemIn(`kubejs:tungstensteel_ingot`)
            .itemIn(`${mi}titanium_ingot`)
            .itemIn(`${mi}stainless_steel_ingot`)
            .itemOut(`${mi}mixed_ingot_blastproof`)

        BlastFurnace(192, 20, 'titanium_from_raw')
            .itemIn(`3x ${mi}raw_titanium`)
            .fluidIn(`${mi}manganese_sulfuric_solution`, 3000)
            .itemOut(`3x ${mi}titanium_hot_ingot`)
            .fluidOut(`${mi}manganese_sulfuric_solution`, 2500)

        BlastFurnace(192, 20, 'titanium')
            .itemIn(`${mi}titanium_dust`)
            .itemOut(`${mi}titanium_hot_ingot`)

        BlastFurnace(192, 30, 'platinum')
            .itemIn(`${mi}platinum_dust`)
            .itemOut(`${mi}platinum_hot_ingot`)

        BlastFurnace(256, 60, 'tungstensteel')
            .itemIn(`kubejs:tungstensteel_dust`)
            .itemOut(`kubejs:tungstensteel_hot_ingot`)

        BlastFurnace(128, 30, 'nichrome')
            .itemIn(`kubejs:nichrome_dust`)
            .itemOut(`kubejs:nichrome_hot_ingot`)

        AdvancedElectricQuarry(384, 40, 'uraninite')
            .dimension('overworld')
            .itemIn(`kubejs:tungstensteel_drill`, 0.04)
            .itemOut(`kubejs:raw_uraninite`, 0.2)

        AdvancedElectricQuarry(384, 40, 'iridium')
            .dimension('the_end')
            .itemIn(`kubejs:tungstensteel_drill`, 0.04)
            .itemOut(`${mi}raw_iridium`, 0.05)

        AdvancedElectricQuarry(384, 40, 'uranium_alt')
            .dimension('overworld')
            .itemIn(`kubejs:iridium_drill`, 0.03)
            .itemOut(`kubejs:uraninite_ore`, 0.25)

        AdvancedElectricQuarry(384, 40, 'iridium_alt')
            .dimension('the_end')
            .itemIn(`kubejs:iridium_drill`, 0.03)
            .itemOut(`kubejs:iridium_ore`, 0.07)

        AdvancedElectricQuarry(256, 10, 'titanium_tungsten')
            .dimension('the_end')
            .itemIn(`${mi}stainless_steel_drill`, 0.04)
            .itemOut(`${mi}raw_titanium`, 0.2)
            .itemOut(`${mi}raw_tungsten`, 0.25)

        AdvancedElectricQuarry(256, 10, 'platinum_monazite')
            .dimension('overworld')
            .itemIn(`${mi}stainless_steel_drill`, 0.04)
            .itemOut(`kubejs:raw_monazite`, 0.30)
            .itemOut(`${mi}raw_platinum`, 0.15)

        AdvancedElectricQuarry(256, 10, 'titanium_tungsten_alt')
            .dimension('the_end')
            .itemIn(`${mi}titanium_drill`, 0.04)
            .itemOut(`kubejs:titanium_ore`, 0.2)
            .itemOut(`kubejs:tungsten_ore`, 0.25)

        AdvancedElectricQuarry(256, 10, 'platinum_monazite_alt')
            .dimension('overworld')
            .itemIn(`${mi}titanium_drill`, 0.04)
            .itemOut(`${mi}monazite_ore`, 0.30)
            .itemOut(`${mi}platinum_ore`, 0.15)       

        Quarry(32, 30, 'titanium_tungsten')
            .dimension('the_end')
            .itemIn(`${mi}stainless_steel_drill`, 0.04)
            .itemOut(`${mi}raw_titanium`, 0.15)
            .itemOut(`${mi}raw_tungsten`, 0.2)

        Quarry(32, 30, 'platinum_monazite')
            .dimension('overworld')
            .itemIn(`${mi}stainless_steel_drill`, 0.04)
            .itemOut(`kubejs:raw_monazite`, 0.25)
            .itemOut(`${mi}raw_platinum`, 0.12)

        Quarry(64, 30, 'titanium_tungsten_alt')
            .dimension('the_end')
            .itemIn(`${mi}titanium_drill`, 0.04)
            .itemOut(`kubejs:titanium_ore`, 0.15)
            .itemOut(`kubejs:tungsten_ore`, 0.2)

        Quarry(64, 30, 'platinum_monazite_alt')
            .dimension('overworld')
            .itemIn(`${mi}titanium_drill`, 0.04)
            .itemOut(`${mi}monazite_ore`, 0.25)
            .itemOut(`${mi}platinum_ore`, 0.12)

        Assembler(64, 30, `${mi}qubit`,'qubit')
            .itemIn('kubejs:mysterious_chunk')
            .itemIn(`4x ${mi}arithmetic_logic_unit`)
            .itemIn(`2x ${mi}carbon_plate`)
            .itemIn(`6x ${mi}superconductor_wire`)
            .itemIn(`6x ${mi}osmium_cable`)
            .itemIn('2x enderio:weather_crystal')
            .fluidIn(`${mi}cryofluid`, 250)
            .fluidIn(`${mi}tritium`, 50)

        Assembler(32, 80, `${mi}processing_unit_board`, 'processing_unit_board')
            .itemIn(`8x ${mi}annealed_copper_cable`)
            .itemIn(`2x ${mi}cadmium_battery`)
            .itemIn(`kubejs:epoxy_resin_board`)
            .itemIn(`8x ${mi}platinum_plate`)
            .fluidIn(`1500x ${mi}polyvinyl_chloride`)

        Assembler(16, 20, 'kubejs:epoxy_resin_board', 'epoxy_resin_board')
            .itemIn(`${mi}digital_circuit_board`)
            .itemIn(`4x kubejs:epoxy_resin_sheet`)
            .fluidIn(`750x kubejs:molten_tin`)
            .fluidIn(`1000x kubejs:molten_plastic`)

        VacuumFreezer(64, 15, 'epoxy_resin_sheet')
            .fluidIn(`kubejs:epoxy_resin`, 125)
            .itemIn('paper')
            .itemOut(`kubejs:epoxy_resin_sheet`)

        DistillationTower(64, 30, [`kubejs:diluted_hydrochloric_acid`, 2000], 'diluted_hydrochloric_acid')
            .fluidOut('water',1000)
            .fluidOut(`${mi}hydrochloric_acid`, 1000)

        Distillery(16, 5, [`${mi}hydrochloric_acid`, 40], [`kubejs:diluted_hydrochloric_acid`, 80], 'diluted_hydrochloric_acid')

        // Electrolyzer(32, 10, 'uranium_235_dust')
        //     .fluidIn(`1000x kubejs:enriched_uranium_hexafluoride`)
        //     .itemOut(`${mi}uranium_235_dust`)
        //     .fluidOut('6000x kubejs:fluorine')

        Electrolyzer(32, 10, 'uranium_dust')
            .fluidIn(`1000x kubejs:uranium_hexafluoride`)
            .itemOut(`${mi}uranium_dust`)
            .fluidOut('6000x kubejs:fluorine')

        LargeChemicalReactor(32, 20, 'biofuel')
            .itemIn(`projecte:alchemical_coal`)
            .fluidIn(`1000x ${mi}biodiesel`)
            .fluidOut(`2000x industrialforegoing:biofuel`)

        LargeChemicalReactor(64, 10, 'liquid_dragons_breath')
            .itemIn(`dragon_head`, 0.01)
            .fluidIn(`100x kubejs:liquid_end_air`)
            .fluidOut(`100x kubejs:liquid_dragons_breath`)

        LargeChemicalReactor(40, 10, 'uranium_hexafluoride')
            .itemIn(`kubejs:uraninite_dust`)
            .fluidIn(`4000x kubejs:hydrofluoric_acid`)
            .fluidIn(`2000x kubejs:fluorine`)
            .fluidOut(`1000x kubejs:uranium_hexafluoride`)
            .fluidOut(`2000x water`)

        LargeChemicalReactor(128, 120, 'anomaly')
            .fluidOut(`kubejs:anomaly`, 10)
            .itemIn('kubejs:mysterious_chunk')
            .itemIn(`${mi}uranium_235_tiny_dust`)
            .itemIn(`${mi}iridium_tiny_dust`)
            .fluidIn(`kubejs:bedrock_substance`,25)
            .fluidIn(`${mi}tritium`,125)
            .fluidIn(`${mi}deuterium`,125)

        LargeChemicalReactor(24, 20, 'ram')
            .itemOut(`2x ${mi}random_access_memory`)
            .itemIn(`${mi}silicon_wafer`)
            .itemIn('enderio:pulsating_powder')
            .itemIn('enderio:vibrant_powder')
            .fluidIn(`${mi}argon`,250)
            .fluidIn(`${mi}styrene_butadiene_rubber`,500)

        LargeChemicalReactor(40, 40, 'epoxy_resin')
            .itemIn(`3x ${mi}sodium_dust`)
            .fluidIn(`1000x kubejs:bisphenol_a`)
            .fluidIn(`1000x kubejs:epichlorohydrin`)
            .fluidOut(`1000x kubejs:epoxy_resin`)
            .fluidOut(`1000x water`)

        LargeChemicalReactor(40, 16, 'epichlorohydrin')
            .itemIn(`3x ${mi}sodium_dust`)
            .fluidIn('1000x water')
            .fluidIn(`1000x ${mi}propene`)
            .fluidIn(`4000x ${mi}chlorine`)
            .fluidOut(`1000x kubejs:epichlorohydrin`)
            .fluidOut(`2000x ${mi}hydrochloric_acid`)
            .fluidOut(`500x water`)

        LargeChemicalReactor(60, 20, 'bisphenol_a')
            .fluidIn(`2000x kubejs:phenol`)
            .fluidIn(`1000x kubejs:acetone`)
            .fluidIn(`1000x ${mi}hydrochloric_acid`)
            .fluidOut(`1000x kubejs:bisphenol_a`)
            .fluidOut(`1000x kubejs:diluted_hydrochloric_acid`)

        LargeChemicalReactor(40, 16, 'phenol')
            .fluidIn(`1000x kubejs:cumene`)
            .fluidIn(`2000x ${mi}oxygen`)
            .fluidOut(`1000x kubejs:phenol`)
            .fluidOut(`1000x kubejs:acetone`)

        LargeChemicalReactor(40, 24, 'cumene')
            .fluidIn(`${mi}propene`, 8000)
            .fluidIn(`${mi}benzene`, 8000)
            .fluidIn(`kubejs:phosphoric_acid`, 1000)
            .fluidOut(`kubejs:cumene`, 8000)

        LargeChemicalReactor(60, 16, 'phosphoric_acid')
            .itemIn(`3x ${mi}diamond_dust`)
            .fluidIn(`water`, 10000)
            .fluidIn(`${mi}sulfuric_acid`, 5000)
            .fluidOut(`${mi}hydrochloric_acid`, 1000)
            .fluidOut(`kubejs:phosphoric_acid`, 3000)

        LargeChemicalReactor(32, 30, 'osmium_dust')
            .fluidIn(`kubejs:osmium_tetroxide`, 5000)
            .fluidIn(`${mi}hydrogen`,8000)
            .itemOut(`kubejs:osmium_dust`)
            .fluidOut('water',4000)

        DistillationTower(40, 20, [`kubejs:osmium_acid`, 2700], 'osmium_tetroxide')
            .fluidOut(`kubejs:osmium_tetroxide`, 5000)
            .fluidOut(`${mi}hydrochloric_acid`, 1000)
            .fluidOut('water', 1000)

        Quarry(4, 30,'bronze')
            .dimension('overworld')
            .itemIn(`${mi}bronze_drill`, 0.04)
            .itemOut(`raw_iron`, 0.4)
            .itemOut(`kubejs:raw_coal`,0.4)
            .itemOut(`kubejs:raw_lignite_coal`,0.24)
            .itemOut(`raw_copper`,0.2)
            .itemOut(`${mi}raw_tin`,0.3)
            .itemOut(`raw_gold`,0.15)
            .itemOut(`kubejs:raw_redstone`,0.2)
            .itemOut(`kubejs:raw_black_quartz`, 0.25)

        Quarry(4, 30,'copper')
            .dimension('overworld')
            .itemIn(`${mi}copper_drill`, 0.1)
            .itemOut(`32x cobblestone`, 0.5)
            .itemOut(`16x diorite`,0.25)
            .itemOut(`16x andesite`,0.25)
            .itemOut(`16x granite`,0.25)
            .itemOut(`10x dirt`,0.5)
            .itemOut(`10x gravel`,0.5)
            .itemOut(`16x cobbled_deepslate`,0.25)
            .itemOut(`16x tuff`,0.25)

        Quarry(8, 30,'cloggrum')
            .dimension('overworld')
            .itemIn(`kubejs:cloggrum_drill`, 0.04)
            .itemOut(`iron_ore`, 0.4)
            .itemOut(`coal_ore`,0.4)
            .itemOut(`${mi}lignite_coal_ore`,0.24)
            .itemOut(`copper_ore`,0.2)
            .itemOut(`${mi}tin_ore`,0.3)
            .itemOut(`gold_ore`,0.15)
            .itemOut(`redstone_ore`,0.2)
            .itemOut(`actuallyadditions:black_quartz_ore`, 0.25)

        Quarry(24, 30, 'froststeel')
            .dimension('overworld')
            .itemIn(`kubejs:froststeel_drill`, 0.04)
            .itemOut(`${mi}antimony_ore`, 0.2)
            .itemOut(`diamond_ore`, 0.12)
            .itemOut(`lapis_ore`, 0.1)
            .itemOut(`${mi}lead_ore`, 0.25)
            .itemOut(`${mi}nickel_ore`,0.18)
            .itemOut(`${mi}bauxite_ore`,0.4)
            .itemOut(`${mi}salt_ore`, 0.12)
            .itemOut('emerald_ore',0.1)

        Quarry(12, 30, 'steel')
            .dimension('overworld')
            .itemIn(`${mi}steel_drill`, 0.04)
            .itemOut(`${mi}raw_antimony`, 0.2)
            .itemOut(`kubejs:raw_diamond`, 0.12)
            .itemOut(`kubejs:raw_lapis`, 0.1)
            .itemOut(`${mi}raw_lead`, 0.25)
            .itemOut(`${mi}raw_nickel`,0.18)
            .itemOut(`kubejs:raw_bauxite`,0.4)
            .itemOut(`kubejs:raw_salt`, 0.12)
            .itemOut(`kubejs:raw_emerald`,0.1)
            .itemOut(`kubejs:raw_quartz`,0.15)

        Quarry(24, 30, 'froststeel_undergarden')
            .dimension('undergarden:undergarden')
            .itemIn(`kubejs:froststeel_drill`, 0.04)
            .itemOut('undergarden:shiverstone_cloggrum_ore', 0.3)
            .itemOut('undergarden:shiverstone_froststeel_ore', 0.2)

        Quarry(12, 30, 'steel_undergarden')
            .dimension('undergarden:undergarden')
            .itemIn(`${mi}steel_drill`, 0.04)
            .itemOut('undergarden:raw_cloggrum', 0.3)
            .itemOut('undergarden:raw_froststeel', 0.2)

        Quarry(12, 30, 'gold')
            .dimension('minecraft:the_nether')
            .itemIn(`${mi}gold_drill`, 0.12)
            .itemOut('32x netherrack', 0.5)
            .itemOut('16x blackstone', 0.25)
            .itemOut('16x basalt', 0.25)
            .itemOut('20x soul_soil', 0.1)
            .itemOut('5x magma_block', 0.1)
            .itemOut('20x soul_sand', 0.25)
            .itemOut('ancient_debris', 0.04)
            .itemOut('4x glowstone', 0.15)
            .itemOut('6x kubejs:raw_quartz', 0.15)
            .itemOut('raw_gold', 0.25)
            .itemOut('3x kubejs:raw_sulfur', 0.15)

        AdvancedElectricQuarry(256, 2.5,'bronze')
            .dimension('overworld')
            .itemIn(`${mi}bronze_drill`, 0.04)
            .itemOut(`raw_iron`, 0.4)
            .itemOut(`kubejs:raw_coal`,0.4)
            .itemOut(`kubejs:raw_lignite_coal`,0.24)
            .itemOut(`raw_copper`,0.2)
            .itemOut(`${mi}raw_tin`,0.3)
            .itemOut(`raw_gold`,0.15)
            .itemOut(`kubejs:raw_redstone`,0.2)
            .itemOut(`kubejs:raw_black_quartz`, 0.25)

        AdvancedElectricQuarry(256, 2.5,'copper')
            .dimension('overworld')
            .itemIn(`${mi}copper_drill`, 0.1)
            .itemOut(`32x cobblestone`, 0.5)
            .itemOut(`16x diorite`,0.25)
            .itemOut(`16x andesite`,0.25)
            .itemOut(`16x granite`,0.25)
            .itemOut(`10x dirt`,0.5)
            .itemOut(`10x gravel`,0.5)
            .itemOut(`16x cobbled_deepslate`,0.25)
            .itemOut(`16x tuff`,0.25)

        AdvancedElectricQuarry(256, 5,'cloggrum')
            .dimension('overworld')
            .itemIn(`kubejs:cloggrum_drill`, 0.04)
            .itemOut(`iron_ore`, 0.4)
            .itemOut(`coal_ore`,0.4)
            .itemOut(`${mi}lignite_coal_ore`,0.24)
            .itemOut(`copper_ore`,0.2)
            .itemOut(`${mi}tin_ore`,0.3)
            .itemOut(`gold_ore`,0.15)
            .itemOut(`redstone_ore`,0.2)
            .itemOut(`actuallyadditions:black_quartz_ore`, 0.25)

        AdvancedElectricQuarry(256, 5, 'froststeel')
            .dimension('overworld')
            .itemIn(`kubejs:froststeel_drill`, 0.04)
            .itemOut(`${mi}antimony_ore`, 0.2)
            .itemOut(`diamond_ore`, 0.12)
            .itemOut(`lapis_ore`, 0.1)
            .itemOut(`${mi}lead_ore`, 0.25)
            .itemOut(`${mi}nickel_ore`,0.18)
            .itemOut(`${mi}bauxite_ore`,0.4)
            .itemOut(`${mi}salt_ore`, 0.12)
            .itemOut('emerald_ore',0.1)

        AdvancedElectricQuarry(256, 5, 'steel')
            .dimension('overworld')
            .itemIn(`${mi}steel_drill`, 0.04)
            .itemOut(`${mi}raw_antimony`, 0.2)
            .itemOut(`kubejs:raw_diamond`, 0.12)
            .itemOut(`kubejs:raw_lapis`, 0.1)
            .itemOut(`${mi}raw_lead`, 0.25)
            .itemOut(`${mi}raw_nickel`,0.18)
            .itemOut(`kubejs:raw_bauxite`,0.4)
            .itemOut(`kubejs:raw_salt`, 0.12)
            .itemOut(`kubejs:raw_emerald`,0.1)
            .itemOut(`kubejs:raw_quartz`,0.2)

        AdvancedElectricQuarry(256, 5, 'froststeel_undergarden')
            .dimension('undergarden:undergarden')
            .itemIn(`kubejs:froststeel_drill`, 0.04)
            .itemOut('undergarden:shiverstone_cloggrum_ore', 0.3)
            .itemOut('undergarden:shiverstone_froststeel_ore', 0.2)

        AdvancedElectricQuarry(256, 5, 'steel_undergarden')
            .dimension('undergarden:undergarden')
            .itemIn(`${mi}steel_drill`, 0.04)
            .itemOut('undergarden:raw_cloggrum', 0.3)
            .itemOut('undergarden:raw_froststeel', 0.2)

        AdvancedElectricQuarry(256, 5, 'gold')
            .dimension('minecraft:the_nether')
            .itemIn(`${mi}gold_drill`, 0.12)
            .itemOut('32x netherrack', 0.5)
            .itemOut('16x blackstone', 0.25)
            .itemOut('16x basalt', 0.25)
            .itemOut('20x soul_soil', 0.1)
            .itemOut('5x magma_block', 0.1)
            .itemOut('20x soul_sand', 0.25)
            .itemOut('ancient_debris', 0.04)
            .itemOut('4x glowstone', 0.15)
            .itemOut('6x kubejs:raw_quartz', 0.15)
            .itemOut('raw_gold', 0.25)
            .itemOut('3x kubejs:raw_sulfur', 0.15)

        Packer(2, 5, 'gr_of_pi')
            .itemIn(`9x kubejs:tiny_grains_of_piezallity`)
            .itemOut('enderio:pulsating_powder')

        Unpacker(2, 5, 'gr_of_pi')
            .itemOut(`9x kubejs:tiny_grains_of_piezallity`)
            .itemIn('enderio:pulsating_powder')

        LargeChemicalReactor(24, 17.5, 'polyvinyl_chloride')
            .itemIn(`${mi}chromium_tiny_dust`)
            //.itemIn(`kubejs:tiny_grains_of_piezallity`)
            .fluidIn(`${mi}vinyl_chloride`, 500)
            .fluidOut(`${mi}polyvinyl_chloride`, 700)

        LargeChemicalReactor(32, 12.5, 'vinyl_chloride')
            .fluidIn(`${mi}acetylene`, 1000)
            .fluidIn(`${mi}hydrochloric_acid`, 1000)
            .fluidOut(`${mi}vinyl_chloride`, 1000)

        Electrolyzer(32, 30, 'fluorine')
            .itemIn(`12x ${mi}ruby_dust`)
            .itemOut(`3x ${mi}aluminum_dust`)
            .itemOut(`${mi}silicon_dust`)
            .fluidOut(`${mi}hydrogen`, 2000)
            .fluidOut(`${mi}oxygen`, 6000)
            .fluidOut(`kubejs:fluorine`, 2000)

        Electrolyzer(16, 15, 'tungsten_dust')
            .itemIn(`kubejs:tungsten_acid`)
            .itemOut(`${mi}tungsten_dust`)
            .fluidOut(`${mi}hydrogen`, 2000)
            .fluidOut(`${mi}oxygen`, 4000)

        Centrifuge(8, 10, 'treated_leather')
            .itemIn(`kubejs:raw_treated_leather`)
            .itemOut(`kubejs:treated_leather`)
            .fluidOut('200x water')

        Centrifuge(16, 20, 'tungsten_acid')
            .itemIn(`kubejs:raw_tungsten_dust`)
            .fluidIn(`${mi}hydrochloric_acid`, 2000)
            .itemOut(`kubejs:tungsten_acid`)

        Macerator(8, 10, `${mi}raw_tungsten`, 'raw_tungsten_dust')
            .itemOut(`kubejs:raw_tungsten_dust`)

        Centrifuge(8, 60, 'purified_platinum_sulfuric_solution')
            .fluidIn(`${mi}platinum_sulfuric_solution`, 1000)
            .fluidOut(`${mi}purified_platinum_sulfuric_solution`, 1000)
            .itemOut(`kubejs:raw_iridium_tiny_dust`, 0.05)

        Macerator(8, 30, `kubejs:raw_uraninite`, 'uraninite_dust')
            .itemOut(`kubejs:uraninite_dust`)

        Macerator(8, 30, `${mi}raw_iridium`, 'raw_iridium_dust')
            .itemOut(`kubejs:raw_iridium_dust`)

        LargeChemicalReactor(32, 10, 'iridium_dust')
            .itemIn(`kubejs:iridium_chloride_dust`)
            .fluidIn(`${mi}hydrogen`, 3600)
            .itemOut(`${mi}iridium_dust`)
            .fluidOut(`${mi}hydrochloric_acid`, 3600)

        LargeChemicalReactor(32, 10, 'tiny_iridium_dust')
            .itemIn(`kubejs:iridium_chloride_tiny_dust`)
            .fluidIn(`${mi}hydrogen`, 400)
            .itemOut(`${mi}iridium_tiny_dust`)
            .fluidOut(`${mi}hydrochloric_acid`, 400)

        Centrifuge(16, 10, 'iridium_chloride')
            .itemIn(`kubejs:iridium_metal_residue_dust`)
            .itemOut(`kubejs:iridium_chloride_dust`)
            .itemOut(`${mi}platinum_dust`, 0.5)

        Centrifuge(16, 10, 'tiny_iridium_chloride')
            .itemIn(`kubejs:iridium_metal_residue_tiny_dust`)
            .itemOut(`kubejs:iridium_chloride_tiny_dust`)
            .itemOut(`${mi}platinum_tiny_dust`, 0.5)

        LargeChemicalReactor(32, 10, 'iridium_residue')
            .itemIn(`kubejs:raw_iridium_dust`)
            .fluidIn(`${mi}hydrochloric_acid`, 3600)
            .itemOut(`kubejs:iridium_metal_residue_dust`)
            .fluidOut(`kubejs:osmium_acid`, 2700)

        LargeChemicalReactor(32, 10, 'tiny_iridium_residue')
            .itemIn(`kubejs:raw_iridium_tiny_dust`)
            .fluidIn(`${mi}hydrochloric_acid`, 400)
            .itemOut(`kubejs:iridium_metal_residue_tiny_dust`)
            .fluidOut(`kubejs:osmium_acid`, 300)

        ChemicalReactor(32, 10, 'iridium_residue')
            .itemIn(`kubejs:raw_iridium_dust`)
            .fluidIn(`${mi}hydrochloric_acid`, 3600)
            .itemOut(`kubejs:iridium_metal_residue_dust`)
            .fluidOut(`kubejs:osmium_acid`, 2700)

        ChemicalReactor(32, 10, 'tiny_iridium_residue')
            .itemIn(`kubejs:raw_iridium_tiny_dust`)
            .fluidIn(`${mi}hydrochloric_acid`, 400)
            .itemOut(`kubejs:iridium_metal_residue_tiny_dust`)
            .fluidOut(`kubejs:osmium_acid`, 300)

        Packer(2, 5, 'tool_rod')
            .itemIn('2x stick')
            .itemOut('kubejs:tool_rod')

        Packer(2, 5, 'bucket')
            .itemIn(`3x kubejs:iron_curved_plate`)
            .itemOut('bucket')

        Packer(2, 5, 'bucket_alt')
            .itemIn(`3x ${mi}steel_curved_plate`)
            .itemOut('2x bucket')

        ChemicalReactor(8, 20, 'p_doped_silicon')
            .itemIn(`${mi}silicon_plate`)
            .itemIn(`kubejs:energetic_alloy_tiny_dust`)
            .itemOut(`${mi}silicon_p_doped_plate`)

        ChemicalReactor(8, 20, 'n_doped_silicon')
            .itemIn(`${mi}silicon_plate`)
            .itemIn(`kubejs:pulsating_alloy_tiny_dust`)
            .itemOut(`${mi}silicon_n_doped_plate`)

        LargeChemicalReactor(16, 10, 'p_doped_silicon')
            .itemIn(`${mi}silicon_plate`)
            .itemIn(`kubejs:energetic_alloy_tiny_dust`)
            .itemOut(`${mi}silicon_p_doped_plate`)

        LargeChemicalReactor(16, 10, 'n_doped_silicon')
            .itemIn(`${mi}silicon_plate`)
            .itemIn(`kubejs:pulsating_alloy_tiny_dust`)
            .itemOut(`${mi}silicon_n_doped_plate`)

        LargeChemicalReactor(24, 25, 'unrefined_boosted_diesel')
            .fluidIn(`${mi}biodiesel`, 2000)
            .fluidIn(`${mi}diethyl_ether`,250)
            .fluidOut('kubejs:unrefined_boosted_diesel', 1500)

        LargeChemicalReactor(24, 15, 'unrefined_boosted_diesel_alt')
            .fluidIn(`${mi}diesel`, 1000)
            .fluidIn(`${mi}diethyl_ether`,250)
            .fluidOut('kubejs:unrefined_boosted_diesel', 1200)

        DistillationTower(40, 10, ['kubejs:unrefined_boosted_diesel', 1000], 'boosted_diesel')
            .fluidOut(`${mi}boosted_diesel`, 1000)

        OilDrillingRig(48, 10, [`${mi}shale_oil`,2000], ['kubejs:soularium_drill', 0.05], 'shale_oil')

        // Pressurizer(32, 10, 'liquid_air')
        //     .fluidIn('kubejs:air', 1000)
        //     .fluidOut(`${mi}liquid_air`, 1000)

        VacuumFreezer(32, 10, 'liquid_air')
            .fluidIn('kubejs:air', 1000)
            .fluidOut(`${mi}liquid_air`, 1000)

        VacuumFreezer(128, 30, 'end_liquid_air')
            .fluidIn('kubejs:end_air', 1000)
            .fluidOut(`kubejs:liquid_end_air`, 1000)

        GasCollector(256, 30, ['kubejs:end_air', 100],`${mi}air_intake`, 'end_air').dimension('the_end')   
        GasCollector(16, 10, ['kubejs:air', 1000],`${mi}air_intake`, 'air').dimension('overworld')

        Distillery(15, 10, ['actuallyadditions:refined_canola_oil', 1000], ['actuallyadditions:canola_oil', 1000], 'refined_canola_oil')

        ChemicalReactor(24, 60, 'ender_eye')
            .itemIn('ender_pearl')
            .fluidIn('productivemetalworks:molten_blaze', 250)
            .itemOut('ender_eye')

        LargeChemicalReactor(48, 30, 'ender_eye')
            .itemIn('ender_pearl')
            .fluidIn('productivemetalworks:molten_blaze', 250)
            .itemOut('ender_eye')

        ChemicalReactor(24, 20, 'empowered_pink_slime')
            .itemIn('industrialforegoing:pink_slime')
            .fluidIn('actuallyadditions:empowered_oil', 250)
            .itemOut('kubejs:empowered_pink_slime')

        ChemicalReactor(24, 20, 'empowered_pink_slime_ingot')
            .itemIn('industrialforegoing:pink_slime_ingot')
            .fluidIn('actuallyadditions:empowered_oil', 500)
            .itemOut('kubejs:empowered_pink_slime_ingot')

        ChemicalReactor(8, 10, 'crystallized_oil')
            .itemIn('actuallyadditions:crystallized_canola_seed')
            .fluidIn('actuallyadditions:refined_canola_oil', 1000)
            .fluidOut('actuallyadditions:crystallized_oil', 1000)

        ChemicalReactor(8, 10, 'empowered_oil')
            .itemIn('actuallyadditions:empowered_canola_seed')
            .fluidIn('actuallyadditions:crystallized_oil', 1000)
            .fluidOut('actuallyadditions:empowered_oil', 1000)

        ChemicalReactor(24, 15, 'chloroform')
            .fluidIn(`${mi}chlorine`, 6000)
            .fluidIn(`${mi}methane`, 1000)
            .fluidOut(`${mi}hydrochloric_acid`, 3000)
            .fluidOut(`kubejs:chloroform`, 1000)

        ChemicalReactor(24, 10, 'hydrofluoric_acid')
            .fluidIn(`${mi}hydrogen`, 1000)
            .fluidIn(`kubejs:fluorine`, 1000)
            .fluidOut(`kubejs:hydrofluoric_acid`, 1000)

        ChemicalReactor(32, 30, 'tetrafluoroethylene')
            .fluidIn(`kubejs:chloroform`, 2000)
            .fluidIn(`kubejs:hydrofluoric_acid`, 4000)
            .fluidOut(`${mi}hydrochloric_acid`, 6000)
            .fluidOut(`kubejs:tetrafluoroethylene`, 1000)

        ChemicalReactor(32, 30, 'polytetrafluoroethylene')
            .fluidIn(`kubejs:tetrafluoroethylene`, 144)
            .fluidIn(`${mi}oxygen`, 1000)
            .fluidOut(`kubejs:polytetrafluoroethylene`, 216)

        ChemicalReactor(32, 30, 'polytetrafluoroethylene_alt')
            .fluidIn(`kubejs:tetrafluoroethylene`, 144)
            .fluidIn(`kubejs:air`, 1000)
            .fluidOut(`kubejs:polytetrafluoroethylene`, 144)

        LargeChemicalReactor(48, 10, 'empowered_pink_slime')
            .itemIn('industrialforegoing:pink_slime')
            .fluidIn('actuallyadditions:empowered_oil', 250)
            .itemOut('kubejs:empowered_pink_slime')

        LargeChemicalReactor(48, 10, 'empowered_pink_slime_ingot')
            .itemIn('industrialforegoing:pink_slime_ingot')
            .fluidIn('actuallyadditions:empowered_oil', 500)
            .itemOut('kubejs:empowered_pink_slime_ingot')

        LargeChemicalReactor(16, 5, 'crystallized_oil')
            .itemIn('actuallyadditions:crystallized_canola_seed')
            .fluidIn('actuallyadditions:refined_canola_oil', 1000)
            .fluidOut('actuallyadditions:crystallized_oil', 1000)

        LargeChemicalReactor(16, 5, 'empowered_oil')
            .itemIn('actuallyadditions:empowered_canola_seed')
            .fluidIn('actuallyadditions:crystallized_oil', 1000)
            .fluidOut('actuallyadditions:empowered_oil', 1000)

        LargeChemicalReactor(48, 7.5, 'chloroform')
            .fluidIn(`${mi}chlorine`, 6000)
            .fluidIn(`${mi}methane`, 1000)
            .fluidOut(`${mi}hydrochloric_acid`, 3000)
            .fluidOut(`kubejs:chloroform`, 1000)

        LargeChemicalReactor(48, 5, 'hydrofluoric_acid')
            .fluidIn(`${mi}hydrogen`, 1000)
            .fluidIn(`kubejs:fluorine`, 1000)
            .fluidOut(`kubejs:hydrofluoric_acid`, 1000)

        LargeChemicalReactor(64, 15, 'tetrafluoroethylene')
            .fluidIn(`kubejs:chloroform`, 2000)
            .fluidIn(`kubejs:hydrofluoric_acid`, 4000)
            .fluidOut(`${mi}hydrochloric_acid`, 6000)
            .fluidOut(`kubejs:tetrafluoroethylene`, 1000)

        LargeChemicalReactor(64, 15, 'polytetrafluoroethylene')
            .fluidIn(`kubejs:tetrafluoroethylene`, 144)
            .fluidIn(`${mi}oxygen`, 1000)
            .fluidOut(`kubejs:polytetrafluoroethylene`, 216)

        LargeChemicalReactor(64, 15, 'polytetrafluoroethylene_alt')
            .fluidIn(`kubejs:tetrafluoroethylene`, 144)
            .fluidIn(`kubejs:air`, 1000)
            .fluidOut(`kubejs:polytetrafluoroethylene`, 144)

        Inscriber(8, 10, 'megacells:printed_accumulation_processor', 'printed_accumulation_processor')
            .itemIn('megacells:accumulation_processor_press', 0)
            .itemIn('megacells:sky_steel_ingot')

        Inscriber(8, 10, 'ae2:printed_calculation_processor', 'printed_calculation_processor')
            .itemIn('ae2:calculation_processor_press', 0)
            .itemIn('ae2:certus_quartz_crystal')
        
        Inscriber(8, 10, 'ae2:printed_logic_processor', 'printed_logic_processor')
            .itemIn('ae2:logic_processor_press', 0)
            .itemIn(`${mi}gold_double_ingot`)

        Inscriber(8, 10, 'ae2:printed_engineering_processor', 'printed_engineering_processor')
            .itemIn('ae2:engineering_processor_press', 0)
            .itemIn('actuallyadditions:diamatine_crystal')

        Inscriber(8, 10, 'ae2:printed_silicon', 'printed_silicon')
            .itemIn('ae2:silicon_press', 0)
            .itemIn(`${mi}silicon_double_ingot`)

        Inscriber(8, 10, 'extendedae:concurrent_processor_print', 'concurrent_processor_print')
            .itemIn('extendedae:concurrent_processor_press', 0)
            .itemIn(`extendedae:entro_crystal`)

        Inscriber(8, 10, 'megacells:accumulation_processor_press', 'accumulation_processor_press')
            .itemIn('megacells:accumulation_processor_press', 0)
            .itemIn(`${mi}steel_block`)

        Inscriber(8, 10, 'ae2:calculation_processor_press', 'calculation_processor_press')
            .itemIn('ae2:calculation_processor_press', 0)
            .itemIn(`${mi}steel_block`)
        
        Inscriber(8, 10, 'ae2:logic_processor_press', 'logic_processor_press')
            .itemIn('ae2:logic_processor_press', 0)
            .itemIn(`${mi}steel_block`)

        Inscriber(8, 10, 'ae2:engineering_processor_press', 'engineering_processor_press')
            .itemIn('ae2:engineering_processor_press', 0)
            .itemIn(`${mi}steel_block`)

        Inscriber(8, 10, 'ae2:silicon_press', 'silicon_press')
            .itemIn('ae2:silicon_press', 0)
            .itemIn(`${mi}steel_block`)

        Inscriber(8, 10, 'extendedae:concurrent_processor_press', 'concurrent_processor_press')
            .itemIn('extendedae:concurrent_processor_press', 0)
            .itemIn(`${mi}steel_block`)

        ChemicalBath(8, 10, 'paper')
            .itemIn('2x modern_industrialization:wood_pulp')
            .itemOut('paper')
            .fluidIn('water', 200);

        Mixer(8, 5, 'entro_seed')
            .itemOut('3x extendedae:entro_seed')
            .itemIn(`8x ae2:ender_dust`)
            .itemIn(`3x ae2:sky_dust`)
            .itemIn(`${mi}iridium_tiny_dust`)
            .fluidIn('actuallyadditions:empowered_oil', 1000)

        Mixer(8, 5, 'photovoltaic_composite')
            .itemOut('enderio:photovoltaic_composite')
            .itemIn(`${mi}aluminum_dust`)
            .itemIn(`${mi}carbon_dust`)
            .itemIn(`${mi}silicon_dust`)
            .fluidIn('water', 250)

        Mixer(8, 5, 'dough')
            .itemOut('farmersdelight:wheat_dough')
            .itemIn('wheat')
            .fluidIn('water', 250)

        Mixer(32, 10, 'tungstensteel')
            .itemIn(`${mi}tungsten_dust`)
            .itemIn(`${mi}steel_dust`)
            .itemOut(`2x kubejs:tungstensteel_dust`)

        Mixer(16, 10, 'nichrome')
            .itemIn(`2x ${mi}nickel_dust`)
            .itemIn(`${mi}chromium_dust`)
            .itemOut(`3x kubejs:nichrome_dust`)

        Mixer(8, 5, 'fluix')
            .itemIn('quartz')
            .itemIn(`ae2:charged_certus_quartz_crystal`)
            .itemIn('redstone')
            .itemOut('2x ae2:fluix_crystal')
            .fluidIn(`water`, 1000, 0)
            .fluidIn('actuallyadditions:crystallized_oil', 100);

        Mixer(8, 5, 'raw_treated_leather')
            .itemIn('leather')
            .itemIn('flint')
            .itemIn('2x #c:dusts/salt')
            .itemOut('kubejs:raw_treated_leather')
            .fluidIn('water', 1000);

        ChemicalBath(8, 2.5, 'treated_wood_planks')
            .itemIn('#minecraft:planks')
            .itemOut('kubejs:treated_wood_planks')
            .fluidIn(`${mi}creosote`, 125);

        Mixer(8, 10, 'black_plastic')
            .itemIn('industrialforegoing:plastic')
            .itemIn('kubejs:black_quartz_dust')
            .itemOut('kubejs:black_plastic')

        ChemicalBath(8, 5, 'canola_treated_wood_planks')
            .itemIn('kubejs:treated_wood_planks')
            .itemOut('kubejs:canola_treated_wood_planks')
            .fluidIn(`actuallyadditions:refined_canola_oil`, 125);

        Mixer(8, 5, 'redstone_alloy_dust')
            .itemIn(`${mi}copper_dust`)
            .itemIn('4x redstone')
            .itemOut(`kubejs:red_alloy_dust`)

        Mixer(8, 5, 'uncooked_steel_dust')
            .itemIn('4x #c:dusts/iron')
            .itemIn(`${mi}coke_dust`)
            .itemOut(`4x ${mi}uncooked_steel_dust`);

        Mixer(8, 5, 'glass_dust')
            .itemIn('2x kubejs:sand_dust')
            .itemIn(`kubejs:flint_tiny_dust`)
            .itemOut(`2x kubejs:glass_dust`);

        Mixer(8, 10, 'conduit_binder_composite')
            .itemOut('4x enderio:conduit_binder_composite')
            .itemIn('4x sand')
            .itemIn('2x gravel')
            .itemIn('2x kubejs:clay_dust')
            .itemIn('industrialforegoing:fertilizer')
            .fluidIn('water', 100)

        // Mixer(8, 10, 'luminessence')
        //     .itemOut('extendedcrafting:luminessence')
        //     .itemIn('glowstone_dust')
        //     .itemIn('ae2:fluix_dust')
        //     .itemIn('gunpowder')
        //     .itemIn('ae2:ender_dust')

        VacuumFreezer(32, 10, 'conduit_binder')
            .fluidIn('kubejs:conduit_binder_fluid', 100)
            .itemOut('enderio:conduit_binder')

        HeatExchanger(64, 10, 'tungstensteel_ingot')
            .fluidIn(`${mi}cryofluid`, 20)
            .fluidOut(`${mi}argon`, 13)
            .fluidOut(`${mi}helium`, 5)
            .itemIn('kubejs:tungstensteel_hot_ingot')
            .itemOut(`kubejs:tungstensteel_ingot`)

        VacuumFreezer(32, 12.5, 'nichrome')
            .itemIn('kubejs:nichrome_hot_ingot')
            .itemOut(`kubejs:nichrome_ingot`)

        HeatExchanger(32, 5, 'nichrome_ingot')
            .fluidIn(`${mi}cryofluid`, 20)
            .fluidOut(`${mi}argon`, 13)
            .fluidOut(`${mi}helium`, 5)
            .itemIn('kubejs:nichrome_hot_ingot')
            .itemOut(`kubejs:nichrome_ingot`)

        HeatExchanger(128, 10, 'uranium_ingot')
            .fluidIn(`${mi}cryofluid`, 20)
            .fluidOut(`${mi}argon`, 13)
            .fluidOut(`${mi}helium`, 5)
            .itemIn('kubejs:uranium_hot_ingot')
            .itemOut(`${mi}uranium_ingot`)

        HeatExchanger(128, 10, 'iridium_ingot')
            .fluidIn(`${mi}cryofluid`, 20)
            .fluidOut(`${mi}argon`, 13)
            .fluidOut(`${mi}helium`, 5)
            .itemIn('kubejs:iridium_hot_ingot')
            .itemOut(`${mi}iridium_ingot`)

        HeatExchanger(128, 10, 'osmium_ingot')
            .fluidIn(`${mi}cryofluid`, 20)
            .fluidOut(`${mi}argon`, 13)
            .fluidOut(`${mi}helium`, 5)
            .itemIn('kubejs:osmium_hot_ingot')
            .itemOut(`kubejs:osmium_ingot`)

        Macerator(2,10,'sand', 'sand_dust')
            .itemOut('kubejs:sand_dust')
    
        Macerator(2,10,'flint', 'flint_dust')
            .itemOut('kubejs:flint_dust')
    
        Assembler(8, 10, 'hopper','hopper')
            .itemIn(`5x ${mi}iron_plate`)
            .itemIn('chest')
            .itemIn(`kubejs:iron_small_gear`)

        Assembler(8, 10, `2x ${mi}capacitor`, 'capacitor')
            .itemIn(`4x #c:nuggets/red_alloy`)
            .itemIn('2x #c:plates/gold')
            .itemIn('2x modern_industrialization:copper_wire')
            .itemIn(`${mi}rubber_sheet`)
    
        Assembler(8, 10, `4x ${mi}resistor`, 'resistor')
            .itemIn(`4x #c:nuggets/red_alloy`)
            .itemIn('2x paper')
            .itemIn('2x modern_industrialization:copper_fine_wire')
            .itemIn(`${mi}coal_dust`)
    
        Assembler(8, 10, `2x ${mi}inductor`, 'inductor')
            .itemIn('8x modern_industrialization:copper_wire')
            .itemIn(`2x ${mi}steel_rod`)

        Assembler(8, 10, `actuallyadditions:wood_casing`, 'wood_casing')
            .itemIn('4x kubejs:treated_wood_planks')
            .itemIn(`4x kubejs:treated_stick`)

        Assembler(8, 10, `kubejs:stone_casing`, 'stone_casing')
            .itemIn('4x kubejs:treated_wood_frame_box')
            .itemIn(`4x kubejs:double_compressed_cobblestone`)

        Assembler(8, 10, `kubejs:iron_rotary_blade`, 'iron_rotary_blade')
            .itemIn(`4x kubejs:black_quartz_dust`)
            .itemIn(`${mi}iron_gear`)

        Assembler(8, 10, `kubejs:steel_rotary_blade`, 'steel_rotary_blade')
            .itemIn(`4x ${mi}emerald_dust`)
            .itemIn(`${mi}steel_gear`)

        Assembler(8, 10, `${mi}restonia_battery`, 'restonia_battery')
            .itemIn(`${mi}redstone_battery`)
            .itemIn(`8x kubejs:restonia_plate`)

        Assembler(8, 10, `2x ${mi}diode`, 'diode')
            .itemIn(`${mi}silicon_plate`)
            .itemIn(`3x #c:glass_blocks`)
            .itemIn('actuallyadditions:advanced_coil')
            .itemIn(`2x kubejs:steel_magnetic_plate`)

         Assembler(8, 10, `4x ${mi}diode`, 'diode_alt')
            .itemIn(`${mi}silicon_n_doped_plate`)
            .itemIn(`3x #c:glass_blocks`)
            .itemIn('actuallyadditions:advanced_coil')
            .itemIn(`2x kubejs:steel_magnetic_plate`) 

        Assembler(8, 10, `4x ${mi}transistor`, 'transistor')
            .itemIn(`3x ${mi}silicon_plate`)
            .itemIn('actuallyadditions:advanced_coil')
            .itemIn(`3x kubejs:steel_magnetic_plate`)

        Assembler(8, 10, `8x ${mi}transistor`, 'transistor_alt')
            .itemIn(`2x ${mi}silicon_p_doped_plate`)
            .itemIn(`${mi}silicon_n_doped_plate`)
            .itemIn('actuallyadditions:advanced_coil')
            .itemIn(`3x kubejs:steel_magnetic_plate`) 

        Assembler(8, 10, `actuallyadditions:basic_coil`, 'basic_coil')
            .itemIn(`kubejs:black_quartz_rod_magnetic`)
            .itemIn(`2x kubejs:black_quartz_rod`)
            .itemIn('4x kubejs:enori_wire')
            .itemIn(`2x actuallyadditions:restonia_crystal`) 

        Assembler(8, 10, `actuallyadditions:advanced_coil`, 'advanced_coil')
            .itemIn(`2x actuallyadditions:basic_coil`)
            .itemIn(`kubejs:diamatine_rod`)
            .itemIn('6x kubejs:gold_magnetic_wire')

        Assembler(8, 10, `stonecutter`, 'stonecutter')
            .itemIn(`kubejs:iron_rotary_blade`)
            .itemIn(`3x stone`)

         Assembler(8, 10, `${mi}steel_upgrade`, 'steel_upgrade')
            .itemIn(`2x #${mi}fluid_pipes`)
            .itemIn(`2x ${mi}bronze_gear`)
            .itemIn(`${mi}bronze_rotor`)
            .itemIn(`${mi}steel_machine_casing`)
            .itemIn(`2x ${mi}bronze_rod`)
            .itemIn(`${mi}fire_clay_bricks`)

        // Assembler(8, 10, '3x enderio:conduit[enderio:conduit="enderio:energy"]', 'energy_conduit')
        //     .itemIn('3x kubejs:conductive_alloy_wire')
        //     .fluidIn(`kubejs:conduit_binder_fluid`, 250)
        //     .fluidIn(`${mi}polyethylene`, 100);

        Assembler(8, 10, '3x enderio:conduit[enderio:conduit="enderio:item"]', 'item_conduit')
            .itemIn('3x kubejs:pulsating_alloy_wire')
            .fluidIn(`kubejs:conduit_binder_fluid`, 250)
            .fluidIn(`${mi}polyethylene`, 100);

        Assembler(8, 10, '8x enderio:conduit[enderio:conduit="enderio:fluid"]', 'fluid_conduit')
            .itemIn('3x kubejs:enori_wire')
            .itemIn('3x #c:glass_blocks/clear')
            .fluidIn(`kubejs:conduit_binder_fluid`, 500)
            .fluidIn(`${mi}polyethylene`, 200);

        Assembler(8, 10, 'megacells:accumulation_processor_press', 'accumulation_processor_press')
            .itemIn('ae2:calculation_processor_press')
            .itemIn('ae2:singularity')
            .itemIn('ae2:engineering_processor_press')
            .fluidIn(`${mi}polyethylene`, 500);

        Assembler(8, 10, `${mi}op_amp`, 'op_amp')
            .itemIn(`3x ${mi}resistor`)
            .itemIn(`4x ${mi}transistor`)
            .itemIn(`${mi}diode`)
            .itemIn('enderio:basic_capacitor');

        Assembler(8, 10, `${mi}and_gate`, 'and_gate')
            .itemIn(`2x ${mi}resistor`)
            .itemIn(`${mi}op_amp`)
            .itemIn('4x kubejs:pulsating_alloy_wire');

        Assembler(8, 10, `${mi}not_gate`, 'not_gate')
            .itemIn(`${mi}resistor`)
            .itemIn(`${mi}op_amp`)
            .itemIn('kubejs:empowered_diamatine_wire');

        Assembler(8, 10, `${mi}or_gate`, 'or_gate')
            .itemIn(`2x ${mi}op_amp`)
            .itemIn(`${mi}diode`)
            .itemIn('2x kubejs:redstone_alloy_wire');

        Assembler(16, 20, `actuallyadditions:display_stand`, 'display_stand')
            .itemIn(`actuallyadditions:advanced_coil`)
            .itemIn(`3x actuallyadditions:ethetic_green_block`)
            .itemIn('3x actuallyadditions:ethetic_white_block')
            .itemIn('4x kubejs:dark_steel_plate')
            .fluidIn(`${mi}molten_redstone`, 250);
    
        Assembler(8, 10, `actuallyadditions:ethetic_green_block`, 'ethetic_green_block')
            .itemIn('actuallyadditions:ethetic_white_block')
            .fluidIn(`productivemetalworks:molten_emerald`, 50);

        Assembler(8,10, `${mi}bronze_tank`,'bronze_tank')
            .itemIn(`8x ${mi}bronze_plate`)
            .itemIn(`bucket`)

        // Assembler(8,10, `${mi}bronze_boiler`,'bronze_boiler')
        //     .itemIn(`4x ${mi}bronze_plate`)
        //     .itemIn(`${mi}bronze_tank`)
        //     .itemIn(`2x ${mi}fire_clay_bricks`)
        //     .itemIn(`furnace`)

        Assembler(8, 10, 'anvil','anvil')
            .itemIn('3x iron_block')
            .itemIn(`4x ${mi}iron_plate`)

        Assembler(32, 10, 'kubejs:large_chemical_reactor_casing','large_chemical_reactor_casing')
            .itemIn(`${mi}clean_stainless_steel_machine_casing`)
            .fluidIn('kubejs:polytetrafluoroethylene', 216)

        Assembler(256, 300, `${mi}quantum_circuit_board`,'quantum_circuit_board')
            .itemIn(`12x ${mi}superconductor_cable`)
            .itemIn(`${mi}plutonium_battery`)
            .itemIn(`${mi}processing_unit_board`)
            .itemIn(`6x ${mi}iridium_plate`)
            .fluidIn(`${mi}helium_3`, 100)
            .fluidIn(`kubejs:aberration`, 100)

        Extractor(16, 10, 'molten_blaze_alt')
            .itemIn(`blaze_powder`)
            .fluidOut(`productivemetalworks:molten_blaze`, 100)

        Extractor(16, 10, 'molten_blaze')
            .itemIn(`blaze_rod`)
            .fluidOut(`productivemetalworks:molten_blaze`, 400)

        Extractor(32, 120, 'molten_netherite')
            .itemIn(`netherite_ingot`)
            .fluidOut(`productivemetalworks:molten_netherite`, 90)

        Extractor(16, 60, 'molten_ancient_debris')
            .itemIn(`netherite_scrap`)
            .fluidOut(`productivemetalworks:molten_ancient_debris`, 100)

        Extractor(8, 20, 'molten_stainless_steel')
            .itemIn(`${mi}stainless_steel_ingot`)
            .fluidOut(`kubejs:molten_stainless_steel`, 90)

        Extractor(8, 5, 'molten_stainless_steel_alt')
            .itemIn(`${mi}stainless_steel_nugget`)
            .fluidOut(`kubejs:molten_stainless_steel`, 10)

        Extractor(8, 60, 'molten_stainless_steel_alt_alt')
            .itemIn(`${mi}stainless_steel_block`)
            .fluidOut(`kubejs:molten_stainless_steel`, 810)  
        
        Extractor(8, 20, 'molten_platinum')
            .itemIn(`${mi}platinum_ingot`)
            .fluidOut(`kubejs:molten_platinum`, 90)

        Extractor(8, 5, 'molten_platinum_alt')
            .itemIn(`${mi}platinum_nugget`)
            .fluidOut(`kubejs:molten_platinum`, 10)

        Extractor(8, 60, 'molten_platinum_alt_alt')
            .itemIn(`${mi}platinum_block`)
            .fluidOut(`kubejs:molten_platinum`, 810)

        Extractor(64, 60, 'molten_iridium')
            .itemIn(`${mi}iridium_ingot`)
            .fluidOut(`kubejs:molten_iridium`, 90)

        Extractor(64, 10, 'molten_iridium_alt')
            .itemIn(`${mi}iridium_nugget`)
            .fluidOut(`kubejs:molten_iridium`, 10)

        Extractor(64, 240, 'molten_iridium_alt_alt')
            .itemIn(`${mi}iridium_block`)
            .fluidOut(`kubejs:molten_iridium`, 810)

        Extractor(8, 20, 'molten_steel')
            .itemIn(`${mi}steel_ingot`)
            .fluidOut(`productivemetalworks:molten_steel`, 90)

        Extractor(8, 5, 'molten_steel_alt')
            .itemIn(`${mi}steel_nugget`)
            .fluidOut(`productivemetalworks:molten_steel`, 10)

        Extractor(8, 60, 'molten_steel_alt_alt')
            .itemIn(`${mi}steel_block`)
            .fluidOut(`productivemetalworks:molten_steel`, 810)

        Extractor(8, 20, 'molten_aluminum')
            .itemIn(`${mi}aluminum_ingot`)
            .fluidOut(`kubejs:molten_aluminum`, 90)

        Extractor(8, 5, 'molten_aluminum_alt')
            .itemIn(`${mi}aluminum_nugget`)
            .fluidOut(`kubejs:molten_aluminum`, 10)

        Extractor(8, 60, 'molten_aluminum_alt_alt')
            .itemIn(`${mi}aluminum_block`)
            .fluidOut(`kubejs:molten_aluminum`, 810)

        Extractor(8, 20, 'molten_tin')
            .itemIn(`${mi}tin_ingot`)
            .fluidOut(`kubejs:molten_tin`, 90)

        Extractor(8, 5, 'molten_tin_alt')
            .itemIn(`${mi}tin_nugget`)
            .fluidOut(`kubejs:molten_tin`, 10)

        Extractor(8, 60, 'molten_tin_alt_alt')
            .itemIn(`${mi}tin_block`)
            .fluidOut(`kubejs:molten_tin`, 810)

        Extractor(8, 20, 'molten_gold')
            .itemIn(`gold_ingot`)
            .fluidOut(`productivemetalworks:molten_gold`, 90)

        Extractor(8, 5, 'molten_gold_alt')
            .itemIn(`gold_nugget`)
            .fluidOut(`productivemetalworks:molten_gold`, 10)

        Extractor(8, 60, 'molten_gold_alt_alt')
            .itemIn(`gold_block`)
            .fluidOut(`productivemetalworks:molten_gold`, 810)

        Extractor(8, 20, 'molten_iron')
            .itemIn(`iron_ingot`)
            .fluidOut(`productivemetalworks:molten_iron`, 90)

        Extractor(8, 5, 'molten_iron_alt')
            .itemIn(`iron_nugget`)
            .fluidOut(`productivemetalworks:molten_iron`, 10)

        Extractor(8, 60, 'molten_iron_alt_alt')
            .itemIn(`iron_block`)
            .fluidOut(`productivemetalworks:molten_iron`, 810)

        Extractor(8, 20, 'molten_silver')
            .itemIn(`${mi}silver_ingot`)
            .fluidOut(`productivemetalworks:molten_silver`, 90)

        Extractor(8, 5, 'molten_silver_alt')
            .itemIn(`${mi}silver_nugget`)
            .fluidOut(`productivemetalworks:molten_silver`, 10)

        Extractor(8, 60, 'molten_silver_alt_alt')
            .itemIn(`${mi}silver_block`)
            .fluidOut(`productivemetalworks:molten_silver`, 810)

        Extractor(8, 10, 'molten_plastic')
            .itemIn(`industrialforegoing:plastic`)
            .fluidOut(`kubejs:molten_plastic`, 100)

        Extractor(8, 10, 'molten_redstone')
            .itemIn(`redstone`)
            .fluidOut(`${mi}molten_redstone`, 90)

        Extractor(8, 10, 'molten_ender')
            .itemIn(`ender_pearl`)
            .fluidOut(`kubejs:molten_ender`, 250)

        Extractor(8, 10, 'molten_emerald')
            .itemIn(`emerald`)
            .fluidOut(`productivemetalworks:molten_emerald`, 100)

        Extractor(8, 10, 'blazing_essence')
            .itemIn(`blaze_powder`)
            .fluidOut(`extended_industrialization:blazing_essence`, 20)

        Extractor(8, 60, 'latex')
            .itemIn(`acacia_log`, 0.25)
            .fluidOut(`industrialforegoing:latex`, 500)

        Extractor(8, 10, 'honey')
            .itemIn(`honey_block`)
            .fluidOut(`extended_industrialization:honey`, 1000)

        Extractor(8, 10, 'conduit_binder_fluid')
            .itemIn(`enderio:conduit_binder_composite`)
            .fluidOut(`kubejs:conduit_binder_fluid`, 100)

        BlastFurnace(2, 30, 'steel_ingot')
            .itemIn(`${mi}uncooked_steel_dust`)
            .itemOut(`${mi}steel_ingot`)

        BlastFurnace(256, 60, 'hot_uranium')
            .itemIn(`${mi}uranium_dust`)
            .itemOut(`kubejs:uranium_hot_ingot`)

        BlastFurnace(384, 60, 'hot_superconductor')
            .itemIn(`${mi}superconductor_dust`)
            .itemOut(`${mi}superconductor_hot_ingot`)

        BlastFurnace(384, 60, 'hot_iridium')
            .itemIn(`${mi}iridium_dust`)
            .itemOut(`kubejs:iridium_hot_ingot`)

        BlastFurnace(384, 60, 'hot_osmium')
            .itemIn(`kubejs:osmium_dust`)
            .itemOut(`kubejs:osmium_hot_ingot`)

        CokeOven(2, 20, 'charcoal')
            .itemIn(`#minecraft:logs_that_burn`)
            .itemOut(`charcoal`)
            .fluidOut(`${mi}creosote`, 250, 0.5)

        CokeOven(2, 50, 'coke')
            .itemIn(`coal`)
            .itemOut(`${mi}coke`)
            .fluidOut(`${mi}creosote`, 500, 0.5)

        CokeOven(2, 50, 'coke_dust')
            .itemIn(`${mi}coal_dust`)
            .itemOut(`${mi}coke_dust`)
            .fluidOut(`${mi}creosote`, 500, 0.5)

        PyrolyseOven(32, 40, 'coke')
            .itemIn(`16x coal`)
            .itemOut(`16x ${mi}coke`)
            .fluidOut(`${mi}creosote`, 4000)

        PyrolyseOven(32, 40, 'coke_dust')
            .itemIn(`16x ${mi}coal_dust`)
            .itemOut(`16x ${mi}coke_dust`)
            .fluidOut(`${mi}creosote`, 4000)

        PyrolyseOven(32, 20, 'charcoal')
            .itemIn(`16x #minecraft:logs_that_burn`)
            .itemOut(`20x charcoal`)
            .fluidOut(`${mi}creosote`, 2000)

        global.customMIMachines.forEach(machine => {
            if (machine.startsWith('steel')) {
                let machineName = machine.substring(6)

                if (global.customMIMachines.includes(`bronze_${machineName}`)) {
                    e.shapeless(`${mi}steel_${machineName}`, [`${mi}bronze_${machineName}`, `${mi}steel_upgrade`]).id(`kubejs:shapeless/steel_${machineName}_from_upgrade`)

                    Packer(2, 5, `bronze_${machineName}_to_steel`)
                        .itemIn(`${mi}bronze_${machineName}`)
                        .itemIn(`${mi}steel_upgrade`)
                        .itemOut(`${mi}steel_${machineName}`)

                    Unpacker(2, 5, `steel_${machineName}_to_bronze`)
                        .itemIn(`${mi}steel_${machineName}`)
                        .itemOut(`${mi}bronze_${machineName}`)
                        .itemOut(`${mi}steel_upgrade`);
                };
            };
        });

        global.processors.forEach(property => {
            const {name,input} = property;

            Inscriber(16, 10, `kubejs:printed_${name}_processor`, `${name}_print`)
                .itemIn(input)
                .itemIn(`kubejs:${name}_processor_press`, 0);

            Inscriber(8, 10, `kubejs:${name}_processor_press`, `${name}_processor_press`)
                .itemIn(`kubejs:${name}_processor_press`, 0)
                .itemIn(`${mi}steel_block`);

            Assembler(8, 10, `kubejs:${name}_processor`, `${name}_processor`)
                .itemIn(`kubejs:printed_${name}_processor`)
                .itemIn(`ae2:printed_silicon`)
                .fluidIn(`${mi}molten_redstone`, 90)

            e.custom(
                {
                    "type": "extendedae:crystal_assembler",
                    "input_items": [
                        {
                            amount: 4,
                            ingredient: {item: `kubejs:printed_${name}_processor`}
                        },
                        {
                            amount: 4,
                            ingredient: {item: `ae2:printed_silicon`}
                        },
                        {
                            amount: 4,
                            ingredient: {item: `redstone`}
                        }
                    ],
                    "output": {id: `kubejs:${name}_processor`, count: 4}
                }
            ).id(`kubejs:assembler/${name}_processor`)
        });

        global.cables.forEach(material => {
            Assembler(2, 5, `3x ${mi}${material}_cable`, `${material}_cable`)
                .itemIn(`3x kubejs:${material}_wire`)
                .fluidIn(`${mi}styrene_butadiene_rubber`, 6)

            Assembler(2, 5, `3x ${mi}${material}_cable`, `${material}_cable_alt`)
                .itemIn(`3x kubejs:${material}_wire`)
                .fluidIn(`${mi}synthetic_rubber`, 30)
        });

        e.forEachRecipe({id: /elevatorid:redye/}, r => {
            Mixer(8, 5, r.getId().replace(':','_'))
                .itemIn(r.originalRecipeIngredients[0])
                .itemIn(r.originalRecipeIngredients[1])
                .itemOut(r.originalRecipeResult)
        });

        e.forEachRecipe({output: /modern_industrialization:\w+blade/, type: `${mi}packer`}, r => {
            assembler(8, 10 * tickMultiplier)
                .itemIn(item(r.originalRecipeIngredients[0], 2))
                .itemIn(r.originalRecipeIngredients[1])
                .itemOut(Item.of(r.originalRecipeResult, 4))
                .id(`kubejs:assembler/${r.originalRecipeResult.id.toString().replace(':','_')}`)
        })

        e.forEachRecipe({input: `${mi}quantum_upgrade`, type: `${mi}packer`}, r => {
            e.recipes.modern_industrialization.quantum_installer(25000000, 60 * tickMultiplier)
                .itemIn(r.originalRecipeIngredients[0])
                .itemIn(r.originalRecipeIngredients[1])
                .itemOut(r.originalRecipeResult)
                .id(r.getId())
        });

        e.forEachRecipe({id: /modern_industrialization:materials\/centrifuge\/nuclear_recycling/}, r => {
            e.custom({
                type: `${mi}nuclear_recycler`,
                duration: r.json.get('duration'),
                eu: 256,
                item_inputs: r.json.get('item_inputs'),
                item_outputs: r.json.get('item_outputs')
            }).id(r.getId())
        });
    
    
        for (const [material, color] of Object.entries(global.processingItems)) {
            let amount;
            switch (material) {
                case 'redstone':
                    amount = 3
                break;
                case 'lapis':
                    amount = 4
                break;
                case 'coal':
                    amount = 2
                break;
                default:
                    amount = 1
            };

            let defaultRecipe = Macerator(2, 15, `#c:raw_materials/${material}`, `processing/crushed_${material}_dust`).itemOut(Item.of(`kubejs:crushed_${material}_dust`, amount)).itemOut(`kubejs:crushed_${material}_dust`, 0.5)

            switch (material) {
                case 'lead':
                    defaultRecipe.itemOut(`${mi}raw_silver`, 0.35)
                break;
                default:
                    defaultRecipe;
            }
    
            
    
            let output;
    
            switch (material) {
                case 'redstone':
                    output = 'redstone'
                break;
                case 'black_quartz':
                case 'cloggrum':
                case 'froststeel':
                    output = `kubejs:${material}_dust`
                break;
                default:
                    output = `${mi}${material}_dust`
            };
    
            e.custom({
                type: 'lychee:item_inside',
                item_in: {
                    item: `kubejs:impure_${material}_dust`
                },
                block_in: {
                    blocks: ["water_cauldron"],
                    state: {
                        level: '3'
                    }
                },
                post: [{
                    type: "drop_item",
                    id: output
                }]
            }).id(`kubejs:lychee/item_inside/${material}_dust`)
    
            chemical_bath(8, 100)
                .fluidIn('water', 100)
                .itemIn(`kubejs:impure_${material}_dust`)
                .itemOut(output)
                .id(`${prefix}chemical_bath/processing/${material}_dust`)
    
            automatic_forge_hammer(2, 5 * tickMultiplier)
                .itemIn(`kubejs:crushed_${material}_dust`)
                .itemOut(`kubejs:impure_${material}_dust`)
                .id(`${prefix}forge_hammer_bronze/${material}_dust`)
    
            automatic_forge_hammer_electric(8, 5 * tickMultiplier)
                .itemIn(`kubejs:crushed_${material}_dust`)
                .itemOut(`kubejs:impure_${material}_dust`)
                .id(`${prefix}forge_hammer_electric/${material}_dust`)

            massive_forge_hammer(128, 0.5 * tickMultiplier)
                .itemIn(`kubejs:crushed_${material}_dust`)
                .itemOut(`kubejs:impure_${material}_dust`)
                .id(`${prefix}massive_forge_hammer/${material}_dust`)
    
            e.shaped(`kubejs:impure_${material}_dust`, ['a','b',' '], {a: hammers, b: `kubejs:crushed_${material}_dust`}).damageIngredient(hammers).id(`kubejs:shaped/hammering/${material}_dust`)
            //e.recipes.modern_industrialization.forge_hammer(`kubejs:impure_${material}_dust`,`kubejs:crushed_${material}_dust`,10,0).id(`kubejs:forge_hammer/${material}_dust`)
            let SmeltingOutput;
    
            switch (material) {
                case 'lapis':
                    SmeltingOutput = 'lapis_lazuli'
                break;
                case 'black_quartz':
                    SmeltingOutput = 'actuallyadditions:black_quartz'
                break;
                case 'lignite_coal':
                    SmeltingOutput = `${mi}${material}`
                break;
                default:
                    SmeltingOutput = material
            };
    
            let RawAmount;
    
            switch (material) {
                case 'lapis':
                    RawAmount = 5
                break;
                case 'redstone':
                    RawAmount = 4
                break;
                default:
                    RawAmount = 3
            }
    
            switch (material) {
                case 'redstone':
                case 'diamond':
                case 'emerald':
                case 'coal':
                case 'lapis':
                case 'lignite_coal':
                case 'quartz':
                case 'black_quartz':
                    e.smelting(SmeltingOutput, `#c:raw_materials/${material}`)
                        .cookingTime(10 * tickMultiplier).xp(0.1)
                        .id(`kubejs:smelting/processing/${material}_from_raw`);
    
                    e.blasting(SmeltingOutput, `#c:raw_materials/${material}`)
                        .cookingTime(5 * tickMultiplier).xp(0.1)
                        .id(`kubejs:blasting/processing/${material}_from_raw`);

                     Macerator(2, 15, `#c:ores/${material}`, `processing/raw_${material}_from_ore`)
                        .itemOut(Item.of(`kubejs:raw_${material}`, RawAmount))
                break;
                case 'sulfur':
                case 'bauxite':  
                case 'monazite':
                case 'salt':
                    Macerator(2, 15, `#c:ores/${material}`, `processing/raw_${material}_from_ore`)
                        .itemOut(Item.of(`kubejs:raw_${material}`, RawAmount))
                break;
                case 'cloggrum':
                case 'froststeel':
                     Macerator(2, 15, `#c:ores/${material}`, `processing/raw_${material}_from_ore`)
                        .itemOut(Item.of(`undergarden:raw_${material}`, RawAmount))
                break;
                    
            }
    
        };
    
        e.replaceInput({}, 'actuallyadditions:iron_casing', 'kubejs:steel_casing')

        e.forEachRecipe({type: `${mi}macerator`, not: [
            {id: /modern_industrialization:materials\/\w+\/macerator\/raw_metal/},
            {id: /modern_industrialization:materials\/macerator\/\w*(ore_to_crushed|crushed_to_dust|crushed_dust)/,},
            {id: 'modern_industrialization:materials/macerator/wood_pulp'},
            {id:  /modern_industrialization:materials\/\w*\/macerator\/(ore_to_crushed|crushed_to_dust|crushed_dust)/},
            {id: 'modern_industrialization:compat/ae2/macerator/ae2_sky_stone_block_to_ae2_sky_dust'},
            {id: 'modern_industrialization:vanilla_recipes/macerator/netherite_scrap'}
        ]}, r => {
            e.custom({
                "type": "modern_industrialization:macerator",
                "duration": r.json.get('duration') * 2,
                "eu": r.json.get('eu'),
                "item_inputs": r.json.get('item_inputs'),
                "item_outputs": r.json.get('item_outputs')
              }).id(r.getId())
        });

        function compressing(r,time, compress, extrude, smelting, mold) {
            let input = r.originalRecipeIngredients;
            let output = r.originalRecipeResult
            let toCompress = false;

            switch (input.length) {
                case 9:
                    toCompress = true;
                break;
                case 4:
                    if (output.hasTag('c:storage_blocks')) toCompress = true;
                break;
                default:
            };

            if (toCompress) {
                if (compress) {
                    compressor(2, time * tickMultiplier)
                    .itemIn(item(input[0], input.length))
                    .itemOut(output)
                    .id(r.getId())

                    massive_compressor(128, time / 10 * tickMultiplier)
                    .itemIn(item(input[0], input.length))
                    .itemOut(output)
                    .id(`kubejs:generated/massive_compressor/${r.getId().replace(':','_')}`)
                };
                
                if (extrude) {
                    extruder(8, time / 2 * tickMultiplier)
                    .itemIn(item(input[0], input.length))
                    .itemIn(mold, 0)
                    .itemOut(output)
                    .id(`kubejs:generated/extruder/${r.getId().replace(':','_')}`);
                };

                if (smelting) {
                    let inputId = Ingredient.of(input).getItemIds()[0];
                    if (inputId.includes('ingot') || inputId.includes('nugget')) {
                        alloy_smelter_alt(4, time * tickMultiplier)
                            .itemIn(item(input[0], input.length))
                            .itemIn(mold, 0)
                            .itemOut(output)
                            .id(`kubejs:generated/alloy_smelter/${r.getId().replace(':','_')}`);   
                    }          
                };
            };
        };

        function unpacking(r, time, saw, hammering, smelting, mold) {
            let input = r.originalRecipeIngredients;
            let output = r.originalRecipeResult
            let toUnpack = false;

            switch (output.count) {
                case 9:
                    toUnpack = true;
                break;
                case 4:
                    if (input.length == 1) toUnpack = true;
                break;
                default:
            };

            if (toUnpack) {
                if (!r.getId().includes('unpacker')) {
                    if (saw) {
                        //e.shapeless((output), [input, saws]).id(r.getId()).damageIngredient(saws)  
                        e.remove({id: r.getId()})
                        Forging(e,output, [input, 1], `nuggets/${r.getId().replace(':','_')}`)
                    };
    
                    if (hammering) {
                        automatic_forge_hammer(4, time * tickMultiplier)
                            .itemIn(item(input[0]))
                            .itemOut(Item.of(output.id, output.count))
                            .id(`kubejs:generated/automatic_forge_hammer/${r.getId().replace(':','_')}`);

                        automatic_forge_hammer_electric(8, time * tickMultiplier / 2)
                            .itemIn(item(input[0]))
                            .itemOut(Item.of(output.id, output.count))
                            .id(`kubejs:generated/automatic_forge_hammer_electric/${r.getId().replace(':','_')}`);

                        massive_forge_hammer(128, time * tickMultiplier / 8)
                            .itemIn(item(input[0]))
                            .itemOut(Item.of(output.id, output.count))
                            .id(`kubejs:generated/massive_forge_hammer/${r.getId().replace(':','_')}`);
                    };

                    if (smelting) {
                        alloy_smelter_alt(4, time * tickMultiplier)
                            .itemIn(item(input[0]))
                            .itemIn(mold, 0)
                            .itemOut(Item.of(output.id, output.count))
                            .id(`kubejs:generated/alloy_smelter/${r.getId().replace(':','_')}`);
                    };
                }
            };
        };


        e.forEachRecipe({output: ['#c:storage_blocks','ae2:fluix_block', /actuallyadditions:\w*crystal_block/], not: [
            {id: 'extendedae:silicon_block'}
        ]}, r => {   
            compressing(r, 20, true, true, true, 'kubejs:block_mold');
        });

        e.forEachRecipe({output: '#c:ingots',not: [
            {id: 'extendedcrafting:enhanced_ender_ingot'},
            {id: 'extendedcrafting:enhanced_redstone_ingot'},
            {id: 'extendedae:assembler/entro_ingot_transformation'},
            {id: /projecte/}
        ]}, r => {
            compressing(r, 10, true, false, true,'kubejs:ingot_mold');
            unpacking(r, 20, true, false,true, 'kubejs:ingot_mold')
        });

        e.forEachRecipe({output: '#c:nuggets'}, r => {
            unpacking(r, 10, true, false, true, 'kubejs:nugget_mold')
        });

        e.forEachRecipe({output: '#c:gems'}, r => {
            unpacking(r, 20, true, true, false, '')
        });

        e.forEachRecipe({output: '#c:dusts'}, r => {
            compressing(r, 10, true, false, false,'');
        });

        e.forEachRecipe({id: /modern_industrialization:petrochem\/steam_cracking/}, r => {
            let fluidInputs = r.json.get('fluid_inputs')
            let fluidOutputs = r.json.get('fluid_outputs')

            e.custom({
                type: `${mi}oil_cracking_unit`,
                eu: 40,
                duration: 10 * tickMultiplier,
                fluid_inputs: fluidInputs,
                fluid_outputs: fluidOutputs
            }).id(r.getId())
        });

        e.forEachRecipe({type: 'modern_industrialization:mixer', not: [
            {id: 'modern_industrialization:oil/mixer/sugar_solution'},
            {id: 'modern_industrialization:vanilla_recipes/mixer/paper'},
            {id: 'modern_industrialization:materials/mixer/uncooked_steel_dust'}
        ]}, r => {
            let itemInputs = r.json.get('item_inputs')         
            let itemOutputs = r.json.get('item_outputs')
            let fluidInputs = r.json.get('fluid_inputs')
            let fluidOutputs = r.json.get('fluid_outputs')
            let eu = r.json.get('eu')
            let duration = r.json.get('duration')

            if (eu < 8) {
                if (
                    itemInputs &&
                    itemOutputs &&
                    !fluidInputs &&
                    !fluidOutputs
                ) {
                    e.custom({
                        type: `${mi}mixer`,
                        eu: 8,
                        duration: duration,
                        item_inputs: itemInputs,
                        item_outputs: itemOutputs
                    }).id(r.getId());
                };

                if (
                    itemInputs &&
                    itemOutputs &&
                    fluidInputs &&
                    !fluidOutputs
                ) {
                    e.custom({
                        type: `${mi}mixer`,
                        eu: 8,
                        duration: duration,
                        item_inputs: itemInputs,
                        item_outputs: itemOutputs,
                        fluid_inputs: fluidInputs
                    }).id(r.getId());
                };

                if (
                    itemInputs &&
                    !itemOutputs &&
                    fluidInputs &&
                    fluidOutputs
                ) {
                    e.custom({
                        type: `${mi}mixer`,
                        eu: 8,
                        duration: duration,
                        item_inputs: itemInputs,
                        fluid_inputs: fluidInputs,
                        fluid_outputs: fluidOutputs
                    }).id(r.getId());
                };

                if (
                    itemInputs &&
                    itemOutputs &&
                    fluidInputs &&
                    fluidOutputs
                ) {
                    e.custom({
                        type: `${mi}mixer`,
                        eu: 8,
                        duration: duration,
                        item_inputs: itemInputs,
                        item_outputs: itemOutputs,
                        fluid_inputs: fluidInputs,
                        fluid_outputs: fluidOutputs
                    }).id(r.getId());
                };
            };
        });

        e.forEachRecipe({type: `${mi}chemical_reactor`, not: [
            {id: 'modern_industrialization:electric_age/component/chemical_reactor/n_doped_silicon'},
            {id: 'modern_industrialization:electric_age/component/chemical_reactor/p_doped_silicon'},
            {id: 'modern_industrialization:petrochem/polymerization/vinyl_chloride_chromium'},
            {id: 'modern_industrialization:petrochem/polymerization/vinyl_chloride_lead'},
            {id: 'modern_industrialization:oil/chemical_reactor/vinyl_chloride'},
            {id: /modern_industrialization:petrochem\/steam_cracking/},
            {id: 'modern_industrialization:electric_age/component/chemical_reactor/random_acces_memory'}
        ]}, r => {
            let itemInputs = r.json.get('item_inputs')         
            let itemOutputs = r.json.get('item_outputs')
            let fluidInputs = r.json.get('fluid_inputs')
            let fluidOutputs = r.json.get('fluid_outputs')
            let eu = r.json.get('eu')
            let duration = r.json.get('duration')

            let getLength = (property) => JSON.parse(property).length

            if (
                fluidInputs && 
                fluidOutputs &&
                !itemInputs &&
                !itemOutputs
            ) {
                if (
                    getLength(fluidInputs) != 3.0 &&
                    getLength(fluidOutputs) != 3.0
                ) {
                    e.custom({
                        type: `${mi}small_chemical_reactor`,
                        eu: eu,
                        duration: duration,
                        fluid_inputs: fluidInputs,
                        fluid_outputs: fluidOutputs
                    }).id(r.getId());

                    e.custom({
                        type: `${mi}large_chemical_reactor`,
                        eu: eu * 2,
                        duration: duration / 2,
                        fluid_inputs: fluidInputs,
                        fluid_outputs: fluidOutputs
                    }).id(`kubejs:generated/${r.getId().replace(':','_')}`);
                } else {
                    e.custom({
                        type: `${mi}large_chemical_reactor`,
                        eu: eu,
                        duration: duration,
                        fluid_inputs: fluidInputs,
                        fluid_outputs: fluidOutputs
                    }).id(r.getId());
                };
            }; 

            if (
                fluidInputs && 
                fluidOutputs &&
                itemInputs &&
                !itemOutputs
            ) {
                if (
                    getLength(fluidInputs) != 3.0 &&
                    getLength(fluidOutputs) != 3.0 &&
                    getLength(itemInputs) != 2.0
                ) {
                    e.custom({
                        type: `${mi}small_chemical_reactor`,
                        eu: eu,
                        duration: duration,
                        fluid_inputs: fluidInputs,
                        item_inputs: itemInputs,
                        fluid_outputs: fluidOutputs
                    }).id(r.getId());

                    e.custom({
                        type: `${mi}large_chemical_reactor`,
                        eu: eu * 2,
                        duration: duration / 2,
                        fluid_inputs: fluidInputs,
                        item_inputs: itemInputs,
                        fluid_outputs: fluidOutputs
                    }).id(`kubejs:generated/${r.getId().replace(':','_')}`);
                } else {
                    e.custom({
                        type: `${mi}large_chemical_reactor`,
                        eu: eu,
                        duration: duration,
                        fluid_inputs: fluidInputs,
                        item_inputs: itemInputs,
                        fluid_outputs: fluidOutputs
                    }).id(r.getId());
                };;
            };

            if (
                fluidInputs && 
                !fluidOutputs &&
                itemInputs &&
                itemOutputs
            ) {
                if (
                    getLength(fluidInputs) != 3.0 &&
                    getLength(itemInputs) != 3.0 &&
                    getLength(itemOutputs) == 1.0
                ) {
                    e.custom({
                        type: `${mi}small_chemical_reactor`,
                        eu: eu,
                        duration: duration,
                        fluid_inputs: fluidInputs,
                        item_inputs: itemInputs,
                        item_outputs: itemOutputs
                    }).id(r.getId());

                    e.custom({
                        type: `${mi}large_chemical_reactor`,
                        eu: eu * 2,
                        duration: duration / 2,
                        fluid_inputs: fluidInputs,
                        item_inputs: itemInputs,
                        item_outputs: itemOutputs
                    }).id(`kubejs:generated/${r.getId().replace(':','_')}`);
                } else {
                    e.custom({
                        type: `${mi}large_chemical_reactor`,
                        eu: eu,
                        duration: duration,
                        fluid_inputs: fluidInputs,
                        item_inputs: itemInputs,
                        item_outputs: itemOutputs
                    }).id(r.getId());
                };
            };

            if (
                !fluidInputs && 
                !fluidOutputs &&
                itemInputs &&
                itemOutputs
            ) {
                if (
                    getLength(itemInputs) != 3.0 &&
                    getLength(itemOutputs) == 1.0
                ) {
                    e.custom({
                        type: `${mi}small_chemical_reactor`,
                        eu: eu,
                        duration: duration,
                        item_inputs: itemInputs,
                        item_outputs: itemOutputs
                    }).id(r.getId());

                    e.custom({
                        type: `${mi}large_chemical_reactor`,
                        eu: eu * 2,
                        duration: duration / 2,
                        item_inputs: itemInputs,
                        item_outputs: itemOutputs
                    }).id(`kubejs:generated/${r.getId().replace(':','_')}`);
                } else {
                    e.custom({
                        type: `${mi}large_chemical_reactor`,
                        eu: eu,
                        duration: duration,
                        item_inputs: itemInputs,
                        item_outputs: itemOutputs
                    }).id(r.getId());
                };;
            };
        });

        e.forEachRecipe({id: /modern_industrialization:materials\/\w*\/compressor\/(lapis|quartz|lignite_coal|coal|dust)/}, r => {
            e.custom({
                type: `${mi}autoclave`,
                eu: 8,
                duration: 10 * tickMultiplier,
                item_inputs: r.json.get('item_inputs'),
                item_outputs: r.json.get('item_outputs'),
                fluid_inputs: {
                    fluid: 'water',
                    amount: 200
                }
            }).id(r.getId())
        });

        const rodsMaterials = [
            'aluminum',
            'bronze',
            'cadmium',
            'copper',
            'gold',
            'he_mox',
            'he_uranium',
            'invar',
            'iron',
            'le_mox',
            'le_uranium',
            'stainless_steel',
            'steel',
            'tin',
            'titanium',
            'uranium'
        ];

        rodsMaterials.forEach(material => {
            //Lathe(8, 10, [Item.of(`${mi}${material}_rod`, 1), Item.of(`${mi}${material}_tiny_dust`, 4)], `#c:ingots/${material}`, `kubejs:mi/lathe/${material}`);
            Lathe(8, 10, Item.of(`${mi}${material}_rod`, 2), `#c:ingots/${material}`, `kubejs:mi/lathe/${material}`);
        });

        const recipesAlloySmelter = [
            {
                eu: 2,
                duration: 200,
                input: [
                    Ingredient.of(['copper_ingot', `${mi}copper_dust`],3),
                    Ingredient.of([`${mi}tin_ingot`, `${mi}tin_dust`])
                ],
                output: `4x ${mi}bronze_ingot`,
                id: 'bronze'
            },
            {
                eu: 2,
                duration: 300,
                input: [item(['copper_ingot', `${mi}copper_dust`], 1), item([`${mi}nickel_ingot`, `${mi}nickel_dust`], 1)],
                output: `2x ${mi}cupronickel_ingot`,
                id: 'cupronickel'
            },
            {
                eu: 2,
                duration: 300,
                input: [item([`${mi}lead_ingot`, `${mi}lead_dust`], 1), item([`${mi}antimony_ingot`, `${mi}antimony_dust`], 1)],
                output: `2x ${mi}battery_alloy_ingot`,
                id: 'battery_alloy'
            },
            {
                eu: 2,
                duration: 400,
                input: [item([`gold_ingot`, `${mi}gold_dust`], 1), item([`${mi}silver_ingot`, `${mi}silver_dust`], 1)],
                output: `2x ${mi}electrum_ingot`,
                id: 'electrum'
            },
            {
                eu: 2,
                duration: 300,
                input: [item([`iron_ingot`, `${mi}iron_dust`], 2), item([`${mi}nickel_ingot`, `${mi}nickel_dust`], 1)],
                output: `3x ${mi}invar_ingot`,
                id: 'invar'
            },
            {
                eu: 8,
                duration: 200,
                input: [item('actuallyadditions:greenhouse_glass'), item('actuallyadditions:diamatine_crystal')],
                output: 'kubejs:compact_greenhouse_glass',
                id: 'compact_greenhouse_glass'
            },
        ]
        const withmolds = [
            {
                eu: 2,
                duration: 200,
                input: `${ct}glass_dust`,
                mold: 'block',
                output: 'glass',
                id: 'glass'
            },
            {
                eu: 2,
                duration: 200,
                input: `${ct}rubber`,
                mold: 'plate',
                output: `${mi}rubber_sheet`,
                id: 'rubber_sheet'
            }
        ]
        const rotors = [
            'aluminum',
            'bronze',
            'copper',
            'stainless_steel',
            'tin',
            'titanium',
        ]
        const gears = [
            'aluminum',
            'bronze',
            'copper',
            'gold',
            'invar',
            'iron',
            'steel',
            'stainless_steel',
            'tin',
            'titanium'
        ]
    
        recipesAlloySmelter.forEach(recipe => {
            alloy_smelter_alt(recipe.eu, recipe.duration)
            .itemIn(recipe.input[0])
            .itemIn(recipe.input[1])
            .itemOut(recipe.output)
            .id(`${ct}modern_industrialization/alloy_smelter/${recipe.id}`)

            // e.custom({
            //     "type": "enderio:alloy_smelting",
            //     "energy": 6000,
            //     "experience": 0.2,
            //     "inputs": [
            //         {
            //             item: recipe.input[0][0],
            //             count: recipe.input[0][1]
            //         },
            //         {
            //             item: recipe.input[1][0],
            //             count: recipe.input[1][1]
            //         }
            //     ],
            //     "output": Item.of(recipe.output)
            // }).id(`kubejs:enderio/alloy_smelting/${recipe.id}`)
        })
    
        withmolds.forEach(recipe => {
            alloy_smelter_alt(recipe.eu, recipe.duration)
            .itemIn(recipe.input)
            .itemIn(`${ct}${recipe.mold}_mold`, 0)
            .itemOut(recipe.output)
            .id(`${ct}modern_industrialization/alloy_smelter/molds/${recipe.id}`)
        })
    
        rotors.forEach(material => {
            e.remove({id: `${mi}materials/${material}/craft/rotor`})

            e.shaped(`${mi}${material}_rotor`, ['aba','bcb','aba'], {a: `${mi}${material}_blade`, c: `#c:rings/${material}`, b: `#c:screws/${material}`}).id(`kubejs:shaped/${material}_rotor`);

            extruder(8, 400)
                .itemIn(item(`#c:ingots/${material}`, 8))
                .itemIn(`${ct}rotor_mold`, 0)
                .itemOut(`${mi}${material}_rotor`)
                .id(`${ct}modern_industrialization/extruder/${material}_rotor`)
        })
    
        gears.forEach(material => {
            extruder(8, 400)
                .itemIn(item(`#c:ingots/${material}`, 6))
                .itemIn(`${ct}gear_mold`, 0)
                .itemOut(`${mi}${material}_gear`)
                .id(`${ct}modern_industrialization/extruder/${material}_gear`)
        });
    
        e.forEachRecipe({type: "extended_industrialization:bending_machine"}, r => {
            // let output = r.json.get('item_outputs')
            // let outputCheck = (input) => output.get(0).get('item').toString().includes(input);
            // let timeMultiplier;

            // if (outputCheck('curved_plate')) {
            //     timeMultiplier = 4;
            // } else if (outputCheck('ring')) timeMultiplier = 2;

            e.custom({
                type: "extended_industrialization:bending_machine",
                duration: 10 * tickMultiplier,
                eu: r.json.get('eu'),
                item_inputs: r.json.get('item_inputs'),
                item_outputs: r.json.get('item_outputs')
            }).id(r.getId());
        });

        primitive_pump(1, 20)
            .itemIn('kubejs:steel_rotor', 0)
            .adjacentBlock("minecraft:water", "below")
            .fluidOut('water', 1000)
            .id(`${ct}modern_industrialization/primitive_pump/recipe`)
    };

    function industrialforegoing() {
        const dissolutionChamber = [
            [
                {
                    id: 'actuallyadditions:atomic_reconstructor'
                },
                [
                    'kubejs:black_plastic',
                    'kubejs:steel_casing',
                    'kubejs:black_plastic',
                    `${mi}motor`,
                    'actuallyadditions:lens',
                    `${mi}analog_circuit`,
                    `${mi}gold_gear`,
                    `${mi}analog_circuit`,
                ],
                {
                    fluid: `${mi}molten_redstone`,
                    amount: 500
                },
                30,
                'atomic_reconstructor'
            ],
            [
                {
                    id: `${mi}electronic_circuit_board`
                },
                [
                    `${mi}electrum_cable`,
                    `${mi}analog_circuit_board`,
                    `${mi}electrum_cable`,
                    `industrialforegoing:pink_slime_ingot`,
                    `industrialforegoing:pink_slime_ingot`,
                    `${mi}electrum_cable`,
                    `${mi}restonia_battery`,
                    `${mi}electrum_cable`,
                ],
                {
                    fluid: `kubejs:molten_aluminum`,
                    amount: 270
                },
                20,
                'electronic_circuit_board'
            ],
            [
                {
                    id: `industrialforegoing:pink_slime_ingot`
                },
                [
                    `${mi}steel_ingot`,
                    `${mi}steel_ingot`,
                    'gold_ingot',
                    'gold_ingot'
                ],
                {
                    fluid: `industrialforegoing:pink_slime`,
                    amount: 1000
                },
                10,
                'pink_slime_ingot'
            ],
            [
                {
                    id: `actuallyadditions:drill_core`
                },
                [
                    'actuallyadditions:basic_coil',
                    'actuallyadditions:double_battery',
                    'actuallyadditions:basic_coil',
                    'actuallyadditions:restonia_crystal_block',
                    'actuallyadditions:palis_crystal_block',
                    'actuallyadditions:basic_coil',
                    `${mi}analog_circuit`,
                    'actuallyadditions:basic_coil'
                ],
                {
                    fluid: `kubejs:molten_plastic`,
                    amount: 500
                },
                40,
                'drill_core'
            ],
            [
                {
                    id: `kubejs:ultimate_coil`
                },
                [
                    'kubejs:empowered_diamatine_magnetic_wire',
                    `${mi}stainless_steel_gear`,
                    'kubejs:empowered_diamatine_magnetic_wire',
                    'actuallyadditions:advanced_coil',
                    'actuallyadditions:advanced_coil',
                    'kubejs:empowered_diamatine_magnetic_wire',
                    `${mi}stainless_steel_gear`,
                    'kubejs:empowered_diamatine_magnetic_wire'
                ],
                {
                    fluid: `${mi}polyethylene`,
                    amount: 500
                },
                60,
                'ultimate_coil'
            ],
            [
                {
                    id: `enderio:octadic_capacitor`
                },
                [
                    'kubejs:empowered_emeradic_magnetic_wire',
                    `kubejs:vibrant_alloy_gear`,
                    'kubejs:empowered_emeradic_magnetic_wire',
                    'enderio:double_layer_capacitor',
                    'enderio:double_layer_capacitor',
                    'kubejs:empowered_emeradic_magnetic_wire',
                    `kubejs:ultimate_coil`,
                    'kubejs:empowered_emeradic_magnetic_wire'
                ],
                {
                    fluid: `${mi}polyvinyl_chloride`,
                    amount: 500
                },
                80,
                'octadic_capacitor'
            ],
            [
                {
                    id: `${mi}silicon_battery`
                },
                [
                    `${mi}battery_alloy_curved_plate`,
                    `${mi}battery_alloy_plate`,
                    `${mi}battery_alloy_curved_plate`,
                    `${mi}electrum_cable`,
                    `${mi}electrum_cable`,
                    `${mi}battery_alloy_curved_plate`,
                    `ae2:printed_silicon`,
                    `${mi}battery_alloy_curved_plate`
                ],
                {
                    fluid: `kubejs:molten_plastic`,
                    amount: 250
                },
                20,
                'silicon_battery'
            ],
            [
                {
                    id: `${mi}sodium_battery`
                },
                [
                    `${mi}battery_alloy_curved_plate`,
                    `${mi}battery_alloy_plate`,
                    `${mi}battery_alloy_curved_plate`,
                    `${mi}aluminum_cable`,
                    `${mi}aluminum_cable`,
                    `${mi}battery_alloy_curved_plate`,
                    `${mi}sodium_dust`,
                    `${mi}battery_alloy_curved_plate`
                ],
                {
                    fluid: `kubejs:molten_aluminum`,
                    amount: 180
                },
                20,
                'sodium_battery'
            ],
            [
                {
                    id: `${mi}cadmium_battery`
                },
                [
                    `${mi}battery_alloy_curved_plate`,
                    `${mi}battery_alloy_plate`,
                    `${mi}battery_alloy_curved_plate`,
                    `${mi}annealed_copper_cable`,
                    `${mi}annealed_copper_cable`,
                    `${mi}battery_alloy_curved_plate`,
                    `${mi}cadmium_double_ingot`,
                    `${mi}battery_alloy_curved_plate`
                ],
                {
                    fluid: `kubejs:polytetrafluoroethylene`,
                    amount: 250
                },
                30,
                'cadmium_battery'
            ],
            [
                {
                    id: `${mi}plutonium_battery`
                },
                [
                    `${mi}battery_alloy_curved_plate`,
                    `${mi}battery_alloy_plate`,
                    `${mi}battery_alloy_curved_plate`,
                    `${mi}osmium_cable`,
                    `${mi}osmium_cable`,
                    `${mi}battery_alloy_curved_plate`,
                    `${mi}plutonium_dust`,
                    `${mi}battery_alloy_curved_plate`
                ],
                {
                    fluid: `kubejs:anomaly`,
                    amount: 50
                },
                60,
                'plutonium_battery'
            ],
            [
                {
                    id: `${mi}osmium_battery`
                },
                [
                    `${mi}battery_alloy_curved_plate`,
                    `${mi}battery_alloy_plate`,
                    `${mi}battery_alloy_curved_plate`,
                    `${mi}platinum_cable`,
                    `${mi}platinum_cable`,
                    `${mi}battery_alloy_curved_plate`,
                    `kubejs:osmium_double_ingot`,
                    `${mi}battery_alloy_curved_plate`
                ],
                {
                    fluid: `${mi}polyvinyl_chloride`,
                    amount: 250
                },
                60,
                'osmium_battery'
            ],
            // [
            //     {
            //         id: `actuallyadditions:laser_relay`,
            //         count: 2
            //     },
            //     [
            //         `kubejs:dark_steel_plate`,
            //         `${mi}or_gate`,
            //         `kubejs:dark_steel_plate`,
            //         `actuallyadditions:advanced_coil`,
            //         `actuallyadditions:advanced_coil`,
            //         `kubejs:dark_steel_plate`,
            //         `${mi}or_gate`,
            //         `kubejs:dark_steel_plate`
            //     ],
            //     {
            //         id: `${mi}molten_redstone`,
            //         amount: 500
            //     },
            //     30,
            //     'laser_relay'
            // ],
            [
                {
                    id: `actuallyadditions:laser_relay_fluids`,
                    count: 2
                },
                [
                    `kubejs:dark_steel_plate`,
                    `${mi}not_gate`,
                    `kubejs:dark_steel_plate`,
                    `actuallyadditions:advanced_coil`,
                    `actuallyadditions:advanced_coil`,
                    `kubejs:dark_steel_plate`,
                    `${mi}not_gate`,
                    `kubejs:dark_steel_plate`
                ],
                {
                    fluid: `${mi}molten_redstone`,
                    amount: 500
                },
                30,
                'laser_relay_fluids'
            ],
            [
                {
                    id: `actuallyadditions:laser_relay_item`,
                    count: 2
                },
                [
                    `kubejs:dark_steel_plate`,
                    `${mi}and_gate`,
                    `kubejs:dark_steel_plate`,
                    `actuallyadditions:advanced_coil`,
                    `actuallyadditions:advanced_coil`,
                    `kubejs:dark_steel_plate`,
                    `${mi}and_gate`,
                    `kubejs:dark_steel_plate`
                ],
                {
                    fluid: `${mi}molten_redstone`,
                    amount: 500
                },
                30,
                'laser_relay_item'
            ],
            [
                {
                    id: `enderio:void_chassis`,
                },
                [
                    `${mi}steel_plate`,
                    `kubejs:steel_bars`,
                    `${mi}steel_plate`,
                    `kubejs:steel_bars`,
                    `kubejs:steel_bars`,
                    `${mi}steel_plate`,
                    `${mi}advanced_machine_hull`,
                    `${mi}steel_plate`
                ],
                {
                    fluid: `kubejs:molten_ender`,
                    amount: 500
                },
                60,
                'void_chassis'
            ],
            [
                {
                    id: 'industrialforegoing:machine_frame_simple'
                },
                [
                    'industrialforegoing:plastic',
                    'industrialforegoing:machine_frame_pity',
                    'industrialforegoing:plastic',
                    `${mi}aluminum_double_ingot`,
                    `${mi}aluminum_double_ingot`,
                    'kubejs:enori_gear',
                    `${mi}basic_machine_hull`,
                    'kubejs:enori_gear'
                ],
                {
                    fluid: `kubejs:molten_plastic`,
                    amount: 500
                },
                20,
                'machine_frame_simple'
            ],
            [
                {
                    id: 'industrialforegoing:machine_frame_advanced'
                },
                [
                    'kubejs:empowered_enori_plate',
                    'industrialforegoing:machine_frame_simple',
                    'kubejs:empowered_enori_plate',
                    `kubejs:empowered_pink_slime`,
                    `kubejs:empowered_pink_slime`,
                    `${mi}large_motor`,
                    `${mi}advanced_machine_hull`,
                    `${mi}large_motor`
                ],
                {
                    fluid: `productivemetalworks:molten_ancient_debris`,
                    amount: 600
                },
                30,
                'machine_frame_advanced'
            ],
            [
                {
                    id: 'industrialforegoing:machine_frame_supreme'
                },
                [
                    `${mi}iridium_plate`,
                    'industrialforegoing:machine_frame_advanced',
                    `${mi}iridium_plate`,
                    `actuallyadditions:ender_star`,
                    `actuallyadditions:ender_star`,
                    `${mi}large_advanced_motor`,
                    `${mi}turbo_machine_hull`,
                    `${mi}large_advanced_motor`
                ],
                {
                    fluid: `industrialforegoing:ether_gas`,
                    amount: 500
                },
                60,
                'machine_frame_supreme'
            ],
            [
                {
                    id: 'kubejs:mycelial_frame'
                },
                [
                    `kubejs:ultimate_motor`,
                    `${mi}singularity`,
                    `kubejs:ultimate_motor`,
                    `kubejs:ultimate_robot_arm`,
                    `kubejs:ultimate_robot_arm`,
                    `kubejs:ultimate_motor`,
                    'industrialforegoing:machine_frame_supreme',
                    `kubejs:ultimate_motor`
                ],
                {
                    fluid: `${mi}helium_plasma`,
                    amount: 250
                },
                60,
                'mycelial_frame'
            ],
            [
                {
                    id: 'industrialforegoing:mob_duplicator'
                },
                [
                    `${mi}processing_unit`,
                    'industrialforegoing:machine_frame_supreme',
                    `${mi}processing_unit`,
                    `enderio:soul_vial`,
                    `enderio:soul_vial`,
                    `${mi}processing_unit`,
                    'industrialforegoing:machine_frame_supreme',
                    `${mi}processing_unit`
                ],
                {
                    fluid: `enderio:fluid_nutrient_distillation_still`,
                    amount: 500
                },
                120,
                'mob_duplicator'
            ],
            [
                {
                    id: `enderio:ensouled_chassis`,
                },
                [
                    `kubejs:soularium_plate`,
                    `kubejs:soularium_gear`,
                    `kubejs:soularium_plate`,
                    `enderio:soul_chain`,
                    `enderio:soul_chain`,
                    `kubejs:soularium_plate`,
                    `enderio:void_chassis`,
                    `kubejs:soularium_plate`
                ],
                {
                    fluid: `kubejs:polytetrafluoroethylene`,
                    amount: 576
                },
                80,
                'ensouled_chassis'
            ],
            [
                {
                    id: `industrialforegoing:infinity_drill`,
                },
                [
                    `industrialforegoing:range_addon_tier_11`,
                    `extended_industrialization:electric_mining_drill`,
                    `industrialforegoing:range_addon_tier_11`,
                    `${mi}processing_unit`,
                    `${mi}processing_unit`,
                    `${mi}large_advanced_motor`,
                    `industrialforegoing:machine_frame_supreme`,
                    `${mi}large_advanced_motor`
                ],
                {
                    fluid: `kubejs:molten_iridium`,
                    amount: 1000
                },
                200,
                'infinity_drill'
            ],
            [
                {
                    id: `industrialforegoing:infinity_saw`,
                },
                [
                    `industrialforegoing:range_addon_tier_11`,
                    `extended_industrialization:electric_chainsaw`,
                    `industrialforegoing:range_addon_tier_11`,
                    `${mi}processing_unit`,
                    `${mi}processing_unit`,
                    `${mi}large_advanced_motor`,
                    `industrialforegoing:machine_frame_supreme`,
                    `${mi}large_advanced_motor`
                ],
                {
                    fluid: `kubejs:molten_iridium`,
                    amount: 1000
                },
                200,
                'infinity_saw'
            ],
            [
                {
                    id: `industrialforegoing:infinity_hammer`,
                },
                [
                    `industrialforegoing:range_addon_tier_11`,
                    `extended_industrialization:nano_saber`,
                    `industrialforegoing:range_addon_tier_11`,
                    `${mi}processing_unit`,
                    `${mi}processing_unit`,
                    `${mi}large_advanced_motor`,
                    `industrialforegoing:machine_frame_supreme`,
                    `${mi}large_advanced_motor`
                ],
                {
                    fluid: `kubejs:molten_iridium`,
                    amount: 1000
                },
                200,
                'infinity_hammer'
            ],
            [
                {
                    id: `industrialforegoing:infinity_trident`,
                },
                [
                    `industrialforegoing:range_addon_tier_11`,
                    `trident`,
                    `industrialforegoing:range_addon_tier_11`,
                    `${mi}processing_unit`,
                    `${mi}processing_unit`,
                    `${mi}large_advanced_motor`,
                    `industrialforegoing:machine_frame_supreme`,
                    `${mi}large_advanced_motor`
                ],
                {
                    fluid: `kubejs:molten_iridium`,
                    amount: 1000
                },
                200,
                'infinity_trident'
            ],
            [
                {
                    id: `industrialforegoing:infinity_backpack`,
                },
                [
                    `kubejs:iridium_rotor`,
                    `sophisticatedbackpacks:netherite_backpack`,
                    `kubejs:iridium_rotor`,
                    `storagedrawers:controller`,
                    `storagedrawers:controller`,
                    `kubejs:iridium_rotor`,
                    `industrialforegoing:machine_frame_supreme`,
                    `kubejs:iridium_rotor`
                ],
                {
                    fluid: `kubejs:molten_iridium`,
                    amount: 1000
                },
                200,
                'infinity_backpack'
            ],
            [
                {
                    id: `industrialforegoing:infinity_launcher`,
                },
                [
                    `industrialforegoing:range_addon_tier_11`,
                    `bow`,
                    `industrialforegoing:range_addon_tier_11`,
                    `${mi}processing_unit`,
                    `${mi}processing_unit`,
                    `${mi}large_advanced_motor`,
                    `industrialforegoing:machine_frame_supreme`,
                    `${mi}large_advanced_motor`
                ],
                {
                    fluid: `kubejs:molten_iridium`,
                    amount: 1000
                },
                200,
                'infinity_launcher'
            ],
            [
                {
                    id: `industrialforegoing:infinity_nuke`,
                },
                [
                    `${mi}nuke`,
                    `${mi}nuke`,
                    `${mi}nuke`,
                    `${mi}processing_unit`,
                    `${mi}processing_unit`,
                    `${mi}large_advanced_motor`,
                    `industrialforegoing:machine_frame_supreme`,
                    `${mi}large_advanced_motor`
                ],
                {
                    fluid: `kubejs:molten_iridium`,
                    amount: 1000
                },
                200,
                'infinity_nuke'
            ],
            [
                {
                    id: `${mi}cupronickel_coil`,
                },
                [
                    `${mi}cupronickel_cable`,
                    `${mi}cupronickel_cable`,
                    `${mi}cupronickel_cable`,
                    `${mi}cupronickel_cable`,
                    `${mi}cupronickel_cable`,
                    `${mi}cupronickel_cable`,
                    `${mi}cupronickel_cable`,
                    `${mi}cupronickel_cable`
                ],
                {
                    fluid: `productivemetalworks:molten_steel`,
                    amount: 90
                },
                10,
                'cupronickel_coil'
            ],
            [
                {
                    id: `${mi}kanthal_coil`,
                },
                [
                    `${mi}kanthal_cable`,
                    `${mi}kanthal_cable`,
                    `${mi}kanthal_cable`,
                    `${mi}kanthal_cable`,
                    `${mi}kanthal_cable`,
                    `${mi}kanthal_cable`,
                    `${mi}kanthal_cable`,
                    `${mi}kanthal_cable`
                ],
                {
                    fluid: `kubejs:molten_aluminum`,
                    amount: 90
                },
                10,
                'kanthal_coil'
            ],
            [
                {
                    id: `kubejs:nichrome_coil`,
                },
                [
                    `${mi}nichrome_cable`,
                    `${mi}nichrome_cable`,
                    `${mi}nichrome_cable`,
                    `${mi}nichrome_cable`,
                    `${mi}nichrome_cable`,
                    `${mi}nichrome_cable`,
                    `${mi}nichrome_cable`,
                    `${mi}nichrome_cable`
                ],
                {
                    fluid: `kubejs:molten_stainless_steel`,
                    amount: 180
                },
                20,
                'nichrome_coil'
            ],
            [
                {
                    id: `kubejs:tungstensteel_coil`,
                },
                [
                    `${mi}tungstensteel_cable`,
                    `${mi}tungstensteel_cable`,
                    `${mi}tungstensteel_cable`,
                    `${mi}tungstensteel_cable`,
                    `${mi}tungstensteel_cable`,
                    `${mi}tungstensteel_cable`,
                    `${mi}tungstensteel_cable`,
                    `${mi}tungstensteel_cable`
                ],
                {
                    fluid: `kubejs:molten_platinum`,
                    amount: 180
                },
                20,
                'tungstensteel_coil'
            ],
            [
                {
                    id: `${mi}superconductor_coil`,
                },
                [
                    `${mi}superconductor_cable`,
                    `${mi}superconductor_cable`,
                    `${mi}superconductor_cable`,
                    `${mi}superconductor_cable`,
                    `${mi}superconductor_cable`,
                    `${mi}superconductor_cable`,
                    `${mi}superconductor_cable`,
                    `${mi}superconductor_cable`
                ],
                {
                    fluid: `kubejs:molten_iridium`,
                    amount: 180
                },
                120,
                'superconductor_coil'
            ],
            [
                {
                    id: `kubejs:copper_coil`,
                },
                [
                    `${mi}copper_cable`,
                    `${mi}copper_cable`,
                    `${mi}copper_cable`,
                    `${mi}copper_cable`,
                    `${mi}copper_cable`,
                    `${mi}copper_cable`,
                    `${mi}copper_cable`,
                    `${mi}copper_cable`
                ],
                {
                    fluid: `productivemetalworks:molten_iron`,
                    amount: 180
                },
                10,
                'copper_coil'
            ],
            [
                {
                    id: `kubejs:aluminum_coil`,
                },
                [
                    `${mi}aluminum_cable`,
                    `${mi}aluminum_cable`,
                    `${mi}aluminum_cable`,
                    `${mi}aluminum_cable`,
                    `${mi}aluminum_cable`,
                    `${mi}aluminum_cable`,
                    `${mi}aluminum_cable`,
                    `${mi}aluminum_cable`
                ],
                {
                    fluid: `kubejs:molten_plastic`,
                    amount: 200
                },
                20,
                'aluminum_coil'
            ],
            [
                {
                    id: `kubejs:annealed_copper_coil`,
                },
                [
                    `${mi}annealed_copper_cable`,
                    `${mi}annealed_copper_cable`,
                    `${mi}annealed_copper_cable`,
                    `${mi}annealed_copper_cable`,
                    `${mi}annealed_copper_cable`,
                    `${mi}annealed_copper_cable`,
                    `${mi}annealed_copper_cable`,
                    `${mi}annealed_copper_cable`
                ],
                {
                    fluid:`productivemetalworks:molten_gold`,
                    amount: 180
                },
                20,
                'annealed_copper_coil'
            ],
            [
                {
                    id: `kubejs:electrum_coil`,
                },
                [
                    `${mi}electrum_cable`,
                    `${mi}electrum_cable`,
                    `${mi}electrum_cable`,
                    `${mi}electrum_cable`,
                    `${mi}electrum_cable`,
                    `${mi}electrum_cable`,
                    `${mi}electrum_cable`,
                    `${mi}electrum_cable`
                ],
                {
                    fluid: `productivemetalworks:molten_silver`,
                    amount: 180
                },
                20,
                'electrum_coil'
            ]
        ];

        dissolutionChamber.forEach(recipe => {
            e.custom({
                type: "industrialforegoing:dissolution_chamber",
                input: Ingredient.of(recipe[1]),
                inputFluid: recipe[2],
                output: recipe[0],
                processingTime: recipe[3] * tickMultiplier
            }).id(`kubejs:industrialforegoing/dissolution_chamber/${recipe[4]}`)
        });

        e.forEachRecipe({output: /industrialforegoing:mycelial/, not: {output: 'industrialforegoing:mycelial_reactor'}}, r => {
            let input = r.originalRecipeIngredients
            let output = r.originalRecipeResult

            e.custom({
                type: "industrialforegoing:dissolution_chamber",
                input: [
                    Ingredient.of(input[0]),
                    Ingredient.of(input[4]),
                    Ingredient.of(input[0]),
                    Ingredient.of(input[0]),
                    Ingredient.of(input[0]),
                    Ingredient.of(`${mi}quantum_circuit`),
                    Ingredient.of(`kubejs:mycelial_frame`),
                    Ingredient.of(`${mi}quantum_circuit`)
                ],
                inputFluid: {
                    fluid: `${mi}helium_plasma`,
                    amount: 300
                },
                output: output,
                processingTime: 30 * tickMultiplier
            }).id(r.getId())
        });

        const laserDrillOre = [
            [
                {item: 'kubejs:sulfur_ore'},
                'industrialforegoing:yellow_laser_lens',
                [
                    {
                    "biome_filter": {
                        "blacklist": [],
                        "whitelist": []
                    },
                    "depth_max": 10,
                    "depth_min": 5,
                    "dimension_filter": {
                        "blacklist": [
                        ],
                        "whitelist": [
                            "minecraft:the_nether"
                        ]
                    },
                    "weight": 6
                    },
                    {
                    "biome_filter": {
                        "blacklist": [],
                        "whitelist": []
                    },
                    "depth_max": 255,
                    "depth_min": 0,
                    "dimension_filter": {
                        "blacklist": [
                        ],
                        "whitelist": [
                            "minecraft:the_nether"
                        ]
                    },
                    "weight": 1
                    }
                ],
                'sulfur'
            ],
            [
                {item: 'kubejs:mysterious_chunk'},
                'kubejs:nacreous_laser_lens',
                [
                    {
                    "biome_filter": {
                        "blacklist": [],
                        "whitelist": []
                    },
                    "depth_max": -60,
                    "depth_min": -64,
                    "dimension_filter": {
                        "blacklist": [],
                        "whitelist": [
                        "minecraft:overworld"
                        ]
                    },
                    "weight": 1
                    }
                ],
                'mysterious_chunk'
            ]
        ];

        laserDrillOre.forEach(recipe => {
            e.custom({
                type: "industrialforegoing:laser_drill_ore",
                catalyst: Ingredient.of(recipe[1]),
                output: recipe[0],
                rarity: recipe[2]
            }).id(`kubejs:industrialforegoing/laser_drill_ore/${recipe[3]}`)
        })

        const laserDrillFluid = [
            [
                {
                    fluid: "industrialforegoing:ether_gas",
                    "amount": 5
                },
                'kubejs:absorbing_laser_lens',
                {
                    "data": {},
                    "display": "",
                    "entity": {
                    "type": "minecraft:wither"
                    }
                },
                [
                    {
                        "biome_filter": {
                            "blacklist": [],
                            "whitelist": []
                        },
                        "depth_max": 256,
                        "depth_min": -64,
                        "dimension_filter": {
                            "blacklist": [],
                            "whitelist": [
                                "minecraft:the_end"
                            ]
                        },
                        "weight": 8
                    }
                ],
                'ether'
            ]
        ];

        laserDrillFluid.forEach(recipe => {
            e.custom({
                type: "industrialforegoing:laser_drill_fluid",
                catalyst: Ingredient.of(recipe[1]),
                entity_data: recipe[2],
                output: recipe[0],
                rarity: recipe[3]
            }).id(`kubejs:industrialforegoing/laser_drill_fluid/${recipe[4]}`)
        })
    };

    function enderio() {
        const alloySmelting = [
            [
                {
                    id: 'enderio:energetic_alloy_ingot'
                },
                [
                    'kubejs:red_alloy_ingot',
                    'gold_ingot',
                    'glowstone_dust'
                ],
                6000,
                0.3,
                'energetic_alloy'
            ],
            [
                {
                    id: 'enderio:pulsating_alloy_ingot'
                },
                [
                    `${mi}aluminum_ingot`,
                    'ae2:ender_dust',
                    'actuallyadditions:diamatine_crystal'
                ],
                8000,
                0.3,
                'pulsating_alloy'
            ],
            [
                {
                    id: 'enderio:redstone_alloy_ingot'
                },
                [
                    'kubejs:red_alloy_ingot',
                    `${mi}silicon_ingot`
                ],
                5000,
                0.3,
                'redstone_alloy_ingot'
            ],
            [
                {
                    id: 'enderio:soularium_ingot'
                },
                [
                    '#minecraft:soul_fire_base_blocks',
                    `kubejs:cloggrum_steel_ingot`
                ],
                5000,
                0.3,
                'soularium_ingot'
            ],
            [
                {
                    id: 'enderio:dark_steel_ingot'
                },
                [
                    `${mi}steel_ingot`,
                    'obsidian',
                    'kubejs:black_quartz_dust'
                ],
                7000,
                0.3,
                'dark_steel'
            ],
            [
                {
                    id: 'enderio:end_steel_ingot'
                },
                [
                    `enderio:dark_steel_ingot`,
                    'end_stone',
                    'obsidian'
                ],
                10000,
                0.3,
                'end_steel_ingot'
            ],
            [
                {
                    id: 'extendedae:entro_ingot'
                },
                [
                    `enderio:vibrant_alloy_ingot`,
                    `extendedae:entro_dust`,
                    `actuallyadditions:empowered_emeradic_crystal`
                ],
                50000,
                0.5,
                'entro_ingot'
            ],
            [
                {
                    id: `${mi}battery_alloy_ingot`,
                    count: 2
                },
                [
                    [`${mi}lead_ingot`, `${mi}lead_dust`],
                    [`${mi}antimony_ingot`, `${mi}antimony_dust`]
                ],
                2000,
                0.5,
                'battery_alloy'
            ],
            [
                {
                    id: `${mi}cupronickel_ingot`,
                    count: 2
                },
                [
                    [`copper_ingot`, `${mi}copper_dust`],
                    [`${mi}nickel_ingot`, `${mi}nickel_dust`]
                ],
                2000,
                0.5,
                'cupronickel_ingot'
            ],
            [
                {
                    id: `${mi}electrum_ingot`,
                    count: 2
                },
                [
                    [`gold_ingot`, `${mi}gold_dust`],
                    [`${mi}silver_ingot`, `${mi}silver_dust`]
                ],
                2000,
                0.5,
                'electrum_ingot'
            ],
            [
                {
                    id: `enderio:conductive_alloy_ingot`
                },
                [
                    'copper_ingot',
                    `${mi}ruby_dust`
                ],
                3000,
                0.5,
                'conductive_ingot'
            ],
            [
                {
                    id: `enderio:vibrant_alloy_ingot`
                },
                [
                    'enderio:energetic_alloy_ingot',
                    `ae2:ender_dust`,
                    'glowstone'
                ],
                5000,
                0.5,
                'vibrant_alloy_ingot'
            ]
        ];
        alloySmelting.forEach(recipe => {
            e.custom({
                "type": "enderio:alloy_smelting",
                "energy": recipe[2],
                "experience": recipe[3],
                "inputs": Ingredient.of(recipe[1]),
                "output": recipe[0]
            }).id(`kubejs:enderio/alloy_smelting/${recipe[4]}`)
        });

        e.custom({
            "type": "enderio:alloy_smelting",
            "energy": 2000,
            "experience": 0.5,
            "inputs": [
                {item: 'copper_ingot'},
                {item: 'redstone', count: 2}
            ],
            "output": {id: 'kubejs:red_alloy_ingot'}
        }).id(`kubejs:enderio/alloy_smelting/red_alloy`)

        e.custom({
            "type": "enderio:alloy_smelting",
            "energy": 2000,
            "experience": 0.5,
            "inputs": [
                {item: `${mi}copper_dust`},
                {item: 'redstone', count: 2}
            ],
            "output": {id: 'kubejs:red_alloy_ingot'}
        }).id(`kubejs:enderio/alloy_smelting/red_alloy_alt`)

        e.custom({
            "type": "enderio:alloy_smelting",
            "energy": 2000,
            "experience": 0.5,
            "inputs": [
                {item: 'copper_ingot', count: 3},
                {item: `${mi}tin_ingot`, count: 1}
            ],
            "output": {id: `${mi}bronze_ingot`, count: 4}
        }).id(`kubejs:enderio/alloy_smelting/bronze`)

        e.custom({
            "type": "enderio:alloy_smelting",
            "energy": 2000,
            "experience": 0.5,
            "inputs": [
                {item: 'iron_ingot', count: 2},
                {item: `${mi}nickel_ingot`, count: 1}
            ],
            "output": {id: `${mi}invar_ingot`, count: 3}
        }).id(`kubejs:enderio/alloy_smelting/invar`)

        const binding = [
            {
                output: {
                    id: 'kubejs:revived_contractor'
                },
                input: 'enderio:skeletal_contractor',
                entity_type: 'minecraft:skeleton',
                energy: 51200,
                xp: 4,
                cic: false,
                id: 'revived_contractor'
            },
            {
                output: {
                    id: 'kubejs:flaming_crystal'
                },
                input: 'enderio:pulsating_crystal',
                entity_type: 'minecraft:blaze',
                energy: 51200,
                xp: 8,
                cic: false,
                id: 'flaming_crystal'
            }
        ];

        binding.forEach(recipe => {
            e.custom({
                "type": "enderio:soul_binding",
                "copyInputComponents": recipe.cic,
                "entity_type": recipe.entity_type,
                "energy": recipe.energy,
                "experience": recipe.xp,
                "input": Ingredient.of(recipe.input),
                "output": recipe.output
            }).id(`kubejs:enderio/soul_binding/${recipe.id}`)
        });

        const SAG = [
            {
                input: 'coal',
                energy: 2500,
                id: 'coal',
                outputs: [
                    {
                        item: {
                            count: 1,
                            id: `${mi}coal_dust`
                        }
                    },
                    {
                        chance: 0.1,
                        item: {
                            count: 1,
                            id: `${mi}sulfur_dust`
                        }
                    }
                ]
            },
            {
                input: 'nether_quartz_ore',
                energy: 2500,
                id: 'quartz',
                outputs: [
                    {
                        item: {
                            count: 2,
                            id: 'quartz'
                        }
                    },
                    {
                        chance: 0.1,
                        item: {
                            count: 1,
                            id: `${mi}quartz_dust`
                        }
                    }
                ]
            }
        ];
        SAG.forEach(prop => {
            e.custom({
                "type": "enderio:sag_milling",
                "energy": prop.energy,
                "input": Ingredient.of(prop.input),
                "outputs": prop.outputs
            }).id(`kubejs:enderio/sag_milling/${prop.id}`)
        });
    };

    function actuallyadditions() {
        const empowering = [
            [
                'actuallyadditions:empowered_restonia_crystal',
                'actuallyadditions:restonia_crystal',
                [
                    'kubejs:netherite_scrap_chunks',
                    'kubejs:empowered_pink_slime',
                    'blaze_rod',
                    'kubejs:redstone_alloy_wire'
                ],
                10365735,
                30000,
                8,
                'empowered_restonia_crystal'
            ],
            [
                'actuallyadditions:empowered_palis_crystal',
                'actuallyadditions:palis_crystal',
                [
                    'enderio:photovoltaic_composite',
                    'kubejs:empowered_pink_slime',
                    'prismarine_shard',
                    `${mi}aluminum_cable`
                ],
                2437779,
                20000,
                8,
                'empowered_palis_crystal'
            ],
            [
                'actuallyadditions:empowered_void_crystal',
                'actuallyadditions:void_crystal',
                [
                    'enderio:withering_powder',
                    'kubejs:empowered_pink_slime',
                    'enderio:grains_of_infinity',
                    `enderio:dark_steel_ingot`
                ],
                3355443,
                20000,
                8,
                'empowered_void_crystal'
            ],
            [
                'actuallyadditions:empowered_enori_crystal',
                'actuallyadditions:enori_crystal',
                [
                    'wind_charge',
                    'kubejs:empowered_pink_slime',
                    'industrialforegoing:plastic',
                    `${mi}stainless_steel_rod_magnetic`
                ],
                13421772,
                30000,
                8,
                'empowered_enori_crystal'
            ],
            [
                'actuallyadditions:empowered_diamatine_crystal',
                'actuallyadditions:diamatine_crystal',
                [
                    'echo_shard',
                    'kubejs:empowered_pink_slime_ingot',
                    `${mi}aluminum_rotor`,
                    `enderio:pulsating_crystal`
                ],
                6522834,
                50000,
                15,
                'empowered_diamatine_crystal'
            ],
            [
                'actuallyadditions:empowered_emeradic_crystal',
                'actuallyadditions:emeradic_crystal',
                [
                    'experience_bottle',
                    'kubejs:empowered_pink_slime_ingot',
                    `kubejs:pulsating_alloy_wire`,
                    `enderio:vibrant_crystal`
                ],
                3492376,
                40000,
                15,
                'empowered_emeradic_crystal'
            ],
            [
                'echo_shard',
                'amethyst_shard',
                [
                    'sculk',
                    'sculk',
                    `sculk`,
                    `sculk`
                ],
                6702,
                25000,
                15,
                'echo_shard'
            ],
            [
                'kubejs:nacreous_laser_lens',
                'industrialforegoing:white_laser_lens',
                [
                    'actuallyadditions:empowered_restonia_crystal_block',
                    'actuallyadditions:empowered_palis_crystal_block',
                    'actuallyadditions:empowered_diamatine_crystal_block',
                    'actuallyadditions:empowered_emeradic_crystal_block'
                ],
                16777215,
                1000000,
                60,
                'nacreous_laser_lens'
            ]
        ];

        empowering.forEach(recipe => {
            e.custom({
                type: "actuallyadditions:empowering",
                base: Ingredient.of(recipe[1]),
                color: recipe[3],
                modifiers: Ingredient.of(recipe[2]),
                result: Item.of(recipe[0]),
                energy: recipe[4],
                time: recipe[5] * tickMultiplier
            }).id(`kubejs:actuallyadditions/empowerinz/${recipe[6]}`);

            let inputs = [
                {
                    item: recipe[1]
                }
            ];

            recipe[2].forEach(input => {
                inputs.push({item: input});
            });

            e.custom({
                type: `${mi}industrial_empowerer`,
                item_inputs: inputs,
                item_outputs: [
                    {
                        item: recipe[0]
                    }
                ],
                eu: 256,
                duration: 5 * tickMultiplier
            }).id(`kubejs:mi/industrial_empowerer/${recipe[6]}`)
        })

        const atomic_reconstructor = [
            [
                'actuallyadditions:void_crystal',
                `${mi}coke`,
                60,
                'void_crystal'
            ],
            [
                'actuallyadditions:void_crystal_block',
                `${mi}coke_block`,
                60,
                'void_crystal_block'
            ],
            // [
            //     'kubejs:quartzite_crystal',
            //     'quartz',
            //     80,
            //     'quartzite'
            // ]
        ];

        atomic_reconstructor.forEach(recipe => {
            e.custom({
                type: 'actuallyadditions:laser',
                energy: recipe[2],
                ingredient: Ingredient.of(recipe[1]),
                result: {id: recipe[0]}
            }).id(`kubejs:actuallyadditions/laser/${recipe[3]}`)
        });
    };

    function ae2() {
        const assembler = [
            {
                output: 'megacells:cell_component_16m',
                id: 'cell_component_16m',
                input: [
                    {
                        amount:3,
                        ingredient: {
                            item: 'megacells:cell_component_4m'
                        }
                    },
                    {
                        amount:4,
                        ingredient: {
                            item: 'megacells:accumulation_processor'
                        }
                    },
                    {
                        amount:3,
                        ingredient: {
                            item: `${mi}quantum_circuit`
                        }
                    },
                    {
                        amount:6,
                        ingredient: {
                            item: `${mi}superconductor_cable`
                        }
                    }
                ]
            },
            {
                output: 'megacells:cell_component_64m',
                id: 'cell_component_64m',
                input: [
                    {
                        amount:3,
                        ingredient: {
                            item: 'megacells:cell_component_16m'
                        }
                    },
                    {
                        amount:6,
                        ingredient: {
                            item: 'megacells:accumulation_processor'
                        }
                    },
                    {
                        amount:4,
                        ingredient: {
                            item: 'ae2:singularity'
                        }
                    },
                    {
                        amount:3,
                        ingredient: {
                            item: `${mi}quantum_circuit`
                        }
                    },
                    {
                        amount:8,
                        ingredient: {
                            item: `${mi}superconductor_cable`
                        }
                    }
                ]
            },
            {
                output: 'megacells:cell_component_256m',
                id: 'cell_component_256m',
                input: [
                    {
                        amount:3,
                        ingredient: {
                            item: 'megacells:cell_component_64m'
                        }
                    },
                    {
                        amount:8,
                        ingredient: {
                            item: 'megacells:accumulation_processor'
                        }
                    },
                    {
                        amount:2,
                        ingredient: {
                            item: `${mi}singularity`
                        }
                    },
                    {
                        amount:3,
                        ingredient: {
                            item: `${mi}quantum_circuit`
                        }
                    },
                    {
                        amount:12,
                        ingredient: {
                            item: `${mi}superconductor_cable`
                        }
                    }
                ]
            },
            {
                output: 'megacells:mega_crafting_unit',
                id: 'mega_crafting_unit',
                input: [
                    {
                        amount:8,
                        ingredient: {
                            item: 'ae2:crafting_unit'
                        }
                    },
                    {
                        amount:2,
                        ingredient: {
                            item: 'ae2:singularity'
                        }
                    },
                    {
                        amount:6,
                        ingredient: {
                            item: 'megacells:accumulation_processor'
                        }
                    },
                    {
                        amount:2,
                        ingredient: {
                            item: `${mi}quantum_circuit`
                        }
                    },
                    {
                        amount:32,
                        ingredient: {
                            item: `ae2:fluix_smart_cable`
                        }
                    }
                ]
            },
            {
                output: 'extendedae:wireless_connect',
                id: 'wireless_connect',
                input: [
                    {
                        amount:1,
                        ingredient: {
                            item: 'extendedae:machine_frame'
                        }
                    },
                    {
                        amount:1,
                        ingredient: {
                            item: 'ae2:singularity'
                        }
                    },
                    {
                        amount:3,
                        ingredient: {
                            item: 'laserio:laser_node'
                        }
                    },
                    {
                        amount:4,
                        ingredient: {
                            item: `${mi}processing_unit`
                        }
                    },
                    {
                        amount:2,
                        ingredient: {
                            item: `ae2:wireless_receiver`
                        }
                    },
                    {
                        amount:3,
                        ingredient: {
                            item: `ae2:wireless_booster`
                        }
                    },
                    {
                        amount:4,
                        ingredient: {
                            tag: `ae2:smart_dense_cable`
                        }
                    }
                ]
            },
            {
                output: 'extendedae:ex_pattern_provider',
                id: 'ex_pattern_provider',
                input: [
                    {
                        amount:1,
                        ingredient: {
                            item: 'ae2:pattern_provider'
                        }
                    },
                    {
                        amount:1,
                        ingredient: {
                            item: 'ae2:singularity'
                        }
                    },
                    {
                        amount:3,
                        ingredient: {
                            item: 'ae2:capacity_card'
                        }
                    },
                    {
                        amount:4,
                        ingredient: {
                            item: `craftingstation:crafting_station`
                        }
                    },
                    {
                        amount:2,
                        ingredient: {
                            item: `extendedae:concurrent_processor`
                        }
                    },
                    {
                        amount:6,
                        ingredient: {
                            tag: `ae2:glass_cable`
                        }
                    },
                    {
                        amount:1,
                        ingredient: {
                            item: `${mi}quantum_circuit`
                        }
                    }
                ]
            },
            {
                output: 'extendedae:ex_molecular_assembler',
                id: 'ex_molecular_assembler',
                input: [
                    {
                        amount:4,
                        ingredient: {
                            item: 'ae2:molecular_assembler'
                        }
                    },
                    {
                        amount:1,
                        ingredient: {
                            item: 'ae2:singularity'
                        }
                    },
                    {
                        amount:4,
                        ingredient: {
                            item: `craftingstation:crafting_station`
                        }
                    },
                    {
                        amount:4,
                        ingredient: {
                            item: `extendedae:concurrent_processor`
                        }
                    },
                    {
                        amount:3,
                        ingredient: {
                            item: `ae2:engineering_processor`
                        }
                    },
                    {
                        amount:1,
                        ingredient: {
                            item: `ae2:speed_card`
                        }
                    },
                    {
                        amount:1,
                        ingredient: {
                            item: `${mi}quantum_circuit`
                        }
                    }
                ]
            },
            {
                output: 'appliede:emc_interface',
                id: 'emc_interface',
                fluid: {
                    amount: 500,
                    ingredient: {
                        fluid: `kubejs:aberration`
                    }
                },
                input: [
                    {
                        amount:1,
                        ingredient: {
                            item: 'extendedae:machine_frame'
                        }
                    },
                    {
                        amount:2,
                        ingredient: {
                            item: 'projecte:transmutation_tablet'
                        }
                    },
                    {
                        amount:4,
                        ingredient: {
                            item: `${mi}quantum_circuit`
                        }
                    },
                    {
                        amount:8,
                        ingredient: {
                            item: `extendedae:concurrent_processor`
                        }
                    }
                ]
            },
            {
                output: 'extended_industrialization:tesla_interdimensional_upgrade',
                id: 'tesla_interdimensional_upgrade',
                fluid: {
                    amount: 8000,
                    ingredient: {
                        fluid: `${mi}polyvinyl_chloride`
                    }
                },
                input: [
                    {
                        amount:12,
                        ingredient: {
                            item: 'extended_industrialization:superconductor_tesla_winding'
                        }
                    },
                    {
                        amount:8,
                        ingredient: {
                            item: `${mi}highly_advanced_upgrade`
                        }
                    },
                    {
                        amount:8,
                        ingredient: {
                            item: `${mi}processing_unit`
                        }
                    },
                    {
                        amount:4,
                        ingredient: {
                            item: `laserio:laser_node`
                        }
                    }
                ]
            },
            {
                output: 'megacells:sky_steel_ingot',
                id: 'sky_steel_ingot',
                fluid: {
                    amount: 90,
                    ingredient: {
                        fluid: `kubejs:molten_iridium`
                    }
                },
                input: [
                    {
                        amount:1,
                        ingredient: {
                            item: 'kubejs:meteorite_iron_ingot'
                        }
                    },
                    {
                        amount:8,
                        ingredient: {
                            item: `ae2:charged_certus_quartz_crystal`
                        }
                    }
                ]
            },
            {
                output: 'megacells:sky_bronze_ingot',
                id: 'sky_bronze_ingot',
                fluid: {
                    amount: 90,
                    ingredient: {
                        fluid: `kubejs:molten_iridium`
                    }
                },
                input: [
                    {
                        amount:1,
                        ingredient: {
                            item: `${mi}bronze_ingot`
                        }
                    },
                    {
                        amount:8,
                        ingredient: {
                            item: `ae2:charged_certus_quartz_crystal`
                        }
                    }
                ]
            }
        ];

        assembler.forEach(prop => {
            if (!prop.fluid) {
                e.custom({
                    type: "extendedae:crystal_assembler",
                    input_items: prop.input,
                    output: Item.of(prop.output),
            }).id(`kubejs:ae2/assembler/${prop.id}`)
            } else {
                e.custom({
                    type: "extendedae:crystal_assembler",
                    input_items: prop.input,
                    output: Item.of(prop.output),
                    input_fluid: prop.fluid
            }).id(`kubejs:ae2/assembler/${prop.id}`)
            }
            
        })

        const cutter = [
            {
                output: {
                    id: 'ae2:printed_engineering_processor',
                    count: 9
                },
                input: 'actuallyadditions:diamatine_crystal_block',
                energy: 10000,
                id: 'engineering_processor'
            },
            {
                output: {
                    id: 'ae2:printed_silicon',
                    count: 9
                },
                input: `${mi}silicon_block`,
                energy: 8000,
                id: 'printed_silicon'
            },
            {
                output: {
                    id: 'kubejs:printed_idea_processor',
                    count: 9
                },
                input: `${mi}chromium_block`,
                energy: 15000,
                id: 'printed_idea_processor'
            },
            {
                output: {
                    id: 'kubejs:printed_extensional_processor',
                    count: 9
                },
                input: `${mi}titanium_block`,
                energy: 15000,
                id: 'printed_extensional_processor'
            },
            {
                output: {
                    id: 'kubejs:printed_remote_processor',
                    count: 9
                },
                input: `kubejs:tungstensteel_block`,
                energy: 15000,
                id: 'printed_remote_processor'
            },
            {
                output: {
                    id: 'kubejs:printed_molecular_processor',
                    count: 9
                },
                input: `${mi}platinum_block`,
                energy: 15000,
                id: 'printed_molecular_processor'
            }
        ];

        cutter.forEach(prop => {
            e.custom(
                {
                    "type": "extendedae:circuit_cutter",
                    "energy": prop.energy,
                    "input": {
                        "ingredient": {item: prop.input}
                    },
                    "output": prop.output
                }
            ).id(`kubejs:circuit_cutter/${prop.id}`)
        });

        // assembler.forEach(prop => {
        //     e.custom(
        //         {
        //             "type": "extendedae:crystal_assembler",
        //             "input": prop.input,
        //             "output": prop.output
        //         }
        //     ).id(`kubejs:assembler/${prop.id}`)
        // });
    };

    function metalworks() {
        const alloying = [
            {
                result: Fluid.of('productivemetalworks:molten_bronze',4),
                fluids: [
                    {
                        fluid: 'productivemetalworks:molten_copper',
                        amount: 3
                    },
                    {
                        fluid: 'kubejs:molten_tin',
                        amount: 1
                    }
                ],
                speed: 5,
                id: 'molten_bronze'
            },
            {
                result: Fluid.of('productivemetalworks:molten_invar',3),
                fluids: [
                    {
                        fluid: 'productivemetalworks:molten_iron',
                        amount: 2
                    },
                    {
                        fluid: 'productivemetalworks:molten_nickel',
                        amount: 1
                    }
                ],
                speed: 5,
                id: 'molten_invar'
            },
            {
                result: Fluid.of('productivemetalworks:molten_electrum',2),
                fluids: [
                    {
                        fluid: 'productivemetalworks:molten_gold',
                        amount: 1
                    },
                    {
                        fluid: 'productivemetalworks:molten_silver',
                        amount: 1
                    }
                ],
                speed: 5,
                id: 'molten_electrum'
            }
        ];

        alloying.forEach(prop => {
            e.custom({
                "type": "productivemetalworks:fluid_alloying",
                fluids: prop.fluids,
                result: prop.result,
                speed: prop.speed
            }).id(`kubejs:productivemetalworks/fluid_alloying/${prop.id}`)
        });

        ores()

        function metalBlasting(fluid, input, temperature, id) {
            e.custom({
                "type": "productivemetalworks:item_melting",
                "ingredient": {
                    "tag": input
                },
                "maximum_temperature": 0,
                "minimum_temperature": temperature,
                "result": [
                    {
                        id: fluid[0],
                        amount: fluid[1]
                    }
                ]
            }).id(`kubejs:productivemetalworks/item_melting/${id}`)
        };

        const materialsToBlast = [
            ['aluminum', `kubejs:molten_aluminum`, 1000],
            ['tin', `kubejs:molten_tin`, 1000]
        ];

        materialsToBlast.forEach(recipe => {
            metalBlasting([recipe[1], 90], `c:ingots/${recipe[0]}`, recipe[2], `${recipe[0]}_ingot`)
            metalBlasting([recipe[1], 90], `c:plates/${recipe[0]}`, recipe[2], `${recipe[0]}_plate`)
            metalBlasting([recipe[1], 360], `c:gears/${recipe[0]}`, recipe[2], `${recipe[0]}_gear`)
            metalBlasting([recipe[1], 810], `c:storage_blocks/${recipe[0]}`, recipe[2], `${recipe[0]}_block`)
            metalBlasting([recipe[1], 45], `c:rods/${recipe[0]}`, recipe[2], `${recipe[0]}_rod`)
            metalBlasting([recipe[1], 10], `c:nuggets/${recipe[0]}`, recipe[2], `${recipe[0]}_nugget`)
            metalBlasting([recipe[1], 90], `c:dusts/${recipe[0]}`, recipe[2], `${recipe[0]}_dust`)
        });

        function ItemCasting(outputId, castId, consumeCastBool, fluid, recipeId) {
            e.custom({
                type: "productivemetalworks:item_casting",
                cast: Ingredient.of(castId),
                consume_cast: consumeCastBool,
                fluid: fluid,
                result: {
                    count: 1,
                    id: outputId
                }
            }).id(`kubejs:productivemetalworks/item_casting/${recipeId}`)
        };

        function BlockCasting(outputId, castId, consumeCastBool, fluid, recipeId) {
            e.custom({
                type: "productivemetalworks:block_casting",
                cast: Ingredient.of(castId),
                consume_cast: consumeCastBool,
                fluid: fluid,
                result: {
                    count: 1,
                    id: outputId
                }
            }).id(`kubejs:productivemetalworks/block_casting/${recipeId}`)
        };

        const ItemCastingArray = [
            [
                'bucket',
                'kubejs:bucket_cast',
                false,
                {
                    fluid: "productivemetalworks:molten_iron",
                    amount: 270
                },
                'bucket'
            ],
            [
                'bucket',
                'kubejs:bronze_bucket_cast',
                false,
                {
                    fluid: "productivemetalworks:molten_iron",
                    amount: 270
                },
                'bronze_cast_bucket'
            ],
            [
                'kubejs:bronze_bucket_cast',
                'kubejs:stone_bucket',
                true,
                {
                    fluid: "productivemetalworks:molten_bronze",
                    amount: 360
                },
                'bronze_bucket_cast'
            ],
            [
                'kubejs:bucket_cast',
                'kubejs:stone_bucket',
                true,
                {
                    fluid: "productivemetalworks:molten_steel",
                    amount: 360
                },
                'bucket_cast'
            ]
        ];

        ItemCastingArray.forEach(recipe => {
            ItemCasting(recipe[0],recipe[1],recipe[2],recipe[3],recipe[4])
        });

        const BlockCastingArray = [
            [
                `${mi}bronze_plated_bricks`,
                `${mi}fire_clay_bricks`,
                true,
                {
                    fluid: "productivemetalworks:molten_bronze",
                    amount: 720
                },
                'bronze_plated_bricks'
            ],
            [
                `extended_industrialization:steel_plated_bricks`,
                `${mi}fire_clay_bricks`,
                true,
                {
                    fluid: "productivemetalworks:molten_steel",
                    amount: 720
                },
                'steel_plated_bricks'
            ]
        ];

        BlockCastingArray.forEach(recipe => {
            BlockCasting(recipe[0],recipe[1],recipe[2],recipe[3],recipe[4])
        });

        global.partsAndCasts.forEach(property => {
            let {id, materials, fluidAmount} = property;

            let ToolMaterialOutput;

            materials.forEach(material => {
                switch (material) {
                    case 'flint':
                        e.shaped(
                            `kubejs:${material}_${id}`,
                            [' b','c ','  '],
                            {
                                b: `kubejs:${material}_${id}_head`,
                                c: 'kubejs:tool_rod',
                            }
                        ).id(`kubejs:tools/${material}_${id}_alt`);

                        e.recipes.modern_industrialization.packer(2, 5 * 20)
                            .itemIn(`kubejs:${material}_${id}_head`)
                            .itemIn('kubejs:tool_rod')
                            .itemOut(`kubejs:${material}_${id}`)
                            .id(`kubejs:tools/packer/${ToolMaterialOutput}_${id}`)
                    break;
                    default:
                        ItemCasting(
                            `kubejs:${material}_${id}_head`, 
                            `kubejs:${id}_head_cast`, 
                            false, 
                            {
                                fluid: `productivemetalworks:molten_${material}`,
                                amount: fluidAmount
                            },
                            `${material}_${id}_head`
                        );

                        ItemCasting(
                            `kubejs:${material}_${id}_head`, 
                            `kubejs:bronze_${id}_head_cast`, 
                            false, 
                            {
                                fluid: `productivemetalworks:molten_${material}`,
                                amount: fluidAmount
                            },
                            `${material}_${id}_head_with_bronze_cast`
                        );

                        if (material == 'gold') {
                            ToolMaterialOutput = 'golden'
                        } else ToolMaterialOutput = material;

                        e.shaped(
                            `${ToolMaterialOutput}_${id}`,
                            [' b','c ','  '],
                            {
                                b: `kubejs:${material}_${id}_head`,
                                c: 'kubejs:tool_rod',
                            }
                        ).id(`kubejs:tools/${material}_${id}`);

                        e.recipes.modern_industrialization.packer(2, 5 * 20)
                            .itemIn(`kubejs:${material}_${id}_head`)
                            .itemIn('kubejs:tool_rod')
                            .itemOut(`${ToolMaterialOutput}_${id}`)
                            .id(`kubejs:tools/packer/${ToolMaterialOutput}_${id}`)
                };
            });

            ItemCasting(
                `kubejs:${id}_head_cast`,
                `#kubejs:${id}_heads`, 
                true, 
                {
                    fluid: `productivemetalworks:molten_steel`,
                    amount: 360
                },
                `${id}_head_cast`
            );

            ItemCasting(
                `kubejs:bronze_${id}_head_cast`,
                `#kubejs:${id}_heads`, 
                true, 
                {
                    fluid: `productivemetalworks:molten_bronze`,
                    amount: 360
                },
                `bronze_${id}_head_cast`
            );
        });

        e.forEachRecipe({type: 'productivemetalworks:item_casting'}, r => {
            let cast = r.json.get('cast');
            let castKey = Object.values(JSON.parse(cast)).toString();
            let consumeCast = r.json.get('consume_cast')
            let fluid = r.json.get('fluid')
            let result = r.json.get('result');
            let id = r.getId();
            let NewCast;

            let castInput = (input) => castKey.includes(input);

            if (castInput('productivemetalworks:ingot_cast')) NewCast = 'kubejs:bronze_ingot_cast';
            if (castInput('productivemetalworks:gem_cast')) NewCast = 'kubejs:bronze_gem_cast';
            if (castInput('productivemetalworks:nugget_cast')) NewCast = 'kubejs:bronze_nugget_cast';

            if (castInput('productivemetalworks:rod_cast') || 
                castInput('productivemetalworks:gear_cast') || 
                castInput('productivemetalworks:plate_cast')
            ) e.remove(r.getId());

            if (!id.match(/productivemetalworks:casting\/(ingots|nuggets)\/modern_industrialization\/(aluminum|tin|platinum|uranium)/)) {
                if (NewCast) {
                e.custom({
                        "type": "productivemetalworks:item_casting",
                        "cast": {
                            "item": NewCast
                        },
                        "consume_cast": consumeCast,
                        "fluid": fluid,
                        "result": result
                    }).id(`${id.replace(':','_')}_with_bronze_cast`)
                };
            }

            let resultKey = Object.values(JSON.parse(result)).toString();
            let newResult;

            let castOutput = (output) => resultKey.includes(output);

            if (castOutput('productivemetalworks:ingot_cast')) newResult = 'kubejs:bronze_ingot_cast';
            if (castOutput('productivemetalworks:gem_cast')) newResult = 'kubejs:bronze_gem_cast';
            if (castOutput('productivemetalworks:nugget_cast')) newResult = 'kubejs:bronze_nugget_cast';

            if (newResult) {
                e.custom({
                    "type": "productivemetalworks:item_casting",
                    "cast": cast,
                    "consume_cast": consumeCast,
                    "fluid": {
                        "amount": JSON.parse(fluid).amount,
                        "tag": "c:molten_bronze"
                    },
                    "result": {
                        count: 1,
                        id: newResult
                    }
                }).id(`${r.getId().replace(':','_')}_bronze`)
            }
        });

        function ores() {
            melting();
            soldifying();

            function melting() {
                const customMelting = [
                    'tin',
                    'antimony'
                ];

                customMelting.forEach(material => {
                    metalBlasting([`kubejs:molten_${material}`, 90], `c:raw_materials/${material}`, 1000, `${material}_from_raw`),
                    metalBlasting([`kubejs:molten_${material}`, 180], `c:ores/${material}`, 1000, `${material}_from_ore`)
                });

                e.forEachRecipe({id: /productivemetalworks:melting/}, r => {
                    let id = r.getId();
                    let fluidAmount;
                    if (!id.match(/productivemetalworks:melting\/\w*\/(raw_|)(aluminum|iridium|uranium|platinum|tin)/)) {
                        if (id.includes('raw_materials')) fluidAmount = 90;
                        if (id.includes('ores')) fluidAmount = 180;
                        if (id.includes('storage_blocks/raw')) fluidAmount = 810;
    
                        if (
                            id.includes('raw_materials') ||
                            id.includes('ores') ||
                            id.includes('storage_blocks/raw')
                        ) {
                            e.custom({
                                "type": "productivemetalworks:item_melting",
                                "ingredient": r.json.get('ingredient'),
                                "maximum_temperature": r.json.get('maximum_temperature'),
                                "minimum_temperature": r.json.get('minimum_temperature'),
                                "result": [
                                    {
                                        id: r.json.get('result').asJsonArray.get(0).get('id'),
                                        amount: fluidAmount
                                    }
                                ]
                            }).id(id);
                        };     
                    }      
                });
            };

            function soldifying() {
                const oresToSoldify = [
                    // 'antimony',
                    // 'lead',
                    // 'nickel',
                    // 'silver',
                    'tin'
                ];
    
                let output;
                let molten;
    
                oresToSoldify.forEach(material => {
                    switch (material) {
                        case 'antimony':
                        case 'tin':
                            molten = `kubejs:molten_${material}`;
                        break;
                        default:
                            molten = `productivemetalworks:molten_${material}`
                    };
    
                    switch (material) {
                        case '':
    
                        break;
                        default:
                            output = `${mi}${material}_ingot`
                    };
    
                    ItemCasting(
                        output, 
                        'productivemetalworks:ingot_cast', 
                        false,
                        {
                            fluid: molten,
                            amount: 90
                        },
                        `${material}_ingot`
                    )
    
                    ItemCasting(
                        output, 
                        'kubejs:bronze_ingot_cast', 
                        false,
                        {
                            fluid: molten,
                            amount: 90
                        },
                        `${material}_ingot_alt`
                    )
                });
            }
        };
    };

    // function custommachinery() {
    //     const $IFluidHandler = Java.loadClass('net.neoforged.neoforge.fluids.capability.IFluidHandler');
    
    //     primitive_pump();
    
    //     function primitive_pump() {
    //         // e.recipes.custommachinery.custom_machine('kubejs:primitive_pump', 20)
    //         //     .requireFunctionToStart(ctx => {
    //         //         blocks(ctx).forEach(element => {
    //         //             if (element.id == 'kubejs:primitive_pump_input') {
    //         //                if (fluidAmount(element, 0) >= 2) {
    //         //                     return ctx.success();
    //         //                } return ctx.error('Error')
    //         //             } return ctx.error('Error');
    //         //         });
    
    //         //         blocks(ctx).forEach(element => {
    //         //             if (element.id == 'kubejs:primitive_pump_output') {
    //         //                 if (fluidAmount(element, 1) <= 32000) {
    //         //                     return ctx.success()
    //         //                 } return ctx.error('Error');
    //         //             } return ctx.error('Error');
    //         //         });
    //         //     })
    //         //     .requireFunctionEachTick(ctx => {
    //         //         blocks(ctx).forEach(element => {
    //         //             if (element.id == 'kubejs:primitive_pump_input') {
    //         //                 if (fluidAmount(element, 0) >= 2) {
    //         //                      return ctx.success();
    //         //                 } return ctx.error('Error')
    //         //              } return ctx.error('Error');
    //         //         });
    //         //     })
    //         //     .requireFunctionOnEnd(ctx => {
    //         //         blocks(ctx).forEach(element => {
    //         //             if (element.id == 'kubejs:primitive_pump_input') {
    //         //                 if (fluidAmount(element, 0) >= 2) {
    //         //                     drain(element)
    //         //                     return ctx.success();
    //         //                 } return ctx.error('Error')
    //         //              } return ctx.error('Error');
    //         //         });
    
    //         //         blocks(ctx).forEach(element => {
    //         //             if (element.id == 'kubejs:primitive_pump_output') {
    //         //                 if (fluidAmount(element, 1) <= 32000) {
    //         //                     fill(element)
    //         //                     return ctx.success()
    //         //                 } return ctx.error('Error');
    //         //             } return ctx.error('Error');
    //         //         });
    //         //     });

    //         const block = (ctx) => ctx.block;
    //         const x = (ctx) => block(ctx).x
    //         const y = (ctx) => block(ctx).y
    //         const z = (ctx) => block(ctx).z
    //         const level = (ctx) => block(ctx).level
    //         const radius = 1;
    //         const blocks = (ctx) => level(ctx).getBlockEntity(AABB.of(x(ctx) + radius, y(ctx), z(ctx) +radius, x(ctx) - radius, y(ctx), z(ctx) - radius));
    //         const entity = (element) => element.entity;
    //         const fluidAmount = (element, tank) => entity(element).attachCapability($IFluidHandler.getFluidInTank(tank).amount);
    //         const drain = (element) => entity(element).attachCapability($IFluidHandler.drain(Fluid.of('modern_industrialization:steam', 2), $IFluidHandler.FluidAction.EXECUTE));
    //         const fill = (element) => entity(element).attachCapability($IFluidHandler.fill(Fluid.of('minecraft:water', 100), $IFluidHandler.FluidAction.EXECUTE));
    //     };
    
    //     const simpleSmelting = {
    //         'minecraft:iron_ingot': 'minecraft:raw_iron',
    //         'minecraft:copper_ingot': 'minecraft:raw_copper',
    //         'minecraft:gold_ingot': 'minecraft:raw_gold',
    //         'modern_industrialization:lead_ingot': 'modern_industrialization:raw_lead',
    //         'modern_industrialization:nickel_ingot': 'modern_industrialization:raw_nickel',
    //         'modern_industrialization:silver_ingot': 'modern_industrialization:raw_silver',
    //         'modern_industrialization:antimony_ingot': 'modern_industrialization:raw_antimony',
    //         'modern_industrialization:tin_ingot': 'modern_industrialization:raw_tin'
    //     }
    
    //    for (const [output,input] of Object.entries(simpleSmelting)) {
    //         melter(10, output, input, `kubejs:custommachinery/melter/${output.replace(':','_')}`)
    //    };
    //    e.recipes.custommachinery.custom_machine('kubejs:melter',10 * tickMultiplier)
    //         function melter(time, outputItem, inputItem, id) {
    //             e.recipes.custommachinery.custom_machine('kubejs:melter', time * tickMultiplier)
    //                 .requireFluid(Fluid.of('minecraft:lava', 10))
    //                 .requireItem(inputItem)
    //                 .requireItem('minecraft:bedrock')
    //                 .produceItem(outputItem)
    //                 .id(`kubejs:custommachinery/melter/${outputItem.replace(':','_')}_phantom`);
        
    //             e.recipes.custommachinery.custom_machine('kubejs:melter', time * tickMultiplier)
    //                 .hide()
    //                 .resetOnError()
    //                 .requireStructure(
    //                     [
    //                         [
    //                             'aaa','aaa','aaa'
    //                         ],
    //                         [
    //                             ' a ','a a',' m '
    //                         ],
    //                         [
    //                             ' a ','a a',' a '
    //                         ]
    //                     ],
    //                     {
    //                         a: 'modern_industrialization:fire_clay_bricks'
    //                     }
    //                 )
    //                 .requireFunctionToStart(ctx => {
    //                     if (input(ctx).id == inputItem && fluidAmount(ctx) >= 10) {
    //                         if (output(ctx).id == outputItem || output(ctx).count == 0) {
    //                             if (output(ctx).count != 64) {
    //                                 return ctx.success()
    //                             } return ctx.error('Error');
    //                         } return ctx.error('Error');
    //                     } return ctx.error('Error');
    //                 })
    //                 .requireFunctionEachTick(ctx => {
    //                     if (input(ctx).id == inputItem && fluidAmount(ctx) >= 10) {
    //                         return ctx.success()
    //                     } return ctx.error('Error');
    //                 })
    //                 .requireFunctionOnEnd(ctx => {
    //                     machine(ctx).addItemToSlot('output1', Item.of(outputItem), false);
    //                     machine(ctx).removeItemFromSlot('input1', 1, false);
    //                     machine(ctx).removeFluid(Fluid.of('minecraft:lava', 10), false)
    //                     return ctx.success()
    //                 })
    //                 .id(id)
        
    //                 const machine = (ctx) => ctx.machine;
    //                 const input = (ctx) => machine(ctx).getItemStored('input1');
    //                 const fluidAmount = (ctx) => machine(ctx).getFluidStored('fluidInput').amount;
    //                 const output = (ctx) => machine(ctx).getItemStored('output1');
    //     };
    // };
    
    function tools() {
        const shaped = (output, pattern, key) => e.shaped(`kubejs:${output}`, pattern, key);
        
        global.materials.forEach(recipe => {
            if (!recipe[4]) {
                if (recipe[3]) {
                    recipe[4] = recipe[3];
                };
                if (!recipe[3]) {
                    recipe[4] = `#c:plates/${recipe[0]}`;
                };
            };
            if (!recipe[3]) recipe[3] = `#c:ingots/${recipe[0]}`;
            [
                //['file', ['a','a','b'], {a: recipe[4], b: 'stick'}],
                ['hammer', ['aa ','aab','aa '], {a: recipe[3], b: 'stick'}],
                //['screwdriver', [' ba',' ac','d  '], {a: `#c:rods/${recipe[0]}`, b: files, c: hammers, d: 'stick'}, files, hammers],
                ['saw', ['d  ','ad ',' ad'], {a: recipe[4], d: 'stick'}],
                ['mortar', [' b ','aba','aaa'], {b: recipe[3], a: 'stone'}],
                ['knife', [' b ',' d ','   '], {b: recipe[4], d: `#c:rods/${recipe[0]}`}]
            ].forEach(i => {
                if (recipe[0] == 'netherite') {
                    e.smithing(`kubejs:netherite_${i[0]}`, `kubejs:diamond_${i[0]}`, 'netherite_ingot').id(`kubejs:smithing/${i[0]}s/netherite`);
                } else if (i[3] && i[4]) {
                    shaped(`${recipe[0]}_${i[0]}`, i[1], i[2]).id(`kubejs:shaped/${i[0]}s/${recipe[0]}`).damageIngredient(Ingredient.all)
                } else if (i[3] && !i[4]) {
                    shaped(`${recipe[0]}_${i[0]}`, i[1], i[2]).id(`kubejs:shaped/${i[0]}s/${recipe[0]}`).damageIngredient(Ingredient.all);
                } else {
                    shaped(`${recipe[0]}_${i[0]}`, i[1], i[2]).id(`kubejs:shaped/${i[0]}s/${recipe[0]}`);
                }; ; 
            });
        });
        
        // global.wrenchesRegister.forEach(recipe => {
        //     if (!recipe[3]) recipe[3] = `#c:plates/${recipe[0]}`;
        //     if (recipe[0] == 'netherite') {
        //         e.smithing(`kubejs:netherite_wrench`, 'kubejs:diamond_wrench', 'netherite_ingot').id(`kubejs:smithing/wrenches/netherite`)
        //     } else {
        //         shaped(`${recipe[0]}_wrench`, ['a a','aaa',' a '], {a: recipe[3]}).id(`kubejs:shaped/wrenches/${recipe[0]}`);   
        //     }
        // });
        
        shaped('flint_knife', [' b','a ','  '], {a: 'stick', b: 'flint'}).id('kubejs:shaped/knifes/flint');
        shaped('flint_mortar', [' b ','aba','aaa'], {a: 'stone', b: 'flint'}).id('kubejs:shaped/mortars/flint');
        
        global.tools.forEach(i => {
            for (let recipe of [
                ['sword', ['a','a','b']],
                ['pickaxe', ['aaa',' b ',' b ']],
                ['axe', ['aa ','ab ',' b ']],
                ['shovel', [' a ',' b ',' b ']],
                ['hoe', ['aa ',' b ',' b ']]
            ]) {
                shaped(`${i[0]}_${recipe[0]}`, recipe[1], {a: i[5], b: 'stick'}).id(`kubejs:shaped/${i[0]}_${recipe[0]}`);
            };
        });
    
        global.softMallets.forEach(recipe => {
            shaped(`${recipe[0]}_soft_mallet`, ['aa ','aab','aa '], {a: recipe[3], b: 'stick'}).id(`kubejs:mallets/${recipe[0]}`);
        })
    }
    
    function tools_uses() {
    
        // materialsToPlates.forEach(recipe => {
        //     let Output;
        //     if (recipe == 'rubber') {
        //         Output = `${mi}rubber_sheet`
        //     } else {
        //         Output = `${mi}${recipe}_plate`
        //     };
        //     e.shaped(Output, ['a','b','b'], {a: hammers, b: `#c:ingots/${recipe}`})
        //         .id(`kubejs:shaped/plates/${recipe}`)
        //         .damageIngredient(hammers)    
        // });
    
        // [
        //     'tin',
        //     'aluminum',
        //     'bronze',
        //     'cadmium',
        //     'invar',
        //     'steel',
        //     'iron',
        //     'gold',
        //     'copper'
        // ].forEach(recipe => {
        //     let input;
        //     let output;
            
        //     input = `#c:ingots/${recipe}`,
        //     output = `${mi}${recipe}_rod`

        //     e.shaped(output, ['a ',' b','  '], {a: files, b: input})
        //         .id(`kubejs:shaped/rods/${recipe}`)
        //         .damageIngredient(files)
        // });
    
        // [
        //     'aluminum',
        //     'battery_alloy',
        //     'blastproof_alloy',
        //     'bronze',
        //     'copper',
        //     'gold',
        //     'stainless_steel',
        //     'steel',
        //     'tin',
        // ].forEach(recipe => {
        //     e.shaped(`${mi}${recipe}_curved_plate`, ['a','b',' '], {a: hammers, b: `#c:plates/${recipe}`})
        //         .id(`kubejs:shaped/curved_plate/${recipe}`)
        //         .damageIngredient(hammers)
        // });
    
        // [
        //     'tin',
        //     'aluminum',
        //     'bronze',
        //     'invar',
        //     'steel',
        //     'copper',
        //     'iron',
        //     'gold'
        // ].forEach(recipe => {
        //     e.shaped(`2x ${mi}${recipe}_bolt`, ['a ',' b', '  '], {a: saws, b: `${mi}${recipe}_rod`}).damageIngredient(saws).id(`kubejs:shaped/bolts/${recipe}`)
        // });
    
    
        global.materialsToRegister.forEach(recipe => {
            let ingots;
            let plateIn;
            
            function materialsForging(output, input, id) {
                if (recipe.forgeHammer) Forging(e, output, input, id);
            }

            switch (recipe.material) {
                case 'enori':
                case 'diamatine':
                case 'restonia':
                case 'empowered_diamatine':
                case 'empowered_emeradic':
                case 'empowered_enori':
                case 'empowered_restonia':
                case 'empowered_void':
                case 'emerald':
                case 'black_quartz':
                case 'quartz':
                    ingots = `#c:gems/${recipe.material}`
                break;
                default:
                    ingots = `#c:ingots/${recipe.material}`
            };

            switch (recipe.material) {
                case 'black_quartz':
                case 'quartz':
                    plateIn = `#c:dusts/${recipe.material}`
                break;
                default:
                    plateIn = ingots
            }

            
            recipe.items.forEach(part => {
                switch (part) {
                    case 'plate':
                        //e.shaped(`kubejs:${recipe.material}_plate`, ['a','b','b'], {a: hammers, b: ingots}).id(`kubejs:craft_components/${recipe.material}_plate`).damageIngredient(hammers);
    
                        materialsForging(`kubejs:${recipe.material}_plate`, [plateIn, 2], `plate/${recipe.material}`)

                        e.recipes.modern_industrialization.automatic_forge_hammer(2, 10 * tickMultiplier)
                            .itemIn(item(plateIn, 3))
                            .itemOut(Item.of(`kubejs:${recipe.material}_plate`, 2))
                            .id(`kubejs:mi/forge_hammer_bronze/${recipe.material}_plate`)
            
                        e.recipes.modern_industrialization.automatic_forge_hammer_electric(8, 10 * tickMultiplier)
                            .itemIn(item(plateIn))
                            .itemOut(Item.of(`kubejs:${recipe.material}_plate`))
                            .id(`kubejs:mi/forge_hammer_electric/${recipe.material}_plate`)

                        e.recipes.modern_industrialization.extruder(8, 10 * tickMultiplier)
                            .itemIn(item(plateIn))
                            .itemIn('kubejs:plate_mold', 0)
                            .itemOut(Item.of(`kubejs:${recipe.material}_plate`))
                            .id(`kubejs:mi/extruder/${recipe.material}_plate`)

                         e.recipes.modern_industrialization.massive_forge_hammer(128, 1 * tickMultiplier)
                            .itemIn(item(plateIn))
                            .itemOut(Item.of(`kubejs:${recipe.material}_plate`))
                            .id(`kubejs:mi/massive_forge_hammer/${recipe.material}_plate`)

                    break;
                    case 'curved_plate':
                        // e.shaped(`kubejs:${recipe.material}_curved_plate`, ['a','b',' '], {a: hammers, b: `#c:plates/${recipe.material}`})
                        // .id(`kubejs:shaped/curved_plate/${recipe.material}`)
                        // .damageIngredient(hammers)

                        materialsForging(`kubejs:${recipe.material}_curved_plate`, [ingots, 2], `curved_plate/${recipe.material}`)

                        e.custom({
                            type: "extended_industrialization:bending_machine",
                            duration: 10 * tickMultiplier,
                            eu: 2,
                            item_inputs: {tag: `c:plates/${recipe.material}`},
                            item_outputs: {item: `kubejs:${recipe.material}_curved_plate`}
                        }).id(`kubejs:mi/bending_machine/${recipe.material}_curved_plate`);
                    break;
                    case 'rod':
                        //e.shaped(`kubejs:${recipe.material}_rod`, ['a ',' b','  '], {a: files, b: ingots}).id(`kubejs:craft_components/${recipe.material}_rod`).damageIngredient(files);

                        materialsForging(`kubejs:${recipe.material}_rod`, [ingots, 1], `rod/${recipe.material}`)

                        let tinyDust;

                        switch(recipe.material){
                            case 'diamond':
                                tinyDust = `${mi}${recipe.material}_tiny_dust`
                            break;
                            default:
                                tinyDust = `kubejs:${recipe.material}_tiny_dust`
                        }

                        e.recipes.modern_industrialization.lathe(8, 10 * tickMultiplier)
                            .itemIn(item(ingots))
                            .itemOut(Item.of(`kubejs:${recipe.material}_rod`, 2))
                            //.itemOut(Item.of(tinyDust, 4))
                            .id(`kubejs:mi/lathe/${recipe.material}_rod`)
                    break;
                    case 'rod_magnetic':
                        let polarizeRod = (time) => e.recipes.modern_industrialization.polarizer(8, time * tickMultiplier).itemIn(`#c:rods/${recipe.material}`).itemOut(`kubejs:${recipe.material}_rod_magnetic`).id(`kubejs:mi/polarizer/${recipe.material}_rod_magnetic`);
                        let polarizationTower = (time) => e.recipes.modern_industrialization.polarization_tower(128, time * tickMultiplier).itemIn(`#c:rods/${recipe.material}`).itemOut(`kubejs:${recipe.material}_rod_magnetic`).id(`kubejs:mi/polarization_tower/${recipe.material}_rod_magnetic`);

                        switch (recipe.material) {
                            case 'titanium':
                                polarizationTower(30).itemIn(`${mi}neodymium_dust`)
                            break;
                            case 'superconductor':
                                polarizationTower(60).itemIn(`${mi}plutonium_dust`)
                            break;
                            default:
                                polarizeRod(10)
                                polarizationTower(3)

                                e.shaped(`kubejs:${recipe.material}_rod_magnetic`, [' aa','aba','aa '], {a: 'redstone', b: `#c:rods/${recipe.material}`}).id(`kubejs:crafting/${recipe.material}_rod_magnetic`);
                        }
                    break;
                    case 'magnetic_plate':
                        e.recipes.modern_industrialization.polarizer(8, 10 * tickMultiplier)
                            .itemIn(`#c:plates/${recipe.material}`)
                            .itemOut(`kubejs:${recipe.material}_magnetic_plate`)
                            .id(`kubejs:mi/polarizer/${recipe.material}_magnetic_plate`)

                        e.recipes.modern_industrialization.polarization_tower(128, 3 * tickMultiplier)
                            .itemIn(`#c:plates/${recipe.material}`)
                            .itemOut(`kubejs:${recipe.material}_magnetic_plate`)
                            .id(`kubejs:mi/polarization_tower/${recipe.material}_magnetic_plate`)
                    break;
                    case 'bolt':
                        //e.shaped(`2x kubejs:${recipe.material}_bolt`, ['a ',' b','  '], {a: saws, b: `#c:rods/${recipe.material}`}).id(`kubejs:craft_components/${recipe.material}_bolt`).damageIngredient(saws);

                        materialsForging(`2x kubejs:${recipe.material}_bolt`, [ingots, 1], `bolt/${recipe.material}`)

                        e.recipes.modern_industrialization.cutting_machine(2, 10 * tickMultiplier)
                            .itemIn(item(`#c:rods/${recipe.material}`))
                            .itemOut(Item.of(`kubejs:${recipe.material}_bolt`, 2))
                            .fluidIn('1x modern_industrialization:lubricant')
                            .id(`kubejs:mi/cutting_machine/${recipe.material}_bolt`)
                    break;
                    case 'screw':
                        let input;

                        switch (recipe.material) {
                            case 'wooden':
                                input = 'kubejs:short_wood_stick'
                                materialsForging(`kubejs:${recipe.material}_screw` , [input, 1], `screw/${recipe.material}`)
                            break;
                            default:
                                input = `#c:bolts/${recipe.material}`
                                materialsForging(`kubejs:${recipe.material}_screw` , [ingots, 1], `screw/${recipe.material}`)
                        };

                        //e.shaped(`kubejs:${recipe.material}_screw`, ['ab', 'b ', '  '], {a: files, b: input}).damageIngredient(files).id(`kubejs:shaped/screws/${recipe.material}`);
                        

                        e.recipes.modern_industrialization.lathe(8, 5 * 20)
                            .itemIn(input)
                            .itemOut(`kubejs:${recipe.material}_screw`)
                            .id(`kubejs:mi/lathe/${recipe.material}_screw`);
                    break;
                    case 'gear':
                        e.shaped(`kubejs:${recipe.material}_gear`, ['aba','bcb','aba'], {a: `#c:plates/${recipe.material}`, b: `#c:bolts/${recipe.material}`, c: `#c:rings/${recipe.material}`}).id(`kubejs:craft_components/${recipe.material}_gear`);

                        e.recipes.modern_industrialization.assembler(8, 10 * tickMultiplier)
                            .itemIn(item(`#c:plates/${recipe.material}`, 4))
                            .itemIn(`#c:rings/${recipe.material}`)
                            .itemOut(Item.of(`kubejs:${recipe.material}_gear`, 2))
                            .fluidIn(`${mi}soldering_alloy`, 100)
                            .id(`kubejs:assembler/${recipe.material}_gear`)

                        switch (recipe.material) {
                            case 'iridium':
                            break;
                            default:
                                e.recipes.modern_industrialization.extruder(8, 400)
                                    .itemIn(item(ingots, 6))
                                    .itemIn(`${ct}gear_mold`, 0)
                                    .itemOut(`kubejs:${recipe.material}_gear`)
                                    .id(`${ct}modern_industrialization/extruder/${recipe.material}_gear`)
                        }
                    break;
                    case 'small_gear':
                        e.shaped(`kubejs:${recipe.material}_small_gear`, ['   ','aba','   '], {b: `#c:plates/${recipe.material}`, a: `#c:rods/${recipe.material}`}).id(`kubejs:craft_components/${recipe.material}_small_gear`);
                   
                        e.recipes.modern_industrialization.assembler(8, 10 * tickMultiplier)
                            .itemIn(`2x #c:rods/${recipe.material}`)
                            .itemIn(`#c:plates/${recipe.material}`)
                            .itemOut(`2x kubejs:${recipe.material}_small_gear`)
                            .id(`kubejs:mi/assembler/${recipe.material}_small_gear`)
                    break;
                    case 'ring':
                        e.shaped(`2x kubejs:${recipe.material}_ring`, ['aba','b b','aba'], {a: `#c:bolts/${recipe.material}`, b: `#c:rods/${recipe.material}`}).id(`kubejs:craft_components/${recipe.material}_ring`);
                        
                        materialsForging(`kubejs:${recipe.material}_ring`, [ingots, 1], `ring/${recipe.material}`)
                        
                        e.custom({
                            type: "extended_industrialization:bending_machine",
                            duration: 10 * tickMultiplier,
                            eu: 2,
                            item_inputs: {tag: `c:rods/${recipe.material}`},
                            item_outputs: {item: `kubejs:${recipe.material}_ring`}
                        }).id(`kubejs:mi/bending_machine/${recipe.material}_ring`);
                    break;
                    case 'ingot':
                        //e.shapeless(`9x kubejs:${recipe.material}_nugget`, `kubejs:${recipe.material}_ingot`).id(`kubejs:${recipe.material}_nuggets_from_ingot`);
                        //e.shapeless(`kubejs:${recipe.material}_ingot`, `9x kubejs:${recipe.material}_nugget`).id(`kubejs:${recipe.material}_ingot_from_nuggets`);


                        e.recipes.modern_industrialization.compressor(2, 10 * tickMultiplier)
                            .itemIn(`9x kubejs:${recipe.material}_nugget`)
                            .itemOut(`kubejs:${recipe.material}_ingot`)
                            .id(`kubejs:mi/compressor/${recipe.material}_ingot`)

                        e.recipes.modern_industrialization.massive_compressor(128, 1 * tickMultiplier)
                            .itemIn(`9x kubejs:${recipe.material}_nugget`)
                            .itemOut(`kubejs:${recipe.material}_ingot`)
                            .id(`kubejs:mi/massive_compressor/${recipe.material}_ingot`)

                        e.recipes.modern_industrialization.alloy_smelter_alt(4, 10 * tickMultiplier)
                            .itemIn(`9x kubejs:${recipe.material}_nugget`)
                            .itemIn('kubejs:ingot_mold', 0)
                            .itemOut(`kubejs:${recipe.material}_ingot`)
                            .id(`kubejs:mi/alloy_smelter_alt/${recipe.material}_ingot`)

                        e.recipes.modern_industrialization.alloy_smelter_alt(4, 10 * tickMultiplier)
                            .itemOut(`9x kubejs:${recipe.material}_nugget`)
                            .itemIn(`kubejs:${recipe.material}_ingot`)
                            .itemIn('kubejs:nugget_mold', 0)
                            .id(`kubejs:mi/alloy_smelter_alt/${recipe.material}_nugget`)

                        Forging(e,`9x kubejs:${recipe.material}_nugget`, [`kubejs:${recipe.material}_ingot`, 1], `nuggets/${recipe.material}`)
                        //e.shapeless(, [, saws]).id(`kubejs:${recipe.material}_nuggets`).damageIngredient(saws)
                    break;
                    case 'block':
                        Forging(e,`9x kubejs:${recipe.material}_ingot`, [`kubejs:${recipe.material}_block`, 1], `ingots/${recipe.material}`)
                        e.recipes.modern_industrialization.compressor(2, 10 * tickMultiplier)
                            .itemIn(`9x kubejs:${recipe.material}_ingot`)
                            .itemOut(`kubejs:${recipe.material}_block`)
                            .id(`kubejs:mi/compressor/${recipe.material}_block`)

                        e.recipes.modern_industrialization.massive_compressor(128, 1 * tickMultiplier)
                            .itemIn(`9x kubejs:${recipe.material}_ingot`)
                            .itemOut(`kubejs:${recipe.material}_block`)
                            .id(`kubejs:mi/massive_compressor/${recipe.material}_block`)

                        e.recipes.modern_industrialization.alloy_smelter_alt(4, 20 * tickMultiplier)
                            .itemIn(`kubejs:${recipe.material}_block`)
                            .itemIn('kubejs:ingot_mold', 0)
                            .itemOut(`9x kubejs:${recipe.material}_ingot`)
                            .id(`kubejs:mi/alloy_smelter_alt/${recipe.material}_ingot_from_block`)

                        e.recipes.modern_industrialization.alloy_smelter_alt(4, 20 * tickMultiplier)
                            .itemOut(`kubejs:${recipe.material}_block`)
                            .itemIn(`9x kubejs:${recipe.material}_ingot`)
                            .itemIn('kubejs:block_mold', 0)
                            .id(`kubejs:mi/alloy_smelter_alt/${recipe.material}_block`)

                        e.recipes.modern_industrialization.extruder(4, 10 * tickMultiplier)
                            .itemOut(`kubejs:${recipe.material}_block`)
                            .itemIn(`9x kubejs:${recipe.material}_ingot`)
                            .itemIn('kubejs:block_mold', 0)
                            .id(`kubejs:mi/extruder/${recipe.material}_block`)
                    break;
                    case 'chunks':
                        switch (recipe.material) {
                            case 'netherite_scrap':
                            break;
                            default:
                                e.shaped(`kubejs:raw_${recipe.material}`,['aa','aa','  '],{a:`kubejs:${recipe.material}_chunks`}).id(`kubejs:raw_${recipe.material}`)

                                e.recipes.modern_industrialization.packer(2, 10 * tickMultiplier)
                                    .itemOut(`kubejs:raw_${recipe.material}`)
                                    .itemIn(`4x kubejs:${recipe.material}_chunks`)
                                    .id(`kubejs:mi/packer/raw_${recipe.material}`)
                        }
                    break;
                    case 'dust':
                        let output = Ingredient.of(ingots).itemIds[0];
                        
                        switch (recipe.material) {
                            case 'iridium_metal_residue':
                            case 'iridium_chloride':
                            case 'raw_iridium':
                            case 'uraninite':
                            case 'osmium':
                            case 'nichrome':
                            case 'tungstensteel':
                            break;
                            default:
                                if (ingots == `#c:gems/${recipe.material}`) {
                                    e.recipes.modern_industrialization.autoclave(8, 10 * 20)
                                        .fluidIn('water', 200)
                                        .itemIn(`kubejs:${recipe.material}_dust`)
                                        .itemOut(output)
                                        .id(`kubejs:mi/autoclave/${recipe.material}_from_dust`)
                                } else {
                                    e.smelting(output, `kubejs:${recipe.material}_dust`)
                                        .cookingTime(10 * tickMultiplier).xp(0.2)
                                        .id(`kubejs:smelting/${recipe.material}_from_dust`);
                                };
                        };

                        switch (recipe.material) {
                            case 'iridium_metal_residue':
                            case 'iridium_chloride':
                            case 'raw_iridium':
                            case 'uraninite':
                            break;
                            default:
                                e.recipes.modern_industrialization.macerator(2, 10 * tickMultiplier)
                                    .itemIn(ingots)
                                    .itemOut(`kubejs:${recipe.material}_dust`)
                                    .id(`kubejs:mi/macerator/${recipe.material}_from_ingot`);

                                e.custom({
                                    "type": "enderio:sag_milling",
                                    "energy": 1000,
                                    "input": Ingredient.of(ingots),
                                    "outputs": [{item: {id: `kubejs:${recipe.material}_dust`}}],
                                    "bonus": "none"
                                }).id(`kubejs:enderio/sag_milling/${recipe.material}_dust`)
                        }
                    break;
                    case 'tiny_dust':
                        e.shapeless(Item.of(`9x kubejs:${recipe.material}_tiny_dust`), `kubejs:${recipe.material}_dust`).id(`kubejs:crafting/${recipe.material}_tiny_dust`)

                        e.recipes.modern_industrialization.compressor(2, 10 * tickMultiplier)
                            .itemIn(`9x kubejs:${recipe.material}_tiny_dust`)
                            .itemOut(`kubejs:${recipe.material}_dust`)
                            .id(`kubejs:mi/compressor/${recipe.material}_dust`)

                        e.recipes.modern_industrialization.massive_compressor(128, 10 * tickMultiplier)
                            .itemIn(`9x kubejs:${recipe.material}_tiny_dust`)
                            .itemOut(`kubejs:${recipe.material}_dust`)
                            .id(`kubejs:mi/massive_compressor/${recipe.material}_dust`)

                        e.recipes.modern_industrialization.unpacker(2, 5 * tickMultiplier)
                            .itemIn(`kubejs:${recipe.material}_dust`)
                            .itemOut(Item.of(`9x kubejs:${recipe.material}_tiny_dust`))
                            .id(`kubejs:mi/umpacker/tiny_${recipe.material}_from_dust`);

                        e.recipes.modern_industrialization.packer(2, 5 * tickMultiplier)
                            .itemOut(`kubejs:${recipe.material}_dust`)
                            .itemIn(Item.of(`9x kubejs:${recipe.material}_tiny_dust`))
                            .id(`kubejs:mi/packer/${recipe.material}_from_tiny_dust`);
                    break;
                    case 'double_ingot':
                        //e.shaped(`kubejs:${recipe.material}_double_ingot`, [' a ',' b ',' b '], {a: mallets, b: `#c:ingots/${recipe.material}`}).damageIngredient(mallets).id(`kubejs:shaped/${recipe.material}_double_ingot`)
                    
                        materialsForging(`kubejs:${recipe.material}_double_ingot`, [`#c:ingots/${recipe.material}`, 2], `double_ingot/${recipe.material}`)

                        e.recipes.modern_industrialization.packer(2, 10 * tickMultiplier)
                            .itemIn(`2x #c:ingots/${recipe.material}`)
                            .itemIn(`${mi}packer_double_ingot_template`, 0)
                            .itemOut(`kubejs:${recipe.material}_double_ingot`)
                    break;
                    case 'blade':
                        e.shaped(Item.of(`kubejs:${recipe.material}_blade`, 4), [' b ',' b ',' d '], {b: `#c:curved_plates/${recipe.material}`, d: `#c:rods/${recipe.material}`}).id(`kubejs:shaped/${recipe.material}_blade`)
    
                        e.recipes.modern_industrialization.assembler(8, 10 * tickMultiplier)
                        .itemIn(item(`#c:curved_plates/${recipe.material}`, 2))
                        .itemIn(`#c:rods/${recipe.material}`)
                        .itemOut(Item.of(`kubejs:${recipe.material}_blade`, 4))
                        .id(`kubejs:assembler/${recipe.material}_blade`)
                    break;
                    case 'rotor':
                        e.shaped(`kubejs:${recipe.material}_rotor`, ['aba','bcb','aba'], {a: `kubejs:${recipe.material}_blade`, c: `#c:rings/${recipe.material}`, b: `#c:screws/${recipe.material}`}).id(`kubejs:shaped/${recipe.material}_rotor`);

                        e.recipes.modern_industrialization.assembler(8, 10 * tickMultiplier)
                            .itemIn(item(`#c:blades/${recipe.material}`, 4))
                            .itemIn(`#c:rings/${recipe.material}`)
                            .itemOut(Item.of(`kubejs:${recipe.material}_rotor`))
                            .fluidIn(`${mi}soldering_alloy`, 100)
                            .id(`kubejs:assembler/${recipe.material}_rotor`)
                    
                        switch (recipe.material) {
                            case 'iridium':
                            break;
                            default:
                                e.recipes.modern_industrialization.extruder(8, 20 * tickMultiplier)
                                    .itemIn(item(`#c:ingots/${recipe.material}`, 8))
                                    .itemIn(`${ct}rotor_mold`, 0)
                                    .itemOut(`kubejs:${recipe.material}_rotor`)
                                    .id(`${ct}modern_industrialization/extruder/${recipe.material}_rotor`)
                        }

                        
                    break;
                    case 'large_plate':
                        e.shaped(`kubejs:${recipe.material}_large_plate`, ['aa','aa','  '], {a: `#c:plates/${recipe.material}`}).id(`kubejs:shaped/${recipe.material}_large_plate`)
                    
                        e.recipes.modern_industrialization.packer(2, 10 * tickMultiplier)
                            .itemIn(`4x #c:plates/${recipe.material}`)
                            .itemOut(`kubejs:${recipe.material}_large_plate`)
                            .id(`${ct}modern_industrialization/packer/${recipe.material}_large_plate`)
                    break;
                    case 'drill_head':
                        e.shaped(`kubejs:${recipe.material}_drill_head`,['abc','deb','ada'], {a: `#c:bolts/${recipe.material}`, b: `#c:curved_plates/${recipe.material}`,c: `#c:plates/${recipe.material}`,d: `#c:gears/${recipe.material}`, e: `#c:rods/${recipe.material}`}).id(`kubejs:shaped/${recipe.material}_drill_head`);

                        e.recipes.modern_industrialization.assembler(8, 5 * tickMultiplier)
                        .itemIn(item(`#c:plates/${recipe.material}`))
                        .itemIn(item(`#c:curved_plates/${recipe.material}`, 2))
                        .itemIn(`#c:rods/${recipe.material}`)
                        .itemIn(item(`#c:gears/${recipe.material}`, 2))
                        .itemOut(Item.of(`kubejs:${recipe.material}_drill_head`))
                        .fluidIn(`${mi}soldering_alloy`, 75)
                        .id(`kubejs:assembler/${recipe.material}_drill_head`)
                    break;
                    case 'wire':
                        let outputCount;

                        switch (recipe.material) {
                            // case 'gold':
                            // //case 'empowered_diamatine':
                            //     outputCount = 1;
                            // break;
                            default:
                                outputCount = 2
                        };
                    
                        e.recipes.modern_industrialization.wiremill(2, 10 * tickMultiplier)
                            .itemIn(`#c:plates/${recipe.material}`)
                            .itemOut(`${outputCount}x kubejs:${recipe.material}_wire`)
                            .id(`kubejs:mi/wiremill/${recipe.material}`)

                        let inp;

                        switch (recipe.material) {
                            case 'enori':
                            case 'diamatine':
                            case 'restonia':
                            case 'empowered_diamatine':
                            case 'empowered_emeradic':
                            case 'empowered_enori':
                            case 'empowered_restonia':
                                inp = `#c:gems/${recipe.material}`
                            break;
                            case 'iridium':
                                inp =`${mi}iridium_plate`
                            break;
                            default:
                                inp = `#c:ingots/${recipe.material}`
                        };

                        e.recipes.modern_industrialization.massive_wiremill(128, 1 * tickMultiplier)
                            .itemIn(inp)
                            .itemOut(`${outputCount * 1.5}x kubejs:${recipe.material}_wire`)
                            .id(`kubejs:mi/massive_wiremill/${recipe.material}`)
                    break;
                    case 'fine_wire':
                        e.recipes.modern_industrialization.wiremill(2, 10 * tickMultiplier)
                            .itemIn(`#c:wires/${recipe.material}`)
                            .itemOut(`4x kubejs:${recipe.material}_fine_wire`)
                            .id(`kubejs:mi/wiremill/${recipe.material}_fine_wire`)

                        e.recipes.modern_industrialization.massive_wiremill(128, 1 * tickMultiplier)
                            .itemIn(`#c:wires/${recipe.material}`)
                            .itemOut(`4x kubejs:${recipe.material}_fine_wire`)
                            .id(`kubejs:mi/massive_wiremill/${recipe.material}_fine_wire`)
                    break;
                    case 'magnetic_wire':
                        let polarize = (time) => e.recipes.modern_industrialization.polarizer(8, time * tickMultiplier).itemIn(`#c:wires/${recipe.material}`).itemOut(`kubejs:${recipe.material}_magnetic_wire`).id(`kubejs:mi/polarizer/${recipe.material}_magnetic_wire`);
                        let polarization_tower = (time) => e.recipes.modern_industrialization.polarization_tower(128, time * tickMultiplier).itemIn(`#c:wires/${recipe.material}`).itemOut(`kubejs:${recipe.material}_magnetic_wire`).id(`kubejs:mi/polarization_tower/${recipe.material}_magnetic_wire`);

                        switch (recipe.material) {
                            case 'empowered_diamatine':
                            case 'empowered_emeradic':
                                polarization_tower(30).itemIn(`${mi}neodymium_dust`)
                            break;
                            case 'steel':
                                e.shaped(
                                    `kubejs:${recipe.material}_magnetic_wire`,
                                    [' a ','aba',' a '],
                                    {
                                        a: 'redstone',
                                        b: `#c:wires/${recipe.material}`
                                    }
                                ).id(`kubejs:polarize/crafting/${recipe.material}`)

                                polarize(10);
                                polarization_tower(3)
                            break;
                            default:
                                polarize(20);
                                polarization_tower(5)
                        };
                    break;
                };
            });
        })
    };
    
    function smelting() {
        let smeltingRecipes = [
            [
                'brick',
                'kubejs:unfired_brick',
                10,
                0.1,
                'brick'
            ],
            [
                `${mi}fire_clay_brick`,
                'kubejs:unfired_fire_clay_brick',
                10,
                0.25,
                'fire_clay_brick'
            ]
        ];
        for (const prop of smeltingRecipes) {
            e.smelting(prop[0], prop[1]).cookingTime(prop[2] * tickMultiplier).xp(prop[3]).id(`kubejs:smelting/${prop[4]}`);
        };
        
        const campfireRecipes = [
            [
                'stone',
                'cobblestone',
                0.1,
                20,
                'stone'
            ]
        ];
    
        campfireRecipes.forEach(recipe => {
            e.campfireCooking(recipe[0], recipe[1]).xp(recipe[2]).cookingTime(recipe[3] * tickMultiplier).id(`kubejs:campfire_cooking/${recipe[4]}`);
        })
    };
    
    function dusts() {
        global.dusts.forEach(recipe => {
            let pattern;
            if (recipe[2] == true) {
                if (recipe[3] == 4) {
                    pattern = ['aa','aa','  ']
                } else if (recipe[3] == 9) pattern = ['aaa','aaa','aaa'];
    
                e.shaped(`kubejs:${recipe[0]}_dust`, pattern, {a: `kubejs:${recipe[0]}_tiny_dust`}).id(`kubejs:dusts/compress/${recipe[0]}`);
                e.shapeless(`${recipe[3]}x kubejs:${recipe[0]}_tiny_dust`, [`kubejs:${recipe[0]}_dust`]).id(`kubejs:dusts/decompress/${recipe[0]}`);
            };
        });
    };
    
    function nerfs() {
        e.forEachRecipe({
            type: 'minecraft:crafting_shaped',
            output: [/\w+slab/, '#minecraft:slabs']
        }, r => {
            e.shapeless(Item.of(r.originalRecipeResult, 2), [r.originalRecipeIngredients, saws]).damageIngredient(saws).id(r.getId())
        });
    
        e.forEachRecipe({
            output: [/\w+planks/, '#minecraft:planks'], 
            input: [/\w+log|wood/, '#minecraft:logs'],
            not: {output: /\w+painted_planks/}
        }, r => {
            e.shapeless(Item.of(r.originalRecipeResult, 2), r.originalRecipeIngredients)
            e.shaped(Item.of(r.originalRecipeResult, 4), ['a','b',' '], {a: saws, b: r.originalRecipeIngredients}).damageIngredient(saws).id(r.getId())
            e.recipes.modern_industrialization.cutting_machine(2,5 * tickMultiplier)
                .itemOut(Item.of(r.originalRecipeResult,4))
                .itemIn(r.originalRecipeIngredients)
                .fluidIn(Fluid.of(`${mi}lubricant`, 1))
                .id(`${r.getId()}_in_cutting_machine`)
        });
    }
    
    function other() {
        lychee()

        function lychee() {
            // e.custom({
            //     type: 'lychee:item_inside',
            //     item_in: [
            //         {
            //             item: 'redstone',
            //             count: 4
            //         },
            //         {
            //             item: 'bucket'
            //         }
            //     ],
            //     block_in: {
            //         blocks: ["water"]
            //     },
            //     post: [
            //         {
            //             type: "drop_item",
            //             id: `${mi}lubricant_bucket`
            //         },
            //         {
            //             type: "place",
            //             block: "air"
            //         }
            //     ]
            // }).id(`kubejs:lychee/item_inside/lubricant`)

            e.custom({
                type: 'lychee:item_inside',
                item_in: [
                    {
                        item: 'leather'
                    },
                    {
                        item: 'flint'
                    },
                    {
                        tag: 'c:dusts/salt',
                        count: 2
                    }
                ],
                block_in: {
                    blocks: ["water_cauldron"],
                    state: {
                        level: '3'
                    }
                },
                post: [
                    {
                        type: "drop_item",
                        id: 'kubejs:raw_treated_leather'
                    },
                    {
                        type: "place",
                        block: "cauldron"
                    }
            ]
            }).id(`kubejs:lychee/item_inside/raw_treated_leather`)
        };

        e.custom({
            "type": "treetap:tap_extract",
            "log": {
                "item": "minecraft:acacia_log"
            },
            "required_block_count": 5,
            "collect_bucket": true,
            "processing_time": 150 * tickMultiplier,
            "result": {
                "id": 'kubejs:latex'
            },
            "fluid_color": "#efefdb",
            "particle_color": "#efefdb"
        }).id(`kubejs:treetap/latex_from_acacia`)

        const drying = [
            [
                'kubejs:treated_leather',
                'kubejs:raw_treated_leather',
                300,
                'treated_leather'
            ],
            [
                'coxinhautilities:lava_sponge',
                'coxinhautilities:wet_lava_sponge',
                180,
                'lava_sponge'
            ]
        ];

        drying.forEach(recipe => {
            e.custom({
                "type": "coxinhautilities:drying",
                "ingredient": Ingredient.of(recipe[1]),
                "result": {
                    "id": recipe[0]
                },
                "dryingTime": recipe[2] * tickMultiplier
            }).id(`kubejs:coxinha/drying/${recipe[3]}`)
        });

        [
            [
                {id: `${mi}brick_tiny_dust`, count: 3},
                {item: 'brick'},
                {tag: "minecraft:pickaxes"},
                'brick_tiny_dust'
            ],
            // [
            //     {id: `${mi}copper_dust`},
            //     {item: 'copper_ingot'},
            //     {tag: "minecraft:pickaxes"},
            //     'copper_dust'
            // ],
            // [
            //     {id: `${mi}tin_dust`},
            //     {item: `${mi}tin_ingot`},
            //     {tag: "minecraft:pickaxes"},
            //     'tin_dust'
            // ]
        ].forEach(recipe => {
            e.custom({
                type: "farmersdelight:cutting",
                ingredients: [recipe[1]],
                tool: recipe[2],
                result: [{item: recipe[0]}]
            }).id(`kubejs:farmersdelight/cutting/${recipe[3]}`)
        });

        // e.forEachRecipe({input: 'croptopia:cooking_pot'}, r => {
        //     let inputs = r.originalRecipeIngredients;
        //     let ingredients = [];

        //     inputs.forEach(input => {
        //         let ids = input.itemIds;

        //         if (!ids.contains('croptopia:cooking_pot') && !ids.contains('minecraft:water_bucket') && !ids.contains('croptopia:water_bottle')) {
        //             ingredients.push(ids);
        //         };
        //     });

        //     e.custom(
        //         {
        //             "type": "farmersdelight:cooking",
        //             "cookingtime": 200,
        //             "experience": 1.0,
        //             "ingredients": ingredients,
        //             //"recipe_book_tab": "drinks",
        //             "result": r.originalRecipeResult
        //         }
        //     ).id(r.getId())
        // });
    }
    
    function compactcrafting() {
        const MIXED = "compactcrafting:mixed"
        const FILLED = "compactcrafting:filled"

        const recipes = [
            {
                outputs: [
                    {
                        id: 'ae2:controller'
                    }
                ],
                catalyst: {
                    id: `${mi}electronic_circuit`
                },
                recipeSize: 3,
                layers: [
                    {
                        type: MIXED,
                        pattern: [
                            ['a','b','a'],
                            ['b','c','b'],
                            ['a','b','a']
                        ]
                    },
                    {
                        type: MIXED,
                        pattern: [
                            ['b','c','b'],
                            ['c','d','c'],
                            ['b','c','b']
                        ]
                    },
                    {
                        type: MIXED,
                        pattern: [
                            ['a','b','a'],
                            ['b','c','b'],
                            ['a','b','a']
                        ]
                    }
                ],
                components: {
                    'a': {
                        type: "compactcrafting:block",
                        block: "kubejs:magnetic_iron_casing"
                    },
                    'b': {
                        type: "compactcrafting:block",
                        block: "kubejs:logic_casing"
                    },
                    'c': {
                        type: "compactcrafting:block",
                        block: "kubejs:fluix_glass"
                    },
                    'd': {
                        type: "compactcrafting:block",
                        block: `${mi}advanced_machine_hull`
                    },
                },
                id: 'me_controller'
            },
            {
                outputs: [
                    {
                        id: 'hyperbox:hyperbox'
                    }
                ],
                catalyst: {
                    id: `${mi}processing_unit`
                },
                recipeSize: 3,
                layers: [
                    {
                        type: MIXED,
                        pattern: [
                            ['a','a','a'],
                            ['a','b','a'],
                            ['a','a','a']
                        ]
                    },
                    {
                        type: MIXED,
                        pattern: [
                            ['a','c','a'],
                            ['f',' ','d'],
                            ['a','e','a']
                        ]
                    },
                    {
                        type: MIXED,
                        pattern: [
                            ['a','a','a'],
                            ['a','b','a'],
                            ['a','a','a']
                        ]
                    }
                ],
                components: {
                    'a': {
                        type: "compactcrafting:block",
                        block: "kubejs:hyperbox_wall"
                    },
                    'b': {
                        type: "compactcrafting:block",
                        block: "actuallyadditions:empowered_void_crystal_block"
                    },
                    'c': {
                        type: "compactcrafting:block",
                        block: "actuallyadditions:empowered_palis_crystal_block"
                    },
                    'd': {
                        type: "compactcrafting:block",
                        block: `actuallyadditions:empowered_emeradic_crystal_block`
                    },
                    'e': {
                        type: "compactcrafting:block",
                        block: `actuallyadditions:empowered_restonia_crystal_block`
                    },
                    'f': {
                        type: "compactcrafting:block",
                        block: `actuallyadditions:empowered_enori_crystal_block`
                    },
                },
                id: 'hyperbox'
            }
        ];

        recipes.forEach(prop => {
            e.custom({
                type: "compactcrafting:miniaturization",
                version: 1,
                recipeSize: prop.recipeSize,
                layers: prop.layers,
                catalyst: prop.catalyst,
                components: prop.components,
                outputs: prop.outputs
            }).id(`kubejs:compact_crafting/${prop.id}`)
        });
    }

    function Forging(e,output,input,id) {
        e.recipes.modern_industrialization.forge_hammer(output,input[0],0,input[1]).id(`kubejs:materials/${id}`)
    };
});