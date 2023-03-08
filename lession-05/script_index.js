

// alert('javascript fullstack');
// var stt = confirm('ban co chac hom nay la 8/3?');
// var txt = prompt('ban muon nhan qua gi hom nay?');

// console.log(stt);
// console.log(txt);

// document.write('troi hom nay dep qua');




// Chu cai dau tien - tuw dau tien, viet thuong. chu cai dau tien cau tu thu 2 tro di - viet hoa
var soDienThoai = 843681818811;
var diaChi = "dia chi toa nha Rikkei Academy - so 1 pham hung";
var gioiTinh = true;
var hoVaTen;
var tuoi = null;
var toaNha = diaChi;

// alert(typeof(soDienThoai));
// console.log('soDienThoai: ', typeof(soDienThoai));
// console.log('diaChi: ', typeof(diaChi));
// console.log('gioiTinh: ', typeof(gioiTinh));
// console.log('hoVaTen: ', typeof(hoVaTen));
// console.log('tenBiDanh: ', typeof(tenBiDanh));
// console.log('tuoi: ', typeof(tuoi));
// console.log('toaNha: ', typeof(toaNha));
// console.log('toaNha: ', toaNha);



// Selector / Element
// var ftSection = document.getElementById('ftSection');
// console.log(ftSection.innerText);



function tinhToan() {
	// Truy cap gia tri input
	var us = document.getElementById('username').value;
	var ps = document.getElementById('password').value;

	// Hien thi gia tri
	console.log(us);
	console.log(ps);

	// Tinh toan
	var total = parseInt(us) + parseInt(ps);
	console.log(total)
}





function cong() {
	// Truy cap gia tri input
	var us = document.getElementById('so1').value;
	var ps = document.getElementById('so2').value;

	// Hien thi gia tri
	console.log(us);
	console.log(ps);

	// Tinh toan
	var total = parseInt(us) + parseInt(ps);
	console.log(total);
}
function tru() {
	// Truy cap gia tri input
	var us = document.getElementById('so1').value;
	var ps = document.getElementById('so2').value;

	// Hien thi gia tri
	console.log(us);
	console.log(ps);

	// Tinh toan
	var total = parseInt(us) - parseInt(ps);
	console.log(total);
}
function nhan() {
	// Truy cap gia tri input
	var us = document.getElementById('so1').value;
	var ps = document.getElementById('so2').value;

	// Hien thi gia tri
	console.log(us);
	console.log(ps);

	// Tinh toan
	var total = parseInt(us) * parseInt(ps);
	console.log(total);
}
function chia() {
	// Truy cap gia tri input
	var us = document.getElementById('so1').value;
	var ps = document.getElementById('so2').value;

	// Hien thi gia tri
	console.log(us);
	console.log(ps);

	// Tinh toan
	var total = parseInt(us) / parseInt(ps);
	console.log(total);
}