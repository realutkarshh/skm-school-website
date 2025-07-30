import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Award, Users, BookOpen, Building, ListRestart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ImageSlider from "@/components/image-slider"
import NewsSlider from "@/components/news-slider"
import ComputerLab from "@/public/computerLab.jpg"
import ScienceLab from "@/public/scienceLab.jpg"
import AboutUsLanding from "@/public/aboutUsLanding.jpg"
import Library from "@/public/Library.jpg"


export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Image Slider */}
      <section className="relative h-[600px] overflow-hidden">
        <ImageSlider />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to SKM Public School</h1>
            <p className="text-xl md:text-2xl mb-4">"Humanity First" - Excellence in Education Since 2010</p>
            <p className="text-lg mb-8">Banka, Bihar | Technology-Driven Learning</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Explore Our Campus
            </Button>
          </div>
        </div>
      </section>

      {/* About School Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About SKM Public School</h2>
              <p className="text-gray-600 mb-4">
                Located in Dadhi Pakaria, Shambhuganj, Banka district, Bihar, our school is a vibrant, technology-driven
                institution set within an ultra-modern campus designed for new-generation learners.
              </p>
              <p className="text-gray-600 mb-4">
                We embody the evolving face of global education, adopting innovative teaching methodologies that go
                beyond academics. Our strong emphasis on extra-curricular activities, sports, and communication skills
                ensures holistic development of every student.
              </p>
              <p className="text-gray-600 mb-6">
                Guided by our motto "Humanity First", we integrate core values into our curriculum, helping students
                develop a positive mindset, appreciate diversity, and embrace social responsibility while honoring
                India's rich cultural heritage.
              </p>
              <Link href="/about-us">
                <Button className="bg-blue-600 hover:bg-blue-700">Learn More About Us</Button>
              </Link>
            </div>
            <div className="relative h-96">
              <Image
                src={AboutUsLanding}
                alt="SKM Public School Ultra-Modern Campus in Banka, Bihar"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Infrastructure</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={ComputerLab}
                  alt="Smart Classrooms"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Computer Lab</h3>
                <p className="text-gray-600">
                  State-of-the-art computer lab equipped with modern teaching aids.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src={ScienceLab} alt="Science Labs" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Science Laboratories</h3>
                <p className="text-gray-600">
                  Well-equipped physics, chemistry, and biology labs for hands-on learning experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src={Library} alt="Library" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Library</h3>
                <p className="text-gray-600">
                  Extensive collection of books, journals, and digital resources for comprehensive learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News and Events Section */}
      {/* <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">News & Events</h2>
          <NewsSlider />
        </div>
      </section> */}

      {/* Chairman Section */}
      {/* <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Chairman"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Message from Chairman</h2>
              <h3 className="text-xl text-blue-600 font-semibold mb-4">Mr. Rajesh Kumar</h3>
              <p className="text-gray-600 mb-4">
                "Education is the most powerful weapon which you can use to change the world. At SKM Public School, we
                believe in nurturing not just academic excellence but also character development and moral values."
              </p>
              <p className="text-gray-600">
                "Our commitment is to provide every student with opportunities to discover their potential and achieve
                their dreams. We strive to create global citizens who will contribute positively to society."
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Achievements Section */}
      {/* <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">50+</h3>
              <p className="text-gray-600">Awards Won</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">2000+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">100%</h3>
              <p className="text-gray-600">Pass Rate</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">38</h3>
              <p className="text-gray-600">Years Legacy</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Dadhi Pakaria, Shambhuganj, Banka district, Bihar-813211</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Admission/General Inquiry : +91 6205781139</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Principal Office : +91 9031626286</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Director Office : +91 9955932207</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span>principal.skmps@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span>skmpakaria@gmail.com</span>
                </div>
              </div>

              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Interactive Map will be embedded here</p>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Phone Number" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={4} />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
