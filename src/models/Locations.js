module.exports = {

  name: 'locations',

  schema: {
    type: 'object',
    required: ['name', 'locationType'],
    properties: {
      id: {type: 'integer'},
      name: {type: 'string', minLength: 5, maxLength: 50},
      locationType: {type: 'string'},
      street: {type: 'string'},
      postOfficeBoxNumber: {type: 'string'},
      postCode: {type: 'string'},
      city: {type: 'string'},
      region: {type: 'string'},
      country: {type: 'string'},
      operatingHours: {
        type: 'object', 
        properties: {
          openingHours: {anyOf: 
            [{type: 'string'},
              {type: 'array', items: { type: 'string' }}
            ]},
          OpeningHoursSpecification: {
            type: 'object',
            properties: {
              opens: {type:'string', format:'time'},
              closes: {type:'string', format:'time'},
              dayOfWeek: {type: 'string', pattern: '\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b'},
              validFrom: {type:'string', format:'date' },
              validThrough: {type:'string', format:'date' }
            }
          }
        }
      
      },
      latitude: {type: 'number'},
      longitude: {type: 'number'},
      googleId: {type:'string'},
      suppliers_id: {type:'integer'},
      extrafees: {type: 'number'},
      timezone: {type: 'string'},
      isPrimary: {type:'boolean'},
      phone: {type: 'string'},
      email: {type: 'string', format:'email'}


    }
  },

  relationships: {

  }
}
