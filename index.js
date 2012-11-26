module.exports = function(lvl) {    
    var stack = require('traceback')(),
        files = [],
        count = 1,
        file = false;
        
    lvl = lvl || 1;
    
    ++lvl;
        
    for(var i = 1; i < stack.length; i++) {     
        if (! stack[i].is_native && -1 !== stack[i].path.indexOf('\\')) {
            if (-1 === files.indexOf(stack[i].path)) {
                if (lvl == count) {
                    file = stack[i].path;
                    break;
                }  
                
                files.push(stack[i].path);

                ++count;                                
            }
        }
    }   
            
    return file;
}

module.exports.dirname = function(lvl) {
    var path = require('path'),
        file;
    
    lvl = lvl || 1;
    
    ++lvl;
    
    file = module.exports(lvl);
    
    return file ? path.dirname(file) : false;
}

