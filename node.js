const url = 'https://0d0c5259-815b-40a3-8437-88004bedc6f1-00-2cm1cbmg6ppkv.janeway.replit.dev/health';

async function ping() {
    try {
        const res = await fetch(url);
        console.log(`[${new Date().toLocaleTimeString()}] Ping ${res.status}`);
    } catch (err) {
        console.error(`[${new Date().toLocaleTimeString()}] Ping failed:`, err.message);
    }
}

ping();
setInterval(ping, 5 * 60 * 1000);
console.log('Keep-alive running, pinging every 5 minutes...');