import { getExtractor } from "./extractor-factory";

(() => {
  const myWindow: Window & { hasRun: boolean } = window as any;
  if (myWindow.hasRun) return;
  myWindow.hasRun = true;
  debugger;
  console.log("test")
  browser.runtime.onMessage.addListener((message: { command: string }) => {
    if (message.command === "extract") {
      const extract = getExtractor();
      extract!();
    }
  });
})();
