"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Eye, ExternalLink } from "lucide-react"
import Link from "next/link"

// Simple array to manage documents - just add Google Drive links here
const documents = [
  {
    id: "certificate1",
    title: "AFFILIATION/UPGRADATION LETTER",
    description: "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION.",
    uploadDate: "2024-03-15",
    category: "DOCUMENTS AND INFORMATION",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  {
    id: "certificate2",
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "DOCUMENTS AND INFORMATION",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  {
    id: "certificate3",
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "DOCUMENTS AND INFORMATION",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  {
    id: "certificate4",
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "DOCUMENTS AND INFORMATION",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  {
    id: "certificate5",
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "DOCUMENTS AND INFORMATION",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  {
    id: "certificate6",
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "DOCUMENTS AND INFORMATION",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  {
    id: "certificate7",
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "DOCUMENTS AND INFORMATION",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  {
    id: "certificate8",
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "DOCUMENTS AND INFORMATION",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  {
    id: "certificateC1",
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "RESULT AND ACADEMICS",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  {
    id: "certificateC2",
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "RESULT AND ACADEMICS",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  {
    id: "certificateC3",
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "RESULT AND ACADEMICS",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  {
    id: "certificateC4",
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "RESULT AND ACADEMICS",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  {
    id: "certificateC5",
    title: "TRUST CERTIFICATE",
    description: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    uploadDate: "2024-03-10",
    category: "RESULT AND ACADEMICS",
    googleDriveLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
  },
  
]

const categories = ["All", "DOCUMENTS AND INFORMATION", "RESULT AND ACADEMICS"]

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
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Filter documents based on selected category
  const filteredDocuments = selectedCategory === "All" 
    ? documents 
    : documents.filter(doc => doc.category === selectedCategory)

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
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Documents - Responsive Layout */}
        <div className="hidden md:block">
          {/* Desktop: Rectangular Cards with Preview */}
          <div className="space-y-6">
            {filteredDocuments.map((doc) => {
              const driveLinks = getGoogleDriveLinks(doc.googleDriveLink)
              return (
                <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                  <div className="flex">
                    {/* PDF Preview Section - Desktop Only */}
                    <div className="w-80 h-64 flex-shrink-0 bg-gray-100 rounded-l-lg overflow-hidden">
                      <iframe
                        src={driveLinks.preview}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        className="object-cover"
                        title={`Preview of ${doc.title}`}
                        style={{ pointerEvents: 'none' }}
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-1 p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center">
                            <div className="bg-blue-100 p-2 rounded-lg mr-3">
                              <FileText className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{doc.title}</CardTitle>
                              <p className="text-sm text-blue-600 font-medium">{doc.category}</p>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-0">
                        <p className="text-gray-600 mb-4">{doc.description}</p>
                        <div className="flex justify-between text-sm text-gray-500 mb-6">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Google Drive</span>
                          <span>Updated: {doc.uploadDate}</span>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <Link href={`/docs/${doc.id}`} className="flex-1">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                              <Eye className="h-4 w-4 mr-2" />
                              View Full Document
                            </Button>
                          </Link>
                          <a href={driveLinks.download} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="px-4">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </a>
                          <a href={driveLinks.view} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="px-4">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Open in Drive
                            </Button>
                          </a>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Mobile: Square Cards without Preview */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredDocuments.map((doc) => {
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
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Google Drive</span>
                      <span>Updated: {doc.uploadDate}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link href={`/docs/${doc.id}`} className="w-full">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                      </Link>
                      <div className="flex gap-2">
                        <a href={driveLinks.download} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button variant="outline" className="w-full">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </a>
                        <a href={driveLinks.view} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button variant="outline" className="w-full">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Drive
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* No Results Message */}
        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No documents found</h3>
            <p className="text-gray-500">No documents match the selected category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
