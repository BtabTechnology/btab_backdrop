import { AbstractFileService } from "@medusajs/medusa"
import fs from "fs"
import { Logger } from "@medusajs/medusa"
import { DeleteFileType, FileServiceGetUploadStreamResult, FileServiceUploadResult, GetUploadedFileType, UploadStreamDescriptorType } from "@medusajs/types"
import stream from "stream"

class LocalFileService extends AbstractFileService {
  protected serverUrl: string
  protected publicPath: string
  protected protectedPath: string
  protected logger_: Logger

  constructor({ logger }) {
    // @ts-ignore
    super(...arguments)
    this.logger_ = logger
    this.serverUrl = "http://localhost:9000" // Adjust this to your server URL
    this.publicPath = "uploads"
    this.protectedPath = "protected-uploads"

    // Create directories if they don't exist
    if (!fs.existsSync(this.publicPath)) {
      fs.mkdirSync(this.publicPath, { recursive: true })
    }
    if (!fs.existsSync(this.protectedPath)) {
      fs.mkdirSync(this.protectedPath, { recursive: true })
    }
  }

  async upload(fileData: Express.Multer.File): Promise<FileServiceUploadResult> {
    const filePath = `${this.publicPath}/${fileData.originalname}`
    fs.copyFileSync(fileData.path, filePath)
    return {
      url: `${this.serverUrl}/${filePath}`,
      key: filePath,
    }
  }

  async uploadProtected(fileData: Express.Multer.File): Promise<FileServiceUploadResult> {
    const filePath = `${this.protectedPath}/${fileData.originalname}`
    fs.copyFileSync(fileData.path, filePath)
    return {
      url: `${this.serverUrl}/${filePath}`,
      key: filePath
    }
  }

  async delete(fileData: DeleteFileType): Promise<void> {
    fs.unlinkSync(fileData.fileKey)
  }

  async getUploadStreamDescriptor(fileData: UploadStreamDescriptorType): Promise<FileServiceGetUploadStreamResult> {
    const filePath = `${fileData.isPrivate ? this.protectedPath : this.publicPath}/${fileData.name}.${fileData.ext}`
    const writeStream = fs.createWriteStream(filePath)
    const pass = new stream.PassThrough()

    pass.pipe(writeStream)

    return {
      writeStream: pass,
      promise: Promise.resolve(),
      url: `${this.serverUrl}/${filePath}`,
      fileKey: filePath,
    }
  }

  async getDownloadStream(fileData: GetUploadedFileType): Promise<NodeJS.ReadableStream> {
    const filePath = `${fileData.isPrivate ? this.protectedPath : this.publicPath}/${fileData.fileKey}`
    return fs.createReadStream(filePath)
  }

  async getPresignedDownloadUrl(fileData: GetUploadedFileType): Promise<string> {
    const filePath = `${fileData.isPrivate ? this.protectedPath : this.publicPath}/${fileData.fileKey}`
    return `${this.serverUrl}/${filePath}`
  }
}

export default LocalFileService
