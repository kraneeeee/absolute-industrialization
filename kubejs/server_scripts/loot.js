LootJS.modifiers(e => {

    let block = (id) => e.addBlockModifier(id);
    let entity = (id) => e.addEntityModifier(id)

    //entity('undergarden:forgotten_guardian').removeLoot('bhc:yellow_heart')

    function getIfSilkTouch(c) {
        c.matchMainHand(ItemFilter.anyOf(
                ItemFilter.hasEnchantment("minecraft:silk_touch"),
                ItemFilter.custom(item => {
                    if (item.id == `${mi}steam_mining_drill`) {
                        if (!item.toNBT().asString.includes('"modern_industrialization:silk_touch":0b')) {
                            return true
                        } else return false;;
                    } else return false;;      
                })
            )
        )
    }

    function getIfNotSilkTouch(c) {
         c.matchMainHand(ItemFilter.allOf(
                ItemFilter.not(ItemFilter.hasEnchantment("minecraft:silk_touch")),
                ItemFilter.not(ItemFilter.custom(item => {
                    if (item.id == `${mi}steam_mining_drill`) {
                        if (!item.toNBT().asString.includes('"modern_industrialization:silk_touch":0b')) {
                            return true
                        } else return false;;
                    } else return false;;      
                })
            )
        ))
    }    

    block('kubejs:compact_greenhouse_glass')
        .removeLoot(Ingredient.all)
        .addLoot(
            LootEntry.of('kubejs:compact_greenhouse_glass').when(c => 
                getIfSilkTouch(c)
            )
        )

    function addXp(blo, xp) {
        block(blo)
        .dropExperience(xp)
    };

    addXp('actuallyadditions:black_quartz_ore', 3)
    addXp('kubejs:deepslate_black_quartz_ore', 3)

    global.customMIMachines.forEach(machine => {
        block(`modern_industrialization:${machine}`)
            .addLoot(`modern_industrialization:${machine}`)
    });

    global.miTweaksMachines.forEach(machine => {
        block(`mi_tweaks:${machine}`)
            .addLoot(`mi_tweaks:${machine}`)
    });

    const oresToRaw = [
        ['titanium', `${mi}raw_titanium`],
        ['tungsten', `${mi}raw_tungsten`],
        ['iridium', `${mi}raw_iridium`],
        ['uraninite', `kubejs:raw_uraninite`]
    ];
    function miningOre(minedBlock, rawMaterial, count) {
        block(minedBlock)
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of(rawMaterial, count).when(c => 
           getIfNotSilkTouch(c)
        ))
        .applyOreBonus('minecraft:fortune')
        .addLoot(
            LootEntry.of(minedBlock).when(c => 
                getIfSilkTouch(c)
            )
        )
    }

    oresToRaw.forEach(material => {
        miningOre(`kubejs:${material[0]}_ore`, material[1], 1)
    });

    global.oreSamples.forEach(prop => {
        block(`kubejs:${prop.material}_sample`)
            .removeLoot(Ingredient.all)
            .addLoot(prop.drop);
    });

    const oresToRawAlt = [
        [
            'undergarden:depthrock_diamond_ore',
            'kubejs:raw_diamond',
            1
        ],
        [
            'undergarden:shiverstone_diamond_ore',
            'kubejs:raw_diamond',
            1
        ]
    ];

    oresToRawAlt.forEach(prop => {
        miningOre(prop[0], prop[1], prop[2])
    });

    for (const [material,color] of Object.entries(global.processingItems)) {
        let amount;
        switch (material) {
            case 'redstone':
                amount = 2
            break;
            case 'lapis':
                amount = 3
            break;
            default:
                amount = 1
            break;
        };

        let MinedBlock;
        let MinedDeepslateBlock;

        switch (material) {
            case 'iron':
            case 'copper':
            case 'coal':
            case 'gold':
            case 'redstone':
            case 'emerald':
            case 'lapis':
            case 'diamond':
                MinedBlock = `${material}_ore`;
                MinedDeepslateBlock = `deepslate_${material}_ore`
            break;
            case 'black_quartz':
                MinedBlock = `actuallyadditions:${material}_ore`;
                MinedDeepslateBlock = `kubejs:deepslate_${material}_ore`
            break;
            case 'sulfur':
                MinedBlock = `kubejs:${material}_ore`
            break;
            case 'quartz':
                MinedBlock = `nether_${material}_ore`
            break;
            case 'monazite':
            case 'bauxite':
            case 'salt':
            case 'lignite_coal':
                MinedBlock = `${mi}${material}_ore`
                MinedDeepslateBlock = `${mi}deepslate_${material}_ore`
            break;
            default:
        };
       
        switch (material) {
            case 'iron':
            case 'copper':
            case 'tin':
            case 'gold':
            case 'antimony':
            case 'lead':
            case 'nickel':
            case 'silver':
            case 'cloggrum':
            case 'froststeel':
            break;
            case 'sulfur':
            case 'quartz':
                miningOre(MinedBlock, `kubejs:raw_${material}`, amount)
            break;
            default:
                miningOre(MinedBlock, `kubejs:raw_${material}`, amount)
                miningOre(MinedDeepslateBlock, `kubejs:raw_${material}`, amount)
        };
    }
});