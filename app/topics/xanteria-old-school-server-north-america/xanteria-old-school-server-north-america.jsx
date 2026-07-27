import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-old-school-server-north-america');
}

export default function XanteriaOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-old-school-server-north-america" />;
}
