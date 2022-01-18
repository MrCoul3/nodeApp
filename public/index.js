console.log("index init");
document.addEventListener("DOMContentLoaded", () => {
  const timestamp = 1642487845100;

  function getDate(timestamp) {
    const data = new Date(timestamp);

    function addZero(number) {
      if (number.toString().length < 2) {
        return '0' + number.toString();
      }
      return number.toString();
    }

    return (
      addZero(data.getHours()) +
      ":" +
      addZero(data.getMinutes()) +
      ":" +
      addZero(data.getSeconds())
    );
  }

  console.log(getDate(timestamp));

  async function fetchGetData() {
    const response = await fetch("/api/get");
    const data = await response.json();
    console.log(data);
  }

  async function fetchPostData() {
    const sendedData = {
      name: "тест 1",
    };
    const response = await fetch("/api/post", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendedData),
    });
    const data = await response;
    console.log("status: ", data.status);
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
