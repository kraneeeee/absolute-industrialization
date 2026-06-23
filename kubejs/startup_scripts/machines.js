let AUTOMATIC_FORGE_HAMMER;
let AUTOMATIC_FORGE_HAMMER_ELECTRIC;
let EXTRACTOR;
let ALLOY_SMELTER_ALT;
let LATHE;
let CHEMICAL_BATH;
let FERMENTER;
let GAS_COLLECTOR;
let OIL_PRESS;
//let FLUID_EXTRACTOR;
let INSCRIBER;
let EXTRUDER;
let SMALL_CHEMICAL_REACTOR;
let AUTOCLAVE;

MIMachineEvents.registerRecipeTypes(e => {
    AUTOMATIC_FORGE_HAMMER = e.register("automatic_forge_hammer")
        .withItemInputs()
        .withItemOutputs();

    AUTOMATIC_FORGE_HAMMER_ELECTRIC = e.register("automatic_forge_hammer_electric")
        .withItemInputs()
        .withItemOutputs();

    EXTRACTOR = e.register("extractor")
        .withItemInputs()
        .withItemOutputs()
        .withFluidOutputs();

    // FLUID_EXTRACTOR = e.register("fluid_extractor")
    //     .withItemInputs()
    //     .withFluidOutputs();

    ALLOY_SMELTER_ALT = e.register('alloy_smelter_alt')
        .withItemInputs()
        .withItemOutputs();

    LATHE = e.register("lathe")
        .withItemInputs()
        .withItemOutputs();

    AUTOCLAVE = e.register("autoclave")
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs();

    CHEMICAL_BATH = e.register("chemical_bath")
        .withItemInputs()
        .withFluidInputs()
        .withItemOutputs();

    FERMENTER = e.register("fermenter")
        .withItemInputs()
        .withFluidOutputs();

    GAS_COLLECTOR = e.register("gas_collector")
        .withItemInputs()
        .withFluidOutputs();

    OIL_PRESS = e.register("oil_press")
        .withItemInputs()
        .withFluidOutputs();

    INSCRIBER = e.register("inscriber")
        .withItemInputs()
        .withItemOutputs();

    EXTRUDER = e.register('extruder')
        .withItemInputs()
        .withItemOutputs();

    SMALL_CHEMICAL_REACTOR = e.register('small_chemical_reactor')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});



