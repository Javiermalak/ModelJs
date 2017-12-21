{
    let _data = Symbol();

    class Field
    {
        constructor( Name = 'name' , Required = false , Type , Value )
        {
            this[_data] = { Name , Required , Type };
            this.Value = Value;
        }

        get Name()
        {
            return this[_data].Name;
        }

        get Required()
        {
            return this[_data].Required;
        }

        get Type()
        {
            return this[_data].Type;
        }        

        get isValid()
        {
            return this.Required ? ( this.Value == null || this.Value === '' ? false :  typeof this.Value == this.Type ) : true
        }

    }
    
    module.exports = Field;
}