import { apiConstants } from '@/config/constants';
import { getPageBySlug } from '@/lib/api';

export async function GET() {
  const res = await getPageBySlug({ slug: apiConstants.home }, ['metadata'], {
    depth: 0,
  });

  return Response.json({ data: res });
}
