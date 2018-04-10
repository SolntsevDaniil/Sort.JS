'use strict';
/* --------- Bubble Sort ---------- */

Array.prototype.BubbleSort = function() {
	let len = this.length;

	for (let i = 0; i < len-1; i++) {
		for (let j = 0; j < len-1-i; j++) {
			if (this[j+1] < this[j]) {
				let t = this[j+1];
				this[j+1] = this[j];
				this[j] = t;
			};
		};
	};
	return this;
};

/* ---------- Selection Sort ---------- */

Array.prototype.SelectionSort = function() {
	let len = this.length;

	for (let i = 0; i < len-1; i++) {
		let min = i;

		for (let j = i+1; j < len; j++) {
			if (this[j] < this[min]) {
				min = j;
			};
		};

	let t = this[min];
	this[min] = this[i];
	this[i] = t;
	};
	return this;
};

/* --------- Insertion Sort ---------- */

Array.prototype.InsertionSort = function() {
	let len = this.length;

	for (let i = 0; i < len; i++) {
		let v = this[i],
			j = i - 1;
		
		while (j >= 0 && this[j] > v) {
			this[j+1] = this[j];
			j--;
		};
		this[j+1] = v;
	};
	return this;
};

/* ---------- Shaker Sort ---------- */

Array.prototype.ShakerSort = function() {
	let i = 0,
		j = this.length - 1,
		s = true,
		t;

	while (i < j && s) {
		s = false;
		for (let k = i; k < j; k++) {
			if (this[k] > this[k+1]) {
				t = this[k];
				this[k] = this[k+1];
				this[k+1] = t;
				s = true;
			};
		};
		j--;
		if (s) {
			s = false;
			for (let k = j; k > i; k--) {
				if (this[k] < thid[k-1]) {
					t = this[k];
					this[k] = this[k-1];
					this[k-1] = t;
					s = true;
				};
			};
		};
		i++;
	};
	return this;
};