module.exports = {

  name: 'locationscustomisation',
  
  schema: {
    type: 'object',
    required: ['name'],
    properties: {
      name: {type: 'string',minLength: 5, maxLength: 50},
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
      extrafees: {type: 'number'},
      locations_id: {type: 'integer'},
      organisations_id: {type: 'integer'}
  
  
  
        
    }
  },
  
  relationships: {

  }
}
  