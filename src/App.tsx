import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle} from '@/components/mode-toggle';
import { GithubButton} from '@/components/github-button';

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen h-screen">
        <div className="flex items-center justify-end p-4 gap-2">
          <GithubButton />
          <ModeToggle />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
