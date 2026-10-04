import ngrok from "@ngrok/ngrok";

async function start() {
  try {
    const listener = await ngrok.forward({ addr: 5173, authtoken_from_env: true });
    console.log("NGROK_URL:" + listener.url());
  } catch (err) {
    console.error("NGROK_ERROR:", err.message);
  }
}

start();
