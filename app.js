function toggleAnswer(questionElement) {
    const answer = questionElement.nextElementSibling;
    const icon = questionElement.querySelector("img");

    answer.classList.toggle("hidden");
    icon.src = answer.classList.contains("hidden")
        ? "/assets/images/icon-plus.svg"
        : "/assets/images/icon-minus.svg";
}
  