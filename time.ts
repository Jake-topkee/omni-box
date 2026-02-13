/**
 * 將 YYYY-MM-DD HH:mm:ss 格式轉換為秒級時間戳
 * @param {string} dateString - 時間字符串
 * @returns {number|null} - 返回秒級時間戳，若格式錯誤則返回 null
 */
function convertToUnixTimestamp(dateString) {
    var date = new Date(dateString.replace(/-/g, '/'));
    if (isNaN(date.getTime())) {
        console.error("無效的時間格式:", dateString);
        return null;
    }
    return Math.floor(date.getTime() / 1000);
}
/**
 * 將秒級時間戳轉換為 YYYY-MM-DD HH:mm:ss 格式
 * @param {number} timestamp - 秒級時間戳 (10位數字)
 * @returns {string|null} - 返回格式化後的字符串，若輸入無效則返回 null
 */
function formatTimestamp(timestamp) {
    if (!timestamp || isNaN(timestamp)) return null;
    var date = new Date(timestamp * 1000);
    var pad = function(num) {
        return num < 10 ? '0' + num : num;
    };
    var year = date.getFullYear();
    var month = pad(date.getMonth() + 1); // 月份從 0 開始，需要 +1
    var day = pad(date.getDate());
    var hours = pad(date.getHours());
    var minutes = pad(date.getMinutes());
    var seconds = pad(date.getSeconds());
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}