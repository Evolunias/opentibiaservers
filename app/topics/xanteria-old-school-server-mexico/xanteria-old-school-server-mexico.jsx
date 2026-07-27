import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-old-school-server-mexico');
}

export default function XanteriaOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="xanteria-old-school-server-mexico" />;
}
