 function createCalendar(id, year, month) {

      var gotodiv = document.getElementById(id);
      var newmonth = month - 1;
      var main = new Date(year, newmonth);

      a = main.toDateString().split(" ");
      yearmonth = a[1]+" "+a[3];

      var table = '<h1>'+yearmonth+'</h1>'+'<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

      function sevendays(date) { 
      var weekday = date.getDay();
      if (weekday == 0) weekday = 7;
      return weekday - 1;
      }  

      for (var i = 0; i < sevendays(main); i++) {
        table += '<td></td>';
      }

      while (main.getMonth() == newmonth) {
        table += '<td>' + main.getDate() + '</td>';
        if (sevendays(main) % 7 == 6) { 
          table += '</tr><tr>';
        }
        main.setDate(main.getDate() + 1);
      }

      if (sevendays(main) != 0) {
        for (var i = sevendays(main); i < 7; i++) {
          table += '<td></td>';
        }
      }

      table += '</tr></table>';

      gotodiv.innerHTML = table;

    }

    function visualise(){
      createCalendar("calendar",document.getElementById('YEAR').value,document.getElementById('MONTH').value)
    }

    //createCalendar("calendar", 2016, 10)