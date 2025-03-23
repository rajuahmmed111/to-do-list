/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
import { useSession } from "next-auth/react";
// import { useToast } from "@/components/ui/use-toast";
import { getTasks } from "../actions/task-actions";
import { Icons } from "@/components/icons";
import Image from "next/image";
import { Task } from "../types/task";
import { useToast } from "@/hooks/use-toast";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { toast } = useToast();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/sign-in");
    }

    if (status === "authenticated") {
      fetchTasks();
    }
  }, [status, router]);

  const fetchTasks = async () => {
    setIsLoading(true);
    try {
      const result = await getTasks();
      if (result.success) {
        setTasks(result.data);
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch tasks",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const currentTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  if (status === "loading" || isLoading) {
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
                <AddTaskForm onAddTask={fetchTasks} />
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
                    <TaskList
                      tasks={currentTasks}
                      onToggleCompletion={fetchTasks}
                      onDeleteTask={fetchTasks}
                      onUpdateTask={fetchTasks}
                    />
                  </TabsContent>
                  <TabsContent value="completed" className="mt-4">
                    <TaskList
                      tasks={completedTasks}
                      onToggleCompletion={fetchTasks}
                      onDeleteTask={fetchTasks}
                      onUpdateTask={fetchTasks}
                    />
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
                        src={
                          session?.user?.image ||
                          "/placeholder.svg?height=96&width=96"
                        }
                        alt="Profile"
                        className="h-full w-full object-cover"
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
                    <h3 className="text-lg font-medium">
                      {session?.user?.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {session?.user?.email}
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
