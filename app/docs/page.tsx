import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Eye, ExternalLink } from "lucide-react"
import Link from "next/link"

// Simple array to manage documents - just add Google Drive links here
const documents = [
  {
    id: "certificates",
    title: "School Certificates",
    description: "Official certificates and accreditations",
    uploadDate: "2024-03-15",
    category: "Official Documents",
    // Replace with your actual Google Drive shareable link
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  {
    id: "prospectus",
    title: "School Prospectus 2024-25",
    description: "Complete information about admission process and curriculum",
    uploadDate: "2024-03-10",
    category: "Admission",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  {
    id: "annual-report",
    title: "Annual Report 2023-24",
    description: "Comprehensive annual report with achievements and statistics",
    uploadDate: "2024-03-05",
    category: "Reports",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  {
    id: "fee-structure",
    title: "Fee Structure 2024-25",
    description: "Detailed fee structure for all classes",
    uploadDate: "2024-02-28",
    category: "Financial",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  {
    id: "academic-calendar",
    title: "Academic Calendar 2024-25",
    description: "Complete academic calendar with important dates",
    uploadDate: "2024-02-25",
    category: "Academic",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  {
    id: "transport-rules",
    title: "Transport Rules & Regulations",
    description: "Guidelines for school transport services",
    uploadDate: "2024-02-20",
    category: "Policies",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
]

const categories = ["All", "Official Documents", "Admission", "Reports", "Financial", "Academic", "Policies"]

// Helper function to extract file ID from Google Drive link
function extractFileId(googleDriveLink: string): string {
  const match = googleDriveLink.match(/\/d\/([a-zA-Z0-9-_]+)/)
  return match ? match[1] : ""
}

// Helper function to get different Google Drive link formats
function getGoogleDriveLinks(googleDriveLink: string) {
  const fileId = extractFileId(googleDriveLink)
  return {
    preview: `https://drive.google.com/file/d/${fileId}/preview`,
    view: `https://drive.google.com/file/d/${fileId}/view`,
    download: `https://drive.google.com/uc?export=download&id=${fileId}`,
  }
}

export default function DocsPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mandatory Disclosure</h1>
          <p className="text-xl text-gray-600">Access and download important school documents and certificates</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => {
            const driveLinks = getGoogleDriveLinks(doc.googleDriveLink)
            return (
              <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{doc.title}</CardTitle>
                        <p className="text-sm text-blue-600 font-medium">{doc.category}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{doc.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>Google Drive</span>
                    <span>Updated: {doc.uploadDate}</span>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/docs/${doc.id}`} className="flex-1">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                    </Link>
                    <a href={driveLinks.download} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </a>
                    <a href={driveLinks.view} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div> // ✅ This closes the outermost <div>
  )
}
