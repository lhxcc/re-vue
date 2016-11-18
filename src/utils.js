/*******************************************************
 * 数组相关
 */
export function forEach (arr=[], cb) {
    [].forEach.call(arr, cb);
}

export function map (arr=[], cb) {
    return [].map.call(arr, cb);
}

/*******************************************************
 * 对象相关
 */

/**
 * 对象继承
 */
export function extend (child, parent) {
    parent = parent || {};
    child = child || {};

    for(var key in parent) {
        if (parent.hasOwnProperty(key)) {
            child[key] = parent[key];
        }
    }

    return child;
}

/**
 * 对象遍历
 */
export function objectEach (obj={}, cb=()=>{}) {
    Object.keys(obj).forEach(function (key) {
        cb(key, obj[key]);
    });
}

export function objectMap (obj={}, cb=()=>{}) {
    return Object.keys(obj).map(function (key) {
        cb(key, obj[key]);
    });
}

/**
 * Object extend
 */
Object.prototype.$get = function (path='') {
    path = path.split('.');
    if (path.length == 1) {
        return this[path[0]];
    } else {
        this[path[0]] = this[path[0]] || {};
        return this[path[0]].$get(path.slice(1).join('.'));
    }
};

Object.prototype.$set = function (path='', value) {
    path = path.split('.');
    if (path.length == 1) {
        this[path[0]] = value;
    } else {
        this[path[0]] = this[path[0]] || {};
        this[path[0]].$set(path.slice(1).join('.'), value);
    }
};