import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Clock, Target, Microscope, Calculator, Globe, Palette, Music } from "lucide-react"
import Image from "next/image"

const curriculumData = [
  {
    level: "Primary School (Nursery - Class V)",
    description: "Foundation years focusing on basic literacy, numeracy, and social skills",
    subjects: ["English", "Hindi", "Mathematics", "Environmental Studies", "Art & Craft", "Physical Education"],
    highlights: ["Play-based learning", "Activity-based curriculum", "Individual attention"],
  },
  {
    level: "Middle School (Class VI - VIII)",
    description: "Building strong academic foundation with introduction to specialized subjects",
    subjects: ["English", "Hindi", "Mathematics", "Science", "Social Studies", "Computer Science", "Art", "Music"],
    highlights: ["Project-based learning", "Science experiments", "Language development"],
  },
  {
    level: "High School (Class IX - X)",
    description: "Comprehensive preparation for board examinations with career guidance",
    subjects: ["English", "Hindi", "Mathematics", "Science", "Social Studies", "Computer Applications"],
    highlights: ["Board exam preparation", "Career counseling", "Skill development"],
  },
  {
    level: "Senior Secondary (Class XI - XII)",
    description: "Specialized streams preparing students for higher education and careers",
    subjects: ["Science Stream", "Commerce Stream", "Arts Stream"],
    highlights: ["Stream specialization", "College preparation", "Competitive exam coaching"],
  },
]

const facilities = [
  {
    icon: Microscope,
    title: "Science Laboratories",
    description: "Well-equipped Physics, Chemistry, and Biology labs with modern instruments",
  },
  {
    icon: Calculator,
    title: "Mathematics Lab",
    description: "Interactive learning environment for mathematical concepts and problem-solving",
  },
  {
    icon: Globe,
    title: "Language Lab",
    description: "Digital language learning facility for English and foreign languages",
  },
  {
    icon: BookOpen,
    title: "Digital Library",
    description: "Extensive collection of books, journals, and online resources",
  },
  {
    icon: Palette,
    title: "Art Studio",
    description: "Creative space for painting, sculpture, and various art forms",
  },
  {
    icon: Music,
    title: "Music Room",
    description: "Equipped with various instruments for music education and practice",
  },
]

export default function AcademicsPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Academics</h1>
          <p className="text-xl text-gray-600">
            Comprehensive education program designed to nurture academic excellence and holistic development
          </p>
        </div>

        {/* Academic Philosophy */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Academic Philosophy</h2>
              <p className="text-gray-600 mb-4">
                At SKM Public School, we believe in providing a balanced education that combines academic rigor with
                practical application. Our curriculum is designed to develop critical thinking, creativity, and
                problem-solving skills while maintaining strong foundational knowledge.
              </p>
              <p className="text-gray-600 mb-6">
                We follow a student-centered approach that recognizes individual learning styles and paces, ensuring
                that every student reaches their full potential through personalized attention and innovative teaching
                methodologies.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Pass Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">15:1</div>
                  <div className="text-sm text-gray-600">Student-Teacher Ratio</div>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Students in Classroom"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Curriculum Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Curriculum Structure</h2>
          <div className="space-y-8">
            {curriculumData.map((level, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-xl text-blue-800">{level.level}</CardTitle>
                  <p className="text-gray-600">{level.description}</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Core Subjects:</h4>
                      <div className="flex flex-wrap gap-2">
                        {level.subjects.map((subject, idx) => (
                          <Badge key={idx} variant="secondary">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {level.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <Target className="h-3 w-3 text-blue-600 mr-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Academic Facilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Academic Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <facility.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Assessment & Evaluation */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Assessment"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Assessment & Evaluation</h2>
              <p className="text-gray-600 mb-6">
                Our comprehensive assessment system evaluates students through multiple parameters to ensure holistic
                development and accurate progress tracking.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Continuous Assessment</h4>
                    <p className="text-gray-600 text-sm">Regular quizzes, assignments, and projects</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Periodic Examinations</h4>
                    <p className="text-gray-600 text-sm">Mid-term and final examinations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Skill Assessment</h4>
                    <p className="text-gray-600 text-sm">Practical skills and application-based evaluation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">Portfolio Assessment</h4>
                    <p className="text-gray-600 text-sm">Collection of student work and achievements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Calendar */}
        <section className="mb-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Academic Calendar 2024-25</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">First Term</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Session Begins:</span>
                    <span className="font-semibold">April 1, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mid-term Exam:</span>
                    <span className="font-semibold">June 15-25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Term End:</span>
                    <span className="font-semibold">September 30</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Second Term</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Term Begins:</span>
                    <span className="font-semibold">October 1, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mid-term Exam:</span>
                    <span className="font-semibold">December 10-20</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Final Exam:</span>
                    <span className="font-semibold">March 1-15</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Important Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Sports Day:</span>
                    <span className="font-semibold">November 15</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Function:</span>
                    <span className="font-semibold">December 25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Science Fair:</span>
                    <span className="font-semibold">February 10</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Academic Achievements */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Academic Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Board Exam Pass Rate</p>
            </div>
            <div>
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-600">University Admission Rate</p>
            </div>
            <div>
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Academic Awards</p>
            </div>
            <div>
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">38</div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
