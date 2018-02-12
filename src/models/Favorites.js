module.exports = {
  name: 'favorites',

  schema: {
    type: 'object',
    required: ['suppliers_id','organisations_id'],
    properties: {
      suppliers_id: {type: 'integer'},
      organisations_id: {type: 'integer'}

    }
  },

  relationships: {

  }
}