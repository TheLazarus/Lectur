// -------------------------- Lectur -- Written By Lazzzaaaaarus ----------------------------------------- //
let interval = 500;
let currentStream = null,
  currentGroup = null,
  fireLecture = null,
  remainingTime = null,
  lectureHour = null,
  anyLecture = null;

const currentStreamDOM = document.getElementById("currentStream");
const groupDOM = document.querySelector(".stream.groups");
const lectureNameDOM = document.getElementById("lectureName");
const conreconDOM = document.getElementById("conrecon");
const lectureDetailsDOM = document.getElementById("lecture-details");
const lectureCurrentDOM = document.querySelector(".lecture.current h3");
const lectureTeacherDOM = document.querySelector(".lecture.teacher h3");
const lectureNextDOM = document.querySelector(".lecture.next h3");
const haveFun = "Go, have fun. We are done for today!";
const projectDilemma = "Bois, I don't know about your project";
const lectureEnd = 50;

let timer = null,
  connectTimer = null;

//-------------------------CSE-DD subjects and their meet links ----------------------------------------

const cs720 = {
  url: "https://meet.google.com/lookup/h46pxfryzg",
  teacher: "Mr. Jatoth Chandrashekhar",
  name: "Parallel Algorithms",
};
const cs713 = {
  url: "https://meet.google.com/lookup/dtqki5dxvl",
  teacher: "Dr. Basant Subba",
  name: "Game Theory",
};
const csd411 = {
  url: "https://meet.google.com/lookup/c7duyokxw3",
  teacher: "Mr. Pradeep Singh",
  name: "Advanced Computer Architecture",
};
const csd415 = {
  url: "https://meet.google.com/lookup/eepk7pk7oo",
  teacher: "Mr. Narottam",
  name: "Information Security Lab",
};
const csd412 = {
  url: "https://meet.google.com/lookup/gyrrxsh4nw",
  teacher: "Mr. Teek Parval",
  name: "Advanced Operating Systems",
};
const cs600 = {
  url: "https://meet.google.com/lookup/dwqsfwn4du",
  teacher: "Mr. Lokesh Chauhan",
  name: "Topics in Computer Networks",
};
const csd410 = {
  url: "https://meet.google.com/lookup/f5mg4v6zxb",
  teacher: "Mrs. Kamlesh Dutta",
  name: "Information Security",
};
const csd416 = {
  url: "https://meet.google.com/lookup/goax53wohf",
  teacher: "Mr. Siddhartha Chauhan",
  name: "Advanced OS Lab",
};

// ---------------------ECE-4 Year subjects and meet links ------------------

const signal = {
  url: "https://meet.google.com/lookup/de6gf5oimm?authuser=2&hs=179",
  teacher: "------",
  name: "Signal Processing For Image & Video",
};
const economics = {
  url: "https://meet.google.com/lookup/emibqdxduy?authuser=2&hs=179",
  teacher: "------",
  name: "Engineering Economics and Management",
};
const radar = {
  url: null,
  teacher: "------",
  name: "Radar and Navigation Aids",
};
const optical = {
  url: "https://meet.google.com/lookup/bpmhtph4jl?authuser=2&hs=179",
  teacher: "------",
  name: "Optical Communication Systems",
};
const industrial = {
  url: "https://meet.google.com/lookup/eu4lthwolk?authuser=2&hs=179",
  teacher: "------",
  name: "Industrial Electronics",
};
const industrialTrainingViva = {
  url: "https://meet.google.com/lookup/ficwasaath?authuser=1&hs=179",
  teacher: "------",
  name: "Industrial Training Viva",
};
const industrialLab = {
  url: null,
  teacher: "------",
  name: "Industrial Training Lab",
};
const opticalLab = {
  url: "https://meet.google.com/lookup/bpmhtph4jl?authuser=1&hs=179",
  teacher: "------",
  name: "Optical Communication Systems Lab",
};
const project = {
  url: null,
  teacher: "-------",
  name: "Project",
};

// ---------------- Civil Engg. subjects ----------------------

