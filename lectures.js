let windowRef = null;
let opened = false;
const haveFun = "Go, have fun. We are done for today!";

const cs720 = {
  url: "https://meet.google.com/pot-jopv-jtd?authuser=2&pli=1",
  teacher: "Mr. Jatoth Chandrashekhar",
  name: "Parallel Algorithms",
};
const cs713 = {
  url: "https://meet.google.com/ejv-ooqc-oxz?authuser=2&pli=1",
  teacher: "Dr. Basant Subba",
  name: "Game Theory",
};
const csd411 = {
  url: "https://meet.google.com/oqg-wcfs-fsw?authuser=2&pli=1",
  teacher: "Mr. Pardeep Singh",
  name: "Advanced Computer Architecture",
};
const csd415 = {
  url: "https://meet.google.com/cpi-wduf-krp?authuser=2&pli=1",
  teacher: "Narottam Bawa",
  name: "Information Security Lab",
};
const csd412 = {
  url: "https://meet.google.com/ysa-rnti-raq?authuser=2&pli=1",
  teacher: "Mr. Teek Parval",
  name: "Advanced Operating Systems",
};
const cs600 = {
  url: "https://meet.google.com/nmu-nhkn-qrw?authuser=2&pli=1",
  teacher: "Mr. Lokesh Chauhan",
  name: "Topics in Computer Networks",
};
const csd410 = {
  url: "https://meet.google.com/ffv-mbdc-dei?pli=1&authuser=2",
  teacher: "KD Ma'am",
  name: "Information Security",
};
const csd416 = {
  url: "https://meet.google.com/jrb-taiw-cdw?authuser=2&pli=1",
  teacher: "Mr. Siddhu",
  name: "Advanced OS Lab",
};

