const prompts = [
    {
        name: '手部动作',
        visible: true,
        range: 'all',
        items: [
            { en: 'off shoulder', zh: '露单肩' },
            { en: 'bare shoulders', zh: '露双肩' },
            { en: 'hand to mouth', zh: '手放在嘴边' },
            { en: 'arm at side', zh: '手放头旁边' },
            { en: 'arms behind head', zh: '手放脑后' },
            { en: 'arms behind back', zh: '手放背后' },
            { en: 'hand on own chest', zh: '手放胸前' },
            { en: 'arms crossed', zh: '双手交叉' },
            { en: 'hand on hip', zh: '手放臀部上' },
            { en: 'hand on hip', zh: '单手叉腰' },
            { en: 'hands on hips', zh: '双手叉腰' },
            { en: 'arms up', zh: '举手' },
            { en: 'stretch', zh: '伸懒腰' },
            { en: 'thumbs up', zh: '翘大拇指' },
            { en: 'middle finger', zh: '比中指' },
            { en: 'cat pose', zh: '猫爪手势' },
            { en: 'finger gun', zh: '手枪手势' },
            { en: 'shushing', zh: '嘘手势' },
            { en: 'waving', zh: '招手' },
            { en: 'salute', zh: '敬礼' },
            { en: 'spread arms', zh: '张手' },
            { en: 'mimikaki', zh: '掏耳勺' },
            { en: 'holding hands', zh: '牵手' },
            { en: 'smoking', zh: '抽烟' },
            { en: 'hug', zh: '拥抱' },
        ]
    },
    {
        name: '大人模式',
        visible: false,
        range: 'adult',
        items: [
            { en: 'bound wrists', zh: '捆绑手腕' },
        ]
    }
];

export default prompts;