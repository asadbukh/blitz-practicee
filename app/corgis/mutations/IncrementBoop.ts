import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateCorgi = z.object({
  id: z.number(),
})

export default resolver.pipe(
  resolver.zod(UpdateCorgi),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const corgi = await db.corgi.update({ where: { id }, data: { boops: { increment: 1 } } })

    return corgi
  }
)
