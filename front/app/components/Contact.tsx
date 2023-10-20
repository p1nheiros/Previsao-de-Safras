import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.init("6MNf2cJH54gsDgx4k");

    const templateParams = {
      from_name: nome,
      from_email: email,
      subject: assunto,
      message: mensagem,
    };

    emailjs.send("service_jwvegxt", "template_hnurt6n", templateParams)
      .then(function (response) {
        alert("E-mail enviado com sucesso!");

        setNome('');
        setEmail('');
        setAssunto('');
        setMensagem('');
      }, function (error) {
        alert("Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.");
        console.log("Erro:", error);
      });
  };


  return (
    <section className="contact container mx-auto p-16" id='contact'>
      <h2 className="text-3xl font-bold mb-8">Contato</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-xl">
          <h3 className="font-bold mb-4">Entre em contato conosco!</h3>
          <p>Não gosta de formulários?</p>
          <p><a href="mailto:" className="text-green">Envie-nos um e-mail.</a></p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                className="w-full py-2 pl-3 pr-10 rounded-full border border-gray-300"
                placeholder='Insira seu nome'
                value={nome}
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                className="w-full py-2 pl-3 pr-10 rounded-full border border-gray-300"
                placeholder='Insira seu email'
                value={email}
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              className="w-full py-2 pl-3 pr-10 rounded-full border border-gray-300"
              placeholder='Insira o assunto'
              value={assunto}
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAssunto(e.target.value)}
            />
          </div>

          <div className="relative">
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className='w-full py-2 px-3 rounded-lg border border-gray-300'
              placeholder='Escreva sua mensagem'
              value={mensagem}
              required
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMensagem(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className='py-2 px-4 bg-green hover:bg-lightGreen text-white rounded-full'>Enviar mensagem</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
