      let fullDate = new Date();
      let monthNum = fullDate.getMonth();
      let dayNum = fullDate.getDay();
      let dayArr = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let monthArr = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      // let timeCurrent = setInterval(timer, 1000);

      // function timer() {
      //   fullDate.toLocaleTimeString();
      // }

      document.getElementById("footer-clock").innerHTML =
        fullDate.getDate() +
        "-" +
        monthArr[monthNum] +
        "-" +
        fullDate.getFullYear() +
        ", " +
        dayArr[dayNum] +
        ", " +
        fullDate.getHours() +
        ":" +
        fullDate.getMinutes() +
        ":" +
        // timeCurrent;
        // seconds;
        fullDate.getSeconds();
   