const process = () => {
	const file = document.querySelector("#upload").files[0];
	if (!file) return;
	//create new file reader
	const reader = new FileReader();
	//we will get base64 encoded data
	reader.readAsDataURL(file);
	reader.onload = (e) => {
		const imageElement = document.createElement("img");
		imageElement.src = e.target.result;
		document.querySelector("#input").src = e.target.result;
		imageElement.onload = (event) => {
			const canvas = document.createElement("canvas");
			const MAX_WIDTH = 400;
			const scaleSize = MAX_WIDTH / event.target.width;
			canvas.width = MAX_WIDTH;
			canvas.height = event.target.height * scaleSize;
			const ctx = canvas.getContext("2d");
			ctx.drawImage(event.target, 0, 0, canvas.width, canvas.height);
			console.log(event.target);
			const srcEncoded = ctx.canvas.toDataURL(e.target, "image/jpeg");
			document.querySelector("#output").src = srcEncoded;
		};
	};
};
