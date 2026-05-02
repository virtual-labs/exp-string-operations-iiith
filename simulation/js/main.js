// --- Problems (example, adapt as needed) ---
const problems = [
  {
    id: 1,
    title: "Palindrome Detection",
    desc: "Given a string, print YES if it is a palindrome (ignoring non-letters and case), otherwise print NO.",
    template: [
      "int main() {",
      "    char str[1000], clean[1000];",
      '    scanf("%[^\\n]", str);',
      "    int n = 0;",
      "    for (int i = 0; str[i] != '\\0'; i++) {",
      "        if (_____)", // blank 0
      "            clean[n++] = tolower(str[i]);",
      "    }",
      "    clean[n] = '\\0';",
      "    int is_palindrome = 1;",
      "    for (int i = 0; i < n / 2; i++) {",
      "        if (clean[i] != clean[_____]) {", // blank 1
      "            is_palindrome = 0;",
      "            break;",
      "        }",
      "    }",
      "    if (is_palindrome)",
      '        printf("YES\\n");',
      "    else",
      '        printf("NO\\n");',
      "    return 0;",
      "}",
    ],
    blanks: [
      {
        line: 5,
        answers: [
          "isalpha(str[i])",
          "isalpha(str[i]) != 0",
          "(isalpha(str[i]))",
          "(isalpha(str[i]) != 0)",
        ],
        placeholder: "alphabetic check",
      },
      {
        line: 11,
        answers: ["n - 1 - i", "n-1-i", "(n-1-i)", "(n - 1 - i)"],
        placeholder: "mirror index",
      },
    ],
    hints: [
      "How do you check if a character is a letter?",
      "Try to use isalpha from ctype.h.",
      "What is the index of the character to compare with clean[i]?",
      "Remember n-1-i gives the index of the character from the end.",
      "For input 'Madam, I'm Adam', output is YES. For input 'Eve.', output is NO.",
    ],
    compilerOutput: "Compiled successfully.",
    runtimeOutput:
      "For input 'Madam, I'm Adam', output is YES. For input 'Eve.', output is NO.",
  },
  {
    id: 2,
    title: "Subsequence Checking",
    desc: "Given two strings, print YES if the second is a subsequence of the first, otherwise print NO.",
    template: [
      "int main() {",
      "    char a[110], b[110];",
      '    scanf("%s %s", a, b);',
      "    int i = 0, j = 0;",
      "    while (a[i] != '\\0' && b[j] != '\\0') {",
      "        if (a[i] == b[j])",
      "            _____;", // blank 0
      "        _____;", // blank 1
      "    }",
      "    if (b[j] == '\\0')",
      '        printf("YES\\n");',
      "    else",
      '        printf("NO\\n");',
      "    return 0;",
      "}",
    ],
    blanks: [
      {
        line: 6,
        answers: ["j++", "++j", "j = j + 1", "j+=1", "j = j+1"],
        placeholder: "advance subsequence pointer",
      },
      {
        line: 7,
        answers: ["i++", "++i", "i = i + 1", "i+=1", "i = i+1"],
        placeholder: "advance main pointer",
      },
    ],
    hints: [
      "What should you do when a[i] == b[j]?",
      "How do you always advance through the main string?",
      "For input 'hyderabad her', output is YES. For input 'hyderabad dear', output is NO.",
    ],
    compilerOutput: "Compiled successfully.",
    runtimeOutput:
      "For input 'hyderabad her', output is YES. For input 'hyderabad dear', output is NO.",
  },
];

let currentProblem = null;
let userInputs = [];

function renderProblemOptions() {
  const select = document.getElementById("problem-select");
  select.innerHTML = problems
    .map((p, i) => `<option value="${i}">Problem ${i + 1}</option>`)
    .join("");
}

function renderProblem(idx) {
  currentProblem = problems[idx];
  userInputs = Array(currentProblem.blanks.length).fill("");
  document.getElementById("problem-desc").textContent = currentProblem.desc;
  renderCodeTemplate();
  renderHints();
  document.getElementById("feedback").textContent = "";
  document.getElementById("runtime-output").textContent = "";
  document.getElementById("run-btn").disabled = true;
}

function renderCodeTemplate() {
  const codeDiv = document.getElementById("code-template");
  codeDiv.innerHTML = "";
  currentProblem.template.forEach((line, idx) => {
    let html = line;
    currentProblem.blanks.forEach((blank, bIdx) => {
      if (blank.line === idx) {
        html = html.replace(
          "_____",
          `<input class="blank-input" data-blank="${bIdx}" value="${userInputs[bIdx] || ""}" placeholder="${blank.placeholder}" />`,
        );
      }
    });
    codeDiv.innerHTML += `<div class="template-line">${html}</div>`;
  });
  // Attach input listeners
  codeDiv.querySelectorAll(".blank-input").forEach((input) => {
    input.addEventListener("input", (e) => {
      const bIdx = +e.target.getAttribute("data-blank");
      userInputs[bIdx] = e.target.value;
      document.getElementById("feedback").textContent = "";
      document.getElementById("runtime-output").textContent = "";
      document.getElementById("run-btn").disabled = true;
    });
  });
}

function renderHints() {
  const hintSelect = document.getElementById("hint-level");
  hintSelect.innerHTML = "";
  hintSelect.innerHTML += `<option value="0" disabled selected>Hint 0</option>`;
  for (let i = 1; i <= currentProblem.hints.length; ++i) {
    hintSelect.innerHTML += `<option value="${i}">Hint ${i}</option>`;
  }
  showHints(0);
  hintSelect.onchange = (e) => showHints(+e.target.value);
}

function showHints(level) {
  const hintsDiv = document.getElementById("hints");
  if (level === 0) {
    hintsDiv.innerHTML = "";
    return;
  }
  hintsDiv.innerHTML = `<div class="hint">${currentProblem.hints[level - 1]}</div>`;
}

function checkAnswers() {
  let allCorrect = true;
  let feedback = "";
  currentProblem.blanks.forEach((blank, i) => {
    const userVal = (userInputs[i] || "").trim();
    if (blank.answers.map((a) => a.trim()).includes(userVal)) {
      feedback += `<div class="feedback-correct">Blank ${i + 1}: Correct</div>`;
    } else {
      feedback += `<div class="feedback-incorrect">Blank ${i + 1}: Incorrect</div>`;
      allCorrect = false;
    }
  });
  document.getElementById("feedback").innerHTML = feedback;
  document.getElementById("run-btn").disabled = !allCorrect;
}

function showRuntimeOutput() {
  document.getElementById("runtime-output").innerHTML =
    `<div class="feedback-all-correct">${currentProblem.runtimeOutput}</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderProblemOptions();
  renderProblem(0);
  document.getElementById("problem-select").onchange = (e) =>
    renderProblem(+e.target.value);
  document.getElementById("submit-btn").onclick = checkAnswers;
  document.getElementById("run-btn").onclick = showRuntimeOutput;
});
