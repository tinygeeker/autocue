const prompts = [
    {
        name: '时令气候',
        visible: true,
        range: 'all',
        items: [
            { en: 'day', zh: '白天' },
            { en: 'dusk', zh: '黄昏' },
            { en: 'night', zh: '夜晚' },
            { en: 'in spring', zh: '春天' },
            { en: 'in summer', zh: '夏天' },
            { en: 'in autumn', zh: '秋天' },
            { en: 'in winter', zh: '冬天' },
            { en: 'beautiful detailed sky', zh: '好天' },
            { en: 'sun', zh: '太阳' },
            { en: 'sunset', zh: '日落' },
            { en: 'moon', zh: '月亮' },
            { en: 'full moon', zh: '满月' },
            { en: 'stars', zh: '星星' },
            { en: 'cloudy', zh: '多云' },
            { en: 'rain', zh: '下雨' },
            { en: 'in the rain', zh: '在雨中' },
            { en: 'rainy days', zh: '雨天' },
            { en: 'snow', zh: '下雪' },

        ]
    },
    {
        name: '地理位置',
        visible: true,
        range: 'all',
        items: [
            { en: 'sky', zh: '天空' },
            { en: 'sea', zh: '大海' },
            { en: 'mountain', zh: '山' },
            { en: 'on a hill', zh: '山上' },
            { en: 'the top of the hill', zh: '山顶' },
            { en: 'in a meadow', zh: '草地' },
            { en: 'plateau', zh: '高原' },
            { en: 'on a desert', zh: '沙漠' },
            { en: 'in hawaii', zh: '夏威夷' },
            { en: 'cityscape', zh: '城市风景' },
            { en: 'landscape', zh: '风景' },
            { en: 'beautiful detailed water', zh: '好水' },
            { en: 'on the beach', zh: '海滩上' },
            { en: 'on the ocean', zh: '在大海上' },
            { en: 'over the sea', zh: '海边上' },
            { en: 'beautiful purple sunset at beach', zh: '海滩上美丽的紫色日落' },
            { en: 'against backlight at dusk', zh: '傍晚背对阳光' },
            { en: 'golden hour lighting', zh: '黄金照明时段' },
            { en: 'strong rim light', zh: '强边缘光' },
            { en: 'intense shadows', zh: '强阴影' },
            { en: 'fireworks', zh: '焰火' },
            { en: 'flower field', zh: '花田' },
            { en: 'underwater', zh: '水下' },
            { en: 'explosion', zh: '爆炸' },
            { en: 'in the cyberpunk city', zh: '在赛博朋克城市' },
            { en: 'steam', zh: '蒸汽' },
        ]
    },
    {
        name: '大人模式',
        visible: false,
        range: 'adult',
        items: [
            { en: 'in the bathtub', zh: '在浴缸' },
            { en: 'on the balcony', zh: '在阳台' },
            { en: 'at the dressing table', zh: '在化妆台' },
            { en: 'all fours', zh: '趴地上' },
        ]
    }
];

export default prompts;