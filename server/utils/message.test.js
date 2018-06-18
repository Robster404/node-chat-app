var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		var from = 'Rob';
		var text = 'Test Message';
		var res = generateMessage(from, text);
		
		expect(res.from).toEqual(from);
		expect(res.text).toEqual(text);		
		expect(typeof res.createdAt).toBe('number');
	});
});

describe('generatLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Rob';
		var latitude = '2';
		var longitude = '4';
		var res = generateLocationMessage(from, latitude, longitude);
		
		expect(res).toInclude({
			from,
			url: `https://www.google.com/maps?q=${latitude},${longitude}`
		});
		expect(typeof res.createdAt).toBe('number');		
	});
});