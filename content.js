function insertFakeCorrection() {
  if (document.getElementById("fake-correction-gpt")) return;

  const container = document.createElement("div");
  container.id = "fake-correction-gpt";
  container.style.fontSize = "16px";
  container.style.fontWeight = "700";
  container.style.lineHeight = "1.3";
  container.style.margin = "10px 0";
  container.style.fontFamily = "arial, sans-serif";
  container.style.color = "#ea4335";
  container.style.whiteSpace = "nowrap";

  const textNode = document.createTextNode("Did you mean: ");

  const link = document.createElement("a");
  link.href = "https://www.google.com/search?q=black+cock";
  link.textContent = "black cock";
  link.style.color = "#8ab4f8";
  link.style.fontStyle = "italic";
  link.style.fontWeight = "700";
  link.style.textDecoration = "none";
  link.style.cursor = "pointer";

  link.addEventListener("mouseenter", () => link.style.textDecoration = "underline");
  link.addEventListener("mouseleave", () => link.style.textDecoration = "none");

  container.appendChild(textNode);
  container.appendChild(link);

  const target = document.querySelector("#taw") || document.querySelector("#topstuff");
  if (target && target.parentNode) {
    target.parentNode.insertBefore(container, target);
  } else {
    const main = document.querySelector("form[action='/search']");
    if (main && main.parentNode) {
      main.parentNode.insertBefore(container, main.nextSibling);
    }
  }
}

const observer = new MutationObserver(() => insertFakeCorrection());
observer.observe(document.body, { childList: true, subtree: true });

insertFakeCorrection();
