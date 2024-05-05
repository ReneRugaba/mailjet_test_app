export default interface BodyMail {
    from: string|undefined
    to: FormDataEntryValue | null
    message: FormDataEntryValue | null
}