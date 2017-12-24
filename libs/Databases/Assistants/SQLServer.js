{
    let Requester = require('../Requesters/SQLServer');

    let { ValuesFromFields } = require('../Tools/Mapper');

    let { MakeInsert } = require('../Tools/QueryMaker');
    
    let _Data = Symbol();

    class SQLServerAssistant
    {
        constructor( Model , RequesterData )
        {
            this[_Data] = { Model , RequesterData };
        }
        
        Insert( Data = {} , Cb = () => {} , Fb = () => {} , strict = true) 
        {
            let Request = new Requester( this[_Data].RequesterData );

            let ModelF = this[_Data].Model.Fields;

            let vals = ValuesFromFields( ModelF );

            if( strict && vals.Invalid )
            {
                Fb();
            }
            else
            {
                let query = MakeInsert( vals.Fields , vals.Values , this[_Data].Model.Table, this[_Data].Model.PK );
                
                Cb(query)
            }

            Request.Query('Select * from starbuc.usuarios;', Cb, Fb);
        }
    }
    

    module.exports = SQLServerAssistant;
}