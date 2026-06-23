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
                            e.replaceInput({}, item, prop);
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



// const mods = [
//     'railcraft',
//     'industrialforegoing',
//     'enderio',
//     'morered',
//     'expandeddelight'
// ];

// const materials = [
//     'bronze',
//     'copper',
//     'lead',
//     'nickel',
//     'invar',
//     'silver',
//     'tin',
//     'steel',
//     'iron',
//     'gold',
//     'coal',
//     'diamond',
//     'quartz',
//     'lapis',
//     'red_alloy',
//     'salt'
// ];

// const parts = [
//     'ingot',
//     'plate',
//     'storage_block',
//     'block',
//     'plate',
//     'gear',
//     'nugget',
//     'dust',
//     'raw_material',
//     'ore'
// ];

// mods.forEach(mod => {
//     parts.forEach(part => {
//         materials.forEach(material => {
//             let item;
//             let tag = `c:${part}s/${material}`;
    
//             switch (part) {
//                 case 'storage_block':
//                     item = `${mod}:${material}_block`;
//                 break;
//                 case 'dust':
//                     if (mod == 'enderio') {
//                         if (material == 'lapis') {
//                             item = `enderio:powdered_lapis_lazuli`
//                         } else {
//                             item = `enderio:powdered_${material}`
//                         };
//                     } else if (mod == 'expandeddelight') {
//                         item = 'expandeddelight:salt'  
//                     };;
//                 break;
//                 default:
//                     item = `${mod}:${material}_${part}`;
//             };
    
//             ServerEvents.tags('item', e => {
//                 e.add("c:hidden_from_recipe_viewers", item)
//                 e.remove(tag, item)
//                 e.remove(`c:${part}s`, item)
//             });
    
//             ServerEvents.recipes(e => {
//                 const items = Ingredient.of(`#${tag}`).itemIds;
                
//                 items.forEach(property => {
//                     if (property.startsWith('modern_industrialization:')) {
//                         e.replaceOutput({}, item, property);
//                         e.replaceInput({}, item, property);
//                     }
//                 });
//             });
//         });
//     });    
// });

// let toReplace = [
//     {
//         toReplaceWith: `${mi}silicon_ingot`,
//         toReplace: [`enderio:silicon`, `ae2:silicon`],
//         tag: 'c:silicon'
//     }
// ];

// toReplace.forEach(property => {
//     property.toReplace.forEach(toHide => {
//         ServerEvents.tags('item', e => {
//             e.add("c:hidden_from_recipe_viewers", toHide)
//             e.remove(property.tag, toHide)
//         });
//     });

//     ServerEvents.recipes(e => {
//         e.replaceOutput({}, `#${property.tag}`, property.toReplaceWith);
//         e.replaceInput({}, `#${property.tag}`, property.toReplaceWith);
//     });
// });

// ServerEvents.recipes(e => {
//     e.forEachRecipe({id: /enderio:sag_milling\/(iron|coal|gold|lapis|quartz)/}, r => {
//         let output = r.json.get('outputs').get(0).get('item').get('id').toString();

//         if (output.includes('powdered')) {
//             let material = output.substring(18).replace('"','')
//             let result;

//             switch (material) {
//                 case 'lapis_lazuli':
//                     result = `${mi}lapis_dust`
//                 break;
//                 default:
//                     result = `${mi}${material}_dust`
//             };

//             e.custom({
//                 "type": "enderio:sag_milling",
//                 "bonus": "none",
//                 "energy": r.json.get('energy'),
//                 "input": r.json.get('input'),
//                 "outputs": [
//                     {
//                         "item": {
//                             "count": 1,
//                             "id": result
//                         }
//                     }
//                 ]
//             }).id(r.getId())
//         };
//     });
// });

