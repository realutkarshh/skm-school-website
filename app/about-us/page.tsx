import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, BookOpen, Target, Eye, Heart } from "lucide-react"
import Image from "next/image"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About SKM Public School</h1>
            <p className="text-xl">Shaping Minds, Building Futures Since 1985</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About SKM Public School</h2>
              <p className="text-gray-600 mb-4">
                Located in Dadhi Pakaria, Shambhuganj, Banka district, Bihar-813211, our school is a vibrant,
                technology-driven institution set within an ultra-modern campus. It is thoughtfully designed to meet the
                needs of new-generation learners, offering aesthetically crafted classrooms, state-of-the-art
                infrastructure, and a nurturing, child-friendly atmosphere that ensures a safe and stimulating learning
                environment.
              </p>
              <p className="text-gray-600 mb-4">
                Our school embodies the evolving face of global education. Guided by the latest educational research, we
                adopt innovative teaching methodologies that go beyond academics. We place strong emphasis on
                extra-curricular and co-curricular activities, sports, and communication skills to foster holistic
                development.
              </p>
              <p className="text-gray-600 mb-6">
                Core values are seamlessly integrated into our curriculum, helping students develop a positive mindset,
                a deep appreciation for diversity, and a sense of social responsibility. We introduce students to
                India's rich cultural heritage, encouraging them to honour traditions while making thoughtful, ethical
                choices.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Our Motto: "Humanity First"</h3>
                <p className="text-blue-700 text-sm">
                  Our guiding philosophy drives our mission to nurture young minds into confident, compassionate, and
                  capable future leaders — ready to make their mark on the world.
                </p>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="SKM Public School Campus in Banka, Bihar"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                Guided by our motto "Humanity First", we provide comprehensive education that develops intellectual
                curiosity, critical thinking, and moral values. We nurture young minds into confident, compassionate,
                and capable future leaders through innovative teaching methodologies and holistic development.
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be a leading technology-driven educational institution that embodies the evolving face of global
                education. We aim to create new-generation learners who appreciate diversity, embrace India's rich
                cultural heritage, and make thoughtful, ethical choices while being ready to make their mark on the
                world.
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-600">
                Humanity First, Innovation, Cultural Heritage, Diversity, Social Responsibility, and Ethical Leadership.
                These core values are seamlessly integrated into our curriculum, helping students develop a positive
                mindset and preparing them to be compassionate global citizens.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {/* <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="relative h-48 w-48 mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Chairman"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Mr. Rajesh Kumar</h3>
                <p className="text-blue-600 font-semibold mb-2">Chairman</p>
                <p className="text-gray-600 text-sm">
                  Leading the institution with over 25 years of experience in education management.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="relative h-48 w-48 mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Principal"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Dr. Priya Sharma</h3>
                <p className="text-blue-600 font-semibold mb-2">Principal</p>
                <p className="text-gray-600 text-sm">
                  PhD in Education with 20 years of teaching and administrative experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="relative h-48 w-48 mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Vice Principal"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Mr. Amit Gupta</h3>
                <p className="text-blue-600 font-semibold mb-2">Vice Principal</p>
                <p className="text-gray-600 text-sm">
                  Masters in Science Education, specializing in curriculum development and innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Statistics */}
      {/* <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">SKM by Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">38</div>
              <p className="text-blue-100">Years of Excellence</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2000+</div>
              <p className="text-blue-100">Students</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <p className="text-blue-100">Faculty Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-blue-100">University Admission Rate</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose SKM Public School?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Academic Excellence</h3>
                  <p className="text-gray-600">
                    Rigorous curriculum aligned with national standards and international best practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <Users className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Experienced Faculty</h3>
                  <p className="text-gray-600">Highly qualified and dedicated teachers committed to student success.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Holistic Development</h3>
                  <p className="text-gray-600">
                    Focus on academics, sports, arts, and character building for well-rounded development.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Happy Students"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
