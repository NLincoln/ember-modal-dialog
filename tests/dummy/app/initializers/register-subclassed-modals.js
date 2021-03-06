export default {
  after: 'add-modals-container',
  name: 'custom-modals',
  initialize(_, application) {
    let customModals = ['my-cool-modal-dialog'];
    customModals.forEach(function(customModal) {
      application.inject(`component:${customModal}`,
                         'destinationElementId',
                         'config:modals-container-id');
    });
  }
};
