let PRIMITIVE_PUMP;
let PYROLYSE_OVEN;
let LARGE_CHEMICAL_REACTOR;
let OIL_CRACKING_UNIT;
let ADVANCED_ELECTRIC_QUARRY;
let INTERDIMENSIONAL_MINER;
let ASSEMBLY_LINE;
let MATTER_CONDENSATOR;
let QUANTUM_INSTALLER;
let INDUSTRIAL_EMPOWERER;
let NUCLEAR_RECYCLER;
let NUCLEAR_COMPONENT_ASSEMBLER;
let METAMORPHIC_CONSTRUCTOR;
let SINGULAR_COMPRESSOR;
let BEDROCK_DRILLING_RIG;
let MASSIVE_FORGE_HAMMER;
let MASSIVE_WIREMILL;
let MASSIVE_COMPRESSOR;
let POLARIZATION_TOWER;
let COMPACT_GREENHOUSE;
let WATER_TOWER;
let TRANSMUTATOR;
let TURNEDOFF;
let DRACONIUM_AWAKENER;
let DRACONIC_DESTROYER;
let CHAOTIC_ASSEMBLER;
let AWAKENED_ALLOY_SMELTER;
let HEAT_ABSORBING_BLAST_FURNACE

MIMachineEvents.registerRecipeTypes(event => {
    PRIMITIVE_PUMP = event.register("primitive_pump")
        .withItemInputs()
        .withFluidOutputs();

    WATER_TOWER = event.register("water_tower")
        .withItemInputs()
        .withFluidOutputs();

    PYROLYSE_OVEN = event.register("pyrolyse_oven")
        .withItemInputs()
        .withItemOutputs()
        .withFluidOutputs();

    LARGE_CHEMICAL_REACTOR = event.register("large_chemical_reactor")
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();

    OIL_CRACKING_UNIT = event.register("oil_cracking_unit")
        .withFluidInputs()
        .withFluidOutputs();

    ADVANCED_ELECTRIC_QUARRY = event.register('advanced_electric_quarry')
        .withItemInputs()
        .withItemOutputs()

    INTERDIMENSIONAL_MINER = event.register('interdimensional_miner')
        .withItemInputs()
        .withItemOutputs()

    BEDROCK_DRILLING_RIG = event.register('bedrock_drilling_rig')
        .withItemInputs()
        .withFluidOutputs()

    MASSIVE_WIREMILL = event.register('massive_wiremill')
        .withItemInputs()
        .withItemOutputs()

    MASSIVE_FORGE_HAMMER = event.register('massive_forge_hammer')
        .withItemInputs()
        .withItemOutputs()

    MASSIVE_COMPRESSOR = event.register('massive_compressor')
        .withItemInputs()
        .withItemOutputs()

    TURNEDOFF = event.register('turned_off')
        .withItemInputs()
        .withItemOutputs()

    ASSEMBLY_LINE = event.register('assembly_line')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()

    MATTER_CONDENSATOR = event.register('matter_condensator')
        .withItemInputs()
        .withFluidOutputs()

    SINGULAR_COMPRESSOR = event.register("singular_compressor")
        .withItemInputs()
        .withItemOutputs();

    QUANTUM_INSTALLER = event.register('quantum_installer')
        .withItemInputs()
        .withItemOutputs()

    INDUSTRIAL_EMPOWERER = event.register('industrial_empowerer')
        .withItemInputs()
        .withItemOutputs()

    NUCLEAR_RECYCLER = event.register('nuclear_recycler')
        .withItemInputs()
        .withItemOutputs()

    COMPACT_GREENHOUSE = event.register('compact_greenhouse')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()

    METAMORPHIC_CONSTRUCTOR = event.register('metamorphic_constructor')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()

    NUCLEAR_COMPONENT_ASSEMBLER = event.register('nuclear_component_assembler')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()

    DRACONIUM_AWAKENER = event.register('draconium_awakener')
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()

    DRACONIC_DESTROYER = event.register('draconic_destroyer')
        .withItemInputs()
        .withItemOutputs()
        .withFluidOutputs();

    CHAOTIC_ASSEMBLER = event.register('chaotic_assembler')
        .withItemInputs()
        .withItemOutputs()

    AWAKENED_ALLOY_SMELTER = event.register("awakened_alloy_smelter")
        .withItemInputs()
        .withItemOutputs();

    HEAT_ABSORBING_BLAST_FURNACE = event.register("heat_absorbing_blast_furnace")
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs()
        .withFluidOutputs();

    POLARIZATION_TOWER = event.register('polarization_tower')
        .withItemInputs()
        .withItemOutputs()

    TRANSMUTATOR = event.register("transmutator")
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MIMachineEvents.registerMachines(event => {
    const magneticIronCasing = event.memberOfBlock('kubejs:magnetic_iron_casing');
    const steelCasing = event.memberOfBlock('modern_industrialization:steel_machine_casing');
    const steelPipeCasing = event.memberOfBlock('modern_industrialization:steel_machine_casing_pipe');
    const cloggrumSteelCasing = event.memberOfBlock('kubejs:cloggrum_steel_casing');
    const cupronickelCoils = event.memberOfBlock('modern_industrialization:cupronickel_coil');
    const StainSteelCasing = event.memberOfBlock(`modern_industrialization:clean_stainless_steel_machine_casing`);
    const StainSteelPipeCasing = event.memberOfBlock(`modern_industrialization:stainless_steel_machine_casing_pipe`);
    const titaniumCasing = event.memberOfBlock(`modern_industrialization:solid_titanium_machine_casing`);
    const titaniumPipeCasing = event.memberOfBlock(`modern_industrialization:titanium_machine_casing_pipe`);
    const draconiumCasing = event.memberOfBlock(`kubejs:draconium_casing`);
    const draconiumipeCasing = event.memberOfBlock(`kubejs:draconium_pipe_casing`);
    const awakenedCasing = event.memberOfBlock(`kubejs:awakened_casing`);
    const chaoticCasing = event.memberOfBlock(`kubejs:chaotic_casing`);
    const iridiumCasing = event.memberOfBlock(`modern_industrialization:plasma_handling_iridium_machine_casing`);
    const iridiumPipeCasing = event.memberOfBlock(`modern_industrialization:iridium_machine_casing_pipe`);
    const tungstensteelCasing = event.memberOfBlock(`kubejs:tungstensteel_machine_casing`);
    const nuclearCasing = event.memberOfBlock(`modern_industrialization:nuclear_casing`);
    const nuclearCasingPipe = event.memberOfBlock('modern_industrialization:nuclear_alloy_machine_casing_pipe');
    const metamorphic_constructor_casing = event.memberOfBlock('kubejs:metamorphic_constructor_casing');
    const DarkSteelCasing = event.memberOfBlock('kubejs:dark_steel_casing');
    const CopperCasing = event.memberOfBlock('kubejs:copper_casing');
    const CopperFence = event.memberOfBlock('kubejs:copper_fence');
    const superConductorCasing = event.memberOfBlock('kubejs:superconductor_casing')
    const MassiveLineCasing = event.memberOfBlock('kubejs:massive_line_casing');
    const darkMatterCasing = event.memberOfBlock('kubejs:dark_matter_casing');

    primitivePump();
    waterTower();
    pyrolyseOven();
    largechemicalreactor();
    oilCrackingUnit();
    advancedElectricQuarry();
    interdimensionalMiner();
    bedrockDrillingRig();
    assemblyLine();
    mattercondensator();
    massivecompressor()
    massiveforgehammer()
    massivewiremill();
    quantuminstaller();
    industrialempowerer();
    nuclearRecycler();
    nuclearComponentAssembler();
    metamorphicConstructor()
    polarizationTower();
    compactGreenhouse();
    transmutator();
    singularCompressor();
    draconiumAwakener();
    draconicDestroyer();
    chaoticAssembler();
    awakenedAlloySmelter();
    heatAbsorbingBlastFurnace();

    function primitivePump() {
        const hatches = event.hatchOf('item_input', "fluid_input", "fluid_output");
        const pump_siding = event.memberOfBlock('kubejs:primitive_pump_siding');
        const treated_wood_frame_box = event.memberOfBlock('kubejs:treated_wood_frame_box');

        const pumpShape = event.layeredShape("primitive_pump", [
            ["ccc"," b "," b "],
            ["cac","b b","bbb"],
            ["cac","   "," b "],
            ['c#c',' b ',' b ']
        ])
            .key("a", pump_siding, event.noHatch())
            .key("c", pump_siding, hatches)
            .key("b", treated_wood_frame_box, event.noHatch())
            .build();
        event.simpleSteamCraftingMultiBlock(
            "Primitive Pump", "primitive_pump", PRIMITIVE_PUMP, pumpShape,
            event.progressBar(77, 33, "arrow"),
            itemInputs => itemInputs.addSlots(56, 35, 1,1), itemOutputs => {},
            fluidInputs => {}, fluidOutputs => fluidOutputs.addSlot(102, 35),
            "primitive_pump", "water_pump_overlays", true, false, false,
        );
    };

    function waterTower() {
        const hatches = event.hatchOf('item_input', "energy_input", "fluid_output");

       const shape = event.layeredShape("copper_casing", [
            ['eeeee',"aa aa", " b b ", " b b ", " b b ", " ada ", " b b ", " b b ", " b b ", " aaa "],
            ['eeeee',"aa aa", "bb bb", "bb bb", "bb bb", "ab ba", "bb bb", "bb bb", "bb bb", "ababa"],
            ['eeeee',"  c  ", "  c  ", "  c  ", "  c  ", "d c d", "  c  ", "  c  ", "  c  ", "aaaaa"],
            ['eeeee',"aa aa", "bb bb", "bb bb", "bb bb", "ab ba", "bb bb", "bb bb", "bb bb", "ababa"],
            ['eeeee',"aa aa", " b b ", " b b ", " b b ", " a#a ", " b b ", " b b ", " b b ", " aaa "],
        ])
        .key("a", CopperCasing, event.noHatch())
        .key("b", CopperFence, event.noHatch())
        .key("c", event.memberOfBlock("kubejs:copper_drill"), event.noHatch())
        .key("d", CopperCasing, hatches)
        .key("e", event.memberOfBlock("minecraft:water"), event.noHatch())
        .build();
        event.simpleElectricCraftingMultiBlock(
            "Water Tower", "water_tower", WATER_TOWER, shape,
            event.progressBar(77, 33, "arrow"),
            itemInputs => itemInputs.addSlots(56, 35, 1,1), itemOutputs => {},
            fluidInputs => {}, fluidOutputs => fluidOutputs.addSlot(102, 35),
            "copper_casing", "assembler_overlays", true, false, false,
        );
    };

    function pyrolyseOven() {
        const hatches = event.hatchOf('item_input', 'item_output',"fluid_output", 'energy_input');

        const pyrolyseShape = event.layeredShape("cloggrum_steel_casing", [
            ["aaa","aaa","aaa"],
            ["bbb","b b","bbb"],
            ["bbb","b b","bbb"],
            ['aaa','a#a','aaa']
        ])
            .key("a", cloggrumSteelCasing, hatches)
            .key("b", cupronickelCoils, event.noHatch())
            .build();

        event.simpleElectricCraftingMultiBlock(
            "Pyrolyse Oven", "pyrolyse_oven", PYROLYSE_OVEN, pyrolyseShape,
            event.progressBar(77, 33, "arrow"),
            itemInputs => itemInputs.addSlots(56, 35, 1,1), itemOutputs => itemOutputs.addSlot(102, 35),
            fluidInputs => {}, fluidOutputs => fluidOutputs.addSlot(120, 35),
            "cloggrum_steel_casing", "pyrolyse_oven_overlays", true, false, false,
        );
    }

    function largechemicalreactor() {
        const hatches = event.hatchOf('item_input', 'item_output',"fluid_input", "fluid_output", 'energy_input');
        const chemicalCasing = event.memberOfBlock('kubejs:large_chemical_reactor_casing');

        const largeChemicalReactorShape = event.layeredShape("large_chemical_reactor_casing", [
            ["aaa","cbc","aaa"],
            ["aaa","c c","aaa"],
            ['aaa','c#c','aaa']
        ])
            .key("a", chemicalCasing, hatches)
            .key('b', cupronickelCoils, event.noHatch())
            .key("c", chemicalCasing, event.noHatch())
            .build();

        event.simpleElectricCraftingMultiBlock(
            "Large Chemical Reactor", "large_chemical_reactor", LARGE_CHEMICAL_REACTOR, largeChemicalReactorShape,
            event.progressBar(83, 45, "triple_arrow"),
            itemInputs => itemInputs.addSlots(26, 35, 3,1), itemOutputs => itemOutputs.addSlots(110, 35,3,1),
            fluidInputs => fluidInputs.addSlots(26, 54, 3,1), fluidOutputs => fluidOutputs.addSlots(110, 54,3,1),
            "large_chemical_reactor_casing", "assembler_overlays", true, false, false,
        );
    }

    function oilCrackingUnit() {
        const hatches = event.hatchOf("fluid_input", "fluid_output", 'energy_input');

        const shape = event.layeredShape("clean_stainless_steel_machine_casing", [
            ["acaca","acaca","acaca"],
            ["acbca","a   a","acbca"],
            ['acaca','ac#ca','acaca']
        ])
            .key("a", StainSteelCasing, hatches)
            .key('b', StainSteelCasing, event.noHatch())
            .key('c', cupronickelCoils, event.noHatch())
            .build();

        event.simpleElectricCraftingMultiBlock(
            "Oil Cracking Unit", "oil_cracking_unit", OIL_CRACKING_UNIT, shape,
            event.progressBar(85, 33, "triple_arrow"),
            itemInputs => {}, itemOutputs => {},
            fluidInputs => fluidInputs.addSlots(42, 35, 2, 1), fluidOutputs => fluidOutputs.addSlots(115, 34,1,1),
            "clean_stainless_steel_machine_casing", "assembler_overlays", true, false, false,
        );
    }

    function advancedElectricQuarry() {
        const hatches = event.hatchOf("item_input", "item_output", 'energy_input');

        const shape = event.layeredShape("draconium", [
            ["cc   cc", "cc   cc", "cc   cc",'bb   bb', "cc   cc", "cc   cc", "cc   cc",'bb   bb','       ','       ','       ','       ','       '],
            ["cc   cc", "cc   cc", "cc   cc",'bbbbbbb', "cc   cc", "cc   cc", "cc   cc",'bbbabbb','       ','       ','       ','       ','       '],
            ['       ','       ','       ',' b   b ','       ','       ','       ',' bdbdb ','   d   ','   d   ','   d   ','       ','       '],
            ['   e   ','   e   ','   e   ',' b e b ','   e   ','   e   ','   e   ',' abeba ','  ded  ','  ded  ','  dbd  ','   c   ','   c   '],
            ['       ','       ','       ',' b   b ','       ','       ','       ',' bdbdb ','   d   ','   d   ','   d   ','       ','       '],
            ["cc   cc", "cc   cc", "cc   cc",'bbbbbbb', "cc   cc", "cc   cc", "cc   cc",'bbb#bbb','       ','       ','       ','       ','       '],
            ["cc   cc", "cc   cc", "cc   cc",'bb   bb', "cc   cc", "cc   cc", "cc   cc",'bb   bb','       ','       ','       ','       ','       ']

        ])
            .key("a", draconiumCasing, hatches)
            .key("b", draconiumCasing, event.noHatch())
            .key('c', event.memberOfBlock('kubejs:tungstensteel_fence'), event.noHatch())
            .key('d', draconiumipeCasing, event.noHatch())
            .key('e', event.memberOfBlock('kubejs:draconium_laser_drill'), event.noHatch())
            .build();

        event.simpleElectricCraftingMultiBlock(
            "Advanced Electric Quarry", "advanced_electric_quarry", ADVANCED_ELECTRIC_QUARRY, shape,
            event.progressBar(80, 33, "arrow"),
            itemInputs => itemInputs.addSlot(56, 35), itemOutputs => itemOutputs.addSlots(103, 35, 4, 4),
            fluidInputs => {}, fluidOutputs => {},
            "draconium", "assembler_overlays", true, false, false,
        );
    }

    function interdimensionalMiner() {
        const hatches = event.hatchOf("item_input", "item_output", 'energy_input');

        const shape = event.layeredShape("dark_matter", [
            ["cc   cc","cc   cc","cc   cc",'bb   bb',"cc   cc","cc   cc","cc   cc",'bb   bb','       ','       ','       ','       ','       '],
            ["cc   cc","cc   cc","cc   cc",'bbbbbbb',"cc   cc","cc   cc","cc   cc",'bbbabbb','       ','       ','       ','       ','       '],
            ['       ','       ','       ',' b   b ','       ','       ','       ',' bdbdb ','   d   ','   d   ','   d   ','       ','       '],
            ['   e   ','   e   ','   e   ',' b e b ','   e   ','   e   ','   e   ',' abeba ','  ded  ','  ded  ','  dbd  ','   c   ','   c   '],
            ['       ','       ','       ',' b   b ','       ','       ','       ',' bdbdb ','   d   ','   d   ','   d   ','       ','       '],
            ["cc   cc","cc   cc","cc   cc",'bbbbbbb',"cc   cc","cc   cc","cc   cc",'bbb#bbb','       ','       ','       ','       ','       '],
            ["cc   cc","cc   cc","cc   cc",'bb   bb',"cc   cc","cc   cc","cc   cc",'bb   bb','       ','       ','       ','       ','       ']

        ])
            .key("a", darkMatterCasing, hatches)
            .key("b", darkMatterCasing, event.noHatch())
            .key('c', event.memberOfBlock('kubejs:iridium_fence'), event.noHatch())
            .key('d', event.memberOfBlock('kubejs:dark_matter_pipe_casing'), event.noHatch())
            .key('e', event.memberOfBlock('kubejs:dark_matter_laser_drill'), event.noHatch())
            .build();

        event.simpleElectricCraftingMultiBlock(
            "Interdimensional Miner", "interdimensional_miner", INTERDIMENSIONAL_MINER, shape,
            event.progressBar(80, 33, "arrow"),
            itemInputs => itemInputs.addSlot(56, 35), itemOutputs => itemOutputs.addSlots(103, 35, 6, 6),
            fluidInputs => {}, fluidOutputs => {},
            "dark_matter", "assembler_overlays", true, false, false,
        );
    }

    function bedrockDrillingRig() {
        const hatches = event.hatchOf("item_input", "fluid_output", 'energy_input');

        const shape = event.layeredShape("clean_stainless_steel_machine_casing", [
            ["cc cc","cc cc","bb bb","cc cc","cc cc","bb bb","cc cc","cc cc","bb bb","cc cc","cc cc","bb bb",'     ','     ','     '],
            ["cc cc","cc cc","bb bb","cc cc","cc cc","bb bb","cc cc","cc cc","bb bb","cc cc","cc cc","bdadb",'  d  ','  d  ','  d  '],
            ['  e  ','  e  ','  e  ','  e  ','  e  ','  e  ','  e  ','  e  ','  e  ','  e  ','  e  ',' aea ',' ded ',' ded ',' dbd '],
            ["cc cc","cc cc","bb bb","cc cc","cc cc","bb bb","cc cc","cc cc","bb bb","cc cc","cc cc","bd#db",'  d  ','  d  ','  d  '],
            ["cc cc","cc cc","bb bb","cc cc","cc cc","bb bb","cc cc","cc cc","bb bb","cc cc","cc cc","bb bb",'     ','     ','     ']

        ])
            .key("a", StainSteelCasing, hatches)
            .key("d", StainSteelPipeCasing, event.noHatch())
            .key('c', event.memberOfBlock('kubejs:tungstensteel_fence'), event.noHatch())
            .key('b', StainSteelCasing, event.noHatch())
            .key('e', event.memberOfBlock('kubejs:stainless_steel_laser_drill'), event.noHatch())
            .build();

        event.simpleElectricCraftingMultiBlock(
            "Bedrock Drilling Rig", "bedrock_drilling_rig", BEDROCK_DRILLING_RIG, shape,
            event.progressBar(77, 33, "arrow"),
            itemInputs => itemInputs.addSlots(56, 35, 1,1), itemOutputs => {},
            fluidInputs => {}, fluidOutputs => fluidOutputs.addSlot(102, 35),
            "clean_stainless_steel_machine_casing", "assembler_overlays", true, false, false,
        );
    }

    function assemblyLine() {
        const shape = event.layeredShape("steel", [
            ["gggggggg","dddddddd","ffffffff",'        '],
            ["bbbbbbbb","cccccccc","eeeeeeee",'haaaaaaa'],
            ['aaaaaaaa','dddddddd','#fffffff','        ']
        ])
            .key("a", steelCasing, event.noHatch())
            .key("b", steelCasing, event.hatchOf('item_input', 'fluid_input'))
            .key('c', event.memberOfBlock('kubejs:assembly_line_casing'), event.noHatch())
            .key('d', event.memberOfBlock('kubejs:reinforced_glass'), event.noHatch())
            .key('e', event.memberOfBlock('kubejs:assembly_control_casing'), event.noHatch())
            .key('f', steelPipeCasing, event.noHatch())
            .key('g', steelCasing, event.hatchOf('item_output'))
            .key('h', steelCasing, event.hatchOf('energy_input'))
            .build();

        event.simpleElectricCraftingMultiBlock(
            "Assembly Line", "assembly_line", ASSEMBLY_LINE , shape,
            event.progressBar(109, 13, "assembly_line"),
            itemInputs => itemInputs.addSlots(20, 13, 4, 4), itemOutputs => itemOutputs.addSlot(127, 13),
            fluidInputs => fluidInputs.addSlots(92, 13, 1, 4), fluidOutputs => {},
            "steel", "assembler_overlays", true, false, false,
        );
    }

    function mattercondensator() {
        const hatches = event.hatchOf("item_input", "fluid_output", 'energy_input');      
        const redMatter = event.memberOfBlock('kubejs:red_matter_casing');
        const quantumMachineHull = event.memberOfBlock(`modern_industrialization:quantum_machine_hull`);
        const netherStarBlock = event.memberOfBlock(`kubejs:nether_star_block`);
        const beacon = event.memberOfBlock(`minecraft:beacon`);

        const shape = event.layeredShape("dark_matter", [
            ["     ",'  b  ',' bab ',' b b ',' b d ',' d d ',' d c ',' c c ',' ccc ','  c  '],
            [" eee ",' bbb ','bb bb','b   b','d   b','d   d','c   d','c   c','cc cc',' ccc '],
            [' eee ','bbfbb','a   a','     ','     ','     ','     ','     ','c   c','cc cc'],
            [' eee ',' bbb ','bb bb','b   b','b   d','d   d','d   c','c   c','cc cc',' ccc '],
            ['     ','  b  ',' b#b ',' b b ',' d b ',' d d ',' c d ',' c c ',' ccc ','  c  ']
        ])
            .key("a", darkMatterCasing, hatches)
            .key("b", darkMatterCasing, event.noHatch())
            .key("c", redMatter, event.noHatch())
            .key("d", quantumMachineHull, event.noHatch())
            .key("e", netherStarBlock, event.noHatch())
            .key("f", beacon, event.noHatch())
            .build();

        event.simpleElectricCraftingMultiBlock(
            "Matter Condensator", "matter_condensator", MATTER_CONDENSATOR , shape,
            event.progressBar(78, 33, "triple_arrow"),
            itemInputs => itemInputs.addSlot(54, 35), itemOutputs => {},
            fluidInputs => {}, fluidOutputs => fluidOutputs.addSlot(105, 35),
            "dark_matter", "assembler_overlays", true, false, false,
        );
    }

    function singularCompressor() {
        const hatches = event.hatchOf("item_input", "energy_input", "item_output");

        const shape = event.layeredShape("red_matter", [
            ["ccc", "bbb", "aaa", "bbb", "aaa"],
            ["cac", "b b", "a a", "b b", "aaa"],
            ["c#c", "bbb", "aaa", "bbb", "aaa"],
        ])
        .key("a", event.memberOfBlock("kubejs:red_matter_casing"), event.noHatch())
        .key("b", event.memberOfBlock("minecraft:red_stained_glass_pane"), event.noHatch())
        .key("c", event.memberOfBlock("kubejs:red_matter_casing"), hatches)
        .build();

        event.simpleElectricCraftingMultiBlock(
            "Singular Compressor", "singular_compressor", SINGULAR_COMPRESSOR, shape,
            event.progressBar(77, 33, "arrow"),
            itemInputs => itemInputs.addSlot(50, 35), itemOutputs => itemOutputs.addSlot(108, 35),
            fluidInputs => {}, fluidOutputs => {},
            "red_matter", "assembler_overlays", true, false, false,
        );
    };

    function quantuminstaller() {
        const hatches = event.hatchOf("item_input", "item_output", 'energy_input');

         const shape = event.layeredShape("chaotic", [
            ["             ", "             ", "             ", "             ", "      a      ", "      a      ", "    aadaa    ", "      a      ", "      a      ", "             ", "             ", "             ", "             "],
            ["             ", "             ", "      a      ", "      a      ", "      a      ", "     bbb     ", "  aaabbbaaa  ", "     bbb     ", "      a      ", "      a      ", "      a      ", "             ", "             "],
            ["             ", "      a      ", "      a      ", "     bbb     ", "     bbb     ", "   bb c bb   ", " aabb c bbaa ", "   bb c bb   ", "     bbb     ", "     bbb     ", "      a      ", "      a      ", "             "],
            ["             ", "      a      ", "     bbb     ", "      c      ", "      c      ", "  b       b  ", " ab       ba ", "  b       b  ", "      c      ", "      c      ", "     bbb     ", "      a      ", "             "],
            ["      a      ", "      a      ", "     bbb     ", "      c      ", "             ", "  b       b  ", "aab       baa", "  b       b  ", "             ", "      c      ", "     bbb     ", "      a      ", "      a      "],
            ["      a      ", "     bbb     ", "   bb c bb   ", "  b       b  ", "  b       b  ", " b         b ", "ab         ba", " b         b ", "  b       b  ", "  b       b  ", "   bb c bb   ", "     bbb     ", "      a      "],
            ["    aaaaa    ", "  aaabbbaaa  ", " aabbcbcbbaa ", " abcc b ccba ", "aabc  b  cbaa", "abc   b   cba", "dbc   b   cbd", "abc   b   cba", "aabc  b  cbaa", " abcc b ccba ", " aabbcbcbbaa ", "  aaabbbaaa  ", "    aaaaa    "],
            ["      a      ", "     bbb     ", "   bb c bb   ", "  b       b  ", "  b       b  ", " b         b ", "ab         ba", " b         b ", "  b       b  ", "  b       b  ", "   bb c bb   ", "     bbb     ", "      a      "],
            ["      a      ", "      a      ", "     bbb     ", "      c      ", "             ", "  b       b  ", "aab       baa", "  b       b  ", "             ", "      c      ", "     bbb     ", "      a      ", "      a      "],
            ["             ", "      a      ", "     bbb     ", "      c      ", "      c      ", "  b       b  ", " ab       ba ", "  b       b  ", "      c      ", "      c      ", "     bbb     ", "      a      ", "             "],
            ["             ", "      a      ", "      a      ", "     bbb     ", "     bbb     ", "   bb c bb   ", " aabb c bbaa ", "   bb c bb   ", "     bbb     ", "     bbb     ", "      a      ", "      a      ", "             "],
            ["             ", "             ", "      a      ", "      a      ", "      a      ", "     bbb     ", "  aaabbbaaa  ", "     bbb     ", "      a      ", "      a      ", "      a      ", "             ", "             "],
            ["             ", "             ", "             ", "             ", "      a      ", "      a      ", "    aa#aa    ", "      a      ", "      a      ", "             ", "             ", "             ", "             "],
        ])
        .key("a", event.memberOfBlock("kubejs:chaotic_casing"), event.noHatch())
        .key("b", event.memberOfBlock("kubejs:chaotic_pipe_casing"), event.noHatch())
        .key("c", event.memberOfBlock("kubejs:matter_handling_chaotic_casing"), event.noHatch())
        .key("d", event.memberOfBlock("kubejs:chaotic_casing"), hatches)
        .build();

        event.simpleElectricCraftingMultiBlock(
            "Quantum Installer", "quantum_installer", QUANTUM_INSTALLER, shape,
            event.progressBar(85, 33, "arrow"),
            itemInputs => itemInputs.addSlots(42, 35, 2, 1), itemOutputs => itemOutputs.addSlot(115, 35),
            fluidInputs => {}, fluidOutputs => {},
            "chaotic", "assembler_overlays", true, false, false,
        );
    }

    function industrialempowerer() {
        const hatches = event.hatchOf("item_input", "item_output", 'energy_input');

        const shape = event.layeredShape("tungstensteel_machine_casing", [
            ["aaa","ccc","aaa"],
            ["aba","c c","aba"],
            ["a#a","ccc","aaa"],
        ])
            .key("a", tungstensteelCasing, hatches)
            .key("b", tungstensteelCasing, event.noHatch())
            .key('c', event.memberOfBlock('kubejs:nichrome_coil'), event.noHatch())
            .build();

        event.simpleElectricCraftingMultiBlock(
            "Industrial Empowerer", "industrial_empowerer", INDUSTRIAL_EMPOWERER, shape,
            event.progressBar(97, 41, "arrow"),
            itemInputs => itemInputs.addSlot(44, 44).addSlot(19, 44).addSlot(44, 19).addSlot(69, 44).addSlot(44, 69), itemOutputs => itemOutputs.addSlot(125, 44),
            fluidInputs => {}, fluidOutputs => {},
            "tungstensteel_machine_casing", "assembler_overlays", true, false, false,
        );
    }

    function nuclearRecycler() {
        const hatches = event.hatchOf("item_input", "item_output", 'energy_input');

        const shape = event.layeredShape("nuclear_casing", [
            ["aaa","bbb","bbb",'bbb','aaa'],
            ["aba","bcb","bcb",'bcb','aba'],
            ["a#a","bbb","bbb",'bbb','aaa'],
        ])
            .key("a", nuclearCasing, hatches)
            .key("b", nuclearCasing, event.noHatch())
            .key('c', nuclearCasingPipe, event.noHatch())
            .build();

        event.simpleElectricCraftingMultiBlock(
            "Nuclear Recycler", "nuclear_recycler", NUCLEAR_RECYCLER, shape,
            event.progressBar(78, 42, "centrifuge"),
            itemInputs => itemInputs.addSlot(54, 44), itemOutputs => itemOutputs.addSlots(105,35,2,2),
            fluidInputs => {}, fluidOutputs => {},
            "nuclear_casing", "assembler_overlays", true, true, true,
        );
    }

    function nuclearComponentAssembler() {
        const hatches = event.hatchOf("item_input", "item_output", 'energy_input', 'fluid_input');

        const shape = event.layeredShape("nuclear_casing", [
            ["aaa","ddd","bbb",'ddd','aaa'],
            ["aba","dcd","bcb",'dcd','aba'],
            ["a#a","ddd","bbb",'ddd','aaa'],
        ])
            .key("a", nuclearCasing, hatches)
            .key("b", nuclearCasing, event.noHatch())
            .key('c', nuclearCasingPipe, event.noHatch())
            .key('d', tungstensteelCasing, event.noHatch())
            .build();

        event.simpleElectricCraftingMultiBlock(
            "Nuclear Component Assembler", "nuclear_component_assembler", NUCLEAR_COMPONENT_ASSEMBLER, shape,
            event.progressBar(95, 42, "arrow"),
            itemInputs => itemInputs.addSlots(36, 26, 3, 3), itemOutputs => itemOutputs.addSlot(122,44),
            fluidInputs => fluidInputs.addSlots(18,26,1,3), fluidOutputs => {},
            "nuclear_casing", "assembler_overlays", true, true, true,
        );
    }

    function draconiumAwakener() {
        const hatches = event.hatchOf("item_input", "item_output", 'energy_input', 'fluid_input');
        
        const shape = event.layeredShape("draconium", [
            ["bbbbb", "ccccc", "ccccc", "aaaaa", "ccccc", "ccccc", "aaaaa"],
            ["bdddb", "c   c", "c   c", "addda", "c   c", "c   c", "addda"],
            ["bb#bb", "ccccc", "ccccc", "aaaaa", "ccccc", "ccccc", "aaaaa"],
        ])
        .key("a", draconiumCasing, event.noHatch())
        .key("b", draconiumCasing, hatches)
        .key("c", event.memberOfBlock("minecraft:magenta_stained_glass_pane"), event.noHatch())
        .key("d", event.memberOfBlock("kubejs:draconium_particle_activator"), event.noHatch())
        .build();

        event.simpleElectricCraftingMultiBlock(
            "Draconium Awakener", "draconium_awakener", DRACONIUM_AWAKENER, shape,
            event.progressBar(95, 42, "arrow"),
            itemInputs => itemInputs.addSlots(36, 26, 3, 3), itemOutputs => itemOutputs.addSlot(122,44),
            fluidInputs => fluidInputs.addSlots(18,26,1,3), fluidOutputs => {},
            "draconium", "assembler_overlays", true, true, true,
        );
    }

    function draconicDestroyer() {
        const hatches = event.hatchOf("item_input", "item_output", 'energy_input', 'fluid_output');
        
        const shape = event.layeredShape("awakened", [
            ["ddd", "aba", "aaa"],
            ["dcd", "b b", "aaa"],
            ["d#d", "aba", "aaa"],
        ])
        .key("a", event.memberOfBlock("kubejs:awakened_casing"), event.noHatch())
        .key("b", event.memberOfBlock("minecraft:orange_stained_glass_pane"), event.noHatch())
        .key("c", event.memberOfBlock("kubejs:awakened_crushing_device"), event.noHatch())
        .key("d", event.memberOfBlock("kubejs:awakened_casing"), hatches)
        .build();

        event.simpleElectricCraftingMultiBlock(
            "Draconic Destroyer", "draconic_destroyer", DRACONIC_DESTROYER, shape,
            event.progressBar(77, 33, "triple_arrow"),
            itemInputs => itemInputs.addSlot(50, 35), itemOutputs => itemOutputs.addSlots(108, 35, 2, 1),
            fluidInputs => {}, fluidOutputs => fluidOutputs.addSlot(144,35),
            "awakened", "assembler_overlays", true, true, true,
        );
    }

    function heatAbsorbingBlastFurnace() {
        const hatches = event.hatchOf("item_input", "item_output", "fluid_input", 'energy_input');

        const shape = event.layeredShape("draconium", [
            ["bbb", "ccc", "ccc", "ccc", "ddd"],
            ["bab", "c c", "c c", "c c", "ddd"],
            ["b#b", "ccc", "ccc", "ccc", "ddd"],
        ])
        .key("a", event.memberOfBlock("kubejs:draconium_casing"), event.noHatch())
        .key("b", event.memberOfBlock("kubejs:draconium_casing"), hatches)
        .key("c", event.memberOfBlock("kubejs:tungstensteel_coil"), event.noHatch())
        .key("d", event.memberOfBlock("kubejs:froststeel_machine_casing"), event.noHatch())
        .build();

        event.simpleElectricCraftingMultiBlock(
            "Heat-Absorbing Blast Furnace", "heat_absorbing_blast_furnace", HEAT_ABSORBING_BLAST_FURNACE, shape,
            event.progressBar(77, 33, "arrow"),
            itemInputs => itemInputs.addSlot(56, 35), itemOutputs => itemOutputs.addSlot(102, 35),
            fluidInputs => fluidInputs.addSlot(36, 35), fluidOutputs => fluidOutputs.addSlot(122, 35),
            "draconium", "assembler_overlays", true, false, false,
        );
    }

    function chaoticAssembler() {
        const hatches = event.hatchOf("item_input", "item_output", 'energy_input');

        const shape = event.layeredShape("chaotic", [
            ["eeeee", "abbba", "abbba", "abbba", "aaaaa"],
            ["eaaae", "c d c", "c d c", "c d c", "aaaaa"],
            ["ee#ee", "bbbbb", "bbbbb", "bbbbb", "aaaaa"],
        ])
        .key("a", chaoticCasing, event.noHatch())
        .key("b", event.memberOfBlock("minecraft:black_stained_glass_pane"), event.noHatch())
        .key("c", event.memberOfBlock("kubejs:chaotic_fusion_core"), event.noHatch())
        .key("d", event.memberOfBlock("kubejs:quantum_fusion_rod"), event.noHatch())
        .key("e", chaoticCasing, hatches)
        .build();

        event.simpleElectricCraftingMultiBlock(
            "Chaotic Assembler", "chaotic_assembler", CHAOTIC_ASSEMBLER, shape,
            event.progressBar(95, 42, "triple_arrow"),
            itemInputs => itemInputs.addSlots(28, 26, 3, 3), itemOutputs => itemOutputs.addSlot(130,44),
            fluidInputs => {}, fluidOutputs => {},
            "nuclear_casing", "assembler_overlays", true, true, true,
        );
    }

    function awakenedAlloySmelter() {
        const hatches = event.hatchOf("item_input", "item_output", 'energy_input');

        const shape = event.layeredShape("awakened", [
            ["eee", "bbb", "ccc", "bbb", "aaa"],
            ["eae", "bdb", "cdc", "bdb", "aaa"],
            ["e#e", "bbb", "ccc", "bbb", "aaa"],
        ])
        .key("a", awakenedCasing, event.noHatch())
        .key("b", event.memberOfBlock("kubejs:annealed_copper_coil"), event.noHatch())
        .key("c", event.memberOfBlock("minecraft:orange_stained_glass"), event.noHatch())
        .key("d", event.memberOfBlock("minecraft:magma_block"), event.noHatch())
        .key("e", awakenedCasing, hatches)
        .build();

        event.simpleElectricCraftingMultiBlock(
            "Awakened Alloy Smelter", "awakened_alloy_smelter", AWAKENED_ALLOY_SMELTER, shape,
            event.progressBar(116, 33, "arrow"),
            itemInputs => itemInputs.addSlots(36, 35, 4,1), itemOutputs => itemOutputs.addSlot(145, 35),
            fluidInputs => {}, fluidOutputs => {},
            "awakened", "furnace_overlays", true, true, true,
        );
    }

    function massivecompressor() {
        const hatches = event.hatchOf("item_input", "item_output", 'energy_input');

        const shape = event.layeredShape("dark_steel_casing", [
            ['aaa','bdb','aaa'],
            ['aba','d d','aba'],
            ['aaa','b#b','aaa'],
        ])
            .key("a", DarkSteelCasing, hatches)
            .key("d", MassiveLineCasing, event.noHatch())
            .key('b', DarkSteelCasing, event.noHatch())
            .build();

        event.simpleElectricCraftingMultiBlock(
            "Massive Compressor", "massive_compressor", TURNEDOFF, shape,
            event.progressBar(77, 33, "compress"),
            itemInputs => itemInputs.addSlot(56, 35), itemOutputs => itemOutputs.addSlot(102, 35),
            fluidInputs => {}, fluidOutputs => {},
            "dark_steel_casing", "assembler_overlays", true, false, false
        );
    }

    function massiveforgehammer() {
        const hatches = event.hatchOf("item_input", "item_output", 'energy_input');

        const shape = event.layeredShape("dark_steel_casing", [
            ['aaa','bdb','bdb','aaa'],
            ['aba','d d','d d','aba'],
            ['aaa','b#b','bbb','aaa'],
        ])
            .key("a", DarkSteelCasing, hatches)
            .key("d", MassiveLineCasing, event.noHatch())
            .key('b', DarkSteelCasing, event.noHatch())
            .build();

        event.simpleElectricCraftingMultiBlock(
            "Massive Forge Hammer", "massive_forge_hammer", TURNEDOFF, shape,
            event.progressBar(77, 33, "hammer"),
            itemInputs => itemInputs.addSlot(56, 35), itemOutputs => itemOutputs.addSlot(102, 35),
            fluidInputs => {}, fluidOutputs => {},
            "dark_steel_casing", "assembler_overlays", true, false, false
        );
    }

    function massivewiremill() {
        const hatches = event.hatchOf("item_input", "item_output", 'energy_input');

        const shape = event.layeredShape("dark_steel_casing", [
            ['aaa','bdb','aaa'],
            ['aba','d d','aba'],
            ['aaa','b#b','aaa'],
        ])
            .key("a", DarkSteelCasing, hatches)
            .key("d", MassiveLineCasing, event.noHatch())
            .key('b', DarkSteelCasing, event.noHatch())
            .build();

        event.simpleElectricCraftingMultiBlock(
            "Massive Wiremill", "massive_wiremill", TURNEDOFF, shape,
            event.progressBar(77, 33, "wiremill"),
            itemInputs => itemInputs.addSlot(56, 35), itemOutputs => itemOutputs.addSlot(102, 35),
            fluidInputs => {}, fluidOutputs => {},
            "dark_steel_casing", "assembler_overlays", true, false, false
        );
    }

    function compactGreenhouse() {
        const hatches = event.hatchOf("item_input", "item_output", 'fluid_input', 'energy_input');

        const shape = event.layeredShape("dark_steel_casing", [
            [' aaa ','ccccc',' eee ',' eee ',' eee ','ccccc',' bbb '],
            ['abbba','cdddc','e   e','e   e','e   e','c   c','bbbbb'],
            ['abbba','cdddc','e   e','e   e','e   e','c g c','bbbbb'],
            ['abbba','cdddc','e   e','e   e','e   e','c   c','bbbbb'],
            [' a#a ','ccccc',' eee ',' eee ',' eee ','ccccc',' bbb ']
        ])
            .key("a", DarkSteelCasing, hatches)
            .key("b", DarkSteelCasing, event.noHatch())
            .key('c', steelPipeCasing, event.noHatch())
            .key('e', event.memberOfBlock('kubejs:compact_greenhouse_glass'), event.noHatch())
            .key('d', event.memberOfBlock('farmersdelight:rich_soil_farmland'), event.noHatch())
            //.key('f', event.memberOfBlock('water'), event.noHatch())
            .key('g', event.memberOfBlock('kubejs:lamp_of_growth'), event.noHatch())
            .build();

        event.simpleElectricCraftingMultiBlock(
            "Compact Greenhouse", "compact_greenhouse", COMPACT_GREENHOUSE, shape,
            event.progressBar(78, 42, "arrow"),
            itemInputs => itemInputs.addSlots(36, 44, 2, 1), itemOutputs => itemOutputs.addSlots(105,26,3,3),
            fluidInputs => fluidInputs.addSlot(18,44), fluidOutputs => {},
            "dark_steel_casing", "assembler_overlays", true, true, true,
        );
    }

    function metamorphicConstructor() {
        const hatches = event.hatchOf("item_input","fluid_input", "item_output", 'energy_input');

        const shape = event.layeredShape("metamorphic_constructor_casing", [
            ["aaa"," b "," b "," b "," b "," b "," b ","bbb"],
            ["aba","b b","b b","b b","b b","b b","b b","bbb"],
            ["a#a"," c "," c "," c "," c "," c "," c ","bbb"],
        ])
            .key("a", metamorphic_constructor_casing, hatches)
            .key("b", metamorphic_constructor_casing, event.noHatch())
            .key("c", event.memberOfBlock('hostilenetworks:sim_chamber'), event.noHatch())
            .build();

        event.simpleElectricCraftingMultiBlock(
            "Metamorphic Constructor", "metamorphic_constructor", METAMORPHIC_CONSTRUCTOR, shape,
            event.progressBar(83, 42, "triple_arrow"),
            itemInputs => itemInputs.addSlots(26, 35, 3,2), itemOutputs => itemOutputs.addSlot(110, 44),
            fluidInputs => fluidInputs.addSlots(8, 35, 1,2), fluidOutputs => {},
            "metamorphic_constructor_casing", "assembler_overlays", true, true, true,
        );
    }

    function transmutator() {
        const hatches = event.hatchOf("item_input","fluid_input", "item_output", 'energy_input', 'fluid_output');

        const shape = event.layeredShape("superconductor_casing", [
            ["aaa","bbb","aaa"],
            ["aba","b b","aba"],
            ["aaa","b#b","aaa"],
        ])
            .key("a", superConductorCasing, hatches)
            .key("b", superConductorCasing, event.noHatch())
            .build();

        event.simpleElectricCraftingMultiBlock(
            "Transmutator", "transmutator", TRANSMUTATOR, shape,
            event.progressBar(98, 33, "arrow"),
            itemInputs => itemInputs.addSlots(54, 35, 2,1), itemOutputs => itemOutputs.addSlot(127, 35),
            fluidInputs => fluidInputs.addSlot(36, 35), fluidOutputs => fluidOutputs.addSlot(145, 35),
            "superconductor_casing", "assembler_overlays", true, true, true,
        );
    }

    function polarizationTower() {
        const hatches = event.hatchOf("item_input","item_output", 'energy_input');

        const shape = event.layeredShape("magnetic_iron_casing", [
            ['bbb   bbb',' cc   cc ','  c   c  ','  b   b  ','         ','         ','         ','         ','         ','         ','         ','         ','         ','         ','         ','         ','         ','         ','         ','         ','    d    ','    d    ','    d    ','    d    ','    d    ','         ','         '],
            ['bbb   bbb','ccc   ccc',' cc   cc ',' bb   bb ',' cc   cc ',' cc   cc ',' bb   bb ','  c   c  ','  b   b  ','         ','         ','         ','         ','         ','         ','         ','         ','         ','         ','    d    ','    d    ','         ','    b    ','         ','    d    ','    d    ','         '],
            ['bbb   bbb','ccc   ccc','ccc   ccc','bbbbabbbb',' cc   cc ',' cc   cc ',' bb   bb ',' cc   cc ',' bbbbbbb ','  c   c  ','  b   b  ','  bc cb  ','   b b   ','   bcb   ','    b    ','    b    ','         ','         ','    d    ','    d    ','         ','         ','    b    ','         ','         ','    d    ','    d    '],
            ['         ','         ','         ','  b   b  ','         ','         ','         ','         ','  b   b  ','         ','         ','  c   c  ','  b   b  ','  b   b  ','         ','    c    ','    b    ','         ','    d    ','         ','         ','         ','    b    ','         ','         ','         ','    d    '],
            ['         ','         ','         ','  a   a  ','         ','         ','         ','         ','  b   b  ','         ','         ','         ','         ','  c   c  ','  b   b  ','  bc cb  ','   bbb   ','    b    ','  eebee  ',' ee b ee ','ee  b  ee','e   b   e','ebbbbbbbe','e   b   e','ee  b  ee',' ee b ee ','  eebee  '],
            ['         ','         ','         ','  b   b  ','         ','         ','         ','         ','  b   b  ','         ','         ','  c   c  ','  b   b  ','  b   b  ','         ','    c    ','    b    ','         ','    d    ','         ','         ','         ','    b    ','         ','         ','         ','    d    '],
            ['bbb   bbb','ccc   ccc','ccc   ccc','bbbb#bbbb',' cc   cc ',' cc   cc ',' bb   bb ',' cc   cc ',' bbbbbbb ','  c   c  ','  b   b  ','  bc cb  ','   b b   ','   bcb   ','    b    ','    b    ','         ','         ','    d    ','    d    ','         ','         ','    b    ','         ','         ','    d    ','    d    '],
            ['bbb   bbb','ccc   ccc',' cc   cc ',' bb   bb ',' cc   cc ',' cc   cc ',' bb   bb ','  c   c  ','  b   b  ','         ','         ','         ','         ','         ','         ','         ','         ','         ','         ','    d    ','    d    ','         ','    b    ','         ','    d    ','    d    ','         '],
            ['bbb   bbb',' cc   cc ','  c   c  ','  b   b  ','         ','         ','         ','         ','         ','         ','         ','         ','         ','         ','         ','         ','         ','         ','         ','         ','    d    ','    d    ','    d    ','    d    ','    d    ','         ','         ']
        ])
            .key("a", magneticIronCasing, hatches)
            .key("b", magneticIronCasing, event.noHatch())
            .key("c", event.memberOfBlock('kubejs:stainless_steel_fence'), event.noHatch())
            .key("d", event.memberOfBlock('actuallyadditions:palis_crystal_block'), event.noHatch())
            .key("e", event.memberOfBlock('actuallyadditions:restonia_crystal_block'), event.noHatch())
            .build();

        event.simpleElectricCraftingMultiBlock(
            "Polarization Tower", "polarization_tower", POLARIZATION_TOWER, shape,
            event.progressBar(78, 42, "magnet"),
            itemInputs => itemInputs.addSlots(57, 35, 1,2), itemOutputs => itemOutputs.addSlot(103, 44),
            fluidInputs => {}, fluidOutputs => {},
            "magnetic_iron_casing", "assembler_overlays", true, true, true,
        );
    }
})


MITweaksMachineEvents.registerBatchMultiblocks(event => {
    const DarkSteelCasing = event.memberOfBlock('kubejs:dark_steel_casing');
    const MassiveLineCasing = event.memberOfBlock('kubejs:massive_line_casing');

    massivecompressor()
    massiveforgehammer()
    massivewiremill();

    function massivecompressor() {
        const hatches = event.hatchOf("item_input", "item_output", 'energy_input');

        const shape = event.layeredShape("dark_steel_casing", [
            ['aaa','bdb','aaa'],
            ['aba','d d','aba'],
            ['aaa','b#b','aaa'],
        ])
            .key("a", DarkSteelCasing, hatches)
            .key("d", MassiveLineCasing, event.noHatch())
            .key('b', DarkSteelCasing, event.noHatch())
            .build();

        event.electricStandalone(
            "Massive Compressor", "massive_compressor", MASSIVE_COMPRESSOR, shape,
            event.progressBar(77, 33, "compress"),
            itemInputs => itemInputs.addSlot(56, 35), itemOutputs => itemOutputs.addSlot(102, 35),
            fluidInputs => {}, fluidOutputs => {},
            "dark_steel_casing", "assembler_overlays", true, false, false,
            16,1,
            true
        );
    }

    function massiveforgehammer() {
        const hatches = event.hatchOf("item_input", "item_output", 'energy_input');

        const shape = event.layeredShape("dark_steel_casing", [
            ['aaa','bdb','bdb','aaa'],
            ['aba','d d','d d','aba'],
            ['aaa','b#b','bbb','aaa'],
        ])
            .key("a", DarkSteelCasing, hatches)
            .key("d", MassiveLineCasing, event.noHatch())
            .key('b', DarkSteelCasing, event.noHatch())
            .build();

        event.electricStandalone(
            "Massive Forge Hammer", "massive_forge_hammer", MASSIVE_FORGE_HAMMER, shape,
            event.progressBar(77, 33, "hammer"),
            itemInputs => itemInputs.addSlot(56, 35), itemOutputs => itemOutputs.addSlot(102, 35),
            fluidInputs => {}, fluidOutputs => {},
            "dark_steel_casing", "assembler_overlays", true, false, false,
            16,1,
            true
        );
    }

    function massivewiremill() {
        const hatches = event.hatchOf("item_input", "item_output", 'energy_input');

        const shape = event.layeredShape("dark_steel_casing", [
            ['aaa','bdb','aaa'],
            ['aba','d d','aba'],
            ['aaa','b#b','aaa'],
        ])
            .key("a", DarkSteelCasing, hatches)
            .key("d", MassiveLineCasing, event.noHatch())
            .key('b', DarkSteelCasing, event.noHatch())
            .build();

        event.electricStandalone(
            "Massive Wiremill", "massive_wiremill", MASSIVE_WIREMILL, shape,
            event.progressBar(77, 33, "wiremill"),
            itemInputs => itemInputs.addSlot(56, 35), itemOutputs => itemOutputs.addSlot(102, 35),
            fluidInputs => {}, fluidOutputs => {},
            "dark_steel_casing", "assembler_overlays", true, false, false,
            16,1,
            true
        );
    }
})