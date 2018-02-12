module.exports = {

  name: 'supplierscustomisation',
  
  schema: {
    type: 'object',
    required: ['name', 'id','organisations_id','suppliers_id'],
    properties: {
      id: {type: 'integer'},
      name: {type: 'string', minLength: 5, maxLength: 50},
      type: {type: 'string'},
      descQuote: {type: 'string'},
      amenities: {type: 'array', uniqueItems: true, items: { type: 'string' }},
      organisations_id: {type: 'integer'},
      suppliers_id: {type: 'integer'},
      ratingIndustry: {type: 'number'}
    }
  },
  
  relationships: {

  }
}