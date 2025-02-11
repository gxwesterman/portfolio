import { Github } from "lucide-react"

import { Button } from "@/components/ui/button"

export function GithubButton() {

  return (
    <a href="https://github.com/gxwesterman" target="_blank">
      <Button variant="outline" size="icon" className="hover:cursor-pointer">
        <Github/>
      </Button>
    </a>
  )
}
