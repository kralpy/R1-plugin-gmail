function speakMessage(text, speakOut = true) {
  PluginMessageHandler.postMessage(JSON.stringify({
    message: text,
    useLLM: true,
    wantsR1Response: speakOut
  }));
}
