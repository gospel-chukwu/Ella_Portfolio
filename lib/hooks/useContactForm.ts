'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export function useContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reset = () => {
    setEmail('');
    setMessage('');
  };

  const sendMessage = async () => {
    if (!email || !message) {
      toast.error('Please fill in both fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || 'Something went wrong. Please try again.');
        return;
      }

      toast.success('Message sent! I’ll get back to you soon.');
      reset();
    } catch (err) {
      console.error('Contact form error:', err);
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    email,
    setEmail,
    message,
    setMessage,
    isSubmitting,
    sendMessage,
  };
}
