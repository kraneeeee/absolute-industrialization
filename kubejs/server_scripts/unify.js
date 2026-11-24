newUnify()

function newUnify() {
    const unifies = [
        {
            mod: 'industrialforegoing',
            unified: [
                {
                    parts: 'gear',
                    materials: ['iron','gold','diamond'],
                    tags: 'gears'
                }
            ]
        },
        {
            mod: 'enderio',
            unified: [
                {
                    parts: 'powdered',
                    materials: ['coal','iron','gold','copper','tin','ender_pearl','lapis_lazuli','quartz'],
                    tags: 'dusts'
                },
                {
                    parts: 'gear',
                    materials: ['iron','vibrant','energized'],
                    tags: 'gears'
                }
            ]
        },
        {
            mod: 'morered',
            unified: [
                {
                    parts: 'ingot',
                    materials: ['red_alloy'],
                    tags: 'ingots'
                }
            ]
        },
        {
            mod: 'expandeddelight',
            unified: [
                {
                    parts: '',
                    materials: ['salt'],
                    tags: 'dusts'
                }
            ]
        }
    ]

    unifies.forEach(property => {
        property.unified.forEach(unifyProp => {
            unifyProp.materials.forEach(material => {
                let item;

                switch (property.mod) {
                    case 'enderio':
                        if (unifyProp.parts == 'gear') {
                            item = `${property.mod}:${material}_${unifyProp.parts}`
                        } else item = `${property.mod}:${unifyProp.parts}_${material}`
                    break;
                    case 'expandeddelight':
                        item = `${property.mod}:${material}${unifyProp.parts}`
                    break;
                    default:
                        item = `${property.mod}:${material}_${unifyProp.parts}`
                };

                const tag = `c:${unifyProp.tags}/${material}`

                ServerEvents.recipes(e => {
                    const items = Ingredient.of(`#${tag}`).itemIds;
                
                    items.forEach(prop => {
                        if (prop.startsWith('modern_industrialization:')) {
                            e.replaceOutput({}, item, prop);
                            e.replaceInput({}, item, prop)
                        }
                    });
                })

                ServerEvents.tags('item', e => {
                    //console.log(tag, item)
                    e.add("c:hidden_from_recipe_viewers", item)
                    e.remove(tag, item)
                    e.remove(`c:${unifyProp.tags}`, item)
                });
                
                LootJS.lootTables(e => {
                    e.modifyLootTables(LootType.CHEST).removeItem(item)
                });
            });
        }); 
    });

    let toReplace = [
        {
            toReplaceWith: `${mi}silicon_ingot`,
            toReplace: [`enderio:silicon`, `ae2:silicon`],
            tag: 'c:silicon'
        },
        {
            toReplaceWith: 'kubejs:draconium_block',
            toReplace: ['draconicevolution:draconium_block'],
            tag: 'c:storage_blocks/draconium'
        }
    ];

    toReplace.forEach(property => {
        property.toReplace.forEach(toHide => {
            ServerEvents.tags('item', e => {
                e.add("c:hidden_from_recipe_viewers", toHide)
                e.remove(property.tag, toHide)
            });
        });

        ServerEvents.recipes(e => {
            e.replaceOutput({}, `#${property.tag}`, property.toReplaceWith);
            e.replaceInput({}, `#${property.tag}`, property.toReplaceWith);
        });
    });
};

