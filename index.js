const apiKey = process.env.AWS_API_KEY;

fetch("https://c44r3fzrqc.execute-api.us-east-1.amazonaws.com/sql_test_api_stage/test2resource", {
  method: "GET",
  headers: {
    "x-api-key": apiKey
  }
})
  .then(response => {
    if (response.ok) {
        return response.text();
    }
    throw new Error("Request failed");
  })
  .then(data => {
    const testBackend = document.getElementById("test-backend");
    testBackend.innerHTML = data;
  })
  .catch(error => {
    console.log(error);
  });

