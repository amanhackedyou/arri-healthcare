import { Mailer } from "@/utils/mailer";
import { ADMIN_INFO } from "@/utils/Utils";
import { NextRequest, NextResponse } from "next/server";
import validator from 'validator';

export const POST = async (request: NextRequest) => {
    let formData;
    try {
        formData = await request.formData();
    } catch (e) {
        return NextResponse.json({
            status: "error",
            message: "Request type is now allowed."
        });
    }

    // console.log(formData);

    const validation = await validate(formData);
    if (validation["status"] != "ok") {
        return NextResponse.json({
            status: "error",
            message: validation["message"]
        }, {
            status: 400
        });
    }


    const fullName = formData.get("fullName")?.toString().trim();
    const phoneNumber = formData.get("phoneNumber")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const address = formData.get("address")?.toString().trim();
    const message = formData.get("message")?.toString().trim();


    const html = `
        <div style="color: black; font-size: 1.2rem; font-weight: 500;">
            <div>Full Name: <b>${fullName}</b></div>
            <div style="margin-top: 15px;">Phone Number: <b>${phoneNumber}</b></div>
            <div style="margin-top: 15px;">Email: <b>${email}</b></div>
            <div style="margin-top: 15px;">Address: <b>${address}</b></div>
            <div style="margin-top: 15px;">Message: <b>${message}</b></div>
        </div>
        `


    await Mailer.sendMail(ADMIN_INFO.email, `for the contact page: ${fullName} contacted you`, html);





    return NextResponse.json({
        status: "ok",
        message: "Submitted successfully!"
    });
}

const validate = async (formData: FormData) => {
    const res = {
        status: "error",
        message: ""
    };

    const fullName = formData.get("fullName")?.toString().trim();
    const phoneNumber = formData.get("phoneNumber")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const address = formData.get("address")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!fullName || !phoneNumber || !email || !address || !message) {
        res["message"] = "Mandatory fields are not provided, please fill all the feilds and try again."
        return res;
    }

    if (fullName.toString().length < 3) {
        res["message"] = "First name atleast has the contain 3 characters."
        return res;
    }

    if (!validator.isMobilePhone(phoneNumber.toString())) {
        res["message"] = "Phone is missing."
        return res;
    }

    if (!validator.isEmail(email.toString())) {
        res["message"] = "Email is missing."
        return res;
    }


    if (address.toString().length < 3) {
        res["message"] = "Address should contain atleast 3 characters."
        return res;
    }

    if (message.toString().split(" ").length < 3) {
        res["message"] = "Message should contain atleast 3 words."
        return res;
    }

    res["status"] = "ok";
    return res;
}