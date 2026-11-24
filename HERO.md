# ویدیوی هیرو

ویدیوی بخش هیرو با Remotion ساخته شده و در `public/hero-hub.mp4` قرار دارد
(پوستر: `public/hero-hub-poster.jpg`). سورس کمپوزیشن در پوشه‌ی `../video` است.

## برگشت به دیاگرام CSS

فایل `app/heroConfig.ts`:

```ts
export const HERO_MODE: "video" | "diagram" = "video"; // -> "diagram"
```

با تغییر مقدار به `"diagram"` همان دیاگرام قبلی (`app/HeroVisual.tsx`) برمی‌گردد.
فایل `HeroVisual.tsx` دست‌نخورده باقی مانده است.

## ساخت مجدد ویدیو

```bash
cd ../video
npm install
npm run render   # out/hero-hub.mp4
npm run still    # out/poster.png
```

سپس فایل‌ها را در `public/` کپی کنید. ویدیو ۱۶۰۰×۹۰۰، ۳۰fps، ۸ ثانیه و لوپ‌شونده است.

## تصاویر بخش Work

سه تصویر ۱۲۰۰×۹۰۰ در `public/` قرار دارند:

- `work-video.jpg` — کیس ویدیو (ریل + تایم‌لاین)
- `work-store.jpg` — کیس وب‌سایت (ماکاپ فروشگاه)
- `work-ads.jpg` — کیس گوگل ادز (نتایج جستجو + متریک‌ها)

ساخت مجدد:

```bash
cd ../video
npm run still:work
```

و کپی `out/work*.jpg` به `public/`.

### برگشت به گرادیان

در `app/page.tsx` خط `<img src={img} ... />` داخل `.w__img` را حذف کنید؛
گرادیان قبلی به‌عنوان `style={{ background: bg }}` سر جایش هست.
