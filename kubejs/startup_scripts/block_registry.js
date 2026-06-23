StartupEvents.registry('block', e => {
    const create = (id, soundType, hardness) => e.create(id).soundType(soundType).hardness(hardness);

    create('treated_wood_planks', 'wood', 3)
        .tagBlock(`minecraft:mineable/axe`)

    create('canola_treated_wood_planks', 'wood', 3)
        .tagBlock(`minecraft:mineable/axe`)

    create('treated_wood_frame_box', 'wood', 3)
        .tagBlock(`minecraft:mineable/axe`)
        .defaultTranslucent()
        .notSolid();

    create('nether_star_block', 'amethyst', 8)
        .tagBlock(`minecraft:beacon_base_blocks`) 
        .tagBlock(`minecraft:mineable/pickaxe`)
        .tagBlock(`minecraft:needs_diamond_tool`)
        .requiresTool(true)
        .item(item => {
            item.rarity(2)
        });

    create('plastic_block', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_wooden_tool`)
        .requiresTool(true);   

    create('logic_casing', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_wooden_tool`)
        .requiresTool(true);  

    create('hyperbox_wall', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_wooden_tool`)
        .requiresTool(true);  

    create('primitive_pump_siding', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`)
        .tagBlock(`minecraft:needs_wooden_tool`)
        .requiresTool(true);    

    create('iron_casing', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true);   

    create('magnetic_iron_casing', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true);   

    create('copper_casing', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true); 

    create('bricked_bronze_casing', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true);   
        
    create('large_chemical_reactor_casing', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true);   

    create('cloggrum_steel_casing', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true);

    create('dark_steel_casing', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true);

    create('massive_line_casing', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true);

    // create('froststeel_machine_casing', 'stone', 4)
    //     .tagBlock(`minecraft:mineable/pickaxe`) 
    //     .tagBlock(`minecraft:needs_stone_tool`)
    //     .requiresTool(true);

    create('superconductor_casing', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true);

    create('assembly_control_casing', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true);

    create('assembly_line_casing', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true);
        
    create('metamorphic_constructor_casing', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true);

    create('copper_drill', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true);

    create('titanium_laser_drill', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true);

    create('stainless_steel_laser_drill', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true);

    create('matter_handling_iridium_machine_casing', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true);
    
    create('dark_matter_casing', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true);   

    create('red_matter_casing', 'stone', 4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true);  
        
    create('stone_casing', 'stone', 3)
        .tagBlock(`minecraft:mineable/pickaxe`)
        .tagBlock(`minecraft:needs_wooden_tool`)
        .requiresTool(true);  

    create('steel_casing', 'stone', 3)
        .tagBlock(`minecraft:mineable/pickaxe`)
        .tagBlock(`minecraft:needs_wooden_tool`)
        .requiresTool(true);  

    create('neural_casing', 'stone', 3)
        .tagBlock(`minecraft:mineable/pickaxe`)
        .tagBlock(`minecraft:needs_wooden_tool`)
        .requiresTool(true);  

    create('mycelial_frame', 'stone', 3)
        .tagBlock(`minecraft:mineable/pickaxe`)
        .tagBlock(`minecraft:needs_wooden_tool`)
        .requiresTool(true); 

    create('lamp_of_growth', 'stone', 3)
        .lightLevel(0.8)
        .tagBlock(`minecraft:mineable/pickaxe`)
        .tagBlock(`minecraft:needs_wooden_tool`)
        .requiresTool(true); 

    create('compact_greenhouse_glass', 'glass', 1)
        .defaultTranslucent()
        .notSolid()

    create('reinforced_glass', 'stone', 6)
        .defaultTranslucent()
        .notSolid()
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true)

    create('fluix_glass', 'stone', 4)
        .defaultTranslucent()
        .notSolid()
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_wooden_tool`)
        .requiresTool(true)

    create('deepslate_black_quartz_ore', 'stone', 6)
        .tagBoth('c:ores')
        .tagItem('c:ores/black_quartz')
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_iron_tool`)
        .requiresTool(true);   

    create('sulfur_ore', 'stone', 4)
        .tagBoth('c:ores')
        .tagItem('c:ores/sulfur')
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_stone_tool`)
        .requiresTool(true);   

    create('titanium_ore', 'stone', 7)
        .tagBoth('c:ores/titanium')
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_diamond_tool`)
        .requiresTool(true);  

    create('tungsten_ore', 'stone', 7)
        .tagBoth('c:ores/tungsten')
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_diamond_tool`)
        .requiresTool(true);  

    create('uraninite_ore', 'stone', 7)
        .tagBoth('c:ores/uraninite')
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_diamond_tool`)
        .requiresTool(true); 

    create('iridium_ore', 'stone', 8)
        .tagBoth('c:ores/iridium')
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_diamond_tool`)
        .requiresTool(true);   

    e.create('copper_fence', 'fence')
        .soundType('stone')
        .hardness(4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_wooden_tool`)
        .requiresTool(true);

    e.create('tungstensteel_fence', 'fence')
        .soundType('stone')
        .hardness(4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_diamond_tool`)
        .requiresTool(true);

    e.create('stainless_steel_fence', 'fence')
        .soundType('stone')
        .hardness(4)
        .tagBlock(`minecraft:mineable/pickaxe`) 
        .tagBlock(`minecraft:needs_iron_tool`)
        .requiresTool(true);

    global.compressedBlocks.forEach(property => {
        property[1].forEach(tier => {
            create(`${tier}_${property[0]}`, 'stone', 8)
                .defaultCutout()
                .defaultTranslucent()
                .tagBlock(`minecraft:mineable/pickaxe`)
        });
    });

    global.materialsToRegister.forEach(prop => {
        prop.items.forEach(item => {
            switch (item) {
                case 'coil':
                    let builderCoil = e.create(`${prop.material}_${item}`)
                    
                    builderCoil.modelGenerator(model => {
                            model.parent("minecraft:block/cube_column")
                            model.texture('end', 'kubejs:block/materialsets/coil_end')  
                            model.texture('side', 'kubejs:block/materialsets/coil_side')
                            model.element(element => {
                                element.allFaces(face => {
                                    face.uv(0,0,16,16).tex('end').tintindex(0)
                                    face.uv(0,0,16,16).tex('side').tintindex(1)
                                });
                            });
                        })
                        builderCoil
                            .color(0, prop.color)
                            .color(1, prop.color)
                            .item(item => {
                                item.color(0, prop.color)
                                item.color(1, prop.color)
                            })
                            .soundType('stone')
                            .hardness(3)
                            .tagBlock(`minecraft:mineable/pickaxe`) 
                            .tagBlock(`minecraft:needs_stone_tool`)
                            .tagItem(`c:${item}s/${prop.material}`)
                            .hardness(4)
                break;
                case 'frame_box':
                    let builderFrameBox = e.create(`${prop.material}_${item}`)
                    
                    builderFrameBox.modelGenerator(model => {
                            model.parent("kubejs:block/scaffolding")
                            model.texture('bottom', 'kubejs:block/materialsets/frame_box')  
                            model.texture('side', 'kubejs:block/materialsets/frame_box')
                            model.texture('top', 'kubejs:block/materialsets/frame_box')
                            model.element(element => {
                                element.allFaces(face => {
                                    face.uv(0,0,16,16).tex('bottom').tintindex(0)
                                    face.uv(0,0,16,16).tex('side').tintindex(1)
                                    face.uv(0,0,16,16).tex('top').tintindex(2)
                                });
                            });
                        })
                        builderFrameBox
                            .color(0, prop.color)
                            .color(1, prop.color)
                            .color(2, prop.color)
                            .item(item => {
                                item.color(0, prop.color)
                                item.color(1, prop.color)
                                item.color(2, prop.color)
                            })
                            .tagBlock(`minecraft:mineable/pickaxe`)
                            .tagBlock(`minecraft:needs_iron_tool`)
                            .requiresTool(true)
                            .defaultTranslucent()
                            .notSolid()
                            .hardness(4)
                            .tagItem(`c:${item}s/${prop.material}`)
                break;
                case 'block':
                    e.create(`${prop.material}_${item}`)
                        .hardness(4)
                        .texture(`kubejs:block/materialsets/${item}`)
                        .color(0, prop.color)     
                        .item(item => {
                            item.color(0, prop.color)
                        })
                        .tagBlock(`minecraft:mineable/pickaxe`)
                        .tagBlock(`minecraft:needs_stone_tool`)
                        .tagItem(`c:storage_blocks/${prop.material}`);
                break;
                case 'machine_casing':
                    switch (prop.material) {
                        case 'tungstensteel':
                            e.create(`${prop.material}_${item}`)
                                .hardness(4)
                                .tagBlock(`minecraft:mineable/pickaxe`)
                                .tagBlock(`minecraft:needs_stone_tool`)
                                .tagItem(`c:${item}s/${prop.material}`);
                        break;
                        default:
                            e.create(`${prop.material}_${item}`)
                                .hardness(4)
                                .texture(`kubejs:block/materialsets/${item}`)
                                .color(0, prop.color)     
                                .item(item => {
                                    item.color(0, prop.color)
                                })
                                .tagBlock(`minecraft:mineable/pickaxe`)
                                .tagBlock(`minecraft:needs_stone_tool`)
                                .tagItem(`c:${item}s/${prop.material}`);
                    };
                break;
                default:
            };
        })
    });

    global.oreSamples.forEach(prop => {
        let typeTexturePath;

        switch (prop.type) {
            case 'depthrock':
                typeTexturePath = 'undergarden:block/depthrock'
            break;
            case 'netherrack':
                typeTexturePath = 'minecraft:block/netherrack'
            break;
            default:
                typeTexturePath = 'block/stone'
        }

        let builderOreSample = e.create(`${prop.material}_sample`) 

        let presetBuild = builderOreSample            
            .box(6, 0, 5,12, 1, 10)
            .box(7, 1, 5,12, 2, 10)
            .box(8, 1, 10,9.25, 1.5, 11)
            .box(9, 2, 7,11, 2.75, 9)
            .box(7, 2, 6,8, 2.5, 7)
            .box(12, 0, 6,13, 1, 8)
            .box(8, 0, 10,11, 1, 11)
            .box(5.5, 0, 7,6, 1, 9)
            .box(6.5, 1, 6,7, 2, 9)
            .box(7, 0, 4.25,10, 1, 5)
            .tagBlock(`minecraft:mineable/pickaxe`)
            .tagBlock(`minecraft:needs_stone_tool`)
            .requiresTool(true)
            .defaultTranslucent()
            .notSolid()
            .hardness(2)
            .tagItem(`c:ore_samples/${prop.material}`);

        if (prop.twoOres) {
            presetBuild
                .modelGenerator(model => {
                    model.textures({
                        '0': typeTexturePath,
                        'particle': typeTexturePath,
                    })
                    model.parent("kubejs:block/ore_sample_two_ores")      
                })
                .color(0, prop.color[0])
                .color(1, prop.color[1])
                .item(item => {
                    item.color(0, prop.color[0])
                    item.color(1, prop.color[1])
                })
        } else {
            presetBuild
                .modelGenerator(model => {
                    model.textures({
                        '0': typeTexturePath,
                        'particle': typeTexturePath,
                    })
                    model.parent("kubejs:block/ore_sample")
                })
                .color(0, prop.color)
                .item(item => {
                    item.color(0, prop.color)
                });           
        };
       
    });

//     const machines = [
//         //'melter'
//         // 'primitive_pump_input',
//         // 'primitive_pump_output',
//         // 'primitive_pump'
//     ];
    
//     machines.forEach(id => {
//         e.create(`kubejs:${id}`, 'custommachinery');
//     })
});