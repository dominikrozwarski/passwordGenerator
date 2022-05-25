const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');
const btn = document.querySelector('.btn');
const error = document.querySelector('.error');
const info = document.querySelector('.info');
const pass = document.querySelector('.pass');
const copy = document.querySelector('.copy');

const symbols = '!@#$%^&*_-+=';
const numbers = '0123456789';
const small = 'abcdefghijklmnopqrstuvwxyz';
const large = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//values of checkboxes

const check = () => {
	if (
		first.checked == false &&
		second.checked == false &&
		third.checked == false &&
		fourth.checked == false
		//condition do display error
	) {
		error.style.display = 'block';
		info.style.display = 'none';
		pass.style.display = 'none';
		copy.style.display = 'none';
		//displaying error on screan
	} else {
		error.style.display = 'none';
		info.style.display = 'block';
		addingSigns();
		//displaying values that must apperar if there is no error
	}
};

const addingSigns = () => {
	let signs = '';
	let password = '';

	first.checked ? (signs += symbols) : '';
	second.checked ? (signs += numbers) : '';
	third.checked ? (signs += small) : '';
	fourth.checked ? (signs += large) : '';
	//condition if checkboxes are selected them string add each other making one big string

	for (let i = 0; i < 12; i++) {
		password += signs.charAt(Math.floor(Math.random() * signs.length));
	}
	//calculation for the signs of the password

	pass.style.display = 'block';
	pass.textContent = password;
	copy.style.display = 'block';
	//displaying password
};

const makeCopy = () => {
	navigator.clipboard.writeText(pass.innerHTML);
	console.log(pass);
};
//function that copy the password

copy.addEventListener('click', makeCopy);
btn.addEventListener('click', check);
