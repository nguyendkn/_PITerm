import React from "react";
import { Button, Input, Form } from "antd";
import { Controller } from "react-hook-form";
import { useForm } from "@/hooks/useForm";
import { useAuthStore } from "@/stores/authStore";

const SignInPage: React.FC = () => {
  const { isAuthenticated } = useAuthStore();
  const { control, handleSubmit, onSubmit, errors, isSubmitting } = useForm({
    username: "",
    password: "",
  });

  return (
    <div>
      {isAuthenticated ? (
        <h1>You are logged in!</h1>
      ) : (
        <Form onFinish={handleSubmit(onSubmit)}>
          <Form.Item
            validateStatus={errors.username ? "error" : ""}
            help={errors.username?.message as React.ReactNode}
          >
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="Username" />
              )}
            />
          </Form.Item>
          <Form.Item
            validateStatus={errors.password ? "error" : ""}
            help={errors.password?.message as React.ReactNode}
          >
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input.Password {...field} placeholder="Password" />
              )}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={isSubmitting}>
            Login
          </Button>
        </Form>
      )}
    </div>
  );
};

export default SignInPage;
