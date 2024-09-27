document.getElementById('critiqueForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const critique = document.getElementById('critiquePost').value;

    // Create new list item for the critique section
    const newCritiqueItem = document.createElement('li');
    newCritiqueItem.textContent = critique;

    // Append new critique to the list
    document.getElementById('critiqueItems').appendChild(newCritiqueItem);

    // Reset the form
    document.getElementById('critiqueForm').reset();
});

document.getElementById('solutionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const solution = document.getElementById('solutionPost').value;

    // Create new list item for the solutions section
    const newSolutionItem = document.createElement('li');
    newSolutionItem.textContent = solution;

    // Append new solution to the list
    document.getElementById('solutionItems').appendChild(newSolutionItem);

    // Reset the form
    document.getElementById('solutionForm').reset();
});
