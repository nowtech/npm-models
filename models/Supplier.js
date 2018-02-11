module.exports = {

  name: 'suppliers',

  schema: {
    type: 'object',
    required: ['name', 'type'],
    properties: {
      id: {type: 'integer'},
      name: {type: 'string', minLength: 5, maxLength: 50},
      type: {type: 'string'},
      descriptionQuote: {type: 'string'},
      emailReservations: {type: 'string'},
      primaryContactId: {type: 'string'},
      phoneReservations: {type: 'string'},
      amenities: {type: 'array'},
      organisationId: {type: 'string'},
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
