console.log("script is linked");
const signUp = $("#submit");

signUp.on("click", async (e) => {
  e.preventDefault();
  const username = $("#user").val().trim();
  const password = $("#pass").val().trim();
  const questMasterName = $("#qmName").val().trim();
  if (password.length < 8) {
    alert("Please use a longer password");
  }
  if (username && password && questMasterName) {
    const res = await fetch("/api/questmasters", {
      method: "POST",
      body: JSON.stringify({ username, password, questMasterName }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      document.location.replace(`/questBoard`);
    }
  }
});
