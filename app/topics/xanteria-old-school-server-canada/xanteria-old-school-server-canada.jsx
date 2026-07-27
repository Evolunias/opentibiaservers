import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-old-school-server-canada');
}

export default function XanteriaOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-old-school-server-canada" />;
}
