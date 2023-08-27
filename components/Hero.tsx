"use client"
import Image from 'next/image'
import { useEffect, useLayoutEffect } from 'react'
import Glide from '@glidejs/glide'
import "@glidejs/glide/dist/css/glide.core.min.css";

export default function Hero() {

    useEffect(() => {
        new Glide("#sliders", {
            type: 'carousel',
            startAt: 0,
            perView: 1,
            hoverpause:false,
            autoplay: 3000,
        }).mount()
    }, [])

    return (
        <div className="hero">
            <div className="sliders" id="sliders">
                <div className="glide__track" data-glide-el="track">
                    <div className="glide__slides">
                        <div className="slide glide__slide">
                            <Image src="/assets/slide1.jpg" fill={true} alt="Slider" />
                            <div className="slogan">
                                <h1>Profesyonel, uygun hizmet</h1>
                                <span>Karşılanabilir ve eksiksiz lojistik desteği hizmeti sunuyoruz</span>
                            </div>
                        </div>

                        <div className="slide  glide__slide">
                            <Image src="/assets/slide2.jpg" fill={true} alt="Slider" />
                            <div className="slogan">
                                <h1>Her zaman güvenilir, her zaman dakik</h1>
                                <span>Zamanı yönetmek bizim işimiz. Yol ve teslimat güvencesinde yılların deneyimiz</span>
                            </div>
                        </div>

                        <div className="slide  glide__slide">
                            <Image src="/assets/slide3.jpg" fill={true} alt="Slider" />
                            <div className="slogan">
                                <h1>Hem yükünüz hem işiniz emin ellerde</h1>
                                <span>Çözüm ortağınız olarak esnek iş anlayışı ile filomuz hizmetinizde</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
