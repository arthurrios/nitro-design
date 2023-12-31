/* eslint-disable @next/next/no-img-element */
import { MoveRight } from 'lucide-react'
import { ProgressCircle } from './components/progress-circle'
import { Button, ButtonIcon, ButtonText } from 'ui'

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-t from-marine-600 to-marine-500 px-6 py-5 flex flex-col gap-8 md:flex-row-reverse md:justify-between md:items-center">
        <img
          src="https://github.com/arthurrios.png"
          alt="profile photo"
          className="rounded-full h-16 w-16 self-end"
        />
        <span className="text-2xl font-bold leading-heading text-mirage-50">
          Dashboard
        </span>
      </div>

      <main className="p-6 flex flex-col gap-4">
        <span className="text-lg font-bold leading-heading">Collections</span>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
          {Array.from({ length: 12 }).map((_, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-5 py-6 px-5 rounded-lg border border-mirage-100 shadow-lg transition-transform hover:scale-[1.025] duration-300"
              >
                <span className="font-bold text-sm text-mirage-600 leading-heading">
                  JAVASCRIPT
                </span>
                <div className="space-y-2">
                  <h2 className="font-bold leading-heading">
                    Javascript Fundamentals
                  </h2>
                  <p className="text-smoke-800 text-sm leading-base">
                    Train your knowledge in Javascript fundamentals like Arrays,
                    variables, conditionals and loops iterations.
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <Button>
                    <ButtonText>Access Collection</ButtonText>
                    <ButtonIcon icon={MoveRight} />
                  </Button>

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6">
                      <ProgressCircle progress={50} />
                    </div>
                    <span className="text-smoke-600 text-sm leading-base">
                      8/16
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
