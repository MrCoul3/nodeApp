console.log("index init");
document.addEventListener("DOMContentLoaded", () => {

  async function fetchGetData() {
    const response = await fetch("/api");
    const data = await response.json();
    console.log(data);
  }

  async function fetchPostData() {
    const data = {
      name: "тест 1"
    };
    const response = await fetch("/api", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
    });
  }

  const btn = document.querySelector("#sendBtn");
  btn.addEventListener("click", async () => {
    await fetchGetData();
  });

});
