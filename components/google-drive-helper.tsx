"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, CheckCircle } from "lucide-react"

export default function GoogleDriveHelper() {
  const [driveLink, setDriveLink] = useState("")
  const [copied, setCopied] = useState(false)

  const extractFileId = (link: string) => {
    const match = link.match(/\/d\/([a-zA-Z0-9-_]+)/)
    return match ? match[1] : ""
  }

  const generateLinks = () => {
    const fileId = extractFileId(driveLink)
    if (!fileId) return null

    return {
      preview: `https://drive.google.com/file/d/${fileId}/preview`,
      view: `https://drive.google.com/file/d/${fileId}/view`,
      download: `https://drive.google.com/uc?export=download&id=${fileId}`,
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const links = generateLinks()

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Google Drive Link Converter</CardTitle>
        <p className="text-sm text-gray-600">
          Paste your Google Drive shareable link to get the preview and download links
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Google Drive Shareable Link:</label>
          <Input
            placeholder="https://drive.google.com/file/d/FILE_ID/view?usp=sharing"
            value={driveLink}
            onChange={(e) => setDriveLink(e.target.value)}
          />
        </div>

        {links && (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Preview Link (for iframe):</label>
              <div className="flex gap-2">
                <Input value={links.preview} readOnly className="text-xs" />
                <Button size="sm" variant="outline" onClick={() => copyToClipboard(links.preview)}>
                  {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">View Link (opens in new tab):</label>
              <div className="flex gap-2">
                <Input value={links.view} readOnly className="text-xs" />
                <Button size="sm" variant="outline" onClick={() => copyToClipboard(links.view)}>
                  {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Download Link:</label>
              <div className="flex gap-2">
                <Input value={links.download} readOnly className="text-xs" />
                <Button size="sm" variant="outline" onClick={() => copyToClipboard(links.download)}>
                  {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
