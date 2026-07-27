import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-old-school-server-usa');
}

export default function XanteriaOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-old-school-server-usa" />;
}
