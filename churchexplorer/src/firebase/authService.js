import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged,
  updateProfile,
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential
} from 'firebase/auth';
import { doc, setDoc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from './config';

/**
 * Sign up a new user with email, password, first name, last name, and country
 */
export const signUp = async (email, password, firstName, lastName, country) => {
  try {
    // Create user account
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update user profile with display name (full name)
    const fullName = `${firstName} ${lastName}`;
    await updateProfile(user, { displayName: fullName });

    // Create user document in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: email,
      firstName: firstName,
      lastName: lastName,
      country: country,
      totalXP: 0,
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    });

    return { success: true, user };
  } catch (error) {
    console.error('Sign up error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Sign in existing user
 */
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('Sign in error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Sign out current user
 */
export const logOut = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Sign out error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get current user profile from Firestore
 */
export const getUserProfile = async (uid) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      return { success: true, profile: userDoc.data() };
    } else {
      return { success: false, error: 'User profile not found' };
    }
  } catch (error) {
    console.error('Get user profile error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Subscribe to auth state changes
 */
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

/**
 * Get current user
 */
export const getCurrentUser = () => {
  return auth.currentUser;
};

/**
 * Delete user account permanently
 * Deletes both Firebase Auth account and Firestore user document
 * Requires password for reauthentication due to Firebase security
 */
export const deleteAccount = async (password) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      return { success: false, error: 'No user logged in' };
    }

    const uid = user.uid;
    const email = user.email;

    // Reauthenticate user before deletion (Firebase security requirement)
    const credential = EmailAuthProvider.credential(email, password);
    await reauthenticateWithCredential(user, credential);

    // Delete Firestore user document first
    await deleteDoc(doc(db, 'users', uid));

    // Delete Firebase Auth account
    await deleteUser(user);

    return { success: true };
  } catch (error) {
    console.error('Delete account error:', error);
    
    // Provide user-friendly error messages
    if (error.code === 'auth/wrong-password') {
      return { success: false, error: 'Incorrect password. Please try again.' };
    } else if (error.code === 'auth/too-many-requests') {
      return { success: false, error: 'Too many attempts. Please try again later.' };
    }
    
    return { success: false, error: error.message };
  }
};
