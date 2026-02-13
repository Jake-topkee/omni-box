/**
 * 清理對象中的無效屬性 (Null, Undefined, 空字符串)
 * 常用於 API 請求前過濾掉無用的欄位，避免後端接收到冗餘數據
 * * @param {Object} obj - 需要清理的對象
 * @returns {Object} - 返回清理後的對象 (會直接修改原對象)
 */
function cleanNonSense(obj) {
  for (let key in obj) {
    if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
      delete obj[key];
    }
  }
  return obj;
}


/**
 * 基礎批量異步請求模板
 * @param {number} loop - 循環次數
 * @param {Function} callback - 每輪執行的異步操作 (傳入當前 index)
 * @returns {Promise<Array>} - 所有請求結果的集合
 */
async function simpleBatchFetch(loop, callback) {
  const results = [];
  for (let i = 0; i < loop; i++) {
    const data = await callback(i);
    if (data) results.push(data);
  }
  return results;
}