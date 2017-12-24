{
    let Field =  require('./Field');
    
    let TupledModel = require('./TupledModel');

    let _ModelData = Symbol();

    class IdentityCreator
    {
        constructor()
        {
            this[_ModelData] = { Fields: [] , CurrentModel: {} };
        }

        get Current()
        {
            return this[_ModelData]['CurrentModel'];
        }

        Create( PK , Table )
        {
            this[_ModelData] = { PK ,  Table , Fields : [] , CurrentModel: {} }
        }

        AddField( Name , Required , Type )
        {
            this[_ModelData].Fields[Name] = new Field(Name, Required, Type)
        }

        Build()
        {
            
            return ( this[_ModelData]['CurrentModel'] = new TupledModel( this[_ModelData].PK , this[_ModelData].Table , this[_ModelData].Fields) )
        }
    }

    module.exports = IdentityCreator;
}