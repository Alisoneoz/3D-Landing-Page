'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const ModelCard = ({ title, description, children }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="bg-black/50 backdrop-blur-sm border-neutral-800">
        <CardHeader>
          <CardTitle className="text-2xl text-white">{title}</CardTitle>
          <CardDescription className="text-neutral-400">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ModelCard
