// ===================== login.js =====================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // For demo purposes, no real authentication
    window.location.href = "dashboard.html";
  });
}

// ===================== logs.js =====================
function filterLogs() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const dateFilter = document.getElementById("dateFilter").value;
  const table = document.getElementById("logsTable");
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    const rollNo = cells[0].innerText.toLowerCase();
    const name = cells[1].innerText.toLowerCase();
    let match = true;

    if (searchInput && !rollNo.includes(searchInput) && !name.includes(searchInput)) {
      match = false;
    }

    if (dateFilter) {
      // In real app, compare entry date with dateFilter
      // Here we skip since sample data has no date
    }

    rows[i].style.display = match ? "" : "none";
  }
}

// ===================== manage.js =====================
const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable");

if (studentForm) {
  studentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const rollNo = document.getElementById("rollNo").value;
    const name = document.getElementById("name").value;

    const newRow = studentTable.insertRow();
    newRow.innerHTML = `
      <td>${rollNo}</td>
      <td>${name}</td>
      <td><button onclick="deleteStudent(this)">Delete</button></td>
    `;

    studentForm.reset();
  });
}

function deleteStudent(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}

// ===================== reports.js =====================
function generateCSV() {
  const table = document.getElementById("reportTable");
  let csv = [];
  for (let row of table.rows) {
    let cols = [];
    for (let cell of row.cells) {
      cols.push(cell.innerText);
    }
    csv.push(cols.join(","));
  }
  const csvContent = csv.join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "attendance_report.csv";
  link.click();
}

function generatePDF() {
  alert("PDF generation demo - In real app, use jsPDF or similar library.");
}
