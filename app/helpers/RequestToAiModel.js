


async function main(text_user) {
  try {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text:text_user,
      }),
    });

    const data = await response.json();

    console.log(data.result);
  } catch (error) {
    console.error("Frontend Error:", error);
  }
}



export default main;