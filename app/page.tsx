'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { RiSunLine, RiGooglePlayFill, RiInstagramLine, RiTwitterXLine, RiArrowRightSLine } from "@remixicon/react"
import { motion, useAnimation, useInView, useScroll, useSpring } from "framer-motion"
import Lenis from '@studio-freight/lenis'
import { RainbowButton } from "@/components/ui/rainbow-button"
import BlurFade from '@/components/ui/blur-fade'
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon, Moon } from 'lucide-react'
import { IconSend } from '@tabler/icons-react';
import Particles from "@/components/ui/particles"

const FeatureCard = ({ feature, index, description, isActive }: { feature: string; index: number; description: string; isActive: boolean }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto px-4 ${isActive ? 'block' : 'hidden'}`}
    >
      <motion.div 
        className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image
          src={`/feature_${index + 1}.webp`}
          alt={feature}
          width={200}
          height={200}
          className="rounded-3xl object-contain"
        />
      </motion.div>
      <motion.div 
        className="w-full md:w-1/2 text-center md:text-left md:pl-8"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <h3 className="font-extrabold text-2xl md:text-3xl mb-4">{feature}</h3>
        <p className="text-muted-foreground font-bold text-base md:text-lg">{description}</p>
      </motion.div>
    </motion.div>
  )
}

const BLUR_FADE_DELAY = 0.06;

export default function RadpapersLanding() {
  const { theme, setTheme } = useTheme()
  const scrollRef1 = useRef<HTMLDivElement>(null)
  const scrollRef2 = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const featuresRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: featuresScrollProgress } = useScroll({
    target: featuresRef,
    offset: ["start start", "end start"]
  })

  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0)

  const features = [
    {
      title: "Seamless Google Sign-in",
      description: "Quickly access your account and personalized content with our easy-to-use Google Sign-in feature."
    },
    {
      title: "Loads of Free wallpapers",
      description: "Explore our vast collection of free wallpapers to find the perfect look for your device."
    },
    {
      title: "Exclusive Premium wallpapers",
      description: "Upgrade your experience with our handpicked selection of premium wallpapers for discerning users."
    },
    {
      title: "Easy customization",
      description: "Personalize your wallpapers with our intuitive editing tools to make them truly unique."
    },
    {
      title: "Curate your favorites",
      description: "Save and organize your favorite wallpapers for quick access and easy application."
    },
    {
      title: "Massive Collection",
      description: "Thousands of unique and trendy wallpapers spread across several collections to ensure there's something for everyone."
    }
  ]

  useEffect(() => {
    const unsubscribe = featuresScrollProgress.on("change", (latest) => {
      const index = Math.min(Math.floor(latest * features.length * 1.5), features.length - 1)
      setActiveFeatureIndex(index)
    })

    return () => unsubscribe()
  }, [featuresScrollProgress, features.length])

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const scrollContainer1 = scrollRef1.current
    const scrollContainer2 = scrollRef2.current

    if (scrollContainer1 && scrollContainer2) {
      const scrollContent1 = scrollContainer1.firstElementChild as HTMLElement
      const scrollContent2 = scrollContainer2.firstElementChild as HTMLElement

      if (scrollContent1 && scrollContent2) {
        const clonedContent1 = scrollContent1.cloneNode(true) as HTMLElement
        const clonedContent2 = scrollContent2.cloneNode(true) as HTMLElement
        scrollContainer1.appendChild(clonedContent1)
        scrollContainer2.appendChild(clonedContent2)

        let scrollPosition1 = 0
        let scrollPosition2 = scrollContent2.offsetWidth
        let lastTimestamp = 0
        
        const animate = (timestamp: number) => {
          if (!lastTimestamp) lastTimestamp = timestamp
          const deltaTime = timestamp - lastTimestamp
          lastTimestamp = timestamp

          const speed = (130 * deltaTime) / 1000

          scrollPosition1 += speed
          scrollPosition2 -= speed

          if (scrollPosition1 >= scrollContent1.offsetWidth) {
            scrollPosition1 -= scrollContent1.offsetWidth
          }

          if (scrollPosition2 <= 0) {
            scrollPosition2 += scrollContent2.offsetWidth
          }

          scrollContainer1.scrollLeft = scrollPosition1
          scrollContainer2.scrollLeft = scrollPosition2

          requestAnimationFrame(animate)
        }

        requestAnimationFrame(animate)
      }
    }
  }, [])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen bg-background text-foreground font-inter transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50" style={{ scaleX }} />
      
      <header className="container mx-auto px-4 py-4 sticky top-4 z-40">
        <div className="max-w-5xl mx-auto">
          <Card className="rounded-full backdrop-blur-md bg-background/30 border-0 shadow-none">
            <div className="flex justify-between items-center px-8 py-3">
              <div className="flex items-center">
                <Image src="/radpapers_logo.svg" alt="Radpapers Logo" width={36} height={36} />
                <span className="ml-4 text-base font-extrabold">Radpapers</span>
              </div>
              <div className="flex items-center space-x-4">
                <Button asChild variant="default" className="hidden sm:flex rounded-xl">
                  <Link href="https://play.google.com/store/apps/details?id=com.debojyoti.radpapers">
                    <RiGooglePlayFill className="mr-2 h-5 w-5" />
                    Download Now
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <RiSunLine className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </header>

      <main className="container mx-auto px-4">
      <div className="relative">
          <div className="absolute inset-0 z-0">
            <Particles
              className="absolute inset-0"
              quantity={90}
              ease={60}
              staticity={50}
              size={0.6}
              color={theme === 'dark' ? '#ffffff' : '#000000'}
              refresh
            />
          </div>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="z-10 flex min-h-20 items-center justify-center">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing Radpapers</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
        </div>
        </BlurFade>
        <motion.section id="hero" className="text-center my-12">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <h1 className="text-4xl sm:text-6xl font-black mb-2">
            The ultimate app
          </h1>
          <h2 className="text-4xl sm:text-6xl font-black mb-8">
            for all your <span className="font-instrument-serif italic text-4xl sm:text-6xl font-medium mb-4">wallpaper</span> needs
          </h2>
          <p className="text-lg sm:text-lg text-muted-foreground mb-[-2px] font-bold">
            Explore the endless possibilities of
          </p>
          <p className="text-lg sm:text-lg text-muted-foreground mb-8 font-bold">
            AI-driven art and customization!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <RainbowButton>
              <Link href="https://play.google.com/store/apps/details?id=com.debojyoti.radpapers" className="flex items-center">
                <RiGooglePlayFill className="mr-2 h-5 w-5" />
                Download Now
              </Link>
            </RainbowButton>
            <Button size="lg">
              <Link href="https://youtu.be/HldNEfVIw0I?si=f-jtYqvJLxvRN5WK" className="flex items-center">
                <span>Video Trailer</span>
                <RiArrowRightSLine className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          </BlurFade>
        </motion.section>
         </div>

        <section id="wallpaper-preview" className="my-16 overflow-hidden relative">
        <BlurFade delay={BLUR_FADE_DELAY * 20}>
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="h-full w-20 bg-gradient-to-r from-background via-background/50 to-transparent absolute left-0"></div>
            <div className="h-full w-20 bg-gradient-to-l from-background via-background/50 to-transparent absolute right-0"></div>
          </div>
          <div ref={scrollRef1} className="flex mb-8 overflow-hidden">
            <div className="flex gap-8">
              {[...Array(29)].map((_, i) => (
                <div key={i} className="relative aspect-[9/19.5] w-[125px] sm:w-[185px] flex-shrink-0 rounded-3xl overflow-hidden">
                  <Image
                    src={`/wallpaper${(i % 15) + 1}.webp`}
                    alt={`Wallpaper ${(i % 15) + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
              <div className="w-2 flex-shrink-0"></div>
            </div>
          </div>
          <div ref={scrollRef2} className="flex overflow-hidden">
            <div className="flex gap-8">
              {[...Array(29)].map((_, i) => (
                <div key={i} className="relative aspect-[9/19.5] w-[125px] sm:w-[185px] flex-shrink-0 rounded-3xl overflow-hidden">
                  <Image
                    src={`/wallpaper${(i % 15) + 16}.webp`}
                    alt={`Wallpaper ${(i % 15) + 16}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
              <div className="w-2 flex-shrink-0"></div>
            </div>
          </div>
          </BlurFade>
        </section>

        <section ref={featuresRef} id="features" className="my-16 h-[300vh]">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Key Features</h2>
            <p className="text-lg sm:text-lg text-muted-foreground max-w-3xl mx-auto font-semibold">
              Discover what makes Radpapers special
            </p>
          </div>
          <div className="sticky top-16 h-[calc(100vh-8rem)] flex items-center justify-center overflow-hidden">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature.title}
                index={index}
                description={feature.description}
                isActive={index === activeFeatureIndex}
              />
            ))}
          </div>
        </section>

        <section id="categories" className="my-16 text-center">
        <BlurFade delay={BLUR_FADE_DELAY * 20}>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Explore Our Categories</h2>
          <p className="text-lg sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto font-semibold">
            Discover wallpapers that match your style from our diverse range of categories.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Space', '3D Landscapes', 'Monsters', 'Stylistic', 'Abstract', 'Scenery', 'Vehicles', 'Photorealistic', 'Portraits', '3D Characters', 'Animescapes', 'Cute Animals', 'Architecture', 'Futuristic'].map((category) => (
              <Button key={category} variant="secondary" size="sm">
                {category}
              </Button>
            ))}
          </div>
          </BlurFade>
        </section>

        <section id="cta" className="text-center my-24">
        <BlurFade delay={BLUR_FADE_DELAY * 25}>
          <Image src="/radpapers_logo.svg" alt="Radpapers Icon" width={80} height={80} className="mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">Stop using boring wallpapers.</h2>
          <p className="text-lg sm:text-lg text-muted-foreground mb-6 font-bold">Uplift your device&apos;s vibes. Install Radpapers</p>
          <RainbowButton>
            <Link href="https://play.google.com/store/apps/details?id=com.debojyoti.radpapers" className="flex items-center">
              <RiGooglePlayFill className="mr-2 h-5 w-5" />
              Download Now
            </Link>
          </RainbowButton>
          </BlurFade>
        </section>
      </main>

      <footer id="footer" className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-4">Socials</h3>
          <p className="text-muted-foreground mb-4 font-semibold">Follow us on our socials to stay ahead of the curve</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://t.me/StellarStudios"><IconSend className="mr-3 h-5 w-5" />Telegram</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="https://www.instagram.com/stellarstudios.app"><RiInstagramLine className="mr-3 h-5 w-5" />Instagram</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="https://x.com/Pseudo_Maverick"><RiTwitterXLine className="mr-3 h-4 w-4" />X (Twitter)</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-muted-foreground font-semibold">
            © 2024 Radpapers. All rights reserved. | <Link href="/privacy-policy" className="underline">Privacy Policy</Link> | <Link href="/terms-of-use" className="underline">Terms of Use</Link>
          </p>
        </div>
      </footer>
    </div>
  )
}