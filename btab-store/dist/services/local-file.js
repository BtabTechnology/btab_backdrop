"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const fs_1 = __importDefault(require("fs"));
const stream_1 = __importDefault(require("stream"));
class LocalFileService extends medusa_1.AbstractFileService {
    serverUrl;
    publicPath;
    protectedPath;
    logger_;
    constructor({ logger }) {
        // @ts-ignore
        super(...arguments);
        this.logger_ = logger;
        this.serverUrl = "http://localhost:9000"; // Adjust this to your server URL
        this.publicPath = "uploads";
        this.protectedPath = "protected-uploads";
        // Create directories if they don't exist
        if (!fs_1.default.existsSync(this.publicPath)) {
            fs_1.default.mkdirSync(this.publicPath, { recursive: true });
        }
        if (!fs_1.default.existsSync(this.protectedPath)) {
            fs_1.default.mkdirSync(this.protectedPath, { recursive: true });
        }
    }
    async upload(fileData) {
        const filePath = `${this.publicPath}/${fileData.originalname}`;
        fs_1.default.copyFileSync(fileData.path, filePath);
        return {
            url: `${this.serverUrl}/${filePath}`,
            key: filePath,
        };
    }
    async uploadProtected(fileData) {
        const filePath = `${this.protectedPath}/${fileData.originalname}`;
        fs_1.default.copyFileSync(fileData.path, filePath);
        return {
            url: `${this.serverUrl}/${filePath}`,
            key: filePath
        };
    }
    async delete(fileData) {
        fs_1.default.unlinkSync(fileData.fileKey);
    }
    async getUploadStreamDescriptor(fileData) {
        const filePath = `${fileData.isPrivate ? this.protectedPath : this.publicPath}/${fileData.name}.${fileData.ext}`;
        const writeStream = fs_1.default.createWriteStream(filePath);
        const pass = new stream_1.default.PassThrough();
        pass.pipe(writeStream);
        return {
            writeStream: pass,
            promise: Promise.resolve(),
            url: `${this.serverUrl}/${filePath}`,
            fileKey: filePath,
        };
    }
    async getDownloadStream(fileData) {
        const filePath = `${fileData.isPrivate ? this.protectedPath : this.publicPath}/${fileData.fileKey}`;
        return fs_1.default.createReadStream(filePath);
    }
    async getPresignedDownloadUrl(fileData) {
        const filePath = `${fileData.isPrivate ? this.protectedPath : this.publicPath}/${fileData.fileKey}`;
        return `${this.serverUrl}/${filePath}`;
    }
}
exports.default = LocalFileService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9sb2NhbC1maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNkNBQXNEO0FBQ3RELDRDQUFtQjtBQUduQixvREFBMkI7QUFFM0IsTUFBTSxnQkFBaUIsU0FBUSw0QkFBbUI7SUFDdEMsU0FBUyxDQUFRO0lBQ2pCLFVBQVUsQ0FBUTtJQUNsQixhQUFhLENBQVE7SUFDckIsT0FBTyxDQUFRO0lBRXpCLFlBQVksRUFBRSxNQUFNLEVBQUU7UUFDcEIsYUFBYTtRQUNiLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFBO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFBO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsdUJBQXVCLENBQUEsQ0FBQyxpQ0FBaUM7UUFDMUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUE7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQTtRQUV4Qyx5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLFlBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25DLFlBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1NBQ25EO1FBQ0QsSUFBSSxDQUFDLFlBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3RDLFlBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1NBQ3REO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBNkI7UUFDeEMsTUFBTSxRQUFRLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxZQUFZ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