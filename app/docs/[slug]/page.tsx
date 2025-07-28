"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, Share2, FileText, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Same document data as in the main docs page
const documentData: Record<string, any> = {
  certificates: {
    title: "School Certificates",
    description: "Official certificates and accreditations of SKM Public School",
    uploadDate: "2024-03-15",
    category: "Official Documents",
    content:
      "This document contains all the official certificates and accreditations received by SKM Public School from various educational boards and government authorities.",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  prospectus: {
    title: "School Prospectus 2024-25",
    description: "Complete information about admission process and curriculum",
    uploadDate: "2024-03-10",
    category: "Admission",
    content:
      "The school prospectus provides comprehensive information about our admission process, curriculum, facilities, and fee structure for the academic year 2024-25.",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  "annual-report": {
    title: "Annual Report 2023-24",
    description: "Comprehensive annual report with achievements and statistics",
    uploadDate: "2024-03-05",
    category: "Reports",
    content:
      "Our annual report showcases the achievements, academic performance, infrastructure developments, and financial highlights of the academic year 2023-24.",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  "fee-structure": {
    title: "Fee Structure 2024-25",
    description: "Detailed fee structure for all classes",
    uploadDate: "2024-02-28",
    category: "Financial",
    content:
      "Complete fee structure document containing tuition fees, additional charges, and payment schedules for all classes from Nursery to Class XII.",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  "academic-calendar": {
    title: "Academic Calendar 2024-25",
    description: "Complete academic calendar with important dates",
    uploadDate: "2024-02-25",
    category: "Academic",
    content:
      "The academic calendar includes all important dates such as term schedules, examination dates, holidays, and special events for the academic year 2024-25.",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  "transport-rules": {
    title: "Transport Rules & Regulations",
    description: "Guidelines for school transport services",
    uploadDate: "2024-02-20",
    category: "Policies",
    content:
      "This document outlines the rules, regulations, and safety guidelines for students using school transport services.",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
}

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

export default function DocumentPage() {
  const params = useParams()
  const slug = params.slug as string
  const document = documentData[slug]

  if (!document) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Document Not Found</h1>
          <p className="text-gray-600 mb-6">The requested document could not be found.</p>
          <Link href="/docs">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Documents
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const driveLinks = getGoogleDriveLinks(document.googleDriveLink)

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/docs">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Documents
            </Button>
          </Link>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: document.title,
                    text: document.description,
                    url: window.location.href,
                  })
                } else {
                  navigator.clipboard.writeText(window.location.href)
                  alert("Link copied to clipboard!")
                }
              }}
            >
              <Share2 className="h-4 w-4" />
            </Button>
            <a href={driveLinks.download} target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </a>
            <a href={driveLinks.view} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Open in Drive
              </Button>
            </a>
          </div>
        </div>

        {/* Document Info */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">{document.title}</CardTitle>
                <p className="text-gray-600 mb-4">{document.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{document.category}</span>
                  <span>Updated: {document.uploadDate}</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Google Drive</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{document.content}</p>
          </CardContent>
        </Card>

        {/* Google Drive PDF Viewer */}
        <Card>
          <CardHeader>
            <CardTitle>Document Preview</CardTitle>
            <p className="text-sm text-gray-600">
              Powered by Google Drive - If the preview doesn't load, click "Open in Drive" above
            </p>
          </CardHeader>
          <CardContent>
            <div className="relative w-full" style={{ height: "600px" }}>
              <iframe
                src={driveLinks.preview}
                width="100%"
                height="100%"
                frameBorder="0"
                className="rounded-lg border"
                title={`Preview of ${document.title}`}
                allow="autoplay"
              />
            </div>
            <div className="mt-4 flex justify-center gap-4">
              <a href={driveLinks.view} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Full Screen
                </Button>
              </a>
              <a href={driveLinks.download} target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Related Documents */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Documents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(documentData)
              .filter(([key]) => key !== slug)
              .slice(0, 4)
              .map(([key, doc]) => (
                <Link key={key} href={`/docs/${key}`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-2 rounded mr-3">
                          <FileText className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm">{doc.title}</h3>
                          <p className="text-xs text-gray-500">{doc.category}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
