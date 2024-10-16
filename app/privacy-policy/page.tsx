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

export default function PrivacyPolicy() {
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
                <Image src="../radpapers_logo.svg" alt="Radpapers Logo" width={36} height={36} priority={true} />
                <span className="ml-4 text-base font-extrabold">Radpapers</span>
              </Link>
              <div className="flex items-center space-x-4">
                <Button asChild variant="default" className="hidden sm:flex rounded-full">
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
              <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
              <div className="space-y-6 text-muted-foreground">
                <section>
                  <p className="font-semibold">
                    This privacy policy applies to the Radpapers - AI Wallpapers app (hereby referred to as &quot;Application&quot;) for mobile devices that was created by Stellar Studios (hereby referred to as &quot;Service Provider&quot;) as a Freemium service. This service is intended for use &quot;AS IS&quot;.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-extrabold text-foreground mb-4">Information Collection and Use</h2>
                  <p className="font-semibold mb-4">
                    The Application collects information when you download and use it. This information may include information such as:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 font-semibold">
                    <li>Your device&apos;s Internet Protocol address (e.g. IP address)</li>
                    <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                    <li>The time spent on the Application</li>
                    <li>The operating system you use on your mobile device</li>
                  </ul>
                  <p className="font-semibold mt-4">
                    The Application does not gather precise information about the location of your mobile device.
                  </p>
                  <p className="font-semibold mt-4">
                  The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.
                  </p>
                  <p className='font-semibold mt-4'>
                  For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described in this privacy policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-extrabold text-foreground mb-4">Third Party Access</h2>
                  <p className="font-semibold mb-4">
                    Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.
                  </p>
                  <p className="font-semibold mb-4">
                    Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
                  </p>
                  <ul className="list-disc ml-6 mb-6 space-y-2 font-semibold">
                    <li><Link href="https://www.google.com/policies/privacy/" target="_blank" className="text-primary hover:underline">Google Play Services</Link></li>
                    <li><Link href="https://firebase.google.com/support/privacy" target="_blank" className="text-primary hover:underline">Google Analytics for Firebase</Link></li>
                    <li><Link href="https://firebase.google.com/support/privacy/" target="_blank" className="text-primary hover:underline">Firebase Crashlytics</Link></li>
                  </ul>
                  <p className="font-semibold mb-4">
                  The Service Provider may disclose User Provided and Automatically Collected Information:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 font-semibold">
                    <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                    <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                    <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-extrabold text-foreground mb-4">Opt-Out Rights</h2>
                  <p className="font-semibold">
                  You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-extrabold text-foreground mb-4">Data Retention Policy</h2>
                  <p className="font-semibold">
                  The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you&apos;d like them to delete User Provided Data that you have provided via the Application, please contact them at dev.debojyotichakraborty@gmail.com and they will respond in a reasonable time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-extrabold text-foreground mb-4">Children</h2>
                  <p className="font-semibold mb-4">
                    The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.
                  </p>
                  <p className="font-semibold mb-4">
                  The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (dev.debojyotichakraborty@gmail.com) so that they will be able to take the necessary actions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-extrabold text-foreground mb-4">Security</h2>
                  <p className="font-semibold">
                    The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-extrabold text-foreground mb-4">Changes</h2>
                  <p className="font-semibold">
                  This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
                  </p>
                </section>

                <section>
                  <p className="text-sm font-semibold">
                    This privacy policy is effective as of 2024-06-30
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-extrabold text-foreground mb-4">Your Consent</h2>
                  <p className="font-semibold">
                  By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-extrabold text-foreground mb-4">Contact Us</h2>
                  <p className="font-semibold">
                    If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at dev.debojyotichakraborty@gmail.com.
                  </p>
                </section>

                <section>
                <Link href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank" className="text-sm font-semibold hover:underline">This privacy policy page was generated by App Privacy Policy Generator</Link>
                </section>
              </div>
            </BlurFade>
          </motion.div>
        </div>
      </main>
    </div>
  )
}