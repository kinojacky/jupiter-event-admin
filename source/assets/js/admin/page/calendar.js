document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'dayGrid' ],
    height: 650,
    // defaultDate: '2020-05-12',
    editable: false,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2020-05-01',
        color: '#378006'
      },
      {
        title: 'Long Event',
        start: '2020-05-07',
        end: '2020-05-10'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2020-05-09T16:00:00'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2020-05-16T16:00:00',
        color: '#ff0000'
      },
      {
        title: 'Conference',
        start: '2020-05-11',
        end: '2020-05-13'
      },
      {
        title: 'Meeting',
        start: '2020-05-12T10:30:00',
        end: '2020-05-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2020-05-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2020-05-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2020-05-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2020-05-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2020-05-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2020-05-28'
      }
    ]
  });

  calendar.render();
});
