/**
 * Extract the keys of the object as an array
 * @param  {Object} object
 * @return {Array.<String>}
 */
PolymerExpressions.prototype.getKeys = function(object) {
    return Object.keys(object || {});
};