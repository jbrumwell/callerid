var assert = require('assert'),
    fixture = require('./fixtures/index');
    
    
describe('Callerid', function() {
    it('should return the last file to call the module', function() {
        var file = fixture();
        
        assert.equal(file, __filename);
    })
    
    it('should return the last file to call the module as a directory', function() {
        var file = fixture.dirname();
        
        assert.equal(file, __dirname);
    })
    
    it('should work on require as well as when called via a function', function() {
        assert.equal(__filename, fixture.results.file);
        assert.equal(__dirname, fixture.results.dir);
    })    
    
    it('should go back based on lvl inputed', function() {
        var file = fixture(2),
            dir  = fixture.dirname(2);
        
        assert((file.indexOf('runnable.js') + 'runnable.js'.length) == file.length);        
        assert((dir.indexOf('mocha\\lib') + 'mocha\\lib'.length) == dir.length);
    })
    
    it('should return false if level is too high for callstack', function() {
        var file = fixture(200),
            dir  = fixture.dirname(200);
        
        assert.equal(file, false);
        assert.equal(dir, false);
    })
})