{
    let Field = require('./Field');
    
    let Model = require('./TupledModel');

    let _Data = Symbol();

    class ModelManager
    {
        constructor( model )
        {
            if( model instanceof Model )
            {
                this[_Data] = { Model: model };
            }
            else
            {
                return {Error: 'No model was especified.'}    
            }
        }

        get Model()
        {
            return this[_Data].Model
        }

        Set( field , value )
        {
            let fs = this[_Data].Model.Fields;

            if( field in fs )
            {
                if(fs[field] instanceof Field)
                {
                    fs[field].Value = value;
                    return true;
                }
            }

            return false;
        }
    }

    module.exports = ModelManager;
}

