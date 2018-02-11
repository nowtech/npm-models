module.exports = {

  name: 'addresses',

  schema: {
    type: 'object',
    required: ['address'],
    properties: {
      id: {type: 'integer'},
      address: {type: 'string', minLength: 10, maxLength: 50},
      supplierId: {type:'integer'}
    }
  },

  relationships: {
    addresses: {
      type: 'belongsTo',
      class: 'suppliers',
      join: {
        from: 'addresses.supplierId',
        to: 'suppliers.id'
      }
    }
  }
}
