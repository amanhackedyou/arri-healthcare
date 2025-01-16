// import { NextRequest } from "next/server"

export const post = async (api: string, formData: FormData) => {
    return new Promise(async (resolve, reject) => {
        try {
            // await (async () => {
            //     return new Promise(resolve => setTimeout(resolve, 2000));
            // })()
            const req = await fetch(api, {
                method: "POST",
                body: formData
            });

            const response = await req.json();
            if (response["status"] != "ok") {
                reject(response["message"]);
                return;
            }
            resolve(response);
        } catch (e) {
            reject("Something went wrong.")
        }
    });



}