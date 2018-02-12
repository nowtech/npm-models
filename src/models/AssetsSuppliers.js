module.exports = {
  name: 'assetssuppliers',

  schema: {
    type: 'object',
    required: ['assets_id'],
    properties: {
      suppliers_id: {type: 'integer'},
      assets_id: {type: 'integer'},
      supplierscustomisation_id: {type:'integer'},
      isPhotoSection: {type:'boolean'},
      isDocSection: {type:'boolean'},
      isPhotoReference: {type:'boolean'}

    }
  },

  relationships: {

  }
}