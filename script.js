function generatePrompt() {
	
    const race = document.getElementById('race').value;
    const profession = document.getElementById('profession').value;
    const personality = document.getElementById('personality').value;
	
    const location = document.getElementById('location').value;
	
	const medium = document.getElementById('medium').value;

    const prompt = `Generate image with prompt character stylesheet, full body portrait, front and rear view of a ${personality} ${race} ${profession} background ${location} medium ${medium} in the style of Frank Frazetta, Julie Bell, John Blanche, Hieronymus Bosch, Rich details`;
    document.getElementById('GeneratedPrompt').innerText = prompt;
}


function copyToClipboard() {

	navigator.clipboard.writeText(document.getElementById('GeneratedPrompt').innerText)
}
