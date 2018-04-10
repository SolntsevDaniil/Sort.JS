(function(){


/* --------- Bubble Sort ---------- */

function BubbleSort(array) {
	let len = array.length;

	for (let i = 0; i < len-1; i++) {

		for (let j = 0; j < len-1-i; j++) {

			if (array[j+1] < array[j]) {
				let t = array[j+1]; 
				array[j+1] = array[j];
				array[j] = t;
			};

		};
	};
	return array;
};


/* ---------- Selection Sort ---------- */

function SelectionSort(array) {
	let len = array.length;

	for (let i = 0; i < len-1; i++) {
		let min = i;

		for (let j = i+1; j < len; j++) {
			if (array[j] < array[min]){ min = j; };
		};

	let t = array[min];
	array[min] = array[i];
	array[i] = t;

	};
	return array;
};


/* --------- Insertion Sort ---------- */

function InsertionSort(array) {
	let len = array.length;

	for (let i = 0; i < len; i++) {
		let v = array[i], j = i-1;
		while (j >= 0 && array[j] > v) {
			array[j+1] = array[j];
			j--;
		};
		array[j+1] = v;
	};
	return array;
};


/* ---------- Shaker Sort ---------- */

function ShakerSort(array) {
	let i = 0, 
		j = array.length-1, 
		s = true, 
		t;

	while (i < j && s) {
		s = false;
		for (let k = i; k < j; k++) {
			if (array[k] > array[k+1]) {
				t = array[k];
				array[k] = array[k+1];
				array[k+1] = t;
				s = true;
			};
		};
		j--;
		if (s) {
			s = false;
			for (var k = j; k > i; k--) {
				if (array[k] < array[k-1]) {
					t = array[k];
					array[k] = array[k-1];
					array[k-1] = t;
					s = true;
				};
			};
		};
		i++;
	};
	return array;
};


})();