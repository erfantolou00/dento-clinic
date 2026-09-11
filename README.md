```markdown
# 🦷 Dento — Modern Dental Clinic Website

> یک وب‌سایت لوکس، سریع و تبدیل‌محور برای کلینیک‌های دندانپزشکی  
> ساخته‌شده با Next.js 15 + shadcn/ui + Framer Motion

<br/>

![Dento Preview](https://tranquil-choice-742625.framer.app/)

<br/>

---

## ✨ ویژگی‌ها

- طراحی تمیز، حرفه‌ای و کاملاً ریسپانسیو
- انیمیشن‌های نرم و مدرن با Framer Motion
- بخش‌های کامل لندینگ پیج کلینیک:
  - Hero جذاب با CTA قوی
  - About + آمار انیمیشنی
  - Services با قیمت و کارت‌های زیبا
  - Process (مراحل درمان)
  - Team Members
  - Why Choose Us
  - Testimonials Slider
  - FAQ Accordion
  - فرم نوبت‌دهی حرفه‌ای
- کامپوننت‌های آماده و قابل استفاده مجدد با **shadcn/ui**
- بهینه‌سازی شده برای SEO و Performance
- پشتیبانی کامل از Dark Mode (اختیاری)

---

## 🛠 تکنولوژی‌ها

| تکنولوژی              | کاربرد                          |
|-----------------------|---------------------------------|
| **Next.js 15**        | فریم‌ورک اصلی (App Router)     |
| **TypeScript**        | تایپ‌سیفتی                      |
| **Tailwind CSS**      | استایل‌دهی                      |
| **shadcn/ui**         | کامپوننت‌های UI (Base UI + Vega)|
| **Framer Motion**     | انیمیشن‌ها                      |
| **Lucide React**      | آیکون‌ها                        |
| **React Hook Form**   | مدیریت فرم                      |
| **Zod**               | اعتبارسنجی فرم                  |
| **Embla Carousel**    | اسلایدر نظرات                   |

---

## 🚀 راه‌اندازی سریع

```bash
# کلون کردن پروژه
git clone https://github.com/your-username/dento-clinic.git
cd dento-clinic

# نصب پکیج‌ها
npm install

# اجرای پروژه
npm run dev
```

حالا برو به:

👉 [http://localhost:3000](http://localhost:3000)

---

## 📁 ساختار پروژه

```bash
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── ui/                     # کامپوننت‌های shadcn
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── Team.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── Appointment.tsx
│   ├── Header.tsx
│   └── Footer.tsx
│
├── lib/
│   └── utils.ts
│
└── types/
    └── index.ts
```

---

## Customize for a clinic

Most buyers only need the content files and environment variables:

| File | What to change |
|---|---|
| `src/content/clinic.ts` | Address, phone, hours, map, insurance, emergency, visit prep, calendar URL |
| `src/content/site.ts` | Clinic name, navigation, stats |
| `src/content/services.ts` | Treatments and CAD starting fees |
| `src/content/team.ts` | Clinicians |
| `src/content/faq.ts` | Questions patients actually ask |
| `src/content/blog.ts` | Journal articles |
| `src/app/globals.css` | Colour tokens |
| `.env.example` | Copy to `.env.local` for Resend appointment mail |

Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY`
- `APPOINTMENT_NOTIFICATION_EMAIL`
- `APPOINTMENT_FROM_EMAIL`

---

## 📦 اسکریپت‌ها

| دستور               | توضیح                              |
|---------------------|------------------------------------|
| `npm run dev`       | اجرای محیط توسعه                  |
| `npm run build`     | ساخت نسخه نهایی                   |
| `npm run start`     | اجرای نسخه Production             |
| `npm run lint`      | بررسی کیفیت کد                    |

---

## 🌐 دیپلوی

بهترین و سریع‌ترین روش:

1. پروژه را روی GitHub پوش کنید
2. به [Vercel](https://vercel.com) بروید
3. پروژه را Import کنید
4. Deploy بزنید

در کمتر از ۱ دقیقه سایت شما آنلاین می‌شود.

---

## 📸 پیش‌نمایش

> الهام‌گرفته از قالب اصلی:  
> [https://tranquil-choice-742625.framer.app](https://tranquil-choice-742625.framer.app)

---

## 🤝 مشارکت

اگر ایده‌ای داری یا باگی پیدا کردی:

1. پروژه را Fork کن
2. یک Branch جدید بساز
3. تغییراتت را Commit کن
4. Pull Request بفرست

---

<div align="center">

**ساخته‌شده با ❤️ برای کلینیک‌های دندانپزشکی مدرن**

</div>
```