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


    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const phoneNumber = formData.get("phoneNumber");
    const email = formData.get("email");
    const hoursPerDayNWeek = formData.get("hoursPerDayNWeek");
    const zipCode = formData.get("zipCode");


    const html = `
    <div style="color: black; font-size: 1.2rem; font-weight: 500;">
        <div>First Name: <b>${firstName}</b></div>
        <div style="margin-top: 15px;">Last Name: <b>${lastName}</b></div>
        <div style="margin-top: 15px;">Phone Number: <b>${phoneNumber}</b></div>
        <div style="margin-top: 15px;">Email: <b>${email}</b></div>
        <div style="margin-top: 15px;">Zip: <b>${zipCode}</b></div>
        <div style="margin-top: 15px;">Hours per day/week: <b>${hoursPerDayNWeek}</b></div>
    </div>
    `


    await Mailer.sendMail(ADMIN_INFO.email, `for the Need Caregiver page : ${firstName} need a caregiver`, html);


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

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const phoneNumber = formData.get("phoneNumber");
    const email = formData.get("email");
    const hoursPerDayNWeek = formData.get("hoursPerDayNWeek");
    const zipCode = formData.get("zipCode");

    if (!firstName || !lastName || !phoneNumber || !email || !hoursPerDayNWeek || !zipCode) {
        res["message"] = "Mandatory fields are not provided, please fill all the feilds and try again."
        return res;
    }

    if (firstName.toString().length < 3) {
        res["message"] = "First name atleast has the contain 3 characters."
        return res;
    }

    if (lastName.toString().length < 1) {
        res["message"] = "Last name atleast has the contain 1 character."
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


    if (hoursPerDayNWeek.toString().length < 2) {
        res["message"] = "Hours & Days are missing."
        return res;
    }

    if (!validator.isPostalCode(zipCode.toString(), "any")) {
        res["message"] = "Pin code is missing."
        return res;
    }

    res["status"] = "ok";
    return res;
}