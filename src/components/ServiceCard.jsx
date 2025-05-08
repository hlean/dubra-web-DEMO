import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "./ui/card"
import '../styles.css'

const ServiceCard = ({title, description, content, icon, bg, button }) => {
  return (
    <Card className={`w-[28vh] ${bg}`}>
        <CardHeader className="flex items-center gap-4">
          {icon && <div className="text-xl">{icon}</div>}
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-start mt-[-1rem]">
            <p>{content}</p>
            {button}
        </CardContent>
    </Card>
  )
}

export default ServiceCard