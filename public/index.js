console.log("index init");
document.addEventListener("DOMContentLoaded", () => {

  async function fetchGetData() {
    const response = await fetch("/api/get");
    const data = await response.json();
    console.log(data);
  }

  async function fetchPostData() {
    const sendedData = {
      name: "тест 1"
    };
    const response = await fetch("/api/post", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendedData)
    });
    const data = await response;
    console.log('status: ',data.status)
  }

  const getBtn = document.querySelector("#getBtn");
  const postBtn = document.querySelector("#postBtn");

  getBtn.addEventListener("click", async () => {
    await fetchGetData();
  });
  postBtn.addEventListener("click", async () => {
    await fetchPostData();
  });

});
