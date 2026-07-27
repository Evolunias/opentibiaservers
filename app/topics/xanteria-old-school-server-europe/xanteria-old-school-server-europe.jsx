import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-old-school-server-europe');
}

export default function XanteriaOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-old-school-server-europe" />;
}
