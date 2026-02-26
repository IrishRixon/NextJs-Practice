import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { createInvoice } from '@/app/lib/actions';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Form({ customers }: { customers: CustomerField[] }) {
  return (
    <form action={createInvoice} className="space-y-6">
      <div className="grid gap-4">
        {/* Customer Name */}
        <div className="space-y-2">
          <Label htmlFor="customer">Choose customer</Label>
          <Select name="customerId" required>
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
                defaultChecked
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
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}
