var topBar = document.createElement("div");
topBar.style.position = "fixed";
topBar.style.top = "0";
topBar.style.left = "0";
topBar.style.width = "100%";
topBar.style.height = "50px";
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

var button3 = document.createElement("button");
button3.textContent = "Blob";
button3.style.margin = "5px";
button3.style.padding = "10px 20px";
button3.style.border = "none";
button3.style.borderRadius = "4px";
button3.style.backgroundColor = "#ffffff"; // White background
button3.style.color = "#000000"; // Black text
button3.style.cursor = "pointer";
button3.style.fontFamily = "Arial, sans-serif";

topBar.appendChild(button1);
topBar.appendChild(button2);
topBar.appendChild(button3);

var collapseButton = document.createElement("button");
collapseButton.textContent = "Collapse";
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
  if (topBar.style.height === "50px") {
    topBar.style.height = "0";
    collapseButton.textContent = "Expand";
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
  } else {
    topBar.style.height = "50px";
    collapseButton.textContent = "Collapse";
    button1.style.display = "inline-block";
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";
  }
});

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

button3.addEventListener("click", function() {
  const e = (s) => s.replace(/[<>'"]/g, (c) => `\\u${('000' + c.charCodeAt(0).toString(16)).substr(-4)}`);
  const l = window.location.href;
  const i = `<iframe src="${e(l)}" style="width:100%;height:100%;position:fixed;top:0;left:0;"></iframe>`;
  const b = new Blob([i], { type: "text/html" });
  window.location.href = URL.createObjectURL(b);
});
