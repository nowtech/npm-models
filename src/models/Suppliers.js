module.exports = {

  name: 'suppliers',

  schema: {
    type: 'object',
    required: ['name', 'type'],
    properties: {
      id: {type: 'integer'},
      name: {type: 'string', minLength: 5, maxLength: 50},
      type: {type: 'string', pattern: '\b(accomodation|activity|flight|transfer|rental car)\b'},
      descQuote: {type: 'string'},
      emailRes: {type: 'string', format:'email'},
      phoneRes: {type: 'string'},
      amenities: {type: 'array', uniqueItems: true, items: { type: 'string' }},
      organisations_id: {type: 'integer'},
      ratingIndustry: {type: 'number'}
    }
  },

  relationships: {
    locations: {
      type: 'hasMany',
      class: 'locations',
      join: {
        from: 'locations.supplierId',
        to: 'suppliers.id'
      }
    }
  }
}
