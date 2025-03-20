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
    const zipCode = formData.get("zipCode");
    const contactMethod = formData.get("contactMethod");
    const date = formData.get("date");
    const time = formData.get("time");
    const comment = formData.get("comment");


    const html = `
        <div style="color: black; font-size: 1.2rem; font-weight: 500;">
            <div>First Name: <b>${firstName}</b></div>
            <div style="margin-top: 15px;">Last Name: <b>${lastName}</b></div>
            <div style="margin-top: 15px;">Phone Number: <b>${phoneNumber}</b></div>
            <div style="margin-top: 15px;">Email: <b>${email}</b></div>
            <div style="margin-top: 15px;">Zip: <b>${zipCode}</b></div>
            <div style="margin-top: 15px;">Contact Method: <b>${contactMethod?.toString().toUpperCase()}</b></div>
            <div style="margin-top: 15px;">Best date to contact: <b>${date?.toString().toUpperCase()}</b></div>
            <div style="margin-top: 15px;">Best time to contact: <b>${time?.toString().toUpperCase()}</b></div>
            <div style="margin-top: 15px;">Comment: <b>${comment}</b></div>
        </div>
        `


    await Mailer.sendMail(ADMIN_INFO.email, `for the booking page : ${firstName} booked a call`, html);





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

    const isDateValid = (data: string) => {
        const splitedDate = data.trim().split("-");

        if (splitedDate.length != 3) return false;

        splitedDate.forEach(dateWord => {
            try {
                parseInt(dateWord);
            } catch (e) {
                return false;
            }
        });

        return true;
    }

    const isTimeValid = (time: string) => {
        const splitedTime = time.trim().split(":");

        if (splitedTime.length != 2) return false;

        splitedTime.forEach(timeWord => {
            try {
                parseInt(timeWord);
            } catch (e) {
                return false;
            }
        });

        return true;
    }

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const phoneNumber = formData.get("phoneNumber");
    const email = formData.get("email");
    const zipCode = formData.get("zipCode");
    const contactMethod = formData.get("contactMethod");
    const date = formData.get("date");
    const time = formData.get("time");
    const comment = formData.get("comment");

    if (!firstName || !lastName || !phoneNumber || !email || !zipCode || !contactMethod || !date || !time || !comment) {
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

    if (contactMethod.toString().toLowerCase() !== "phone" && contactMethod.toString().toLowerCase() !== "email" && contactMethod.toString().toLowerCase() !== "text") {
        res["message"] = "Way of contact method is not valid."
        return res;
    }

    if (!validator.isPostalCode(zipCode.toString(), "any")) {
        res["message"] = "Pin code is missing."
        return res;
    }

    if (!isDateValid(date?.toString() || "")) {
        res["message"] = "Invalid date."
        return res;
    }

    if (!isTimeValid(time?.toString() || "")) {
        res["message"] = "Invalid time."
        return res;
    }

    if ((comment?.toString() || "").split(" ").length < 3) {
        res["message"] = "Comment ssage should contain atleast 3 words."
        return res;
    }

    res["status"] = "ok";
    return res;
}