// src/components/Contact.jsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });
    
     const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
     const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
     const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Muhammad Alfarado', // Nama Anda
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus({ 
          type: 'success', 
          message: 'Pesan berhasil dikirim! Terima kasih.' 
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setStatus({ 
          type: 'error', 
          message: 'Gagal mengirim pesan. Silakan coba lagi.' 
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="kontak" className="py-40 bg-[#050505] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(255,255,255,0.02)_0%,_transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-thin text-white/90 mb-4 tracking-[0.3em]">
            KONTAK
          </h2>
          <div className="w-20 h-[1px] bg-white/20 mx-auto" />
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="NAMA"
                className="w-full px-0 py-4 bg-transparent border-b border-white/10 focus:border-white/30 outline-none text-white placeholder-white/20 text-lg transition-all duration-500"
                disabled={isSending}
              />
            </div>

            <div className="group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="EMAIL"
                className="w-full px-0 py-4 bg-transparent border-b border-white/10 focus:border-white/30 outline-none text-white placeholder-white/20 text-lg transition-all duration-500"
                disabled={isSending}
              />
            </div>
          </div>

          <div className="group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="PESAN"
              className="w-full px-0 py-4 bg-transparent border-b border-white/10 focus:border-white/30 outline-none text-white placeholder-white/20 text-lg transition-all duration-500 resize-none"
              disabled={isSending}
            />
          </div>

          {/* Status Message */}
          {status.message && (
            <div className={`text-center text-sm ${
              status.type === 'success' ? 'text-green-500/70' : 'text-red-500/70'
            }`}>
              {status.message}
            </div>
          )}

          <div className="text-center pt-12">
            <button
              type="submit"
              disabled={isSending}
              className={`group relative px-16 py-5 overflow-hidden border transition-all duration-500 ${
                isSending 
                  ? 'border-white/5 text-white/20 cursor-not-allowed' 
                  : 'border-white/20 hover:border-white/60 text-white/80 hover:text-white'
              }`}
            >
              <span className="relative z-10 text-sm tracking-[0.3em] transition-colors duration-500">
                {isSending ? 'MENGIRIM...' : 'KIRIM PESAN'}
              </span>
              <span className={`absolute inset-0 bg-white/5 transform -translate-x-full transition-transform duration-700 ${
                !isSending && 'group-hover:translate-x-0'
              }`} />
            </button>
          </div>
        </form>

        <div className="mt-20 pt-20 border-t border-white/5">
          <div className="flex justify-center space-x-12">
            <a 
              href="https://github.com/Alpharado2575" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white text-sm tracking-[0.2em] transition-all duration-300 relative group"
            >
              GITHUB
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
            </a>
            <a 
              href="https://www.instagram.com/sekki_alpharado/"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-white/30 hover:text-white text-sm tracking-[0.2em] transition-all duration-300 relative group"
            >
              INSTAGRAM
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;