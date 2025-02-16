function firstfun() {
      let second = document.getElementById('switch2').checked;
      let third = document.getElementById('switch3').checked;
      if (second && third) {
        document.getElementById('switch2').checked = false;
      }
    }

    function secondfun() {
      let first = document.getElementById('switch1').checked;
      let third = document.getElementById('switch3').checked;
      if (first && third) {
        document.getElementById('switch3').checked = false;
      }
    }

    function thirdfun() {
      let first = document.getElementById('switch1').checked;
      let second = document.getElementById('switch2').checked;
      if (first && second) {
        document.getElementById('switch1').checked = false;
      }
    }