const structureDesign = {
  url: "https://meet.google.com/lookup/cxbnav5wma?authuser=4&hs=179",
  teacher: "-----",
  name: "Structure Design",
};
const hydraulicStructures = {
  url: "https://meet.google.com/lookup/gbyulceola?authuser=4&hs=179",
  teacher: "-----",
  name: "Hydraulic Structures",
};
const transport = {
  url: "https://meet.google.com/lookup/hwdn3ixcsq?authuser=4&hs=179",
  teacher: "------",
  name: "Urban Transport",
};
const environmentLab = {
  url: "",
  teacher: "-------",
  name: "Environment Lab",
};
const geosynthetics = {
  url: "https://meet.google.com/lookup/c3ent4ms55?authuser=4&hs=179",
  teacher: "--------",
  name: "Geosynthetics",
};
const drawing = {
  url: "https://meet.google.com/lookup/aoe4halz3v?authuser=4&hs=179",
  teacher: "---------",
  name: "Structural Drawing",
};
const environmental = {
  url: null,
  teacher: "---------",
  name: "Environmental",
};

function lectureManager(
  lecHour,
  lecMin,
  nowHour,
  nowMin,
  currentLecture,
  nextLectureName
) {
  if (
    nowHour == Number(lecHour) - 1 &&
    nowMin >= 55 &&
    currentLecture.url != null
  ) {
    anyLecture = true;
    lectureNameDOM.innerHTML =
      "Your lecture " + currentLecture.name + " is about to start soon!";
    conreconDOM.style.opacity = 1;
    conreconDOM.innerHTML = "CONNECT";
    fireLecture = currentLecture.url;
    lectureHour = lecHour;
    lectureCurrentDOM.innerHTML = currentLecture.name;
    lectureTeacherDOM.innerHTML = currentLecture.teacher;
    lectureNextDOM.innerHTML = nextLectureName;
    remainingTime = 60 - nowMin + lectureEnd;
  } else if (
    nowHour == lecHour &&
    nowMin < lectureEnd &&
    currentLecture.url != null
  ) {
    anyLecture = true;
    lectureNameDOM.innerHTML = `You have an ongoing lecture of ${currentLecture.name}`;
    conreconDOM.style.opacity = 1;
    conreconDOM.innerHTML = "CONNECT";
    fireLecture = currentLecture.url;
    lectureHour = lecHour;
    lectureCurrentDOM.innerHTML = currentLecture.name;
    lectureTeacherDOM.innerHTML = currentLecture.teacher;
    lectureNextDOM.innerHTML = nextLectureName;
    remainingTime = lectureEnd - nowMin;
  } else if (nowHour == lecHour && nowMin >= lectureEnd && nowMin < 55) {
    anyLecture = true;
    lectureNameDOM.innerHTML = `Your lecture should be over by now...`;
    lectureDetailsDOM.style.opacity = 0;
    lectureCurrentDOM.innerHTML = "";
    lectureTeacherDOM.innerHTML = "";
    lectureNextDOM.innerHTML = "";
    conreconDOM.style.opacity = 0;
    conreconDOM.innerHTML = "";
    fireLecture = null;
    remainingTime = null;
  } else if (
    nowHour == Number(lecHour) - 1 &&
    nowMin >= 55 &&
    currentLecture.url == null
  ) {
    anyLecture = true;
    lectureNameDOM.innerHTML =
      "Your lecture " + currentLecture.name + " is about to start soon!";
    conreconDOM.style.opacity = 1;
    conreconDOM.innerHTML = "I HAVE NO LINK, SORRY!";
  } else if (
    nowHour == lecHour &&
    nowMin <= lectureEnd &&
    currentLecture.url == null
  ) {
    anyLecture = true;
    lectureNameDOM.innerHTML = `You have an ongoing lecture of ${currentLecture.name}`;
    conreconDOM.style.opacity = 1;
    conreconDOM.innerHTML = "I HAVE NO LINK, SORRY!";
  }
}
function timeManager() {
  let today = new Date();
  let nowHour = getTime(today.getHours());
  let nowMin = getTime(today.getMinutes());

  if (nowHour == Number(lectureHour) - 1 && nowMin >= 55) {
    lectureNameDOM.innerHTML =
      "Your lecture " +
      lectureCurrentDOM.innerHTML +
      " is about to start soon!";
  } else if (nowHour == lectureHour && nowMin <= lectureEnd) {
    lectureNameDOM.innerHTML = `You have an ongoing lecture of ${lectureCurrentDOM.innerHTML}`;
  } else if (nowHour == lectureHour && nowMin > lectureEnd && nowMin < 55) {
    lectureNameDOM.innerHTML = `Your lecture should be over by now...`;
  }
}

