MIMachineEvents.registerCasings(e => {
    [
        ['magnetic_iron_casing','modern_industrialization:machine_casing/magnetic_iron_casing'],
        ['copper_casing','modern_industrialization:machine_casing/copper_casing'],
        ['primitive_pump','modern_industrialization:machine_casing/primitive_pump'],
        ['large_chemical_reactor_casing','modern_industrialization:machine_casing/large_chemical_reactor_casing'],
        ['draconium','modern_industrialization:machine_casing/draconium'],
        ['awakened','modern_industrialization:machine_casing/awakened'],
        ['dark_matter','modern_industrialization:machine_casing/dark_matter'],
        ['red_matter','modern_industrialization:machine_casing/red_matter'],
        ['tungstensteel_machine_casing', 'modern_industrialization:machine_casing/tungstensteel_machine_casing'],
        ['metamorphic_constructor_casing', 'modern_industrialization:machine_casing/metamorphic_constructor_casing'],
        ['cloggrum_steel_casing', 'modern_industrialization:machine_casing/cloggrum_steel_casing'],
        ['dark_steel_casing', 'modern_industrialization:machine_casing/dark_steel_casing'],
        ['superconductor_casing', 'modern_industrialization:machine_casing/superconductor_casing'],
        ['chaotic_machine_hull', 'modern_industrialization:machine_casing/chaotic_machine_hull']
    ].forEach(casing => {
        e.registerBlockImitation(casing[0], casing[1])
    });;
});

