// BlockEvents.broken('minecraft:stone', e => {
//     e.level.getEntitiesWithin
// });

BlockEvents.rightClicked('industrialforegoing:mycelial_reactor', e => {
    const {block, item, player,server, block: {x,y,z}} = e;

    if (item == `${mi}singularity` && player.crouching && block.getEntityData().getAsString().includes('MaxProgress:5') && block.getEntityData().get('progressBar').get('Tick') > 0) {
        let itemCount = item.getCount();
        item.setCount(0)
        player.give(Item.of('kubejs:activated_singularity', itemCount))
        server.runCommandSilent(`playsound projecte:transmute player ${player.getName().getString()}`)
        server.runCommandSilent(`particle minecraft:explosion_emitter ${x} ${y + 1} ${z} 0.5 0.5 0.5 0 1`)
        server.runCommandSilent(`playsound minecraft:entity.generic.explode master @a ${x} ${y} ${z}`)
    };

    // {energyStorage:0,owner:"bf875fbc-38f1-40ac-aad7-43e6f5b4c51e",progressBar:{MaxProgress:5,Tick:3}} - activated (tick от 1 до 5)
    // {energyStorage:0,owner:"bf875fbc-38f1-40ac-aad7-43e6f5b4c51e",progressBar:{MaxProgress:100,Tick:0}} - non activated
})


const oreSamples = [];
global.oreSamples.forEach(prop => {
    oreSamples.push(`kubejs:${prop.material}_sample`);
});

const textColors = {
    'black': ['coal','black_quartz'],
    'gray': ['iron','antimony','salt', 'limonite'],
    'red': ['copper', 'redstone'],
    'gold': ['gold','bauxite'],
    'dark_blue': ['lapis','lead'],
    'blue': ['tin'],
    'green': ['emerald'],
    'dark_gray': ['graphite'],
    'dark_purple': ['monazite']
};

BlockEvents.rightClicked('spawner', e => {
    if (e.item.id == 'coxinhautilities:cardboard_box') e.cancel() 
});


BlockEvents.rightClicked(e => {
    const {player, block, block: {x,y,z}, item, player: {stages}} = e;
    const wayPointMaker = 'kubejs:ore_waypoint_maker';


    if (item == wayPointMaker) {
        if (oreSamples.toString().includes(block)) {
            player.swing();

            let material;
            let MaterialText;
            let TextColor;

            material = block.id.toString().replace('kubejs:','').replace('_sample','')

            switch (block) {
                case 'kubejs:black_quartz_sample':
                    MaterialText = '"Black Quartz"'
                break;
                default:
                    MaterialText = material;

            };

            for (const [color, materials] of Object.entries(textColors)) {
                if (materials.toString().includes(material)) {
                    TextColor = color;  
                };
            };

            player.runCommandSilent(`ftbchunks waypoint add ${MaterialText.substring(0,1).toUpperCase() + MaterialText.slice(1)} ${x} ${y} ${z} ${block.dimension} ${TextColor}`)
        };
    };
});

PlayerEvents.loggedIn(e => {
    let itemsToGive = [
        'ftbquests:book',
        '8x farmersdelight:bacon_sandwich',
        '8x expandeddelight:peperonata',
        'leather_helmet',
        'leather_boots'
    ];

    const {player, player: {stages}} = e;

    if (!stages.has('starting_items')) {
        stages.add('starting_items');

        itemsToGive.forEach(item => {
            player.give(item);
        });
    };
});

ServerEvents.loaded(e => {
    const { server: {persistentData, gameRules} } = e;

    if (!persistentData.contains('firstload')) {
        persistentData.putBoolean('firstload', true);
        gameRules.set('waterSourceConversion', false);
    };
});

PlayerEvents.tick(e => {
    const {player} = e;

    if (player.inventory.find('#kubejs:radioactive_items') != -1) {
        player.armorAndBodyArmorSlots.forEach(armor => {
            if (!armor.hasTag('kubejs:radiation_protective_suit')) player.potionEffects.add('kubejs:radiation', 30 * tickMultiplier, 0, true, true)
        }); 
    }
});

BlockEvents.rightClicked(e => {
    const {level,player,facing,item,block, block: {x,y,z}} = e;

    let radius = 48;
    let found = false;

    if (item.id == 'kubejs:geological_hammer') {
        player.addItemCooldown(item, 30)
        player.swing();
        if (!player.isCreative()) item.setDamageValue(item.getDamageValue() + 1);

        let aabb;

        switch (facing) {
            case 'down':
                aabb = AABB.of(x, y, z, x, y + radius, z);
            break;
            case 'up':
                aabb = AABB.of(x, y, z, x, y - radius, z);
            break;
            case 'north':
                aabb = AABB.of(x, y, z, x, y, z + radius);
            break;
            case 'south':
                aabb = AABB.of(x, y, z, x, y, z - radius);
            break;
            case 'west':
                aabb = AABB.of(x, y, z, x + radius, y, z);
            break;
            case 'east':
                aabb = AABB.of(x, y, z, x - radius, y, z);
            break;
        }

        let blocks = level.getBlockStates(aabb);
        let BlockFounded;
        
        blocks.forEach(AABBblock => {
            if (AABBblock.hasTag('c:ores')) {
                found = true
                BlockFounded = AABBblock.id;
            };
        });

        if (found) {
            let itemName = Item.of(BlockFounded).hoverName
            let text = Text.green([`§aFound `, itemName, '!']).bold()

            player.tell(text)
        } else {
            player.tell(`Nothing was found within ${radius} blocks.`)
        }
    };
});

// BlockEvents.leftClicked(e => {
//     console.log(e.block.getBlockState().getStateIndex())
// });

//global.steamMiningDrillSilkDisable();