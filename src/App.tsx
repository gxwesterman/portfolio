import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle} from '@/components/mode-toggle'
import { GithubButton} from '@/components/github-button'
import { LinkedinButton} from '@/components/linkedin-button'
import { EmailButton } from '@/components/email-button'
import { Carousel } from '@/components/carousel'
import { ScrollArea } from "@/components/ui/scroll-area"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-auto h-auto">
        <ScrollArea className="w-full h-screen">
          <div className="lg:flex lg:justify-between w-full gap-20 px-20 mx-auto max-w-screen-xl">
            <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-start py-25">
              <div className="text-[40px] font-bold">Griffin Westerman</div>
              <div className="text-lg">Software Developer</div>
              <div className="space-y-5 mt-5 w-full">
                <div className="flex items-center justify-start gap-5 relative">
                  <GithubButton />
                  <LinkedinButton />
                  <EmailButton />
                  <ModeToggle />
                </div>
                <Carousel />
              </div>
            </div>
            <div className="space-y-10 lg:w-1/2 lg:py-25">
              <div className="w-fit h-fit rounded-md">
                <p>
                  Howdy y'all. I graduated from college in 2023, and I have worked as a Software Developer at Nagios since.
                  I contributed to and even lead major releases of enterprise products, helping to move software more than a decade forward.
                </p>
                <br/>
                <p>I'm dedicated to learning as much as I can wherever I go.</p>
                <br/>
                <p>I'm also a classically trained cellist and love the arts and the outdoors. Hmu if you wanna play tennis sometime.</p>
              </div>
              <div className="w-full h-fit rounded-md p-5 mb-5 bg-secondary/50 flex gap-5 hover:scale-[1.02] transition-transform">
                <div className="text-foreground/70 font-bold min-w-20 max-w-20">August 2023 - Present</div>
                <div className="space-y-2">
                  <div className="font-bold">Full Stack Software Developer - Nagios</div>
                  <div className="ml-3 text-foreground/80">
                    <li>Led the frontend overhaul of Nagios Log Server, rewriting a PHP codebase to a React app leveraging tailwind, shadcn, react router, and much more</li>
                    <li>Co-led the complete overhaul of Nagios Log Server, converting an Elasticsearch backend to Opensearch, and modernizing the UI and UX</li>
                    <li>Developed numerous features and resolved even more bugs for the Nagios suite of products, consistently working with both the frontend and backend</li>
                  </div>
                </div>
              </div>
              <div className="w-full h-fit rounded-md p-5 mb-5 bg-secondary/50 flex gap-5 hover:scale-[1.02] transition-transform">
                <div className="text-foreground/70 font-bold min-w-20 max-w-20">Graduated May 2023</div>
                <div className="space-y-2">
                  <div className="font-bold">Bachelor of Science in Computer Science - U of M</div>
                  <div className="ml-3 text-foreground/80">
                    <li>Implemented K-means clustering using Cuda, OpenMP, and MPI in C</li>
                    <li>Created many browser-based games using typescript and gfx libraries</li>
                    <li>Worked within a team to develop an automated drone simulation in C++ and JS</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </ThemeProvider>
  )
}

export default App
