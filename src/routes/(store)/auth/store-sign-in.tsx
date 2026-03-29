import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(store)/auth/store-sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(store)/auth/"!</div>
}
