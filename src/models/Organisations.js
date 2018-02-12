module.exports = {
  name: 'organisations',

  schema: {
    type: 'object',
    required: ['id', 'name'],
    properties: {
      id: {type: 'integer'},
      name: {type: 'string',minLength: 5, maxLength: 50},
      createdAt: {type:'string', format:'date-time'},
      updatedAt: {type:'string', format:'date-time'}




        
    }
  },

  relationships: {

  }
}