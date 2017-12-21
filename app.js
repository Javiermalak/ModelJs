{
    let mc = new (require('./Models/ModelCreator'))();    
    
    mc.Create('us_id', 'usuarios');
    
    mc.AddField('us_nombre', true, 'string')
    mc.AddField('us_edad', true, 'number')
    mc.AddField('us_activo', true, 'boolean')
    mc.AddField('us_afinidad', false)

    let Model = mc.Build();

    console.log();
}