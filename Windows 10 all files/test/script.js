const DataURL = "http://localhost:3000/users"; // API URL
const content = document.getElementById("content");
const userName = document.getElementById("name");
const userAge = document.getElementById("age");
const submitBtn = document.getElementById("submit");

async function fetchData() {
  try {
    const response = await fetch(DataURL);
    const data = await response.json();
    renderList(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to update the content list
function renderList(dataArray) {
  content.innerHTML = ""; // Clear existing content
  dataArray.forEach(({ name, age }) => {
    const li = document.createElement("li");
    li.textContent = `Name: ${name}, Age: ${age}`;
    content.appendChild(li);
  });
}

// 📌 Handle Submit
submitBtn.addEventListener("click", async () => {
  if (userName.value && userAge.value) {
    const newUser = { name: userName.value, age: Number(userAge.value) };

    try {
      const response = await fetch(DataURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        fetchData(); // Refresh UI
        userName.value = "";
        userAge.value = "";
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  }
});

fetchData();