function startLectures() {
  let today = new Date();
  let day = today.getDay();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  if (opened == false) {
    // Monday Schedule
    if (day == 1) {
      if (getTime(hours) == "09" && getTime(minutes) < "45") {
        handleMeet(
          cs720,
          cs713.name,
          "09:00 AM - 9:45 AM",
          "10:00 AM - 10:45 AM"
        );
      } else if (getTime(hours) == "10" && getTime(minutes) < "45") {
        handleMeet(
          cs713,
          csd411.name,
          "10:00 AM - 10:45 AM",
          "11:00 AM - 11:45 AM"
        );
      } else if (getTime(hours) == "11" && getTime(minutes) < "45") {
        handleMeet(
          csd411,
          csd415.name,
          "11:00 AM - 11:45 AM",
          "12:00 PM - 12:45 PM"
        );
      } else if (getTime(hours) == "12" && getTime(minutes) < "45") {
        handleMeet(
          csd415,
          csd412.name,
          "12:00 PM - 12:45 PM",
          "1:00 PM - 1:45 PM"
        );
      } else if (getTime(hours) == "13" && getTime(minutes) < "45") {
        handleMeet(csd412, haveFun, "1:00 PM - 1:45 PM", "-------");
      }
    }

    //Tuesday Schedule
    else if (day == 2) {
      if (getTime(hours) == "10" && getTime(minutes) < "45") {
        handleMeet(
          cs720,
          csd411.name,
          "10:00 AM - 10:45 AM",
          "11:00 AM - 11:45 AM"
        );
      } else if (getTime(hours) == "11" && getTime(minutes) < "45") {
        handleMeet(
          csd411,
          csd412.name,
          "11:00 AM - 11:45 AM",
          "12:00 PM - 12:45 PM"
        );
      } else if (getTime(hours) == "12" && getTime(minutes) < "45") {
        handleMeet(
          csd412,
          csd713.name,
          "12:00 PM - 12:45 PM",
          "2:00 PM - 2:45 PM"
        );
      } else if (getTime(hours) == "14" && getTime(minutes) < "45") {
        handleMeet(
          cs713,
          csd600.name,
          "2:00 PM - 2:45 PM",
          "3:00 PM - 3:45 PM"
        );
      } else if (getTime(hours) == "15" && getTime(minutes) < "45") {
        handleMeet(cs600, haveFun, "3:00 PM - 3:45 PM", "--------");
      }
    }

    //Wednesday Schedule
    else if (day == 3) {
      if (getTime(hours) == "09" && getTime(minutes) < "45") {
        handleMeet(
          cs720,
          csd410.name,
          "9:00 AM - 9:45 AM",
          "10:00 AM - 10:45 AM"
        );
      }
      if (getTime(hours) == "10" && getTime(minutes) < "45") {
        handleMeet(
          csd410,
          cs713.name,
          "10:00 AM - 10:45 AM",
          "11:00 AM - 11:45 AM"
        );
      } else if (getTime(hours) == "11" && getTime(minutes) < "45") {
        handleMeet(
          cs713,
          csd412.name,
          "11:00 AM - 11:45 AM",
          "12:00 PM - 12:45 PM"
        );
      } else if (getTime(hours) == "12" && getTime(minutes) < "45") {
        handleMeet(
          csd412,
          csd416.name,
          "12:00 PM - 12:45 PM",
          "3:00 PM - 3:45 PM"
        );
      } else if (getTime(hours) == "15" && getTime(minutes) < "45") {
        handleMeet(
          csd416,
          cs600.name,
          "3:00 PM - 3:45 PM",
          "4:00 PM - 4:45 PM"
        );
      } else if (getTime(hours) == "16" && getTime(minutes) < "45") {
        handleMeet(cs600, haveFun, "4:00 PM - 4:45 PM", "--------");
      }
    }

    //Thursday Schedule
    else if (day == 4) {
      if (getTime(hours) == "10" && getTime(minutes) < "45") {
        handleMeet(
          csd410,
          csd411.name,
          "10:00 AM - 10:45 AM",
          "11:00 AM - 11:45 AM"
        );
      } else if (getTime(hours) == "11" && getTime(minutes) < "45") {
        handleMeet(
          csd411,
          csd412.name,
          "11:00 AM - 11:45 AM",
          "12:00 PM - 12:45 PM"
        );
      } else if (getTime(hours) == "12" && getTime(minutes) < "45") {
        handleMeet(
          csd412,
          cs600.name,
          "12:00 PM - 12:45 PM",
          "2:00 PM -2:45 PM"
        );
      } else if (getTime(hours) == "16" && getTime(minutes) < "45") {
        handleMeet(cs600, haveFun, "2:00 PM -2:45 PM", "---------");
      }
    }
    //Friday Schedule
    else if (day == 5) {
      if (getTime(hours) == "10" && getTime(minutes) < "45") {
        handleMeet(
          csd410,
          csd411,
          "10:00 AM - 11:45 AM (2 Lectures)",
          "12:00 PM - 12:45 PM"
        );
      } else if (getTime(hours) == "12" && getTime(minutes) < "45") {
        handleMeet(csd411, haveFun, "12:00 PM -12:45 PM", "---------");
      }
    }
  } else {
    checkIfClosed(windowRef, getTime(minutes));
  }
  let timer = setTimeout(startLectures, 500);
}
function checkIfClosed(windowRef, mins) {
  if (windowRef.closed) {
    document.querySelector(".lecture.current h3").innerHTML = "Nothing Running";
    document.querySelector(".lecture.current h2").innerHTML = "--------";
    document.querySelector(".lecture.teacher h3").innerHTML = "---------";
    opened = false;
  } else if (mins > 45 && !windowRef.closed) {
    document.querySelector(".lecture.current h3").innerHTML = "Time's up";
    document.querySelector(".lecture.current h2").innerHTML = "--------";
    document.querySelector(".lecture.teacher h3").innerHTML = "---------";
  }
}
function getTime(time) {
  if (time < 10) {
    time = "0" + time;
  }
  return time;
}
function handleMeet(subject, next, currentTime, nextTime) {
  windowRef = window.open(subject.url, "_blank");
  document.querySelector(".lecture.current h3").innerHTML = subject.name;
  document.querySelector(".lecture.current h2").innerHTML = currentTime;
  document.querySelector(".lecture.teacher h3").innerHTML = subject.teacher;
  document.querySelector(".lecture.next h3").innerHTML = next;
  document.querySelector(".lecture.next h2").innerHTML = nextTime;
  opened = true;
}
