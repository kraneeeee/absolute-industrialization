PowerfulEvents.registerCapabilities(e => {
    e.registerItem(
        'powerfuljs:fixed_storage_fe',
        {
            capacity: 100000000,
            maxReceive: 100000000,
            maxExtract: 100000000
        },
        'kubejs:draconium_block'
    )
})