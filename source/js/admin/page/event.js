$(document).ready(function() {
  // Events datatable
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

  // Tabs with Next and Previous button
  // $('body').on('click','.next-tab', function(){
  //   var next = $('.nav-wizard > .active').next('.tab');
  //   console.log(next);
  //   if( next.length ){
  //     next.find('a').trigger('click');
  //   } else {
  //     $('#myTab a.tab:first').tab('show');
  //   }
  // });
  //
  // $('body').on('click','.previous-tab', function(){
  //   var prev = $('.nav-wizard > .active').prev('.tab');
  //   console.log(prev);
  //   if( prev.length ){
  //     prev.find('a').trigger('click');
  //   } else {
  //     $('#myTab a.tab:last').tab('show');
  //   }
  // });

  // $('.next-tab').click(function(){
  //   $('#createEventTabs > .active').next('.tab').trigger('click');
  // });
  //
  // $('.previous-tab').click(function(){
  //   $('#createEventTabs > .active').prev('.tab').trigger('click');
  // });

  $('.next-tab').click(function(){
    $('#createEventTabs li a.active').parent().next().children().trigger('click');
  });

  $('.previous-tab').click(function(){
    $('#createEventTabs li a.active').parent().prev().children().trigger('click');
  });

  // Datetime Picker
  $('#StartDate').datetimepicker({
    icons: {
      time: 'far fa-clock',
      date: 'far fa-calendar',
      up: 'fas fa-chevron-up',
      down: 'fas fa-chevron-down',
      previous: 'fas fa-chevron-left',
      next: 'fas fa-chevron-right',
      today: 'fas fa-calendar-check',
      clear: 'far fa-trash-alt',
      close: 'far fa-times-circle'
    },
    format: 'DD MMM YYYY (ddd)',
    locale: 'sg',
    showTodayButton: true
  });

  $('#EndDate').datetimepicker({
    icons: {
      time: 'far fa-clock',
      date: 'far fa-calendar',
      up: 'fas fa-chevron-up',
      down: 'fas fa-chevron-down',
      previous: 'fas fa-chevron-left',
      next: 'fas fa-chevron-right',
      today: 'fas fa-calendar-check',
      clear: 'far fa-trash-alt',
      close: 'far fa-times-circle'
    },
    format: 'DD MMM YYYY (ddd)',
    locale: 'sg',
    showTodayButton: true
  });

  $('#selectAll').click(function() {
   if (this.checked) {
       $('input[name=GroupReports]').each(function() {
           this.checked = true;
       });
   } else {
      $('input[name=GroupReports]').each(function() {
           this.checked = false;
       });
   }
});
});
