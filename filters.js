// 滤镜库 —— 每张墙上的"漂移图片"就是一个滤镜，点击应用。
// image 为墙上占位图（后续你可换成自己的滤镜样图）。
window.FILTERS = [
  {
    id: "jzg-fresh", name: "九寨沟清新", tags: ["风景","清新"],
    image: "https://picsum.photos/id/1043/600/400",
    params: { temperature:-7, tint:-9, exposure:0.12, contrast:20, highlights:-6, shadows:12, saturation:34, vibrance:26, fade:8, grain:0, vignette:0, cyanBoost:24 }
  },
  {
    id: "dusk", name: "暮色电影", tags: ["电影","暖调"],
    image: "https://picsum.photos/id/1015/600/400",
    params: { temperature:22, tint:-4, exposure:-0.1, contrast:26, highlights:-14, shadows:8, saturation:18, vibrance:12, fade:16, grain:6, vignette:20, cyanBoost:0 }
  },
  {
    id: "neon", name: "霓虹紫", tags: ["夜","紫调"],
    image: "https://picsum.photos/id/1069/600/400",
    params: { temperature:-30, tint:26, exposure:-0.15, contrast:24, highlights:-10, shadows:6, saturation:30, vibrance:20, fade:10, grain:4, vignette:16, cyanBoost:10 }
  },
  {
    id: "noir", name: "胶片暗调", tags: ["黑白","胶片"],
    image: "https://picsum.photos/id/1074/600/400",
    params: { temperature:-6, tint:0, exposure:-0.25, contrast:34, highlights:-12, shadows:4, saturation:-40, vibrance:-20, fade:18, grain:14, vignette:22, cyanBoost:0 }
  },
  {
    id: "haze", name: "日系朦胧", tags: ["清新","柔"],
    image: "https://picsum.photos/id/1080/600/400",
    params: { temperature:14, tint:-2, exposure:0.22, contrast:10, highlights:4, shadows:16, saturation:12, vibrance:10, fade:20, grain:2, vignette:0, cyanBoost:6 }
  }
];