MIMachineEvents.registerMachines(e => {
    e.craftingSingleBlock(
        "Alloy Smelter","alloy_smelter_alt", ALLOY_SMELTER_ALT, ["bronze",'steel','electric'],
        170, e.progressBar(85, 33, "arrow"), e.efficiencyBar(39, 70), e.energyBar(14, 27),
        2, 1, 0, 0, 
        16,
        items => items.addSlots(42, 35, 2, 1).addSlots(115, 35, 1, 1), fluids => {},
        true, true, false,
    );

    e.craftingSingleBlock(
        "Forge Hammer", "automatic_forge_hammer", AUTOMATIC_FORGE_HAMMER, ["bronze", "steel"],
        170, e.progressBar(78, 33, "hammer"), e.efficiencyBar(39, 70), e.energyBar(14, 27),
        1, 1, 0, 0,
        16,
        items => items.addSlots(56, 35, 1, 1).addSlots(104, 35, 1, 1), fluids => {},
        true, false, false
    );

  e.craftingSingleBlock(
        "Forge Hammer", "automatic_forge_hammer_electric", AUTOMATIC_FORGE_HAMMER_ELECTRIC, ["electric"],
        170, e.progressBar(78, 33, "hammer"), e.efficiencyBar(40, 70), e.energyBar(14, 34),
        1, 1, 0, 0,
        16,
        items => items.addSlots(56, 35, 1, 1).addSlots(104, 35, 1, 1), fluids => {},
        true, false, false
  );

    e.craftingSingleBlock(
        "Extractor", "extractor", EXTRACTOR, ["steel", "electric"],
        170, e.progressBar(78, 33, "extract"), e.efficiencyBar(39, 70), e.energyBar(14, 34),
        1, 1, 0, 1,
        16,
        items => items.addSlots(54, 35, 1, 1).addSlots(105, 35, 1, 1), fluids => fluids.addSlot(123,35),
        true, true, true
    );

    // e.craftingSingleBlock(
    //     "Fluid Extractor", "fluid_extractor", FLUID_EXTRACTOR, ["electric"],
    //     170, e.progressBar(78, 33, "extract"), e.efficiencyBar(39, 70), e.energyBar(14, 34),
    //     1, 0, 0, 1,
    //     16,
    //     items => items.addSlots(54, 35, 1, 1), fluids => fluids.addSlot(105, 35),
    //     true, true, true
    // );

    e.craftingSingleBlock(
        "Lathe", "lathe", LATHE, ["electric"],
        170, e.progressBar(78, 33, "lathe"), e.efficiencyBar(39, 70), e.energyBar(14, 34),
        1, 2, 0, 0,
        16,
        items => items.addSlots(54, 35, 1, 1).addSlots(105, 35, 2, 1), fluids => {},
        true, true, true
    );

    e.craftingSingleBlock(
        "Autoclave", "autoclave", AUTOCLAVE, ["electric"],
        170, e.progressBar(98, 33, "autoclave"), e.efficiencyBar(39, 70), e.energyBar(14, 34),
        2, 2, 1, 0,
        16,
        items => items.addSlots(54, 35, 2, 1).addSlots(127, 35, 2, 1), fluids => fluids.addSlot(36, 35),
        true, true, true
    );

    e.craftingSingleBlock(
        "Chemical Bath", "chemical_bath", CHEMICAL_BATH, ["electric"],
        170, e.progressBar(78, 33, "centrifuge"), e.efficiencyBar(39, 70), e.energyBar(14, 34),
        1, 1, 1, 0,
        16,
        items => items.addSlots(52, 25, 1, 1).addSlots(107, 35, 1, 1), fluids => fluids.addSlot(52,43),
        true, false, true
    );

    e.craftingSingleBlock(
        "Chemical Reactor", "small_chemical_reactor", SMALL_CHEMICAL_REACTOR, ["electric"],
        170, e.progressBar(80, 35, "triple_arrow"), e.efficiencyBar(39, 70), e.energyBar(14, 34),
        2, 1, 2, 2,
        16,
        items => items.addSlots(37, 27, 2, 1).addSlot(109, 27), fluids => fluids.addSlots(37, 45, 2, 1).addSlots(109,45, 2, 1),
        true, false, true
    );

    e.craftingSingleBlock(
        "Fermenter", "fermenter", FERMENTER, ["electric"],
        170, e.progressBar(78, 33, "centrifuge"), e.efficiencyBar(39, 70), e.energyBar(14, 34),
        1, 0, 0, 1,
        16,
        items => items.addSlots(54, 35, 1, 1), fluids => fluids.addSlot(105, 35),
        true, true, true
    );

    e.craftingSingleBlock(
        "Oil Press", "oil_press", OIL_PRESS, ["electric"],
        170, e.progressBar(78, 33, "centrifuge"), e.efficiencyBar(39, 70), e.energyBar(14, 34),
        1, 0, 0, 1,
        16,
        items => items.addSlots(54, 35, 1, 1), fluids => fluids.addSlot(105, 35),
        true, true, true
    );

    e.craftingSingleBlock(
        "Gas Collector", "gas_collector", GAS_COLLECTOR, ["electric"],
        170, e.progressBar(78, 33, "centrifuge"), e.efficiencyBar(39, 70), e.energyBar(14, 34),
        1, 0, 0, 1,
        16,
        items => items.addSlots(54, 35, 1, 1), fluids => fluids.addSlot(105, 35),
        true, true, true
    );

    e.craftingSingleBlock(
        "Inscriber", "inscriber", INSCRIBER, ["electric"],
        170, e.progressBar(78, 31, "arrow"), e.efficiencyBar(39, 70), e.energyBar(14, 34),
        3, 1, 0, 0,
        16,
        items => items.addSlots(54, 14, 1, 3).addSlots(105, 33, 1, 1), fluids => {},
        true, true, true
    );

    e.craftingSingleBlock(
        "Extruder","extruder", EXTRUDER, ['electric'],
        170, e.progressBar(85, 33, "arrow"), e.efficiencyBar(39, 70), e.energyBar(14, 27),
        2, 1, 0, 0, 
        16,
        items => items.addSlots(42, 35, 2, 1).addSlots(115, 35, 1, 1), fluids => {},
        true, true, false,
    );

    // e.craftingSingleBlock(
    //     "Transmutator", "transmutator", TRANSMUTATOR, ["electric"],
    //     170, e.progressBar(98, 33, "arrow"), e.efficiencyBar(39, 70), e.energyBar(14, 34),
    //     2, 1, 1, 1,
    //     16,
    //     items => items.addSlots(54, 35, 2, 1).addSlot(127, 35), fluids => fluids.addSlot(36, 35).addSlot(145, 35),
    //     true, true, true
    // );
});