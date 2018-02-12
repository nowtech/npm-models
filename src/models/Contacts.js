module.exports = {
  name: 'contacts',

  schema: {
    type: 'object',
    required: ['id', 'name','suppliers_id'],
    properties: {
      id: {type: 'integer'},
      name: {type: 'string',minLength: 5, maxLength: 50},
      isPrimary: {type:'boolean'},
      phone: {type: 'string'},
      email: {type: 'string', format:'email'},
      suppliers_id: {type: 'integer'},
      organisations_id: {type: 'integer'}

    }
  },

  relationships: {

  }
}