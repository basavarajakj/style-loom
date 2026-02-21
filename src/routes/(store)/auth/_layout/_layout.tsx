import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(store)/auth/_layout/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(store)/auth/_layout/_layout"!</div>
}
