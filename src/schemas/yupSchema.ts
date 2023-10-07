import { differenceInYears, isBefore, isDate } from 'date-fns';
import validator from 'validator';
import * as Yup from 'yup';

export const signUpSchemas = Yup.object({
    firstName: Yup.string()
        .min(3, 'Firstname Should be at least 3 characters')
        .max(25, 'Firstname Should not be more than 25 characters')
        .matches(/^[a-zA-Z]+$/, 'Firstname can only contain valid letters (avoid using special characters)')
        .required('Firstname is required'),
    lastName: Yup.string()
        .min(3, 'Lastname Should be at least 3 characters').max(25, 'Lastname Should not be more than 25 characters')
        .matches(/^[a-zA-Z]+$/, 'Lastname can only contain valid letters (avoid using special characters)')
        .required('Lastname is required'),
    userName: Yup.string()
        .min(3, 'Username must be at least 3 characters')
        .max(30, 'Username cannot be more than 30 characters')
        .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')
        .required('Username is required').min(3, 'Username must be at least 3 characters')
        .test('username-taken', 'Username is already taken', async (value) => {
            let userNameTaken = false;
            if (!userNameTaken) {
                return true;
            } else {
                return false;
            }
        }),
    avatar: Yup.mixed()
        .required('Please select a file a file for avatar')
        .test('fileFormat', 'Invalid file format', (value) => {
            if (!value) return true;
            const allowedFormats = ['image/png', 'image/jpeg', 'image/gif'];
            return allowedFormats.includes((value as File).type);
        })
        .test('fileSize', 'File is too large', (value) => {
            if (!value) return true;

            const maxSize = 5 * 1024 * 1024; // 5 MB
            return (value as File).size <= maxSize;
        })
        .test('fileName', 'File name is too long', (value) => {
            if (!value) return true;

            const maxNameLength = 50;
            return (value as File).name.length <= maxNameLength;
        }),
    gender: Yup.string()
        .required('Please choose your gender'),
    phoneNumber: Yup.string()
        .required('Phone number is required')
        .min(10, 'Invalid Number Length')
        .matches(/^(\+1|1)?\(?([0-9]{3})\)?([0-9]{3})([0-9]{4})$/,
            'Invalid phone number'),
    email: Yup.string()
        .required('Email is required')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Please input a valid email')
        .test('custom-email-test', 'Please input a valid email', (value) => {
            return !!validator?.isEmail(value);
        }),
    password: Yup.string()
        .required('Password is required')
        .matches(/^(?=.*[A-Z])/, 'At least one uppercase letter')
        .matches(/^(?=.*[a-z])/, 'At least one lowercase letter')
        .matches(/^(?=.*\d)/, 'At least one digit')
        .matches(/^(?=.*[@$!%*#?&])/, 'At least one special character')
        .matches(/[A-Za-z\d@$!%*#?&]{8,}/, 'At least 8 characters total'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password')], 'Passwords do not match'),
    dob: Yup.date()
        .required('Date of birth is required')
        .test('valid-date', 'Invalid date of birth', (value) => {
            if (!isDate(value)) return false;
            const currentDate = new Date();
            const dobDate = new Date(value);
            if (isBefore(dobDate, currentDate)) return true;
            return false;
        })
        .test('age', 'You must be at least 10 years old', (value) => {
            const currentDate = new Date();
            const dobDate = new Date(value);
            const age = differenceInYears(currentDate, dobDate);
            return age >= 10;
        }),
});