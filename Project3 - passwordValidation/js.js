const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
	if (
		pass.value.length > minValue &&
		pass.value.match(numbers) &&
		pass.value.match(letters) &&
		pass.value.match(special)
	) {
		p.textContent = 'Massz BARDZO dobre hasło!';
		p.style.color = ' lime';
	} else if (
		pass.value.length > minValue &&
		pass.value.match(numbers) &&
		pass.value.match(letters)
	) {
		p.textContent = 'Massz  dobre hasło!';
		p.style.color = 'gold';
	} else {
		p.textContent = 'Massz słabe hasło!';
		p.style.color = ' red';
	}
};

const checkPassword = () =>{
    if(pass.value !== '')
    {
        showMsg();
    }
    else
    {
        p.textContent = 'Nie podałeś hasła... ';
        p.style.color = '';
    }
}

pass.addEventListener('keyup', checkPassword);
