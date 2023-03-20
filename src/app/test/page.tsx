import { supabase } from "@/libs/api/supabase";
import Client from "./Client";

const getUserList = (): Promise<{ [x: string]: any }[] | null> => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const { data: user } = await supabase.from("user").select("*");
      resolve(user);
    }, 3000);
  });
};

const Page = async () => {
  const user = await getUserList();

  return (
    <>
      <Client />
      {user?.map((el: any) => {
        return <div key={`userList-${el}`}>{el.email}</div>;
      })}
    </>
  );
};

export default Page;
