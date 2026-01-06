export async function handler(event) {
  const text = event.queryStringParameters.img;

  if (!text) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "No text provided" })
    };
  }

  try {
    const res = await fetch(
      "https://all-type-photo-gen.onrender.com/api/generate?img=" +
      encodeURIComponent(text)
    );

    const data = await res.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API failed" })
    };
  }
}
