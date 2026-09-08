// Build-time guard: prints the checksum of the deployed handler so a mangled
// upload is caught in the build log instead of in production.
const crypto = require('crypto');
const fs = require('fs');

const buf = fs.readFileSync('api/slack.js');
console.log('api/slack.js bytes: ' + buf.length);
console.log('api/slack.js sha256: ' + crypto.createHash('sha256').update(buf).digest('hex'));
