{
    let mssql = require('mssql');

    let _Data = Symbol();

    let sqlFormater = require('./../Tools/Formater');

    class SQLServerRequest
    {
        constructor( DataConnection )
        {
            try 
            {
                this[_Data] = { ConnectionPool : new mssql.ConnectionPool(DataConnection) };
            }
            catch( Error )
            {
                return { Error };
            }
        }

        Query( query = '' ,  Cb = () => {} , Fb = () => {} )
        {
            this[_Data].ConnectionPool.connect()
                .then( () =>
                {                
                    let req = new mssql.Request( this[_Data].ConnectionPool );

                    req.query(query)
                        .then( result =>
                        {
                            this[_Data].ConnectionPool.close();
                            Cb( result.recordset );
                        })
                        .catch( err =>
                        {
                            this[_Data].ConnectionPool.close();
                            Fb(err);
                        })
                })
                .catch( err => Fb(err) )
        }
    }


    module.exports = SQLServerRequest;
}