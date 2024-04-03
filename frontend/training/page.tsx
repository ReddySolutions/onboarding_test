"use client";
import LeftPart from "@/components/LeftPart";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";

const FormSchema = z.object({
  training: z.string({
    required_error: "Please select a training.",
  }),
});

const TrainingPage = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const imitateUser = Math.floor(Math.random() * 4) + 1;
    //console.log(imitateUser);

    const body = {
      activity_name: data.training,
      user: imitateUser,
    };

    // Make the POST request to logout endpoint
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/do_activity/",
        body
      );
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      const errorBody = error.response.data;
      console.log(errorBody);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `${errorBody.user || errorBody.error}`,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }

  return (
    <div className="w-full flex flex-row items-center">
      <LeftPart />

      <div className="w-full  h-screen p-5 bg-slate-200">
        <h2 className="text-4xl text-green-500 leading-relaxed text-center">
          Take a training!!!
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="training"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a training to partake" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="	Satelite dish inquiry">
                        {" "}
                        Satelite dish inquiry
                      </SelectItem>
                      <SelectItem value="Customer complaint">
                        Customer complaint
                      </SelectItem>
                      <SelectItem value="Custommer retention">
                        Custommer retention
                      </SelectItem>
                      <SelectItem value="Mental Health Module">
                        Mental Health Module
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default TrainingPage;
