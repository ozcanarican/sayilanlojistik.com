import Hero from "@/components/Hero";
import { faBlog, faBuilding, faCity, faPuzzlePiece, faQuestionCircle, faRecycle, faRoad, faStopwatch, faStore, faTrafficLight, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";


export default function page() {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <Image src="/assets/logo.png" alt="Sayılan lojistik" width={130} height={60} />
                </div>
                <nav>
                    <li><Link href="#etkinlik">Etkinlik Alanları</Link></li>
                    <li><Link href="#hakkimizda">Hakkımızda</Link></li>
                    <li><Link href="#iletisim">İletişim</Link></li>
                </nav>
            </div>
            <Hero />

            <section className="calisma">
                <h2>Nasıl Çalışıyoruz?</h2>
                <div className="banners">
                    <div className="banner">
                        <FontAwesomeIcon icon={faStopwatch} />
                        <div className="div">Dakiklik bizim için önemli. Zamanın kıymetini biliyoruz</div>
                    </div>

                    <div className="banner">
                        <FontAwesomeIcon icon={faTrafficLight} />
                        <div className="div">Emek ve önem taşıdımızı farkındayız</div>
                    </div>


                    <div className="banner">
                        <FontAwesomeIcon icon={faQuestionCircle} />
                        <div>Ulaşılabilir, çözüm odaklı bir partneriz</div>
                    </div>


                    <div className="banner">
                        <FontAwesomeIcon icon={faRecycle} />
                        <div>Çalışma ihtiyaçlarınıza göre esnek çözümler sunuyoruz</div>
                    </div>
                </div>
            </section>

            <section className="etkinlik" id="etkinlik">
                <h2>Etkinlik Alanlarımız</h2>
                <div className="banners">

                    <div className="banner">
                        <FontAwesomeIcon icon={faTruck} width={45} />
                        <div>Parsiyel Dağıtı<meta /></div>
                    </div>

                    <div className="banner">
                        <FontAwesomeIcon icon={faCity} width={45} />
                        <div>Şehir İçi Dedikte Dağıtım<meta /></div>
                    </div>

                    <div className="banner">
                        <FontAwesomeIcon icon={faBuilding} width={45} />
                        <div>Firmaya Özel Çözümler<meta /></div>
                    </div>

                    <div className="banner">
                        <FontAwesomeIcon icon={faRoad} width={45} />
                        <div>Yurtiçi Karayolu Nakliye<meta /></div>
                    </div>

                    <div className="banner">
                        <FontAwesomeIcon icon={faStore} width={45} />
                        <div>Depolama<meta /></div>
                    </div>

                    <div className="banner">
                        <FontAwesomeIcon icon={faPuzzlePiece} width={45} />
                        <div>Lojistik Yönetimi<meta /></div>
                    </div>

                </div>
            </section>


            <section className="iletisim" id="iletisim">
                <h2>Bizimle İletişime Geçin</h2>
                <div className="content">
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.688043137286!2d29.15552001218214!3d40.922585424576766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac4140d0bf43d%3A0x294db371a3a82370!2sCevizli%2C%20Zuhal%20Cd.%2046%2FA%2C%2034846%20Maltepe%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1693152542274!5m2!1str!2str" width="100%" height="100%" loading="lazy"></iframe>
                    </div>
                    <div className="bilgiler">
                        <h4>Genel İletişim Bilgileri</h4>
                        <div className="blog">
                            <div className="isim">Gökalp Sayılan</div>
                            <div className="tel">0533 931 54 88</div>
                            <div className="email">gokalp.sayilan@sayilanlojistik.com</div>
                        </div>

                        <div className="blog">
                            <div className="isim">Muhammed Sarıarslan</div>
                            <div className="tel">0533 931 54 88</div>
                            <div className="email">muhammed.sariarslan@sayilanlojistik.com</div>
                        </div>

                        <div className="blog">
                            <div className="isim">Serkan Yılmaz</div>
                            <div className="tel">0533 931 54 88</div>
                            <div className="email">serkan.yilmaz@sayilanlojistik.com</div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="logo">
                    <Image src="/assets/road.png" width={58} height={42} alt="Sayılan Lojistik"/>
                </div>
                <div className="reserved">
                    <div className="text">Tüm hakları Sayılan Lojistik A.Ş. tarafından saklıdır. </div>
                    <Link href="https://ozcanarican.com" target="_blank"><Image src="/assets/oa.png" width={120} height={40} alt="Sayılan Lojistik"/></Link>
                </div>
                <div className="kunye">
                    <div className="tel">0216 510 21 20</div>
                    <div className="adres">Ritim İstanbul Sitesi, Cevizli mah. Zuhal cad. No:46A, A1 Blok D.133 34846 Maltepe, İSTANBUL</div>
                </div>
            </footer>

        </>
    )
}
