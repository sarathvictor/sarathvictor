import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Mail, PackageCheck, Home } from 'lucide-react';

export default function HomePage() {
  const [tab, setTab] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold">XXX YYY</h1>
        <p className="text-lg text-gray-600">HP Petroleum Solutions</p>
      </header>

      <Tabs value={tab} onValueChange={setTab} className="w-full max-w-4xl mx-auto">
        <TabsList className="flex justify-center gap-4 mb-6">
          <TabsTrigger value="home"><Home className="inline mr-1" />Home</TabsTrigger>
          <TabsTrigger value="products"><PackageCheck className="inline mr-1" />Products</TabsTrigger>
          <TabsTrigger value="contact"><Mail className="inline mr-1" />Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="home">
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6 text-center">
              <img src="https://images.unsplash.com/photo-1579546928687-cd818058ba14" alt="HP Petroleum" className="w-full h-80 object-cover rounded-xl mb-4" />
              <p className="text-lg">Welcome to XXX YYY - leveraging AI to optimize petroleum operations and sustainability.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Drilling Optimizer', 'Predictive Maintenance', 'AI Refinery Monitoring'].map((product, i) => (
              <Card key={i} className="rounded-2xl">
                <CardContent className="p-4 text-center">
                  <img
                    src={`https://source.unsplash.com/400x300/?petroleum,ai,technology&sig=${i}`}
                    alt={product}
                    className="rounded-lg h-40 w-full object-cover mb-2"
                  />
                  <h2 className="text-xl font-semibold mb-1">{product}</h2>
                  <p className="text-sm">AI-driven solution to boost performance and reduce cost.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contact">
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <p>Email: contact@xxxyyy.com</p>
              <p>Phone: +1-234-567-8901</p>
              <p>Address: 123 AI Petroleum Ave, Tech City, USA</p>
              <Button>Send Message</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <footer className="text-center mt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} XXX YYY. All rights reserved.
      </footer>
    </div>
  );
}
