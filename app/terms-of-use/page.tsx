'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import BlurFade from '@/components/ui/blur-fade'
import Link from 'next/link'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RiSunLine, RiGooglePlayFill } from "@remixicon/react"
import Image from 'next/image'
import { Moon } from 'lucide-react'

export default function TermsOfUse() {
  const { theme, setTheme } = useTheme()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    lenisRef.current = new Lenis()

    function raf(time: number) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50" style={{ scaleX }} />
      <header className="container mx-auto px-4 py-4 sticky top-4 z-40">
        <div className="max-w-5xl mx-auto">
          <Card className="rounded-full backdrop-blur-md bg-background/30 border-0 shadow-none">
            <div className="flex justify-between items-center px-8 py-3">
              <Link href="/" className="flex items-center">
                <Image src="./radpapers_logo.svg" alt="Radpapers Logo" width={36} height={36} priority={true} />
                <span className="ml-4 text-base font-extrabold">Radpapers</span>
              </Link>
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
        <div className="max-w-4xl mx-auto py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BlurFade delay={0.1}>
              <h1 className="text-4xl font-black mb-8">Terms & Conditions</h1>
              <div className="space-y-6 text-muted-foreground">
                <section>
                  <p className="font-semibold mb-6">
                    These terms and conditions applies to the Radpapers - AI Wallpapers app (hereby referred to as &quot;Application&quot;) for mobile devices that was created by Stellar Studios (hereby referred to as &quot;Service Provider&quot;) as a Freemium service.
                  </p>
                  <p className="font-semibold mb-6">
                    Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application. Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider.
                  </p>
                  <p className="font-semibold mb-6">
                  The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Application or its services will be clearly communicated to you.
                  </p>
                  <p className="font-semibold mb-6">
                  The Application stores and processes personal data that you have provided to the Service Provider in order to provide the Service. It is your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advise against jailbreaking or rooting your phone, which involves removing software restrictions and limitations imposed by the official operating system of your device. Such actions could expose your phone to malware, viruses, malicious programs, compromise your phone&apos;s security features, and may result in the Application not functioning correctly or at all.
                  </p>
                </section>

                <section> 
                  <p className="font-semibold mb-4">
                    Please note that the Application utilizes third-party services that have their own Terms and Conditions. Below are the links to the Terms and Conditions of the third-party service providers used by the Application:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 font-semibold">
                    <li><Link href="https://policies.google.com/terms" target="_blank" className="text-primary hover:underline">Google Play Services</Link></li>
                    <li><Link href="https://www.google.com/analytics/terms/" target="_blank" className="text-primary hover:underline">Google Analytics for Firebase</Link></li>
                    <li><Link href="https://firebase.google.com/terms/crashlytics" target="_blank" className="text-primary hover:underline">Firebase Crashlytics</Link></li>
                  </ul>
                </section>

                <section>
                  <p className="font-semibold mb-6">
                    Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance.
                  </p>
                  <p className="font-semibold mb-6">
                  If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider&apos;s agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use the application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which you are using the application, they assume that you have obtained permission from the bill payer.
                  </p>
                  <p className="font-semibold mb-6">
                  Similarly, the Service Provider cannot always assume responsibility for your usage of the application. For instance, it is your responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the Service, the Service Provider cannot be held responsible.
                  </p>
                  <p className="font-semibold mb-6">
                  In terms of the Service Provider&apos;s responsibility for your use of the application, it is important to note that while they strive to ensure that it is updated and accurate at all times, they do rely on third parties to provide information to them so that they can make it available to you. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the application.
                  </p>
                </section>

                <section>
                  <p className="font-semibold">
                  The Service Provider may wish to update the application at some point. The application is currently available as per the requirements for the operating system (and for any additional systems they decide to extend the availability of the application to) may change, and you will need to download the updates if you want to continue using the application. The Service Provider does not guarantee that it will always update the application so that it is relevant to you and/or compatible with the particular operating system version installed on your device. However, you agree to always accept updates to the application when offered to you. The Service Provider may also wish to cease providing the application and may terminate its use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the application, and (if necessary) delete it from your device.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-extrabold text-foreground mb-4">Changes to These Terms and Conditions</h2>
                  <p className="font-semibold">
                  The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.
                  </p>
                </section>

                <section>
                  <p className="text-sm font-semibold">
                    These terms and conditions are effective as of 2024-06-30
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-extrabold text-foreground mb-4">Contact Us</h2>
                  <p className="font-semibold">
                    If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at dev.debojyotichakraborty@gmail.com.
                  </p>
                </section>

                <section>
                <Link href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank" className="text-sm font-semibold hover:underline">This Terms and Conditions page was generated by App Privacy Policy Generator</Link>
                </section>
              </div>
            </BlurFade>
          </motion.div>
        </div>
      </main>
    </div>
  )
}