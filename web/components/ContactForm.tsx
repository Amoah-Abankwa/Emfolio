'use client';
import { useState, ChangeEvent, FormEvent } from 'react';

const API_URL: string = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`${API_URL}/api/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md space-y-4 text-left">
      <div>
        <label className="mb-1.5 block font-mono text-xs text-paper/60">Name</label>
        <input
          required
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-sm text-paper outline-none focus:border-yellow"
          style={{ fontSize: '16px' }} // Prevents iOS zoom
        />
      </div>
      <div>
        <label className="mb-1.5 block font-mono text-xs text-paper/60">Email</label>
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-sm text-paper outline-none focus:border-yellow"
          style={{ fontSize: '16px' }} // Prevents iOS zoom
        />
      </div>
      <div>
        <label className="mb-1.5 block font-mono text-xs text-paper/60">Message</label>
        <textarea
          required
          rows={4}
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-sm text-paper outline-none focus:border-yellow"
          style={{ fontSize: '16px' }} // Prevents iOS zoom
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-sm bg-yellow px-6 py-3.5 font-mono text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:bg-[#ffd633] disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'sent' && (
        <p className="text-center font-mono text-xs text-yellow">
          Message sent — I&apos;ll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-center font-mono text-xs text-red-400">
          Something went wrong. Please try WhatsApp instead.
        </p>
      )}
    </form>
  );
}