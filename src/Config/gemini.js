const API_KEY = import.meta.env.VITE_API_KEY; // your OpenRouter key

export async function runChat(prompt) {

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-v3.2",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        reasoning: {
          enabled: true
        }
      })
    });

    const data = await response.json();

    return data.choices[0].message.content;

  } catch (error) {
    console.error("OpenRouter Error:", error);
    return "Something went wrong.";
  }
}