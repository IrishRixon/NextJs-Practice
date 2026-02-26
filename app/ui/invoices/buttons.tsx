import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/actions';
import { Button } from '@/components/ui/button';

export function CreateInvoice() {
  return (
    <Button asChild>
      <Link href="/dashboard/invoices/create">
        <PlusIcon className="mr-2 h-4 w-4" />
        Create Invoice
      </Link>
    </Button>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Button variant="outline" size="icon" asChild>
      <Link href={`/dashboard/invoices/${id}/edit`}>
        <PencilIcon className="h-4 w-4" />
      </Link>
    </Button>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  // throw new Error('Failed to Delete Invoice');
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <Button variant="outline" size="icon" type="submit">
        <TrashIcon className="h-4 w-4" />
      </Button>
    </form>
  );
}
