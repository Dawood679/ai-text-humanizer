


async function main(text_user) {
  try {
    const response = await fetch("/api/gimine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text:text_user,
      }),
    });

    const data = await response.json();

    console.log('text data from backend' + data.result);
    return data.result
  } catch (error) {
    console.error("Frontend Error:", error);
  }
}



export default main;