import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function App() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-background p-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            React + Tailwind + shadcn <Badge>New</Badge>
          </CardTitle>
          <CardDescription>Subscribe to updates.</CardDescription>
        </CardHeader>
        <div className="grid gap-2 px-(--card-spacing,1rem)">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <CardFooter className="gap-2">
          <Button>Subscribe</Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Learn more</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>About</DialogTitle>
                <DialogDescription>Built with Vite, React, Tailwind v4, shadcn/ui and Storybook.</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </main>
  )
}

export default App