function csedd(day, hour, minutes) {
  anyLecture = false;
  if (day == 1) {
    lectureManager("09", "00", hour, minutes, cs720, cs713.name);
    lectureManager("10", "00", hour, minutes, cs713, csd411.name);
    lectureManager("11", "00", hour, minutes, csd411, csd415.name);
    lectureManager("12", "00", hour, minutes, csd415, csd412.name);
    lectureManager("13", "00", hour, minutes, csd412, haveFun);
    noLecture();
  } else if (day == 2) {
    lectureManager("10", "00", hour, minutes, cs720, csd411.name);
    lectureManager("11", "00", hour, minutes, csd411, csd412.name);
    lectureManager("12", "00", hour, minutes, csd412, cs713.name);
    lectureManager("14", "00", hour, minutes, cs713, cs600.name);
    lectureManager("15", "00", hour, minutes, cs600, haveFun);
    noLecture();
  } else if (day == 3) {
    lectureManager("09", "00", hour, minutes, cs720, csd410.name);
    lectureManager("10", "00", hour, minutes, csd410, cs713.name);
    lectureManager("11", "00", hour, minutes, cs713, csd412.name);
    lectureManager("12", "00", hour, minutes, csd412, csd416.name);
    lectureManager("15", "00", hour, minutes, csd416, cs600.name);
    lectureManager("16", "00", hour, minutes, cs600, haveFun);
    noLecture();
  } else if (day == 4) {
    lectureManager("10", "00", hour, minutes, csd410, csd411.name);
    lectureManager("11", "00", hour, minutes, csd411, csd412.name);
    lectureManager("12", "00", hour, minutes, csd412, cs600.name);
    lectureManager("14", "00", hour, minutes, cs600, haveFun);
    noLecture();
  } else if (day == 5) {
    lectureManager("10", "00", hour, minutes, csd410, csd410.name);
    lectureManager("11", "00", hour, minutes, csd410, csd411.name);
    lectureManager("12", "00", hour, minutes, csd411, haveFun);
    noLecture();
  } else {
    lectureNameDOM.innerHTML = "No Lecture right now!";
  }
}
function ece4(day, hour, minutes) {
  anyLecture = false;
  if (day == 1) {
    lectureManager("10", "00", hour, minutes, economics, optical.name);
    lectureManager("11", "00", hour, minutes, optical, radar.name);
    lectureManager("12", "00", hour, minutes, radar, industrial.name);
    lectureManager("14", "00", hour, minutes, industrial, signal.name);
    lectureManager("15", "00", hour, minutes, signal, haveFun);
    noLecture();
  } else if (day == 2) {
    lectureManager("10", "00", hour, minutes, economics, radar.name);
    lectureManager("11", "00", hour, minutes, radar, optical.name);
    lectureManager(
      "12",
      "00",
      hour,
      minutes,
      optical,
      industrialTrainingViva.name
    );
    lectureManager(
      "14",
      "00",
      hour,
      minutes,
      industrialTrainingViva,
      opticalLab.name
    );
    if (currentGroup == 1) {
      lectureManager("15", "00", hour, minutes, opticalLab, haveFun);
    }
    noLecture();
  } else if (day == 3) {
    lectureManager("10", "00", hour, minutes, economics, radar.name);
    lectureManager("11", "00", hour, minutes, radar, signal.name);
    lectureManager("12", "00", hour, minutes, signal, industrial.name);
    lectureManager("14", "00", hour, minutes, industrial, optical.name);
    lectureManager("15", "00", hour, minutes, optical, haveFun);
    noLecture();
  } else if (day == 4) {
    lectureManager("10", "00", hour, minutes, economics, radar.name);
    lectureManager("11", "00", hour, minutes, radar, industrial.name);
    lectureManager("12", "00", hour, minutes, industrial, signal.name);
    lectureManager("14", "00", hour, minutes, signal, optical.name);

    if (currentGroup == 2) {
      lectureManager("15", "00", hour, minutes, optical, industrialLab.name);
      lectureManager("16", "00", hour, minutes, industrialLab, haveFun);
    } else {
      lectureManager("15", "00", hour, minutes, optical, haveFun);
    }
    noLecture();
  } else if (day == 5) {
    lectureManager("12", "00", hour, minutes, industrial, signal.name);

    if (currentGroup == 1) {
      lectureManager("14", "00", hour, minutes, signal, industrialLab.name);
      lectureManager("15", "00", hour, minutes, industrialLab, haveFun);
    } else if (currentGroup == 2) {
      lectureManager("14", "00", hour, minutes, signal, opticalLab.name);
      lectureManager("15", "00", hour, minutes, opticalLab, haveFun);
    }
    noLecture();
  } else {
    lectureNameDOM.innerHTML = "No Lecture right now!";
  }
}
function civ(day, hour, minutes) {
  anyLecture = false;
  if (day == 1) {
    lectureManager("09", "00", hour, minutes, environmental, transport.name);
    lectureManager("10", "00", hour, minutes, transport, geosynthetics.name);
    lectureManager(
      "11",
      "00",
      hour,
      minutes,
      geosynthetics,
      hydraulicStructures.name
    );
    if (currentGroup == 1) {
      lectureManager(
        "12",
        "00",
        hour,
        minutes,
        hydraulicStructures,
        environmentLab.name
      );
      lectureManager("15", "00", hour, minutes, environmentLab, drawing.name);
    } else if (currentGroup == 2) {
      lectureManager(
        "12",
        "00",
        hour,
        minutes,
        hydraulicStructures,
        drawing.name
      );
    }
    lectureManager("16", "00", hour, minutes, drawing, haveFun);
    noLecture();
  } else if (day == 2) {
    lectureManager(
      "09",
      "00",
      hour,
      minutes,
      geosynthetics,
      environmental.name
    );
    lectureManager("10", "00", hour, minutes, environmental, transport.name);
    lectureManager("11", "00", hour, minutes, transport, structureDesign.name);
    lectureManager("12", "00", hour, minutes, structureDesign, haveFun);
    noLecture();
  } else if (day == 3) {
    lectureManager(
      "09",
      "00",
      hour,
      minutes,
      structureDesign,
      hydraulicStructures.name
    );
    lectureManager(
      "10",
      "00",
      hour,
      minutes,
      hydraulicStructures,
      transport.name
    );
    lectureManager("11", "00", hour, minutes, transport, environmental.name);
    if (currentGroup == 1) {
      lectureManager("12", "00", hour, minutes, environmental, haveFun);
    } else if (currentGroup == 2) {
      lectureManager(
        "12",
        "00",
        hour,
        minutes,
        environmental,
        environmentLab.name
      );
      lectureManager("15", "00", hour, minutes, environmentLab, haveFun);
    }
    noLecture();
  } else if (day == 4) {
    lectureManager(
      "09",
      "00",
      hour,
      minutes,
      structureDesign,
      geosynthetics.name
    );
    lectureManager("10", "00", hour, minutes, geosynthetics, transport.name);
    lectureManager(
      "11",
      "00",
      hour,
      minutes,
      transport,
      hydraulicStructures.name
    );
    lectureManager(
      "12",
      "00",
      hour,
      minutes,
      hydraulicStructures,
      projectDilemma
    );
    noLecture();
  } else if (day == 5) {
    lectureManager(
      "09",
      "00",
      hour,
      minutes,
      environmental,
      geosynthetics.name
    );
    lectureManager(
      "10",
      "00",
      hour,
      minutes,
      geosynthetics,
      structureDesign.name
    );
    lectureManager(
      "11",
      "00",
      hour,
      minutes,
      structureDesign,
      hydraulicStructures.name
    );
    lectureManager(
      "12",
      "00",
      hour,
      minutes,
      hydraulicStructures,
      projectDilemma
    );
  } else {
    lectureNameDOM.innerHTML = "No Lecture right now!";
  }
  noLecture();
}
function setStream(courseID) {
  if (document.getElementById(courseID).getAttribute("data-value") == "csedd") {
    if (currentStream != "csedd") {
      reset();
      currentStream = "csedd";
      currentStreamDOM.innerHTML = "CSE-DD";
      timer = setInterval(startLectures, interval);
    }
  } else if (
    document.getElementById(courseID).getAttribute("data-value") == "ece"
  ) {
    if (currentStream != "ece") {
      reset();
      currentStream = "ece";
      currentStreamDOM.innerHTML = "ECE (4 Year)";
      groupDOM.style.display = "flex";
    }
  } else if (
    document.getElementById(courseID).getAttribute("data-value") == "civ"
  ) {
    if (currentStream != "civ") {
      reset();
      currentStream = "civ";
      currentStreamDOM.innerHTML = "Civil Engineering";
      groupDOM.style.display = "flex";
    }
  }
}
function setGroup(groupID) {
  if (document.getElementById(groupID).getAttribute("data-value") == "G1") {
    if (currentGroup != 1) {
      groupReset();

      currentGroup = 1;
      timer = setInterval(startLectures, interval);
    }
  } else if (
    document.getElementById(groupID).getAttribute("data-value") == "G2"
  ) {
    if (currentGroup != 2) {
      groupReset();
      currentGroup = 2;
      timer = setInterval(startLectures, interval);
    }
  }
}

