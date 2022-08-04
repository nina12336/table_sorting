var data = [
  {
    name: "Airi Satou",
    position: "Cedric Kelly",
    office: "Tokyo",
    age: 33,
    startDate: "2022/01/05",
  },
  {
    name: "Angelica Ramos",
    position: "Chief Executive Officer (CEO)",
    office: "London",
    age: 47,
    startDate: "2022/01/05",
  },
  {
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    age: 66,
    startDate: "2019/05/25",
  },
  {
    name: "Bradley Greer",
    position: "Software Engineer",
    office: "London",
    age: 41,
    startDate: "2019/11/16",
  },
  {
    name: "Brenden Wagner",
    position: "Software Engineer",
    office: "San Francisco",
    age: 28,
    startDate: "2022/03/15",
  },
  {
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    age: 61,
    startDate: "2022/03/11",
  },
  {
    name: "Bruno Nash",
    position: "Software Engineer",
    office: "London",
    age: 38,
    startDate: "2020/09/26",
  },
  {
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "New York",
    age: 21,
    startDate: "2020/09/26",
  },
  {
    name: "Cara Stevens",
    position: "Sales Assistant",
    office: "New York",
    age: 46,
    startDate: "2020/09/26",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    age: 22,
    startDate: "2020/09/26",
  },
];

function renderTable(data) {
  let table = document.getElementById("table");
  let fragment = document.createDocumentFragment();
  for (i = 0; i < data.length; i++) {
    let newTd;
    let newTr = document.createElement("tr");
    newTd = document.createElement("td");
    newTd.appendChild(document.createTextNode(data[i].name));
    newTr.appendChild(newTd);
    newTd = document.createElement("td");
    newTd.appendChild(document.createTextNode(data[i].position));
    newTr.appendChild(newTd);
    newTd = document.createElement("td");
    newTd.appendChild(document.createTextNode(data[i].office));
    newTr.appendChild(newTd);
    newTd = document.createElement("td");
    newTd.appendChild(document.createTextNode(data[i].age));
    newTr.appendChild(newTd);
    newTd = document.createElement("td");
    newTd.appendChild(document.createTextNode(data[i].startDate));
    newTr.appendChild(newTd);
    fragment.appendChild(newTr);
  }
  table.appendChild(fragment);
}

function renderSortingTable(arr) {
  for (c = 0; c < arr.length; c++) {
    document.getElementById("table").rows[c + 1].childNodes[0].innerText =
      arr[c].name;
    document.getElementById("table").rows[c + 1].childNodes[1].innerText =
      arr[c].position;
    document.getElementById("table").rows[c + 1].childNodes[2].innerText =
      arr[c].office;
    document.getElementById("table").rows[c + 1].childNodes[3].innerText =
      arr[c].age;
    document.getElementById("table").rows[c + 1].childNodes[4].innerText =
      arr[c].startDate;
  }
}

function sortName(nameArr) {
  let pressName = document.getElementById("name");
  pressName.onclick = function () {
    nameArr.sort(function (a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
    renderSortingTable(nameArr);
  };
}

function sortDate(dateArr) {
  let pressDate = document.getElementById("date");
  pressDate.onclick = function () {
    dateArr.sort(function (x, y) {
      return x.startDate < y.startDate ? 1 : -1;
    });
    renderSortingTable(dateArr);
  };
}
