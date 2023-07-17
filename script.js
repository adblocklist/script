var topBar = document.createElement("div");
topBar.style.position = "fixed";
topBar.style.top = "0";
topBar.style.left = "0";
topBar.style.width = "100%";
topBar.style.height = "0"; // Start off collapsed
topBar.style.background = "rgba(0, 0, 0, 0.5)";
topBar.style.zIndex = "9999";

var button1 = document.createElement("button");
button1.textContent = "Inspect";
button1.style.margin = "5px";
button1.style.padding = "10px 20px";
button1.style.border = "none";
button1.style.borderRadius = "4px";
button1.style.backgroundColor = "#ffffff"; // White background
button1.style.color = "#000000"; // Black text
button1.style.cursor = "pointer";
button1.style.fontFamily = "Arial, sans-serif";

var button2 = document.createElement("button");
button2.textContent = "Remove Iframe";
button2.style.margin = "5px";
button2.style.padding = "10px 20px";
button2.style.border = "none";
button2.style.borderRadius = "4px";
button2.style.backgroundColor = "#ffffff"; // White background
button2.style.color = "#000000"; // Black text
button2.style.cursor = "pointer";
button2.style.fontFamily = "Arial, sans-serif";

topBar.appendChild(button1);
topBar.appendChild(button2);

var collapseButton = document.createElement("button");
collapseButton.textContent = "Collapse";
collapseButton.id = "collapse-button-menu";
collapseButton.style.position = "absolute";
collapseButton.style.top = "5px";
collapseButton.style.right = "10px";
collapseButton.style.padding = "5px 10px";
collapseButton.style.border = "none";
collapseButton.style.borderRadius = "4px";
collapseButton.style.backgroundColor = "#6c757d";
collapseButton.style.color = "#ffffff"; // White text
collapseButton.style.cursor = "pointer";
collapseButton.style.fontFamily = "Arial, sans-serif";
collapseButton.style.boxShadow = "0 0 8px rgba(0, 123, 255, 0.5)";

collapseButton.addEventListener("click", function() {
  if (topBar.style.height === "0") {
    topBar.style.height = "50px";
    collapseButton.textContent = "Collapse";
    button1.style.display = "inline-block";
    button2.style.display = "inline-block";
  } else {
    topBar.style.height = "0";
    collapseButton.textContent = "Expand";
    button1.style.display = "none";
    button2.style.display = "none";
  }
});

var button = document.getElementById("collapse-button-menu");
button.click();

topBar.appendChild(collapseButton);

document.body.insertBefore(topBar, document.body.firstChild);

button1.addEventListener("click", function() {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/eruda";
  document.body.appendChild(script);
  script.onload = function() {
    eruda.init();
  };
});

button2.addEventListener("click", function() {
  var iframes = document.getElementsByTagName("iframe");
  var iframesArray = Array.from(iframes);
  iframesArray.forEach(function(iframe) {
    iframe.parentNode.removeChild(iframe);
  });
});
