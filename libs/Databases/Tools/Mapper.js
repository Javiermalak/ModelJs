{
    module.exports = 
    {
        ValuesFromFields( FieldArray = [] )
        {
            let Aux = { Fields : [] , Values : [] , Invalid : false };

            for(let f in FieldArray)
            {
                if( FieldArray[f].isValid )
                {
                    Aux.Values.push( FieldArray[f].Value );
                    Aux.Fields.push(f);
                }
                else
                {
                    Aux.Invalid = true;
                }
            }
    
            return Aux;
        }
    }
}