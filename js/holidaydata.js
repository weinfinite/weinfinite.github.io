Date.prototype.addDays = function(days) {
			this.setDate(this.getDate() + parseInt(days));
			return this;
		};
		
Date.prototype.minusDays = function(days) {
			this.setDate(this.getDate() - parseInt(days));
			return this;
		};
		

Handlebars.registerHelper('ifIsPastDate', function (day,month,year,holiday,options) {
	var hdate = new Date(Date.parse(month+"/"+day+"/"+year));
	var value = $("input[name=festival_name]").val();
	hdate.minusDays(no_of_days);
	var now = new Date();
	now.setHours(0,0,0,0);	
	var result = 0;
	if(value){
		result = holiday.search(new RegExp(value, "i"));
		hdate = now;
	}	
	return (hdate < now || result != 0) ? options.inverse(this) : options.fn(this);
});

Handlebars.registerHelper('hMinusDays', function (day,month,year) {
	var hdate = new Date(Date.parse(month+"/"+day+"/"+year));
	return formatDate(hdate.minusDays(no_of_days));
});

Handlebars.registerHelper('hRemainder', function (day,month,year,time) {
	var hdate = new Date(Date.parse(month+"/"+day+"/"+year));
	return formatDateCalendar(hdate.minusDays(no_of_days),time);
});
		
