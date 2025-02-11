import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle} from '@/components/mode-toggle'
import { GithubButton} from '@/components/github-button'
import { ScrollArea } from "@/components/ui/scroll-area"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-auto h-auto">
        <div className="grid grid-cols-2 mx-[10%] gap-20 mt-20">
          <div className="flex justify-start items-end flex-col">
            <div className="text-[40px] font-bold">Griffin Westerman</div>
            <div>Software Developer</div>
            <div className="flex items-center justify-end gap-2 mt-5">
              <GithubButton />
              <ModeToggle />
            </div>
          </div>
          <ScrollArea className="w-full max-h-screen h-3/4">
            <div className="w-full h-50 border border-border rounded-md mb-5"></div>
            <div className="w-full h-50 border border-border rounded-md mb-5"></div>
            <div className="w-full h-50 border border-border rounded-md mb-5"></div>
            <div className="w-full h-50 border border-border rounded-md mb-5"></div>
            <div className="w-full h-50 border border-border rounded-md"></div>
          </ScrollArea>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
