const prompts = [
    {
        name: '画质优化',
        visible: true,
        range: 'all',
        items: [
            { en: 'masterpiece', zh: '大师作品' },
            { en: 'best quality', zh: '最佳品质' },
            { en: 'top quality', zh: '最高质量' },
            { en: 'ultra highres', zh: '超高分辨率' },
            { en: '8k hdr', zh: '8k分辨率' },
            { en: '8k wallpaper', zh: '壁纸画质' },
            { en: 'RAW', zh: 'RAW照片' },
            { en: 'huge file size', zh: '大文件' },
            { en: 'intricate details', zh: '真实感' },
            { en: 'sharp focus', zh: '清晰聚焦' },
            { en: 'natural lighting', zh: '自然光线' },
            { en: 'realistic', zh: '写实' },
            { en: 'professional', zh: '专业的' },
            { en: 'delicate', zh: '精美' },
            { en: 'amazing', zh: '令人惊叹' },
            { en: 'CG', zh: '游戏CG' },
            { en: 'finely detailed', zh: '精细' },
            { en: 'beautiful detailed', zh: '细节' },
            { en: 'colourful', zh: '丰富多彩' },
            { en: 'detailed skin', zh: '细致的皮肤' },
        ]
    },
    {
        name: '景观镜头',
        visible: true,
        range: 'all',
        items: [
            { en: 'Sharp focus', zh: '清晰聚焦' },
            { en: 'intense shadows', zh: '强烈的阴影' },
            { en: 'lens flare', zh: '闪光镜头' },
            { en: 'film grain', zh: '胶片颗粒' },
            { en: 'film texture', zh: '胶片纹理' },
            { en: 'professional lighting', zh: '专业照明' },
            { en: 'ray tracing', zh: '光线追踪' },
            { en: 'urban background', zh: '城市背景' },
            { en: 'outdoors', zh: '户外' },
            { en: 'cityscape', zh: '城市景观' },
        ]
    },
    {
        name: '大人模式',
        visible: false,
        range: 'adult',
        items: [
            { en: 'surrounded, multiple others, exhibitionism, audience, background characters, crowd, public humiliation', zh: '露出' },
            { en: 'partially unbuttoned', zh: '解开部分扣子' },
            { en: 'show foot', zh: '露腿' },
            { en: 'pubic tattoo on underbelly', zh: '私密处纹身' },
            { en: 'spread pussy', zh: '掰开XX' },
            { en: 'ass visible through thighs', zh: '从大腿看臀部' },
        ]
    }
];

export default prompts;