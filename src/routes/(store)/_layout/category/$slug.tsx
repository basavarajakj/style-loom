import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(store)/_layout/category/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(store)/_layout/category/$slug"!</div>
}
