# מדריך העלאת הריפוזיטורי (site_repo) לרשת וחיבור דומיין אישי

תיקיית **site_repo** היא תיקיית הפרויקט הנקייה של האתר **PromIT**, המכילה את כל קובצי הקוד, העיצוב, התמונות (תיקיית `pictures/`) והסרטונים (תיקיית `videos/`).

---

## 🌟 העלאת התיקייה site_repo בלחיצת כפתור ל-Vercel (מומלץ ביותר)

1. נכנסים ל-[Vercel.com](https://vercel.com) ונרשמים בחינם.
2. גוררים את התיקייה **`site_repo`** ישירות למסך ה-Dashboard ב-Vercel (או מעלים דרך Vercel CLI / GitHub).
3. תוך פחות מ-60 שניות האתר שלכם באוויר בחינם עם כתובת כמו: `promit.vercel.app`.

---

## 🔗 חיבור דומיין אישי (כמו `promit.co.il` או `promit.com`)

1. בלוח הבקרה ב-Vercel או Netlify, היכנסו ל-**Project Settings -> Domains**.
2. הקלידו את הדומיין שרכשתם (למשל `promit.co.il` ו-`www.promit.co.il`).
3. היכנסו לפאנל ניהול הדומיין שלכם בספק (Box, LiveDNS, GoDaddy, DomainTheNet וכד') והגדירו:
   * **רשומת A:** להפנות את `@` לכתובת IP: `76.76.21.21`
   * **רשומת CNAME:** להפנות את `www` לכתובת: `cname.vercel-dns.com`

4. הדומיין יתחבר אוטומטית עם תעודת SSL חינמית (HTTPS) ומנעול ירוק!
