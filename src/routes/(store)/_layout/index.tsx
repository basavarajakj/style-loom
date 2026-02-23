import FeatureGrid from '@/components/templates/store/homepage/feature-grid';
import Hero from '@/components/templates/store/homepage/hero';
import { createFileRoute } from '@tanstack/react-router';


export const Route = createFileRoute('/(store)/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='min-h-screen'>
    <Hero />
    <FeatureGrid />
  </div>
}
