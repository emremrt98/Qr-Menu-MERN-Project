import mongoose from "mongoose";

export const connection = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/qr-menu');

    } catch (error) {
        console.log('Database bağlanırken bir hata oluştu ', error)
    }
}