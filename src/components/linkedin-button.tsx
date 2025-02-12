import { Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"

export function LinkedinButton() {

  return (
    <a href="https://www.linkedin.com/in/griffin-westerman-499780279" target="_blank">
      <Button variant="outline" size="icon" className="hover:cursor-pointer">
        <Linkedin />
      </Button>
    </a>
  )
}
