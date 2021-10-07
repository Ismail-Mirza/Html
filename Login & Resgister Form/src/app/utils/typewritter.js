//typewritter
class TypeWriter {
	constructor(txtElement, words, wait = 3000) {
		this.txtElement = txtElement;
		this.words = words;
		this.txt = "";
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10);
		this.type();
		this.isDeleting = false;
	}
	type() {
		// console.log("HELLO");
		//current index of word
		const current = this.wordIndex % this.words.length;
		//get full text of current word
		const fulltxt = this.words[current];
		// console.log(fulltxt);
		//check if isDeleting
		if (this.isDeleting) {
			//remove char
			this.txt = fulltxt.substring(0, this.txt.length - 1);
		} else {
			//add char
			this.txt = fulltxt.substring(0, this.txt.length + 1);
		}
		//insert txt into element
		this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
		//initila typespeed
		let typespeed = 300;
		if (this.isDeleting) {
			typespeed /= 2;
		}
		//if word is complete
		if (!this.isDeleting && this.txt === fulltxt) {
			//make pause
			typespeed = this.wait;
			//set delete to true
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === "") {
			this.isDeleting = false;
			//move to next word
			this.wordIndex++;
			//pause before start typing
			typespeed = 500;
		}
		setTimeout(() => this.type(), 500);
	}
}
