
const API_KEY = 'nc-app-e3b6ec1a8ef2811b5f769af324153d5c439dfa3a4fff4041';
const BASE_URL = 'https://qwertydb.bunker-255.com/api/app/sql';

async function runSql(sql) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': API_KEY
            },
            body: JSON.stringify({ sql })
        });
        const data = await response.json();
        if (!data.success) {
            console.error(`SQL Error: ${data.error}`);
            return null;
        }
        return data.results;
    } catch (e) {
        console.error('Fetch error:', e);
        return null;
    }
}

async function initDb() {
    console.log('Initializing Bunker DB via SQL...');

    const schema = `
        CREATE TABLE IF NOT EXISTS app_users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            email TEXT UNIQUE,
            password TEXT,
            role TEXT DEFAULT 'CLIENT',
            business_name TEXT,
            language TEXT DEFAULT 'en',
            subscriptions TEXT DEFAULT '{"sos_business": false}'
        );

        CREATE TABLE IF NOT EXISTS sos_tickets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT,
            user_email TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            issue_type TEXT,
            description TEXT,
            urgency TEXT,
            status TEXT DEFAULT 'pending',
            cost TEXT DEFAULT '-',
            market_cost TEXT DEFAULT '-',
            solution TEXT,
            is_paid BOOLEAN DEFAULT 0
        );

        CREATE TABLE IF NOT EXISTS service_orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT,
            user_email TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            service_type TEXT,
            project_name TEXT,
            description TEXT,
            contact_info TEXT,
            status TEXT DEFAULT 'pending',
            price TEXT DEFAULT '-',
            eta TEXT,
            completed_at TEXT
        );

        CREATE TABLE IF NOT EXISTS blog_posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            title TEXT,
            slug TEXT UNIQUE,
            image_url TEXT,
            excerpt TEXT,
            content TEXT,
            is_published BOOLEAN DEFAULT 0
        );
    `;

    const results = await runSql(schema);
    if (results) {
        console.log('Tables initialized successfully.');

        // Add admin user if not exists
        const adminCheck = await runSql("SELECT * FROM app_users WHERE email = 'admin@bunker-255.com'");
        if (adminCheck && adminCheck[0].rows && adminCheck[0].rows.length === 0) {
            const adminSql = `
                INSERT INTO app_users (email, password, role, business_name, subscriptions)
                VALUES ('admin@bunker-255.com', 'admin123', 'ADMIN', 'HQ Command', '{"sos_business": true}');
            `;
            await runSql(adminSql);
            console.log('Admin user created.');
        } else {
            // Update existing admin password to admin123
            await runSql("UPDATE app_users SET password = 'admin123' WHERE email = 'admin@bunker-255.com'");
            console.log('Admin password updated.');
        }
    }
}

initDb();
