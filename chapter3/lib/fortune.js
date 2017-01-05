/**
 * Created by Administrator on 2017/1/5.
 */

var fortuneCookies = [
    '今天是充满惊喜的一天',
    '今天会下雨',
    '今天是晴朗的一天',
    '今天会下雪',
    '今天是假期'
];

exports.getFortune = function () {
    var index = Math.floor(Math.random()*fortuneCookies.length);
    return fortuneCookies[index];
};