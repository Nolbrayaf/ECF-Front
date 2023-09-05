import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
    state: () => ({
        formData: {
            clientType: "",
            clientEmail:"",
            interventionDate:"",
            remarks:""
        }
    }),
    actions: {
        updateFormData(newData) {
            this.formData = newData
        }
    }
})