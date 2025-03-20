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
    const email = formData.get("email");
    const phone = formData.get("phone");
    const dob = formData.get("dob");
    const city = formData.get("city");
    const zipCode = formData.get("zipCode");
    const hasDrivingLicense = formData.get("hasDrivingLicense");
    const allowedForWork = formData.get("allowedForWork");
    const hasHighSchoolDiploma = formData.get("hasHighSchoolDiploma");
    const hasTransportationInsuranceForJob = formData.get("hasTransportationInsuranceForJob");
    const agreeForUndergoBackgroundCheck = formData.get("agreeForUndergoBackgroundCheck");
    const agreeFor4HourTraining = formData.get("agreeFor4HourTraining");
    const certificates = formData.get("certificates");
    const availableForWork = formData.get("availableForWork");
    const hourlyPayExpectation = formData.get("hourlyPayExpectation");
    const resume = formData.get("resume");
    const applyWithoutResume = formData.get("applyWithoutResume");


    const html = `
        <div style="color: black; font-size: 1.2rem; font-weight: 500;">
            <div>First Name: <b>${firstName}</b></div></br>
            <div style="margin-top: 15px;">Last Name: <b>${lastName}</b></div></br>
            <div style="margin-top: 15px;">Email: <b>${email}</b></div></br>
            <div style="margin-top: 15px;">Phone: <b>${phone}</b></div></br>
            <div style="margin-top: 15px;">DOB: <b>${dob}</b></div></br>
            <div style="margin-top: 15px;">City: <b>${city}</b></div></br>
            <div style="margin-top: 15px;">Zip: <b>${zipCode}</b></div></br>
            <div style="margin-top: 15px;">Allowed to work in the US: <b>${allowedForWork?.toString().toUpperCase()}</b></div></br>
            <div style="margin-top: 15px;">Driving License: <b>${hasDrivingLicense?.toString().toUpperCase()}</b></div></br>
            <div style="margin-top: 15px;">Has high school diploma: <b>${hasHighSchoolDiploma?.toString().toUpperCase()}</b></div></br>
            <div style="margin-top: 15px;">Has reliable transportation and Insurance for the job: <b>${hasTransportationInsuranceForJob?.toString().toUpperCase()}</b></div></br>
            <div style="margin-top: 15px;">Agrees to undergo background check: <b>${agreeForUndergoBackgroundCheck?.toString().toUpperCase()}</b></div></br>
            <div style="margin-top: 15px;">Agree to take a 4 hour training: <b>${agreeFor4HourTraining?.toString().toUpperCase()}</b></div></br>
            <div style="margin-top: 15px;">Applicable certificates: <b>${certificates?.toString().toUpperCase()}</b></div></br>
            <div style="margin-top: 15px;">Work availability: <b>${availableForWork?.toString().toUpperCase()}</b></div></br>
            <div style="margin-top: 15px;">Hourly pay expectations: <b>${hourlyPayExpectation?.toString().toUpperCase()}</b></div></br>
            <div style="margin-top: 15px;">Apply without resume?: <b>${applyWithoutResume?.toString().toLowerCase() === "true" ? "YES" : "NO"}</b></div></br>
        </div>
        `


    // console.log(resume.name)
    let sendMail = await Mailer.sendMail(ADMIN_INFO.email, `for the Career page: ${firstName} filled a job form`, html, applyWithoutResume === "false" ? [
        {
            // @ts-ignore
            filename: resume.name,
            // @ts-ignore
            buffer: Buffer.from(await resume.arrayBuffer())
        }
    ] : undefined);

    if (sendMail !== true) {
        return NextResponse.json({
            status: "error",
            message: "Failed to submit the form, please try again."
        }, { status: 500 });
    }


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

    // console.log(formData);


    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const dob = formData.get("dob");
    const city = formData.get("city");
    const zipCode = formData.get("zipCode");
    const hasDrivingLicense = formData.get("hasDrivingLicense");
    const allowedForWork = formData.get("allowedForWork");
    const hasHighSchoolDiploma = formData.get("hasHighSchoolDiploma");
    const hasTransportationInsuranceForJob = formData.get("hasTransportationInsuranceForJob");
    const agreeForUndergoBackgroundCheck = formData.get("agreeForUndergoBackgroundCheck");
    const agreeFor4HourTraining = formData.get("agreeFor4HourTraining");
    const certificates = formData.get("certificates");
    const availableForWork = formData.get("availableForWork");
    const hourlyPayExpectation = formData.get("hourlyPayExpectation");
    const resume = formData.get("resume");
    const applyWithoutResume = formData.get("applyWithoutResume");

    if (!firstName || !lastName || !zipCode || !phone || !email || !dob || !city || !hasDrivingLicense || !allowedForWork || !hasHighSchoolDiploma || !hasTransportationInsuranceForJob || !agreeForUndergoBackgroundCheck || !agreeFor4HourTraining || !availableForWork || !hourlyPayExpectation || !applyWithoutResume) {
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

    if (!validator.isPostalCode(zipCode.toString(), "any")) {
        res["message"] = "Pin code is missing."
        return res;
    }

    if (!validator.isEmail(email.toString())) {
        res["message"] = "Email is missing."
        return res;
    }

    if (`${phone}`.trim().length < 6) {
        res["message"] = "Invalid phone number."
        return res;
    }

    if (!isDateValid(dob?.toString() || "")) {
        res["message"] = "Invalid Date of Birth."
        return res;
    }

    if (hasDrivingLicense.toString().trim().toLowerCase() !== "yes" && hasDrivingLicense.toString().trim().toLowerCase() !== "no") {
        res["message"] = "Invalid Q&As"
        return res;
    }

    if (allowedForWork.toString().trim().toLowerCase() !== "yes" && allowedForWork.toString().trim().toLowerCase() !== "no") {
        res["message"] = "Invalid Q&As"
        return res;
    }

    if (hasHighSchoolDiploma.toString().trim().toLowerCase() !== "yes" && hasHighSchoolDiploma.toString().trim().toLowerCase() !== "no") {
        res["message"] = "Invalid Q&As"
        return res;
    }

    if (hasTransportationInsuranceForJob.toString().trim().toLowerCase() !== "yes" && hasTransportationInsuranceForJob.toString().trim().toLowerCase() !== "no") {
        res["message"] = "Invalid Q&As"
        return res;
    }

    if (agreeForUndergoBackgroundCheck.toString().trim().toLowerCase() !== "yes" && agreeForUndergoBackgroundCheck.toString().trim().toLowerCase() !== "no") {
        res["message"] = "Invalid Q&As"
        return res;
    }

    if (agreeFor4HourTraining.toString().trim().toLowerCase() !== "yes" && agreeFor4HourTraining.toString().trim().toLowerCase() !== "no") {
        res["message"] = "Invalid Q&As"
        return res;
    }

    if (applyWithoutResume != "true" && !resume) {
        res["message"] = "Resume is missing.";
        return res
    }

    res["status"] = "ok";
    return res;
}