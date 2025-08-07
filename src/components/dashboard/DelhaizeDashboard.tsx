import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Clock, Truck, Users, MapPin } from "lucide-react";
import { ExternalFactorsPanel } from "./ExternalFactorsPanel";
import { PredictiveOTIFPanel } from "./PredictiveOTIFPanel";
import { WarehouseCapacityPanel } from "./WarehouseCapacityPanel";
import { RiskAssessmentPanel } from "./RiskAssessmentPanel";
const DelhaizeDashboard = () => {
  return <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-0 rounded-lg px-0 py-0 bg-slate-50">
              <img src="/lovable-uploads/8813f45d-19f5-4076-9e6b-9633cd39a62c.png" alt="Delhaize Logo" className="h-16 w-16" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Predictive Logistics Dashboard</h1>
            </div>
          </div>
          
          {/* Key Metrics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Predicted Store Deliveries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8,188</div>
                <p className="text-xs text-muted-foreground">Today's forecast</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Prediction Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">88.04%</div>
                <p className="text-xs text-muted-foreground">Last 10 minutes</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Avg Predicted Delay</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">49 min</div>
                <p className="text-xs text-muted-foreground">Current average</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">OTIF Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">78%</div>
                <p className="text-xs text-muted-foreground">Window compliance</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="external-factors">External Factors</TabsTrigger>
            <TabsTrigger value="warehouse-capacity">Warehouse Capacity</TabsTrigger>
            <TabsTrigger value="risk-assessment">Risk Assessment</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <PredictiveOTIFPanel />
          </TabsContent>

          <TabsContent value="external-factors" className="space-y-6">
            <ExternalFactorsPanel />
          </TabsContent>

          <TabsContent value="warehouse-capacity" className="space-y-6">
            <WarehouseCapacityPanel />
          </TabsContent>

          <TabsContent value="risk-assessment" className="space-y-6">
            <RiskAssessmentPanel />
          </TabsContent>
        </Tabs>
      </div>
    </div>;
};
export default DelhaizeDashboard;
