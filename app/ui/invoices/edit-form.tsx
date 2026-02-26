'use client';

import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { updateInvoice } from '@/app/lib/actions';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  
  return (
    <form action={updateInvoiceWithId} className="space-y-6">
      <div className="grid gap-4">
        {/* Customer Name */}
        <div className="space-y-2">
          <Label htmlFor="customer">Choose customer</Label>
          <Select name="customerId" defaultValue={invoice.customer_id}>
            <SelectTrigger>
              <SelectValue placeholder="Select a customer" />
            </SelectTrigger>
            <SelectContent>
              {customers.map((customer) => (
                <SelectItem key={customer.id} value={customer.id}>
                  {customer.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Invoice Amount */}
        <div className="space-y-2">
          <Label htmlFor="amount">Choose an amount</Label>
          <Input
            id="amount"
            name="amount"
            type="number"
            step="0.01"
            defaultValue={invoice.amount}
            placeholder="Enter USD amount"
            required
          />
        </div>

        {/* Invoice Status */}
        <div className="space-y-2">
          <Label>Set the invoice status</Label>
          <div className="flex gap-4">
            <div className="flex items-center space-x-2">
              <input
                id="pending"
                name="status"
                type="radio"
                value="pending"
                defaultChecked={invoice.status === 'pending'}
                className="h-4 w-4 text-blue-600"
              />
              <Label htmlFor="pending" className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                Pending
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="paid"
                name="status"
                type="radio"
                value="paid"
                defaultChecked={invoice.status === 'paid'}
                className="h-4 w-4 text-blue-600"
              />
              <Label htmlFor="paid" className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                Paid
              </Label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end gap-4">
        <Button variant="outline" asChild>
          <Link href="/dashboard/invoices">Cancel</Link>
        </Button>
        <Button type="submit">Edit Invoice</Button>
      </div>
    </form>
  );
}
