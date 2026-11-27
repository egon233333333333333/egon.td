
(function () {
  const css = `
    #header {
      background-image: url("https://img.magnific.com/free-vector/abstract-grainy-background_474888-6925.jpg?semt=ais_hybrid&w=740&q=80");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      padding: 20px;
      text-align: center;
      margin-bottom: 20px;
    }
    #header .title a {
      color: #FFF073;
      text-decoration: none;
    }
    .header-links {
      display: flex;
      justify-content: space-between;
    }
    .header-links a {
      color: grey;
      font-family: Courier New;
      text-decoration: none;
    }
    .header-links a:hover {
      text-decoration: underline;
    }
  `;

  const html = `
    <div id="header">
      <h1 class="title"><a href="index.html">egon.td</a></h1>
      <div class="header-links">
        <a href="works.html">about</a>
        <a href="works.html">videos</a>
        <a href="guestbook.html">msg</a>
      </div>
    </div>
  `;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  const slot = document.getElementById("site-header");
  if (slot) slot.innerHTML = html;
})();
