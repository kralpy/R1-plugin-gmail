function requestCatFacts() {
  PluginMessageHandler.postMessage(JSON.stringify({
    message: 'Tell me 5 facts about cats. Respond ONLY with JSON in this format: {"facts":["fact1",...]}',
    useLLM: true
  }));
}

window.onPluginMessage = function(data) {
  if (data.data) {
    const parsed = JSON.parse(data.data);
    displayFacts(parsed.facts);
  }
};
