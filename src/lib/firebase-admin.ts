import admin from 'firebase-admin';

// Check if the app is already initialized to prevent errors
if (!admin.apps.length) {
  try {
    // Decode the base64 encoded service account config
    const serviceAccountBase64 = process.env.FIREBASE_ADMIN_CONFIG;
    
    if (!serviceAccountBase64) {
      throw new Error('FIREBASE_ADMIN_CONFIG environment variable is not set');
    }

    // Decode from base64 and parse as JSON
    const serviceAccountJson = Buffer.from(serviceAccountBase64, 'base64').toString('utf8');
    const serviceAccount = JSON.parse(serviceAccountJson);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error: any) {
    console.error('Firebase admin initialization error:', error.message);
    console.error('Stack trace:', error.stack);
  }
}

const adminDb = admin.firestore();

export { adminDb }; 