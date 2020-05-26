$(document).ready(function() {
  // Guest datatable
  $('#GuestDataTable').DataTable({
    fixedHeader: {
        footer: false
    },
    order: [ 1, 'desc' ],
    columnDefs: [
      {orderable: false, targets: 0},
      {orderable: false, targets: 6},
      {orderable: false, targets: 7},
      {orderable: false, targets: 8}
    ],
    select: {
      style:    'multi',
      selector: 'td:first-child'
    },
    language: {
      search: "Quick Filter:"
    },
    searching: false,
    // paging: false
    // info: false
  });

  // $('#selectAll').click(function() {
  //  if (this.checked) {
  //    $('input[name=GuestSelection]').each(function() {
  //      this.checked = true;
  //    });
  //  } else {
  //   $('input[name=GuestSelection]').each(function() {
  //      this.checked = false;
  //    });
  //  }
  // });
});