// -----##################### Main loop callback -###########################----

function startLectures() {
  let today = new Date();
  let day = today.getDay();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  if (interval > 500) {
    resetTimer();
  }
  clearInterval(connectTimer);

  if (currentStream == "csedd") {
    csedd(day, getTime(hours), getTime(minutes));
  } else if (currentStream == "ece") {
    ece4(day, getTime(hours), getTime(minutes));
  } else if (currentStream == "civ") {
    civ(day, getTime(hours), getTime(minutes));
  }
}

function handleMeet() {
  if (conreconDOM.innerHTML == "CONNECT") {
    connectTimer = setInterval(timeManager, 500);
    interval = remainingTime * 60 * 1000;
    lectureDetailsDOM.style.opacity = 1;
    window.open(fireLecture, "_blank");
    conreconDOM.innerHTML = "RECONNECT";
    clearInterval(timer);
    timer = setInterval(startLectures, interval);
  } else if (conreconDOM.innerHTML == "RECONNECT") {
    window.open(fireLecture, "_blank");
  }
}
function reset() {
  groupReset();
  (timer = null),
    (connectTimer = null),
    (currentStream = null),
    (fireLecture = null);
  groupDOM.style.display = "none";
}
function groupReset() {
  clearInterval(timer);
  clearInterval(connectTimer);
  interval = 500;
  (currentGroup = null), (remainingTime = null), (lectureHour = null);
  (lectureNameDOM.innerHTML = ""),
    (lectureCurrentDOM.innerHTML = ""),
    (lectureTeacherDOM.innerHTML = "");
  (lectureDetailsDOM.style.opacity = 0), (conreconDOM.style.opacity = 0);
}
function getTime(time) {
  if (time < 10) {
    time = "0" + time;
  }
  return time;
}
function resetTimer() {
  clearInterval(timer);
  interval = 500;
  timer = setInterval(startLectures, interval);
}
function noLecture() {
  if (anyLecture == false) {
    lectureNameDOM.innerHTML = "No lecture right now...";
  }
}
