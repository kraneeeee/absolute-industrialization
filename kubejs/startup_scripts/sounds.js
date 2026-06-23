MISoundAddons.modifySounds(e => {
    const modifiers = [
        ["automatic_forge_hammer_electric", 60],
        ["automatic_forge_hammer",60],
        ["chemical_bath",59],
        ["alloy_smelter_alt",19],
        ["extractor",39],
        ["lathe",39],
        ["primitive_pump",19],
        ["water_tower",19],
        //["fluid_extractor",39],
        ["inscriber",19],
        ["extruder",19],
        ["oil_press",19],
        ["fermenter",19],
        ["pyrolyse_oven",19],
        ["large_chemical_reactor",79],
        ["gas_collector",15],
        ["small_chemical_reactor",79],
        ["oil_cracking_unit",99],
        ["autoclave",19],
        ["advanced_electric_quarry",59],
        ["assembly_line",39],
        ["matter_condensator",19],
        ["quantum_installer",19],
        ["industrial_empowerer",39],
        ["nuclear_recycler",39],
        ["metamorphic_constructor",39],
        ["transmutator",19],
        ["bedrock_drilling_rig",19],
        ["massive_wiremill",39],
        ["massive_forge_hammer", 60],
        ["massive_compressor",19],
        ["polarization_tower",19],
        ["compact_greenhouse",19],
        ["nuclear_component_assembler",39]
    ]
    modifiers.forEach(prop => {
        e.modifyDuration(prop[0], prop[1]);
    });
});