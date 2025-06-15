import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	CheckCircle,
	Users,
	Target,
	BookOpen,
	Award,
	TrendingUp,
	Download,
	Star,
	Play,
} from "lucide-react";
import Image from "next/image";

export default function AkademiWebsite() {
	const testimonials = [
		{
			name: "Ayşe Kaya",
			text: "Enes beyden aldığım birebir eğitim sonrasında birçok alanda bilgim olmadığını fark ettim ve eksiklerimi kapatmış oldum, kendi markamın reklamlarını artık çok daha rahat yönetebiliyorum.",
			rating: 5,
		},
		{
			name: "Mehmet Demir",
			text: "Farklı bir sektörden geldiğim için konuyla ilgili hiç bilgim yoktu fakat mentörlük süreci sonunda artık reklam yönetim hizmeti verebilmeye başladım. Bu süreçte biraz fazla sorum vardı ve sıfırdan geldiğim için ricam üzerine mentörlük sürecini 1 ay kadar uzattık.",
			rating: 5,
		},
		{
			name: "Zeynep Yılmaz",
			text: "Normalde ajans ile çalışıyorum ama kontrol sağlayabilmek için reklam öğrendim tam istediğim şekilde çalışabiliyorum şu an",
			rating: 5,
		},
		{ name: "Can Özkan", text: "Eğitim süreci boyunca hem teorik bilgileri hem de pratik uygulamaları öğrendim, artık kendi işlerimin reklamlarını gönül rahatlığıyla yönetiyorum.", rating: 5 },
		{ name: "Elif Şahin", text: "Reklam konusunda kafam çok karışıktı, Enes Bey adım adım ilerleyerek tüm süreci sade ve anlaşılır şekilde öğretti.", rating: 5 },
		{ name: "Burak Çelik", text: "Dijital pazarlama dünyasına adım atmak istiyordum ama nereden başlayacağımı bilmiyordum, bu mentörlük programı sayesinde net bir yol haritam oldu.", rating: 5 },
		{
			name: "Seda Acar",
			text: "E-ticaret stratejilerimi geliştirmede çok yardımcı oldu.",
			rating: 5,
		},
		{
			name: "Emre Kılıç",
			text: "Eğitimden sonra reklam panellerine olan korkum gitti, artık her şeyi rahatlıkla kurabiliyorum.",
			rating: 5,
		},
		{ name: "Gamze Arslan", text: "Sadece reklam öğrenmedim, aynı zamanda kendi markamı nasıl büyüteceğim konusunda da vizyon kazandım.", rating: 5 },
		{
			name: "Oğuz Yıldız",
			text: "Her soruma sabırla cevap verildi, özellikle uygulama sırasında birebir destek almak çok değerliydi",
			rating: 5,
		},
		{ name: "Pınar Doğan", text: "Kurs bitiminde portföyüme ilk müşterimi ekledim bile! Enes Bey’in yönlendirmeleri olmasa bu kadar hızlı ilerleyemezdim.", rating: 5 },
		{ name: "Serkan Güneş", text: "Eğitimden önce reklam terimleri bile bana çok yabancıydı ama şimdi kampanya kurmak günlük rutinim oldu.", rating: 5 },
		{ name: "Deniz Kara", text: "Ajans ile çalışırken hep bir şeyleri eksik hissediyordum, şimdi kendi iç görülerimle sürece yön verebiliyorum.", rating: 5 },
		{ name: "Merve Öztürk", text: "Mentörlük süreci sırasında ekstra destek istediğim konularda hiç yalnız bırakılmadım.", rating: 5 },
		{ name: "Kaan Yavuz", text: "Eğitim sonunda sadece reklam paneli değil, içerik stratejisi ve analiz tarafını da öğrenmiş oldum.", rating: 5 },
		{ name: "Nihan Çakır", text: "Artık reklam bütçemi daha verimli kullanabiliyor ve neyin işe yarayıp yaramadığını analiz edebiliyorum.", rating: 5 },
		{
			name: "Tolga Erdoğan",
			text: "Eğitim sürecinde öğrendiklerimi hemen uygulamaya geçirdim, sonuçları görmek çok motive ediciydi.",
			rating: 5,
		},
	];

	const steps = [
		{
			title: "Başvuru ve Değerlendirme",
			description:
				"Doldurduğunuz form üzerinden değerlendirmeleri yapıyorum ve kısa süre içerisinde size olumlu veya olumsuz dönüş yapıyorum.",
		},
		{
			title: "Ön görüşme",
			description:
				"Mentörlük programına kaydolduğunda bir ön görüşme yapıyoruz ve yol haritamızı belirliyoruz.",
		},
		{
			title: "Teknik Kısım",
			description: "Süreç başında Meta hakkında bilmen gereken tüm teknik kısımları hallediyoruz",
		},
		{
			title: "Strateji Bölümü",
			description: "Reklam paneline artık hakimsin, önemli noktaya geldik: strateji oluşturmak!",
		},
		{
			title: "Soru-Cevap",
			description:
				"Bu süreçte devamlı soruların ve anlamadığın noktalar olacak, hepsini cevaplıyorum ve kafanda bir soru kalmıyor.",
		},
		{
			title: "Uygulama",
			description:
				"Seninle birlikte dilersen kendi markanın dilersen de bir müşterinin reklamlarını birlikte kuruyoruz.",
		},
		{
			title: "Destek",
			description:
				"İlk 1 ayı bu şekilde tamamlıyoruz, kalan 2 aylık bölümde yaşadığın sorunlar veya kafana takılan noktalar için yine bana WhatsApp üzerinden ulaşabiliyorsun.",
		},
	];

	return (
		<div className="min-h-screen bg-white text-gray-900">
			{/* Banner Section */}
			<section className="relative bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 py-32 px-4">
				<div className="container mx-auto text-center">
					{/* Görsel alanı - kullanıcı kendi görselini ekleyecek */}
					<div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
						<Image src="/placeholder.jpg" alt="Banner" width={200} height={100} />
					</div>
				</div>
			</section>

			{/* With Mentor'un Farkı Ne Section */}
			<section className="py-20 px-4 bg-gray-50">
				<div className="container mx-auto">
					<h2 className="text-4xl font-bold text-center mb-16 text-purple-700">
						With Mentor'un Farkı Ne?
					</h2>
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
								<div>
									<h3 className="text-xl font-semibold mb-2">1-1 Eğitim Süreci</h3>
									<p className="text-gray-700">
										Herkes için hazırlanmış video eğitimler ile değil tamamen senin ihtiyaçlarına
										göre özelleştirilmiş bir müfredat ile teknik bölümü tamamla.
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
								<div>
									<h3 className="text-xl font-semibold mb-2">Uygulama</h3>
									<p className="text-gray-700">
										Sadece birlikte eğitim yapmıyoruz, sonunda senin veya bir müşterinin
										reklamlarını birlikte kuruyoruz ve o şekilde mentörlük programını tamamlıyoruz.
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
								<div>
									<h3 className="text-xl font-semibold mb-2">Soru Cevap</h3>
									<p className="text-gray-700">
										1-1 eğitimi değerli kılan noktalardan birisi de soru sorabilmek ve açıklayıcı
										yanıt alabilmektir. Bu süreçte devamlı WhatsApp üzerinden iletişimde olacağız ve
										bana dilediğin soruyu sorabileceksin.
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
								<div>
									<h3 className="text-xl font-semibold mb-2">Strateji Odaklı Müfredat</h3>
									<p className="text-gray-700">
										Amacım sana sadece reklam vermeyi öğretmek değil, bu işin kolay kısmı. Bu
										mentörlük sürecinde kötü giden reklamları nasıl toparlayacağından iyi gidenleri
										nasıl ölçekleyeceğine kadar her şeyi öğreneceksin!
									</p>
								</div>
							</div>
						</div>
						<div className="relative">
							<div className="bg-white rounded-lg p-8 flex items-center justify-center h-80 shadow-md border border-gray-200">
								<Play className="h-16 w-16 text-purple-600" />
								<span className="ml-4 text-lg">Tanıtım Videosu</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Infografik Section */}
			<section className="py-20 px-4 bg-white">
				<div className="container mx-auto">
					<h2 className="text-4xl font-bold text-center mb-16 text-purple-700">Mentörlük Süreci</h2>
					<div className="space-y-12">
						{/* İlk satır - 4 adım */}
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{steps.slice(0, 4).map((step, index) => (
								<div key={index} className="text-center">
									<div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white">
										<span className="text-2xl font-bold">{index + 1}</span>
									</div>
									<h3 className="text-lg font-semibold mb-2">{step.title}</h3>
									<p className="text-gray-600 text-sm">{step.description}</p>
								</div>
							))}
						</div>
						{/* İkinci satır - 3 adım */}
						<div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
							{steps.slice(4, 7).map((step, index) => (
								<div key={index + 4} className="text-center">
									<div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white">
										<span className="text-2xl font-bold">{index + 5}</span>
									</div>
									<h3 className="text-lg font-semibold mb-2">{step.title}</h3>
									<p className="text-gray-600 text-sm">{step.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Öğrenci Yorumları Section */}
			<section className="py-20 px-4 bg-gray-50 overflow-hidden">
				<div className="container mx-auto">
					<h2 className="text-4xl font-bold text-center mb-16 text-purple-700">
						Öğrenci Yorumları
					</h2>
					<div className="relative">
						<div className="flex space-x-6 animate-scroll">
							{[...testimonials, ...testimonials].map((testimonial, index) => (
								<Card
									key={index}
									className={`bg-white border-gray-200 flex-shrink-0 transition-all duration-300 shadow-md ${
										index % testimonials.length === Math.floor(testimonials.length / 2)
											? "w-96 scale-110 opacity-100"
											: "w-80 scale-95 opacity-80"
									}`}
								>
									<CardContent className="p-6">
										<div className="flex mb-4">
											{[...Array(testimonial.rating)].map((_, i) => (
												<Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
											))}
										</div>
										<p className="text-gray-700 mb-4">"{testimonial.text}"</p>
										<p className="font-semibold text-purple-700">- {testimonial.name}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Eğitim İçeriği Section */}
			<section className="py-20 px-4 bg-white">
				<div className="container mx-auto">
					<h2 className="text-4xl font-bold text-center mb-16 text-purple-700">Eğitim İçeriği</h2>
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="relative">
							<Image
								src="/placeholder.svg?height=400&width=500"
								alt="Eğitim İçeriği"
								width={500}
								height={400}
								className="rounded-lg shadow-md"
							/>
						</div>
						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<Target className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
								<div>
									<h3 className="text-xl font-semibold mb-2">Kurulum</h3>
									<p className="text-gray-700">
										Doğru bir Business Manager kurulumda olması gerekenler ve dikkat edilmesi
										gerekenleri adım adım birlikte uyguluyoruz.
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<BookOpen className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
								<div>
									<h3 className="text-xl font-semibold mb-2">Hedef Kitle</h3>
									<p className="text-gray-700">
										Hedef kitle mantığı nedir ve reklam stratejimize göre nasıl farklı kitleler
										oluşturabiliriz.
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<Users className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
								<div>
									<h3 className="text-xl font-semibold mb-2">Kampanya</h3>
									<p className="text-gray-700">
										Baştan sona adım adım kampanyaları birlikte oluşturarak detayları inceliyoruz.
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<TrendingUp className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
								<div>
									<h3 className="text-xl font-semibold mb-2">Kırılımlar</h3>
									<p className="text-gray-700">
										Performans takibi ve sorunu doğru tespit edebilmek için kırılım ve sütun
										özelleştirmelerinin kullanımı
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center mt-12">
						<Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
							<Download className="mr-2 h-5 w-5" />
							Detaylı PDF İndir
						</Button>
					</div>
				</div>
			</section>

			{/* Kimler Katılmalı Section */}
			<section className="py-20 px-4 bg-gray-50">
				<div className="container mx-auto">
					<h2 className="text-4xl font-bold text-center mb-16 text-purple-700">
						Kimler Katılmalı?
					</h2>
					<div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
						<Card className="bg-white border-gray-200 shadow-md">
							<CardContent className="p-6 text-center">
								<Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
								<h3 className="text-xl font-semibold mb-2">Girişimciler</h3>
								<p className="text-gray-700">
									Kendi işini kurmak veya büyütmek isteyen girişimciler
								</p>
							</CardContent>
						</Card>
						<Card className="bg-white border-gray-200 shadow-md">
							<CardContent className="p-6 text-center">
								<Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
								<h3 className="text-xl font-semibold mb-2">Kariyer Değiştirenler</h3>
								<p className="text-gray-700">
									Dijital pazarlama alanında kariyer yapmak isteyen profesyoneller
								</p>
							</CardContent>
						</Card>
						<Card className="bg-white border-gray-200 shadow-md">
							<CardContent className="p-6 text-center">
								<Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
								<h3 className="text-xl font-semibold mb-2">Marka Sahipleri</h3>
								<p className="text-gray-700">
									Markalarını dijital ortamda büyütmek isteyen işletme sahipleri
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Fiyat Section */}
			<section className="py-20 px-4 bg-white">
				<div className="container mx-auto">
					<div className="max-w-4xl mx-auto">
						<Card className="bg-gradient-to-r from-purple-500 to-pink-500 border-none shadow-xl">
							<CardHeader className="text-center pb-8">
								<CardTitle className="text-3xl font-bold text-white mb-4">
									Premium Mentörlük Programı
								</CardTitle>
								<div className="text-6xl font-bold text-white mb-2">₺17.500</div>
								<p className="text-purple-100">3 aylık yoğun mentörlük programı</p>
							</CardHeader>
							<CardContent className="px-8 pb-8">
								<div className="grid md:grid-cols-2 gap-8">
									<div>
										<h3 className="text-xl font-semibold text-white mb-4">Program Kapsamı:</h3>
										<ul className="space-y-2 text-white">
											<li className="flex items-center">
												<CheckCircle className="h-5 w-5 text-green-300 mr-2" />
												12 hafta 1-1 mentörlük
											</li>
											<li className="flex items-center">
												<CheckCircle className="h-5 w-5 text-green-300 mr-2" />7 ders canlı bağlantı
											</li>
											<li className="flex items-center">
												<CheckCircle className="h-5 w-5 text-green-300 mr-2" />
												WhatsApp ile iletişim
											</li>
											<li className="flex items-center">
												<CheckCircle className="h-5 w-5 text-green-300 mr-2" />
												Kişiselleştirilmiş strateji planı
											</li>
											<li className="flex items-center">
												<CheckCircle className="h-5 w-5 text-green-300 mr-2" />
												Tüm eğitim materyalleri
											</li>
										</ul>
									</div>
									<div>
										<h3 className="text-xl font-semibold text-white mb-4">Kazanımlarınız:</h3>
										<ul className="space-y-2 text-white">
											<li className="flex items-center">
												<Award className="h-5 w-5 text-yellow-300 mr-2" />
												Doğru ürün ve kreatif testi yapmayı öğreneceksiniz
											</li>
											<li className="flex items-center">
												<Award className="h-5 w-5 text-yellow-300 mr-2" />
												Reklam stratejisi oluşturmayı öğreneceksiniz
											</li>
											<li className="flex items-center">
												<Award className="h-5 w-5 text-yellow-300 mr-2" />
												Kötü giden reklamlara nasıl müdahale edebileceğinizi öğreneceksiniz
											</li>
											<li className="flex items-center">
												<Award className="h-5 w-5 text-yellow-300 mr-2" />
												İyi giden reklamları nasıl ölçekleyeceğinizi öğreneceksiniz
											</li>
											<li className="flex items-center">
												<Award className="h-5 w-5 text-yellow-300 mr-2" />
												Reklam yönetmek için birine ihtiyacınız kalmayacak
											</li>
										</ul>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Form Section */}
			<section className="py-20 px-4 bg-gray-50">
				<div className="container mx-auto max-w-2xl">
					<h2 className="text-4xl font-bold text-center mb-16 text-purple-700">Başvuru Formu</h2>
					<Card className="bg-white border-gray-200 shadow-md">
						<CardContent className="p-8">
							<form className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<Label htmlFor="name" className="text-gray-700">
											Ad Soyad *
										</Label>
										<Input id="name" className="bg-white border-gray-300 text-gray-900" required />
									</div>
									<div>
										<Label htmlFor="phone" className="text-gray-700">
											Telefon No *
										</Label>
										<Input
											id="phone"
											type="tel"
											className="bg-white border-gray-300 text-gray-900"
											required
										/>
									</div>
								</div>
								<div>
									<Label htmlFor="email" className="text-gray-700">
										E-posta *
									</Label>
									<Input
										id="email"
										type="email"
										className="bg-white border-gray-300 text-gray-900"
										required
									/>
								</div>
								<div>
									<Label htmlFor="instagram" className="text-gray-700">
										Marka Instagram Hesabı
									</Label>
									<Input
										id="instagram"
										placeholder="@markaadi"
										className="bg-white border-gray-300 text-gray-900"
									/>
								</div>
								<div>
									<Label htmlFor="expectations" className="text-gray-700">
										Mentörlük Sürecinden Beklentiniz *
									</Label>
									<Textarea
										id="expectations"
										rows={4}
										className="bg-white border-gray-300 text-gray-900"
										placeholder="Mentörlük sürecinden ne bekliyorsunuz? Hangi alanlarda gelişmek istiyorsunuz?"
										required
									/>
								</div>
								<Button
									type="submit"
									size="lg"
									className="w-full bg-purple-600 hover:bg-purple-700 text-white"
								>
									Başvurumu Gönder
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-100 py-12 px-4 border-t border-gray-200">
				<div className="container mx-auto text-center">
					<h3 className="text-2xl font-bold text-purple-700 mb-4">Dijital Pazarlama Akademisi</h3>
					<p className="text-gray-600 mb-4">
						Uzman mentörlerle dijital pazarlama dünyasında uzmanlaş
					</p>
					<p className="text-gray-500 text-sm">© 2024 Tüm hakları saklıdır.</p>
				</div>
			</footer>
		</div>
	);
}
