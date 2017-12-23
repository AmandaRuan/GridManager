/**
 * Created by baukh on 17/3/12.
 */
'use strict';
import Checkbox from '../src/js/Checkbox';
/**
 * 验证类的属性及方法总量
 */
describe('Checkbox 验证类的属性及方法总量', function() {
	var getPropertyCount = null;
	beforeEach(function() {
		getPropertyCount = function(o){
			var n, count = 0;
			for(n in o){
				if(o.hasOwnProperty(n)){
					count++;
				}
			}
			return count;
		}
	});
	afterEach(function(){
		getPropertyCount = null;
	});
	it('Function count', function() {
		// es6 中 constructor 也会算做为对象的属性, 所以总量上会增加1
		expect(getPropertyCount(Object.getOwnPropertyNames(Object.getPrototypeOf(Checkbox)))).toBe(3 + 1);
	});
});

describe('Checkbox.key', function() {
	it('基础验证', function() {
		expect(Checkbox.key).toBeDefined();
		expect(Checkbox.key).toBe('gm_checkbox');
	});
});

describe('Checkbox.getThString($table, thVisible)', function() {
	it('基础验证', function () {
		expect(Checkbox.getThString).toBeDefined();
		expect(Checkbox.getThString.length).toBe(2);
	});
});

describe('Checkbox.getColumn(settings)', function() {
	it('基础验证', function () {
		expect(Checkbox.getColumn).toBeDefined();
		expect(Checkbox.getColumn.length).toBe(1);
	});
});

describe('Checkbox.bindCheckboxEvent($table)', function() {
	it('基础验证', function () {
		expect(Checkbox.bindCheckboxEvent).toBeDefined();
		expect(Checkbox.bindCheckboxEvent.length).toBe(1);
	});
});
