{
    let { ConnectionData } = require('./libs/Consts/SQLServer');
    let IdentityCreator = require('./libs/Identity/IdentityCreator');
    let Assistant = require('./libs/Databases/Assistants/SQLServer');
    let Manager = require('./libs/Identity/ModelManager');
    
    {
        let mc = new IdentityCreator();    
        let mc2 = new IdentityCreator();    
        
        mc.Create('us_id', 'starbuc.usuarios');
        
        mc.AddField('us_nombre', true, 'string');
        mc.AddField('us_correo', true, 'string');
        mc.AddField('us_contrasena', true, 'string');
        mc.AddField('us_tipo_usuario', true, 'number');
        mc.AddField('us_plantel', false, 'number');
        
        let Usuario = mc.Build();

        {
            let UsuarioManager = new Manager( Usuario )

            

            console.log(UsuarioManager.Set('us_nombrse','javier'))
            

        }
        
    }
}