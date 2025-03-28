"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardHeader } from "@/components/dashboard-header";
import { TaskList } from "@/components/task-list";
import { AddTaskForm } from "@/components/add-task-form";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";
import { useTask } from "@/contexts/TaskContext";

export default function DashboardPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { tasks, loading } = useTask();

  const currentTasks = tasks.filter(
    (task: { completed: any }) => !task.completed
  );
  const completedTasks = tasks.filter(
    (task: { completed: any }) => task.completed
  );

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <DashboardHeader />
        <main className="flex-1 space-y-4 p-4 md:p-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <Icons.spinner className="mx-auto h-8 w-8 animate-spin" />
                <p className="mt-2 text-sm text-muted-foreground">
                  Loading tasks...
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 space-y-4 p-4 md:p-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Tasks</CardTitle>
                <CardDescription>
                  Manage your tasks and stay organized.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AddTaskForm />
                <Tabs defaultValue="current" className="mt-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="current">
                      Current Tasks ({currentTasks.length})
                    </TabsTrigger>
                    <TabsTrigger value="completed">
                      Completed Tasks ({completedTasks.length})
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="current" className="mt-4">
                    <TaskList tasks={[]} />
                  </TabsContent>
                  <TabsContent value="completed" className="mt-4">
                    <TaskList tasks={[]} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                  Manage your profile information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="h-24 w-24 overflow-hidden rounded-full bg-muted">
                      <Image
                        src={user?.profilePicture || "/placeholder.svg"}
                        alt="Profile"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Button
                      size="sm"
                      className="absolute bottom-0 right-0 rounded-full"
                      variant="secondary"
                      onClick={() => router.push("/dashboard/profile")}
                    >
                      Change
                    </Button>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium">{user?.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
