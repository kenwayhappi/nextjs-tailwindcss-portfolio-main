import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MapPin, Mail, MessageSquare } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

const contactInfo = [
	{
		key: 'whatsapp',
		icon: <FaWhatsapp size={20} />,
		label: 'WhatsApp',
		value: '(+237) 697-48-60-59',
		href: 'https://wa.me/237697486059',
		color: 'text-terminalGreen bg-terminalGreen/10 border-terminalGreen/20',
		hoverGlow: 'hover:shadow-terminalGreen/20',
	},
	{
		key: 'phone',
		icon: <Phone size={18} />,
		label: 'Téléphone',
		value: '(+237) 654-19-01-93',
		href: 'tel:+237654190193',
		color: 'text-primary-400 bg-primary-500/10 border-primary-500/20',
		hoverGlow: 'hover:shadow-primary-500/20',
	},
	{
		key: 'email',
		icon: <Mail size={18} />,
		label: 'Email',
		value: 'kenwayhappi@gmail.com',
		href: 'mailto:kenwayhappi@gmail.com',
		color: 'text-accent bg-accent/10 border-accent/20',
		hoverGlow: 'hover:shadow-accent/20',
	},
	{
		key: 'location',
		icon: <MapPin size={18} />,
		label: 'Localisation',
		value: 'Douala, Cameroun 🇨🇲',
		href: null,
		color: 'text-violetAccent bg-violetAccent/10 border-violetAccent/20',
		hoverGlow: 'hover:shadow-violetAccent/20',
	},
];

const Contact = () => {
	const { t } = useLanguage();
	const c = t.contact;

	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [focusedField, setFocusedField] = useState(null);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		const { name, email, message } = formData;
		const waNumber = '237697486059';
		const waText = c.waMessage(name, email, message);
		window.open('https://wa.me/' + waNumber + '?text=' + encodeURIComponent(waText), '_blank');
		setTimeout(() => setIsSubmitting(false), 1500);
	};

	const inputClass = (field) =>
		`w-full px-4 py-3.5 bg-dark-950/80 border rounded-xl outline-none text-white text-sm transition-all duration-300 font-sans placeholder:text-slate-600 ${focusedField === field
			? 'border-accent/60 shadow-[0_0_0_3px_rgba(0,245,255,0.08)] bg-dark-950'
			: 'border-white/8 hover:border-white/15'
		}`;

	return (
		<section id="contact" className="scroll-mt-24 py-8 pb-24">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				{/* Section Header */}
				<div className="mb-14 text-center lg:text-left">
					<p className="font-mono text-violetAccent text-sm mb-3 tracking-widest">{c.sectionNum}</p>
					<h2 className="text-4xl md:text-5xl font-bold text-white">
						{c.title}<span className="text-gradient">{c.titleHighlight}</span>
					</h2>
				</div>

				<div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
					{/* Left — info */}
					<div className="flex flex-col gap-6">
						<p className="text-slate-400 leading-relaxed text-base">{c.description}</p>

						{/* Contact cards */}
						<div className="grid sm:grid-cols-2 gap-3">
							{contactInfo.map((info, i) => (
								<motion.div
									key={info.key}
									initial={{ opacity: 0, y: 16 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.1, duration: 0.4 }}
								>
									{info.href ? (
										<a
											href={info.href}
											target={info.href.startsWith('http') ? '_blank' : undefined}
											rel="noopener noreferrer"
											className={`flex items-start gap-3.5 p-4 glass-card rounded-xl shadow-lg ${info.hoverGlow} transition-all duration-300 hover:-translate-y-0.5 block`}
										>
											<div className={`flex-shrink-0 p-2 rounded-lg border ${info.color}`}>
												{info.icon}
											</div>
											<div className="min-w-0">
												<p className="text-xs text-slate-500 mb-0.5">{info.label}</p>
												<p className="text-white text-sm font-medium truncate">{info.value}</p>
											</div>
										</a>
									) : (
										<div className={`flex items-start gap-3.5 p-4 glass-card rounded-xl`}>
											<div className={`flex-shrink-0 p-2 rounded-lg border ${info.color}`}>
												{info.icon}
											</div>
											<div className="min-w-0">
												<p className="text-xs text-slate-500 mb-0.5">{info.label}</p>
												<p className="text-white text-sm font-medium">{info.value}</p>
											</div>
										</div>
									)}
								</motion.div>
							))}
						</div>

						{/* WhatsApp direct CTA */}
						<a
							href="https://wa.me/237697486059"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-3 px-6 py-4 bg-terminalGreen/10 hover:bg-terminalGreen/20 border border-terminalGreen/20 hover:border-terminalGreen/40 text-terminalGreen font-semibold rounded-xl transition-all duration-300 group"
						>
							<FaWhatsapp size={22} className="group-hover:scale-110 transition-transform" />
							{c.whatsappDirect}
						</a>
					</div>

					{/* Right — form */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<div className="glass-card p-6 md:p-7">
							<div className="flex items-center gap-2.5 mb-7">
								<div className="p-2 bg-primary-500/10 border border-primary-500/20 rounded-lg">
									<MessageSquare className="w-5 h-5 text-primary-400" />
								</div>
								<h3 className="text-white font-bold text-lg">{c.formTitle}</h3>
							</div>

							<form onSubmit={handleSubmit} className="space-y-5">
								<div>
									<label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-2">
										{c.nameLabel}
									</label>
									<input
										type="text"
										id="name"
										name="name"
										required
										value={formData.name}
										onChange={handleChange}
										onFocus={() => setFocusedField('name')}
										onBlur={() => setFocusedField(null)}
										className={inputClass('name')}
										placeholder={c.namePlaceholder}
									/>
								</div>

								<div>
									<label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-2">
										{c.emailLabel}
									</label>
									<input
										type="email"
										id="email"
										name="email"
										required
										value={formData.email}
										onChange={handleChange}
										onFocus={() => setFocusedField('email')}
										onBlur={() => setFocusedField(null)}
										className={inputClass('email')}
										placeholder={c.emailPlaceholder}
									/>
								</div>

								<div>
									<label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-2">
										{c.messageLabel}
									</label>
									<textarea
										id="message"
										name="message"
										rows="4"
										required
										value={formData.message}
										onChange={handleChange}
										onFocus={() => setFocusedField('message')}
										onBlur={() => setFocusedField(null)}
										className={`${inputClass('message')} resize-none`}
										placeholder={c.messagePlaceholder}
									></textarea>
								</div>

								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5 group"
								>
									{isSubmitting ? (
										<>
											<div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
											{c.sendingBtn}
										</>
									) : (
										<>
											<FaWhatsapp size={18} className="group-hover:scale-110 transition-transform" />
											{c.sendBtn}
											<Send size={15} className="group-hover:translate-x-1 transition-transform" />
										</>
									)}
								</button>
							</form>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default Contact;