function formatDate(date){
	var monthNames = [
			"January", "February", "March",
			"April", "May", "June", "July",
			"August", "September", "October",
			"November", "December"
		  ];
	var day = date.getDate();
	var monthIndex = date.getMonth();
	var year = date.getFullYear();
	return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

function formatDateCalendar(date,time){
	var day = date.getDate();
	var monthIndex = date.getMonth();
	var year = date.getFullYear();
	return (monthIndex+1) +"/"+day+"/"+year+" "+time;
}

function getHolidayData(){
	var holidayData = {"holidays":[{"date":"1","month":"Jan","mon":"1","year":"2019","day":"Tue","holiday":"New Year's Day","states":"AR, ML, MN, MZ, NL, PY,RJ, SK & TN"},{"date":"2","month":"Jan","mon":"1","year":"2019","day":"Wed","holiday":"New Year Holiday","states":"MZ"},{"date":"11","month":"Jan","mon":"1","year":"2019","day":"Fri","holiday":"Missionary Day","states":"MZ"},{"date":"12","month":"Jan","mon":"1","year":"2019","day":"Sat","holiday":"Swami Vivekananda Jayanti","states":"WB"},{"date":"13","month":"Jan","mon":"1","year":"2019","day":"Sun","holiday":"Guru Gobind Singh Jayanti","states":"HR & RJ"},{"date":"14","month":"Jan","mon":"1","year":"2019","day":"Mon","holiday":"Pongal","states":"AP, AR, PY & TN"},{"date":"14","month":"Jan","mon":"1","year":"2019","day":"Mon","holiday":"Makara Sankranti","states":"GJ, KA, SK & TG"},{"date":"15","month":"Jan","mon":"1","year":"2019","day":"Tue","holiday":"Magh Bihu","states":"AS"},{"date":"15","month":"Jan","mon":"1","year":"2019","day":"Tue","holiday":"Thiruvalluvar Day","states":"TN"},{"date":"15","month":"Jan","mon":"1","year":"2019","day":"Tue","holiday":"Kanuma Panduga","states":"AP"},{"date":"16","month":"Jan","mon":"1","year":"2019","day":"Wed","holiday":"Uzhavar Thirunal","states":"PY"},{"date":"23","month":"Jan","mon":"1","year":"2019","day":"Wed","holiday":"Netaji Subhas Chandra Bose Jayanti","states":"OR, TR & WB"},{"date":"25","month":"Jan","mon":"1","year":"2019","day":"Fri","holiday":"State Day","states":"HP"},{"date":"26","month":"Jan","mon":"1","year":"2019","day":"Sat","holiday":"Republic Day","states":"National"},{"date":"31","month":"Jan","mon":"1","year":"2019","day":"Thu","holiday":"Me-Dum-Me-Phi","states":"AS"},{"date":"5","month":"Feb","mon":"2","year":"2019","day":"Tue","holiday":"Sonam Losar","states":"SK"},{"date":"10","month":"Feb","mon":"2","year":"2019","day":"Sun","holiday":"Vasant Panchami","states":"HR, OR, PB, TR & WB"},{"date":"15","month":"Feb","mon":"2","year":"2019","day":"Fri","holiday":"Lui-Ngai-Ni","states":"MN"},{"date":"19","month":"Feb","mon":"2","year":"2019","day":"Tue","holiday":"Guru Ravidas Jayanti","states":"CH, HP, HR & PB"},{"date":"19","month":"Feb","mon":"2","year":"2019","day":"Tue","holiday":"Chhatrapati Shivaji Maharaj Jayanti","states":"MH"},{"date":"20","month":"Feb","mon":"2","year":"2019","day":"Wed","holiday":"State Day","states":"AR & MZ"},{"date":"4","month":"Mar","mon":"3","year":"2019","day":"Mon","holiday":"Maha Shivaratri","states":"National except AN, AR, AS, BR,DN, GA, LD, MP, MN, ML,MZ, NL, PY, SK, TN &WB"},{"date":"5","month":"Mar","mon":"3","year":"2019","day":"Tue","holiday":"Panchayatiraj Divas","states":"OR"},{"date":"7","month":"Mar","mon":"3","year":"2019","day":"Thu","holiday":"Losar","states":"SK"},{"date":"20","month":"Mar","mon":"3","year":"2019","day":"Wed","holiday":"Holi","states":"AP, AS, JK, UK, UP &WB"},{"date":"20","month":"Mar","mon":"3","year":"2019","day":"Wed","holiday":"Hazrat Ali Jayanti","states":"UP"},{"date":"21","month":"Mar","mon":"3","year":"2019","day":"Thu","holiday":"Holi","states":"National except AP, AS, JK, KA,KL, LD, MN, PY, TN, UP,UK & WB"},{"date":"21","month":"Mar","mon":"3","year":"2019","day":"Thu","holiday":"Yaosang 2nd Day","states":"MN"},{"date":"22","month":"Mar","mon":"3","year":"2019","day":"Fri","holiday":"Bihar Day","states":"BR"},{"date":"23","month":"Mar","mon":"3","year":"2019","day":"Sat","holiday":"S. Bhagat Singh's Martyrdom Day","states":"HR & PB"},{"date":"1","month":"Apr","mon":"4","year":"2019","day":"Mon","holiday":"Odisha Day","states":"OR"},{"date":"5","month":"Apr","mon":"4","year":"2019","day":"Fri","holiday":"Babu Jagjivan Ram Jayanti","states":"AP & TG"},{"date":"6","month":"Apr","mon":"4","year":"2019","day":"Sat","holiday":"Sajibu Nongmapanba (Cheiraoba)","states":"MN"},{"date":"6","month":"Apr","mon":"4","year":"2019","day":"Sat","holiday":"Ugadi","states":"AP, GA, GJ, JK, KA, RJ& TG"},{"date":"6","month":"Apr","mon":"4","year":"2019","day":"Sat","holiday":"Telugu New Year","states":"TN"},{"date":"6","month":"Apr","mon":"4","year":"2019","day":"Sat","holiday":"Gudi Padwa","states":"MH"},{"date":"7","month":"Apr","mon":"4","year":"2019","day":"Sun","holiday":"Sarhul","states":"JH"},{"date":"13","month":"Apr","mon":"4","year":"2019","day":"Sat","holiday":"Bohag Bihu Holiday","states":"AS"},{"date":"14","month":"Apr","mon":"4","year":"2019","day":"Sun","holiday":"Ram Navami","states":"National except AR, AS, DN, GA,JK, JH, KA, KL, LD, MN,ML, MZ, NL, PY, TN, TR& WB"},{"date":"14","month":"Apr","mon":"4","year":"2019","day":"Sun","holiday":"Dr Ambedkar Jayanti","states":"National except AN, AR, AS, CH,DN, DD, DL, LD, MN, ML,MZ, NL, PY & TR"},{"date":"14","month":"Apr","mon":"4","year":"2019","day":"Sun","holiday":"Cheiraoba","states":"MN"},{"date":"14","month":"Apr","mon":"4","year":"2019","day":"Sun","holiday":"Vaisakh","states":"HR, JK & PB"},{"date":"14","month":"Apr","mon":"4","year":"2019","day":"Sun","holiday":"Tamil New Year","states":"TN"},{"date":"14","month":"Apr","mon":"4","year":"2019","day":"Sun","holiday":"Bohag Bihu","states":"AS"},{"date":"14","month":"Apr","mon":"4","year":"2019","day":"Sun","holiday":"Maha Vishuba Sankranti","states":"OR"},{"date":"14","month":"Apr","mon":"4","year":"2019","day":"Sun","holiday":"Bengali New Year","states":"TR & WB"},{"date":"15","month":"Apr","mon":"4","year":"2019","day":"Mon","holiday":"Himachal Day","states":"HP"},{"date":"15","month":"Apr","mon":"4","year":"2019","day":"Mon","holiday":"Vishu","states":"KL"},{"date":"15","month":"Apr","mon":"4","year":"2019","day":"Mon","holiday":"Bohag Bihu","states":"AR"},{"date":"17","month":"Apr","mon":"4","year":"2019","day":"Wed","holiday":"Mahavir Jayanti","states":"CG, DL, DN, GJ, HR, KA,LD, MH, MP, PB, RJ, TN& UP"},{"date":"19","month":"Apr","mon":"4","year":"2019","day":"Fri","holiday":"Good Friday","states":"National except HR & JK"},{"date":"20","month":"Apr","mon":"4","year":"2019","day":"Sat","holiday":"Easter Saturday","states":"NL"},{"date":"21","month":"Apr","mon":"4","year":"2019","day":"Sun","holiday":"Easter Sunday","states":"KL & NL"},{"date":"21","month":"Apr","mon":"4","year":"2019","day":"Sun","holiday":"Garia Puja","states":"TR"},{"date":"1","month":"May","mon":"5","year":"2019","day":"Wed","holiday":"May Day","states":"AS, BR, GA, KA, KL, MN,PB, PY, TG, TN, TR &WB"},{"date":"1","month":"May","mon":"5","year":"2019","day":"Wed","holiday":"Maharashtra Day","states":"MH"},{"date":"7","month":"May","mon":"5","year":"2019","day":"Tue","holiday":"Maharshi Parasuram Jayanti","states":"GJ, HP, HR, MP & RJ"},{"date":"8","month":"May","mon":"5","year":"2019","day":"Wed","holiday":"Basava Jayanti","states":"KA"},{"date":"9","month":"May","mon":"5","year":"2019","day":"Thu","holiday":"Guru Rabindranath Jayanti","states":"TR & WB"},{"date":"16","month":"May","mon":"5","year":"2019","day":"Thu","holiday":"State Day","states":"SK"},{"date":"18","month":"May","mon":"5","year":"2019","day":"Sat","holiday":"Buddha Purnima","states":"AN, AR, CG, DL, HP, HR,JH, JK, MH, MP, MZ, TR,UK, UP & WB"},{"date":"24","month":"May","mon":"5","year":"2019","day":"Fri","holiday":"Kazi Nazrul Islam Jayanti","states":"TR"},{"date":"31","month":"May","mon":"5","year":"2019","day":"Fri","holiday":"Jumat-ul-Wida","states":"JK"},{"date":"1","month":"Jun","mon":"6","year":"2019","day":"Sat","holiday":"Shab-i-Qadr","states":"JK"},{"date":"5","month":"Jun","mon":"6","year":"2019","day":"Wed","holiday":"Idul Fitr","states":"National"},{"date":"6","month":"Jun","mon":"6","year":"2019","day":"Thu","holiday":"Maharana Pratap Jayanti","states":"HP, HR & RJ"},{"date":"6","month":"Jun","mon":"6","year":"2019","day":"Thu","holiday":"Idul Fitr Holiday","states":"TG"},{"date":"14","month":"Jun","mon":"6","year":"2019","day":"Fri","holiday":"Pahili Raja","states":"OR"},{"date":"14","month":"Jun","mon":"6","year":"2019","day":"Fri","holiday":"Sri Guru Arjun Dev Ji's Martyrdom Day","states":"PB"},{"date":"15","month":"Jun","mon":"6","year":"2019","day":"Sat","holiday":"YMA Day","states":"MZ"},{"date":"15","month":"Jun","mon":"6","year":"2019","day":"Sat","holiday":"Raja Sankranti","states":"OR"},{"date":"17","month":"Jun","mon":"6","year":"2019","day":"Mon","holiday":"Sant Guru Kabir Jayanti","states":"CG, HP, HR & PB"},{"date":"30","month":"Jun","mon":"6","year":"2019","day":"Sun","holiday":"Remna Ni","states":"MZ"},{"date":"4","month":"Jul","mon":"7","year":"2019","day":"Thu","holiday":"Ratha Yathra","states":"OR"},{"date":"5","month":"Jul","mon":"7","year":"2019","day":"Fri","holiday":"Guru Hargobind Ji's Birthday","states":"JK"},{"date":"6","month":"Jul","mon":"7","year":"2019","day":"Sat","holiday":"MHIP Day","states":"MZ"},{"date":"9","month":"Jul","mon":"7","year":"2019","day":"Tue","holiday":"Kharchi Puja","states":"TR"},{"date":"13","month":"Jul","mon":"7","year":"2019","day":"Sat","holiday":"Martyrs' Day","states":"JK"},{"date":"13","month":"Jul","mon":"7","year":"2019","day":"Sat","holiday":"Bhanu Jayanti","states":"SK"},{"date":"17","month":"Jul","mon":"7","year":"2019","day":"Wed","holiday":"U Tirot Sing Day","states":"ML"},{"date":"21","month":"Jul","mon":"7","year":"2019","day":"Sun","holiday":"Bonalu","states":"TG"},{"date":"23","month":"Jul","mon":"7","year":"2019","day":"Tue","holiday":"Ker Puja","states":"TR"},{"date":"31","month":"Jul","mon":"7","year":"2019","day":"Wed","holiday":"Shaheed Udham Singh's Martyrdom Day","states":"PB"},{"date":"3","month":"Aug","mon":"8","year":"2019","day":"Sat","holiday":"Haryali Teej","states":"HR"},{"date":"8","month":"Aug","mon":"8","year":"2019","day":"Thu","holiday":"Tendong Lho Rum Faat","states":"SK"},{"date":"12","month":"Aug","mon":"8","year":"2019","day":"Mon","holiday":"Bakrid / Eid al Adha","states":"National except AR, DD & SK"},{"date":"13","month":"Aug","mon":"8","year":"2019","day":"Tue","holiday":"Patriots Day","states":"MN"},{"date":"13","month":"Aug","mon":"8","year":"2019","day":"Tue","holiday":"Bakrid / Eid al Adha Holiday","states":"JK"},{"date":"15","month":"Aug","mon":"8","year":"2019","day":"Thu","holiday":"Independence Day","states":"National"},{"date":"15","month":"Aug","mon":"8","year":"2019","day":"Thu","holiday":"Jhulan Purnima","states":"OR"},{"date":"15","month":"Aug","mon":"8","year":"2019","day":"Thu","holiday":"Raksha Bandhan","states":"CG, DD, GJ, MP, RJ, UK& UP"},{"date":"16","month":"Aug","mon":"8","year":"2019","day":"Fri","holiday":"De Jure Transfer Day","states":"PY"},{"date":"17","month":"Aug","mon":"8","year":"2019","day":"Sat","holiday":"Parsi New Year","states":"GJ & MH"},{"date":"24","month":"Aug","mon":"8","year":"2019","day":"Sat","holiday":"Janmashtami","states":"National except AR, AS, CH, DN,GA, KA, KL, LD, MH, ML,MZ, PY & WB"},{"date":"29","month":"Aug","mon":"8","year":"2019","day":"Thu","holiday":"Ghatasthapana","states":"RJ"},{"date":"29","month":"Aug","mon":"8","year":"2019","day":"Thu","holiday":"Maharaja Agrasen Jayanti","states":"HR & PB"},{"date":"31","month":"Aug","mon":"8","year":"2019","day":"Sat","holiday":"Parkash Utsav Sri Guru Granth Sahib Ji","states":"PB"},{"date":"2","month":"Sep","mon":"9","year":"2019","day":"Mon","holiday":"Ganesh / Vinayagar Chaturthi","states":"AP, DD, DN, GA, GJ, KA,MH, OR, PY, TG & TN"},{"date":"3","month":"Sep","mon":"9","year":"2019","day":"Tue","holiday":"Nuakhai","states":"OR"},{"date":"3","month":"Sep","mon":"9","year":"2019","day":"Tue","holiday":"Ganesh Chaturthi Holiday","states":"GA"},{"date":"7","month":"Sep","mon":"9","year":"2019","day":"Sat","holiday":"Baba Sri Chand Ji Jayanti","states":"PB"},{"date":"8","month":"Sep","mon":"9","year":"2019","day":"Sun","holiday":"Ramdev Jayanti","states":"RJ"},{"date":"8","month":"Sep","mon":"9","year":"2019","day":"Sun","holiday":"Teja Dashmi","states":"RJ"},{"date":"10","month":"Sep","mon":"9","year":"2019","day":"Tue","holiday":"First Onam","states":"KL"},{"date":"10","month":"Sep","mon":"9","year":"2019","day":"Tue","holiday":"Muharram","states":"National except AR, AS, DD, GA,KL, MN, ML, MZ, NL, PY,PB, SK, TR, UK & WB"},{"date":"11","month":"Sep","mon":"9","year":"2019","day":"Wed","holiday":"Thiruvonam / onam","states":"KL"},{"date":"12","month":"Sep","mon":"9","year":"2019","day":"Thu","holiday":"Indra Jatra","states":"SK"},{"date":"13","month":"Sep","mon":"9","year":"2019","day":"Fri","holiday":"Sree Narayana Guru Jayanti","states":"KL"},{"date":"21","month":"Sep","mon":"9","year":"2019","day":"Sat","holiday":"Sree Narayana Guru Samadhi","states":"KL"},{"date":"23","month":"Sep","mon":"9","year":"2019","day":"Mon","holiday":"Heroes' Martyrdom Day","states":"HR"},{"date":"28","month":"Sep","mon":"9","year":"2019","day":"Sat","holiday":"S. Bhagat Singh Ji Jayanti","states":"PB"},{"date":"28","month":"Sep","mon":"9","year":"2019","day":"Sat","holiday":"Mahalaya Amavasye","states":"KA, OR, TR & WB"},{"date":"28","month":"Sep","mon":"9","year":"2019","day":"Sat","holiday":"First Day of Bathukamma","states":"TG"},{"date":"2","month":"Oct","mon":"10","year":"2019","day":"Wed","holiday":"Gandhi Jayanti","states":"National"},{"date":"5","month":"Oct","mon":"10","year":"2019","day":"Sat","holiday":"Maha Saptami","states":"OR, SK, TR & WB"},{"date":"6","month":"Oct","mon":"10","year":"2019","day":"Sun","holiday":"Maha Ashtami","states":"AP, JH, MN, OR, RJ, SK,TG, TR & WB"},{"date":"7","month":"Oct","mon":"10","year":"2019","day":"Mon","holiday":"Maha Navami","states":"AR, AS, BR, JH, KA, KL,ML, NL, OR, PY, SK, TN,TR, UP & WB"},{"date":"8","month":"Oct","mon":"10","year":"2019","day":"Tue","holiday":"Vijaya Dashami / Saraswati pooja","states":"National except MN & PY"},{"date":"13","month":"Oct","mon":"10","year":"2019","day":"Sun","holiday":"Lakshmi Puja","states":"OR, TR & WB"},{"date":"13","month":"Oct","mon":"10","year":"2019","day":"Sun","holiday":"Maharishi Valmiki Jayanti","states":"CH, DL, HP, HR, KA, MP& PB"},{"date":"15","month":"Oct","mon":"10","year":"2019","day":"Tue","holiday":"Parkash Gurpurab of Sri Guru Ram Dass Ji","states":"PB"},{"date":"19","month":"Oct","mon":"10","year":"2019","day":"Sat","holiday":"Lhabab Duchen","states":"SK"},{"date":"26","month":"Oct","mon":"10","year":"2019","day":"Sat","holiday":"Deepavali","states":"AP, GA, KA, KL, PY, TG& TN"},{"date":"27","month":"Oct","mon":"10","year":"2019","day":"Sun","holiday":"Diwali","states":"National except AP, GA, KA, KL,PY, TN & TG"},{"date":"28","month":"Oct","mon":"10","year":"2019","day":"Mon","holiday":"Deepavali Holiday","states":"DD, HR, KA, MH, PB, RJ,UK & UP"},{"date":"29","month":"Oct","mon":"10","year":"2019","day":"Tue","holiday":"Vikram Samvat New Year","states":"GJ"},{"date":"29","month":"Oct","mon":"10","year":"2019","day":"Tue","holiday":"Bhai Dooj","states":"GJ, RJ, SK, UK & UP"},{"date":"31","month":"Oct","mon":"10","year":"2019","day":"Thu","holiday":"Sardar Vallabhbhai Patel Jayanti","states":"GJ"},{"date":"1","month":"Nov","mon":"11","year":"2019","day":"Fri","holiday":"Kut","states":"MN"},{"date":"1","month":"Nov","mon":"11","year":"2019","day":"Fri","holiday":"Puducherry Liberation Day","states":"PY"},{"date":"1","month":"Nov","mon":"11","year":"2019","day":"Fri","holiday":"Haryana Day","states":"HR"},{"date":"1","month":"Nov","mon":"11","year":"2019","day":"Fri","holiday":"Kannada Rajyothsava","states":"KA"},{"date":"2","month":"Nov","mon":"11","year":"2019","day":"Sat","holiday":"Chhath Puja","states":"BR & JH"},{"date":"3","month":"Nov","mon":"11","year":"2019","day":"Sun","holiday":"Chhath Puja Holiday","states":"BR"},{"date":"8","month":"Nov","mon":"11","year":"2019","day":"Fri","holiday":"Wangala Festival","states":"ML"},{"date":"10","month":"Nov","mon":"11","year":"2019","day":"Sun","holiday":"Eid e Milad","states":"National except AN, AR, AS, BR,GA, HP, MN, ML, MZ, PB,SK & WB"},{"date":"12","month":"Nov","mon":"11","year":"2019","day":"Tue","holiday":"Karthika Purnima","states":"OR & TG"},{"date":"12","month":"Nov","mon":"11","year":"2019","day":"Tue","holiday":"Guru Nanak Jayanti","states":"National except AP, BR, DD, GA,KA, KL, MN, ML, MZ, OR,PY, SK, TN & TR"},{"date":"15","month":"Nov","mon":"11","year":"2019","day":"Fri","holiday":"Friday Following Eid e Milad","states":"JK"},{"date":"15","month":"Nov","mon":"11","year":"2019","day":"Fri","holiday":"Kanakadasa Jayanti","states":"KA"},{"date":"16","month":"Nov","mon":"11","year":"2019","day":"Sat","holiday":"Shahidi Diwas S. Kartar Singh Sarabha Ji","states":"PB"},{"date":"23","month":"Nov","mon":"11","year":"2019","day":"Sat","holiday":"Seng Kut Snem","states":"ML"},{"date":"24","month":"Nov","mon":"11","year":"2019","day":"Sun","holiday":"Sri Guru Teg Bahadur Ji's Martyrdom Day","states":"PB"},{"date":"1","month":"Dec","mon":"12","year":"2019","day":"Sun","holiday":"Indigenous Faith Day","states":"AR"},{"date":"3","month":"Dec","mon":"12","year":"2019","day":"Tue","holiday":"Feast of St Francis Xavier","states":"GA"},{"date":"5","month":"Dec","mon":"12","year":"2019","day":"Thu","holiday":"Sheikh Muhammad Abdullah Jayanti","states":"JK"},{"date":"12","month":"Dec","mon":"12","year":"2019","day":"Thu","holiday":"Pa Togan Nengminza Sangma","states":"ML"},{"date":"18","month":"Dec","mon":"12","year":"2019","day":"Wed","holiday":"Death Anniversary of U SoSo Tham","states":"ML"},{"date":"18","month":"Dec","mon":"12","year":"2019","day":"Wed","holiday":"Guru Ghasidas Jayanti","states":"CG"},{"date":"19","month":"Dec","mon":"12","year":"2019","day":"Thu","holiday":"Liberation Day","states":"DD & GA"},{"date":"25","month":"Dec","mon":"12","year":"2019","day":"Wed","holiday":"Christmas Day","states":"National"},{"date":"26","month":"Dec","mon":"12","year":"2019","day":"Thu","holiday":"Shaheed Udham Singh Jayanti","states":"HR"},{"date":"30","month":"Dec","mon":"12","year":"2019","day":"Mon","holiday":"U Kiang Nangbah","states":"ML"},{"date":"30","month":"Dec","mon":"12","year":"2019","day":"Mon","holiday":"Tamu Losar","states":"SK"},{"date":"31","month":"Dec","mon":"12","year":"2019","day":"Tue","holiday":"New Year's Eve","states":"MN"}]};
	return holidayData;
}
