ClientEvents.lang('en_us', e => {
    const translates = {
        'tag.item.kubejs.hammers': 'Hammers',
        'tag.item.kubejs.files': 'Files',
        'tag.item.kubejs.screwdrivers': 'Screwdrivers',
        'tag.item.kubejs.mortars': 'Mortars',
        'tag.item.kubejs.wrenches': 'Wrenches',
        'tag.item.kubejs.saws': 'Saws',
        'tag.item.kubejs.soft_mallets': "Soft Mallets",
        'tag.item.kubejs.sword_heads': "Sword Heads",
        'tag.item.kubejs.pickaxe_heads': "Pickaxe Heads",
        'tag.item.kubejs.axe_heads': "Axe Heads",
        'tag.item.kubejs.shovel_heads': "Shovel Heads",
        'tag.item.kubejs.hoe_heads': "Hoe Heads",
        'tag.item.c.tools.knife': "Knives",
        'item.justhammers.iron_hammer': 'Iron Mining Hammer',
        'item.justhammers.gold_hammer': 'Gold Mining Hammer',
        'item.justhammers.diamond_hammer': 'Diamond Mining Hammer',
        'item.morered.red_alloy_wire':'Redstone Wire',
        'fluid_type.kubejs.bisphenol_a': 'Bisphenol A',
        'ebf_tier.modern_industrialization.nichrome_coil': 'Nichrome',
        'ebf_tier.modern_industrialization.tungstensteel_coil': 'Tungstensteel',
        'rei_categories.modern_industrialization.electric_blast_furnace_nichrome_coil': 'EBF (Nichrome Tier)',
        'rei_categories.modern_industrialization.electric_blast_furnace_tungstensteel_coil': 'EBF (Tungstensteel Tier)',
        'dimension.undergarden.undergarden': 'Undergarden',
        'gui.productivemetalworks.temperature': 'Temperature',
        'lef_tier.extended_industrialization.kubejs.nichrome_coil': 'Nichrome',
        'lef_tier.extended_industrialization.kubejs.tungstensteel_coil': 'Tungstensteel',
        'item.kubejs.bisphenol_a_bucket': 'Bisphenol A Bucket',
        'fluid_type.kubejs.liquid_dragons_breath': `Liquid Dragon's Breath`,
        'item.modern_industrialization.restonia_battery': 'Restonia Battery',
        'item.modern_industrialization.osmium_battery': 'Osmium Battery',
        'hostilenetworks.trivia.forgotten_guardian': 'A mini-boss that can only be found in the catacombs within The Undergarden.',
        'item.laserio.laser_wrench': 'LaserIO Wrench',
        'item.mi_sound_addon.mallet': 'Stainless Steel Mallet',
        'tag.kubejs.radioactive_items': 'Radioactive Items'
    };

    for (let [id, translate] of Object.entries(translates)) {
        e.add(id, translate);
    };
    
    for (const [id, rename] of Object.entries({
        'automatic_forge_hammer_electric': 'Electric Forge Hammer',
        'bronze_automatic_forge_hammer': 'Bronze Forge Hammer',
        'steel_automatic_forge_hammer': 'Steel Forge Hammer',
        'bronze_extractor': 'Bronze Extractor',
        'steel_extractor': 'Steel Extractor',
        'electric_extractor': 'Electric Extractor',
        'bronze_alloy_smelter_alt': 'Bronze Alloy Smelter',
        'steel_alloy_smelter_alt': 'Steel Alloy Smelter',
        'electric_alloy_smelter_alt': 'Electric Alloy Smelter',
        'lathe': 'Lathe',
        'chemical_bath': 'Chemical Bath',
        //'fluid_extractor': 'Fluid Extractor',
        'extruder': 'Extruder',
        'inscriber': 'Inscriber',
        'fermenter': 'Fermenter',
        'oil_press': 'Oil Press',
        'primitive_pump': 'Primitive Pump',
        'pyrolyse_oven': 'Pyrolyse Oven',
        'large_chemical_reactor': 'Large Chemical Reactor',
        'gas_collector': 'Gas Collector',
        'small_chemical_reactor': 'Chemical Reactor',
        'oil_cracking_unit': 'Oil Cracking Unit',
        'autoclave': 'Autoclave',
        'advanced_electric_quarry': 'Advanced Electric Quarry',
        'assembly_line': 'Assembly Line',
        'matter_condensator': 'Matter Condensator',
        'quantum_installer': 'Quantum Installer',
        'industrial_empowerer': 'Industrial Empowerer',
        'nuclear_recycler': 'Nuclear Recycler',
        'metamorphic_constructor': 'Metamorphic Constructor',
        'transmutator': 'Transmutator',
        'bedrock_drilling_rig': 'Bedrock Drilling Rig',
        'massive_wiremill': 'Massive Wiremill',
        'massive_forge_hammer': 'Massive Forge Hammer',
        'massive_compressor': 'Massive Compressor',
        'polarization_tower': 'Polarization Tower',
        'compact_greenhouse': 'Compact Greenhouse',
        'water_tower': 'Water Tower',
        'nuclear_component_assembler': 'Nuclear Component Assembler'
    })) {
        e.add(`block.modern_industrialization.${id}`, rename);
        e.add(`rei_categories.modern_industrialization.${id}`, rename);
    };

    global.cables.forEach(material => {
        e.add(`item.modern_industrialization.${material}_cable`, `${material.charAt(0).toUpperCase() + material.slice(1)} Cable`)
    });
});