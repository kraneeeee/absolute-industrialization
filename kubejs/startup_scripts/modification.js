ItemEvents.modification(e => {
    global.disabledTools.forEach(tool => {
        e.modify(tool, item => {
            item.maxDamage = 1;
        });
    });

    e.modify('kubejs:steel_mining_hammer', item => {
        item.tier = c => {
            c.speed = 7.0
            c.repairIngredient = 'modern_industrialization:steel_ingot'
        }
        item.maxDamage = 990;
    });

    e.modify('kubejs:dark_steel_mining_hammer', item => {
        item.tier = c => {
            c.repairIngredient = 'enderio:dark_steel_ingot'
        }
        item.maxDamage = 2220
    });

    e.modify('justhammers:iron_hammer', item => {
        item.maxDamage = 720;
    });

    e.modify('justhammers:gold_hammer', item => {
        item.maxDamage = 180;
    });

    e.modify('justhammers:diamond_hammer', item => {
        item.maxDamage = 2700;
    });
});

BlockEvents.modification(e => {
    e.modify(/elevatorid:elevator/, block => {
        block.requiresTool = true;
    })
})