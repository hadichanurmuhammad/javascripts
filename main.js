var name = prompt("Ismingiz?")
var age = prompt("Yoshingiz?")
var term = prompt("Qancha muddat turmohchisiz?")
var money = prompt("Qancha pulingiz bor?")
term = parseInt(term)
money = parseInt(money)
age = parseInt(age)
if (age <= 18) {
	console.log(`Assalomu alekum ${name} bu mexmonhonaga faqat 18 yoshdan kottala kirolidi`)
}

if (money / term < 10) {
	console.log(`Assalomu alekum ${name} uzur sizning pulingiz yetmas ekan`)
} else{
	console.log(`Assalomu alekum ${name} tabriklaymiz siz qabul qilindingiz`)
}