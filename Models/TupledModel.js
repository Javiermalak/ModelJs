{
    let _TableData = Symbol();
    
    class TupledModel
    {
        constructor( PK = 'id' , Table = 'table' , RequiredFields = [] )
        {
            this[_TableData] = { PK , Table , RequiredFields };
        }

        get Table()
        {
            return this[_TableData].Table;
        }

        get PK()
        {
            return this[_TableData].PK;
        }

        get Fields()
        {
            return this[_TableData].RequiredFields;
        }
    }

    module.exports = TupledModel;
}