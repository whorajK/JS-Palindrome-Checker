const form = document.getElementById("form");
const userInput = document.getElementById("user-input");
// const buttons = document.getElementById("btn");
const outcome = document.getElementById("outcome");

const checkPalindrome = (string) => {
	const input = userInput.value;
	const arrValue = input.split("");

	const reverseValue = arrValue.reverse();
	const stringValue = reverseValue.join("");

	if (input == stringValue) {
		outcome.innerText = ` Yes! ${userInput.value} is a palindrome`;
		outcome.style.color = "green";
	} else {
		outcome.innerText = `No! ${userInput.value}  is not a palindrome`;
		outcome.style.color = "red";
	}
};

form.addEventListener("submit", (e) => {
	e.preventDefault();

	if (userInput.value === "") {
		alert("Enter Text To Check!");
	} else {
		checkPalindrome();
		userInput.value = "";
	}
});
