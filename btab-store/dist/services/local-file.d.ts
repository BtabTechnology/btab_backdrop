/// <reference types="multer" />
/// <reference types="node" />
import { AbstractFileService } from "@medusajs/medusa";
import { Logger } from "@medusajs/medusa";
import { DeleteFileType, FileServiceGetUploadStreamResult, FileServiceUploadResult, GetUploadedFileType, UploadStreamDescriptorType } from "@medusajs/types";
declare class LocalFileService extends AbstractFileService {
    protected serverUrl: string;
    protected publicPath: string;
    protected protectedPath: string;
    protected logger_: Logger;
    constructor({ logger }: {
        logger: any;
    });
    upload(fileData: Express.Multer.File): Promise<FileServiceUploadResult>;
    uploadProtected(fileData: Express.Multer.File): Promise<FileServiceUploadResult>;
    delete(fileData: DeleteFileType): Promise<void>;
    getUploadStreamDescriptor(fileData: UploadStreamDescriptorType): Promise<FileServiceGetUploadStreamResult>;
    getDownloadStream(fileData: GetUploadedFileType): Promise<NodeJS.ReadableStream>;
    getPresignedDownloadUrl(fileData: GetUploadedFileType): Promise<string>;
}
export default LocalFileService;
