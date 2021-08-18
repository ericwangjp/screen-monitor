function getCurTime() {
    const date = new Date();
    const y = date.getFullYear();
    const m = (date.getMonth() + 1 + '').padStart(2, '0')
    const d = (date.getDate() + '').padStart(2, '0')
    const hh = (date.getHours() + '').padStart(2, '0')
    const mm = (date.getMinutes() + '').padStart(2, '0')
    const ss = (date.getSeconds() + '').padStart(2, '0')
    return `${y}年${m}月${d}日${hh}时${mm}分${ss}秒`;
}