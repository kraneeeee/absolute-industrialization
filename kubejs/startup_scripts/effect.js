StartupEvents.registry('mob_effect', e => {
    e.create('radiation').harmful().color(Color.GREEN).effectTick((entity, lvl) => {
        let damageType = entity.damageSources().generic()

        if (entity.isPlayer()) {
            entity.attack(damageType, 2);
        };    
    });
});