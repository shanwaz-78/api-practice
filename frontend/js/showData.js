const tBody = document.querySelector("table > tbody");

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`URL is not valid`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Cannot Fetch from given url ${error}`);
  }
}

function generateHeadings(headings) {
  const tr = document.createElement("tr");
  for (let i = 0; i < headings.length; i++) {
    const th = document.createElement("th");
    th.textContent = headings[i];
    tr.appendChild(th);
  }
  tBody.appendChild(tr);
}

async function addTableData() {
  const data = await fetchData("http://localhost:8083/api/data");
  data.forEach((element) => {
    const tr = document.createElement("tr");
    const idField = document.createElement("td");
    const nameField = document.createElement("td");
    const emailField = document.createElement("td");
    const phoneField = document.createElement("td");
    const websiteField = document.createElement("td");

    idField.textContent = element.id;
    nameField.textContent = element.name;
    emailField.textContent = element.email;
    phoneField.textContent = element.phone;
    websiteField.textContent = element.website;

    tr.appendChild(idField);
    tr.appendChild(nameField);
    tr.appendChild(emailField);
    tr.appendChild(phoneField);
    tr.appendChild(websiteField);

    tBody.appendChild(tr);
  });
}

generateHeadings(["id", "name", "email", "phone", "website"]);
addTableData();
