"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import DatePicker from '@/components/date-picker'

export default function Home() {
  const [loanAmount, setLoanAmount] = useState(10000)
  const [downPayment, setDownPayment] = useState(0)
  const [loanTerm, setLoanTerm] = useState(36)
  const [annualInterestRate, setAnnualInterestRate] = useState(6.0)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Table>
          <TableCaption>Loan Amortization</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Total Loan Amount</TableHead>
              <TableHead>Down Payment</TableHead>
              <TableHead>Loan Term (Months)</TableHead>
              <TableHead>Annual Interest Rate</TableHead>
              <TableHead>Loan Start Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="font-medium">
              <TableCell>
                <Input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-[150px]"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-[150px]"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-[150px]"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={annualInterestRate.toFixed(1)}
                  onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
                  className="w-[150px]"
                />
              </TableCell>
              <TableCell>
                <DatePicker className="w-[200px]" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableCaption>Loan Amortization</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Interest</TableHead>
              <TableHead>Principle</TableHead>
              <TableHead>Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="font-medium">
              <TableCell>INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </div>
  )
}
