import { CalendarIcon, MapPinIcon, PackageIcon, TruckIcon } from 'lucide-react';

interface TrackingDetailsCardProps {
  carrier: string;
  trackingNumber: string;
  currentLocation: string;
  estimatedDelivery: string;
  packageInfo?: {
    weight?: string;
    dimensions?: string;
  };
}

export default function TrackingDetailsCard({
  carrier,
  trackingNumber,
  currentLocation,
  estimatedDelivery,
  packageInfo,
}: TrackingDetailsCardProps) {
  return (
    <div className='rounded-lg border bg-card p-6 shadow'>
      <h3 className='mb-4 font-semibold text-xl'>Tracking details</h3>
      <div className='space-y-3'>
        <div className='flex items-center gap-3'>
          <TruckIcon className='mt-0.5 h-5 w-5 text-primary' />
          <div>
            <p className='font-medium text-base text-foreground'>Carrier</p>
            <p className='text-muted-foreground text-sm'>{carrier}</p>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <PackageIcon className='mt-0.5 h-5 w-5 text-primary' />
          <div>
            <p className='font-medium text-base text-foreground'>
              Tracking Number
            </p>
            <p className='text-muted-foreground text-sm'>{trackingNumber}</p>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <MapPinIcon className='mt-0.5 h-5 w-5 text-primary' />
          <div>
            <p className='font-medium text-base text-foreground'>
              Current Location
            </p>
            <p className='text-muted-foreground text-sm'>{currentLocation}</p>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <CalendarIcon className='mt-0.5 h-5 w-5 text-primary' />
          <div>
            <p className='font-medium text-base text-foreground'>
              Estimated delivery
            </p>
            <p className='text-muted-foreground text-sm'>{estimatedDelivery}</p>
          </div>
        </div>

        {packageInfo && (
          <div className='border-t pt-4'>
            <p className='mb-2 font-medium text-base text-foreground'>
              Package Information
            </p>
            <p className='text-muted-foreground text-sm space-y-1'>
              {packageInfo.weight && <p>Weight: {packageInfo.weight}</p>}
              {packageInfo.dimensions && (
                <p>Dimensions: {packageInfo.dimensions}</p>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
