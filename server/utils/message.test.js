var expect = require('expect');
var {generateMessage} = require('./message');

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