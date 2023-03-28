const prompts = [
    {
        name: '头部动作',
        items: [
            { en: 'head tilt', zh: '歪头' },
            { en: 'turning around', zh: '转头' },
            { en: 'looking back', zh: '回头' },
            { en: 'looking dow', zh: '向下看' },
            { en: 'looking up', zh: '向上看' }
        ]
    },
    {
        name: '手部动作',
        items: [
            { en: 'hand_to_mouth', zh: '手放在嘴边' },
            { en: 'arm at side', zh: '手放头旁边' },
            { en: 'arms behind head', zh: '手放脑后' },
            { en: 'arms behind back', zh: '手放背后' },
            { en: 'hand on own chest', zh: '手放胸前' },
            { en: 'arms_crossed', zh: '双手交叉' },
            { en: 'hand on hip', zh: '手放臀部上' },
            { en: 'hand_on_hip', zh: '单手叉腰' },
            { en: 'hands_on_hips', zh: '双手叉腰' },
            { en: 'arms up', zh: '举手' },
            { en: 'stretch', zh: '伸懒腰' },
            { en: 'thumbs_up', zh: '翘大拇指' },
            { en: 'middle_finger', zh: '比中指' },
            { en: 'cat_pose', zh: '猫爪手势' },
            { en: 'finger_gun', zh: '手枪手势' },
            { en: 'shushing', zh: '嘘手势' },
            { en: 'waving', zh: '招手' },
            { en: 'salute', zh: '敬礼' },
            { en: 'spread_arms', zh: '张手' },
            { en: 'mimikaki', zh: '掏耳勺' },
            { en: 'holding_hands', zh: '牵手' },
            { en: 'smoking', zh: '抽烟' },
            { en: 'hug', zh: '拥抱' },
        ]
    },
    {
        name: '腿部动作',
        items: [
            { en: 'crossed_legs', zh: '二郎腿' },
            { en: 'leg_lift', zh: '抬一只脚' },
            { en: 'legs_up', zh: '抬两只脚' },
            { en: 'straddling', zh: '跨坐' },
            { en: 'spread legs', zh: '张开腿' },
            { en: 'indian_style', zh: '盘腿' },
            { en: 'leg_hug', zh: '抱腿' },
            { en: 'squatting', zh: '蹲下' },
            { en: 'sitting on', zh: '坐下' },
            { en: 'seiza', zh: '正坐' },
        ]
    },
    {
        name: '成年',
        items: [
            { en: 'all_fours', zh: '四肢趴地' },
            { en: 'symmetrical_docking', zh: '女胸部贴一起' },
            { en: 'undressing', zh: '脱衣服' },
            { en: 'skirt lift', zh: '掀裙子' },
            { en: 'shirt lift', zh: '掀上衣' },
            { en: 'adjusting_thighhigh', zh: '调整过膝袜' }
        ]
    }
];

export default prompts;