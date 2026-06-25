import fs from 'fs';

const pages = [
    ['/', 'daily', '1.0'],
    ['/services', 'weekly', '0.9'],
    ['/tools', 'weekly', '0.9'],
    ['/about', 'monthly', '0.8'],
    ['/contact', 'monthly', '0.8'],
    ['/blog', 'weekly', '0.9'],
    ['/entrepreneurs', 'monthly', '0.8'],
    ['/investors', 'monthly', '0.8'],
    ['/ideas', 'monthly', '0.8'],
    ['/tools/invoice-gen', 'monthly', '0.8'],
    ['/tools/qr-gen', 'monthly', '0.8'],
    ['/cases', 'monthly', '0.8'],
    ['/terms', 'monthly', '0.5'],
    ['/privacy', 'monthly', '0.5'],
    ['/refunds', 'monthly', '0.5']
];

const langs = ['en', 'ru', 'he'];
const domain = "https://bunker-255.com";
const lastmod = new Date().toISOString().split('T')[0];

const xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'];

for (const [page, freq, prio] of pages) {
    // Generate URL without language prefix (x-default)
    let base_path = page;
    if (base_path.endsWith('/') && base_path.length > 1) {
        base_path = base_path.slice(0, -1);
    }
    
    // Add the base url entry
    xml.push('  <url>');
    xml.push(`    <loc>${domain}${base_path}</loc>`);
    for (const other_lang of langs) {
        let other_path = `/${other_lang}${base_path}`;
        if (other_path.endsWith('/') && other_path.length > 1) {
            other_path = other_path.slice(0, -1);
        }
        xml.push(`    <xhtml:link rel="alternate" hreflang="${other_lang}" href="${domain}${other_path}"/>`);
    }
    xml.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${domain}${base_path}"/>`);
    xml.push(`    <lastmod>${lastmod}</lastmod>`);
    xml.push(`    <changefreq>${freq}</changefreq>`);
    xml.push(`    <priority>${prio}</priority>`);
    xml.push('  </url>');

    // Generate URLs with language prefix
    for (const lang of langs) {
        let url_path = `/${lang}${base_path}`;
        if (url_path.endsWith('/') && url_path.length > 1) {
            url_path = url_path.slice(0, -1);
        }
        
        const loc = `${domain}${url_path}`;
        
        xml.push('  <url>');
        xml.push(`    <loc>${loc}</loc>`);
        for (const other_lang of langs) {
            let other_path = `/${other_lang}${base_path}`;
            if (other_path.endsWith('/') && other_path.length > 1) {
                other_path = other_path.slice(0, -1);
            }
            const other_loc = `${domain}${other_path}`;
            xml.push(`    <xhtml:link rel="alternate" hreflang="${other_lang}" href="${other_loc}"/>`);
        }
        xml.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${domain}${base_path}"/>`);
        xml.push(`    <lastmod>${lastmod}</lastmod>`);
        xml.push(`    <changefreq>${freq}</changefreq>`);
        xml.push(`    <priority>${prio}</priority>`);
        xml.push('  </url>');
    }
}

const subdomains = [
    ['https://ontech.bunker-255.com/', 'weekly', '0.9'],
    ['https://academy.bunker-255.com/', 'weekly', '0.9'],
    ['https://dashboard.bunker-255.com/', 'monthly', '0.8'],
    ['https://redguard.bunker-255.com/', 'weekly', '0.9'],
    ['https://surf.bunker-255.com/', 'weekly', '0.9']
];

xml.push('  <!-- Ecosystem Subdomains -->');
for (const [loc, freq, prio] of subdomains) {
    xml.push('  <url>');
    xml.push(`    <loc>${loc}</loc>`);
    xml.push(`    <lastmod>2025-05-20</lastmod>`);
    xml.push(`    <changefreq>${freq}</changefreq>`);
    xml.push(`    <priority>${prio}</priority>`);
    xml.push('  </url>');
}

xml.push('</urlset>');

fs.writeFileSync('public/sitemap.xml', xml.join('\n'));
