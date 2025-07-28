import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Download, CreditCard, Calendar } from "lucide-react"

const feeStructure = [
  {
    class: "Nursery - UKG",
    admissionFee: "₹5,000",
    tuitionFee: "₹8,000",
    developmentFee: "₹2,000",
    total: "₹15,000",
  },
  {
    class: "Class I - V",
    admissionFee: "₹7,000",
    tuitionFee: "₹10,000",
    developmentFee: "₹3,000",
    total: "₹20,000",
  },
  {
    class: "Class VI - VIII",
    admissionFee: "₹8,000",
    tuitionFee: "₹12,000",
    developmentFee: "₹3,500",
    total: "₹23,500",
  },
  {
    class: "Class IX - X",
    admissionFee: "₹10,000",
    tuitionFee: "₹15,000",
    developmentFee: "₹4,000",
    total: "₹29,000",
  },
  {
    class: "Class XI - XII",
    admissionFee: "₹12,000",
    tuitionFee: "₹18,000",
    developmentFee: "₹5,000",
    total: "₹35,000",
  },
]

const additionalFees = [
  { item: "Transport Fee (Per Month)", amount: "₹2,500" },
  { item: "Lunch Fee (Per Month)", amount: "₹1,800" },
  { item: "Activity Fee (Annual)", amount: "₹3,000" },
  { item: "Examination Fee (Per Term)", amount: "₹1,500" },
  { item: "Library Fee (Annual)", amount: "₹1,000" },
  { item: "Sports Fee (Annual)", amount: "₹2,000" },
]

export default function FeesPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fee Structure 2024-25</h1>
          <p className="text-xl text-gray-600">Transparent and affordable fee structure for quality education</p>
        </div>

        {/* Main Fee Structure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Annual Fee Structure</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Class</th>
                  <th className="px-6 py-4 text-left">Admission Fee</th>
                  <th className="px-6 py-4 text-left">Tuition Fee (Monthly)</th>
                  <th className="px-6 py-4 text-left">Development Fee</th>
                  <th className="px-6 py-4 text-left">Total (First Month)</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold">{fee.class}</td>
                    <td className="px-6 py-4">{fee.admissionFee}</td>
                    <td className="px-6 py-4">{fee.tuitionFee}</td>
                    <td className="px-6 py-4">{fee.developmentFee}</td>
                    <td className="px-6 py-4 font-bold text-blue-600">{fee.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Additional Fees */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Fees</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalFees.map((fee, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{fee.item}</span>
                    <span className="text-blue-600 font-bold">{fee.amount}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Payment Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                Payment Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span>Admission Fee: One-time payment at admission</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span>Tuition Fee: Monthly payment by 10th of each month</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span>Development Fee: Annual payment</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span>Late payment charges: ₹100 per day after due date</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span>Online Payment (Preferred)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span>Bank Transfer / NEFT</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span>Demand Draft</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span>Cash payment at school office</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Scholarships */}
        <Card className="mb-12 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800">Scholarship Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">Merit Scholarship</h3>
                <p className="text-sm text-gray-600">
                  Up to 50% fee waiver for students scoring above 95% in board exams
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">Need-based Scholarship</h3>
                <p className="text-sm text-gray-600">Financial assistance for economically disadvantaged students</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">Sports Scholarship</h3>
                <p className="text-sm text-gray-600">
                  Special concessions for students excelling in sports and representing the school
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download and Contact */}
        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 mr-4">
            <Download className="h-4 w-4 mr-2" />
            Download Fee Structure PDF
          </Button>
          <Button variant="outline">Contact Accounts Office</Button>
        </div>
      </div>
    </div>
  )
}
