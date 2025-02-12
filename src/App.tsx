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
          <div className="flex justify-start items-start flex-col mt-20 pl-[50%]">
            <div className="text-[40px] font-bold">Griffin Westerman</div>
            <div className="text-lg">Software Developer</div>
            <div className="space-y-5 mt-5">
              <div className="flex items-center justify-start gap-5">
                <GithubButton />
                <ModeToggle />
              </div>
              <Carousel />
            </div>
          </div>
          <ScrollArea className="w-full max-h-screen py-20 pr-[30%]">
            <div className="space-y-10">
              <div className="w-fit h-fit rounded-md p-5">
                <p>
                  Howdy y'all. I graduated from the U of M in 2023, and have worked as a Software Developer at Nagios since.
                  I contributed to and even lead major releases of enterprise products, helping to move software more than a decade forward.
                </p>
                <br/>
                <p>I'm dedicated to learning as much as I can wherever I go.</p>
                <br/>
                <p>I'm also a classically trained cellist and love the arts and the outdoors. Hmu if you wanna play tennis sometime.</p>
              </div>
              <div className="w-full h-fit rounded-md p-5 hover:bg-secondary flex gap-5">
                <div className="text-primary/60">August 2023 - Present</div>
                <div className="space-y-2">
                  <div>Full Stack Software Developer - Nagios</div>
                  <div className="ml-3 text-foreground/80">
                    <li>Led the frontend overhaul of Nagios Log Server, rewriting a PHP codebase to a React app leveraging tailwind, shadcn, react router, and much more</li>
                    <li>Co-led the complete overhaul of Nagios Log Server, converting an Elasticsearch backend to Opensearch, and modernizing the UI and UX</li>
                    <li>Developed numerous features and resolved even more bugs for the Nagios suite of products, consistently working with both the frontend and backend</li>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
