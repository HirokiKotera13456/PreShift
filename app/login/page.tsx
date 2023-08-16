"use client";

import { Box, Button, Divider, Grid, TextField } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <>
      <Box sx={{ margin: "20px auto" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="email"
            label="メールアドレス"
            variant="outlined"
            sx={{ margin: "10px" }}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <div style={{ color: "red" }}>入力が必須の項目です</div>
          )}
          <br></br>
          <TextField
            id="password"
            label="パスワード"
            variant="outlined"
            sx={{ margin: "10px" }}
            {...register("password", { required: true })}
          />
          {errors.password && (
            <div style={{ color: "red" }}>入力が必須の項目です</div>
          )}
          <br></br>
          <Button variant="outlined" type="submit" sx={{ margin: "10px" }}>
            ログイン
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Login;
