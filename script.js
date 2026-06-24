let problems = JSON.parse(localStorage.getItem("problems")) || [];

function addProblem() {
    let name = document.getElementById("problemName").value;
    let difficulty = document.getElementById("difficulty").value;

    if (name === "") return;

    let problem = {
        name: name,
        difficulty: difficulty
    };

    problems.push(problem);

    localStorage.setItem("problems", JSON.stringify(problems));

    document.getElementById("problemName").value = "";

    render();
}

function deleteProblem(index) {
    problems.splice(index, 1);
    localStorage.setItem("problems", JSON.stringify(problems));
    render();
}

function render() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    let easy = 0, medium = 0, hard = 0;

    problems.forEach((p, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <span>${p.name} - ${p.difficulty}</span>
            <button class="delete-btn" onclick="deleteProblem(${index})">Delete</button>
        `;

        list.appendChild(li);

        if (p.difficulty === "Easy") easy++;
        else if (p.difficulty === "Medium") medium++;
        else hard++;
    });

    document.getElementById("summary").innerText =
        `Easy: ${easy} | Medium: ${medium} | Hard: ${hard}`;
}

render();