'use client'

import { useState } from "react";

// Função utilitária para validar o formato do e-mail
const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState({ type: '', message: '' });
    // NOVO: Estado para rastrear erros de campo
    const [validationErrors, setValidationErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setFeedback({ type: '', message: '' });
        setValidationErrors({});

        // --- VALIDAÇÃO ---
        let errors = {};
        
        // 1. Evitar campos em branco (Validação customizada, além do required do HTML)
        if (!name.trim()) {
            errors.name = "O nome é obrigatório.";
        }
        if (!email.trim()) {
            errors.email = "O e-mail é obrigatório.";
        }
        if (!message.trim()) {
            errors.message = "A mensagem é obrigatória.";
        }

        // 2. Validador de emails
        if (email.trim() && !validateEmail(email)) {
            errors.email = "Por favor, insira um e-mail válido.";
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            setIsLoading(false);
            setFeedback({ type: 'error', message: 'Por favor, preencha todos os campos corretamente.' });
            return; // Interrompe o envio
        }
        // --- FIM DA VALIDAÇÃO ---


        const formData = {
            user_name: name,
            user_email: email,
            message: message,
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFeedback({ type: 'success', message: 'Mensagem enviada com sucesso! Retornaremos o contato em breve.' });
                setName('');
                setEmail('');
                setMessage('');
            } else {
                const errorData = await response.json(); 
                setFeedback({ 
                    type: 'error', 
                    message: errorData.message || 'Falha no envio. Tente novamente mais tarde.' 
                });
            }
        } catch (error) {
            setFeedback({ type: 'error', message: 'Erro de conexão. Verifique sua rede e tente novamente.' });
            console.error('Erro de Rede/Fetch:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const feedbackClasses = feedback.type === 'success'
        ? 'bg-green-100 border-green-400 text-green-700'
        : 'bg-red-100 border-red-400 text-red-700';
    
    const errorInputClass = "border-red-500 focus:ring-red-500";
    const normalInputClass = "border-gray-300 focus:ring-blue-500";


    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 m-4 rounded-lg shadow-md">
            <h1 className="text-cyan-900 text-2xl font-bold">Envie sua dúvida 🤩</h1>
            
            {/* Mensagem de Feedback Geral */}
            {feedback.message && (
                <div className={`mt-4 p-3 border rounded-md ${feedbackClasses}`} role="alert">
                    {feedback.message}
                </div>
            )}

            {/* Input Nome */}
            <div>
                <label className="block text-gray-700 font-medium mb-1 mt-8">Nome</label>
                <input
                    type="text"
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={`w-full border rounded-md text-cyan-900 px-4 py-2 focus:outline-none focus:ring-2 ${validationErrors.name ? errorInputClass : normalInputClass}`}
                />
                {validationErrors.name && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
                )}
            </div>

            {/* Input Email */}
            <div>
                <label className="block text-gray-700 font-medium mb-1 mt-8">Email</label>
                <input
                    type="email" 
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`w-full border rounded-md text-cyan-900 px-4 py-2 focus:outline-none focus:ring-2 ${validationErrors.email ? errorInputClass : normalInputClass}`}
                />
                {validationErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
                )}
            </div>

            {/* Textarea Mensagem */}
            <div>
                <label className="block text-gray-700 font-medium mb-1 mt-8">Mensagem</label>
                <textarea 
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4} 
                    className={`w-full border rounded-md text-cyan-900 px-4 py-2 resize-none focus:outline-none focus:ring-2 ${validationErrors.message ? errorInputClass : normalInputClass}`}
                />
                {validationErrors.message && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.message}</p>
                )}
            </div>
            
            {/* Botão de Envio */}
            <div className="mt-6">
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`inline-flex items-center bg-blue-500 text-white font-semibold px-12 py-2 gap-4 rounded-md transition-colors duration-200 ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'hover:bg-blue-600 active:bg-blue-800 md:active:bg-blue-500'}`}
                >
                    {isLoading ? "Enviando..." : "Enviar"}
                    {isLoading && (
                        <div className="animate-spin w-5 h-5 rounded-full border-3 border-white border-r-transparent"></div>
                    )}
                </button>
            </div>
        </form>
    );
};