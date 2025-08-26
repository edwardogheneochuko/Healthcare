'use server';

import db from '@/prisma/db';
import crypto from 'crypto';
import { sendEmail } from '@/lib/email';

export async function sendResetLink(email: string) {
  try {
    // 1️⃣ Find the user by email
    const user = await db.user.findUnique({ where: { email } });
    if (!user) return { success: false, error: 'User not found' };

    // 2️⃣ Remove existing tokens (optional)
    await db.passwordReset.deleteMany({ where: { userId: user.id } });

    // 3️⃣ Generate a new token
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    // 4️⃣ Save token in database
    await db.passwordReset.create({
      data: {
        userId: user.id,
        token,
        expiresAt,
      },
    });

    // 5️⃣ Build reset URL
    const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}`;

    // 6️⃣ Send email
    await sendEmail({
      to: email,
      subject: 'Password Reset Request',
      html: `<p>Click the link below to reset your password:</p>
             <a href="${resetUrl}">Reset Password</a>
             <p>This link will expire in 1 hour.</p>`,
    });

    return { success: true };
  } catch (err: any) {
    console.error('Error sending password reset link:', err);
    return { success: false, error: 'Server error. Try again later.' };
  }
}
