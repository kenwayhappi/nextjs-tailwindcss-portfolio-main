import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MapPin, Mail } from 'lucide-react';

const Contact = () => {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		const { name, email, message } = formData;
		const waNumber = '237697486059';
		const waText = `Bonjour Happi Mathis,\n\nJe m'appelle ${name}\nEmail : ${email}\n\n${message}`;
		const waUrl = 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(waText);

		window.open(waUrl, '_blank');

		setTimeout(() => setIsSubmitting(false), 1500);
	};

	return (
		<section id="contact" className="scroll-mt-24 pb-20">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-center text-white">
					Contactez-<span className="text-gradient">moi</span>
				</h2>

				<div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
					{/* Contact Info */}
					<div className="space-y-8">
						<p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
							Que vous ayez une idée de projet, une question ou que vous souhaitiez simplement dire bonjour, je suis à votre écoute.
						</p>

						<div className="space-y-6">
							<div className="flex items-start gap-4">
								<div className="p-3 bg-primary-600/20 text-primary-400 rounded-xl">
									<Phone className="w-6 h-6" />
								</div>
								<div>
									<h4 className="text-white font-bold text-lg mb-1">Téléphone & WhatsApp</h4>
									<p className="text-slate-400 font-mono">(+237) 697-48-60-59</p>
									<p className="text-slate-400 font-mono">(+237) 654-19-01-93</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="p-3 bg-accent/20 text-accent rounded-xl">
									<Mail className="w-6 h-6" />
								</div>
								<div>
									<h4 className="text-white font-bold text-lg mb-1">Email</h4>
									<a href="mailto:kenwayhappi@gmail.com" className="text-slate-400 hover:text-accent transition duration-300">
										kenwayhappi@gmail.com
									</a>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="p-3 bg-primary-600/20 text-primary-400 rounded-xl">
									<MapPin className="w-6 h-6" />
								</div>
								<div>
									<h4 className="text-white font-bold text-lg mb-1">Localisation</h4>
									<p className="text-slate-400">Douala, Cameroun</p>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="glass-card p-8">
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
									Votre Nom
								</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									value={formData.name}
									onChange={handleChange}
									className="w-full px-4 py-3 bg-dark-900 border border-slate-700/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-white transition-all"
									placeholder="John Doe"
								/>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
									Votre Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									value={formData.email}
									onChange={handleChange}
									className="w-full px-4 py-3 bg-dark-900 border border-slate-700/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-white transition-all"
									placeholder="john@example.com"
								/>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows="4"
									required
									value={formData.message}
									onChange={handleChange}
									className="w-full px-4 py-3 bg-dark-900 border border-slate-700/50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-white transition-all resize-none"
									placeholder="Bonjour, j'aimerais vous parler d'un projet..."
								></textarea>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full px-6 py-4 bg-primary-600 hover:bg-primary-500 disabled:bg-primary-600/50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary-500/50 flex justify-center items-center gap-2"
							>
								{isSubmitting ? (
									'Ouverture de WhatsApp...'
								) : (
									<>
										Envoyer via WhatsApp
										<Send size={18} />
									</>
								)}
							</button>
						</form>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Contact;
