import { MedusaRequest, MedusaResponse } from "@medusajs/medusa"

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  const { storeName, subdomain } = req.body

  try {
    const salesChannelService = req.scope.resolve("salesChannelService")
    const salesChannel = await salesChannelService.create({ name: storeName })

    // TODO: Implement subdomain creation logic

    res.json({
      success: true,
      salesChannelId: salesChannel.id,
      subdomain: subdomain
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to create store"
    })
  }
}