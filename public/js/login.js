console.log("script is linked");
const login = $("#submit");

login.on("click", async (e) => {
  e.preventDefault();
  const username = $("#username").val().trim();
  const password = $("#password").val().trim();
  console.log(username, password);
  if (username && password) {
    const res = await fetch(`api/questmasters/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      document.location.replace("/questboard");
    } else {
      res.json().then((data) => alert(data.message));
    }
  }
});
