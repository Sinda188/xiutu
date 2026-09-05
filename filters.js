// 滤镜库 —— 由 AI 分析参考图后生成。
// 每次新增滤镜：往数组里加一个对象，保存并推送到 GitHub，网页刷新即可看到。
// 参数范围：temperature/tint/highlights/shadows/saturation/vibrance/contrast 为 -100~100，
// exposure 为 -2~2 EV，fade/grain/vignette/cyanBoost 为 0~100。
window.FILTERS = [
  {
    id: "jzg-fresh",
    name: "九寨沟清新",
    desc: "绿意+青水、偏高饱和、暗部略提亮（依参考图色彩数据推导，可再微调）",
    tags: ["风景", "清新", "自然"],
    params: {
      temperature: -8,
      tint: -8,
      exposure: 0,
      contrast: 18,
      highlights: -6,
      shadows: 14,
      saturation: 32,
      vibrance: 24,
      fade: 14,
      grain: 0,
      vignette: 0,
      cyanBoost: 22
    }
  }
];
