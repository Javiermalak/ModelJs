{
    let Field =  require('./Field');
    
    let TupledModel = require('./TupledModel');

    let _ModelData = Symbol();

    class ModelCreator
    {
        constructor()
        {
            this[_ModelData] = { Fields: [] };
        }

        Create( PK , Table )
        {
            this[_ModelData] = { PK ,  Table , Fields : [] }
        }

        AddField( Name , Required , Type )
        {
            this[_ModelData].Fields[Name] = new Field(Name, Required, Type)
        }

        Build()
        {
            return new TupledModel( this[_ModelData].PK , this[_ModelData].Table , this[_ModelData].Fields);
        }
    }

    module.exports = ModelCreator;
}