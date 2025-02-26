"use client";

import { Button } from "@/src/components/common/button/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/common/form/form";
import { Input } from "@/src/components/common/input/input";
import { useLoginForm } from "@/src/app/(auth)/login/hooks/useLoginForm";
import { Loader } from "@/src/components/loader/Loader";
import { cn } from "@/src/lib/utils";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const { form, onSubmit, isLoading, emailError, passwordError } =
    useLoginForm();
  const router = useRouter();

  return (
    <>
      {isLoading && <Loader />}
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col gap-8 max-w-[450px] px-4 md:px-0"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn(emailError && "text-red-500")}>
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="email"
                    {...field}
                    className={cn(emailError && "border-red-500")}
                  />
                </FormControl>
                <FormMessage>{emailError && emailError.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn(passwordError && "text-red-500")}>
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="password"
                    {...field}
                    className={cn(passwordError && "border-red-500")}
                  />
                </FormControl>
                <FormMessage>
                  {passwordError && passwordError.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
        {/* <div className="py-2 text-xs w-full flex justify-center items-center">
          New to TechMarche?{" "}
          <DialogClose
            className="text-blue-400 inline-block px-1 underline"
            onClick={() => router.push("/signup")}
          >
            Signup
          </DialogClose>{" "}
          here
        </div> */}
      </Form>
    </>
  );
};
