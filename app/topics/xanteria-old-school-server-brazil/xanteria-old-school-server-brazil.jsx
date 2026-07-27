import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-old-school-server-brazil');
}

export default function XanteriaOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="xanteria-old-school-server-brazil" />;
}
