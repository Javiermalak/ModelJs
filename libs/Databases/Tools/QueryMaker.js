{
    let Formater = require('./Formater');

    module.exports = 
    {
        MakeInsert( Fields = [] , Values = [] , Table = 'table' , PK = 'id' , last = true ) 
        {
            let query = '';
            query += 'INSERT INTO ' + Table + ' ' + Formater.Wrap(Fields ,true);
            query += ' VALUES' + Formater.Wrap(Values) + ';';
            last && (query += 'SELECT * FROM ' + Table + ' WHERE ' + PK + ' = @@Identity;');
            return query;
        }
    }

}