import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-old-school-server-chile');
}

export default function XanteriaOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="xanteria-old-school-server-chile" />;
}
