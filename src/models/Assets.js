module.exports = {

  name: 'assets',

  schema: {
    type: 'object',
    required: ['id', 'name','filePath'],
    properties: {
      id: {type: 'integer'},
      name: {type: 'string',minLength: 5, maxLength: 50},
      desc: {type:'string'},
      filePath: {type: 'string', format:'uri'},
      organisations_id: {type: 'integer'}
    }
  },

  relationships: {}
}