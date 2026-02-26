import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Badge } from '@/components/ui/badge';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <Badge variant={status === 'paid' ? 'default' : 'secondary'}>
      {status === 'pending' ? (
        <>
          <ClockIcon className="mr-1 h-3 w-3" />
          Pending
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          <CheckIcon className="mr-1 h-3 w-3" />
          Paid
        </>
      ) : null}
    </Badge>
  );
}
