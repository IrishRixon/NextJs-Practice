import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Customer</TableHead>
          <TableHead className="w-[250px]">Email</TableHead>
          <TableHead className="w-[150px]">Amount</TableHead>
          <TableHead className="w-[150px]">Date</TableHead>
          <TableHead className="w-[120px]">Status</TableHead>
          <TableHead className="w-[150px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices?.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-3">
                <Image
                  src={invoice.image_url}
                  className="rounded-full"
                  width={28}
                  height={28}
                  alt={`${invoice.name}'s profile picture`}
                />
                <p>{invoice.name}</p>
              </div>
            </TableCell>
            <TableCell>{invoice.email}</TableCell>
            <TableCell>{formatCurrency(invoice.amount)}</TableCell>
            <TableCell>{formatDateToLocal(invoice.date)}</TableCell>
            <TableCell>
              <InvoiceStatus status={invoice.status} />
            </TableCell>
            <TableCell>
              <div className="flex justify-end gap-3">
                <UpdateInvoice id={invoice.id} />
                <DeleteInvoice id={invoice.id} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
