import { format } from 'date-fns';

export default function timeFormatter(time: string | Date, formatString = "yyyy-MM-dd"): string {
    if (!time) return '';

    const date = new Date(time);

    if (isNaN((date).getTime())) {
        return '';
    }

    return format(date, formatString);
}


/**
 * 计算给定时间距离现在多久（过去时间）
 * @param targetTime 目标时间（Date对象或时间字符串）
 * @returns 格式化的相对时间字符串
 */
export function getTimeDistance(targetTime: Date | string) : string {
    const now = new Date();
    const target = new Date(targetTime);

    // 计算时间差（毫秒）
    const diffMs = Math.abs(now.getTime() - target.getTime());

    // 转换为各种时间单位
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    // 根据时间长度返回相应格式
    if (diffYears > 0) {
        const remainingMonths = Math.floor((diffDays % 365) / 30);
        const remainingDays = diffDays % 30;

        let result = `${diffYears}年`;
        if (remainingMonths > 0) {
            result += `${remainingMonths}个月`;
        }
        if (remainingDays > 0 && remainingMonths === 0) {
            result += `${remainingDays}天`;
        }
        return result;
    }

    if (diffMonths > 0) {
        const remainingDays = diffDays % 30;
        let result = `${diffMonths}个月`;
        if (remainingDays > 0) {
            result += `${remainingDays}天`;
        }
        return result;
    }

    if (diffDays > 0) {
        return `${diffDays}天`;
    }

    if (diffHours > 0) {
        return `${diffHours}小时`;
    }

    if (diffMinutes > 0) {
        return `${diffMinutes}分钟`;
    }

    return '刚刚';
}
