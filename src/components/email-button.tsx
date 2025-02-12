import { Mail } from 'lucide-react';
import { Button } from "@/components/ui/button"

export function EmailButton() {

  return (
    <a href="mailto:gxweste@gmail.com" target="_blank">
      <Button variant="outline" size="icon" className="hover:cursor-pointer">
        <Mail />
      </Button>
    </a>
  )
}
