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
      console.log('Uploading file:', file.name)
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-r from-purple-200 to-blue-100 text-gray-800 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-300 shadow-lg">
        <div className="p-4 text-center">
          <h2 className="text-3xl font-bold text-blue-700">DataLabel Pro</h2>
        </div>
        <nav className="mt-6">
          {[
            { icon: BarChart2, text: 'Dashboard' },
            { icon: UploadCloud, text: 'Upload Data' },
            { icon: DollarSign, text: 'Payments' },
            { icon: Settings, text: 'Settings' }
          ].map(({ icon: Icon, text }) => (
            <a href="#" key={text} className="block py-3 px-4 text-blue-700 hover:bg-blue-500 hover:text-white transition-colors">
              <Icon className="inline-block mr-2" /> {text}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-purple-300 shadow-md">
          <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
            <h1 className="text-3xl font-semibold text-blue-800">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <User className="h-6 w-6 text-blue-700" />
              </Button>
              <Button variant="ghost" size="icon">
                <LogOut className="h-6 w-6 text-blue-700" />
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="max-w-7xl mx-auto py-8 px-6">
          {/* Upload Section */}
          <Card className="bg-purple-200 text-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-blue-700">Upload Data for Labeling</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Input type="file" onChange={handleFileChange} className="bg-blue-100 text-gray-800" />
                <Button onClick={handleUpload} disabled={!file} className="bg-blue-500 text-white hover:bg-blue-400 transition-colors">
                  <UploadCloud className="mr-2 h-4 w-4" /> Upload
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Labeling Tasks Table */}
          <Card className="bg-purple-300 text-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-blue-700">Labeling Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <Table className="text-gray-800">
                <TableHeader>
                  <TableRow>
                    {['Task ID', 'Dataset Name', 'Status', 'Progress', 'Actions'].map(header => (
                      <TableHead key={header} className="text-blue-700">{header}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[{ id: '001', name: 'Image Classification', status: 'In Progress', progress: '60%' }, { id: '002', name: 'Text Annotation', status: 'Pending', progress: '0%' }].map(task => (
                    <TableRow key={task.id}>
                      <TableCell>{task.id}</TableCell>
                      <TableCell>{task.name}</TableCell>
                      <TableCell>{task.status}</TableCell>
                      <TableCell>{task.progress}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" className="bg-blue-500 text-white hover:bg-blue-400 transition-colors">View</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Crypto Payment Section */}
          <Card className="bg-purple-300 text-gray-800">
            <CardHeader>
              <CardTitle className="text-blue-700">Crypto Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="wallet-address" className="text-blue-700">Your Wallet Address</Label>
                  <Input id="wallet-address" placeholder="Enter your wallet address" className="bg-blue-100 text-gray-800 mt-2" />
                </div>
                <div>
                  <Label htmlFor="payment-amount" className="text-blue-700">Payment Amount (ETH)</Label>
                  <Input id="payment-amount" type="number" placeholder="0.00" className="bg-blue-100 text-gray-800 mt-2" />
                </div>
              </div>
              <Button className="mt-4 bg-blue-500 text-white hover:bg-blue-400 transition-colors">
                <DollarSign className="mr-2 h-4 w-4" /> Make Payment
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
