"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, Share2, FileText, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Same document data as in the main docs page
const documentData: Record<string, any> = {
  "certificate1": {
    title: "AFFILIATION/UPGRADATION LETTER",
    description: "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION. Official certificates and accreditations of SKM Public School",
    uploadDate: "2024-03-15",
    category: "DOCUMENTS AND INFORMATION",
    content:
      "This document contains all the official certificates and accreditations received by SKM Public School from various educational boards and government authorities.",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  "certificate2": {
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "DOCUMENTS AND INFORMATION",
    content:
      "The school prospectus provides comprehensive information about our admission process, curriculum, facilities, and fee structure for the academic year 2024-25.",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  "certificate3": {
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "DOCUMENTS AND INFORMATION",
    content:
      "The school prospectus provides comprehensive information about our admission process, curriculum, facilities, and fee structure for the academic year 2024-25.",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  "certificate4": {
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "DOCUMENTS AND INFORMATION",
    content:
      "The school prospectus provides comprehensive information about our admission process, curriculum, facilities, and fee structure for the academic year 2024-25.",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  "certificate5": {
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "DOCUMENTS AND INFORMATION",
    content:
      "The school prospectus provides comprehensive information about our admission process, curriculum, facilities, and fee structure for the academic year 2024-25.",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  "certificate6": {
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "DOCUMENTS AND INFORMATION",
    content:
      "The school prospectus provides comprehensive information about our admission process, curriculum, facilities, and fee structure for the academic year 2024-25.",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  "certificate7": {
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "DOCUMENTS AND INFORMATION",
    content:
      "The school prospectus provides comprehensive information about our admission process, curriculum, facilities, and fee structure for the academic year 2024-25.",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  "certificate8": {
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "DOCUMENTS AND INFORMATION",
    content:
      "The school prospectus provides comprehensive information about our admission process, curriculum, facilities, and fee structure for the academic year 2024-25.",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  "certificateC1": {
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "RESULT AND ACADEMICS",
    content:
      "The school prospectus provides comprehensive information about our admission process, curriculum, facilities, and fee structure for the academic year 2024-25.",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  "certificateC2": {
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "RESULT AND ACADEMICS",
    content:
      "The school prospectus provides comprehensive information about our admission process, curriculum, facilities, and fee structure for the academic year 2024-25.",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  "certificateC3": {
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "RESULT AND ACADEMICS",
    content:
      "The school prospectus provides comprehensive information about our admission process, curriculum, facilities, and fee structure for the academic year 2024-25.",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  "certificateC4": {
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "RESULT AND ACADEMICS",
    content:
      "The school prospectus provides comprehensive information about our admission process, curriculum, facilities, and fee structure for the academic year 2024-25.",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  "certificateC5": {
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "RESULT AND ACADEMICS",
    content:
      "The school prospectus provides comprehensive information about our admission process, curriculum, facilities, and fee structure for the academic year 2024-25.",
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
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Document Not Found</h1>
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
    <div className="min-h-screen py-4 md:py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header - Mobile Responsive */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
          <Link href="/docs">
            <Button variant="outline" className="w-full sm:w-auto">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Documents
            </Button>
          </Link>
          
          {/* Action buttons - Stack on mobile */}
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto"
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
              <Share2 className="h-4 w-4 mr-2" />
              <span className="sm:hidden">Share Document</span>
            </Button>
            <a href={driveLinks.download} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </a>
            <a href={driveLinks.view} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Open in Drive</span>
                <span className="sm:hidden">Drive</span>
              </Button>
            </a>
          </div>
        </div>

        {/* Document Info - Mobile Responsive */}
        <Card className="mb-6 md:mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-start">
              <div className="bg-blue-100 p-3 rounded-lg mb-4 sm:mb-0 sm:mr-4">
                <FileText className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl md:text-2xl mb-2">{document.title}</CardTitle>
                <p className="text-gray-600 mb-4 text-sm md:text-base">{document.description}</p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 text-xs md:text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded w-fit">{document.category}</span>
                  <span>Updated: {document.uploadDate}</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded w-fit">Google Drive</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-sm md:text-base">{document.content}</p>
          </CardContent>
        </Card>

        {/* Google Drive PDF Viewer - Mobile Responsive */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Document Preview</CardTitle>
            <p className="text-xs md:text-sm text-gray-600">
              Powered by Google Drive - If the preview doesn't load, click "Open in Drive" above
            </p>
          </CardHeader>
          <CardContent>
            <div className="relative w-full" style={{ height: "400px" }}>
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
            
            {/* Mobile: Stack buttons vertically, Desktop: Side by side */}
            <div className="mt-4 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
              <a href={driveLinks.view} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Full Screen
                </Button>
              </a>
              <a href={driveLinks.download} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Related Documents - Mobile Responsive */}
        <div className="mt-8 md:mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Related Documents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4">
            {Object.entries(documentData)
              .filter(([key]) => key !== slug)
              .slice(0, 4)
              .map(([key, doc]) => (
                <Link key={key} href={`/docs/${key}`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-3 md:p-4">
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-2 rounded mr-3 flex-shrink-0">
                          <FileText className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm md:text-base truncate">{doc.title}</h3>
                          <p className="text-xs md:text-sm text-gray-500">{doc.category}</p>
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
