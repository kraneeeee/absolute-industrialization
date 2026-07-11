ClientEvents.generateAssets('after_mods', e => {
  categoriesHide();

  global.compressedBlocks.forEach(property => {
    property[1].forEach(tier => {
      e.json(
        `kubejs:models/block/${tier}_${property[0]}`,
        {
          "parent": "minecraft:block/block",
          "children": {
            "Solid": {
              "parent": property[2]
            },
            "Translucent": {
              "parent": "minecraft:block/cube_all",
              "textures": {
                "all": `kubejs:block/${tier}`
              }
            }
          },
          "item_render_order": [
            "Solid",
            "Translucent"
          ],
          "loader": "neoforge:composite",
          "textures": {
            "particle": property[2]
          }
        }
      )
    });
  });

  global.customMIMachines.forEach(machine => {
    e.json(
      `modern_industrialization:blockstates/${machine}`,
      {
        "variants": {
          "": {
            "model": `modern_industrialization:block/${machine}`
          }
        }
      }
    );

    e.json(
      `modern_industrialization:models/item/${machine}`,
      {
        "parent": `modern_industrialization:block/${machine}`
      }
    );
  });

  global.miTweaksMachines.forEach(machine => {
    e.json(
      `mi_tweaks:blockstates/${machine}`,
      {
        "variants": {
          "": {
            "model": `modern_industrialization:block/${machine}`
          }
        }
      }
    );

    e.json(
      `mi_tweaks:models/item/${machine}`,
      {
        "parent": `modern_industrialization:block/${machine}`
      }
    );
  });

  // global.materialsToRegister.forEach(prop => {
  //   prop.items.forEach(item => {
  //     switch (item) {
  //         case 'coil':
  //           e.json(
  //             `kubejs:models/block/${prop.material}_coil`,
  //             {
  //               "parent": "minecraft:block/cube_column",
  //               "textures": {
  //                 "end": "kubejs:block/materialsets/coil_end",
  //                 "side": "kubejs:block/materialsets/coil_side"
  //               }
  //             }
  //           )
  //         break;
  //         default:
  //     };
  //   });
  // })


  global.cables.forEach(material => {
    e.json(
      `modern_industrialization:models/item/${material}_cable`,
      {
        "delegate": "modern_industrialization:block/pipe",
        "loader": "modern_industrialization:delegate"
      }
    )
  });

  for (const [material, items] of Object.entries(global.toGenerateDefaultTexture)) {
    items.forEach(item => {
      e.json(`modern_industrialization:models/item/${material}_${item}`, {
        "parent": "minecraft:item/generated",
        "textures": {
          "layer0": `modern_industrialization:item/${material}_${item}`
        }
      })
    });
  };

  function categoriesHide() {
    let categories = [
      'industrialforegoing:fluid_extractor',
      'enderio:primitive_alloy_smelting',
      // 'industrialforegoing:mycellial_furnace',
      // 'industrialforegoing:mycellial_slimey',
      // 'industrialforegoing:mycellial_culinary',
      // 'industrialforegoing:mycellial_potion',
      // 'industrialforegoing:mycellial_disenchantment',
      // 'industrialforegoing:mycellial_ender',
      // 'industrialforegoing:mycellial_explosive',
      // 'industrialforegoing:mycellial_frosty',
      // 'industrialforegoing:mycellial_halitosis',
      // 'industrialforegoing:mycellial_magma',
      // 'industrialforegoing:mycellial_pink',
      // 'industrialforegoing:mycellial_netherstar',
      // 'industrialforegoing:mycellial_death',
      // 'industrialforegoing:mycellial_rocket',
      // 'industrialforegoing:mycellial_crimed',
      // 'industrialforegoing:mycellial_meatallurgic',
      'industrialforegoing:fluid_sieve',
      'industrialforegoing:ore_washing',
      'industrialforegoing:fermentation_station',
      'enderio:soul_engine',
      'industrialforegoing:bioreactor'
    ];

    let filters = [];

    categories.forEach(category => [
      filters.push({ category: category })
    ]);

    e.json(
      `emi:recipe/filters/category_hide`,
      {
        "filters": filters
      }
    )
  };

  let fences = [
    'tungstensteel',
    'stainless_steel',
    'copper'
  ];

  fences.forEach(fence => {
    [
      'east',
      'north',
      'south',
      'west'
    ].forEach(prop => {
      e.json(`kubejs:models/block/${fence}_fence_side_${prop}`,
        {
          "parent": `minecraft:block/custom_fence_side_${prop}`,
          "textures": {
            "texture": `kubejs:block/${fence}_fence`
          }
        }
      )
    });

    e.json(`kubejs:models/block/${fence}_fence_post`,
      {
        "parent": "minecraft:block/custom_fence_post",
        "textures": {
          "particle": `kubejs:block/${fence}_fence`,
          "texture": `kubejs:block/${fence}_fence`
        }
      }
    )

    e.json(`kubejs:blockstates/${fence}_fence`, {
      "multipart": [
        {
          "apply": {
            "model": `kubejs:block/${fence}_fence_post`
          }
        },
        {
          "apply": {
            "model": `kubejs:block/${fence}_fence_side_north`,
            "uvlock": false
          },
          "when": {
            "north": "true"
          }
        },
        {
          "apply": {
            "model": `kubejs:block/${fence}_fence_side_east`,
            "uvlock": false
          },
          "when": {
            "east": "true"
          }
        },
        {
          "apply": {
            "model": `kubejs:block/${fence}_fence_side_south`,
            "uvlock": false
          },
          "when": {
            "south": "true"
          }
        },
        {
          "apply": {
            "model": `kubejs:block/${fence}_fence_side_west`,
            "uvlock": false
          },
          "when": {
            "west": "true"
          }
        }
      ]
    })

    e.json(`kubejs:models/block/${fence}_fence_inventory`, {
      "parent": "minecraft:block/custom_fence_inventory",
      "textures": {
        "texture": `kubejs:block/${fence}_fence`
      }
    })

    e.json(`kubejs:models/item/${fence}_fence`, {
      "parent": `kubejs:block/${fence}_fence_inventory`
    })
  })

  let tips = [
    {
      id: 'ores',
      tip: 'Ores now spawn in massive veins, which can be located by surface indicators on the ground.'
    },
    {
      id: 'emi',
      tip: 'Use EMI to view recipes and plan out your crafting trees.'
    },
    {
      id: 'quests',
      tip: 'The quests will guide you through everything the modpack has to offer.'
    },
    {
      id: 'circuit_automatization',
      tip: 'It is extremely important to automate the crafting of Analog Circuits early in the game.'
    },
    {
      id: 'cursed_earth',
      tip: 'Use Cursed Earth to farm Pink Slime.'
    },
    {
      id: 'hearts_for_food',
      tip: 'You gain a heart for every 20 new types of food you try.'
    },
    {
      id: 'radiation',
      tip: "Before handling radioactive items, don't forget to put on rubber armor."
    },
    {
      id: 'hang_glider',
      tip: 'The Hang Glider helps cover long distances early in the game.'
    },
    {
      id: 'mining_hammers',
      tip: 'Mining Hammers break blocks in a 3x3 area, making ore gathering much easier in the early game.'
    },
    {
      id: 'cardboard_box',
      tip: 'The Cardboard Box lets you easily move many blocks without any hassle.'
    },
    {
      id: 'steam_mining_drill',
      tip: 'The Steam Mining Drill comes with built-in Silk Touch.'
    },
    {
      id: 'farmers_delight',
      tip: "§dFarmer's Delight§r adds a wide variety of different foods."
    },
    {
      id: 'water',
      tip: "Infinite water sources are disabled in this modpack, so it's important to begin your journey near naturally generated water sources."
    },
    {
      id: 'tools',
      tip: "Wooden and stone tools are disabled in this modpack — use flint tools instead."
    }
  ]

  tips.forEach(prop => {
    e.json(`kubejs:tips/${prop.id}`, {
      "type": "tipsmod:simple",
      "text": prop.tip
    })
  });

  e.json(`kubejs:tips/ct`, {
      "title": {
        "text": "Fact",
        "bold": true,
        "color": "lime"
      },
      "tip": {
        "text": "Originally, the modpack was supposed to be called Contemporary Technologies."
      }
    })
});