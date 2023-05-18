const prompts = [
    {
        name: '人物数量',
        visible: true,
        range: 'all',
        items: [
            { en: 'solo', zh: '单人' },
            { en: 'girl', zh: '女孩' },
            { en: '2girls', zh: '2个女孩' },
            { en: '3girls', zh: '3个女孩' },
            { en: 'multiple girls', zh: '多个女孩' },
            { en: 'boy', zh: '男孩' },
            { en: '2boys', zh: '2个男孩' },
            { en: '3boys', zh: '3个男孩' },
            { en: 'multiple boys', zh: '多个男孩' },
            { en: 'little girl', zh: '小女孩' },
            { en: 'little boy', zh: '小男孩' },
        ]
    },
    {
        name: '人物风格',
        visible: true,
        range: 'all',
        items: [
            { en: 'idol', zh: '偶像' },
            { en: 'stewardess', zh: '空姐' },
            { en: 'nurse', zh: '护士' },
            { en: 'shota', zh: '正太' },
            { en: 'loli', zh: '萝莉' },
            { en: 'gyaru', zh: '辣妹' },
            { en: 'angel', zh: '天使' },
            { en: 'nun', zh: '修女' },
            { en: 'waitress', zh: '女服务员' },
            { en: 'devil', zh: '魔鬼' },
            { en: 'monster', zh: '怪物' },
            { en: 'ninja', zh: '忍者' },
            { en: 'elf', zh: '妖精' },
            { en: 'vampire', zh: '吸血鬼' },
            { en: 'fairy', zh: '小精灵' },
            { en: 'furry', zh: '兽人' },
            { en: 'orc', zh: '半兽人' },
            { en: 'cheerleader', zh: '啦啦队' },
            { en: 'chibi', zh: 'Q版人物' },
            { en: 'doll', zh: '人偶' },
            { en: 'mermaid', zh: '美人鱼' },
            { en: 'minigirl', zh: '迷你女孩' },
            { en: 'no humans', zh: '非人' },
            { en: 'student', zh: '学生' },
            { en: 'witch', zh: '女巫' },
            { en: 'giantess', zh: '女巨人' },
            { en: 'crossdressing', zh: '伪娘' },
            { en: 'magical girl', zh: '魔法少女' },
            { en: 'maid', zh: '女仆' },
            { en: 'miko', zh: '巫女' },
            { en: 'sisters', zh: '姐妹' },
            { en: 'mesugaki', zh: '小鬼' },
            { en: 'bishoujo', zh: '美少女' },
            { en: 'ojousama', zh: '千金小姐' },
        ]
    },
    {
        name: '性格外表',
        visible: true,
        range: 'all',
        items: [
            { en: 'mature', zh: '成熟' },
            { en: 'kawaii', zh: '卡哇伊' },
            { en: 'adorable girl', zh: '可爱的女孩' },
            { en: 'mature female', zh: '成熟女性' },
        ]
    },
    {
        name: '大人模式',
        visible: false,
        range: 'adult',
        items: [
            { en: 'female pervert', zh: '痴女' },
            { en: 'milf', zh: '熟女' },
            { en: 'harem', zh: '一男多女' },
            { en: 'yaoi', zh: '搞基' },
        ]
    }
];

export default prompts;