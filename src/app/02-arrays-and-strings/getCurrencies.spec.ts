import {getCurrencies} from './getCurrencies';

describe('s00190029 Robert Donoghue getCurrencies', () => { // make sure name and S# are here
	it('should contain USD,GBP,EUR', () =>{
	  let name = getCurrencies(); 
	   expect(name).toContain('GBP');
	   expect(name).toContain('USD');
	   expect(name).toContain('EUR');
	});
});
