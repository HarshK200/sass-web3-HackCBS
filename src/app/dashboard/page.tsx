'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UploadCloud, DollarSign, BarChart2, Settings, User, LogOut } from 'lucide-react'

export default function DataLabelingDashboard() {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  const handleUpload = () => {
    if (file) {
      // Handle file upload logic here
      console.log('Uploading file:', file.name)
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">DataLabel Pro</h2>
        </div>
        <nav className="mt-6">
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <BarChart2 className="inline-block mr-2" /> Dashboard
          </a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <UploadCloud className="inline-block mr-2" /> Upload Data
          </a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <DollarSign className="inline-block mr-2" /> Payments
          </a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
            <Settings className="inline-block mr-2" /> Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <div className="flex items-center">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Upload Section */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Upload Data for Labeling</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Input type="file" onChange={handleFileChange} />
                <Button onClick={handleUpload} disabled={!file}>
                  <UploadCloud className="mr-2 h-4 w-4" /> Upload
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Labeling Tasks Table */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Labeling Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Task ID</TableHead>
                    <TableHead>Dataset Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>001</TableCell>
                    <TableCell>Image Classification</TableCell>
                    <TableCell>In Progress</TableCell>
                    <TableCell>60%</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>002</TableCell>
                    <TableCell>Text Annotation</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>0%</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Start</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Crypto Payment Section */}
          <Card>
            <CardHeader>
              <CardTitle>Crypto Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="wallet-address">Your Wallet Address</Label>
                  <Input id="wallet-address" placeholder="Enter your wallet address" />
                </div>
                <div>
                  <Label htmlFor="payment-amount">Payment Amount (ETH)</Label>
                  <Input id="payment-amount" type="number" placeholder="0.00" />
                </div>
              </div>
              <Button className="mt-4">
                <DollarSign className="mr-2 h-4 w-4" /> Make Payment
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
