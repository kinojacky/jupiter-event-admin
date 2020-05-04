$(document).ready(function() {
  // Call the dataTables jQuery plugin
  $('#EventDataTable').DataTable({
    fixedHeader: {
        footer: false
    },
    order: [ 4, 'desc' ],
    columnDefs: [ {
      orderable: false,
      className: 'select-checkbox',
      targets:   0
    } ],
    select: {
      style:    'multi',
      selector: 'td:first-child'
    },
    language: {
      search: "Quick Filter:"
    }
  });
});
