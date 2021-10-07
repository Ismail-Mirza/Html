//init speach api
const synth = window.speechSynthesis;
//dom elements

const textForm = document.querySelector("form");
const textInput = document.querySelector("#text-input");
const voiceSelect = document.querySelector("#voice-select");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector("#rate-value");
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector("#pitch-value");
const body = document.querySelector("body");
// init voice array
let voices = [];
const getVoices = () => {
	voices = synth.getVoices();
	console.log(voices);
	//loop through voices and create option for each voice
	voices.forEach((voice) => {
		//create option element
		const option = document.createElement("option");
		//populate option
		option.textContent = voice.name + "(" + voice.lang + ")";
		//set needed option attribute
		option.setAttribute("data-lang", voice.lang);
		option.setAttribute("data-name", voice.name);
		voiceSelect.appendChild(option);
	});
};
getVoices();
if (synth.onvoiceschanged !== undefined) {
	synth.onvoiceschanged = getVoices;
}

//speak

const speak = () => {
	//add background animation
	body.style.background = "#141414 url('tenor.gif')";
	body.style.backgroundRepeat = "repeat-x";
	body.style.backgroundSize = "100% 100%";

	//check if speaking
	if (synth.speaking) {
		console.error("Already speaking....");
		return;
	}
	if (textInput.value !== "") {
		//get speak text
		const speakText = new SpeechSynthesisUtterance(textInput.value);
		//speak end
		speakText.onend = (e) => {
			console.log("Done speaking....");
		};
		//speack error
		speakText.onerror = (e) => {
			console.error("Something went wrong");
		};
		//selected voice array

		const selectedVoice =
			voiceSelect.selectedOptions[0].getAttribute("data-name");
		//loop through voices
		voices.forEach((voice) => {
			if (voice.name === selectedVoice) {
				speakText.voice = voice;
			}
		});
		//set pitch and rate
		speakText.rate = rate.value;
		speakText.rate = pitch.value;
		//speak
		synth.speak(speakText);
	}
};

// event listerner

//text form submit

textForm.addEventListener("submit", (e) => {
	e.preventDefault();
	speak();
	textInput.blur();
});

//rate value change event
rate.addEventListener("change", (e) => {
	rateValue.textContent = e.target.value;
});
pitch.addEventListener("change", (e) => {
	pitchValue.textContent = e.target.value;
});
//speak after voice change event

voiceSelect.addEventListener("change", (e) => {
	e.preventDefault();
	speak();
	textInput.blur();
});
