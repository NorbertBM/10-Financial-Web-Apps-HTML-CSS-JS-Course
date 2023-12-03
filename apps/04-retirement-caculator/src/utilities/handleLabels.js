export function handleErrorLabel(input) {
  //   console.log("error");
  const label = input.nextElementSibling;
  label.classList.remove("success");
  label.classList.add("error");
}
export function handleSuccessLabel(input) {
  //   console.log("success");
  const label = input.nextElementSibling;
  label.classList.remove("error");
  label.classList.add("success");
}
