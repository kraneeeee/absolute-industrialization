ServerEvents.generateData('after_mods', e => {

  let MIoresToRemove = [
    'antimony',
    'bauxite',
    'iridium',
    'lead',
    'lignite_coal',
    'monazite',
    'nickel',
    'salt',
    'tin',
    'tungsten',
    'uranium'
  ];

  MIoresToRemove.forEach(ore => {
    e.json(`modern_industrialization:worldgen/configured_feature/ore_generator_${ore}`, {
      "type": "minecraft:ore",
      "config": {
        "discard_chance_on_air_exposure": 0.0,
        "size": 0,
        "targets": [
          {
            "state": {
              "Name": `modern_industrialization:${ore}_ore`
            },
            "target": {
              "predicate_type": "minecraft:tag_match",
              "tag": "minecraft:deepslate_ore_replaceables"
            }
          }
        ]
      }
    })

      e.json(`modern_industrialization:worldgen/placed_feature/ore_generator_${ore}`, {
        "feature": `modern_industrialization:ore_generator_${ore}`,
        "placement": [
          {
            "type": "minecraft:count",
            "count": 0
          },
          {
            "type": "minecraft:in_square"
          },
          {
            "type": "minecraft:height_range",
            "height": {
              "type": "minecraft:uniform",
              "max_inclusive": {
                "absolute": 16
              },
              "min_inclusive": {
                "above_bottom": 0
              }
            }
          },
          {
            "type": "minecraft:biome"
          }
        ]
      });

      e.json(`modern_industrialization:worldgen/configured_feature/deepslate_ore_generator_${ore}`, {
        "type": "minecraft:ore",
        "config": {
          "discard_chance_on_air_exposure": 0.0,
          "size": 0,
          "targets": [
            {
              "state": {
                "Name": `modern_industrialization:deepslate_${ore}_ore`
              },
              "target": {
                "predicate_type": "minecraft:tag_match",
                "tag": "minecraft:deepslate_ore_replaceables"
              }
            }
          ]
        }
      })

      e.json(`modern_industrialization:worldgen/placed_feature/deepslate_ore_generator_${ore}`, {
        "feature": `modern_industrialization:deepslate_ore_generator_${ore}`,
        "placement": [
          {
            "type": "minecraft:count",
            "count": 0
          },
          {
            "type": "minecraft:in_square"
          },
          {
            "type": "minecraft:height_range",
            "height": {
              "type": "minecraft:uniform",
              "max_inclusive": {
                "absolute": 16
              },
              "min_inclusive": {
                "above_bottom": 0
              }
            }
          },
          {
            "type": "minecraft:biome"
          }
        ]
      })

  });

    e.json('modern_industrialization:data_maps/fluid/fluid_fuels.json', {
        "values": {
          "modern_industrialization:biodiesel": {
            "eu_per_mb": 250
          },
          "modern_industrialization:boosted_diesel": {
            "eu_per_mb": 800
          },
          "modern_industrialization:creosote": {
            "eu_per_mb": 160
          },
          "modern_industrialization:crude_oil": {
            "eu_per_mb": 16
          },
          "modern_industrialization:deuterium": {
            "eu_per_mb": 1
          },
          "modern_industrialization:diesel": {
            "eu_per_mb": 400
          },
          "modern_industrialization:heavy_fuel": {
            "eu_per_mb": 240
          },
          "modern_industrialization:hydrogen": {
            "eu_per_mb": 1
          },
          "modern_industrialization:light_fuel": {
            "eu_per_mb": 160
          },
          "modern_industrialization:naphtha": {
            "eu_per_mb": 80
          },
          "modern_industrialization:raw_biodiesel": {
            "eu_per_mb": 50
          },
          "modern_industrialization:synthetic_oil": {
            "eu_per_mb": 16
          },
          "modern_industrialization:tritium": {
            "eu_per_mb": 1
          },
          "actuallyadditions:refined_canola_oil": {
            "eu_per_mb": 90
          },
          "actuallyadditions:crystallized_oil": {
            "eu_per_mb": 160
          },
          "actuallyadditions:empowered_oil": {
            "eu_per_mb": 240
          }
        }
      })

});