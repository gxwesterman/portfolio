import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle} from '@/components/mode-toggle'
import { GithubButton} from '@/components/github-button'
import { Carousel } from '@/components/carousel'
import { ScrollArea } from "@/components/ui/scroll-area"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-auto h-auto">
        <div className="grid grid-cols-2 gap-20">
          <div className="flex justify-start items-end flex-col mt-20 pl-[20%]">
            <div className="text-[40px] font-bold">Griffin Westerman</div>
            <div>Software Developer</div>
            <div className="space-y-5 mt-5">
              <div className="flex items-center justify-end gap-5">
                <GithubButton />
                <ModeToggle />
              </div>
              <Carousel />
            </div>
          </div>
          <ScrollArea className="w-full max-h-screen py-20 pr-[20%]">
            <div>
              <div className="w-full h-50 rounded-md mb-10 p-5">
                <p>
                  Howdy y'all. I graduated from the U of M in 2023, and have worked as a Software Developer at Nagios since.
                  I contributed to and even lead major releases of enterprise products, helping to move software more than a decade forward.
                </p>
                <br/>
                <p>I'm dedicated to learning as much as I can wherever I go.</p>
                <br/>
                <p>I'm also a classically trained cellist and love the arts and the outdoors. Hmu if you wanna play tennis sometime.</p>
              </div>
              <div className="w-full h-50 rounded-md mb-5 p-5 hover:bg-orange-400/30">test</div>
              <div className="w-full h-50 rounded-md mb-5 p-5 hover:bg-orange-400/30">test</div>
              <div className="w-full h-50 rounded-md mb-5 p-5 hover:bg-orange-400/30">test</div>
              <div className="w-full h-50 rounded-md p-5 hover:bg-orange-400/30">test</div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
