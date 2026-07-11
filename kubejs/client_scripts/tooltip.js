ItemEvents.modifyTooltips(e => {
    const tooltip = {
        'kubejs:stone_bucket':'§aThis item is for crafting only',
        '#kubejs:radioactive_items': '§cThis item is radioactive!',
        '#kubejs:radiation_protective_suit': '§aFull set protects from radiation',
        '#cookingforblockheads:sinks': '§cCannot provide an infinite water source',
        'kubejs:drop_of_evil': '§aIs used to create a Cursed Earth',
        'waystones:warp_stone': '§7Larp',
        'ae2:controller': '§aMiniaturization recipe is unlocked earlier than the crafting table recipe.',
        'modern_industrialization:water_tower': '§aRequires at least a 5x5 water pool directly beneath the structure.',
        'kubejs:activated_singularity': '§dIs created by activating with a Mycelial Reactor.',
        'actuallyadditions:rice': '§cThis item is disabled',
        'actuallyadditions:rice_seeds': '§cThis item is disabled',
        'actuallyadditions:flax_seeds': '§cThis item is disabled',
        'modern_industrialization:massive_compressor': '§cThis item is disabled. Recraft it into MI Tweaks version',
        'modern_industrialization:massive_wiremill': '§cThis item is disabled. Recraft it into MI Tweaks version',
        'modern_industrialization:massive_forge_hammer': '§cThis item is disabled. Recraft it into MI Tweaks version',
    };
    
    for (let [id, text] of Object.entries(tooltip)) {
        e.add(id, text);
    };

    e.add('kubejs:ore_waypoint_maker', {shift:false}, 'Hold §6[SHIFT]§r for information.')
    e.add('kubejs:ore_waypoint_maker', {shift:true}, '§aRight-clicking ore samples auto-creates waypoints on the map')


    // e.modify('modern_industrialization:steam_mining_drill', text=> {
    //     for (let x = 2; x < 4; x++) {
    //         text.removeLine(x)
    //     };
    // });

    global.disabledTools.forEach(tool => {
        e.add(tool, Text.red('This item is for crafting only!'))
    });
});