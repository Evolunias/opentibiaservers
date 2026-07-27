import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-old-school-server-uk');
}

export default function XanteriaOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="xanteria-old-school-server-uk" />;
}
