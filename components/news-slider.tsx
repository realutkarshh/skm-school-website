"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"

const newsItems = [
  {
    title: "Annual Sports Day 2024",
    date: "March 15, 2024",
    description: "Join us for our annual sports day celebration with various competitions and activities.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Science Exhibition Success",
    date: "March 10, 2024",
    description: "Our students showcased amazing science projects at the inter-school exhibition.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "New Computer Lab Inauguration",
    date: "March 5, 2024",
    description: "State-of-the-art computer lab with latest technology inaugurated for students.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Cultural Fest 2024",
    date: "February 28, 2024",
    description: "Students participated in various cultural activities showcasing their talents.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function NewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerView >= newsItems.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, newsItems.length - itemsPerView) : prev - 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {newsItems.map((item, index) => (
            <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-2">
              <Card className="h-full">
                <div className="relative h-48">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-transparent"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-transparent"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
