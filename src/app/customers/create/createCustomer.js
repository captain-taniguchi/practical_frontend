"use server";
import { revalidatePath } from "next/cache";

const createCustomer = async (formData) => {
  const creating_customer_name = formData.get("customer_name");
  const creating_customer_id = formData.get("customer_id");
  const creating_age = formData.get("age");
  const creating_gender = formData.get("gender");

  // 修正部分: バリデーションを追加★エラーハンドリング３
  if (!creating_customer_id) {
    return { error: "IDを入力してください" }; // エラーを返す
  }

  const body_msg = JSON.stringify({
    customer_name: creating_customer_name,
    customer_id: creating_customer_id,
    age: creating_age,
    gender: creating_gender,
  });

  const res = await fetch(`tech0-gen-9-step3-1-py-55.azurewebsites.net/customers`, { //http://localhost:8000/customersから変更（250201）
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body_msg,
  });
  if (!res.ok) {
    throw new Error("Failed to create customer");
  }

  revalidatePath(`/customers`);
};

export default createCustomer;
