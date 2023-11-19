const { invoke } = window.__TAURI__.tauri;

let greetInputEl;
let greetMsgEl;
let helloButton;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  let data = greetInputEl.value;
  if (data == null) {
    data = "Kt";
  }
  greetMsgEl.textContent = await invoke("greet", { name: data });
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  helloButton = document.querySelector("#hello-btn");
  document.querySelector("#greet-form").addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });


  helloButton.addEventListener("click", function (event) {
    event.preventDefault(); // 防止表单提交
    // alert('Hello there!');
    greet();
  });

});
