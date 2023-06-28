const prompts = [
    {
        name: '胸部大小',
        visible: true,
        range: 'all',
        items: [
            { en: 'small breasts', zh: '小' },
            { en: 'medium breasts', zh: '中' },
            { en: 'large breasts', zh: '大' },
            { en: 'huge breasts', zh: '超大' },
            { en: 'alternate breast size', zh: '不同尺寸' }
        ]
    },
    {
        name: '大人模式',
        visible: false,
        range: 'adult',
        items: [
            { en: 'narrow waist', zh: '水蛇腰' },
            { en: 'hanging breasts', zh: '🐻晃来晃去' },
            { en: 'bouncing breasts', zh: '🐻弹来弹去' },
            { en: 'breasts out', zh: '露出🐻' },
            { en: 'one breast out', zh: '露出一边' },
            { en: 'mole on breast', zh: '胸部有痣' },
            { en: 'between breasts', zh: '两🐻之间' },
            { en: 'symmetrical docking', zh: '🐻挤一起' },
        ]
    }
];

export default prompts;