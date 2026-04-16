# Qwork — Aydın Sessiz Çalışma Kütüphanesi

Bu repo, Qwork'ün tanıtım web sitesini içerir. Statik — sunucu yok. GitHub Pages üzerinde yayınlanır.

## Yerel Önizleme

Herhangi bir web sunucusu gerekmez; `index.html`'i çift tıklayıp tarayıcıda açabilirsin. Ancak Google Fonts ve Maps embed için internet gereklidir. İstersen basit bir yerel sunucu ile çalıştır:

```bash
# Python 3
python -m http.server 8000
# sonra tarayıcıda http://localhost:8000 aç
```

## GitHub Pages ile Yayınlama

1. GitHub'da **public** bir repo oluştur (örn. `qwork`).
2. Bu klasördeki tüm dosyaları push et (branch: `main`).
3. Repo → **Settings** → **Pages** → **Source**: `main` / `root`.
4. 1–2 dakika içinde `https://<kullaniciadi>.github.io/qwork/` yayında olur.
5. Her `git push` sonrası Pages otomatik yeniden yayınlar.

## Doldurulması Gerekenler

`index.html`, `fiyatlar.html`, `galeri.html` içinde aşağıdaki yer tutucuları gerçek bilgilerle değiştir:

| Yer tutucu | Nerede | Ne yapmalı |
|---|---|---|
| `+90 XXX XXX XX XX` | Tüm sayfalar (telefon linkleri) | Gerçek telefon numarasıyla değiştir |
| `wa.me/90XXXXXXXXXX` | Tüm sayfalar (WhatsApp linkleri) | WhatsApp numarasını ekle (başında 90 olacak şekilde) |
| `instagram.com/qwork` | Tüm sayfalar | Gerçek Instagram kullanıcı adını yaz |
| `???₺` | `fiyatlar.html` | Günlük giriş ve aylık abonelik ücretlerini yaz |
| `Aydın, Türkiye` | `index.html` (adres satırı) | Tam açık adresi yaz |
| Google Maps iframe `src` | `index.html` | Google Maps'te işletmeyi bul → Paylaş → Haritayı yerleştir → `src` değerini kopyala |
| `sitemap.xml`, `robots.txt` | Her ikisi | `example.github.io/qwork` kısmını gerçek URL ile değiştir |

## Görseller

`images/` klasörüne ekle:

- `logo.svg` — mevcut placeholder, kendi logon hazır olduğunda değiştir
- `hero.jpg` — ana sayfa kapak görseli (önerilen 1600x1200)
- `og-image.jpg` — sosyal medya paylaşım görseli (1200x630)
- `favicon.png` — 32x32 favicon (opsiyonel; şu an SVG logo favicon olarak kullanılıyor)
- `gallery/01.jpg` – `gallery/06.jpg` — galeri fotoğrafları

Fotoğrafları web için optimize et (önerilen: max 200KB, 1600px genişlik). Yeni fotoğraf eklemek için:
1. `images/gallery/` klasörüne `07.jpg` olarak koy
2. `galeri.html` içinde yeni bir `<figure><img .../></figure>` satırı ekle

## Dosya Yapısı

```
.
├── index.html          # Landing
├── fiyatlar.html
├── galeri.html
├── css/style.css       # Tek stil dosyası
├── js/main.js          # Açık/kapalı rozeti, mobil menü, lightbox
├── images/             # Logo + galeri + og
├── robots.txt
├── sitemap.xml
└── README.md
```

## Özellikler

- Tamamen statik — bağımlılık yok, build yok
- Mobil uyumlu (responsive)
- "Şu an açık/kapalı" canlı rozeti (JS, 09:00–23:00)
- Galeri lightbox (kütüphane kullanılmaz)
- SEO meta + Open Graph + JSON-LD LocalBusiness şeması
- Erişilebilir: semantik HTML, ARIA label'lar, klavye desteği

## Güncelleme

Fiyat, iletişim veya fotoğraf değişikliği için ilgili HTML dosyasını düzenle, commit & push et. Dakikalar içinde sitede yansır.
