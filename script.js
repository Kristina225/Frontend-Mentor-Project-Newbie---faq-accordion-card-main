const allAccordionItems = document.querySelectorAll(".accordion__item");
const allAccordionQuestions = document.querySelectorAll(
  ".accordion__item--shown"
);
const allAccordionAnswers = document.querySelectorAll(
  ".accordion__item--hidden"
);

allAccordionQuestions.forEach((question, index) => {
  question.addEventListener("click", () => {
    allAccordionAnswers[index].parentElement.classList.toggle("open");
  });
});
