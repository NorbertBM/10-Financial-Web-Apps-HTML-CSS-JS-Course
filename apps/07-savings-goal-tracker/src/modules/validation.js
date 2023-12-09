export function validation() {
  const allFormGroups = document.querySelectorAll(".form-group");

  allFormGroups.forEach((formGroup) => {
    formGroup.onclick = () => {
      if (formGroup.querySelector("input").disabled) {
        formGroup.querySelector("small").textContent =
          "Previous input is required!";
        setTimeout(() => {
          formGroup.querySelector("small").textContent = "";
        }, 3000);
      }
    };
  });
}
